"use strict";(self.webpackChunkmy_portfolio_website=self.webpackChunkmy_portfolio_website||[]).push([[661],{4241:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(4854),s=n(7896),i=n.p+"static/social-538ce9077e35787aacb4da2aee722261.png";var a=e=>{let{title:t,description:n}=e;const{site:{siteMetadata:{siteUrl:a,title:c,description:l}}}=(0,o.useStaticQuery)("4237499240"),{pathname:u}=(0,s.useLocation)(),f=`${a}${u}`,d="/"===u?`${c} | Software Developer/Engineer`:`${t} | ${c}`,m=n||l;return r.createElement(r.Fragment,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,d," "),r.createElement("meta",{name:"description",content:m}),r.createElement("meta",{name:"image",content:i}),r.createElement("meta",{property:"og:locale",content:"en_US"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:url",content:f}),r.createElement("meta",{property:"og:site_name",content:"Safdar Jamal"}),r.createElement("meta",{property:"og:title",content:d}),r.createElement("meta",{property:"og:description",content:m}),r.createElement("meta",{property:"og:image",content:i}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:"@_safdarjamal"}),r.createElement("meta",{name:"twitter:title",content:d}),r.createElement("meta",{name:"twitter:description",content:m}),r.createElement("meta",{name:"twitter:image",content:i}))}},6546:function(e,t,n){n.r(t),n.d(t,{Head:function(){return Ct},default:function(){return jt}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return he},hasStandardBrowserEnv:function(){return ye},hasStandardBrowserWebWorkerEnv:function(){return be},navigator:function(){return ge},origin:function(){return we}});var o=n(7294),s=n(4241);function i(e,t){return function(){return e.apply(t,arguments)}}const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,l=(u=Object.create(null),e=>{const t=a.call(e);return u[t]||(u[t]=t.slice(8,-1).toLowerCase())});var u;const f=e=>(e=e.toLowerCase(),t=>l(t)===e),d=e=>t=>typeof t===e,{isArray:m}=Array,p=d("undefined");const h=f("ArrayBuffer");const g=d("string"),y=d("function"),b=d("number"),w=e=>null!==e&&"object"==typeof e,E=e=>{if("object"!==l(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},S=f("Date"),R=f("File"),O=f("Blob"),v=f("FileList"),T=f("URLSearchParams"),[x,A,N,j]=["ReadableStream","Request","Response","Headers"].map(f);function C(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),m(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function P(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,F=e=>!p(e)&&e!==_;const L=(U="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>U&&e instanceof U);var U;const k=f("HTMLFormElement"),B=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),D=f("RegExp"),q=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},I="abcdefghijklmnopqrstuvwxyz",M="0123456789",z={DIGIT:M,ALPHA:I,ALPHA_DIGIT:I+I.toUpperCase()+M};const H=f("AsyncFunction"),J=(W="function"==typeof setImmediate,$=y(_.postMessage),W?setImmediate:$?(K=`axios@${Math.random()}`,V=[],_.addEventListener("message",(({source:e,data:t})=>{e===_&&t===K&&V.length&&V.shift()()}),!1),e=>{V.push(e),_.postMessage(K,"*")}):e=>setTimeout(e));var W,$,K,V;const G="undefined"!=typeof queueMicrotask?queueMicrotask.bind(_):"undefined"!=typeof process&&process.nextTick||J;var X={isArray:m,isArrayBuffer:h,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=l(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer),t},isString:g,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:w,isPlainObject:E,isReadableStream:x,isRequest:A,isResponse:N,isHeaders:j,isUndefined:p,isDate:S,isFile:R,isBlob:O,isRegExp:D,isFunction:y,isStream:e=>w(e)&&y(e.pipe),isURLSearchParams:T,isTypedArray:L,isFileList:v,forEach:C,merge:function e(){const{caseless:t}=F(this)&&this||{},n={},r=(r,o)=>{const s=t&&P(n,o)||o;E(n[s])&&E(r)?n[s]=e(n[s],r):E(r)?n[s]=e({},r):m(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&C(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(C(t,((t,r)=>{n&&y(t)?e[r]=i(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:f,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(m(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:k,hasOwnProperty:B,hasOwnProp:B,reduceDescriptors:q,freezeMethods:e=>{q(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return m(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:P,global:_,isContextDefined:F,ALPHABET:z,generateString:(e=16,t=z.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=m(e)?[]:{};return C(e,((e,t)=>{const s=n(e,r+1);!p(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:H,isThenable:e=>e&&(w(e)||y(e))&&y(e.then)&&y(e.catch),setImmediate:J,asap:G};function Q(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}X.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.status}}});const Z=Q.prototype,Y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Y[e]={value:e}})),Object.defineProperties(Q,Y),Object.defineProperty(Z,"isAxiosError",{value:!0}),Q.from=(e,t,n,r,o,s)=>{const i=Object.create(Z);return X.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Q.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var ee=Q;function te(e){return X.isPlainObject(e)||X.isArray(e)}function ne(e){return X.endsWith(e,"[]")?e.slice(0,-2):e}function re(e,t,n){return e?e.concat(t).map((function(e,t){return e=ne(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const oe=X.toFlatObject(X,{},null,(function(e){return/^is[A-Z]/.test(e)}));var se=function(e,t,n){if(!X.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=X.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!X.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&X.isSpecCompliantForm(t);if(!X.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(X.isDate(e))return e.toISOString();if(!a&&X.isBlob(e))throw new ee("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(e)||X.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(X.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(X.isArray(e)&&function(e){return X.isArray(e)&&!e.some(te)}(e)||(X.isFileList(e)||X.endsWith(n,"[]"))&&(a=X.toArray(e)))return n=ne(n),a.forEach((function(e,r){!X.isUndefined(e)&&null!==e&&t.append(!0===i?re([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!te(e)||(t.append(re(o,n,s),c(e)),!1)}const u=[],f=Object.assign(oe,{defaultVisitor:l,convertValue:c,isVisitable:te});if(!X.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!X.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),X.forEach(n,(function(n,s){!0===(!(X.isUndefined(n)||null===n)&&o.call(t,n,X.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function ie(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ae(e,t){this._pairs=[],e&&se(e,this,t)}const ce=ae.prototype;ce.append=function(e,t){this._pairs.push([e,t])},ce.toString=function(e){const t=e?function(t){return e.call(this,t,ie)}:ie;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var le=ae;function ue(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function fe(e,t,n){if(!t)return e;const r=n&&n.encode||ue,o=n&&n.serialize;let s;if(s=o?o(t,n):X.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var de=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){X.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:le,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const he="undefined"!=typeof window&&"undefined"!=typeof document,ge="object"==typeof navigator&&navigator||void 0,ye=he&&(!ge||["ReactNative","NativeScript","NS"].indexOf(ge.product)<0),be="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,we=he&&window.location.href||"http://localhost";var Ee={...r,...pe};var Se=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&X.isArray(r)?r.length:s,a)return X.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&X.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&X.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(X.isFormData(e)&&X.isFunction(e.entries)){const n={};return X.forEachEntry(e,((e,r)=>{t(function(e){return X.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Re={transitional:me,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=X.isObject(e);o&&X.isHTMLForm(e)&&(e=new FormData(e));if(X.isFormData(e))return r?JSON.stringify(Se(e)):e;if(X.isArrayBuffer(e)||X.isBuffer(e)||X.isStream(e)||X.isFile(e)||X.isBlob(e)||X.isReadableStream(e))return e;if(X.isArrayBufferView(e))return e.buffer;if(X.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return se(e,new Ee.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Ee.isNode&&X.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=X.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return se(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(X.isString(e))try{return(t||JSON.parse)(e),X.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Re.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(X.isResponse(e)||X.isReadableStream(e))return e;if(e&&X.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw ee.from(o,ee.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ee.classes.FormData,Blob:Ee.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch"],(e=>{Re.headers[e]={}}));var Oe=Re;const ve=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const Te=Symbol("internals");function xe(e){return e&&String(e).trim().toLowerCase()}function Ae(e){return!1===e||null==e?e:X.isArray(e)?e.map(Ae):String(e)}function Ne(e,t,n,r,o){return X.isFunction(r)?r.call(this,t,n):(o&&(t=n),X.isString(t)?X.isString(r)?-1!==t.indexOf(r):X.isRegExp(r)?r.test(t):void 0:void 0)}class je{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=xe(t);if(!o)throw new Error("header name must be a non-empty string");const s=X.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Ae(e))}const s=(e,t)=>X.forEach(e,((e,n)=>o(e,n,t)));if(X.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(X.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ve[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(X.isHeaders(e))for(const[i,a]of e.entries())o(a,i,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=xe(e)){const n=X.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(X.isFunction(t))return t.call(this,e,n);if(X.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xe(e)){const n=X.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ne(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=xe(e)){const o=X.findKey(n,e);!o||t&&!Ne(0,n[o],o,t)||(delete n[o],r=!0)}}return X.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Ne(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return X.forEach(this,((r,o)=>{const s=X.findKey(n,o);if(s)return t[s]=Ae(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Ae(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return X.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&X.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Te]=this[Te]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=xe(e);t[r]||(!function(e,t){const n=X.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return X.isArray(e)?e.forEach(r):r(e),this}}je.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),X.reduceDescriptors(je.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),X.freezeMethods(je);var Ce=je;function Pe(e,t){const n=this||Oe,r=t||n,o=Ce.from(r.headers);let s=r.data;return X.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function _e(e){return!(!e||!e.__CANCEL__)}function Fe(e,t,n){ee.call(this,null==e?"canceled":e,ee.ERR_CANCELED,t,n),this.name="CanceledError"}X.inherits(Fe,ee,{__CANCEL__:!0});var Le=Fe;function Ue(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var ke=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}};var Be=function(e,t){let n,r,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(n=e,r||(r=setTimeout((()=>{r=null,i(n)}),s-a)))},()=>n&&i(n)]};const De=(e,t,n=3)=>{let r=0;const o=ke(50,250);return Be((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},qe=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ie=e=>(...t)=>X.asap((()=>e(...t)));var Me=Ee.hasStandardBrowserEnv?function(){const e=Ee.navigator&&/(msie|trident)/i.test(Ee.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=X.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},ze=Ee.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];X.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),X.isString(r)&&i.push("path="+r),X.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function He(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Je=e=>e instanceof Ce?{...e}:e;function We(e,t){t=t||{};const n={};function r(e,t,n){return X.isPlainObject(e)&&X.isPlainObject(t)?X.merge.call({caseless:n},e,t):X.isPlainObject(t)?X.merge({},t):X.isArray(t)?t.slice():t}function o(e,t,n){return X.isUndefined(t)?X.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!X.isUndefined(t))return r(void 0,t)}function i(e,t){return X.isUndefined(t)?X.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Je(e),Je(t),!0)};return X.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);X.isUndefined(i)&&s!==a||(n[r]=i)})),n}var $e=e=>{const t=We({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Ce.from(a),t.url=fe(He(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),X.isFormData(r))if(Ee.hasStandardBrowserEnv||Ee.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(Ee.hasStandardBrowserEnv&&(o&&X.isFunction(o)&&(o=o(t)),o||!1!==o&&Me(t.url))){const e=s&&i&&ze.read(i);e&&a.set(s,e)}return t};var Ke="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=$e(e);let o=r.data;const s=Ce.from(r.headers).normalize();let i,a,c,l,u,{responseType:f,onUploadProgress:d,onDownloadProgress:m}=r;function p(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let h=new XMLHttpRequest;function g(){if(!h)return;const r=Ce.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders());Ue((function(e){t(e),p()}),(function(e){n(e),p()}),{data:f&&"text"!==f&&"json"!==f?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout,"onloadend"in h?h.onloadend=g:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(g)},h.onabort=function(){h&&(n(new ee("Request aborted",ee.ECONNABORTED,e,h)),h=null)},h.onerror=function(){n(new ee("Network Error",ee.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||me;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new ee(t,o.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,h)),h=null},void 0===o&&s.setContentType(null),"setRequestHeader"in h&&X.forEach(s.toJSON(),(function(e,t){h.setRequestHeader(t,e)})),X.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),f&&"json"!==f&&(h.responseType=r.responseType),m&&([c,u]=De(m,!0),h.addEventListener("progress",c)),d&&h.upload&&([a,l]=De(d),h.upload.addEventListener("progress",a),h.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(i=t=>{h&&(n(!t||t.type?new Le(null,e,h):t),h.abort(),h=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);y&&-1===Ee.protocols.indexOf(y)?n(new ee("Unsupported protocol "+y+":",ee.ERR_BAD_REQUEST,e)):h.send(o||null)}))};var Ve=(e,t)=>{let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof ee?t:new Le(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{o(new ee(`timeout ${t} of ms exceeded`,ee.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e&&(e.removeEventListener?e.removeEventListener("abort",o):e.unsubscribe(o))})),e=null)};e.forEach((e=>e&&e.addEventListener&&e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]};const Ge=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Xe=(e,t,n,r,o)=>{const s=async function*(e,t,n){for await(const r of e)yield*Ge(ArrayBuffer.isView(r)?r:await n(String(r)),t)}(e,t,o);let i,a=0,c=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await s.next();if(t)return c(),void e.close();let o=r.byteLength;if(n){let e=a+=o;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw c(t),t}},cancel(e){return c(e),s.return()}},{highWaterMark:2})},Qe="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Ze=Qe&&"function"==typeof ReadableStream,Ye=Qe&&("function"==typeof TextEncoder?(et=new TextEncoder,e=>et.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var et;const tt=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},nt=Ze&&tt((()=>{let e=!1;const t=new Request(Ee.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),rt=Ze&&tt((()=>X.isReadableStream(new Response("").body))),ot={stream:rt&&(e=>e.body)};var st;Qe&&(st=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!ot[e]&&(ot[e]=X.isFunction(st[e])?t=>t[e]():(t,n)=>{throw new ee(`Response type '${e}' is not supported`,ee.ERR_NOT_SUPPORT,n)})})));const it=async(e,t)=>{const n=X.toFiniteNumber(e.getContentLength());return null==n?(async e=>null==e?0:X.isBlob(e)?e.size:X.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:X.isArrayBufferView(e)||X.isArrayBuffer(e)?e.byteLength:(X.isURLSearchParams(e)&&(e+=""),X.isString(e)?(await Ye(e)).byteLength:void 0))(t):n};const at={http:null,xhr:Ke,fetch:Qe&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=$e(e);l=l?(l+"").toLowerCase():"text";let m,p,[h,g]=o||s||i?Ve([o,s],i):[];const y=()=>{!m&&setTimeout((()=>{h&&h.unsubscribe()})),m=!0};let b;try{if(c&&nt&&"get"!==n&&"head"!==n&&0!==(b=await it(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(X.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=qe(b,De(Ie(c)));r=Xe(n.body,65536,e,t,Ye)}}X.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...d,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let s=await fetch(p);const i=rt&&("stream"===l||"response"===l);if(rt&&(a||i)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=X.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&qe(t,De(Ie(a),!0))||[];s=new Response(Xe(s.body,65536,n,(()=>{r&&r(),i&&y()}),Ye),e)}l=l||"text";let m=await ot[X.findKey(ot,l)||"text"](s,e);return!i&&y(),g&&g(),await new Promise(((t,n)=>{Ue(t,n,{data:m,headers:Ce.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:p})}))}catch(w){if(y(),w&&"TypeError"===w.name&&/fetch/i.test(w.message))throw Object.assign(new ee("Network Error",ee.ERR_NETWORK,e,p),{cause:w.cause||w});throw ee.from(w,w&&w.code,e,p)}})};X.forEach(at,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const ct=e=>`- ${e}`,lt=e=>X.isFunction(e)||null===e||!1===e;var ut=e=>{e=X.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!lt(n)&&(r=at[(t=String(n)).toLowerCase()],void 0===r))throw new ee(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(ct).join("\n"):" "+ct(e[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function ft(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Le(null,e)}function dt(e){ft(e),e.headers=Ce.from(e.headers),e.data=Pe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ut(e.adapter||Oe.adapter)(e).then((function(t){return ft(e),t.data=Pe.call(e,e.transformResponse,t),t.headers=Ce.from(t.headers),t}),(function(t){return _e(t)||(ft(e),t&&t.response&&(t.response.data=Pe.call(e,e.transformResponse,t.response),t.response.headers=Ce.from(t.response.headers))),Promise.reject(t)}))}const mt="1.7.5",pt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{pt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ht={};pt.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new ee(r(o," has been removed"+(t?" in "+t:"")),ee.ERR_DEPRECATED);return t&&!ht[o]&&(ht[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var gt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new ee("option "+s+" must be "+n,ee.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ee("Unknown option "+s,ee.ERR_BAD_OPTION)}},validators:pt};const yt=gt.validators;class bt{constructor(e){this.defaults=e,this.interceptors={request:new de,response:new de}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=We(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&gt.assertOptions(n,{silentJSONParsing:yt.transitional(yt.boolean),forcedJSONParsing:yt.transitional(yt.boolean),clarifyTimeoutError:yt.transitional(yt.boolean)},!1),null!=r&&(X.isFunction(r)?t.paramsSerializer={serialize:r}:gt.assertOptions(r,{encode:yt.function,serialize:yt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&X.merge(o.common,o[t.method]);o&&X.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ce.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[dt.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(m){t.call(this,m);break}}try{l=dt.call(this,d)}catch(m){return Promise.reject(m)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return fe(He((e=We(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}X.forEach(["delete","get","head","options"],(function(e){bt.prototype[e]=function(t,n){return this.request(We(n||{},{method:e,url:t,data:(n||{}).data}))}})),X.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(We(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}bt.prototype[e]=t(),bt.prototype[e+"Form"]=t(!0)}));var wt=bt;class Et{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Le(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Et((function(t){e=t})),cancel:e}}}var St=Et;const Rt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rt).forEach((([e,t])=>{Rt[t]=e}));var Ot=Rt;const vt=function e(t){const n=new wt(t),r=i(wt.prototype.request,n);return X.extend(r,wt.prototype,n,{allOwnKeys:!0}),X.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(We(t,n))},r}(Oe);vt.Axios=wt,vt.CanceledError=Le,vt.CancelToken=St,vt.isCancel=_e,vt.VERSION=mt,vt.toFormData=se,vt.AxiosError=ee,vt.Cancel=vt.CanceledError,vt.all=function(e){return Promise.all(e)},vt.spread=function(e){return function(t){return e.apply(null,t)}},vt.isAxiosError=function(e){return X.isObject(e)&&!0===e.isAxiosError},vt.mergeConfig=We,vt.AxiosHeaders=Ce,vt.formToJSON=e=>Se(X.isHTMLForm(e)?new FormData(e):e),vt.getAdapter=ut,vt.HttpStatusCode=Ot,vt.default=vt;var Tt=vt,xt=n(4854),At=n(3223);var Nt=()=>{const{0:e,1:t}=(0,o.useState)({name:"",email:"",subject:"",message:""}),{0:n,1:r}=(0,o.useState)({submitted:!1,submitting:!1,info:{error:!1,msg:null}}),s=e=>{e.persist(),t((t=>({...t,[e.target.id]:e.target.value}))),r({submitted:!1,submitting:!1,info:{error:!1,msg:null}})};return o.createElement(o.Fragment,null,o.createElement("form",{onSubmit:n=>{n.preventDefault(),r((e=>({...e,submitting:!0})));const o={...e,_subject:e.subject};Tt.post("https://formspree.io/f/xjvplkky",o).then((e=>{(0,xt.navigate)(At.Ru)})).catch((e=>{var n,o;n=!1,o=e.response.data.error,n?(r({submitted:!0,submitting:!1,info:{error:!1,msg:o}}),t({name:"",email:"",subject:"",message:""})):r({info:{error:!0,msg:o}})}))}},o.createElement("div",{className:"my-6 flex flex-col sm:flex-row"},o.createElement("div",{className:"w-full sm:w-1/2 sm:mr-4"},o.createElement("label",{htmlFor:"name",className:"block mb-1 leading-5 text-mdgray"},"Name"),o.createElement("input",{required:!0,id:"name",type:"text",name:"name",value:e.name,onChange:s,className:"mb-6 sm:mb-0 appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none"})),o.createElement("div",{className:"w-full sm:w-1/2 sm:ml-4"},o.createElement("label",{htmlFor:"email",className:"block mb-1 leading-5 text-mdgray"},"Email"),o.createElement("input",{required:!0,id:"email",type:"email",name:"email",value:e.email,onChange:s,className:"appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none"}))),o.createElement("div",{className:"mb-6"},o.createElement("label",{htmlFor:"subject",className:"block mb-1 leading-5 text-mdgray"},"Subject"),o.createElement("input",{required:!0,id:"subject",type:"text",name:"subject",value:e.subject,onChange:s,className:"appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none"})),o.createElement("div",null,o.createElement("label",{htmlFor:"message",className:"block mb-1 leading-5 text-mdgray"},"Message"),o.createElement("textarea",{required:!0,id:"message",type:"text",name:"message",value:e.message,onChange:s,className:"h-40 resize-none appearance-none border rounded w-full py-2 px-2 text-mdgray leading-tight focus:border-ltgray focus:outline-none"})),o.createElement("button",{type:"submit",className:`mt-5 ${n.submitting?"bg-ltgray":"bg-primary"} text-white px-6 py-2 rounded`,disabled:n.submitting},n.submitting?"Submitting...":n.submitted?"Submitted":"Submit")),n.info.error&&o.createElement("div",{className:"mt-5 leading-5 text-mdgray"},"Error: ",n.info.msg),!n.info.error&&n.info.msg&&o.createElement("p",{className:"mt-5 leading-5 text-mdgray"},n.info.msg))};var jt=()=>o.createElement("div",{className:"contain-sm mt-8 md:mt-16"},o.createElement("h1",{className:"text-3xl md:text-4xl md:text-5xl"},"Get In Touch"),o.createElement("p",{className:"text-mdgray my-4 md:text-lg"},"Have a project in mind or just want to talk? Feel free to send me a message!"),o.createElement(Nt,null));const Ct=()=>o.createElement(s.Z,{title:"Contact",description:"Have a project in mind or just want to talk? Feel free to send me a message!"})}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-f52b20253add825d2954.js.map