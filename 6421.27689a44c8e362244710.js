/*! For license information please see 6421.27689a44c8e362244710.js.LICENSE.txt */
"use strict";(self.webpackChunk_dcentralab_web3_wallet_connector=self.webpackChunk_dcentralab_web3_wallet_connector||[]).push([[6421],{7616:(t,e,i)=>{i.d(e,{f:()=>S});var s=i(36599),n=i(2633),r=i(27679),o=i(95469);const a=(t,e,i)=>-i*t+i*e+t;var h=i(73617);function l(t,e){const i=t[t.length-1];for(let s=1;s<=e;s++){const n=(0,h.Y)(0,e,s);t.push(a(i,1,n))}}const c=(t,e,i)=>{const s=e-t;return((i-t)%s+s)%s+t};const d=(t,e,i)=>Math.min(Math.max(i,t),e);function u(t,e=function(t){const e=[0];return l(e,t-1),e}(t.length),i=n.V){const s=t.length,r=s-e.length;return r>0&&l(e,r),n=>{let r=0;for(;r<s-2&&!(n<e[r+1]);r++);let l=d(0,1,(0,h.Y)(e[r],e[r+1],n));const u=function(t,e){return(0,o.K)(t)?t[c(0,t.length,e)]:t}(i,r);return l=u(l),a(t[r],t[r+1],l)}}const p=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,v=1e-7,f=12;function _(t,e,i,s){if(t===e&&i===s)return n.V;const r=e=>function(t,e,i,s,n){let r,o,a=0;do{o=e+(i-e)/2,r=p(o,s,n)-t,r>0?i=o:e=o}while(Math.abs(r)>v&&++a<f);return o}(e,0,1,t,i);return t=>0===t||1===t?t:p(r(t),e,s)}var $=i(56463),m=i(56457);const y={ease:_(.25,.1,.25,1),"ease-in":_(.42,0,1,1),"ease-in-out":_(.42,0,.58,1),"ease-out":_(0,0,.58,1)},A=/\((.*?)\)/;function g(t){if((0,$.m)(t))return t;if((0,m.U)(t))return _(...t);if(y[t])return y[t];if(t.startsWith("steps")){const e=A.exec(t);if(e){const t=e[1].split(",");return((t,e="end")=>i=>{const s=(i="end"===e?Math.min(i,.999):Math.max(i,.001))*t,n="end"===e?Math.floor(s):Math.ceil(s);return d(0,1,n/t)})(parseFloat(t[0]),t[1].trim())}}return n.V}class S{constructor(t,e=[0,1],{easing:i,duration:a=s.c.duration,delay:h=s.c.delay,endDelay:l=s.c.endDelay,repeat:c=s.c.repeat,offset:d,direction:p="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=n.V,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),i=i||s.c.easing,(0,r.m)(i)){const t=i.createAnimation(e);i=t.easing,e=t.keyframes||e,a=t.duration||a}this.repeat=c,this.easing=(0,o.K)(i)?n.V:g(i),this.updateDuration(a);const v=u(e,d,(0,o.K)(i)?i.map(g):n.V);this.tick=e=>{var i;let s=0;s=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=s,s/=1e3,s=Math.max(s-h,0),"finished"===this.playState&&void 0===this.pauseTime&&(s=this.totalDuration);const n=s/this.duration;let r=Math.floor(n),o=n%1;!o&&n>=1&&(o=1),1===o&&r--;const a=r%2;("reverse"===p||"alternate"===p&&a||"alternate-reverse"===p&&!a)&&(o=1-o);const c=s>=this.totalDuration?1:Math.min(o,1),d=v(this.easing(c));t(d);void 0===this.pauseTime&&("finished"===this.playState||s>=this.totalDuration+l)?(this.playState="finished",null===(i=this.resolve)||void 0===i||i.call(this,d)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}},19950:(t,e,i)=>{i.d(e,{H:()=>s});class s{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}},50268:(t,e,i)=>{function s(t,e){-1===t.indexOf(e)&&t.push(e)}i.d(e,{y:()=>s})},36599:(t,e,i)=>{i.d(e,{c:()=>s});const s={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"}},56457:(t,e,i)=>{i.d(e,{U:()=>n});var s=i(7523);const n=t=>Array.isArray(t)&&(0,s.h)(t[0])},27679:(t,e,i)=>{i.d(e,{m:()=>s});const s=t=>"object"==typeof t&&Boolean(t.createAnimation)},95469:(t,e,i)=>{i.d(e,{K:()=>n});var s=i(7523);const n=t=>Array.isArray(t)&&!(0,s.h)(t[0])},56463:(t,e,i)=>{i.d(e,{m:()=>s});const s=t=>"function"==typeof t},7523:(t,e,i)=>{i.d(e,{h:()=>s});const s=t=>"number"==typeof t},70850:(t,e,i)=>{i.d(e,{H:()=>s});const s=t=>"string"==typeof t},2633:(t,e,i)=>{i.d(e,{V:()=>n,Z:()=>s});const s=()=>{},n=t=>t},73617:(t,e,i)=>{i.d(e,{Y:()=>s});const s=(t,e,i)=>e-t==0?1:(i-t)/(e-t)},22263:(t,e,i)=>{i.d(e,{X:()=>s});const s={ms:t=>1e3*t,s:t=>t/1e3}},65987:t=>{var e={single_source_shortest_paths:function(t,i,s){var n={},r={};r[i]=0;var o,a,h,l,c,d,u,p=e.PriorityQueue.make();for(p.push(i,0);!p.empty();)for(h in a=(o=p.pop()).value,l=o.cost,c=t[a]||{})c.hasOwnProperty(h)&&(d=l+c[h],u=r[h],(void 0===r[h]||u>d)&&(r[h]=d,p.push(h,d),n[h]=a));if(void 0!==s&&void 0===r[s]){var v=["Could not find a path from ",i," to ",s,"."].join("");throw new Error(v)}return n},extract_shortest_path_from_predecessor_list:function(t,e){for(var i=[],s=e;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,i,s){var n=e.single_source_shortest_paths(t,i,s);return e.extract_shortest_path_from_predecessor_list(n,s)},PriorityQueue:{make:function(t){var i,s=e.PriorityQueue,n={};for(i in t=t||{},s)s.hasOwnProperty(i)&&(n[i]=s[i]);return n.queue=[],n.sorter=t.sorter||s.default_sorter,n},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var i={value:t,cost:e};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},6752:t=>{t.exports=function(t){for(var e=[],i=t.length,s=0;s<i;s++){var n=t.charCodeAt(s);if(n>=55296&&n<=56319&&i>s+1){var r=t.charCodeAt(s+1);r>=56320&&r<=57343&&(n=1024*(n-55296)+r-56320+65536,s+=1)}n<128?e.push(n):n<2048?(e.push(n>>6|192),e.push(63&n|128)):n<55296||n>=57344&&n<65536?(e.push(n>>12|224),e.push(n>>6&63|128),e.push(63&n|128)):n>=65536&&n<=1114111?(e.push(n>>18|240),e.push(n>>12&63|128),e.push(n>>6&63|128),e.push(63&n|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},24394:(t,e,i)=>{i.d(e,{k:()=>s});var s=function(){}},26107:(t,e,i)=>{i.d(e,{j:()=>h});var s=i(39179),n=i(50152),r=i(56463),o=i(7616);function a(t,e={}){return(0,s.O)([()=>{const i=new o.f(t,[0,1],e);return i.finished.catch((()=>{})),i}],e,e.duration)}function h(t,e,i){return((0,r.m)(t)?a:n.j)(t,e,i)}},33692:(t,e,i)=>{var s;i.d(e,{Jb:()=>T,YP:()=>C,dy:()=>w,sY:()=>B});const n=window,r=n.trustedTypes,o=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,a="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,l="?"+h,c=`<${l}>`,d=document,u=()=>d.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,f=t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),_="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,y=/>/g,A=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,S=/"/g,b=/^(?:script|style|textarea|title)$/i,E=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),w=E(1),C=E(2),T=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),P=new WeakMap,k=d.createTreeWalker(d,129,null,!1),U=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",l=$;for(let e=0;e<i;e++){const i=t[e];let o,d,u=-1,p=0;for(;p<i.length&&(l.lastIndex=p,d=l.exec(i),null!==d);)p=l.lastIndex,l===$?"!--"===d[1]?l=m:void 0!==d[1]?l=y:void 0!==d[2]?(b.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=A):void 0!==d[3]&&(l=A):l===A?">"===d[0]?(l=null!=n?n:$,u=-1):void 0===d[1]?u=-2:(u=l.lastIndex-d[2].length,o=d[1],l=void 0===d[3]?A:'"'===d[3]?S:g):l===S||l===g?l=A:l===m||l===y?l=$:(l=A,n=void 0);const v=l===A&&t[e+1].startsWith("/>")?" ":"";r+=l===$?i+c:u>=0?(s.push(o),i.slice(0,u)+a+i.slice(u)+h+v):i+h+(-2===u?(s.push(void 0),e):v)}const d=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==o?o.createHTML(d):d,s]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const c=t.length-1,d=this.parts,[p,v]=U(t,e);if(this.el=M.createElement(p,i),k.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=k.nextNode())&&d.length<c;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(a)||e.startsWith(h)){const i=v[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+a).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?L:"@"===e[1]?V:N})}else d.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(b.test(s.tagName)){const t=s.textContent.split(h),e=t.length-1;if(e>0){s.textContent=r?r.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],u()),k.nextNode(),d.push({type:2,index:++n});s.append(t[e],u())}}}else if(8===s.nodeType)if(s.data===l)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(h,t+1));)d.push({type:7,index:n}),t+=h.length-1}n++}}static createElement(t,e){const i=d.createElement("template");return i.innerHTML=t,i}}function H(t,e,i=t,s){var n,r,o,a;if(e===T)return e;let h=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const l=p(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==l&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===l?h=void 0:(h=new l(t),h._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=H(t,h._$AS(t,e.values),h,s)),e}class O{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(i,!0);k.currentNode=n;let r=k.nextNode(),o=0,a=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new R(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new I(r,this,t)),this._$AV.push(e),h=s[++a]}o!==(null==h?void 0:h.index)&&(r=k.nextNode(),o++)}return k.currentNode=d,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{constructor(t,e,i,s){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),p(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):f(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==x&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new O(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new M(t)),e}T(t){v(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new R(this.k(u()),this.k(u()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class N{constructor(t,e,i,s,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=H(this,t,e,0),r=!p(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=H(this,s[i+o],e,o),a===T&&(a=this._$AH[o]),r||(r=!p(a)||a!==this._$AH[o]),a===x?t=x:t!==x&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}const D=r?r.emptyScript:"";class L extends N{constructor(){super(...arguments),this.type=4}j(t){t&&t!==x?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class V extends N{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=H(this,t,e,0))&&void 0!==i?i:x)===T)return;const s=this._$AH,n=t===x&&s!==x||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==x&&(s===x||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const z=n.litHtmlPolyfillSupport;null==z||z(M,R),(null!==(s=n.litHtmlVersions)&&void 0!==s?s:n.litHtmlVersions=[]).push("2.7.4");const B=(t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new R(e.insertBefore(u(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o}},77408:(t,e,i)=>{i.d(e,{Mo:()=>s,Cb:()=>o,SB:()=>a});const s=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},r=(t,e,i)=>{e.constructor.createProperty(i,t)};function o(t){return(e,i)=>void 0!==i?r(t,e,i):n(t,e)}function a(t){return o({...t,state:!0})}var h;null===(h=window.HTMLSlotElement)||void 0===h||h.prototype.assignedElements},90623:(t,e,i)=>{i.d(e,{$:()=>o});var s=i(33692);const n=1;class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const o=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends r{constructor(t){var e;if(super(t),t.type!==n||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const r=t.element.classList;this.it.forEach((t=>{t in e||(r.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(n=this.nt)||void 0===n?void 0:n.has(t))||(i?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return s.Jb}})},9392:(t,e,i)=>{i.d(e,{oi:()=>b,iv:()=>h,dy:()=>S.dy,YP:()=>S.YP});const s=window,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(i,t,r)},l=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,r))(e)})(t):t;var c;const d=window,u=d.trustedTypes,p=u?u.emptyScript:"",v=d.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:_},m="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:f;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y[m]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:y}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.2");var A,g,S=i(33692);class b extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,S.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return S.Jb}}b.finalized=!0,b._$litElement$=!0,null===(A=globalThis.litElementHydrateSupport)||void 0===A||A.call(globalThis,{LitElement:b});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:b});(null!==(g=globalThis.litElementVersions)&&void 0!==g?g:globalThis.litElementVersions=[]).push("3.3.2")}}]);