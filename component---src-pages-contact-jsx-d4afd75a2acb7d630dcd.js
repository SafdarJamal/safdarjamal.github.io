"use strict";(self.webpackChunkmy_portfolio_website=self.webpackChunkmy_portfolio_website||[]).push([[661],{4241:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(1883),s=n(7896),i=n.p+"static/social-538ce9077e35787aacb4da2aee722261.png";var a=e=>{let{title:t,description:n}=e;const{site:{siteMetadata:{siteUrl:a,title:c,description:l}}}=(0,o.useStaticQuery)("4237499240"),{pathname:u}=(0,s.useLocation)(),f=""+a+u,d="/"===u?c+" | Software Developer/Engineer":t+" | "+c,m=n||l;return r.createElement(r.Fragment,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,d," "),r.createElement("meta",{name:"description",content:m}),r.createElement("meta",{name:"image",content:i}),r.createElement("meta",{property:"og:locale",content:"en_US"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:url",content:f}),r.createElement("meta",{property:"og:site_name",content:"Safdar Jamal"}),r.createElement("meta",{property:"og:title",content:d}),r.createElement("meta",{property:"og:description",content:m}),r.createElement("meta",{property:"og:image",content:i}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:"@_safdarjamal"}),r.createElement("meta",{name:"twitter:title",content:d}),r.createElement("meta",{name:"twitter:description",content:m}),r.createElement("meta",{name:"twitter:image",content:i}))}},2235:function(e,t,n){n.r(t),n.d(t,{Head:function(){return Ge},default:function(){return Ve}});var r=n(7294),o=n(4241);function s(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:a}=Object,c=(l=Object.create(null),e=>{const t=i.call(e);return l[t]||(l[t]=t.slice(8,-1).toLowerCase())});var l;const u=e=>(e=e.toLowerCase(),t=>c(t)===e),f=e=>t=>typeof t===e,{isArray:d}=Array,m=f("undefined");const p=u("ArrayBuffer");const h=f("string"),g=f("function"),b=f("number"),y=e=>null!==e&&"object"==typeof e,E=e=>{if("object"!==c(e))return!1;const t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},w=u("Date"),O=u("File"),S=u("Blob"),v=u("FileList"),R=u("URLSearchParams");function x(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),d(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function A(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,T=e=>!m(e)&&e!==N;const j=(C="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>C&&e instanceof C);var C;const P=u("HTMLFormElement"),_=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),F=u("RegExp"),U=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};x(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},D="abcdefghijklmnopqrstuvwxyz",L="0123456789",B={DIGIT:L,ALPHA:D,ALPHA_DIGIT:D+D.toUpperCase()+L};const k=u("AsyncFunction");var q={isArray:d,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!m(e)&&null!==e.constructor&&!m(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||g(e.append)&&("formdata"===(t=c(e))||"object"===t&&g(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:h,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:E,isUndefined:m,isDate:w,isFile:O,isBlob:S,isRegExp:F,isFunction:g,isStream:e=>y(e)&&g(e.pipe),isURLSearchParams:R,isTypedArray:j,isFileList:v,forEach:x,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},r=(r,o)=>{const s=t&&A(n,o)||o;E(n[s])&&E(r)?n[s]=e(n[s],r):E(r)?n[s]=e({},r):d(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&x(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(x(t,((t,r)=>{n&&g(t)?e[r]=s(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||c[i]||(t[i]=e[i],c[i]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:c,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(d(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:P,hasOwnProperty:_,hasOwnProp:_,reduceDescriptors:U,freezeMethods:e=>{U(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return d(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:A,global:N,isContextDefined:T,ALPHABET:B,generateString:(e=16,t=B.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&g(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=d(e)?[]:{};return x(e,((e,t)=>{const s=n(e,r+1);!m(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:k,isThenable:e=>e&&(y(e)||g(e))&&g(e.then)&&g(e.catch)};function I(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}q.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=I.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{z[e]={value:e}})),Object.defineProperties(I,z),Object.defineProperty(M,"isAxiosError",{value:!0}),I.from=(e,t,n,r,o,s)=>{const i=Object.create(M);return q.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),I.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var H=I;function J(e){return q.isPlainObject(e)||q.isArray(e)}function W(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function K(e,t,n){return e?e.concat(t).map((function(e,t){return e=W(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const V=q.toFlatObject(q,{},null,(function(e){return/^is[A-Z]/.test(e)}));var G=function(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!q.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(q.isDate(e))return e.toISOString();if(!a&&q.isBlob(e))throw new H("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(e)||q.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(q.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(q.isArray(e)&&function(e){return q.isArray(e)&&!e.some(J)}(e)||(q.isFileList(e)||q.endsWith(n,"[]"))&&(a=q.toArray(e)))return n=W(n),a.forEach((function(e,r){!q.isUndefined(e)&&null!==e&&t.append(!0===i?K([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!J(e)||(t.append(K(o,n,s),c(e)),!1)}const u=[],f=Object.assign(V,{defaultVisitor:l,convertValue:c,isVisitable:J});if(!q.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!q.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),q.forEach(n,(function(n,s){!0===(!(q.isUndefined(n)||null===n)&&o.call(t,n,q.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function $(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function X(e,t){this._pairs=[],e&&G(e,this,t)}const Q=X.prototype;Q.append=function(e,t){this._pairs.push([e,t])},Q.toString=function(e){const t=e?function(t){return e.call(this,t,$)}:$;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Z=X;function Y(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(e,t,n){if(!t)return e;const r=n&&n.encode||Y,o=n&&n.serialize;let s;if(s=o?o(t,n):q.isURLSearchParams(t)?t.toString():new Z(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var te=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var re={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Z,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};var oe=function(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&q.isArray(r)?r.length:s,a)return q.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&q.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&q.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,((e,r)=>{t(function(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const se={transitional:ne,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=q.isObject(e);o&&q.isHTMLForm(e)&&(e=new FormData(e));if(q.isFormData(e))return r&&r?JSON.stringify(oe(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return G(e,new re.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return re.isNode&&q.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=q.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return G(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||se.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&q.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw H.from(o,H.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],(e=>{se.headers[e]={}}));var ie=se;const ae=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const ce=Symbol("internals");function le(e){return e&&String(e).trim().toLowerCase()}function ue(e){return!1===e||null==e?e:q.isArray(e)?e.map(ue):String(e)}function fe(e,t,n,r,o){return q.isFunction(r)?r.call(this,t,n):(o&&(t=n),q.isString(t)?q.isString(r)?-1!==t.indexOf(r):q.isRegExp(r)?r.test(t):void 0:void 0)}class de{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=le(t);if(!o)throw new Error("header name must be a non-empty string");const s=q.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ue(e))}const s=(e,t)=>q.forEach(e,((e,n)=>o(e,n,t)));return q.isPlainObject(e)||e instanceof this.constructor?s(e,t):q.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ae[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=le(e)){const n=q.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(q.isFunction(t))return t.call(this,e,n);if(q.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=le(e)){const n=q.findKey(this,e);return!(!n||void 0===this[n]||t&&!fe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=le(e)){const o=q.findKey(n,e);!o||t&&!fe(0,n[o],o,t)||(delete n[o],r=!0)}}return q.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!fe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return q.forEach(this,((r,o)=>{const s=q.findKey(n,o);if(s)return t[s]=ue(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ue(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return q.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&q.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ce]=this[ce]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=le(e);t[r]||(!function(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return q.isArray(e)?e.forEach(r):r(e),this}}de.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),q.reduceDescriptors(de.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),q.freezeMethods(de);var me=de;function pe(e,t){const n=this||ie,r=t||n,o=me.from(r.headers);let s=r.data;return q.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function he(e){return!(!e||!e.__CANCEL__)}function ge(e,t,n){H.call(this,null==e?"canceled":e,H.ERR_CANCELED,t,n),this.name="CanceledError"}q.inherits(ge,H,{__CANCEL__:!0});var be=ge;var ye=re.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),q.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),q.isString(r)&&i.push("path="+r),q.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ee(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var we=re.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=q.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};var Oe=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}};function Se(e,t){let n=0;const r=Oe(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const ve={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=me.from(e.headers).normalize(),s=e.responseType;let i,a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}q.isFormData(r)&&(re.isStandardBrowserEnv||re.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?q.isString(a=o.getContentType())&&o.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=Ee(e.baseURL,e.url);function f(){if(!l)return;const r=me.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),c()}),(function(e){n(e),c()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),ee(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(f)},l.onabort=function(){l&&(n(new H("Request aborted",H.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new H("Network Error",H.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||ne;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new H(t,r.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,e,l)),l=null},re.isStandardBrowserEnv){const t=(e.withCredentials||we(u))&&e.xsrfCookieName&&ye.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in l&&q.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),q.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Se(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{l&&(n(!t||t.type?new be(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);d&&-1===re.protocols.indexOf(d)?n(new H("Unsupported protocol "+d+":",H.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};q.forEach(ve,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Re=e=>`- ${e}`,xe=e=>q.isFunction(e)||null===e||!1===e;var Ae=e=>{e=q.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!xe(n)&&(r=ve[(t=String(n)).toLowerCase()],void 0===r))throw new H(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Re).join("\n"):" "+Re(e[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new be(null,e)}function Te(e){Ne(e),e.headers=me.from(e.headers),e.data=pe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ae(e.adapter||ie.adapter)(e).then((function(t){return Ne(e),t.data=pe.call(e,e.transformResponse,t),t.headers=me.from(t.headers),t}),(function(t){return he(t)||(Ne(e),t&&t.response&&(t.response.data=pe.call(e,e.transformResponse,t.response),t.response.headers=me.from(t.response.headers))),Promise.reject(t)}))}const je=e=>e instanceof me?e.toJSON():e;function Ce(e,t){t=t||{};const n={};function r(e,t,n){return q.isPlainObject(e)&&q.isPlainObject(t)?q.merge.call({caseless:n},e,t):q.isPlainObject(t)?q.merge({},t):q.isArray(t)?t.slice():t}function o(e,t,n){return q.isUndefined(t)?q.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!q.isUndefined(t))return r(void 0,t)}function i(e,t){return q.isUndefined(t)?q.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(je(e),je(t),!0)};return q.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);q.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Pe="1.5.1",_e={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{_e[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Fe={};_e.transitional=function(e,t,n){function r(e,t){return"[Axios v1.5.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new H(r(o," has been removed"+(t?" in "+t:"")),H.ERR_DEPRECATED);return t&&!Fe[o]&&(Fe[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Ue={assertOptions:function(e,t,n){if("object"!=typeof e)throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new H("option "+s+" must be "+n,H.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new H("Unknown option "+s,H.ERR_BAD_OPTION)}},validators:_e};const De=Ue.validators;class Le{constructor(e){this.defaults=e,this.interceptors={request:new te,response:new te}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ce(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ue.assertOptions(n,{silentJSONParsing:De.transitional(De.boolean),forcedJSONParsing:De.transitional(De.boolean),clarifyTimeoutError:De.transitional(De.boolean)},!1),null!=r&&(q.isFunction(r)?t.paramsSerializer={serialize:r}:Ue.assertOptions(r,{encode:De.function,serialize:De.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&q.merge(o.common,o[t.method]);o&&q.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=me.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[Te.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(m){t.call(this,m);break}}try{l=Te.call(this,d)}catch(m){return Promise.reject(m)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return ee(Ee((e=Ce(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}q.forEach(["delete","get","head","options"],(function(e){Le.prototype[e]=function(t,n){return this.request(Ce(n||{},{method:e,url:t,data:(n||{}).data}))}})),q.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ce(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Le.prototype[e]=t(),Le.prototype[e+"Form"]=t(!0)}));var Be=Le;class ke{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new be(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new ke((function(t){e=t})),cancel:e}}}var qe=ke;const Ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ie).forEach((([e,t])=>{Ie[t]=e}));var Me=Ie;const ze=function e(t){const n=new Be(t),r=s(Be.prototype.request,n);return q.extend(r,Be.prototype,n,{allOwnKeys:!0}),q.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ce(t,n))},r}(ie);ze.Axios=Be,ze.CanceledError=be,ze.CancelToken=qe,ze.isCancel=he,ze.VERSION=Pe,ze.toFormData=G,ze.AxiosError=H,ze.Cancel=ze.CanceledError,ze.all=function(e){return Promise.all(e)},ze.spread=function(e){return function(t){return e.apply(null,t)}},ze.isAxiosError=function(e){return q.isObject(e)&&!0===e.isAxiosError},ze.mergeConfig=Ce,ze.AxiosHeaders=me,ze.formToJSON=e=>oe(q.isHTMLForm(e)?new FormData(e):e),ze.getAdapter=Ae,ze.HttpStatusCode=Me,ze.default=ze;var He=ze,Je=n(1883),We=n(3223);var Ke=()=>{const{0:e,1:t}=(0,r.useState)({name:"",email:"",subject:"",message:""}),{0:n,1:o}=(0,r.useState)({submitted:!1,submitting:!1,info:{error:!1,msg:null}}),s=e=>{e.persist(),t((t=>({...t,[e.target.id]:e.target.value}))),o({submitted:!1,submitting:!1,info:{error:!1,msg:null}})};return r.createElement(r.Fragment,null,r.createElement("form",{onSubmit:n=>{n.preventDefault(),o((e=>({...e,submitting:!0})));const r={...e,_subject:e.subject};He.post("https://formspree.io/f/xjvplkky",r).then((e=>{(0,Je.navigate)(We.Ru)})).catch((e=>{var n,r;n=!1,r=e.response.data.error,n?(o({submitted:!0,submitting:!1,info:{error:!1,msg:r}}),t({name:"",email:"",subject:"",message:""})):o({info:{error:!0,msg:r}})}))}},r.createElement("div",{className:"my-6 flex flex-col sm:flex-row"},r.createElement("div",{className:"w-full sm:w-1/2 sm:mr-4"},r.createElement("label",{htmlFor:"name",className:"block mb-1 leading-5 text-mdgray"},"Name"),r.createElement("input",{required:!0,id:"name",type:"text",name:"name",value:e.name,onChange:s,className:"mb-6 sm:mb-0 appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none"})),r.createElement("div",{className:"w-full sm:w-1/2 sm:ml-4"},r.createElement("label",{htmlFor:"email",className:"block mb-1 leading-5 text-mdgray"},"Email"),r.createElement("input",{required:!0,id:"email",type:"email",name:"email",value:e.email,onChange:s,className:"appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none"}))),r.createElement("div",{className:"mb-6"},r.createElement("label",{htmlFor:"subject",className:"block mb-1 leading-5 text-mdgray"},"Subject"),r.createElement("input",{required:!0,id:"subject",type:"text",name:"subject",value:e.subject,onChange:s,className:"appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none"})),r.createElement("div",null,r.createElement("label",{htmlFor:"message",className:"block mb-1 leading-5 text-mdgray"},"Message"),r.createElement("textarea",{required:!0,id:"message",type:"text",name:"message",value:e.message,onChange:s,className:"h-40 resize-none appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none"})),r.createElement("button",{type:"submit",className:"mt-5 "+(n.submitting?"bg-ltgray":"bg-primary")+" text-white px-6 py-2 rounded",disabled:n.submitting},n.submitting?"Submitting...":n.submitted?"Submitted":"Submit")),n.info.error&&r.createElement("div",{className:"mt-5 leading-5 text-mdgray"},"Error: ",n.info.msg),!n.info.error&&n.info.msg&&r.createElement("p",{className:"mt-5 leading-5 text-mdgray"},n.info.msg))};var Ve=()=>r.createElement("div",{className:"contain-sm mt-8 md:mt-16"},r.createElement("h1",{className:"text-3xl md:text-4xl md:text-5xl"},"Get In Touch"),r.createElement("p",{className:"text-mdgray my-4 md:text-lg"},"Have a project in mind or just want to talk? Feel free to send me a message!"),r.createElement(Ke,null));const Ge=()=>r.createElement(o.Z,{title:"Contact",description:"Have a project in mind or just want to talk? Feel free to send me a message!"})}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-d4afd75a2acb7d630dcd.js.map