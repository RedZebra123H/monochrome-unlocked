// Cloudflare Worker - CORS Proxy for Monochrome Unlocked
// Deploy this to Cloudflare Workers, then update CORS_PROXY_URL in js/api.js

const ALLOWED_ORIGINS = [
    'https://redzebra123h.github.io',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8000',
];

const ALLOWED_UPSTREAM_DOMAINS = [
    'qobuz.kennyy.com.br',
    'dzr.tabs-vs-spaces.wtf',
    'amz.geeked.wtf',
    't2a.geeked.wtf',
    'hifi.geeked.wtf',
    'eu-central.monochrome.tf',
    'us-west.monochrome.tf',
    'api.monochrome.tf',
    'monochrome-api.samidy.com',
    'maus.qqdl.site',
    'vogel.qqdl.site',
    'katze.qqdl.site',
    'hund.qqdl.site',
    'tidal.kinoplus.online',
    'wolf.qqdl.site',
    'tidal-uptime.geeked.wtf',
    'audio-proxy.binimum.org',
];

function getCorsHeaders(origin) {
    return {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Turnstile-JWT',
        'Access-Control-Max-Age': '86400',
    };
}

export default {
    async fetch(request, env) {
        const origin = request.headers.get('Origin') || '';

        // Handle preflight
        if (request.method === 'OPTIONS') {
            if (ALLOWED_ORIGINS.includes(origin)) {
                return new Response(null, { status: 204, headers: getCorsHeaders(origin) });
            }
            return new Response('Forbidden', { status: 403 });
        }

        // Validate origin
        if (origin && !ALLOWED_ORIGINS.includes(origin)) {
            return new Response('Forbidden', { status: 403 });
        }

        // Get target URL from query param
        const url = new URL(request.url);
        const target = url.searchParams.get('url');

        if (!target) {
            return new Response(JSON.stringify({ error: 'Missing ?url= parameter' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) },
            });
        }

        // Validate target domain
        let targetUrl;
        try {
            targetUrl = new URL(target);
        } catch {
            return new Response(JSON.stringify({ error: 'Invalid URL' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) },
            });
        }

        if (!ALLOWED_UPSTREAM_DOMAINS.includes(targetUrl.hostname)) {
            return new Response(JSON.stringify({ error: 'Domain not allowed' }), {
                status: 403,
                headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) },
            });
        }

        // Forward the request
        const headers = new Headers(request.headers);
        headers.delete('Origin');
        headers.delete('Referer');
        headers.set('Host', targetUrl.hostname);

        try {
            const response = await fetch(target, {
                method: request.method,
                headers,
                body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
            });

            // Return response with CORS headers
            const responseHeaders = new Headers(response.headers);
            const corsHeaders = getCorsHeaders(origin);
            for (const [key, value] of Object.entries(corsHeaders)) {
                responseHeaders.set(key, value);
            }

            return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: responseHeaders,
            });
        } catch (err) {
            return new Response(JSON.stringify({ error: 'Upstream request failed', details: err.message }), {
                status: 502,
                headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) },
            });
        }
    },
};
