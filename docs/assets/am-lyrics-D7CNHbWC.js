import{g as mi}from"./_commonjsHelpers-Cpj98o6Y.js";function fi(_,X){for(var Z=0;Z<X.length;Z++){const q=X[Z];if(typeof q!="string"&&!Array.isArray(q)){for(const V in q)if(V!=="default"&&!(V in _)){const st=Object.getOwnPropertyDescriptor(q,V);st&&Object.defineProperty(_,V,st.get?st:{enumerable:!0,get:()=>q[V]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var ye={},ge;function yi(){if(ge)return ye;ge=1;function _(u,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(u,t,e,i);else for(var a=u.length-1;a>=0;a--)(n=u[a])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}typeof SuppressedError=="function"&&SuppressedError;const X=globalThis,Z=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),V=new WeakMap;let st=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&V.set(e,t))}return t}toString(){return this.cssText}};const ve=u=>new st(typeof u=="string"?u:u+"",void 0,q),xe=(u,...t)=>{const e=u.length===1?u[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+u[r+1],u[0]);return new st(e,u,q)},we=(u,t)=>{if(Z)u.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=X.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,u.appendChild(i)}},Ut=Z?u=>u:u=>u instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ve(e)})(u):u;const{is:Se,defineProperty:Ae,getOwnPropertyDescriptor:Te,getOwnPropertyNames:Le,getOwnPropertySymbols:$e,getPrototypeOf:ke}=Object,gt=globalThis,Ot=gt.trustedTypes,Ee=Ot?Ot.emptyScript:"",Ce=gt.reactiveElementPolyfillSupport,dt=(u,t)=>u,bt={toAttribute(u,t){switch(t){case Boolean:u=u?Ee:null;break;case Object:case Array:u=u==null?u:JSON.stringify(u)}return u},fromAttribute(u,t){let e=u;switch(t){case Boolean:e=u!==null;break;case Number:e=u===null?null:Number(u);break;case Object:case Array:try{e=JSON.parse(u)}catch{e=null}}return e}},Lt=(u,t)=>!Se(u,t),Dt={attribute:!0,type:String,converter:bt,reflect:!1,useDefault:!1,hasChanged:Lt};Symbol.metadata??=Symbol("metadata"),gt.litPropertyMetadata??=new WeakMap;let nt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Ae(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Te(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const a=s?.call(this);r?.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Dt}static _$Ei(){if(this.hasOwnProperty(dt("elementProperties")))return;const t=ke(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dt("properties"))){const e=this.properties,i=[...Le(e),...$e(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Ut(s))}else t!==void 0&&e.push(Ut(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:bt).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:bt;this._$Em=s;const a=n.fromAttribute(e,r.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){const n=this.constructor;if(s===!1&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??Lt)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:n}=r,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,r,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},nt[dt("elementProperties")]=new Map,nt[dt("finalized")]=new Map,Ce?.({ReactiveElement:nt}),(gt.reactiveElementVersions??=[]).push("2.1.2");const $t=globalThis,Bt=u=>u,vt=$t.trustedTypes,Nt=vt?vt.createPolicy("lit-html",{createHTML:u=>u}):void 0,Gt="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,qt="?"+K,Ie=`<${qt}>`,J=document,ht=()=>J.createComment(""),ut=u=>u===null||typeof u!="object"&&typeof u!="function",kt=Array.isArray,Me=u=>kt(u)||typeof u?.[Symbol.iterator]=="function",Et=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,jt=/>/g,tt=RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yt=/'/g,Vt=/"/g,Kt=/^(?:script|style|textarea|title)$/i,Qt=u=>(t,...e)=>({_$litType$:u,strings:t,values:e}),W=Qt(1),Xt=Qt(2),rt=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Zt=new WeakMap,et=J.createTreeWalker(J,129);function Jt(u,t){if(!kt(u)||!u.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nt!==void 0?Nt.createHTML(t):t}const Pe=(u,t)=>{const e=u.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",n=pt;for(let a=0;a<e;a++){const o=u[a];let c,d,l=-1,p=0;for(;p<o.length&&(n.lastIndex=p,d=n.exec(o),d!==null);)p=n.lastIndex,n===pt?d[1]==="!--"?n=Ht:d[1]!==void 0?n=jt:d[2]!==void 0?(Kt.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=tt):d[3]!==void 0&&(n=tt):n===tt?d[0]===">"?(n=s??pt,l=-1):d[1]===void 0?l=-2:(l=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?tt:d[3]==='"'?Vt:Yt):n===Vt||n===Yt?n=tt:n===Ht||n===jt?n=pt:(n=tt,s=void 0);const f=n===tt&&u[a+1].startsWith("/>")?" ":"";r+=n===pt?o+Ie:l>=0?(i.push(c),o.slice(0,l)+Gt+o.slice(l)+K+f):o+K+(l===-2?a:f)}return[Jt(u,r+(u[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class mt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const a=t.length-1,o=this.parts,[c,d]=Pe(t,e);if(this.el=mt.createElement(c,i),et.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=et.nextNode())!==null&&o.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(Gt)){const p=d[n++],f=s.getAttribute(l).split(K),h=/([.?@])?(.*)/.exec(p);o.push({type:1,index:r,name:h[2],strings:f,ctor:h[1]==="."?Re:h[1]==="?"?Fe:h[1]==="@"?We:xt}),s.removeAttribute(l)}else l.startsWith(K)&&(o.push({type:6,index:r}),s.removeAttribute(l));if(Kt.test(s.tagName)){const l=s.textContent.split(K),p=l.length-1;if(p>0){s.textContent=vt?vt.emptyScript:"";for(let f=0;f<p;f++)s.append(l[f],ht()),et.nextNode(),o.push({type:2,index:++r});s.append(l[p],ht())}}}else if(s.nodeType===8)if(s.data===qt)o.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(K,l+1))!==-1;)o.push({type:7,index:r}),l+=K.length-1}r++}}static createElement(t,e){const i=J.createElement("template");return i.innerHTML=t,i}}function at(u,t,e=u,i){if(t===rt)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const r=ut(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(u),s._$AT(u,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=at(u,s._$AS(u,t.values),s,i)),t}class _e{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??J).importNode(e,!0);et.currentNode=s;let r=et.nextNode(),n=0,a=0,o=i[0];for(;o!==void 0;){if(n===o.index){let c;o.type===2?c=new ft(r,r.nextSibling,this,t):o.type===1?c=new o.ctor(r,o.name,o.strings,this,t):o.type===6&&(c=new ze(r,this,t)),this._$AV.push(c),o=i[++a]}n!==o?.index&&(r=et.nextNode(),n++)}return et.currentNode=J,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ft{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=at(this,t,e),ut(t)?t===U||t==null||t===""?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==rt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Me(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==U&&ut(this._$AH)?this._$AA.nextSibling.data=t:this.T(J.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=mt.createElement(Jt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const r=new _e(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=Zt.get(t.strings);return e===void 0&&Zt.set(t.strings,e=new mt(t)),e}k(t){kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new ft(this.O(ht()),this.O(ht()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=Bt(t).nextSibling;Bt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class xt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=at(this,t,e,0),n=!ut(t)||t!==this._$AH&&t!==rt,n&&(this._$AH=t);else{const a=t;let o,c;for(t=r[0],o=0;o<r.length-1;o++)c=at(this,a[i+o],e,o),c===rt&&(c=this._$AH[o]),n||=!ut(c)||c!==this._$AH[o],c===U?t=U:t!==U&&(t+=(c??"")+r[o+1]),this._$AH[o]=c}n&&!s&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Re extends xt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}class Fe extends xt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==U)}}class We extends xt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=at(this,t,e,0)??U)===rt)return;const i=this._$AH,s=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==U&&(i===U||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ze{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){at(this,t)}}const Ue=$t.litHtmlPolyfillSupport;Ue?.(mt,ft),($t.litHtmlVersions??=[]).push("3.3.2");const Oe=(u,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const r=e?.renderBefore??null;i._$litPart$=s=new ft(t.insertBefore(ht(),r),r,void 0,e??{})}return s._$AI(u),s};const Ct=globalThis;class yt extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rt}}yt._$litElement$=!0,yt.finalized=!0,Ct.litElementHydrateSupport?.({LitElement:yt});const De=Ct.litElementPolyfillSupport;De?.({LitElement:yt}),(Ct.litElementVersions??=[]).push("4.2.2");const Be={attribute:!0,type:String,converter:bt,reflect:!1,hasChanged:Lt},Ne=(u=Be,t,e)=>{const{kind:i,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),i==="setter"&&((u=Object.create(u)).wrapped=!0),r.set(e.name,u),i==="accessor"){const{name:n}=e;return{set(a){const o=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,o,u,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,u,a),a}}}if(i==="setter"){const{name:n}=e;return function(a){const o=this[n];t.call(this,a),this.requestUpdate(n,o,u,!0,a)}}throw Error("Unsupported decorator location: "+i)};function O(u){return(t,e)=>typeof e=="object"?Ne(u,t,e):((i,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(u,t,e)}function Q(u){return O({...u,state:!0,attribute:!1})}const Ge=(u,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(u,t,e),e);function qe(u,t){return(e,i,s)=>{const r=n=>n.renderRoot?.querySelector(u)??null;return Ge(e,i,{get(){return r(this)}})}}const H={GOOGLE:{MAX_RETRIES:3,RETRY_DELAY_MS:1e3,FETCH_TIMEOUT_MS:6e3}};class j{static delay(t){return new Promise(e=>{setTimeout(e,t)})}static fetchWithTimeout(t,e=H.GOOGLE.FETCH_TIMEOUT_MS){const i=new AbortController,s=setTimeout(()=>i.abort(),e);return fetch(t,{signal:i.signal}).finally(()=>clearTimeout(s))}static isPurelyLatinScript(t){return/^[\u0000-\u007F\u0080-\u00FF\u0100-\u017F\u0180-\u024F]*$/.test(t)}static async translate(t,e){if(!t||Array.isArray(t)&&t.length===0)return Array.isArray(t)?[]:"";const i=Array.isArray(t),s=i?t:[t],r=[],n=[];if(s.forEach((h,y)=>{h&&h.trim()&&(r.push(y),n.push(h))}),n.length===0)return i?s:s[0];const a=1500,o=new Array(n.length).fill("");let c=[],d=[],l=0;const p=async(h,y)=>{if(h.length===0)return;const k=h.join(`
`);let x=0,b=!1;for(;x<H.GOOGLE.MAX_RETRIES&&!b;)try{const w=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${e}&dt=t&q=${encodeURIComponent(k)}`,T=await j.fetchWithTimeout(w);if(!T.ok)throw new Error(`Status ${T.status}`);const v=((await T.json())?.[0]?.map(g=>g?.[0]).join("")||"").split(`
`);y.forEach((g,A)=>{A<v.length?o[g]=v[A]:o[g]=h[A]}),b=!0}catch{x+=1,x<H.GOOGLE.MAX_RETRIES?await j.delay(H.GOOGLE.RETRY_DELAY_MS*2**(x-1)):y.forEach((T,I)=>{o[T]=h[I]})}};for(let h=0;h<n.length;h+=1){const y=n[h];l+y.length>a&&(await p(c,d),c=[],d=[],l=0),c.push(y),d.push(h),l+=y.length}c.length>0&&await p(c,d);const f=[...s];return r.forEach((h,y)=>{f[h]=o[y]}),i?f:f[0]}static async romanize(t){const e=Array.isArray(t)?t:t.data||t.content||[];return!e||e.length===0?Array.isArray(t)?t:[]:e.some(s=>s.isWordSynced!==!1&&Array.isArray(s.text)&&s.text.length>1)?this.romanizeWordSynced(e):this.romanizeLineSynced(e)}static async romanizeWordSynced(t){return Promise.all(t.map(async e=>{if(!e.text||!Array.isArray(e.text)||e.text.length===0||e.romanizedText)return e;const i=e.text.map(n=>n.text).join(""),[s]=await this.romanizeTexts([i]),r=e.text.map(n=>({...n,romanizedText:n.romanizedText}));return{...e,text:r,romanizedText:s||""}}))}static async romanizeLineSynced(t){const e=t.map(s=>s.romanizedText?"":Array.isArray(s.text)&&s.text.length>0?s.text.map(r=>r.text).join(""):""),i=await this.romanizeTexts(e);return t.map((s,r)=>({...s,romanizedText:i[r]||""}))}static async romanizeTexts(t){const e=t.join(" ");if(j.isPurelyLatinScript(e))return t;const i=[];for(const s of t)if(!s||j.isPurelyLatinScript(s))i.push(s);else{let r=0,n=!1,a=null;for(;r<H.GOOGLE.MAX_RETRIES&&!n;)try{const o=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=rm&q=${encodeURIComponent(s)}`,l=(await(await j.fetchWithTimeout(o)).json())?.[0]?.[0]?.[3]||s;i.push(l),n=!0}catch(o){a=o,console.warn(`GoogleService: Error romanizing text "${s}" (attempt ${r+1}/${H.GOOGLE.MAX_RETRIES}):`,o),r+=1,r<H.GOOGLE.MAX_RETRIES&&await j.delay(H.GOOGLE.RETRY_DELAY_MS*2**(r-1))}n||(console.error(`GoogleService: Failed to romanize text "${s}" after ${H.GOOGLE.MAX_RETRIES} attempts. Last error:`,a),i.push(s))}return i}}const te="1.5.4",wt=7e3,He=8e3,je=500,ee=350,It=4e3,ot=It*2,lt=600,Ye=.85;function Y(u,t={},e=He){const i=new AbortController,s=setTimeout(()=>i.abort(),e);return fetch(u,{...t,signal:i.signal}).finally(()=>clearTimeout(s))}const ie=["https://lyricsplus.binimum.org","https://lyricsplus-seven.vercel.app","https://lyricsplus.prjktla.workers.dev","https://lyrics-plus-backend.vercel.app"],se="apple,lyricsplus,musixmatch,spotify,qq,deezer,musixmatch-word",Ve="https://fetch-genius.samidy.workers.dev/";class m extends yt{constructor(){super(...arguments),this.downloadFormat="auto",this.highlightColor="#ffffff",this.autoScroll=!0,this.interpolate=!0,this.showRomanization=!1,this.showTranslation=!1,this._currentTime=0,this.isLoading=!1,this.activeLineIndices=[],this.activeMainWordIndices=new Map,this.activeBackgroundWordIndices=new Map,this.mainWordProgress=new Map,this.backgroundWordProgress=new Map,this.lyricsSource=null,this.availableSources=[],this.currentSourceIndex=0,this.isFetchingAlternatives=!1,this.hasFetchedAllProviders=!1,this.mainWordAnimations=new Map,this.backgroundWordAnimations=new Map,this.lastInstrumentalIndex=null,this.isUserScrolling=!1,this.isProgrammaticScroll=!1,this.isClickSeeking=!1,this.cachedLyricsLines=[],this.cachedLineArray=[],this.lineElementCache=new Map,this.gapElementCache=new Map,this.cachedAllGaps=[],this.cachedIsUnsynced=!1,this.cachedLineData=null,this.activeLineIds=new Set,this.currentPrimaryActiveLine=null,this.lastPrimaryActiveLine=null,this.scrollAnimationState=null,this.currentScrollOffset=0,this.animatingLines=[],this.lastActiveIndex=0,this.visibleLineIds=new Set,this.cachedScrollPaddingTop=null,this.preActiveLineElements=[],this.positionedLineElements=[],this.activeGapLineElements=[],this._boundHandleUserScroll=this.handleUserScroll.bind(this),this._boundAnimateProgress=this.animateProgress.bind(this)}async toggleRomanization(){this.showRomanization=!this.showRomanization,await this.applyRomanization()}async applyRomanization(){if(this.showRomanization&&this.lyrics&&this.lyrics.some(e=>!e.romanizedText&&(!e.text||!e.text.some(i=>i.romanizedText)))){this.isLoading=!0;try{const e=await j.romanize(this.lyrics);this.lyrics=e}catch(e){console.error("Romanization failed",e)}finally{this.isLoading=!1}}}async toggleTranslation(){this.showTranslation=!this.showTranslation,await this.applyTranslation()}async applyTranslation(){if(this.showTranslation&&this.lyrics&&this.lyrics.some(e=>!e.translation)){this.isLoading=!0;try{const e=this.lyrics.map(n=>n.translation?"":n.text.map(a=>a.text).join(""));if(e.every(n=>!n)){this.isLoading=!1;return}const i=await j.translate(e,"en"),s=Array.isArray(i)?i:[i],r=this.lyrics.map((n,a)=>n.translation?n:{...n,translation:s[a]||void 0});this.lyrics=r}catch(e){console.error("Translation failed",e)}finally{this.isLoading=!1}}}set currentTime(t){const e=this._currentTime;t<e&&e-t>1e3&&this.lyrics&&(this.activeLineIndices=[],this.activeMainWordIndices.clear(),this.activeBackgroundWordIndices.clear(),this.mainWordProgress.clear(),this.backgroundWordProgress.clear(),this.mainWordAnimations.clear(),this.backgroundWordAnimations.clear(),this.preActiveLineElements=[],this.positionedLineElements=[],this.activeGapLineElements=[],this.lyricsContainer&&(this.lyricsContainer.querySelectorAll(".lyrics-line.active, .lyrics-line.pre-active, .lyrics-line.bg-expanded").forEach(r=>{r.classList.remove("active","pre-active","bg-expanded"),m.resetSyllables(r)}),this.lyricsContainer.querySelectorAll(".lyrics-gap.active, .lyrics-gap.gap-exiting").forEach(r=>r.classList.remove("active","gap-exiting")),this.gapElementCache.clear())),this._currentTime=t,e!==t&&this.lyrics&&this._onTimeChanged(e,t)}get currentTime(){return this._currentTime}_updateFooter(){const t=this.shadowRoot?.querySelector(".lyrics-footer");if(!t)return;const e=t.querySelector(".source-switch-btn"),i=t.querySelector(".source-switch-svg"),s=t.querySelector(".source-switch-label");e&&(e.disabled=this.isFetchingAlternatives),i&&i.setAttribute("style",`margin-right: 4px; ${this.isFetchingAlternatives?"animation: spin 1s linear infinite;":""}`),s&&(s.textContent=this.isFetchingAlternatives?"Switching...":"Switch")}connectedCallback(){super.connectedCallback(),this.fetchLyrics()}disconnectedCallback(){super.disconnectedCallback(),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0),this.userScrollTimeoutId&&(clearTimeout(this.userScrollTimeoutId),this.userScrollTimeoutId=void 0),this.clickSeekTimeout&&(clearTimeout(this.clickSeekTimeout),this.clickSeekTimeout=void 0),this.scrollAnimationTimeout&&(clearTimeout(this.scrollAnimationTimeout),this.scrollAnimationTimeout=void 0),this.scrollUnlockTimeout&&(clearTimeout(this.scrollUnlockTimeout),this.scrollUnlockTimeout=void 0),this.fetchAbortController?.abort(),this.fetchAbortController=void 0,this.lyricsContainer&&(this.lyricsContainer.removeEventListener("wheel",this._boundHandleUserScroll),this.lyricsContainer.removeEventListener("touchmove",this._boundHandleUserScroll)),this.preActiveLineElements=[],this.positionedLineElements=[],this.activeGapLineElements=[],this.visibilityObserver?.disconnect(),this.visibilityObserver=void 0}async fetchLyrics(){this.fetchAbortController?.abort();const t=new AbortController;this.fetchAbortController=t,this.isLoading=!0,this.lyrics=void 0,this.lyricsSource=null,this.availableSources=[],this.currentSourceIndex=0,this.isFetchingAlternatives=!1,this.hasFetchedAllProviders=!1,this._updateFooter();try{if(this.ttml){const n=m.parseTTML(this.ttml);if(n&&n.lines.length>0){this.lyrics=n.lines,this.lyricsSource="Local",n.songwriters&&(this.songwriters=n.songwriters),this.availableSources=[{lines:this.lyrics,source:"Local",songwriters:this.songwriters}],this.currentSourceIndex=0,this.hasFetchedAllProviders=!0,this._updateFooter(),await this.onLyricsLoaded();return}}const e=await this.resolveSongMetadata();if(t.signal.aborted)return;const i=!!this.musicId&&!this.songTitle&&!this.songArtist&&!this.query&&!this.isrc,s=[];if(e?.metadata&&!i){const n=e.metadata.title?.trim()||"",a=e.metadata.artist?.trim()||"",o=await m.fetchLyricsFromBiniLyrics(n,a,e.catalogIsrc,e.metadata);o&&o.lines.length>0&&s.push(o);const c=d=>d.some(l=>l.lines.some(p=>p.isWordSynced||p.text&&p.text.length>1));if(s.length===0||!c(s)){const d=await m.fetchLyricsFromUnison(e.metadata);d&&d.lines.length>0&&s.push(d)}if(s.length===0||!c(s)){const d=await m.fetchLyricsFromYouLyPlus(n,a,e.catalogIsrc,e.metadata,!0);d&&d.length>0&&s.push(...d)}}const r=n=>n.some(a=>a.lines.some(o=>o.timestamp>0||o.endtime>0));if((s.length===0||!r(s))&&e?.metadata){const n=await m.fetchLyricsFromLrclib(e.metadata);n&&n.lines.length>0&&s.push({lines:n.lines,source:"LRCLIB"})}if(s.length===0&&e?.metadata){const n=await m.fetchLyricsFromGenius(e.metadata);n&&n.lines.length>0&&s.push({lines:n.lines,source:"Genius"})}if(this.hasFetchedAllProviders=s.length===0||s.some(n=>n.source==="LRCLIB"||n.source==="Genius"),this._updateFooter(),s.length>0){this.availableSources=m.mergeAndSortSources(s),this.currentSourceIndex=0;const n=this.availableSources[0];this.lyrics=n.lines,this.lyricsSource=n.source,n.songwriters&&(this.songwriters=n.songwriters),await this.onLyricsLoaded();return}this.lyrics=void 0,this.lyricsSource=null}finally{t.signal.aborted||(this.isLoading=!1)}}async onLyricsLoaded(){this.activeLineIndices=[],this.activeMainWordIndices.clear(),this.activeBackgroundWordIndices.clear(),this.mainWordProgress.clear(),this.backgroundWordProgress.clear(),this.mainWordAnimations.clear(),this.backgroundWordAnimations.clear(),this.preActiveLineElements=[],this.positionedLineElements=[],this.activeGapLineElements=[],this.lyricsContainer&&(this.isProgrammaticScroll=!0,this.lyricsContainer.scrollTop=0,window.setTimeout(()=>{this.isProgrammaticScroll=!1},100)),await this.autoProcessLyrics()}async autoProcessLyrics(){this.showRomanization&&await this.applyRomanization(),this.showTranslation&&await this.applyTranslation()}static getRankForCollected(t,e){const i=t.toLowerCase(),s=e.some(a=>a.text&&Array.isArray(a.text)&&a.text.length>1),r=e.length>0&&e.every(a=>a.timestamp===0&&a.endtime===0),n=i.includes("qq")||i.includes("lyricsplus");return i.includes("apple")&&s?1:i.includes("bini")&&s?2:i.includes("unison")&&s?3:n&&s?4:i.includes("musixmatch")&&s?5:i.includes("lrclib")&&s?6:s?7:i.includes("apple")&&!s&&!r?8:i.includes("bini")&&!s&&!r?9:i.includes("unison")&&!s&&!r?10:n&&!s&&!r?11:i.includes("musixmatch")&&!s&&!r?12:i.includes("lrclib")&&!s&&!r?13:!s&&!r?14:i.includes("apple")&&r?15:i.includes("bini")&&r?16:i.includes("unison")&&r?17:n&&r?18:i.includes("musixmatch")&&r?19:i.includes("lrclib")&&r?20:i.includes("genius")?21:30}static mergeAndSortSources(t){const e=new Map;for(const i of t){const s=i.source.toLowerCase().includes("lyricsplus")?"QQ":i.source;e.has(s)||e.set(s,{...i,source:s})}return Array.from(e.values()).sort((i,s)=>m.getRankForCollected(i.source,i.lines)-m.getRankForCollected(s.source,s.lines))}async switchSource(){if(!this.isFetchingAlternatives){if(!this.hasFetchedAllProviders){this.isFetchingAlternatives=!0,this._updateFooter();try{const t=await this.resolveSongMetadata();if(t?.metadata){const e=[];if(!this.availableSources.some(i=>i.source.toLowerCase().includes("unison"))){const i=await m.fetchLyricsFromUnison(t.metadata);i&&i.lines.length>0&&e.push(i)}if(!this.availableSources.some(i=>i.source.toLowerCase().includes("apple")||i.source.toLowerCase().includes("qq"))){const i=t.metadata.title?.trim()||"",s=t.metadata.artist?.trim()||"",r=await m.fetchLyricsFromYouLyPlus(i,s,t.catalogIsrc,t.metadata,!0);r&&r.length>0&&e.push(...r)}if(!this.availableSources.some(i=>i.source.toLowerCase().includes("lrclib"))){const i=await m.fetchLyricsFromLrclib(t.metadata);i&&i.lines.length>0&&e.push({lines:i.lines,source:"LRCLIB"})}if(!this.availableSources.some(i=>i.source.toLowerCase().includes("genius"))){const i=await m.fetchLyricsFromGenius(t.metadata);i&&i.lines.length>0&&e.push({lines:i.lines,source:"Genius"})}e.length>0&&(this.availableSources=m.mergeAndSortSources([...this.availableSources,...e]),this.currentSourceIndex=this.availableSources.findIndex(i=>i.source===this.lyricsSource),this.currentSourceIndex===-1&&(this.currentSourceIndex=0))}}finally{this.hasFetchedAllProviders=!0,this.isFetchingAlternatives=!1,this._updateFooter()}}if(this.availableSources.length>1){this.currentSourceIndex=(this.currentSourceIndex+1)%this.availableSources.length;const t=this.availableSources[this.currentSourceIndex];this.lyrics=t.lines,this.lyricsSource=t.source,t.songwriters&&(this.songwriters=t.songwriters),await this.onLyricsLoaded()}}}async resolveSongMetadata(){const t={title:this.songTitle?.trim()??"",artist:this.songArtist?.trim()??"",album:this.songAlbum?.trim()||void 0,songwriters:this.songwriters?.trim()||void 0,durationMs:void 0};typeof this.songDurationMs=="number"&&this.songDurationMs>0?t.durationMs=this.songDurationMs:typeof this.duration=="number"&&this.duration>0&&(t.durationMs=this.duration);const e=null;let i=this.musicId,s=this.isrc;if(this.query&&(!t.title||!t.artist||!t.album)){const l=m.parseQueryMetadata(this.query);l&&(!t.title&&l.title&&(t.title=l.title),!t.artist&&l.artist&&(t.artist=l.artist),!t.album&&l.album&&(t.album=l.album))}let r=null;this.query&&(!t.title||!t.artist)&&(r=await m.searchLyricsPlusCatalog(this.query),r&&(!t.title&&r.title&&(t.title=r.title),!t.artist&&r.artist&&(t.artist=r.artist),!t.album&&r.album&&(t.album=r.album),!t.songwriters&&r.songwriters&&(t.songwriters=r.songwriters),t.durationMs==null&&typeof r.durationMs=="number"&&r.durationMs>0&&(t.durationMs=r.durationMs),!i&&r.id?.appleMusic&&(i=r.id.appleMusic),!s&&r.isrc&&(s=r.isrc)));const n=t.title?.trim()??"",a=t.artist?.trim()??"",o=t.album?.trim(),c=typeof t.durationMs=="number"&&Number.isFinite(t.durationMs)&&t.durationMs>0?Math.round(t.durationMs):void 0;return{metadata:n&&a?{title:n,artist:a,album:o||void 0,durationMs:c}:void 0,appleId:i,appleSong:e,catalogIsrc:s}}static parseQueryMetadata(t){const e=t?.trim();if(!e)return null;const i={},s=e.split(/\s[-–—]\s/);if(s.length>=2){const[n,...a]=s,o=a.join(" - "),c=n.trim(),d=o.trim();if(c&&d)return i.title=c,i.artist=d,i}const r=e.split(/\s+[bB]y\s+/);if(r.length===2){const[n,a]=r.map(o=>o.trim());if(n&&a)return i.title=n,i.artist=a,i}return null}static async searchLyricsPlusCatalog(t){const e=t?.trim();if(!e)return null;for(const i of ie){const r=`${i.endsWith("/")?i.slice(0,-1):i}/v1/songlist/search?q=${encodeURIComponent(e)}`;try{const n=await Y(r);if(n.ok){const a=await n.json();let o=[];const c=a;if(Array.isArray(c?.results)?o=c.results:Array.isArray(a)&&(o=a),o.length>0)return o.find(l=>l?.id&&l.id.appleMusic)??o[0]}}catch{}}return null}static async fetchLyricsFromBiniLyrics(t,e,i,s={}){if((!t||!e)&&!i)return null;try{let r=null;if(i)try{const n=`https://lyrics-api.binimum.org/?isrc=${encodeURIComponent(i)}`,a=await Y(n);if(a.ok){const o=await a.json();o.results&&o.results.length>0&&(r=o)}}catch{}if(!r&&t&&e){const n=new URLSearchParams({track:t,artist:e});s.album&&n.append("album",s.album),s.durationMs&&s.durationMs>0&&n.append("duration",Math.round(s.durationMs/1e3).toString());const a=`https://lyrics-api.binimum.org/?${n.toString()}`,o=await Y(a);o.ok&&(r=await o.json())}if(r&&r.results&&r.results.length>0){const n=r.results[0];if(n.lyricsUrl){const a=await Y(n.lyricsUrl);if(a.ok){const o=await a.text(),c=m.parseTTML(o);if(c&&c.lines.length>0)return{lines:c.lines,source:"BiniLyrics",songwriters:c.songwriters}}}}}catch(r){console.error("Cache API failed",r)}return null}static async fetchLyricsFromYouLyPlus(t,e,i,s={},r=!1){if((!t||!e)&&!i)return[];const n=new URLSearchParams;t&&n.append("title",t),e&&n.append("artist",e),i&&n.append("isrc",i),s.album&&n.append("album",s.album),s.durationMs&&s.durationMs>0&&n.append("duration",Math.round(s.durationMs/1e3).toString()),se.includes("apple")||n.append("source",se);const a=(l,p)=>{const f=l.toLowerCase(),h=p.some(x=>x.text&&Array.isArray(x.text)&&x.text.length>1),y=p.length>0&&p.every(x=>x.timestamp===0&&x.endtime===0),k=f.includes("qq")||f.includes("lyricsplus");return f.includes("apple")&&h?1:f.includes("bini")&&h?2:f.includes("unison")&&h?3:k&&h?4:f.includes("musixmatch")&&h?5:h?6:f.includes("apple")&&!h&&!y?7:f.includes("bini")&&!h&&!y?8:f.includes("unison")&&!h&&!y?9:k&&!h&&!y?10:f.includes("musixmatch")&&!h&&!y?11:!h&&!y?12:f.includes("apple")&&y?13:f.includes("bini")&&y?14:f.includes("unison")&&y?15:k&&y?16:f.includes("musixmatch")&&y?17:30},o=[];if(!r){const l=await m.fetchLyricsFromBiniLyrics(t,e,i,s);if(l)return o.push(l),o}const c=[...ie].sort(()=>Math.random()-.5).slice(0,3);for(const l of c){const f=`${l.endsWith("/")?l.slice(0,-1):l}/v2/lyrics/get?${n.toString()}`;let h=null;try{const y=await Y(f);y.ok&&(h=await y.json())}catch{h=null}if(h){const y=m.convertKPoeLyrics(h);if(y&&y.length>0){const k=h?.metadata?.source||h?.metadata?.provider||"LyricsPlus (KPoe)",x=a(k,y),b={lines:y,source:k};if(o.push(b),x===1)break}}}if(!o.some(l=>a(l.source,l.lines)<=2))try{const p=`https://lyricsplus.binimum.org/v2/lyrics/get?${new URLSearchParams(n).toString()}`,f=await Y(p);if(f.ok){const h=await f.json();if(h){const y=m.convertKPoeLyrics(h),k=h?.metadata?.source||h?.metadata?.provider||"LyricsPlus (KPoe)",x=y?.some(b=>b.text&&Array.isArray(b.text)&&b.text.length>1);y&&y.length>0&&x&&o.push({lines:y,source:k})}}}catch{}return o}static parseLrcSubtitles(t){if(!t||typeof t!="string")return[];const e=[],i=t.split(`
`),s=[];for(const r of i){const n=r.match(/^\[(\d{1,3}):(\d{2})\.(\d{2,3})\]\s?(.*)$/);if(!n)continue;const a=parseInt(n[1],10),o=parseInt(n[2],10);let c=parseInt(n[3],10);n[3].length===3&&(c=Math.round(c/10));const d=(a*60+o)*1e3+c*10,l=n[4]||"";s.push({timestamp:d,text:l})}for(let r=0;r<s.length;r+=1){const{timestamp:n,text:a}=s[r],o=r+1<s.length?s[r+1].timestamp:n+5e3;if(!a.trim())continue;const c={text:a,part:!1,timestamp:n,endtime:o,lineSynced:!0};e.push({text:[c],background:!1,backgroundText:[],oppositeTurn:!1,timestamp:n,endtime:o,isWordSynced:!1})}return e}static async fetchLyricsFromLrclib(t){const e=t.title?.trim(),i=t.artist?.trim();if(!e||!i)return null;try{const s=`${i} ${e}`,r=new URLSearchParams({q:s}),n=await Y(`https://lrclib.net/api/search?${r.toString()}`,{headers:{"User-Agent":`apple-music-web-components/${te}`}});if(!n.ok)return null;const a=await n.json();if(!Array.isArray(a)||a.length===0)return null;const c=a.find(d=>d.syncedLyrics&&typeof d.syncedLyrics=="string")||a[0];if(c.syncedLyrics){const d=m.parseLrcSubtitles(c.syncedLyrics);if(d.length>0)return{lines:d,source:"LRCLIB"}}if(c.plainLyrics&&typeof c.plainLyrics=="string"){const d=c.plainLyrics.split(`
`).filter(l=>l.trim());if(d.length>0)return{lines:d.map(p=>({text:[{text:p,part:!1,timestamp:0,endtime:0}],background:!1,backgroundText:[],oppositeTurn:!1,timestamp:0,endtime:0,isWordSynced:!1})),source:"LRCLIB (unsynced)"}}}catch{}return null}static async fetchLyricsFromGenius(t){const e=t.title?.trim(),i=t.artist?.trim();if(!e||!i)return null;try{const s=new URLSearchParams({title:e,artist:i}),r=await Y(`${Ve}?${s.toString()}`);if(!r.ok)return null;const n=await r.json();if(n.lyrics){const a=n.lyrics.split(`
`).map(o=>o.trim()).filter(o=>o&&!o.startsWith("["));if(a.length>0)return{lines:a.map(c=>({text:[{text:c,part:!1,timestamp:0,endtime:0}],background:!1,backgroundText:[],oppositeTurn:!1,timestamp:0,endtime:0,isWordSynced:!1})),source:"Genius"}}}catch{}return null}static async fetchLyricsFromUnison(t){const e=t.title?.trim(),i=t.artist?.trim();if(!e||!i)return null;const s=new URLSearchParams;s.append("song",e),s.append("artist",i),t.album&&s.append("album",t.album),t.durationMs&&t.durationMs>0&&s.append("duration",Math.round(t.durationMs/1e3).toString());try{const r=await Y(`https://unison.boidu.dev/lyrics?${s.toString()}`);if(!r.ok)return null;const n=await r.json();if(!n.success||!n.data?.lyrics)return null;const a=n.data,o=a.format||"lrc",c=a.syncType||"linesync",d=a.lyrics;if(o==="ttml"){const l=m.parseTTML(d);if(l&&l.lines.length>0)return{lines:l.lines,source:"Unison",songwriters:l.songwriters}}if(o==="lrc")if(c==="plain"){const l=d.split(`
`).map(p=>p.trim()).filter(p=>p);if(l.length>0)return{lines:l.map(f=>({text:[{text:f,part:!1,timestamp:0,endtime:0}],background:!1,backgroundText:[],oppositeTurn:!1,timestamp:0,endtime:0,isWordSynced:!1})),source:"Unison (unsynced)"}}else{const l=m.parseLrcSubtitles(d);if(l.length>0)return{lines:l,source:"Unison"}}}catch{}return null}static calculateLineAlignments(t,e){const i=new Array(t.length).fill(void 0);let s=!0,r=null,n=0,a=0;if(t.forEach((o,c)=>{let d;if(o){let l=e[o];l||(o==="v1000"?l="group":o==="v2000"?l="other":l="person"),l==="group"?d="start":(r===null?l==="other"?s=!1:s=!0:o!==r&&(s=!s),d=s?"start":"end",r=o)}d&&(a+=1,d==="end"&&(n+=1)),i[c]=d}),a>0&&Math.round(n/a*100)>=85){const o=c=>c==="start"?"end":c==="end"?"start":c;for(let c=0;c<i.length;c+=1)i[c]=o(i[c])}return i}static parseTTML(t){try{const i=new DOMParser().parseFromString(t,"text/xml"),s={},r={},n={},a=i.getElementsByTagName("ttm:agent");for(let x=0;x<a.length;x+=1){const b=a[x],w=b.getAttribute("xml:id"),T=b.getAttribute("type");w&&T&&(n[w]=T)}let o;const c=i.getElementsByTagName("songwriter");if(c.length>0){const x=[];for(let b=0;b<c.length;b+=1)c[b].textContent&&x.push(c[b].textContent);x.length>0&&(o=x.join(", "))}const d=i.getElementsByTagName("translation");for(let x=0;x<d.length;x+=1){const b=d[x].getElementsByTagName("text");for(let w=0;w<b.length;w+=1){const T=b[w],I=T.getAttribute("for");I&&T.textContent&&(s[I]=T.textContent)}}const l=x=>{if(!x)return 0;const b=x.split(":");let w=0;return b.length===2?w=parseInt(b[0],10)*60+parseFloat(b[1]):b.length===3?w=parseInt(b[0],10)*3600+parseInt(b[1],10)*60+parseFloat(b[2]):w=parseFloat(b[0]),Math.round(w*1e3)},p=i.getElementsByTagName("transliteration");for(let x=0;x<p.length;x+=1){const b=p[x].getElementsByTagName("text");for(let w=0;w<b.length;w+=1){const T=b[w],I=T.getAttribute("for");if(!I)continue;const L=Array.from(T.getElementsByTagName("span")).filter(v=>v.getAttribute("begin"));if(L.length>0){const v=[];let g="";for(let A=0;A<L.length;A+=1){const M=L[A],E=M.getAttribute("begin"),R=M.getAttribute("end");let P=M.textContent||"";const C=M.nextSibling;C&&C.nodeType===3&&/^\s/.test(C.textContent||"")&&!P.endsWith(" ")&&(P+=" "),P.trim()!==""&&(v.push({time:l(E),duration:l(R)-l(E),text:P}),g+=P)}r[I]={text:g.trim(),syllabus:v}}else T.textContent&&(r[I]={text:T.textContent.trim().replace(/\s+/g," ")})}}const f=[],h=i.getElementsByTagName("p"),y=[];for(let x=0;x<h.length;x+=1)y.push(h[x].getAttribute("ttm:agent")||void 0);const k=m.calculateLineAlignments(y,n);for(let x=0;x<h.length;x+=1){const b=h[x],w=b.getAttribute("itunes:key"),T=l(b.getAttribute("begin")),I=l(b.getAttribute("end"));let L;b.parentNode&&b.parentNode.tagName==="div"&&(L=b.parentNode.getAttribute("itunes:songPart")||void 0);const v=[],g=[],A=b.getElementsByTagName("span");if(A.length>0)for(let R=0;R<A.length;R+=1){const P=A[R];if(P.getAttribute("ttm:role")==="x-bg"){const S=P.getElementsByTagName("span");for(let F=0;F<S.length;F+=1){const z=S[F];let B=z.textContent||"";const D=z.nextSibling;D&&D.nodeType===3&&/^\s/.test(D.textContent||"")&&!B.endsWith(" ")&&(B+=" "),g.push({text:B,timestamp:l(z.getAttribute("begin")),endtime:l(z.getAttribute("end")),part:!/\s$/.test(B)})}continue}if(P.parentNode&&P.parentNode.getAttribute?.("ttm:role")==="x-bg")continue;let C=P.textContent||"";const $=P.nextSibling;$&&$.nodeType===3&&/^\s/.test($.textContent||"")&&!C.endsWith(" ")&&(C+=" "),v.push({text:C,timestamp:l(P.getAttribute("begin")),endtime:l(P.getAttribute("end")),part:!/\s$/.test(C)})}else v.push({text:b.textContent?.trim()||"",timestamp:T,endtime:I,part:!1,lineSynced:!0});const M=k[x],E=w?r[w]:void 0;if(E&&v.length>1&&A.length>0)if(E.syllabus&&E.syllabus.length===v.length)v.forEach((R,P)=>{R.romanizedText=E.syllabus[P].text});else{const P=E.text.split(/\s+/).filter(Boolean),C=[];for(let S=0;S<v.length;S+=1)v[S].part&&C.length>0?C[C.length-1].push(S):C.push([S]);const $=/[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/.test(v.map(S=>S.text).join(""));if(P.length===C.length)C.forEach((S,F)=>{v[S[0]].romanizedText=P[F]});else if(P.length===v.length)v.forEach((S,F)=>{S.romanizedText=P[F]});else if($){let S=0;for(const F of C){const z=v[F[0]],ct=(F.map(Mt=>v[Mt].text).join("").match(/[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7afA-Za-z0-9]/g)||[]).length;ct>0&&S<P.length&&(z.romanizedText=P.slice(S,S+ct).join(" "),S+=ct)}}}f.push({text:v,background:g.length>0,backgroundText:g,timestamp:T,endtime:I,isWordSynced:A.length>0,alignment:M,songPart:L,translation:w?s[w]:void 0,romanizedText:E?.text,oppositeTurn:M==="end"})}return{lines:f,songwriters:o}}catch(e){return console.error("Failed to parse TTML",e),null}}static convertKPoeLyrics(t){if(!t)return null;let e=null;if(Array.isArray(t?.lyrics)?e=t.lyrics:Array.isArray(t?.data?.lyrics)?e=t.data.lyrics:Array.isArray(t?.data)&&(e=t.data),!e||e.length===0)return null;const i=e.filter(c=>!!c),s=[],r=t.type==="Line"||t.type==="line",n={};t.metadata?.agents&&Object.entries(t.metadata.agents).forEach(([c,d])=>{const l=d.alias||c;n[l]=d.type});const a=i.map(c=>c.element?.singer),o=m.calculateLineAlignments(a,n);for(let c=0;c<i.length;c+=1){const d=i[c],l=m.toMilliseconds(d.time),p=m.toMilliseconds(d.duration),f=o[c],h=typeof d.text=="string"?d.text:"",y=m.toMilliseconds(d.time),k=m.toMilliseconds(d.duration),b=m.toMilliseconds(d.endTime)||y+(k||0);let w=[];Array.isArray(d.syllabus)?w=d.syllabus.filter(E=>!!E):Array.isArray(d.words)&&(w=d.words.filter(E=>!!E));const T=[],I=[];if(!r&&w.length>0)for(const E of w){const R=m.toMilliseconds(E.time,y),P=m.toMilliseconds(E.duration),C=P===0&&w.length===1?b:R+P,$={text:typeof E.text=="string"?E.text:"",part:!!E.part,timestamp:R,endtime:C};E.isBackground?I.push($):T.push($)}T.length===0&&h&&T.push({text:h,part:!1,timestamp:y,endtime:b||y,lineSynced:r});const L=T.length>0||I.length>0,{transliteration:v}=d;let g;v&&(g=v.text,Array.isArray(v.syllabus)&&v.syllabus.length===T.length&&v.syllabus.forEach((E,R)=>{T[R].romanizedText=E.text}));const A=d.translation?.text,M={text:T,background:I.length>0,backgroundText:I,oppositeTurn:f==="end"||(Array.isArray(d.element)?d.element.includes("opposite")||d.element.includes("right"):!1),timestamp:y,endtime:l+p,isWordSynced:r?!1:L,alignment:f,songPart:d.element?.songPart,romanizedText:g,translation:A};s.push(M)}return s}static toMilliseconds(t,e=0){const i=Number(t);return!Number.isFinite(i)||Number.isNaN(i)?e:Number.isInteger(i)?Math.max(0,Math.round(i)):Math.round(i*1e3)}firstUpdated(){this.lyricsContainer&&(this.lyricsContainer.addEventListener("wheel",this._boundHandleUserScroll,{passive:!0}),this.lyricsContainer.addEventListener("touchmove",this._boundHandleUserScroll,{passive:!0}))}_onTimeChanged(t,e){const s=Math.abs(e-t)>je,r=this.findActiveLineIndices(e),n=this.activeLineIndices;if(!m.arraysEqual(r,n)||s){if(this.lyricsContainer){for(const o of n)if(!r.includes(o)){const c=this._getLineElement(o);if(c){s||this.isUserScrolling?m.unfinishSyllables(c):m.finishSyllablesUpToTime(c,e),c.classList.remove("active","bg-expanded"),c.classList.contains("pre-active")&&c.classList.remove("pre-active");const d=this.preActiveLineElements.indexOf(c);d!==-1&&this.preActiveLineElements.splice(d,1)}}for(const o of r)if(!n.includes(o)){const c=this._getLineElement(o);if(c){c.classList.add("active","bg-expanded"),c.classList.remove("pre-active");const d=this.preActiveLineElements.indexOf(c);d!==-1&&this.preActiveLineElements.splice(d,1)}}for(const o of this.preActiveLineElements){const c=m.getLineIndexFromElement(o);(c===null||!r.includes(c)&&o!==this.currentPrimaryActiveLine)&&o.classList.remove("pre-active")}this.preActiveLineElements=this.preActiveLineElements.filter(o=>o.classList.contains("pre-active"))}this.startAnimationFromTime(e)}if(this._handleActiveLineScroll(n,s),this.clearPastLineHighlights(),this.lyricsContainer){for(const l of this.activeLineIndices){const p=this._getLineElement(l);p&&m.updateSyllablesForLine(p,e)}for(const l of this.activeGapLineElements)m.updateSyllablesForLine(l,e);if(this.gapElementCache.size>0)for(const[,l]of this.gapElementCache){const p=l._cachedStartTime??parseFloat(l.getAttribute("data-start-time")||"0"),f=l._cachedEndTime??parseFloat(l.getAttribute("data-end-time")||"0"),h=e>=p&&e<f,y=l.classList.contains("active"),k=l.classList.contains("gap-exiting"),x=lt,b=y&&!k&&e>=f-x;if(h&&(!y||s)&&!k){l.classList.remove("gap-exiting"),s&&y&&(l.classList.remove("active"),l.offsetWidth);const w=f-p,I=m.getGapLoopDelay(w)+(e-p);l.style.setProperty("--gap-loop-delay",`-${I}ms`),l.classList.add("active"),this.activeGapLineElements.includes(l)||this.activeGapLineElements.push(l),l.querySelectorAll(".lyrics-syllable").forEach(v=>{const g=parseFloat(v.getAttribute("data-start-time")||"0"),A=parseFloat(v.getAttribute("data-end-time")||"0");e>A?(v.classList.add("finished"),v.classList.contains("highlight")||m.updateSyllableAnimation(v,e-g)):e>=g&&e<=A&&m.updateSyllableAnimation(v,e-g)})}else if(b){l.classList.remove("active"),l.offsetWidth,l.classList.add("gap-exiting");const w=this.activeGapLineElements.indexOf(l);w!==-1&&this.activeGapLineElements.splice(w,1),setTimeout(()=>{l.classList.remove("gap-exiting")},lt)}else if(!h&&(y||k)){l.classList.remove("active"),l.classList.remove("gap-exiting");const w=this.activeGapLineElements.indexOf(l);w!==-1&&this.activeGapLineElements.splice(w,1)}else k&&e<f-x&&l.classList.remove("gap-exiting")}else this.lyricsContainer&&this.lyricsContainer.querySelectorAll(".lyrics-gap").forEach(p=>{const f=parseFloat(p.getAttribute("data-start-time")||"0"),h=parseFloat(p.getAttribute("data-end-time")||"0"),y=e>=f&&e<h,k=p.classList.contains("active"),x=p.classList.contains("gap-exiting"),b=lt,w=k&&!x&&e>=h-b;if(y&&(!k||s)&&!x){p.classList.remove("gap-exiting"),s&&k&&(p.classList.remove("active"),p.offsetWidth);const T=h-f,L=m.getGapLoopDelay(T)+(e-f);p.style.setProperty("--gap-loop-delay",`-${L}ms`),p.classList.add("active"),this.activeGapLineElements.includes(p)||this.activeGapLineElements.push(p)}else if(w){p.classList.remove("active"),p.offsetWidth,p.classList.add("gap-exiting");const T=this.activeGapLineElements.indexOf(p);T!==-1&&this.activeGapLineElements.splice(T,1),setTimeout(()=>{p.classList.remove("gap-exiting")},lt)}else if(!y&&(k||x)){p.classList.remove("active"),p.classList.remove("gap-exiting");const T=this.activeGapLineElements.indexOf(p);T!==-1&&this.activeGapLineElements.splice(T,1)}else x&&e<h-b&&p.classList.remove("gap-exiting")});const o=this.findInstrumentalGapAt(e);if(o){if(this.lastInstrumentalIndex=o.insertBeforeIndex,o.insertBeforeIndex>0){const l=this._getLineElement(o.insertBeforeIndex-1);l&&l.classList.contains("persist-highlight")&&!l.classList.contains("active")&&m.unfinishSyllables(l)}}else this.lastInstrumentalIndex!==null&&(this.lastInstrumentalIndex=null);const c=this.lyrics&&this.lyrics.length>0?this.lyrics[this.lyrics.length-1]:null,d=this.lyricsContainer.querySelector(".lyrics-footer");if(d&&c&&c.endtime>0){const l=e>c.endtime+200;if(l&&!d.classList.contains("active")){d.classList.add("active");const p=this.lyricsContainer.querySelector(".lyrics-line:last-of-type");if(p){p.classList.remove("pre-active");const f=this.preActiveLineElements.indexOf(p);f!==-1&&this.preActiveLineElements.splice(f,1)}this.autoScroll&&!this.isUserScrolling&&!this.isClickSeeking&&this.focusLine(d)}else!l&&d.classList.contains("active")&&d.classList.remove("active")}}}updated(t){if(t.has("lyrics")&&(this._invalidateCaches(),this._ensureLineDataCache(),this._updateCachedIsUnsynced(),this._updateCharTimingData(),this.lyricsContainer&&this.lyrics)){const e=this.findActiveLineIndices(this.currentTime);for(const s of e){const r=this._getLineElement(s);r&&r.classList.add("active","bg-expanded")}if(this._onTimeChanged(0,this.currentTime),this.positionedLineElements.length===0){const s=this.lyricsContainer.querySelector(".lyrics-line");s&&this.updatePositionClasses(s)}this.visibilityObserver?.disconnect(),this.visibilityObserver=new IntersectionObserver(s=>{s.forEach(r=>{r.target.classList.toggle("far-line",!r.isIntersecting)})},{root:this.lyricsContainer,rootMargin:"200px",threshold:0}),this.lyricsContainer.querySelectorAll(".lyrics-line").forEach(s=>this.visibilityObserver.observe(s))}if(t.has("duration")&&this.duration===-1){this.currentTime=0,this.activeLineIndices=[],this.activeMainWordIndices.clear(),this.activeBackgroundWordIndices.clear(),this.mainWordProgress.clear(),this.backgroundWordProgress.clear(),this.mainWordAnimations.clear(),this.backgroundWordAnimations.clear(),this.preActiveLineElements=[],this.positionedLineElements=[],this.activeGapLineElements=[],this.setUserScrolling(!1),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0),this.userScrollTimeoutId&&(clearTimeout(this.userScrollTimeoutId),this.userScrollTimeoutId=void 0),this.scrollUnlockTimeout&&(clearTimeout(this.scrollUnlockTimeout),this.scrollUnlockTimeout=void 0),this.scrollAnimationTimeout&&(clearTimeout(this.scrollAnimationTimeout),this.scrollAnimationTimeout=void 0),this.lyricsContainer&&(this.lyricsContainer.scrollTop=0);return}(t.has("query")||t.has("musicId")||t.has("isrc")||t.has("ttml")||t.has("songTitle")||t.has("songArtist")||t.has("songAlbum")||t.has("songDurationMs"))&&!t.has("currentTime")&&this.fetchLyrics(),t.has("currentTime")&&this.lyrics}_handleActiveLineScroll(t,e=!1){if(!this.lyricsContainer||!this.lyrics||this.lyrics.length===0||this.lyricsContainer.querySelector(".lyrics-footer")?.classList.contains("active"))return;let s=350,r=-1;for(let d=0;d<this.lyrics.length;d+=1)if(this.lyrics[d].timestamp>this.currentTime){r=d-1;break}if(r===-1&&this.lyrics.length>0&&this.currentTime>=this.lyrics[this.lyrics.length-1].timestamp&&(r=this.lyrics.length-1),r!==-1&&r+1<this.lyrics.length){const d=this.lyrics[r],p=this.lyrics[r+1].timestamp-d.endtime;s=Math.min(500,Math.max(350,p))}const n=this.currentTime+s,a=this.findActiveLineIndices(n);let o=null;if(a.length>0){const d=this.getPrimaryScrollLineIndex(a,n);d!==null&&d!==-1&&(o=this._getLineElement(d))}if(!o){const d=this.getLineIndexAtTime(n,0);d!==null&&d!==-1&&(o=this._getLineElement(d))}if(!o)return;o.classList.contains("active")||(o.classList.add("pre-active"),this.preActiveLineElements.includes(o)||this.preActiveLineElements.push(o));const c=s;this.focusLine(o,e,c)}_getTextWidth(t,e){return this._textWidthCanvas||(this._textWidthCanvas=document.createElement("canvas"),this._textWidthCtx=this._textWidthCanvas.getContext("2d",{willReadFrequently:!0})),this._textWidthCtx?(this._textWidthCtx.font=e,this._textWidthCtx.measureText(t).width):0}_rebuildDomCache(){if(!this.lyricsContainer||(this.lineElementCache.clear(),this.gapElementCache.clear(),this.cachedLineArray=[],!this.lyrics))return;for(let e=0;e<this.lyrics.length;e+=1){const i=this.lyricsContainer.querySelector(`#lyrics-line-${e}`);i&&this.lineElementCache.set(e,i);const s=this.lyricsContainer.querySelector(`#gap-${e}`);s&&(s._cachedStartTime=parseFloat(s.getAttribute("data-start-time")||"0"),s._cachedEndTime=parseFloat(s.getAttribute("data-end-time")||"0"),this.gapElementCache.set(e,s))}const t=this.lyricsContainer.querySelectorAll(".lyrics-line");this.cachedLineArray=Array.from(t)}_getLineElement(t){const e=this.lineElementCache.get(t);if(e)return e;if(!this.lyricsContainer)return null;const i=this.lyricsContainer.querySelector(`#lyrics-line-${t}`);return i&&this.lineElementCache.set(t,i),i}_getGapElement(t){const e=this.gapElementCache.get(t);if(e)return e;if(!this.lyricsContainer)return null;const i=this.lyricsContainer.querySelector(`#gap-${t}`);return i&&this.gapElementCache.set(t,i),i}_invalidateCaches(){this.cachedAllGaps=[],this.cachedIsUnsynced=!1,this.cachedLineData=null,this.lineElementCache.clear(),this.gapElementCache.clear(),this.cachedLineArray=[],this.cachedScrollPaddingTop=null,this.preActiveLineElements=[],this.positionedLineElements=[],this.activeGapLineElements=[],this.visibilityObserver?.disconnect(),this.visibilityObserver=void 0}_updateCachedIsUnsynced(){this.cachedIsUnsynced=this.lyrics&&this.lyrics.length>0?this.lyrics.every(t=>t.timestamp===0&&t.endtime===0):!1}_ensureLineDataCache(){this.cachedLineData||!this.lyrics||(this.cachedLineData=this.lyrics.map(t=>{const e=[];let i=[];t.text.forEach((h,y)=>{i.push(h);const k=t.text[y+1];(!k||h.part===!1||/\s$/.test(h.text)||k&&h.isBackground!==k.isBackground)&&(e.push(i),i=[])}),i.length>0&&e.push(i);const s=new Array(e.length).fill(!1),r=new Array(e.length).fill(!1),n=new Array(e.length).fill(!1),a=new Array(e.length).fill(""),o=new Array(e.length).fill(0),c=new Array(e.length).fill(0),d=new Array(e.length).fill(0),l=new Array(e.length).fill(0);let p=!1,f=0;for(;f<e.length;){let h=f;for(;h<e.length-1;){const S=e[h],F=S[S.length-1].text;if(/\s$/.test(F))break;h+=1}const y=e.slice(f,h+1).flatMap(S=>S.map(F=>F.text)).join("").trim(),k=e[f][0].timestamp,x=e[h],b=x[x.length-1].endtime,w=b-k,T=/[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/.test(y),I=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0590-\u05FF]/.test(y);I&&(p=!0);const L=y.includes("-"),v=y.length,g=!T&&!I&&!L&&v>0,A=t.isWordSynced===!1||t.text.some(S=>S.lineSynced);let M=g&&v>0&&v<=7;M&&(v<3?M=w>=1050&&w>=v*525:M=w>=850&&w>=v*190);const E=w>=Math.max(700,v*85),R=v>=4&&w>=Math.max(1300,v*260),P=g&&!A&&!M&&(v>=8&&E||v<8&&R),C=M&&!A;let $=0;for(let S=f;S<=h;S+=1){s[S]=M,r[S]=C,n[S]=P,a[S]=y,o[S]=w,c[S]=$,d[S]=k,l[S]=b;const F=e[S].map(z=>z.text).join("");$+=F.replace(/\s/g,"").length}f=h+1}return{wordGroups:e,groupGrowable:s,groupGlowing:r,groupCharRise:n,vwFullText:a,vwFullDuration:o,vwCharOffset:c,vwStartMs:d,vwEndMs:l,lineIsRTL:p}}))}_updateCharTimingData(){if(!this.shadowRoot)return;this._rebuildDomCache();const t=this.shadowRoot.querySelector(".lyrics-syllable");if(!t)return;const e=getComputedStyle(t),{font:i}=e,s=parseFloat(e.fontSize),r=this.shadowRoot.querySelectorAll(".lyrics-word.growable, .lyrics-word.char-rise");r&&r.forEach(n=>{const a=n.querySelectorAll(".lyrics-syllable-wrap"),o=[];a.forEach(c=>{const d=c.querySelector(".lyrics-syllable");d&&o.push(d)}),o.forEach(c=>{const d=c.querySelectorAll(".char");if(d.length===0)return;const p=Array.from(d).map(w=>w.textContent||"").map(w=>this._getTextWidth(w,i)),f=p.reduce((w,T)=>w+T,0),h=parseFloat(c.dataset.duration||"0"),y=h>0?f/h:0,k=.375*s,x=y>0?k/y:100;let b=0;d.forEach((w,T)=>{const I=p[T],L=w;if(f>0){const v=b/f,g=I/f;L.dataset.wipeStart=v.toFixed(4),L.dataset.wipeDuration=g.toFixed(4),L.dataset.preWipeArrival=(h*v).toFixed(2),L.dataset.preWipeDuration=x.toFixed(2)}b+=I})})})}static arraysEqual(t,e){return t.length===e.length&&t.every((i,s)=>i===e[s])}static getLineIndexFromElement(t){if(!t)return null;const e=t.id.match(/^lyrics-line-(\d+)$/);return e?parseInt(e[1],10):null}static getGapLoopDelay(t){const e=It,s=((t-lt)%ot+ot)%ot;return((e-s)%ot+ot)%ot}clearPreActiveClasses(t=null){if(!this.lyricsContainer)return;const e=[];for(const i of this.preActiveLineElements)m.getLineIndexFromElement(i)===t?e.push(i):i.classList.remove("pre-active");this.preActiveLineElements=e}getPrimaryActiveLineIndex(t){if(t.length===0)return null;const e=t[0],i=t[t.length-1];let s=Math.max(e,i-2);const r=m.getLineIndexFromElement(this.currentPrimaryActiveLine);return r!==null&&t.includes(r)&&(t.length<=3||s<r)&&(s=r),s}getPrimaryScrollLineIndex(t,e){if(!this.lyrics||this.lyrics.length===0)return null;const i=this.getLineIndexAtTime(e,this.lastActiveIndex);if(i===-1)return null;const s=m.getLineIndexFromElement(this.currentPrimaryActiveLine);return s!==null&&i>s&&this.lyrics[s]&&this.lyrics[i]&&this.lyrics[s].endtime===this.lyrics[i].endtime&&this.findActiveLineIndices(e).length<=3?s:i}getOverlapClusterForActiveIndices(t,e){if(!this.lyrics||t.length===0)return null;let i=t[0];for(;i>0&&this.lyrics[i-1].endtime>=this.lyrics[i].timestamp;)i-=1;let s=i,r=this.lyrics[i].endtime;for(;s+1<this.lyrics.length&&this.lyrics[s+1].timestamp<=r;)s+=1,r=Math.max(r,this.lyrics[s].endtime);let n=i,a=this.lyrics[i].endtime;for(let o=i;o<=s&&this.lyrics[o].timestamp<=e;o+=1)n=o,a=Math.max(a,this.lyrics[o].endtime);return{start:i,end:s,startedEnd:n,startedEndTime:a}}focusLine(t,e=!1,i=void 0,s=!1,r=!1){const n=t!==this.currentPrimaryActiveLine;if(n&&!r){this.lastPrimaryActiveLine=this.currentPrimaryActiveLine,this.currentPrimaryActiveLine=t;const a=m.getLineIndexFromElement(t);a!==null&&(this.lastActiveIndex=a)}(n||e)&&this.updatePositionClasses(t),!s&&(e||n||r)&&this.autoScroll&&!this.isUserScrolling&&!this.isClickSeeking&&this.scrollToActiveLineYouLy(t,e,i)}setUserScrolling(t){this.isUserScrolling=t,t?this.lyricsContainer?.classList.add("user-scrolling"):this.lyricsContainer?.classList.remove("user-scrolling")}handleUserScroll(){this.isProgrammaticScroll||this.isClickSeeking||(this.setUserScrolling(!0),this.clearPastLineHighlights(),this.userScrollTimeoutId&&clearTimeout(this.userScrollTimeoutId),this.userScrollTimeoutId=window.setTimeout(()=>{this.setUserScrolling(!1),this.userScrollTimeoutId=void 0,this.activeLineIndices.length>0&&this._handleActiveLineScroll([],!1)},2e3))}clearPastLineHighlights(){if(!this.lyricsContainer)return;const t=this.cachedLineArray.length?this.cachedLineArray:Array.from(this.lyricsContainer.querySelectorAll(".lyrics-line:not(.lyrics-gap)")),i=this.lyricsContainer.getBoundingClientRect().top+this.getScrollPaddingTop();for(let s=0;s<t.length;s+=1){const r=t[s],n=r.classList.contains("active"),o=r.getBoundingClientRect().bottom<i-2;!n&&o&&m.unfinishSyllables(r)}}getLineIndexAtTime(t,e=0){if(!this.lyrics||this.lyrics.length===0)return-1;const i=this.lyrics.length,s=Math.max(0,Math.min(e,i-1));for(let r=s;r<i;r+=1){const n=this.lyrics[r];if(n.timestamp>t)break;if(t>=n.timestamp&&t<n.endtime)return r}for(let r=s-1;r>=0;r-=1){const n=this.lyrics[r];if(t>=n.timestamp&&t<n.endtime)return r;if(n.endtime<t)break}for(let r=0;r<i;r+=1){const n=this.lyrics[r];if(n.timestamp>t)break;if(t>=n.timestamp&&t<n.endtime)return r}return-1}findActiveLineIndices(t){if(!this.lyrics||this.lyrics.length===0)return[];const e=[];for(let i=0;i<this.lyrics.length;i+=1){const s=this.lyrics[i];if(s.timestamp>t)break;t>=s.timestamp&&t<s.endtime&&e.push(i)}return e}findInstrumentalGapAt(t){if(!this.lyrics||this.lyrics.length===0)return null;const e=this.lyrics[0];if(t>=0&&t<e.timestamp){const s=e.timestamp;return s-0>=wt?{insertBeforeIndex:0,gapStart:0,gapEnd:s}:null}for(let i=0;i<this.lyrics.length-1;i+=1){const s=this.lyrics[i],r=this.lyrics[i+1],n=s.endtime,a=r.timestamp;if(t>n&&t<a)return a-n>=wt?{insertBeforeIndex:i+1,gapStart:n,gapEnd:a}:null}return null}findAllInstrumentalGaps(){if(this.cachedAllGaps.length>0)return this.cachedAllGaps;if(!this.lyrics||this.lyrics.length===0)return[];const t=[],e=this.lyrics[0];e.timestamp>=wt&&t.push({insertBeforeIndex:0,gapStart:0,gapEnd:e.timestamp});for(let i=0;i<this.lyrics.length-1;i+=1){const s=this.lyrics[i],r=this.lyrics[i+1],n=s.endtime,a=r.timestamp;a-n>=wt&&t.push({insertBeforeIndex:i+1,gapStart:n,gapEnd:a})}return this.cachedAllGaps=t,t}startAnimationFromTime(t){if(this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0),!this.lyrics)return;const e=this.findActiveLineIndices(t);if(m.arraysEqual(e,this.activeLineIndices)||(this.activeLineIndices=e),this.activeMainWordIndices.clear(),this.activeBackgroundWordIndices.clear(),this.mainWordAnimations.clear(),this.backgroundWordAnimations.clear(),this.mainWordProgress.clear(),this.backgroundWordProgress.clear(),e.length!==0){for(const i of e){const s=this.lyrics[i];let r=-1;for(let a=0;a<s.text.length;a+=1)if(t>=s.text[a].timestamp&&t<=s.text[a].endtime){r=a;break}this.activeMainWordIndices.set(i,r);let n=-1;if(s.backgroundText){for(let a=0;a<s.backgroundText.length;a+=1)if(t>=s.backgroundText[a].timestamp&&t<=s.backgroundText[a].endtime){n=a;break}}this.activeBackgroundWordIndices.set(i,n)}this.setupAnimations(),this.interpolate&&this.animateProgress()}}updateActiveLineAndWords(){if(!this.lyrics)return;const t=this.findActiveLineIndices(this.currentTime);m.arraysEqual(t,this.activeLineIndices)||(this.activeLineIndices=t),this.activeMainWordIndices.clear(),this.activeBackgroundWordIndices.clear();for(const e of t){const i=this.lyrics[e];let s=-1;for(let n=0;n<i.text.length;n+=1)if(this.currentTime>=i.text[n].timestamp&&this.currentTime<=i.text[n].endtime){s=n;break}this.activeMainWordIndices.set(e,s);let r=-1;if(i.backgroundText){for(let n=0;n<i.backgroundText.length;n+=1)if(this.currentTime>=i.backgroundText[n].timestamp&&this.currentTime<=i.backgroundText[n].endtime){r=n;break}}this.activeBackgroundWordIndices.set(e,r)}}setupAnimations(){if(this.activeLineIndices.length===0||!this.lyrics){this.mainWordAnimations.clear(),this.backgroundWordAnimations.clear();return}for(const t of this.activeLineIndices){const e=this.lyrics[t],i=this.activeMainWordIndices.get(t)??-1,s=this.activeBackgroundWordIndices.get(t)??-1;if(i!==-1){const r=e.text[i],n=r.endtime-r.timestamp,a=this.currentTime-r.timestamp;this.mainWordAnimations.set(t,{startTime:performance.now()-a,duration:n})}else this.mainWordAnimations.set(t,{startTime:0,duration:0});if(s!==-1&&e.backgroundText){const r=e.backgroundText[s],n=r.endtime-r.timestamp,a=this.currentTime-r.timestamp;this.backgroundWordAnimations.set(t,{startTime:performance.now()-a,duration:n})}else this.backgroundWordAnimations.set(t,{startTime:0,duration:0})}}handleLineClick(t){this.lyricsContainer&&(this.lyricsContainer.querySelectorAll(".lyrics-line").forEach(r=>{m.resetSyllables(r),r.classList.remove("scroll-animate"),r.style.removeProperty("--scroll-delta"),r.style.removeProperty("--lyrics-line-delay")}),this.lyricsContainer.classList.remove("wheel-scrolling")),this.scrollAnimationState&&(this.scrollAnimationState.isAnimating=!1,this.scrollAnimationState.pendingUpdate=null),this.scrollAnimationTimeout&&(clearTimeout(this.scrollAnimationTimeout),this.scrollAnimationTimeout=void 0),this.userScrollTimeoutId&&(clearTimeout(this.userScrollTimeoutId),this.userScrollTimeoutId=void 0),this.setUserScrolling(!1),this.currentPrimaryActiveLine=null,this.lastPrimaryActiveLine=null,this.activeLineIds.clear(),this.animatingLines=[];const e=this.lyricsContainer?.querySelector(`.lyrics-line[data-start-time="${t.text[0]?.timestamp||0}"]`);e&&this.lyricsContainer&&(this.currentPrimaryActiveLine=e,this.currentScrollOffset=-this.lyricsContainer.scrollTop,this.isClickSeeking=!0,this.clickSeekTimeout&&clearTimeout(this.clickSeekTimeout),this.clickSeekTimeout=setTimeout(()=>{this.isClickSeeking=!1},800),this.scrollToActiveLineYouLy(e,!0));const i=new CustomEvent("line-click",{detail:{timestamp:t.timestamp},bubbles:!0,composed:!0});this.dispatchEvent(i)}static getBackgroundTextPlacement(t){if(!t.backgroundText||t.backgroundText.length===0||t.text.length===0)return"after";const e=t.text[0].timestamp;return t.backgroundText[0].timestamp<e?"before":"after"}scrollToActiveLine(){if(!this.lyricsContainer||this.activeLineIndices.length===0)return;const t=Math.min(...this.activeLineIndices),e=this.lyricsContainer.querySelector(`.lyrics-line:nth-child(${t+1})`);if(e){const i=this.lyricsContainer.clientHeight,s=e.offsetTop,r=e.clientHeight,n=e.querySelector(".background-text.before");let a=0;n&&(a=n.clientHeight/2);const o=s-i/2+r/2-a;requestAnimationFrame(()=>{this.isProgrammaticScroll=!0,this.lyricsContainer?.scrollTo({top:o,behavior:"smooth"}),setTimeout(()=>{this.isProgrammaticScroll=!1},100)})}}scrollToInstrumental(t){if(!this.lyricsContainer)return;const e=this.lyricsContainer.querySelector(`#gap-${t}`);if(e){const s=this.getScrollPaddingTop()-e.offsetTop;this.isProgrammaticScroll=!0,this.clearPastLineHighlights(),this.animateScrollYouLy(s,!1),setTimeout(()=>{this.isProgrammaticScroll=!1},250)}}getScrollPaddingTop(){if(this.cachedScrollPaddingTop!==null)return this.cachedScrollPaddingTop;if(!this.lyricsContainer)return 0;const e=getComputedStyle(this).getPropertyValue("--lyrics-scroll-padding-top")||"25%";let i;return e.includes("%")?i=this.lyricsContainer.clientHeight*(parseFloat(e)/100):i=parseFloat(e)||0,this.cachedScrollPaddingTop=i,i}animateScrollYouLy(t,e=!1,i=void 0){if(!this.lyricsContainer)return;const s=this.lyricsContainer,r=Math.max(0,-t);this.scrollAnimationState||(this.scrollAnimationState={isAnimating:!1,pendingUpdate:null},this.animatingLines=[]);const n=this.scrollAnimationState;if(n.isAnimating&&!e){const g=n.pendingUpdate===null?null:Math.max(0,-n.pendingUpdate);if(Math.abs(s.scrollTop-r)<2||g!==null&&Math.abs(g-r)<2)return;n.pendingUpdate=t;return}this.scrollAnimationTimeout&&(clearTimeout(this.scrollAnimationTimeout),this.scrollAnimationTimeout=void 0),this.scrollUnlockTimeout&&(clearTimeout(this.scrollUnlockTimeout),this.scrollUnlockTimeout=void 0);const{animatingLines:a}=this,o=-r,d=-s.scrollTop-o;if(this.currentScrollOffset=o,Math.abs(s.scrollTop-r)<1&&Math.abs(d)<1){n.isAnimating=!1,n.pendingUpdate=null;return}if(e){for(const g of a)g.classList.remove("scroll-animate"),g.style.removeProperty("--scroll-delta"),g.style.removeProperty("--lyrics-line-delay"),g.style.removeProperty("--scroll-duration");a.length=0,s.scrollTo({top:r,behavior:"smooth"}),n.isAnimating=!1,n.pendingUpdate=null;return}for(const g of a)g.classList.remove("scroll-animate"),g.style.removeProperty("--scroll-delta"),g.style.removeProperty("--lyrics-line-delay"),g.style.removeProperty("--scroll-duration");if(a.length=0,this.cachedLineArray.length===0){const g=this.lyricsContainer.querySelectorAll(".lyrics-line");this.cachedLineArray=Array.from(g)}const l=this.cachedLineArray,p=this.currentPrimaryActiveLine||this.lastPrimaryActiveLine||l[0];if(!p)return;const f=l.indexOf(p);if(f===-1)return;const h=Math.min(450,i??ee),y=h*.1,k=20,x=l.length,b=Math.max(0,f-k),w=Math.min(x,f+k);let T=0;const I=[];if(d>=0){let g=0;for(let A=b;A<w;A+=1){const M=l[A],E=A>=f?g*y:0;A>=f&&!M.classList.contains("lyrics-gap")&&(g+=1),M.style.setProperty("--scroll-delta",`${d}px`),M.style.setProperty("--lyrics-line-delay",`${E}ms`),M.style.setProperty("--scroll-duration",`${h+100}ms`),I.push(M);const R=h+E;R>T&&(T=R)}}else{let g=0;for(let A=w-1;A>=b;A-=1){const M=l[A],E=A<=f?g*y:0;A<=f&&!M.classList.contains("lyrics-gap")&&(g+=1),M.style.setProperty("--scroll-delta",`${d}px`),M.style.setProperty("--lyrics-line-delay",`${E}ms`),M.style.setProperty("--scroll-duration",`${h+100}ms`),I.push(M);const R=h+E;R>T&&(T=R)}}s.offsetHeight;for(const g of I)g.classList.add("scroll-animate"),a.push(g);n.isAnimating=!0;const v=400;this.scrollUnlockTimeout=setTimeout(()=>{if(n.isAnimating=!1,n.pendingUpdate!==null){const g=n.pendingUpdate;n.pendingUpdate=null,this.animateScrollYouLy(g,!1,i)}},v),this.scrollAnimationTimeout=setTimeout(()=>{for(let g=0;g<a.length;g+=1){const A=a[g];A.classList.remove("scroll-animate"),A.style.removeProperty("--scroll-delta"),A.style.removeProperty("--lyrics-line-delay"),A.style.removeProperty("--scroll-duration")}a.length=0,this.scrollAnimationTimeout=void 0},T+50),s.scrollTo({top:r,behavior:"instant"})}updatePositionClasses(t){if(!this.lyricsContainer)return;const e=["lyrics-activest","post-active-line","next-active-line","prev-1","prev-2","prev-3","prev-4","next-1","next-2","next-3","next-4"];for(const r of this.positionedLineElements)r.classList.remove(...e);this.positionedLineElements=[],t.classList.add("lyrics-activest"),this.positionedLineElements.push(t),this.cachedLineArray.length===0&&(this.cachedLineArray=Array.from(this.lyricsContainer.querySelectorAll(".lyrics-line")));const i=this.cachedLineArray,s=i.indexOf(t);if(s!==-1)for(let r=Math.max(0,s-4);r<=Math.min(i.length-1,s+4);r+=1){const n=r-s;if(n!==0){const a=i[r];n===-1?a.classList.add("post-active-line"):n===1?a.classList.add("next-active-line"):n<0?a.classList.add(`prev-${Math.abs(n)}`):a.classList.add(`next-${n}`),this.positionedLineElements.push(a)}}}scrollToActiveLineYouLy(t,e=!1,i=void 0){if(!t||!this.lyricsContainer)return;const s=this.getScrollPaddingTop(),r=s-t.offsetTop,n=this.lyricsContainer.getBoundingClientRect().top;if(!e&&Math.abs(t.getBoundingClientRect().top-n-s)<1)return;if(!e&&!t.classList.contains("lyrics-footer")){const o=this.lyricsContainer,c=o.scrollTop+o.clientHeight>=o.scrollHeight-50,d=Math.max(0,-(s-t.offsetTop));if(c&&d>o.scrollTop-50)return}this.lyricsContainer.classList.remove("not-focused","user-scrolling"),this.isProgrammaticScroll=!0,this.setUserScrolling(!1),this.userScrollTimeoutId&&(clearTimeout(this.userScrollTimeoutId),this.userScrollTimeoutId=void 0),this.clearPastLineHighlights(),setTimeout(()=>{this.isProgrammaticScroll=!1},(i??ee)+160),this.animateScrollYouLy(r,e,i)}static updateSyllableAnimation(t,e=0){if(t.classList.contains("highlight"))return;const{classList:i}=t,s=i.contains("rtl-text"),r=Array.from(t.querySelectorAll("span.char")),n=t.parentElement?.parentElement,a=n?.dataset.virtualWordId;let o=[];a&&n?.parentElement?o=Array.from(n.parentElement.querySelectorAll(".lyrics-word")).filter(L=>L.dataset.virtualWordId===a):n&&(o=[n]);const c=o.flatMap(L=>Array.from(L.querySelectorAll("span.char"))),d=n?.classList.contains("growable"),l=n?.classList.contains("char-rise"),p=t.getAttribute("data-syllable-index")==="0",f=parseFloat(t.getAttribute("data-start-time")||"0"),h=parseFloat(n?.dataset.virtualWordStart||""),y=p&&(!Number.isFinite(h)||Math.abs(f-h)<.5),k=p,x=t.closest(".lyrics-gap")!==null,b=parseFloat(t.getAttribute("data-duration")||"0")||300,w=parseFloat(t.getAttribute("data-word-duration")||t.getAttribute("data-duration")||"0")||b,T=new Map,I=[];if(d&&y&&c.length>0){const L=w,v=L*.09,g=L*1.5;c.forEach(A=>{const M=A.dataset.matrixScale||"1.1",E=A.dataset.charOffsetX||"0",R=A.dataset.shadowIntensity||"0.6",P=A.dataset.translateYPeak||"-2",C=parseFloat(A.dataset.syllableCharIndex||"0"),$=v*C;T.set(A,`grow-dynamic ${g}ms ease-in-out ${$}ms forwards`),I.push({element:A,property:"--matrix-scale",value:M}),I.push({element:A,property:"--char-offset-x",value:`${E}px`}),I.push({element:A,property:"--shadow-intensity",value:R}),I.push({element:A,property:"--translate-y-peak",value:`${P}px`})})}if(l&&y&&c.length>0){const L=Math.max(w,b),v=L*.09,g=L*1.5;c.forEach(A=>{const M=parseFloat(A.dataset.syllableCharIndex||"0"),E=v*M;T.set(A,`rise-char ${g}ms ease-in-out ${E}ms forwards`)})}if(r.length>0)r.forEach((L,v)=>{const g=parseFloat(L.dataset.wipeStart||"0"),A=parseFloat(L.dataset.wipeDuration||"0"),M=b*g-e,E=b*A,R=k&&v===0;let P="wipe";R?P=s?"start-wipe-rtl":"start-wipe":P=s?"wipe-rtl":"wipe";const C=T.get(L)||L.style.animation||"",$=[];if(C&&(C.includes("grow-dynamic")||C.includes("rise-char"))&&$.push(C.split(",")[0].trim()),v>0&&M>0&&E>0){const S=(L.dataset.preWipeArrival?parseFloat(L.dataset.preWipeArrival):b*g)-e,F=parseFloat(L.dataset.preWipeDuration||"100"),z=Math.min(F,E*.9,b*.08,S),B=S-z;z>=16&&$.push(`pre-wipe-char ${z}ms linear ${B}ms none`)}E>0&&$.push(`${P} ${E}ms linear ${M}ms forwards`),$.length>0&&T.set(L,$.join(", "))});else{const L=parseFloat(t.getAttribute("data-wipe-ratio")||"1"),v=b*L;let g="wipe";if(k?g=s?"start-wipe-rtl":"start-wipe":g=s?"wipe-rtl":"wipe",t.classList.contains("line-synced"))return;const A=x?"fade-gap":g;t.style.animation=`${A} ${v}ms ${x?"ease-out":"linear"} ${-e}ms forwards`}i.remove("pre-highlight"),i.add("highlight");for(const[L,v]of T.entries())L.style.willChange="transform",L.style.animation=v;for(const L of I)L.element.style.setProperty(L.property,L.value)}static resetSyllable(t){if(!t)return;t.style.animation="",t.style.removeProperty("--pre-wipe-duration"),t.style.removeProperty("--pre-wipe-delay"),t.style.transition="none",t.style.backgroundColor="var(--lyplus-text-secondary)";const e=t.querySelectorAll("span.char");for(let i=0;i<e.length;i+=1){const s=e[i];s.style.animation="",s.style.transition="none",s.style.backgroundColor="var(--lyplus-text-secondary)"}t.classList.remove("highlight","finished","pre-highlight","cleanup")}static resetSyllables(t){if(!t)return;t.classList.remove("persist-highlight"),t._cachedSyllableElements=null;const e=t.getElementsByClassName("lyrics-syllable");for(let i=0;i<e.length;i+=1)m.resetSyllable(e[i]);requestAnimationFrame(()=>{for(let i=0;i<e.length;i+=1){const s=e[i];s.style.removeProperty("background-color"),s.style.removeProperty("transition");const r=s.querySelectorAll("span.char");for(let n=0;n<r.length;n+=1){const a=r[n];a.style.removeProperty("background-color"),a.style.removeProperty("transition"),a.style.removeProperty("will-change")}}})}static unfinishSyllables(t){if(!t)return;t.classList.remove("persist-highlight");const e=t.getElementsByClassName("lyrics-syllable");for(let i=0;i<e.length;i+=1){const s=e[i];s.classList.remove("highlight","finished","pre-highlight","cleanup"),s.style.animation="",s.style.removeProperty("--pre-wipe-duration"),s.style.removeProperty("--pre-wipe-delay"),s.style.removeProperty("background-color"),s.style.removeProperty("transition");const r=s.querySelectorAll("span.char");for(let n=0;n<r.length;n+=1){const a=r[n];a.style.animation="",a.style.removeProperty("will-change"),a.style.removeProperty("background-color"),a.style.removeProperty("transition"),a.style.removeProperty("filter")}}}static finishSyllablesUpToTime(t,e){if(!t)return;let i=!1,s=t._cachedSyllableElements;if(!s){s=Array.from(t.querySelectorAll(".lyrics-syllable"));for(let r=0;r<s.length;r+=1){const n=s[r];n._cachedStartTime=parseFloat(n.getAttribute("data-start-time")||"0"),n._cachedEndTime=parseFloat(n.getAttribute("data-end-time")||"0")}t._cachedSyllableElements=s}for(let r=0;r<s.length;r+=1){const n=s[r],a=n._cachedStartTime;if(Number.isFinite(a)&&e>=a){const{classList:o}=n;o.contains("finished")||(o.contains("highlight")||m.updateSyllableAnimation(n,Math.max(0,e-a)),o.add("finished")),i=!0,o.remove("highlight"),o.remove("pre-highlight"),o.add("cleanup"),n.style.animation="",n.style.removeProperty("--pre-wipe-duration"),n.style.removeProperty("--pre-wipe-delay");const c=n.querySelectorAll("span.char");for(let d=0;d<c.length;d+=1){const l=c[d],p=l.style.animation||"";if(p.includes("grow-dynamic")||p.includes("rise-char")){const h=p.split(",").map(y=>y.trim()).find(y=>y.includes("grow-dynamic")||y.includes("rise-char"));l.style.animation=h||""}else l.style.animation=""}}}i?t.classList.add("persist-highlight"):t.classList.remove("persist-highlight")}static updateSyllablesForLine(t,e){let i=t._cachedSyllableElements;if(!i){i=Array.from(t.querySelectorAll(".lyrics-syllable"));for(let s=0;s<i.length;s+=1){const r=i[s];r._cachedStartTime=parseFloat(r.getAttribute("data-start-time")||"0"),r._cachedEndTime=parseFloat(r.getAttribute("data-end-time")||"0")}t._cachedSyllableElements=i}for(let s=0;s<i.length;s+=1){const r=i[s],n=r._cachedStartTime,a=r._cachedEndTime;if(Number.isFinite(n)&&Number.isFinite(a)){const{classList:o}=r,c=o.contains("highlight"),d=o.contains("finished"),l=o.contains("pre-highlight"),p=c||d||l;if(!(e<n-1e3&&!p)){let f=!1;l&&s>0&&(i[s-1].classList.contains("highlight")||(o.remove("pre-highlight"),r.style.removeProperty("--pre-wipe-duration"),r.style.removeProperty("--pre-wipe-delay"),r.style.animation="",f=!0)),f||(e>=n&&e<=a?(c||m.updateSyllableAnimation(r,e-n),d&&o.remove("finished")):e>a?d||(c||m.updateSyllableAnimation(r,e-n),o.add("finished")):(c||d)&&m.resetSyllable(r))}}}}animateProgress(){const t=performance.now();let e=!1;if(!this.lyrics||this.activeLineIndices.length===0){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0);return}for(const i of this.activeLineIndices){const s=this.lyrics[i],r=this.mainWordAnimations.get(i);if(r&&r.duration>0){const a=t-r.startTime;if(a>=0){const o=Math.min(1,a/r.duration);if(this.mainWordProgress.set(i,o),o<1)e=!0;else{const c=this.activeMainWordIndices.get(i)??-1,d=c+1;if(c!==-1&&d<s.text.length){const l=s.text[c],p=s.text[d];this.activeMainWordIndices.set(i,d);const f=p.timestamp-l.endtime,h=p.endtime-p.timestamp;this.mainWordAnimations.set(i,{startTime:performance.now()+f,duration:h}),e=!0}else this.mainWordAnimations.set(i,{startTime:0,duration:0})}}else this.mainWordProgress.set(i,0),e=!0}const n=this.backgroundWordAnimations.get(i);if(n&&n.duration>0){const a=t-n.startTime;if(a>=0){const o=Math.min(1,a/n.duration);if(this.backgroundWordProgress.set(i,o),o<1)e=!0;else{const c=this.activeBackgroundWordIndices.get(i)??-1;if(s.backgroundText&&c!==-1&&c<s.backgroundText.length-1){const d=c+1,l=s.backgroundText[c],p=s.backgroundText[d];this.activeBackgroundWordIndices.set(i,d);const f=p.timestamp-l.endtime,h=p.endtime-p.timestamp;this.backgroundWordAnimations.set(i,{startTime:performance.now()+f,duration:h}),e=!0}else this.backgroundWordAnimations.set(i,{startTime:0,duration:0})}}else this.backgroundWordProgress.set(i,0),e=!0}}e?this.animationFrameId=requestAnimationFrame(this._boundAnimateProgress):this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=void 0)}generateLRC(){if(!this.lyrics)return"";let t="";this.songTitle&&(t+=`[ti:${this.songTitle}]
`),this.songArtist&&(t+=`[ar:${this.songArtist}]
`),this.songAlbum&&(t+=`[al:${this.songAlbum}]
`),this.lyricsSource&&(t+=`[re:${this.lyricsSource}]
`);for(const e of this.lyrics)if(e.text&&e.text.length>0){const i=m.formatTimestampLRC(e.timestamp),s=e.text.map(r=>r.text).join("").trim();t+=`[${i}]${s}
`}return t}generateTTML(){if(!this.lyrics)return"";let t=`<?xml version="1.0" encoding="UTF-8"?>
`;t+=`<tt xmlns="http://www.w3.org/ns/ttml" xmlns:itunes="http://music.apple.com/lyrics">
`,t+=`  <body>
`;let e;for(let i=0;i<this.lyrics.length;i+=1){const s=this.lyrics[i],r=s.songPart;(r!==e||i===0)&&(i>0&&(t+=`    </div>
`),e=r,e?t+=`    <div itunes:song-part="${e}">
`:t+=`    <div>
`);const n=m.formatTimestampTTML(s.timestamp),a=m.formatTimestampTTML(s.endtime);t+=`      <p begin="${n}" end="${a}">
`;for(const o of s.text){const c=m.formatTimestampTTML(o.timestamp),d=m.formatTimestampTTML(o.endtime),l=o.text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");t+=`        <span begin="${c}" end="${d}">${l}</span>
`}t+=`      </p>
`}return this.lyrics.length>0&&(t+=`    </div>
`),t+=`  </body>
`,t+="</tt>",t}static formatTimestampLRC(t){const e=t/1e3,i=Math.floor(e/60),s=Math.floor(e%60),r=Math.floor(t%1e3/10),n=a=>a.toString().padStart(2,"0");return`${n(i)}:${n(s)}.${n(r)}`}static formatTimestampTTML(t){const e=t/1e3,i=Math.floor(e/3600),s=Math.floor(e%3600/60),r=Math.floor(e%60),n=Math.floor(t%1e3),a=(o,c=2)=>o.toString().padStart(c,"0");return`${a(i)}:${a(s)}:${a(r)}.${a(n,3)}`}downloadLyrics(){if(!this.lyrics||this.lyrics.length===0)return;const t=this.lyrics.some(c=>c.isWordSynced!==!1);let e="",i=this.downloadFormat;i==="auto"&&(i=t?"ttml":"lrc");let s="";if(i==="ttml"?(e=this.generateTTML(),s="application/xml"):(e=this.generateLRC(),s="text/plain"),!e)return;const r=new Blob([e],{type:s}),n=URL.createObjectURL(r),a=document.createElement("a");a.href=n;const o=this.songTitle?`${this.songTitle}${this.songArtist?` - ${this.songArtist}`:""}.${i}`:`lyrics.${i}`;a.download=o,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(n)}render(){this.fontFamily&&(this.style.fontFamily=this.fontFamily),this.style.setProperty("--highlight-color",this.highlightColor);const t=this.lyricsSource??"Unavailable",e=this.cachedIsUnsynced,i=()=>{if(this.isLoading)return W`
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
        `;if(!this.lyrics||this.lyrics.length===0)return W`<div class="no-lyrics">No lyrics found.</div>`;const s=this.findAllInstrumentalGaps(),r=new Map(s.map(n=>[n.insertBeforeIndex,n]));return this.lyrics.map((n,a)=>{const o=`lyrics-line-${a}`,c=n.text[0]?.timestamp||0,d=n.text[n.text.length-1]?.endtime||0,l=n.backgroundText&&n.backgroundText.length>0,p=l?W`<p class="background-vocal-container">
              <span class="background-vocal-wrap">
                ${n.backgroundText.map(($,S)=>{const F=$.timestamp,z=$.endtime,B=z-F,D=this.showRomanization&&$.romanizedText&&$.romanizedText.trim()!==$.text.trim()?W`<span
                          class="lyrics-syllable transliteration no-chars ${$.lineSynced?"line-synced":""}"
                          data-start-time="${F}"
                          data-end-time="${z}"
                          data-duration="${B}"
                          data-syllable-index="0"
                          data-wipe-ratio="1"
                          >${$.romanizedText}</span
                        >`:"";return W`<span class="lyrics-word"
                    ><span
                      class="lyrics-syllable-wrap${D?" has-transliteration":""}"
                      ><span
                        class="lyrics-syllable no-chars${$.lineSynced?" line-synced":""}"
                        data-start-time="${F}"
                        data-end-time="${z}"
                        data-duration="${B}"
                        data-syllable-index="${S}"
                        data-wipe-ratio="1"
                        >${$.text}</span
                      >${D}</span
                    ></span
                  >`})}
              </span>
            </p>`:"",f=l?m.getBackgroundTextPlacement(n):"after",h=this.cachedLineData?.[a],y=h?.wordGroups??[],k=h?.groupGrowable??[],x=h?.groupGlowing??[],b=h?.groupCharRise??[],w=h?.vwFullText??[],T=h?.vwFullDuration??[],I=h?.vwCharOffset??[],L=h?.vwStartMs??[],v=h?.vwEndMs??[],g=h?.lineIsRTL??!1,A=W`<p
          class="main-vocal-container ${g?"rtl-text":""}"
        >
          ${y.map(($,S)=>{const F=k[S],z=x[S],B=b[S],D=F||B,ct=$.some(N=>N.lineSynced),Mt=D?w[S]:"",it=D?T[S]:0,G=Mt.length,Ke=D?I[S]:0,Qe=D?`${a}:${L[S]}:${v[S]}`:"",Xe=D?L[S]:"",Ze=D?v[S]:"";let ne=0;const re=$.map(N=>N.text).join(""),Je=re.trim().length>=16||/[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/.test(re),ti=$[0].timestamp,ei=$[$.length-1].endtime-ti,ii=Math.max(1.2,Math.min(2.5,1.2+ei/1e3*.6));return W`<span
              class="lyrics-word${F?" growable":""}${B?" char-rise":""}${z?" glowing":""}${Je?" allow-break":""}"
              data-virtual-word-id="${Qe}"
              data-virtual-word-start="${Xe}"
              data-virtual-word-end="${Ze}"
              style="--rise-duration: ${ii}s"
              >${$.map((N,si)=>{const Pt=N.timestamp,_t=N.endtime,Rt=_t-Pt,Ft=N.text||"",ae=this.showRomanization&&N.romanizedText&&N.romanizedText.trim()!==N.text.trim()?W`<span
                        class="lyrics-syllable transliteration no-chars ${ct?"line-synced":""}"
                        data-start-time="${Pt}"
                        data-end-time="${_t}"
                        data-duration="${Rt}"
                        data-syllable-index="0"
                        data-wipe-ratio="1"
                        >${N.romanizedText}</span
                      >`:"";let oe=Ft;if(D){let le=0;const ce=Ft.replace(/\s/g,"").length||1;oe=W`${Ft.split("").map(de=>{if(de===" ")return" ";const St=Ke+ne,ni=le/ce;ne+=1,le+=1;const he=400,ri=Math.min(1,Math.max(0,(it-he)/(3e3-he)))**3,ue=G>5,Wt=it<1200;let pe=0;if(ue||Wt){let Tt=0;ue&&(Tt+=Math.min((G-5)/5,1)*.4),Wt&&G>3?Tt+=Math.max(0,1-(it-800)/400)*.3:Wt&&G<=3&&(Tt+=Math.max(0,1-(it-800)/400)*.1),pe=Math.min(Tt,.7)}const ai=1-(G>1?St/(G-1):0)*pe,me=ri*ai,At=1+(G<=3?.05:.04)+me*.08,oi=Math.min(1.1,it/1500);let zt=1;G<=3?zt=.85:G>=6&&(zt=1.1);const li=oi*zt,ci=z?(.35+me*.45)*li:0,di=(At-1)/.1,hi=(it+Rt*2)/3,ui=Math.min(1,Math.max(.3,hi/2e3)),pi=-di*(2*ui),fe=((St+.5)/G-.5)*2*((At-1)*25);return W`<span
                      class="char"
                      data-char-index="${St}"
                      data-syllable-char-index="${St}"
                      data-wipe-start="${ni.toFixed(4)}"
                      data-wipe-duration="${(1/ce).toFixed(4)}"
                      data-horizontal-offset="${fe.toFixed(2)}"
                      data-max-scale="${At.toFixed(3)}"
                      data-matrix-scale="${(At*.98).toFixed(3)}"
                      data-char-offset-x="${(fe*.98).toFixed(2)}"
                      data-shadow-intensity="${ci.toFixed(3)}"
                      data-translate-y-peak="${pi.toFixed(3)}"
                      >${de}</span
                    >`})}`}return W`<span
                  class="lyrics-syllable-wrap${ae?" has-transliteration":""}"
                  ><span
                    class="lyrics-syllable${ct?" line-synced":""}${D?" has-chars":" no-chars"}"
                    data-start-time="${Pt}"
                    data-end-time="${_t}"
                    data-duration="${Rt}"
                    data-word-duration="${it}"
                    data-syllable-index="${si}"
                    data-wipe-ratio="1"
                    >${oe}</span
                  >${ae}</span
                >`})}</span
            >`})}
        </p>`,M=n.text.map($=>$.text).join("").trim(),E=this.showTranslation&&n.translation&&n.translation.trim()!==M?W`<div class="lyrics-translation-container">
                ${n.translation}
              </div>`:"",R=this.showRomanization&&n.romanizedText&&!n.text.some($=>$.romanizedText)&&n.romanizedText.trim()!==M?W`<div
                class="lyrics-romanization-container ${g?"rtl-text":""}"
              >
                ${n.romanizedText}
              </div>`:"";let P=null;const C=r.get(a);if(C){const $=C.gapEnd-C.gapStart,S=$/3,F=m.getGapLoopDelay($);P=W`<div
            id="gap-${a}"
            class="lyrics-line lyrics-gap"
            data-start-time="${C.gapStart}"
            data-end-time="${C.gapEnd}"
            style="--gap-pulse-duration: ${It}ms; --gap-loop-delay: -${F}ms; --gap-exit-duration: ${lt}ms; --gap-exit-scale: ${Ye};"
          >
            <p class="main-vocal-container">
              <span class="lyrics-word"
                ><span class="lyrics-syllable-wrap"
                  ><span
                    class="lyrics-syllable"
                    data-start-time="${C.gapStart}"
                    data-end-time="${C.gapStart+S}"
                    data-duration="${S}"
                    data-wipe-ratio="1"
                    data-syllable-index="0"
                  ></span></span
                ><span class="lyrics-syllable-wrap"
                  ><span
                    class="lyrics-syllable"
                    data-start-time="${C.gapStart+S}"
                    data-end-time="${C.gapStart+S*2}"
                    data-duration="${S}"
                    data-wipe-ratio="1"
                    data-syllable-index="1"
                  ></span></span
                ><span class="lyrics-syllable-wrap"
                  ><span
                    class="lyrics-syllable"
                    data-start-time="${C.gapStart+S*2}"
                    data-end-time="${C.gapEnd}"
                    data-duration="${S}"
                    data-wipe-ratio="1"
                    data-syllable-index="2"
                  ></span></span
              ></span>
            </p>
          </div>`}return W`
          ${P}
          <div
            id="${o}"
            class="lyrics-line ${n.alignment==="end"?"singer-right":"singer-left"} ${g?"rtl-text":""}"
            data-start-time="${c}"
            data-end-time="${d}"
            @click=${()=>this.handleLineClick(n)}
            tabindex="0"
            @keydown=${$=>{($.key==="Enter"||$.key===" ")&&this.handleLineClick(n)}}
          >
            <div class="lyrics-line-container ${g?"rtl-text":""}">
              ${f==="before"?p:""}
              ${A}
              ${f==="after"?p:""}
              ${R} ${E}
            </div>
          </div>
        `})};return W`
      <div
        class="lyrics-container ${e?"is-unsynced":"blur-inactive-enabled"}"
      >
        ${!this.isLoading&&this.lyrics&&this.lyrics.length>0?W`
              <div class="lyrics-header">
                <div class="header-controls">
                  <button
                    class="download-button ${this.showRomanization?"active":""}"
                    @click=${this.toggleRomanization}
                    title="Toggle Romanization"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-speech-icon lucide-speech"
                    >
                      <path
                        d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
                      />
                      <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
                      <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
                    </svg>
                  </button>
                  <button
                    class="download-button ${this.showTranslation?"active":""}"
                    @click=${this.toggleTranslation}
                    title="Toggle Translation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-languages-icon lucide-languages"
                    >
                      <path d="m5 8 6 6" />
                      <path d="m4 14 6-6 2-3" />
                      <path d="M2 5h12" />
                      <path d="M7 2h1" />
                      <path d="m22 22-5-10-5 10" />
                      <path d="M14 18h6" />
                    </svg>
                  </button>
                </div>
                <div class="download-controls">
                  <select
                    class="format-select"
                    @change=${s=>{this.downloadFormat=s.target.value}}
                    .value=${this.downloadFormat}
                    @click=${s=>s.stopPropagation()}
                  >
                    <option value="auto">Auto</option>
                    <option value="lrc">LRC</option>
                    <option value="ttml">TTML</option>
                  </select>
                  <button
                    class="download-button"
                    @click=${this.downloadLyrics}
                    title="Download Lyrics"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-download-icon lucide-download"
                    >
                      <path d="M12 15V3" />
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <path d="m7 10 5 5 5-5" />
                    </svg>
                  </button>
                </div>
              </div>
            `:""}
        ${i()}
        ${this.isLoading?"":W`
              <footer class="lyrics-footer lyrics-line">
                <div class="footer-content">
                  <span
                    class="source-info"
                    style="display: flex; align-items: center; gap: 8px;"
                  >
                    <b style="font-weight: 750;">Source</b> ${t}
                    ${this.availableSources&&this.availableSources.length>1||!this.hasFetchedAllProviders?W`
                          <button
                            class="download-button source-switch-btn"
                            title="Switch Lyrics Source"
                            style="font-family: inherit; font-size: 11px; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255, 255, 255, 0.2); background: transparent; cursor: pointer; color: #aaa; display: inline-flex; align-items: center;"
                            @click=${this.switchSource}
                            ?disabled=${this.isFetchingAlternatives}
                          >
                            <svg
                              class="source-switch-svg lucide lucide-arrow-down-up-icon lucide-arrow-down-up"
                              style="margin-right: 4px;"
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              ${this.isFetchingAlternatives?Xt`<path
                                    d="M21 12a9 9 0 1 1-6.219-8.56"
                                  ></path>`:Xt`<path d="m3 16 4 4 4-4"></path
                                    ><path d="M7 20V4"></path
                                    ><path d="m21 8-4-4-4 4"></path
                                    ><path d="M17 4v16"></path>`}
                            </svg>
                            <span class="source-switch-label"
                              >${this.isFetchingAlternatives?"Switching...":"Switch"}</span
                            >
                          </button>
                        `:""}
                  </span>
                  ${this.songwriters?W`<span
                        class="songwriters-info"
                        style="margin-top: 4px; font-weight: normal; font-size: 0.9em;"
                      >
                        <b style="font-weight: 750;">Songwriters</b> ${this.songwriters}
                      </span>`:""}
                  <span class="version-info" style="margin-top: 8px;">
                    <b style="font-weight: 750;">am-lyrics</b> v${te} •

                    <a
                      href="https://github.com/uimaxbai/apple-music-web-components"
                      target="_blank"
                      rel="noopener noreferrer"
                      style="display: inline-flex; align-items: center; gap: 4px;"
                      >Star me on GitHub
                    </a>
                  </span>
                </div>
              </footer>
            `}
      </div>
    `}}return m.styles=xe`
    /* ==========================================================================
       YOULYPLUS-INSPIRED STYLING - Design Tokens & Variables
       ========================================================================== */
    :host {
      --lyplus-lyrics-palette: var(
        --am-lyrics-highlight-color,
        var(--highlight-color, #ffffff)
      );
      --lyplus-text-primary: var(--lyplus-lyrics-palette);
      /* Use color-mix with the text color rather than just opacity so it adapts */
      --lyplus-text-secondary: color-mix(
        in srgb,
        var(--lyplus-lyrics-palette),
        transparent 45%
      );

      --lyplus-padding-base: 1em;
      --lyplus-padding-line: 10px;
      --lyplus-padding-gap: 0.3em;
      --lyplus-border-radius-base: 0.6em;
      --lyplus-gap-dot-size: 0.4em;
      --lyplus-gap-dot-margin: 0.08em;

      --lyplus-font-size-base: 32px;
      --lyplus-font-size-base-grow: 24.5;
      --lyplus-font-size-subtext: 0.6em;
      --char-rise-y: calc(-0.035 * var(--lyplus-font-size-base));

      --lyplus-blur-amount: 0.07em;
      --lyplus-blur-amount-near: 0.035em;
      --lyplus-fade-gap-timing-function: ease-out;

      --lyrics-scroll-padding-top: 25%;

      display: block;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background: transparent;
      height: 100%;
      overflow: hidden;
      font-weight: bold;
      color: var(--lyplus-text-primary);
    }

    /* ==========================================================================
       CONTAINER & SCROLL BEHAVIOR
       ========================================================================== */
    .lyrics-container {
      padding: 20px;
      padding-top: 80px;
      border-radius: 8px;
      background-color: transparent;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      box-sizing: border-box;
      scrollbar-width: none;
      overflow-anchor: none;
    }

    .lyrics-container::-webkit-scrollbar {
      display: none;
    }

    /* Disable transitions during touch-scrolling for 1:1 feedback */
    .lyrics-container.touch-scrolling .lyrics-line,
    .lyrics-container.touch-scrolling .lyrics-plus-metadata {
      transition: none !important;
      filter: none !important;
    }

    /* Apply smooth gliding transition for mouse-wheel scrolling */
    .lyrics-container.wheel-scrolling .lyrics-line {
      transition: transform 0.3s ease-out !important;
      filter: none !important;
    }

    .lyrics-line.scroll-animate {
      /* Preserve the graceful fade duration; the keyframe handles the
         transform, so we only need to keep opacity/filter transitions
         alive without !important overriding the base rule. */
      transition:
        opacity 0.7s ease,
        filter 0.7s ease,
        transform 0.4s cubic-bezier(0.41, 0, 0.12, 0.99)
          var(--lyrics-line-delay, 0ms);
      animation-name: lyrics-scroll;
      animation-duration: var(--scroll-duration, 400ms);
      animation-timing-function: cubic-bezier(0.41, 0, 0.12, 0.99);
      animation-fill-mode: both;
      animation-delay: var(--lyrics-line-delay, 0ms);
    }

    .lyrics-container.user-scrolling .lyrics-line {
      --lyrics-line-delay: 0ms !important;
      transition-delay: 0ms !important;
    }

    /* ==========================================================================
       LYRICS LINE BASE STYLES
       ========================================================================== */
    .lyrics-line {
      padding: var(--lyplus-padding-line);
      opacity: 0.8;
      color: var(--lyplus-text-secondary);
      font-size: var(--lyplus-font-size-base);
      cursor: pointer;
      transform-origin: left;
      /* Graceful 0.7 s fade so the line stays mostly bright while the
         0.4 s scroll animation runs, then settles into the inactive state. */
      transition:
        opacity 0.7s ease,
        transform 0.4s cubic-bezier(0.41, 0, 0.12, 0.99)
          var(--lyrics-line-delay, 0ms),
        filter 0.7s ease;
      content-visibility: auto;
      contain: layout style;
      text-rendering: optimizeLegibility;
    }

    .lyrics-line:not(.scroll-animate) {
      animation: none;
    }

    /* --- Line Container & Vocal Containers --- */
    .lyrics-line-container {
      overflow-wrap: break-word;
      transform-origin: left;
      transform: translateZ(0);
      transition:
        transform 0.7s ease,
        background-color 0.7s,
        color 0.7s;
    }

    .lyrics-line.active .lyrics-line-container,
    .lyrics-line.pre-active .lyrics-line-container {
      transform: translateZ(0);
      transition:
        transform 0.5s ease,
        background-color 0.18s,
        color 0.18s;
    }

    .main-vocal-container {
      transform-origin: 5% 50%;
      margin: 0;
    }

    .background-vocal-container {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      font-size: var(--lyplus-font-size-subtext);
      line-height: 1.15;
      color: color-mix(in srgb, var(--lyplus-text-secondary) 80%, transparent);
      transition:
        max-height var(--scroll-duration, 400ms)
          cubic-bezier(0.41, 0, 0.12, 0.99),
        opacity var(--scroll-duration, 400ms) cubic-bezier(0.41, 0, 0.12, 0.99);
      margin: 0;
      pointer-events: none;
    }

    .background-vocal-wrap {
      display: block;
      padding-top: 0;
      padding-bottom: 0;
      transition: padding-top var(--scroll-duration, 400ms)
        cubic-bezier(0.41, 0, 0.12, 0.99);
    }

    .lyrics-line.singer-right .background-vocal-container,
    .lyrics-line.rtl-text .background-vocal-container {
      margin-left: auto;
      margin-right: 0;
    }

    /* Background vocals expand only when .bg-expanded is present.
       This is separate from .active so bg vocals can collapse immediately
       while .active stays to keep text white until the scroll passes. */
    .lyrics-line.bg-expanded .background-vocal-container {
      max-height: 4em;
      opacity: 1;
      will-change: max-height, opacity;
    }

    .lyrics-line.bg-expanded .background-vocal-wrap {
      padding-top: 0.26em;
    }

    /* --- Line States & Modifiers --- */
    .lyrics-line.active {
      opacity: 1;
      color: var(--lyplus-text-primary);
    }

    .lyrics-line.pre-active {
      opacity: 1;
    }

    .lyrics-line.persist-highlight {
      filter: none !important;
      opacity: 1;
    }

    .lyrics-line.persist-highlight .lyrics-syllable.finished,
    .lyrics-line.persist-highlight .lyrics-syllable.finished span.char {
      transition: none !important;
    }

    .lyrics-line.singer-right {
      text-align: end;
    }

    .lyrics-line.singer-right .lyrics-line-container,
    .lyrics-line.singer-right .main-vocal-container {
      transform-origin: right;
    }

    .lyrics-line.rtl-text {
      direction: rtl;
      text-align: right !important;
      transform-origin: right;
    }

    .lyrics-line.rtl-text .lyrics-line-container,
    .lyrics-line.rtl-text .main-vocal-container {
      transform-origin: right;
    }

    .lyrics-line.rtl-text .lyrics-romanization-container,
    .lyrics-line.rtl-text .lyrics-translation-container {
      text-align: right;
    }

    /* --- Unsynced (Plain Text) Lyrics Overrides --- */
    .lyrics-container.is-unsynced .lyrics-line {
      opacity: 1 !important;
      color: var(--lyplus-text-primary) !important;
      filter: none !important;
      transform: none !important;
      cursor: default;
    }

    .lyrics-container.is-unsynced .lyrics-line-container {
      transform: none !important;
      background-color: transparent !important;
    }

    .lyrics-container.is-unsynced .lyrics-syllable {
      color: var(--lyplus-text-primary) !important;
      background-color: transparent !important;
      -webkit-background-clip: unset !important;
      background-clip: unset !important;
      -webkit-text-fill-color: unset !important;
      text-fill-color: unset !important;
      text-shadow: none !important;
      filter: none !important;
      opacity: 1 !important;
      transform: none !important;
    }

    @media (hover: hover) and (pointer: fine) {
      .lyrics-line:hover {
        filter: none !important;
        opacity: 1 !important;
      }
      .lyrics-container.is-unsynced .lyrics-line:hover {
        background: transparent !important;
      }
    }

    /* --- Blur Effect for Inactive Lines --- */
    .lyrics-container.blur-inactive-enabled:not(.not-focused)
      .lyrics-line:not(.active):not(.pre-active):not(.lyrics-gap):not(
        .persist-highlight
      ) {
      filter: blur(var(--lyplus-blur-amount));
    }

    /* Viewport Virtualization: Strip expensive filters and animations from
       offscreen lines.  IntersectionObserver toggles this class. */
    .lyrics-line.far-line {
      filter: none !important;
      will-change: auto !important;
      animation: none !important;
    }

    .lyrics-container.blur-inactive-enabled:not(.not-focused)
      .lyrics-line.post-active-line:not(.lyrics-gap):not(.active):not(
        .pre-active
      ):not(.persist-highlight),
    .lyrics-container.blur-inactive-enabled:not(.not-focused)
      .lyrics-line.next-active-line:not(.lyrics-gap):not(.active):not(
        .pre-active
      ):not(.persist-highlight),
    .lyrics-container.blur-inactive-enabled:not(.not-focused)
      .lyrics-line.lyrics-activest:not(.active):not(.lyrics-gap):not(
        .pre-active
      ):not(.persist-highlight) {
      filter: blur(var(--lyplus-blur-amount-near));
    }

    /* Unblur all lines when user is scrolling */
    .lyrics-container.user-scrolling .lyrics-line {
      transition: none !important;
      filter: none !important;
      opacity: 0.8 !important;
    }

    /* Unblur early for pre-active lines */
    .lyrics-container.blur-inactive-enabled .lyrics-line.pre-active {
      filter: blur(0px) !important;
      opacity: 1;
    }

    /* ==========================================================================
       WORD & SYLLABLE STYLES
       ========================================================================== */
    .lyrics-word:not(.allow-break) {
      display: inline-block;
      vertical-align: baseline;
      white-space: nowrap;
    }

    .lyrics-word.allow-break {
      display: inline;
    }

    .lyrics-word.char-rise {
      display: inline-block;
      vertical-align: baseline;
      white-space: nowrap;
    }

    .lyrics-word.char-rise.allow-break {
      display: inline;
      white-space: normal;
    }

    .lyrics-syllable-wrap {
      display: inline;
    }

    .lyrics-syllable-wrap.has-transliteration {
      display: inline-flex;
      flex-direction: column;
      align-items: start;
    }

    .lyrics-syllable {
      display: inline-block;
      vertical-align: baseline;
      color: transparent;
      background-color: var(--lyplus-text-secondary);
      white-space: pre-wrap;
      font-variant-ligatures: none;
      font-feature-settings: 'liga' 0;
      background-clip: text;
      -webkit-background-clip: text;
      transition:
        color 0.7s,
        background-color 0.7s,
        transform 0.7s ease;
    }

    /* --- Syllable States --- */
    .lyrics-syllable.finished {
      background-color: var(--lyplus-text-primary);
      /* Unified transition: transform keeps its 1s glow decay, while
         background-color and color fade at 0.7s so everything dims
         together when the line becomes inactive. */
      transition:
        transform 1s ease,
        background-color 0.7s ease,
        color 0.7s ease;
    }

    .lyrics-syllable.finished.has-chars {
      background-color: transparent;
    }

    .lyrics-line.active:not(.lyrics-gap) .lyrics-syllable {
      transition:
        transform 1s ease,
        background-color 0.5s,
        color 0.5s;
    }

    /* --- Wipe Highlight Effect --- */
    .lyrics-line.active:not(.lyrics-gap) .lyrics-syllable.highlight.no-chars,
    .lyrics-line.active:not(.lyrics-gap)
      .lyrics-syllable.pre-highlight.no-chars {
      background-repeat: no-repeat;
      background-image:
        linear-gradient(
          90deg,
          #ffffff00 0%,
          var(--lyplus-text-primary, #fff) 50%,
          #0000 100%
        ),
        linear-gradient(
          90deg,
          var(--lyplus-text-primary, #fff) 100%,
          #0000 100%
        );
      background-size:
        0.5em 100%,
        0% 100%;
      background-position:
        -0.5em 0%,
        -0.25em 0%;
    }

    .lyrics-line.active:not(.lyrics-gap) .lyrics-syllable.highlight.rtl-text,
    .lyrics-line.active:not(.lyrics-gap)
      .lyrics-syllable.pre-highlight.rtl-text {
      direction: rtl;
      background-image:
        linear-gradient(
          -90deg,
          var(--lyplus-text-primary) 0%,
          transparent 100%
        ),
        linear-gradient(
          -90deg,
          var(--lyplus-text-primary) 100%,
          transparent 100%
        );
      background-position:
        calc(100% + 0.5em) 0%,
        right 0%;
    }

    /* Background vocals: muted gray wipe instead of white.
       Must match specificity of the main .active .highlight rule (0,3,1). */
    .lyrics-line.active
      .background-vocal-container
      .lyrics-syllable.highlight.no-chars,
    .lyrics-line.active
      .background-vocal-container
      .lyrics-syllable.pre-highlight.no-chars,
    .lyrics-line.pre-active
      .background-vocal-container
      .lyrics-syllable.highlight.no-chars,
    .lyrics-line.pre-active
      .background-vocal-container
      .lyrics-syllable.pre-highlight.no-chars {
      background-image:
        linear-gradient(
          90deg,
          #ffffff00 0%,
          color-mix(in srgb, var(--lyplus-text-primary, #fff) 50%, #888888) 50%,
          #0000 100%
        ),
        linear-gradient(
          90deg,
          color-mix(in srgb, var(--lyplus-text-primary, #fff) 50%, #888888) 100%,
          #0000 100%
        );
    }

    .lyrics-line.active
      .background-vocal-container
      .lyrics-syllable.highlight.rtl-text,
    .lyrics-line.active
      .background-vocal-container
      .lyrics-syllable.pre-highlight.rtl-text,
    .lyrics-line.pre-active
      .background-vocal-container
      .lyrics-syllable.highlight.rtl-text,
    .lyrics-line.pre-active
      .background-vocal-container
      .lyrics-syllable.pre-highlight.rtl-text {
      background-image:
        linear-gradient(
          -90deg,
          color-mix(in srgb, var(--lyplus-text-primary) 50%, #888888) 0%,
          transparent 100%
        ),
        linear-gradient(
          -90deg,
          color-mix(in srgb, var(--lyplus-text-primary) 50%, #888888) 100%,
          transparent 100%
        );
    }

    /* Non-growable words float up with a gentle curve */
    .lyrics-line.active:not(.lyrics-gap)
      .lyrics-word:not(.growable)
      .lyrics-syllable.highlight {
      transform: translate3d(0, var(--char-rise-y, -1.12px), 0);
    }

    .lyrics-line.persist-highlight:not(.lyrics-gap)
      .lyrics-word:not(.growable)
      .lyrics-syllable.finished {
      transform: translate3d(0, var(--char-rise-y, -1.12px), 0);
    }

    .lyrics-word.growable .lyrics-syllable.cleanup .char {
      transform: translate3d(0, var(--char-rise-y, -1.12px), 0);
    }

    .lyrics-word.char-rise .lyrics-syllable.cleanup .char {
      transform: translate3d(0, var(--char-rise-y, -1.12px), 0);
    }

    .lyrics-line.persist-highlight
      .lyrics-word.growable
      .lyrics-syllable.finished
      .char,
    .lyrics-line.persist-highlight
      .lyrics-word.char-rise
      .lyrics-syllable.finished
      .char {
      transform: translate3d(0, var(--char-rise-y, -1.12px), 0);
    }

    /* Background vocal overrides — placed AFTER main rules so they win
       on equal specificity. */
    .background-vocal-container .lyrics-syllable {
      background-color: color-mix(
        in srgb,
        var(--lyplus-text-secondary) 50%,
        #888888
      );
    }

    .lyrics-line.active:not(.lyrics-gap)
      .background-vocal-container
      .lyrics-syllable.finished,
    .lyrics-line.pre-active
      .background-vocal-container
      .lyrics-syllable.finished {
      background-color: color-mix(
        in srgb,
        var(--lyplus-text-primary) 50%,
        #888888
      );
    }

    .background-vocal-container .lyrics-syllable.line-synced {
      color: color-mix(
        in srgb,
        var(--lyplus-text-secondary) 50%,
        #888888
      ) !important;
    }

    .lyrics-line.active:not(.lyrics-gap)
      .background-vocal-container
      .lyrics-syllable.line-synced,
    .lyrics-line.pre-active
      .background-vocal-container
      .lyrics-syllable.line-synced {
      color: color-mix(
        in srgb,
        var(--lyplus-text-primary) 50%,
        #888888
      ) !important;
    }

    .lyrics-line.active:not(.lyrics-gap)
      .background-vocal-container
      .lyrics-syllable.line-synced.finished,
    .lyrics-line.pre-active
      .background-vocal-container
      .lyrics-syllable.line-synced.finished {
      color: color-mix(
        in srgb,
        var(--lyplus-text-primary) 50%,
        #888888
      ) !important;
    }

    .lyrics-syllable.pre-highlight {
      animation-name: pre-wipe-universal;
      animation-duration: var(--pre-wipe-duration);
      animation-delay: var(--pre-wipe-delay);
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }

    .lyrics-syllable.pre-highlight.rtl-text {
      animation-name: pre-wipe-universal-rtl;
    }

    .lyrics-syllable.transliteration {
      font-size: var(--lyplus-font-size-subtext);
      white-space: pre-wrap;
      pointer-events: none;
      user-select: none;
    }

    /* Syllable with chars: make syllable transparent, chars handle color */
    .lyrics-line .lyrics-syllable.has-chars:not(.finished) {
      background-color: transparent;
      color: transparent;
    }

    .lyrics-syllable span.char {
      display: inline-block;
      background-color: var(--lyplus-text-secondary);
      white-space: break-spaces;
      font-variant-ligatures: none;
      font-feature-settings: 'liga' 0;
      background-clip: text;
      -webkit-background-clip: text;
      backface-visibility: hidden;
      transform-origin: 50% 80%;
      transition:
        color 0.7s,
        background-color 0.7s,
        transform 0.7s ease;
    }

    .lyrics-syllable.finished span.char {
      background-color: var(--lyplus-text-primary);
      transition:
        color 0.7s,
        background-color 0.7s,
        transform 0.7s ease;
    }

    /* Active char spans: structural only, wipe animation sets gradient */
    .lyrics-line.active .lyrics-syllable span.char {
      background-clip: text;
      -webkit-background-clip: text;
      background-repeat: no-repeat;
      background-image:
        linear-gradient(
          90deg,
          #ffffff00 0%,
          var(--lyplus-text-primary, #fff) 50%,
          #0000 100%
        ),
        linear-gradient(
          90deg,
          var(--lyplus-text-primary, #fff) 100%,
          #0000 100%
        );
      background-size:
        0.5em 100%,
        0% 100%;
      background-position:
        -0.5em 0%,
        -0.25em 0%;
      transition:
        transform 0.7s ease,
        color 0.18s;
    }

    .lyrics-line.active .lyrics-syllable span.char.highlight {
      background-image:
        linear-gradient(
          -90deg,
          var(--lyplus-text-primary, #fff) 0%,
          #0000 100%
        ),
        linear-gradient(
          -90deg,
          var(--lyplus-text-primary, #fff) 100%,
          #0000 100%
        );
      background-position:
        calc(100% + 0.5em) 0%,
        calc(100% + 0.25em) 0%;
    }

    .lyrics-line.active .lyrics-syllable.pre-highlight span.char {
      background-image:
        linear-gradient(
          90deg,
          #ffffff00 0%,
          var(--lyplus-text-primary, #fff) 50%,
          #0000 100%
        ),
        linear-gradient(
          90deg,
          var(--lyplus-text-primary, #fff) 100%,
          #0000 100%
        );
      background-size:
        0.75em 100%,
        0% 100%;
      background-position:
        -0.85em 0%,
        -0.25em 0%;
    }

    /* ==========================================================================
       INSTRUMENTAL GAP STYLES
       ========================================================================== */
    .lyrics-gap {
      max-height: 1.6em;
      padding: var(--lyplus-padding-gap);
      overflow: visible;
      opacity: 0;
      box-sizing: content-box;
      background-clip: unset;
      transform-origin: top;
      content-visibility: visible !important;
      contain: none !important;
      transition:
        opacity 160ms ease-out,
        transform var(--scroll-duration, 280ms) var(--lyrics-line-delay, 0ms);
    }

    .lyrics-gap.active {
      opacity: 1;
      transition:
        opacity 160ms ease-out,
        transform var(--scroll-duration, 280ms);
    }

    /* Exiting state: quickly collapse width and height so dots don't distort page, or remove max-height transition */
    .lyrics-gap.gap-exiting {
      opacity: 1;
    }

    .lyrics-gap .main-vocal-container {
      transform: translateY(-25%) scale(1);
      transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .lyrics-gap:not(.active):not(.gap-exiting) .main-vocal-container {
      transform: translateY(-25%) scale(0);
    }

    /* Pulse — must come BEFORE .gap-exiting so exiting wins via specificity+order */
    .lyrics-gap.active .main-vocal-container {
      animation: gap-loop var(--gap-pulse-duration, 4000ms) ease-in-out infinite
        alternate;
      animation-delay: var(--gap-loop-delay, 0ms);
    }

    /* Jump animation plays during exit — disable transition so animation wins.
       Placed AFTER .active so it wins when both classes are present briefly. */
    .lyrics-gap.gap-exiting .main-vocal-container {
      animation: gap-ended var(--gap-exit-duration, 360ms)
        cubic-bezier(0.33, 1, 0.68, 1) forwards;
      transition: none !important;
    }

    .lyrics-gap .lyrics-syllable {
      display: inline-block;
      width: var(--lyplus-gap-dot-size);
      height: var(--lyplus-gap-dot-size);
      background-color: var(--lyplus-text-primary);
      border-radius: 50%;
      margin: 0 var(--lyplus-gap-dot-margin);
    }

    /* Line-synced lyrics should fade in instantly/quickly instead of wiping */
    .lyrics-syllable.line-synced {
      background: transparent !important;
      color: var(--lyplus-text-secondary) !important;
    }

    .lyrics-line.active .lyrics-syllable.line-synced {
      animation: fade-in-line 0.2s ease-out forwards !important;
      color: var(--lyplus-text-primary) !important;
    }

    .lyrics-line.pre-active .lyrics-syllable.line-synced {
      animation: fade-in-line 0.14s ease-out forwards !important;
      color: var(--lyplus-text-primary) !important;
    }

    .lyrics-line.active .lyrics-syllable.line-synced span.char,
    .lyrics-line.pre-active .lyrics-syllable.line-synced span.char {
      background-image: none !important;
      background-color: var(--lyplus-text-primary) !important;
      transition: background-color 120ms ease-out !important;
    }

    @keyframes fade-in-line {
      from {
        opacity: 0.5;
        color: var(--lyplus-text-secondary);
      }
      to {
        opacity: 1;
        color: var(--lyplus-lyrics-palette);
      }
    }

    .lyrics-gap .lyrics-syllable {
      background-color: var(--lyplus-text-secondary);
      background-clip: unset;
    }

    .lyrics-gap.active .lyrics-syllable.finished,
    .lyrics-gap.gap-exiting .lyrics-syllable.finished,
    .lyrics-gap:not(.active):not(.gap-exiting).post-active-line
      .lyrics-syllable,
    .lyrics-gap:not(.active):not(.gap-exiting).lyrics-activest
      .lyrics-syllable {
      background-color: var(--lyplus-text-primary);
      animation: none !important;
      opacity: 1;
    }

    /* ==========================================================================
       METADATA & FOOTER STYLES
       ========================================================================== */
    .lyrics-plus-metadata {
      display: block;
      position: relative;
      box-sizing: border-box;
      font-weight: normal;
      transform: translateY(var(--lyrics-scroll-offset, 0px));
      transition:
        opacity 0.3s ease,
        transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)
          var(--lyrics-line-delay, 0ms),
        filter 0.3s ease;
    }

    .lyrics-plus-empty {
      display: block;
      height: 100vh;
      transform: translateY(var(--lyrics-scroll-offset, 0px));
    }

    .lyrics-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      text-align: left;
      font-size: calc(var(--lyplus-font-size-base) * 0.5);
      color: var(--lyplus-text-secondary);
      padding: 20px 0 50vh 0;
      margin-top: 10px;
      font-weight: 400;
      opacity: 0.8;
      transition:
        opacity 0.3s ease,
        transform 0.5s cubic-bezier(0.41, 0, 0.12, 0.99),
        filter 0.3s ease;
      transform-origin: left;
    }

    .lyrics-footer.lyrics-line {
      font-size: calc(var(--lyplus-font-size-base) * 0.5);
      padding: 20px var(--lyplus-padding-line) 50vh var(--lyplus-padding-line);
      margin-top: 0;
    }

    .lyrics-footer.active {
      opacity: 1;
      color: rgba(255, 255, 255, 0.5); /* Grey instead of primary */
    }

    .lyrics-footer.scroll-animate {
      transition: none !important;
      animation-name: lyrics-scroll;
      animation-duration: var(--scroll-duration, 280ms);
      animation-timing-function: cubic-bezier(0.41, 0, 0.12, 0.99);
      animation-fill-mode: both;
      animation-delay: var(--lyrics-line-delay, 0ms);
    }

    .lyrics-container.blur-inactive-enabled:not(.not-focused)
      .lyrics-footer:not(.active) {
      filter: blur(var(--lyplus-blur-amount));
      opacity: 0.5;
    }

    .lyrics-container.user-scrolling .lyrics-footer {
      transition: none !important;
      filter: none !important;
      opacity: 0.8 !important;
    }

    .lyrics-footer p {
      margin: 5px 0;
    }

    .lyrics-footer a {
      color: var(--lyplus-text-primary); /* Stand out using primary color */
      text-underline-offset: 2px;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    .lyrics-footer a:hover {
      opacity: 1;
    }

    .footer-content {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;
    }

    .footer-controls {
      display: flex;
      align-items: center;
    }

    /* ==========================================================================
       HEADER & CONTROLS
       ========================================================================== */
    .lyrics-header {
      display: flex;
      padding: 10px 0;
      margin-bottom: 10px;
      gap: 10px;
      justify-content: space-between;
      align-items: center;
    }

    .lyrics-header .download-button {
      background: none;
      border: none;
      cursor: pointer;
      color: #aaa;
      padding: 0;
      margin-left: 10px;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      font-family: inherit;
    }

    .lyrics-header .download-button:hover {
      color: rgba(255, 255, 255, 0.9);
    }

    .header-controls {
      display: flex;
      gap: 8px;
    }

    .download-controls {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .control-button {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      padding: 2px 8px;
      font-size: 0.8em;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      transition: all 0.2s;
      font-weight: normal;
    }

    .control-button:hover {
      color: rgba(255, 255, 255, 0.9);
      border-color: rgba(255, 255, 255, 0.5);
    }

    .control-button.active {
      background-color: var(--lyplus-text-primary);
      border-color: var(--lyplus-text-primary);
      color: #000;
    }

    .format-select {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.8em;
      margin-left: 10px;
      padding: 2px 5px;
      cursor: pointer;
      font-weight: normal;
      font-family: inherit;
    }

    .format-select:hover {
      color: rgba(255, 255, 255, 0.9);
      border-color: rgba(255, 255, 255, 0.5);
    }

    .format-select option {
      background: #1a1a1a;
      color: #fff;
    }

    /* ==========================================================================
       TRANSLATION & ROMANIZATION
       ========================================================================== */
    .lyrics-translation-container,
    .lyrics-romanization-container {
      padding-top: 0.2em;
      opacity: 0.8;
      font-size: var(--lyplus-font-size-subtext);
      overflow-wrap: break-word;
      pointer-events: none;
      user-select: none;
      transition:
        opacity 0.3s ease,
        color 0.3s;
      font-weight: normal;
    }

    .lyrics-romanization-container {
      direction: ltr !important;
    }

    .lyrics-romanization-container.rtl-text {
      direction: rtl !important;
      text-align: right;
    }

    .lyrics-romanization-container .lyrics-syllable {
      white-space: pre-wrap;
    }

    .lyrics-translation-container {
      opacity: 0.5;
    }

    .main-line-wrapper.small {
      font-size: 0.5em;
      opacity: 0.8;
      display: block;
      margin-bottom: 0px;
    }

    .translation-line {
      font-size: 1em;
      font-weight: bold;
      display: block;
      margin-top: 0px;
      line-height: 1.1;
    }

    .romanized-line {
      font-size: 0.5em;
      color: rgba(255, 255, 255, 0.5);
      display: block;
      margin-top: 2px;
      font-weight: normal;
    }

    /* ==========================================================================
       SKELETON LOADING
       ========================================================================== */
    @keyframes skeleton-loading {
      0% {
        background-color: rgba(255, 255, 255, 0.1);
      }
      100% {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    .skeleton-line {
      height: 2.5em;
      margin: 20px 0;
      border-radius: 8px;
      animation: skeleton-loading 1s linear infinite alternate;
      opacity: 0.7;
      width: 60%;
    }

    .skeleton-line:nth-child(even) {
      width: 80%;
    }
    .skeleton-line:nth-child(3n) {
      width: 50%;
    }
    .skeleton-line:nth-child(5n) {
      width: 70%;
    }

    .no-lyrics {
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.2em;
      text-align: center;
      padding: 2em;
      font-weight: normal;
    }

    /* ==========================================================================
       KEYFRAME ANIMATIONS
       ========================================================================== */

    /* Wipe animation for syllables */
    @keyframes wipe {
      from {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          -0.375em 0%,
          left;
      }
      to {
        background-size:
          0.75em 100%,
          100% 100%;
        background-position:
          calc(100% + 0.375em) 0%,
          left;
      }
    }

    @keyframes start-wipe {
      0% {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          -0.75em 0%,
          -0.375em 0%;
      }
      100% {
        background-size:
          0.75em 100%,
          100% 100%;
        background-position:
          calc(100% + 0.375em) 0%,
          left;
      }
    }

    @keyframes wipe-rtl {
      from {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          calc(100% + 0.375em) 0%,
          calc(100% + 0.36em) 0%;
      }
      to {
        background-size:
          0.75em 100%,
          100% 100%;
        background-position:
          -0.75em 0%,
          right 0%;
      }
    }

    @keyframes start-wipe-rtl {
      0% {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          calc(100% + 0.75em) 0%,
          calc(100% + 0.5em) 0%;
      }
      100% {
        background-size:
          0.75em 100%,
          100% 100%;
        background-position:
          -0.75em 0%,
          right 0%;
      }
    }

    @keyframes pre-wipe-universal {
      from {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          -0.75em 0%,
          left;
      }
      to {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          -0.375em 0%,
          left;
      }
    }

    @keyframes pre-wipe-universal-rtl {
      from {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          calc(100% + 0.75em) 0%,
          right 0%;
      }
      to {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          calc(100% + 0.375em) 0%,
          right 0%;
      }
    }

    @keyframes pre-wipe-char {
      from {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          -0.75em 0%,
          left;
      }
      to {
        background-size:
          0.75em 100%,
          0% 100%;
        background-position:
          -0.375em 0%,
          left;
      }
    }

    /* Gap dot animations */
    @keyframes gap-loop {
      from {
        transform: translateY(-25%) scale(1.12);
      }
      to {
        transform: translateY(-25%) scale(var(--gap-exit-scale, 0.85));
      }
    }

    @keyframes gap-ended {
      0% {
        transform: translateY(-25%) scale(var(--gap-exit-scale, 0.85));
      }
      35% {
        transform: translateY(-25%) scale(1.2);
      }
      100% {
        transform: translateY(-25%) scale(0);
      }
    }

    @keyframes fade-gap {
      from {
        background-color: var(--lyplus-text-secondary);
      }
      to {
        background-color: var(--lyplus-text-primary);
      }
    }

    /* Scroll animation — class is removed and re-added (with a forced
       reflow in between) to reliably restart the animation each time */
    @keyframes lyrics-scroll {
      from {
        transform: translate3d(0, var(--scroll-delta), 0);
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }

    /* Character grow animation — translate3d+scale3d for smooth transform,
       drop-shadow for glow */
    @keyframes grow-dynamic {
      0% {
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
        filter: drop-shadow(
          0 0 0
            color-mix(in srgb, var(--lyplus-lyrics-palette), transparent 100%)
        );
      }
      25%,
      30% {
        transform: translate3d(
            var(--char-offset-x, 0px),
            var(--translate-y-peak, -2px),
            0
          )
          scale3d(var(--matrix-scale, 1.1), var(--matrix-scale, 1.1), 1);
        filter: drop-shadow(
          0 0 0.1em
            color-mix(
              in srgb,
              var(--lyplus-lyrics-palette),
              transparent calc((1 - var(--shadow-intensity, 1)) * 100%)
            )
        );
      }
      75%,
      100% {
        transform: translate3d(0, var(--char-rise-y, -1.12px), 0)
          scale3d(1, 1, 1);
        filter: drop-shadow(
          0 0 0
            color-mix(in srgb, var(--lyplus-lyrics-palette), transparent 100%)
        );
      }
    }

    @keyframes rise-char {
      0% {
        transform: translate3d(0, 0, 0);
      }
      65%,
      100% {
        transform: translate3d(0, var(--char-rise-y, -1.12px), 0);
      }
    }

    @keyframes grow-static {
      0%,
      100% {
        transform: scale3d(1.01, 1.01, 1.1) translateY(-0.05%);
        text-shadow: 0 0 0
          color-mix(in srgb, var(--lyplus-lyrics-palette), transparent 100%);
      }
      30%,
      40% {
        transform: scale3d(1.1, 1.1, 1.1) translateY(-0.05%);
        text-shadow: 0 0 0.3em
          color-mix(in srgb, var(--lyplus-lyrics-palette), transparent 50%);
      }
    }

    /* Fade in animation */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 0.7;
        transform: translateY(0);
      }
    }

    /* Legacy support */
    .opposite-turn {
      text-align: right;
    }

    .singer-right {
      text-align: right;
      justify-content: flex-end;
    }

    .singer-left {
      text-align: left;
      justify-content: flex-start;
    }

    /* Legacy progress-text for backward compatibility */
    .progress-text {
      position: relative;
      display: inline-block;
      background: linear-gradient(
        to right,
        var(--lyplus-text-primary) 0%,
        var(--lyplus-text-primary) var(--line-progress, 0%),
        var(--lyplus-text-secondary) var(--line-progress, 0%),
        var(--lyplus-text-secondary) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: var(--lyplus-text-secondary);
      transform: translate3d(0, 0, 0);
      will-change: background-size;
    }

    .progress-text::before {
      display: none;
    }

    .active-line {
      font-weight: bold;
    }

    .background-text {
      display: block;
      color: var(--lyplus-text-secondary);
      font-size: 0.8em;
      font-style: normal;
      margin: 0;
      flex-shrink: 0;
      line-height: 1.1;
    }

    .background-text.before {
      order: -1;
    }

    .background-text.after {
      order: 1;
    }

    .instrumental-line {
      display: inline-flex;
      align-items: baseline;
      gap: 8px;
      color: var(--lyplus-text-secondary);
      font-size: 0.9em;
      padding: 4px 10px;
      animation: fadeInUp 220ms ease;
      font-weight: normal;
    }

    .instrumental-duration {
      color: var(--lyplus-text-secondary);
      font-size: 0.8em;
    }
  `,_([O({type:String})],m.prototype,"query",void 0),_([O({type:String})],m.prototype,"musicId",void 0),_([O({type:String})],m.prototype,"isrc",void 0),_([O({type:String})],m.prototype,"ttml",void 0),_([O({type:String,attribute:"song-title"})],m.prototype,"songTitle",void 0),_([Q()],m.prototype,"downloadFormat",void 0),_([O({type:String,attribute:"song-artist"})],m.prototype,"songArtist",void 0),_([O({type:String,attribute:"song-album"})],m.prototype,"songAlbum",void 0),_([O({type:String,attribute:"songwriters"})],m.prototype,"songwriters",void 0),_([O({type:Number,attribute:"song-duration"})],m.prototype,"songDurationMs",void 0),_([O({type:String,attribute:"highlight-color"})],m.prototype,"highlightColor",void 0),_([O({type:String,attribute:"font-family"})],m.prototype,"fontFamily",void 0),_([O({type:Boolean})],m.prototype,"autoScroll",void 0),_([O({type:Boolean})],m.prototype,"interpolate",void 0),_([Q()],m.prototype,"showRomanization",void 0),_([Q()],m.prototype,"showTranslation",void 0),_([O({type:Number})],m.prototype,"duration",void 0),_([O({type:Number,attribute:"currenttime",hasChanged:()=>!1})],m.prototype,"currentTime",null),_([Q()],m.prototype,"isLoading",void 0),_([Q()],m.prototype,"lyrics",void 0),_([Q()],m.prototype,"lyricsSource",void 0),_([Q()],m.prototype,"availableSources",void 0),_([Q()],m.prototype,"currentSourceIndex",void 0),_([qe(".lyrics-container")],m.prototype,"lyricsContainer",void 0),window.customElements.define("am-lyrics",m),ye}var be=yi();const gi=mi(be),Ei=fi({__proto__:null,default:gi},[be]);export{Ei as a};
