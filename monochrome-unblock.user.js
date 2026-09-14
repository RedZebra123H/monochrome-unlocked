// ==UserScript==
// @name         Monochrome Unlocked
// @namespace    https://github.com/RedZebra123H/monochrome-unlocked
// @version      3.1
// @description  Removes artist and copyright blocking on Monochrome
// @author       RedZebra123H
// @match        https://monochrome.tf/*
// @match        https://monochrome.samidy.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // === STRATEGY ===
    // contentBlockingSettings is a module-scoped variable inside the bundled
    // index chunk — we cannot import or access it from a userscript. Instead
    // we patch at a lower level:
    //
    // 1. Array.prototype.map  → _hardcodedBlockedArtists() maps the IDs array
    //    into objects with {hardcoded:true}. We detect that output and return [].
    //
    // 2. Array.prototype.some → isHardcodedBlockedArtist() calls .some() on
    //    the IDs array with a String() comparison callback. We detect and
    //    return false.
    //
    // 3. localStorage         → return [] for blocked-artists/tracks/albums
    //
    // 4. Response.json         → strip copyright fields from API responses
    //
    // 5. CSS                   → make .blocked elements visible

    // --- 1. Patch Array.prototype.map ---
    // _hardcodedBlockedArtists() does:
    //   HARDCODED_BLOCKED_ARTIST_IDS.map(id => ({id, name:null, blockedAt:0, hardcoded:true}))
    // We let the map run, then check if the output has {hardcoded:true} objects.
    // If so, return [] — this empties the hardcoded blocklist at the source.
    var origMap = Array.prototype.map;
    Array.prototype.map = function (fn, thisArg) {
        var result = origMap.call(this, fn, thisArg);
        if (result.length > 0 && result[0] && result[0].hardcoded === true) {
            return [];
        }
        return result;
    };

    // --- 2. Patch Array.prototype.some ---
    // isHardcodedBlockedArtist() does:
    //   HARDCODED_BLOCKED_ARTIST_IDS.some(id => String(id) === String(artistId))
    // We detect: small array of numbers + callback uses String comparison.
    var origSome = Array.prototype.some;
    Array.prototype.some = function (fn, thisArg) {
        if (this.length > 0 && this.length <= 20 && typeof this[0] === 'number') {
            try {
                if (fn.toString().indexOf('String') !== -1) {
                    return false;
                }
            } catch (e) {}
        }
        return origSome.call(this, fn, thisArg);
    };

    // --- 3. localStorage: return empty blocked lists ---
    var originalGetItem = Storage.prototype.getItem;
    var originalSetItem = Storage.prototype.setItem;
    var BLOCKED_KEYS = new Set(['blocked-artists', 'blocked-tracks', 'blocked-albums']);

    Storage.prototype.getItem = function (key) {
        if (BLOCKED_KEYS.has(key)) return '[]';
        return originalGetItem.call(this, key);
    };

    Storage.prototype.setItem = function (key, value) {
        if (BLOCKED_KEYS.has(key)) return;
        return originalSetItem.call(this, key, value);
    };

    // --- 4. Strip "copyright" from API JSON responses ---
    var origJson = Response.prototype.json;
    Response.prototype.json = function () {
        return origJson.call(this).then(function (data) {
            removeCopyright(data);
            return data;
        });
    };

    function removeCopyright(obj) {
        if (!obj || typeof obj !== 'object') return;
        if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) removeCopyright(obj[i]);
            return;
        }
        delete obj.copyright;
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (typeof obj[keys[i]] === 'object') removeCopyright(obj[keys[i]]);
        }
    }

    // --- 5. CSS: make .blocked elements visible ---
    var style = document.createElement('style');
    style.textContent = [
        '.track-item.blocked, .card.blocked {',
        '  opacity: 1 !important;',
        '  pointer-events: auto !important;',
        '  text-decoration: none !important;',
        '}',
        '.track-item.blocked .title, .track-item.blocked .artist {',
        '  text-decoration: none !important;',
        '}',
    ].join('\n');
    document.addEventListener('DOMContentLoaded', function () {
        document.head.appendChild(style);
    });

    console.log('[MU] Monochrome Unlocked v3.1 loaded');
})();
