/*! For license information please see bundle.7171958212af6a210691.js.LICENSE.txt */
"use strict";(self.webpackChunk_dcentralab_web3_wallet_connector=self.webpackChunk_dcentralab_web3_wallet_connector||[]).push([[3617],{89250:(e,t,a)=>{var n;a.d(t,{F0:()=>R,TH:()=>v,Us:()=>i,WU:()=>d,oQ:()=>h,s0:()=>m});var r=a(67294),o=a(12599);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}const s=r.createContext(null);const i=r.createContext(null);const l=r.createContext(null);const c=r.createContext({outlet:null,matches:[],isDataRoute:!1});function h(e,t){let{relative:a}=void 0===t?{}:t;p()||(0,o.J0)(!1);let{basename:n,navigator:u}=r.useContext(i),{hash:s,pathname:l,search:c}=d(e,{relative:a}),h=l;return"/"!==n&&(h="/"===l?n:(0,o.RQ)([n,l])),u.createHref({pathname:h,search:c,hash:s})}function p(){return null!=r.useContext(l)}function v(){return p()||(0,o.J0)(!1),r.useContext(l).location}function f(e){r.useContext(i).static||r.useLayoutEffect(e)}function m(){let{isDataRoute:e}=r.useContext(c);return e?function(){let{router:e}=b(g.UseNavigateStable),t=U(C.UseNavigateStable),a=r.useRef(!1);return f((()=>{a.current=!0})),r.useCallback((function(n,r){void 0===r&&(r={}),a.current&&("number"==typeof n?e.navigate(n):e.navigate(n,u({fromRouteId:t},r)))}),[e,t])}():function(){p()||(0,o.J0)(!1);let e=r.useContext(s),{basename:t,navigator:a}=r.useContext(i),{matches:n}=r.useContext(c),{pathname:u}=v(),l=JSON.stringify((0,o.Zq)(n).map((e=>e.pathnameBase))),h=r.useRef(!1);return f((()=>{h.current=!0})),r.useCallback((function(n,r){if(void 0===r&&(r={}),!h.current)return;if("number"==typeof n)return void a.go(n);let s=(0,o.pC)(n,JSON.parse(l),u,"path"===r.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:(0,o.RQ)([t,s.pathname])),(r.replace?a.replace:a.push)(s,r.state,r)}),[t,a,l,u,e])}()}function d(e,t){let{relative:a}=void 0===t?{}:t,{matches:n}=r.useContext(c),{pathname:u}=v(),s=JSON.stringify((0,o.Zq)(n).map((e=>e.pathnameBase)));return r.useMemo((()=>(0,o.pC)(e,JSON.parse(s),u,"path"===a)),[e,s,u,a])}r.Component;var g,C;function b(e){let t=r.useContext(s);return t||(0,o.J0)(!1),t}function U(e){let t=function(e){let t=r.useContext(c);return t||(0,o.J0)(!1),t}(),a=t.matches[t.matches.length-1];return a.route.id||(0,o.J0)(!1),a.route.id}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"}(g||(g={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"}(C||(C={}));(n||(n=a.t(r,2))).startTransition;function R(e){let{basename:t="/",children:a=null,location:n,navigationType:u=o.aU.Pop,navigator:s,static:c=!1}=e;p()&&(0,o.J0)(!1);let h=t.replace(/^\/*/,"/"),v=r.useMemo((()=>({basename:h,navigator:s,static:c})),[h,s,c]);"string"==typeof n&&(n=(0,o.cP)(n));let{pathname:f="/",search:m="",hash:d="",state:g=null,key:C="default"}=n,b=r.useMemo((()=>{let e=(0,o.Zn)(f,h);return null==e?null:{location:{pathname:e,search:m,hash:d,state:g,key:C},navigationType:u}}),[h,f,m,d,g,C,u]);return null==b?null:r.createElement(i.Provider,{value:v},r.createElement(l.Provider,{children:a,value:b}))}var x;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(x||(x={}));new Promise((()=>{}));r.Component}}]);