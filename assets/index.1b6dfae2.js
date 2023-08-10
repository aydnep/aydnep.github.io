import{a as u,j as s,R as T,r as P,m as Ne,n as Rt,F as me,L as It,t as jt}from"./unifiedFrontend.b9321740.js";import{bS as at,bj as Mt,bO as qt,bk as Et,s as x,A as j,cc as re,b9 as Re,u as O,W as F,B as ot,cl as st,cm as Bt,y as M,bh as Ie,bz as xe,x as W,T as oe,c7 as lt,cn as Dt,ad as je,a6 as Me,co as Wt,ci as ct,n as X,V as dt,f as ut,ce as ie,cp as pt,cq as Ft,cr as Kt,a4 as de,D as ke,cs as Ht,ct as Vt,cu as zt,cv as Zt,cd as Ut,cw as Gt,cx as Yt,cy as Qt,b2 as Xt,cz as Jt,cA as er,a2 as tr,cB as rr,cC as nr,a as Se,av as ft,G as se,F as qe,ay as ir,aq as ar,bv as ht,ab as or,bu as Ee,ba as sr,p as He,c as lr,t as cr,cD as dr}from"./index.8c6e34d8.js";import{g as ur,A as mt,S as yt}from"./index.f9c83a27.js";import{B as pr}from"./index.524f2c2f.js";import{_ as fr,T as hr}from"./Tabs.d9815e54.js";import{g as mr,h as gt,j as yr,e as vt,l as gr,i as vr,a as br,b as xr,c as kr}from"./keys.94ea85c1.js";import{j as Be,o as wr,k as Ar,r as _r,s as Pr,u as Sr,v as Tr,p as Or,m as Lr}from"./_baseAssignValue.e2c24b97.js";import{C as bt}from"./ConnectWalletButton.0b195b95.js";import{u as xt}from"./useDebounce.3f495a27.js";import{f as S,_ as kt,m as $r,n as Cr,o as De,p as D,L as q,q as We,r as ye,D as Nr,G as Rr,u as Ir,C as jr,S as Ve,h as U,A as Mr,c as ze,a as Y,g as qr,b as Er,s as Br,v as ue,d as Q,w as Ze,x as he,y as wt,k as Dr,z as Wr,T as Fr}from"./generateCategoricalChart.69f94761.js";import{i as Z}from"./isFunction.0eed3503.js";import{i as Kr}from"./upperFirst.0cf9e9e6.js";import{T as Hr,P as Vr}from"./PaginationButton.2443585f.js";import{u as zr}from"./useStableStakingStats.fd1948bb.js";import"./vendor.808b6738.js";import"./_baseEach.4f840fa4.js";import"./styled.e5cef5eb.js";var Zr=["points","className","baseLinePoints","connectNulls"];function Ur(e,t){if(e==null)return{};var r=Gr(e,t),i,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],!(t.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,i)||(r[i]=e[i]))}return r}function Gr(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function Ue(e){return Jr(e)||Xr(e)||Qr(e)||Yr()}function Yr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qr(e,t){if(!!e){if(typeof e=="string")return Oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Oe(e,t)}}function Xr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jr(e){if(Array.isArray(e))return Oe(e)}function Oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var Ge=function(t){return t&&t.x===+t.x&&t.y===+t.y},en=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=[[]];return t.forEach(function(i){Ge(i)?r[r.length-1].push(i):r[r.length-1].length>0&&r.push([])}),Ge(t[0])&&r[r.length-1].push(t[0]),r[r.length-1].length<=0&&(r=r.slice(0,-1)),r},ae=function(t,r){var i=en(t);r&&(i=[i.reduce(function(a,o){return[].concat(Ue(a),Ue(o))},[])]);var n=i.map(function(a){return a.reduce(function(o,l,c){return"".concat(o).concat(c===0?"M":"L").concat(l.x,",").concat(l.y)},"")}).join("");return i.length===1?"".concat(n,"Z"):n},tn=function(t,r,i){var n=ae(t,i);return"".concat(n.slice(-1)==="Z"?n.slice(0,-1):n,"L").concat(ae(r.reverse(),i).slice(1))},rn=function(t){var r=t.points,i=t.className,n=t.baseLinePoints,a=t.connectNulls,o=Ur(t,Zr);if(!r||!r.length)return null;var l=at("recharts-polygon",i);if(n&&n.length){var c=o.stroke&&o.stroke!=="none",d=tn(r,n,a);return u("g",{className:l,children:[s("path",{...S(o,!0),fill:d.slice(-1)==="Z"?o.fill:"none",stroke:"none",d}),c?s("path",{...S(o,!0),fill:"none",d:ae(r,a)}):null,c?s("path",{...S(o,!0),fill:"none",d:ae(n,a)}):null]})}var f=ae(r,a);return s("path",{...S(o,!0),fill:f.slice(-1)==="Z"?o.fill:"none",className:l,d:f})},nn=kt,an=Be,on=$r;function sn(e,t){return e&&e.length?nn(e,an(t),on):void 0}var ln=sn,cn=kt,dn=Cr,un=Be;function pn(e,t){return e&&e.length?cn(e,un(t),dn):void 0}var fn=pn,hn=["cx","cy","angle","ticks","axisLine"],mn=["ticks","tick","angle","tickFormatter","stroke"];function J(e){return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(e)}function Ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,i)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ye(Object(r),!0).forEach(function(i){we(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ye(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function Qe(e,t){if(e==null)return{};var r=yn(e,t),i,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],!(t.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,i)||(r[i]=e[i]))}return r}function yn(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function gn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xe(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,At(i.key),i)}}function vn(e,t,r){return t&&Xe(e.prototype,t),r&&Xe(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function bn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Le(e,t)}function Le(e,t){return Le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},Le(e,t)}function xn(e){var t=An();return function(){var i=ge(e),n;if(t){var a=ge(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return kn(this,n)}}function kn(e,t){if(t&&(J(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wn(e)}function wn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function An(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ge(e){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ge(e)}function we(e,t,r){return t=At(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function At(e){var t=_n(e,"string");return J(t)==="symbol"?t:String(t)}function _n(e,t){if(J(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||"default");if(J(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ae=function(e){bn(r,e);var t=xn(r);function r(){return gn(this,r),t.apply(this,arguments)}return vn(r,[{key:"getTickValueCoord",value:function(n){var a=n.coordinate,o=this.props,l=o.angle,c=o.cx,d=o.cy;return D(c,d,a,l)}},{key:"getTickTextAnchor",value:function(){var n=this.props.orientation,a;switch(n){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var n=this.props,a=n.cx,o=n.cy,l=n.angle,c=n.ticks,d=fn(c,function(p){return p.coordinate||0}),f=ln(c,function(p){return p.coordinate||0});return{cx:a,cy:o,startAngle:l,endAngle:l,innerRadius:f.coordinate||0,outerRadius:d.coordinate||0}}},{key:"renderAxisLine",value:function(){var n=this.props,a=n.cx,o=n.cy,l=n.angle,c=n.ticks,d=n.axisLine,f=Qe(n,hn),p=c.reduce(function(b,h){return[Math.min(b[0],h.coordinate),Math.max(b[1],h.coordinate)]},[1/0,-1/0]),g=D(a,o,p[0],l),y=D(a,o,p[1],l),m=V(V(V({},S(f)),{},{fill:"none"},S(d)),{},{x1:g.x,y1:g.y,x2:y.x,y2:y.y});return s("line",{className:"recharts-polar-radius-axis-line",...m})}},{key:"renderTicks",value:function(){var n=this,a=this.props,o=a.ticks,l=a.tick,c=a.angle,d=a.tickFormatter,f=a.stroke,p=Qe(a,mn),g=this.getTickTextAnchor(),y=S(p),m=S(l),b=o.map(function(h,v){var w=n.getTickValueCoord(h),A=V(V(V(V({textAnchor:g,transform:"rotate(".concat(90-c,", ").concat(w.x,", ").concat(w.y,")")},y),{},{stroke:"none",fill:f},m),{},{index:v},w),{},{payload:h});return s(q,{className:"recharts-polar-radius-axis-tick",...We(n.props,h,v),children:r.renderTickItem(l,A,d?d(h.value,v):h.value)},"tick-".concat(v))});return s(q,{className:"recharts-polar-radius-axis-ticks",children:b})}},{key:"render",value:function(){var n=this.props,a=n.ticks,o=n.axisLine,l=n.tick;return!a||!a.length?null:u(q,{className:"recharts-polar-radius-axis",children:[o&&this.renderAxisLine(),l&&this.renderTicks(),ye.renderCallByParent(this.props,this.getViewBox())]})}}],[{key:"renderTickItem",value:function(n,a,o){var l;return T.isValidElement(n)?l=T.cloneElement(n,a):Z(n)?l=n(a):l=s(De,{...a,className:"recharts-polar-radius-axis-tick-value",children:o}),l}}]),r}(P.exports.PureComponent);we(Ae,"displayName","PolarRadiusAxis");we(Ae,"axisType","radiusAxis");we(Ae,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function ee(e){return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ee(e)}function Je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,i)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Je(Object(r),!0).forEach(function(i){_e(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function Pn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function et(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,_t(i.key),i)}}function Sn(e,t,r){return t&&et(e.prototype,t),r&&et(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Tn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$e(e,t)}function $e(e,t){return $e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},$e(e,t)}function On(e){var t=Cn();return function(){var i=ve(e),n;if(t){var a=ve(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Ln(this,n)}}function Ln(e,t){if(t&&(ee(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $n(e)}function $n(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Cn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ve(e){return ve=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ve(e)}function _e(e,t,r){return t=_t(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _t(e){var t=Nn(e,"string");return ee(t)==="symbol"?t:String(t)}function Nn(e,t){if(ee(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||"default");if(ee(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Rn=Math.PI/180,tt=1e-5,Pe=function(e){Tn(r,e);var t=On(r);function r(){return Pn(this,r),t.apply(this,arguments)}return Sn(r,[{key:"getTickLineCoord",value:function(n){var a=this.props,o=a.cx,l=a.cy,c=a.radius,d=a.orientation,f=a.tickSize,p=f||8,g=D(o,l,c,n.coordinate),y=D(o,l,c+(d==="inner"?-1:1)*p,n.coordinate);return{x1:g.x,y1:g.y,x2:y.x,y2:y.y}}},{key:"getTickTextAnchor",value:function(n){var a=this.props.orientation,o=Math.cos(-n.coordinate*Rn),l;return o>tt?l=a==="outer"?"start":"end":o<-tt?l=a==="outer"?"end":"start":l="middle",l}},{key:"renderAxisLine",value:function(){var n=this.props,a=n.cx,o=n.cy,l=n.radius,c=n.axisLine,d=n.axisLineType,f=z(z({},S(this.props)),{},{fill:"none"},S(c));if(d==="circle")return s(Nr,{className:"recharts-polar-angle-axis-line",...f,cx:a,cy:o,r:l});var p=this.props.ticks,g=p.map(function(y){return D(a,o,l,y.coordinate)});return s(rn,{className:"recharts-polar-angle-axis-line",...f,points:g})}},{key:"renderTicks",value:function(){var n=this,a=this.props,o=a.ticks,l=a.tick,c=a.tickLine,d=a.tickFormatter,f=a.stroke,p=S(this.props),g=S(l),y=z(z({},p),{},{fill:"none"},S(c)),m=o.map(function(b,h){var v=n.getTickLineCoord(b),w=n.getTickTextAnchor(b),A=z(z(z({textAnchor:w},p),{},{stroke:"none",fill:f},g),{},{index:h,payload:b,x:v.x2,y:v.y2});return u(q,{className:"recharts-polar-angle-axis-tick",...We(n.props,b,h),children:[c&&s("line",{className:"recharts-polar-angle-axis-tick-line",...y,...v}),l&&r.renderTickItem(l,A,d?d(b.value,h):b.value)]},"tick-".concat(h))});return s(q,{className:"recharts-polar-angle-axis-ticks",children:m})}},{key:"render",value:function(){var n=this.props,a=n.ticks,o=n.radius,l=n.axisLine;return o<=0||!a||!a.length?null:u(q,{className:"recharts-polar-angle-axis",children:[l&&this.renderAxisLine(),this.renderTicks()]})}}],[{key:"renderTickItem",value:function(n,a,o){var l;return T.isValidElement(n)?l=T.cloneElement(n,a):Z(n)?l=n(a):l=s(De,{...a,className:"recharts-polar-angle-axis-tick-value",children:o}),l}}]),r}(P.exports.PureComponent);_e(Pe,"displayName","PolarAngleAxis");_e(Pe,"axisType","angleAxis");_e(Pe,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var In=mr,jn=In(Object.getPrototypeOf,Object),Pt=jn,Mn=Mt,qn=Pt,En=qt,Bn="[object Object]",Dn=Function.prototype,Wn=Object.prototype,St=Dn.toString,Fn=Wn.hasOwnProperty,Kn=St.call(Object);function Hn(e){if(!En(e)||Mn(e)!=Bn)return!1;var t=qn(e);if(t===null)return!0;var r=Fn.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&St.call(r)==Kn}var Vn=Hn;function te(e){return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},te(e)}function rt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,i)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(r),!0).forEach(function(i){I(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function zn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nt(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Tt(i.key),i)}}function Zn(e,t,r){return t&&nt(e.prototype,t),r&&nt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Un(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ce(e,t)}function Ce(e,t){return Ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},Ce(e,t)}function Gn(e){var t=Qn();return function(){var i=be(e),n;if(t){var a=be(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Yn(this,n)}}function Yn(e,t){if(t&&(te(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G(e)}function G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function be(e){return be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},be(e)}function I(e,t,r){return t=Tt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Tt(e){var t=Xn(e,"string");return te(t)==="symbol"?t:String(t)}function Xn(e,t){if(te(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||"default");if(te(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var N=function(e){Un(r,e);var t=Gn(r);function r(i){var n;return zn(this,r),n=t.call(this,i),I(G(n),"pieRef",null),I(G(n),"sectorRefs",[]),I(G(n),"id",Ir("recharts-pie-")),I(G(n),"handleAnimationEnd",function(){var a=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),Z(a)&&a()}),I(G(n),"handleAnimationStart",function(){var a=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),Z(a)&&a()}),n.state={isAnimationFinished:!i.isAnimationActive,prevIsAnimationActive:i.isAnimationActive,prevAnimationId:i.animationId,sectorToFocus:0},n}return Zn(r,[{key:"isActiveIndex",value:function(n){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(n)!==-1:n===a}},{key:"hasActiveIndex",value:function(){var n=this.props.activeIndex;return Array.isArray(n)?n.length!==0:n||n===0}},{key:"renderLabels",value:function(n){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var o=this.props,l=o.label,c=o.labelLine,d=o.dataKey,f=o.valueKey,p=S(this.props),g=S(l),y=S(c),m=l&&l.offsetRadius||20,b=n.map(function(h,v){var w=(h.startAngle+h.endAngle)/2,A=D(h.cx,h.cy,h.outerRadius+m,w),$=k(k(k(k({},p),h),{},{stroke:"none"},g),{},{index:v,textAnchor:r.getTextAnchor(A.x,h.cx)},A),B=k(k(k(k({},p),h),{},{fill:"none",stroke:h.fill},y),{},{index:v,points:[D(h.cx,h.cy,h.outerRadius,w),A],key:"line"}),_=d;return Q(d)&&Q(f)?_="value":Q(d)&&(_=f),u(q,{children:[c&&r.renderLabelLineItem(c,B),r.renderLabelItem(l,$,U(h,_))]},"label-".concat(v))});return s(q,{className:"recharts-pie-labels",children:b})}},{key:"renderSectorsStatically",value:function(n){var a=this,o=this.props,l=o.activeShape,c=o.blendStroke,d=o.inactiveShape;return n.map(function(f,p){var g=d&&a.hasActiveIndex()?d:null,y=a.isActiveIndex(p)?l:g,m=k(k({},f),{},{stroke:c?f.fill:f.stroke});return P.exports.createElement(q,{ref:function(h){h&&!a.sectorRefs.includes(h)&&a.sectorRefs.push(h)},tabIndex:-1,className:"recharts-pie-sector",...We(a.props,f,p),key:"sector-".concat(p)},r.renderSectorItem(y,m))})}},{key:"renderSectorsWithAnimation",value:function(){var n=this,a=this.props,o=a.sectors,l=a.isAnimationActive,c=a.animationBegin,d=a.animationDuration,f=a.animationEasing,p=a.animationId,g=this.state,y=g.prevSectors,m=g.prevIsAnimationActive;return s(Mr,{begin:c,duration:d,isActive:l,easing:f,from:{t:0},to:{t:1},onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd,children:function(b){var h=b.t,v=[],w=o&&o[0],A=w.startAngle;return o.forEach(function($,B){var _=y&&y[B],L=B>0?wr($,"paddingAngle",0):0;if(_){var R=ze(_.endAngle-_.startAngle,$.endAngle-$.startAngle),K=k(k({},$),{},{startAngle:A+L,endAngle:A+R(h)+L});v.push(K),A=K.endAngle}else{var E=$.endAngle,le=$.startAngle,ce=ze(0,E-le),H=ce(h),ne=k(k({},$),{},{startAngle:A+L,endAngle:A+H+L});v.push(ne),A=ne.endAngle}}),s(q,{children:n.renderSectorsStatically(v)})}},"pie-".concat(p,"-").concat(m))}},{key:"attachKeyboardHandlers",value:function(n){var a=this;n.onkeydown=function(o){if(!o.altKey)switch(o.key){case"ArrowLeft":{var l=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[l].focus(),a.setState({sectorToFocus:l});break}case"ArrowRight":{var c=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[c].focus(),a.setState({sectorToFocus:c});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var n=this.props,a=n.sectors,o=n.isAnimationActive,l=this.state.prevSectors;return o&&a&&a.length&&(!l||!Kr(l,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var n=this,a=this.props,o=a.hide,l=a.sectors,c=a.className,d=a.label,f=a.cx,p=a.cy,g=a.innerRadius,y=a.outerRadius,m=a.isAnimationActive,b=this.state.isAnimationFinished;if(o||!l||!l.length||!Y(f)||!Y(p)||!Y(g)||!Y(y))return null;var h=at("recharts-pie",c);return u(q,{tabIndex:0,className:h,ref:function(w){n.pieRef=w},children:[this.renderSectors(),d&&this.renderLabels(l),ye.renderCallByParent(this.props,null,!1),(!m||b)&&qr.renderCallByParent(this.props,l,!1)]})}}],[{key:"getDerivedStateFromProps",value:function(n,a){return a.prevIsAnimationActive!==n.isAnimationActive?{prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,curSectors:n.sectors,prevSectors:[],isAnimationFinished:!0}:n.isAnimationActive&&n.animationId!==a.prevAnimationId?{prevAnimationId:n.animationId,curSectors:n.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:n.sectors!==a.curSectors?{curSectors:n.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(n,a){return n>a?"start":n<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(n,a){return T.isValidElement(n)?T.cloneElement(n,a):Z(n)?n(a):s(jr,{...a,type:"linear",className:"recharts-pie-label-line"})}},{key:"renderLabelItem",value:function(n,a,o){if(T.isValidElement(n))return T.cloneElement(n,a);var l=o;return Z(n)&&(l=n(a),T.isValidElement(l))?l:s(De,{...a,alignmentBaseline:"middle",className:"recharts-pie-label-text",children:l})}},{key:"renderSectorItem",value:function(n,a){return T.isValidElement(n)?T.cloneElement(n,a):Z(n)?n(a):Vn(n)?s(Ve,{tabIndex:-1,...a,...n}):s(Ve,{tabIndex:-1,...a})}}]),r}(P.exports.PureComponent);I(N,"displayName","Pie");I(N,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Rr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1});I(N,"parseDeltaAngle",function(e,t){var r=he(t-e),i=Math.min(Math.abs(t-e),360);return r*i});I(N,"getRealPieData",function(e){var t=e.props,r=t.data,i=t.children,n=S(e.props),a=Er(i,wt);return r&&r.length?r.map(function(o,l){return k(k(k({payload:o},n),o),a&&a[l]&&a[l].props)}):a&&a.length?a.map(function(o){return k(k({},n),o.props)}):[]});I(N,"parseCoordinateOfPie",function(e,t){var r=t.top,i=t.left,n=t.width,a=t.height,o=Br(n,a),l=i+ue(e.props.cx,n,n/2),c=r+ue(e.props.cy,a,a/2),d=ue(e.props.innerRadius,o,0),f=ue(e.props.outerRadius,o,o*.8),p=e.props.maxRadius||Math.sqrt(n*n+a*a)/2;return{cx:l,cy:c,innerRadius:d,outerRadius:f,maxRadius:p}});I(N,"getComposedData",function(e){var t=e.item,r=e.offset,i=N.getRealPieData(t);if(!i||!i.length)return null;var n=t.props,a=n.cornerRadius,o=n.startAngle,l=n.endAngle,c=n.paddingAngle,d=n.dataKey,f=n.nameKey,p=n.valueKey,g=n.tooltipType,y=Math.abs(t.props.minAngle),m=N.parseCoordinateOfPie(t,r),b=N.parseDeltaAngle(o,l),h=Math.abs(b),v=d;Q(d)&&Q(p)?(Ze(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),v="value"):Q(d)&&(Ze(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),v=p);var w=i.filter(function(R){return U(R,v,0)!==0}).length,A=(h>=360?w:w-1)*c,$=h-w*y-A,B=i.reduce(function(R,K){var E=U(K,v,0);return R+(Y(E)?E:0)},0),_;if(B>0){var L;_=i.map(function(R,K){var E=U(R,v,0),le=U(R,f,K),ce=(Y(E)?E:0)/B,H;K?H=L.endAngle+he(b)*c*(E!==0?1:0):H=o;var ne=H+he(b)*((E!==0?y:0)+ce*$),Fe=(H+ne)/2,Ke=(m.innerRadius+m.outerRadius)/2,Ct=[{name:le,value:E,payload:R,dataKey:v,type:g}],Nt=D(m.cx,m.cy,Ke,Fe);return L=k(k(k({percent:ce,cornerRadius:a,name:le,tooltipPayload:Ct,midAngle:Fe,middleRadius:Ke,tooltipPosition:Nt},R),m),{},{value:U(R,v),startAngle:H,endAngle:ne,payload:R,paddingAngle:he(b)*c}),L})}return k(k({},m),{},{sectors:_,data:i})});var Jn=Dr({chartName:"PieChart",GraphicalChild:N,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:Pe},{axisType:"radiusAxis",AxisComp:Ae}],formatAxisMap:Wr,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});function ei(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var ti=ei,ri=Et,ni=gt,ii=ti,ai=Object.prototype,oi=ai.hasOwnProperty;function si(e){if(!ri(e))return ii(e);var t=ni(e),r=[];for(var i in e)i=="constructor"&&(t||!oi.call(e,i))||r.push(i);return r}var li=si,ci=yr,di=li,ui=vt;function pi(e){return ui(e)?ci(e,!0):di(e)}var fi=pi,hi=Ar,mi=Pt,yi=_r,gi=Pr,vi=Object.getOwnPropertySymbols,bi=vi?function(e){for(var t=[];e;)hi(t,yi(e)),e=mi(e);return t}:gi,xi=bi,ki=Sr,wi=xi,Ai=fi;function _i(e){return ki(e,Ai,wi)}var Pi=_i;const Si=x(re)`
  border: 1px solid ${({theme:e})=>e.aqua_bg};
  padding-bottom: 18px;

  ${({theme:e})=>e.isMobile&&j`
    border: 0px;
    border-top: 1px solid ${({theme:t})=>t.aqua_bg};
    border-bottom: 1px solid ${({theme:t})=>t.aqua_bg};
  `};
  
  .pool-info-cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0px;
    padding:  0 26px 10px 26px;
    gap: 10px;

    ${({theme:e})=>e.isMobile&&j`
      border-bottom: none;
      flex-wrap: wrap;
    `};

    &:last-child {
      border-bottom: none;
    }
  }
  
  .box-item-with-icon {
    flex: 1;

    .body-wrapper {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`,Ti=x(pr)`
  height: 76px;
`,Oi=x.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 18px 26px;
  border-bottom: 1px solid ${({theme:e})=>e.grey8};
  color: ${({theme:e})=>e.gray_light};
  font-size: 14px;
  line-height: 23px;
  
  .header-title {
    color: ${({theme:e})=>e.aqua_bg};
    margin-right: 16px;
    font-size: 20px;
  }
  .address-link {
    margin-left: 8px;
    color: ${({theme:e})=>e.white};
    cursor: pointer;
  }
  .virtual-price {
    flex: 1;
    text-align: right;
    margin-right: 4px;
  }
  .info-icon {
    position: relative;
    top: 2px;
  }
`,Li=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  line-height: 35px;
  padding:13px 26px;
  gap:10px;
  justify-content: space-between;
  width: 100%;


  ${({theme:e})=>e.isMobile&&j`
  justify-content: flex-start;
  line-height: 26px;
  padding-top:20px;
  padding-bottom:20px;


    `};

  .pool-assets-label{
    color: ${({theme:e})=>e.gray_light};
  }
`,$i=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ci=x.span`
  margin-right:5px;
`,pe={Header:Oi,Card:Si,BoxItemWithIcon:Ti,PoolStableCoins:Li,StablesWrapper:$i,IconWrapper:Ci},Ni=({pool:e,isPoolInfoLoading:t,sumPoolLiquidityValues:r})=>{const{isMobile:i}=Re(),n=O(F.isWalletConnected),a=O(ot.baseNetwork),{data:o}=st({pool:e},{enabled:e.isSupportStaking}),l=P.exports.useMemo(()=>Number(e.lpToken.balance)*e.virtual_price,[e]),c=e.isSupportStaking?o?.myShareValue:l,d=P.exports.useMemo(()=>l/Number(e.lpTokensTotalSupply)*100,[l,e.lpTokensTotalSupply]),f=e.isSupportStaking?o?.myPortionOfPool:d,p=Bt([{label:"Total Liquidity",value:`$${M(r)}`,toolTip:"Sum of this stables pool liquidity provided, in USD value."},{label:"Volume (30D)",value:`$${M(e.volume30d)}`,toolTip:"Liquidity added and removed on the last 24 hours, on this pool in USD value."},{label:"APR",value:`${M(e.virtual_price)}%`,toolTip:"The price presented by the LP token of this pool, it influenced by the assets in this pool and their partial of it."},n&&{label:"My LP balance",value:M(e.lpToken.balance),toolTip:`The amount of LP tokens available in you wallet on the ${e.name}`},n&&{label:"My share value",value:`$${M(c)}`,toolTip:"The USD value of the tokens you provided to this pool."},n&&{label:"My portion of pool",value:`${M(f)}%`,toolTip:`Your share in the ${e.name}, in precentage value.`}]),g=i?2:3,y=ur(p,m=>Math.floor(p.indexOf(m)/g));return u(pe.Card,{className:"width-100",children:[t&&s(Ie,{}),u(pe.Header,{children:[s("div",{className:"header-title",children:"Pool Info"}),!i&&u("div",{className:"flex",children:[" ",s("span",{children:" Address "})," ",s(mt,{address:e.pool_address,onClick:m=>{xe(m,a.explorer_url,e.pool_address)}})]}),u("div",{className:"virtual-price",children:["Virtual price - $",W(e.virtual_price,8)]}),s(oe,{tooltipText:"Moving average of Annual Precentage Rate based on the last 7 days. An additional APY is given for liquidity tokens staking.",displayedValue:s("div",{className:"info-icon",children:s(lt,{})})})]}),u(pe.PoolStableCoins,{children:[s("span",{className:"pool-assets-label",children:" Pool assets"}),e.assets.map(m=>s(Dt,{name:m.symbol,icon:m.icon},m.symbol))]}),s("div",{className:"flex-wrap width-100",children:Object.values(y).map((m,b)=>s(re,{className:"pool-info-cards",children:m.map(h=>s(pe.BoxItemWithIcon,{value:h?.value,label:h?.label,tooltipText:h?.toolTip},h?.label))},b))})]})},Ri=Ni;var Ii=gr,ji=Tr,Mi=vr,qi=br,Ei=vt,Bi=xr.exports,Di=gt,Wi=kr,Fi="[object Map]",Ki="[object Set]",Hi=Object.prototype,Vi=Hi.hasOwnProperty;function zi(e){if(e==null)return!0;if(Ei(e)&&(qi(e)||typeof e=="string"||typeof e.splice=="function"||Bi(e)||Wi(e)||Mi(e)))return!e.length;var t=ji(e);if(t==Fi||t==Ki)return!e.size;if(Di(e))return!Ii(e).length;for(var r in e)if(Vi.call(e,r))return!1;return!0}var Zi=zi,Ui=Or,Gi=Be,Yi=fr,Qi=Pi;function Xi(e,t){if(e==null)return{};var r=Ui(Qi(e),function(i){return[i]});return t=Gi(t),Yi(e,r,function(i,n){return t(i,n[0])})}var Ji=Xi;const ea=e=>{const{assets:t}=e,[r,i]=P.exports.useState({}),[n,a]=P.exports.useState([]);return{form:r,tokens:t,handleChange:(c,d)=>{const f=t.find(p=>p.token_address===c);if(!!f){if(d.value===f.balance)a(p=>[...p,c]);else{const p=n.filter(g=>g!==c);a(p)}d.floatValue>(f.balance??0)||i(p=>Ji({...p,[c]:d.floatValue??void 0},Lr))}},handleMax:c=>{const d=t.find(f=>f.token_address===c);!d||i(f=>({...f,[c]:Number(d.balance)}))},tokenAddressListWithMaxAmount:n}},ta=(e,t,r)=>{if(!t||t==="0")return{slippage:0,slippageUSD:0,slippagePercentage:0};const i=Object.values(r).reduce((l,c)=>l+c,0),n=Number(dt.sub(t,i)),a=n/i*100,o=n*e.virtual_price;return{slippage:n,slippageUSD:o,slippagePercentage:a}},ra=(e,t,r)=>{const i=O(F.walletAddress),{refetch:n}=je(e.pool_address,t,r),{data:a}=Me({queryKey:["calculate-add-liquidity",e.pool_address,t,r,i],queryFn:async()=>{const{data:o}=await n();if(!o)return;const l=Wt(o,t),c=await ct(e.pool_address).calculateTokenAmount(l,!0),d=X.fromWei(c),{slippage:f,slippageUSD:p,slippagePercentage:g}=ta(e,d,r);return{lpToReceive:d,slippage:f,slippageUSD:p,slippagePercentage:g}},enabled:!!i});return{data:a}},na=({pool:e})=>{const t=O(F.isWalletConnected),r=ut(),{handleChange:i,handleMax:n,tokens:a,form:o,tokenAddressListWithMaxAmount:l}=ea(e),c=xt(o,500),{refetch:d,isFetching:f}=je(e.pool_address,a,o),{data:p}=ra(e,a,c),{lpToReceive:g=0,slippageUSD:y=0,slippagePercentage:m=0}=p??{},b=()=>m===0?u("span",{className:"slippage-usd-zero",children:["Slippage: ",m,"%",u("span",{children:[" (~$",y,")"]})]}):Math.sign(m)===1?u("span",{className:"slippage-text-bonus",children:["Bonus: ",de(m),"% ",u("span",{className:"slippage-usd-positive",children:[" (~$",de(y),")"]})]}):u("span",{className:"slippage-text-slippage",children:["Slippage: ",de(m),"%",u("span",{className:"slippage-usd-negative",children:[" (~$",de(y),")"]})]}),h=()=>{const v=f||Zi(o)||Object.keys(o).filter(A=>!!o[A]).length===0,w=async()=>{const{data:A}=await d();r(Ht(e.pool_address,A,g,l))};return t?s(ke,{className:"primary w-100 action",loading:f,disabled:v,onClick:w,children:`Deposit to ${e.name}`}):s(bt,{className:"outlined-primary white w-100 modal fontSize16"})};return u(ie,{className:"no-side-padding",children:[a.map(v=>s(pt,{token:v,value:o[v.token_address],onChange:i,onMax:n},v.token_address)),u(Ft,{children:[u(Kt,{children:[s("span",{className:"label",children:"Estimated price impact"}),s(oe,{tooltipText:"The precentages represents an estimated price value lose or earn at this moment for adding liquidity of each token. "})]}),b()]}),h()]})},ia=e=>{const{assets:t,lpToken:r}=e,[i,n]=P.exports.useState(t[0]?.token_address),[a,o]=P.exports.useState(!1),[l,c]=P.exports.useState();return{lpTokenValue:l,handleChange:(p,g)=>{g.value===r.balance?o(!0):o(!1),c(g.floatValue)},handleMax:()=>{c(r.balance)},selection:i,isMaxAmount:a,onSelect:n}},aa=({pool:e,tokens:t,lpTokenValue:r,isMaxAmount:i,isExceedLiquidityLimit:n})=>{const{lpToken:a}=e,o=ut(),l=O(F.isWalletConnected),c=r&&e.lpToken.balance&&e.lpToken.balance>=r,{refetch:d,isFetching:f}=je(e?.pool_address,[a],{[a.token_address]:r});if(!l)return s(bt,{className:"outlined-primary white w-100 modal fontSize16"});const p=r&&Number(r)>0&&!f&&c&&!n;return s(ke,{className:"primary w-100 action no-margin",disabled:!p,loading:f,onClick:async()=>{const{data:y}=await d();o(Vt(e?.pool_address,t,r,y?.[0]?.isApproveRequired,i))},children:c?"Remove Liquidity":"Insufficient Balance"})},oa=(e,t)=>{if(!e||!t)return 0;const r=e.reduce((a,o)=>{const l=X.fromWei(parseFloat(o.withdrawal),o.decimals),c=Number(l);return a+c},0),i=dt.sub(r,t);return Number(i)/Number(t)*100},sa=async(e,t,r,i,n,a)=>{const o=r?t.find(y=>y.token_address===r):void 0,l=Number(o?.value)<Number(i),c=X.toWei(i),d=n?a:c,f=l?"":await ct(e).calculateRemoveLiquidity(o,d);let p=[];r&&o?p=[{...o,withdrawal:f}]:p=t.sort((y,m)=>y.token_index-m.token_index).map((y,m)=>({...y,withdrawal:f[m]}));const g=l?null:oa(p,i);return{tokensWithdrawal:p,slippage:g,isExceedLiquidityLimit:l}},la=(e,t,r,i,n,a)=>{const o=O(F.walletAddress),l=Number(a),{data:c,isLoading:d}=Me({queryKey:["calculate-remove-liquidity",e,t,r,o,l],queryFn:()=>sa(e,t,r,l,i,n),enabled:!!o&&l>0});return{data:c,isLoading:d}},ca=({pool:e})=>{const{assets:t}=e,{lpTokenValue:r,handleChange:i,handleMax:n,onSelect:a,selection:o,isMaxAmount:l}=ia(e),c=xt(r,500),{isLoading:d,data:f}=la(e?.pool_address,t,o,l,e?.lp_token?.balanceInWei,c),{data:p}=st({pool:e}),g=Ne(),y=Rt(),{tokensWithdrawal:m,slippage:b,isExceedLiquidityLimit:h}=f||{},v=P.exports.useMemo(()=>t.find(L=>L.web3_address===o),[t,o]),w=()=>{const _=e.lpToken;return s(ie,{className:"no-side-padding",style:{borderBottom:"none"},children:s(pt,{token:_,value:r,onChange:i,onMax:n},_.token_address)})},A=()=>{if(!!r){if(d)return s(Xt,{});if(!!m)return u(me,{children:[s(Jt,{children:"You will receive at least"}),s(er,{children:m.map(_=>{const L=X.fromWei(parseFloat(_.withdrawal),_.decimals);return u("div",{className:"token-total",children:[W(L)," ",_.name]},_.token_address)})})]})}},$=t.map(_=>({..._,withdrawal:r&&m?.find(L=>L.web3_address===_.web3_address)?.withdrawal})),B=()=>b===0?u("span",{className:"slippage-usd-zero",style:{fontSize:14},children:["Slippage: ",W(b,2),"%"]}):b&&b>0?u("span",{className:"slippage-text-bonus",style:{fontSize:14},children:["Bonus: ",W(b,2),"% "]}):u("span",{className:"slippage-text-slippage",style:{fontSize:14},children:["Slippage: ",W(b,2),"%"]});return u(me,{children:[s(zt,{children:"Remove"}),w(),p?.totalStakedTokens>0&&s(Zt,{children:u("div",{className:"staked-token-inner-wrapper",children:[u("div",{className:"staked-token-text",children:[p?.totalStakedTokens," LP Tokens of yours are ",s("span",{onClick:()=>g.push(`${y.pathname}/stake`),className:"staked",children:"staked"})]}),s(oe,{tooltipText:"If you wish to remove your LP Tokens from pool liquidity unstake it from the staking contract."})]})}),u(ie,{className:"no-side-padding",children:[s(Ut,{left:u("div",{style:{fontSize:16},children:[s("span",{style:{color:"white",fontWeight:700},children:"Get"})," ",s("span",{children:"Select tokens"})]}),right:u("div",{className:"flex flex-align-center",children:[u("div",{style:{marginRight:5,fontWeight:400,fontSize:12},children:[B()," "]}),s(oe,{})," "]})}),s("div",{style:{marginTop:10},children:s(Gt,{style:{marginTop:60},tokens:$,selection:o,onSelect:a})})]}),u(ie,{style:{gap:"1.25rem",minHeight:r?174:void 0,justifyContent:"space-between"},children:[h?u(Yt,{children:[u("div",{className:"width",children:[" ",s(Qt,{})]}),u("div",{className:"warning-text",children:["The amount you selected is greater than the total ",v?.name," available liquidity in this pool. Select the \u201CMixed tokens\u201D option or lower amount."]})]}):A(),s(aa,{pool:e,tokens:m,lpTokenValue:r,isMaxAmount:l,isExceedLiquidityLimit:h})]})]})},Ot=e=>P.exports.createElement("svg",{width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.58594 17.1226C13.8661 17.1226 17.3359 13.6528 17.3359 9.37256C17.3359 5.09235 13.8661 1.62256 9.58594 1.62256C5.30573 1.62256 1.83594 5.09235 1.83594 9.37256C1.83594 13.6528 5.30573 17.1226 9.58594 17.1226ZM9.58594 18.1226C14.4184 18.1226 18.3359 14.2051 18.3359 9.37256C18.3359 4.54007 14.4184 0.622559 9.58594 0.622559C4.75345 0.622559 0.835938 4.54007 0.835938 9.37256C0.835938 14.2051 4.75345 18.1226 9.58594 18.1226ZM5.0026 9.78923V8.78923H9.16927V4.78923H10.1693V8.78923H14.1693V9.78923H10.1693V13.9559H9.16927V9.78923H5.0026Z",fill:"#2FF6D3"}),P.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.58594 17.1226C13.8661 17.1226 17.3359 13.6528 17.3359 9.37256C17.3359 5.09235 13.8661 1.62256 9.58594 1.62256C5.30573 1.62256 1.83594 5.09235 1.83594 9.37256C1.83594 13.6528 5.30573 17.1226 9.58594 17.1226ZM9.58594 18.1226C14.4184 18.1226 18.3359 14.2051 18.3359 9.37256C18.3359 4.54007 14.4184 0.622559 9.58594 0.622559C4.75345 0.622559 0.835938 4.54007 0.835938 9.37256C0.835938 14.2051 4.75345 18.1226 9.58594 18.1226ZM5.0026 9.78923V8.78923H9.16927V4.78923H10.1693V8.78923H14.1693V9.78923H10.1693V13.9559H9.16927V9.78923H5.0026Z",fill:"#2FF6D3"})),Lt=e=>P.exports.createElement("svg",{width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.3359 9.5835C17.3359 13.8637 13.8661 17.3335 9.58594 17.3335C5.30573 17.3335 1.83594 13.8637 1.83594 9.5835C1.83594 5.30329 5.30573 1.8335 9.58594 1.8335C13.8661 1.8335 17.3359 5.30329 17.3359 9.5835ZM18.3359 9.5835C18.3359 14.416 14.4184 18.3335 9.58594 18.3335C4.75345 18.3335 0.835938 14.416 0.835938 9.5835C0.835938 4.751 4.75345 0.833496 9.58594 0.833496C14.4184 0.833496 18.3359 4.751 18.3359 9.5835ZM5.0026 9.00016V10.0002H14.1693V9.00016H5.0026Z",fill:"#2FF6D3"}),P.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.3359 9.5835C17.3359 13.8637 13.8661 17.3335 9.58594 17.3335C5.30573 17.3335 1.83594 13.8637 1.83594 9.5835C1.83594 5.30329 5.30573 1.8335 9.58594 1.8335C13.8661 1.8335 17.3359 5.30329 17.3359 9.5835ZM18.3359 9.5835C18.3359 14.416 14.4184 18.3335 9.58594 18.3335C4.75345 18.3335 0.835938 14.416 0.835938 9.5835C0.835938 4.751 4.75345 0.833496 9.58594 0.833496C14.4184 0.833496 18.3359 4.751 18.3359 9.5835ZM5.0026 9.00016V10.0002H14.1693V9.00016H5.0026Z",fill:"#2FF6D3"}));function da(e){return P.exports.forwardRef(e)}const Te=[{id:"add_liquidity",label:u("div",{className:"flex flex-align-center flex-justify-center",children:[s(Ot,{className:"liqudity-tabs-icon"}),s("span",{className:"liqudity-tabs-label",children:"Add Liquidity"})]})},{id:"remove_liquidity",label:u("div",{className:"flex flex-align-center flex-justify-center",children:[s(Lt,{className:"liqudity-tabs-icon"}),s("span",{className:"liqudity-tabs-label",children:"Remove Liquidity"})]})}],ua=da(({pool:e},t)=>{const[r,i]=T.useState("add_liquidity"),n=O(ot.baseNetwork),a=O(F.walletAddress),o=tr(21e3,35),l=Te.find(c=>c.id===r)||Te[0];return u(rr,{className:"width-100",ref:t,children:[s(hr,{options:Te,activeTab:l,onChange:c=>i(c.id),className:"liqudity-form-tabs"}),a&&!o.isEnoughBalance?s(nr,{baseNetwork:n}):null,r==="add_liquidity"&&s(na,{pool:e}),r==="remove_liquidity"&&s(ca,{pool:e})]})}),pa=ua,fa=x(re)`

.pool-liqudity-text {
  align-items: center;
  justify-content: space-between;

  ${({theme:e})=>e.isMobile&&j`
    flex-direction: column;
    line-height:27px;

  `};
}
  max-width: 535px;
  width: 100%;
  background-color: ${({theme:e})=>e.dark_bg};
  .label-top {
   margin-bottom: 50px;
  
  }

`,ha=x.div`
  padding: 30px 30px 20px 30px;
  font-size: 20px;
  text-align: left;
  border-bottom: 1px solid ${({theme:e})=>e.navy_medium};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  

`,ma=x.div`
  display: flex;
  flex-direction: ${({theme:e})=>e.isMobile?"column-reverse":"row"};
  padding: 25px 25px 15px 25px;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;

`,ya=x.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${({theme:e})=>!e.isMobile&&j`
    margin-right: 5px;
  `};

  .stable-liquidity-card {
    background-color: ${({theme:e})=>e.gray_extra_light};
    flex-direction: row;
    min-height: 70px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding:0 13px 0 13px;
    border-radius: 5px;
    line-height: 24px;
    width: ${({theme:e})=>e.isMobile?"100%":""};
    &:hover {
      cursor: pointer;
      border: 1px solid ${e=>e.hoverColor};
    }
  }
`,ga=x.img`
text-align: left;
margin-right: 10px; 

  width: 30px;
  height: 30px;

`,va=x.div`
text-align: right;
color: ${({theme:e})=>e.grey01};

`,ba=x.div`
font-size: 16px;
font-weight: 700;
text-align: left;
flex: 1;

.stable-coin-wrapper {
  display: flex;

  .away-icon {
    cursor: pointer;  

  }

  svg {
    width: 11px;
    height: 11px;
  }

}

.stable-coin-name {
  margin-right: 5px;
}

.stable-coin-value {
  font-weight: 400;
}
`,xa=x.div`
font-size: 12px;
`,ka=x.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .recharts-pie-sector {
    path {
      outline: none;
    }
  }

  ${({theme:e})=>e.isMobile&&j`
  margin-bottom: 17px;
  justify-content:  center;
    `}

 
  .custom-tooltip {
    background: ${({theme:e})=>e.grey01};
    height: 23px;
    min-width: 33px;
    padding: 0 5px;
    display: 'flex';
    justify-content: 'center';
    border-radius: 5px;

  }

  .custom-tooltip::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({theme:e})=>e.grey01} transparent transparent transparent;
  
  }
`,wa=x.div`
margin-top: 10px;
`,Aa=x.div`
font-size: 12px;
color: ${({theme:e})=>e.grey01};
`,_a=x.div`
font-size: 22px;
font-weight: 700;
margin-bottom: 4px;
`,Pa=x.div`
font-size: 14px;
font-weight: 400;
`,C={Card:fa,Header:ha,DollarPercentageWrapper:va,ChartWrapper:ma,StableLiqudityWrapper:ya,StableIcon:ga,NameLiquidityWrapper:ba,StableDollarValue:xa,PieChartWrapper:ka,TotalLiquidityText:Aa,TotalLiquidityUSD:_a,TotalLiquidityTokens:Pa,ChartTextWrapper:wa},Sa=({assets:e,totalLiquidity:t,activeStableCoin:r})=>{const i=({payload:n})=>{const a=n?.[0]?.name;return s("div",{className:"custom-tooltip",children:s("div",{children:a})})};return u(C.PieChartWrapper,{children:[u(Jn,{width:220,height:220,children:[u(N,{data:e,dataKey:"value",nameKey:"name",innerRadius:70,outerRadius:95,stroke:Se.gray_extra_light,children:[s(ye,{value:`${M(r?.value)} ${r?.name}`,position:"centerBottom",fontSize:"16px",fill:"white",fontWeight:700}),s(ye,{value:r?.value?`~$${M(ft(r?.name.toLowerCase())*r?.value)}`:"",position:"centerTop",fontSize:"12px",fill:r.color,dy:10}),e.map(({name:n,color:a})=>s(wt,{fill:a},n))]}),s(N,{data:e,innerRadius:60,outerRadius:70,fill:Se.gray_extra_light,stroke:"none",outline:"none"}),s(N,{data:e,innerRadius:95,outerRadius:105,fill:Se.gray_extra_light,stroke:"none"}),s(Fr,{wrapperStyle:{backgroundColor:"none",border:"1px solid transparent"},content:s(i,{})})]}),u(C.ChartTextWrapper,{children:[s(C.TotalLiquidityText,{children:"Total Pool Liqudity"}),s(C.TotalLiquidityUSD,{children:`~$${W(t,2)}`}),s(C.TotalLiquidityTokens,{children:`${W(t,2)} Tokens`})]})]})},Ta=({setActiveStableCoin:e,activeStableCoin:t,assets:r})=>{const i=O(se.networksById);return r.sort((n,a)=>a.value-n.value),s(C.StableLiqudityWrapper,{hoverColor:t.color,children:r.map(({name:n,value:a,icon:o,color:l,percentage:c,token_address:d,network_id:f})=>u(re,{className:"stable-liquidity-card",onMouseOver:()=>e({name:n,color:l,value:a}),children:[s(C.StableIcon,{src:o,alt:n}),u(C.NameLiquidityWrapper,{children:[u("div",{className:"stable-coin-wrapper",children:[s("span",{className:"stable-coin-name",children:n}),s("div",{className:"away-icon",onClick:p=>xe(p,i[f].explorer_url,d,!0),children:s(qe,{})})]}),s("div",{className:"stable-coin-value",children:M(a)})]}),u(C.DollarPercentageWrapper,{children:[u("div",{children:[c<1?"less than 1":W(c,2),"%"]}),u(C.StableDollarValue,{children:["1",n," = $",ft(n.toLowerCase())]})]})]},n))})},Oa=({pool:e,sumPoolLiquidityValues:t})=>{const{assets:r}=e,[i,n]=P.exports.useState(r[0]),a=O(se.networksById),o=P.exports.useMemo(()=>r.map(c=>{const d=c.value/Number(t)*100;return{...c,percentage:d}}),[r,t]);return u(C.Card,{children:[u(C.Card.Header,{className:"pool-liqudity-text",children:[s("div",{children:"Current Pool Liquidity"}),s("div",{style:{fontSize:16},children:ir(a[e.network_id].icon,a[e.network_id].label_name)})]}),s(yt,{}),u(C.ChartWrapper,{children:[o.length>0&&s(Ta,{setActiveStableCoin:n,activeStableCoin:i,assets:o}),r.length>0&&s(Sa,{totalLiquidity:Number(t),assets:r,activeStableCoin:i})]})]})},La=Oa,it=x(re)`
//overwrite card comp border
 border:none;

 .tx-history-header {

  ${({theme:e})=>e.isTablet&&j`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 24px;
 `}

.tx-history-header-text {
  margin-right: 9px;
}
 }

.address-link {
  color: ${({theme:e})=>e.gray_light};

path {
  opacity: 0.5;
}
 &:hover {
  color: ${({theme:e})=>e.aqua_bg};
  path {
    opacity: 1;

  }
}
}
  .table-content {
    min-height: 360px;


    .rpcl-ellipsis {
      align-self: center;
      justify-self: center;
    }
  }
`,$a=x(Hr)`
  border-collapse: collapse;

  .icon-wrapper {
    path {
      fill: ${({theme:e})=>e.white};
    }
  }

  .thead {
    & > .tr {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 0 27px;
      & > .th {
        font-size: 14px;
        line-height: 16px;
        color: rgba(255, 255, 255, 0.5);
        text-align: left;

      }
    }
  }

  .tbody {
    
    .tr {
      display: flex;
      min-height: 60px;
      background: rgba(255, 255, 255, 0.10);
      transform: scale(1);
      border-bottom: 3px solid #00132f;
      padding: 0 27px;

      .tx-action {
        svg {
          margin-left:6px;
          &:hover {
            cursor: pointer;
            path {
              stroke: ${({theme:e})=>e.aqua_bg};
            } 
          }
        }
        g {
          opacity: 1;
        }
      }

      .td {
        font-size: 14px;
        display: flex;
        align-items: left;
        padding-top: 18px;


        &:first-of-type {
          justify-content: ${({theme:e})=>e.isTablet?"flex-start":"left"};
        }

        .token-cell {
          font-size: 14px;
          display: flex;
          flex-direction: column;
          .token-cell-inner-wrapper{
            color: ${({theme:e})=>e.white};

            display: flex;
            align-items: center;
            margin-bottom: 18px;

          img {
            width: 22px;
            height: 22px;
             margin-right: 6px;

          }
          .token-symbol, .token-amount{
            margin-right: 6px;
          }
        }

        & > div {
          display: flex;
          align-items: center;
          justify-content: left;

          & > svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
}
`,{dapiBaseUrl:Ca}=ht,fe=8,Na=({networkId:e,pageNumber:t,pool:r})=>{const i=O(F.walletAddress),n=Me({queryKey:["pool_tx_history",i,e],queryFn:async()=>{const c=(await ar.get(`${Ca}/event_polling/contracts_events_info`,{headers:{Authorization:`Chainport-FE,${ht.dapiKey}`},params:{collection_name:"Chainport",contract_addresses:or(e),user_web3_addresses:i,event_names:"AddLiquidity,RemoveLiquidity,RemoveLiquidityOne"}})).data.map(d=>{const{event_name:f,poll_time:p,boughtId:g,transaction_hash:y}=d,m=[];if(d.tokensBought){const b=r.assets.find(h=>h.token_index===parseInt(g,10));m.push({...b,amount:X.fromWei(parseFloat(d?.tokensBought),b?.decimals)})}else d.tokenAmounts.forEach((b,h)=>{const v=r.assets.find(w=>w.token_index===h);!v||m.push({icon:v.icon,web3Address:v.web3_address,symbol:v.symbol,name:v.name,amount:X.fromWei(parseFloat(b),v.decimals)})});return{created_at:Ee(p),action:f==="AddLiquidity"?"Add liquidity":"Remove liquidity",token:m,txHash:y}});return c.reverse(),c},enabled:!!i}),a=n.data?Math.floor(n.data.length/fe)+(n.data.length%fe>0?1:0):0,o=n.data?n.data?.slice((t-1)*fe,t*fe):[];return{...n,data:n.data?{txHistory:o,totalPages:a}:n.data}},Ra=(e,t,r)=>{e.stopPropagation();const i=`${t}tx/${r}`;window.open(i,"_blank","noopener,noreferrer")},Ia=(e,t)=>[{id:"date",cell:r=>s("div",{className:"paddingLeft27px",children:Ee(r.created_at)}),header:"Date",style:{flex:5}},{id:"action",cell:r=>u("div",{className:"tx-action",children:[r?.action,s(qe,{onClick:i=>Ra(i,t[e.network_id].explorer_url,r?.txHash)})]}),style:{flex:6},header:"Action"},{id:"token",cell:r=>s("div",{className:"token-cell",children:r.token?.map(i=>parseFloat(i.amount)===0?null:u("div",{className:"token-cell-inner-wrapper",children:[s("img",{src:i.icon,alt:i.icon}),s("span",{className:"token-amount",children:M(i.amount)}),s("span",{className:"token-symbol",children:i.symbol})]},i.name))}),style:{flex:5},header:"Token"}],ja=e=>e.action==="Remove liquidity"?s("div",{className:"icon-wrapper",children:s(Lt,{})}):s("div",{className:"icon-wrapper",children:s(Ot,{})}),Ma=(e,t)=>[{id:"action",cell:ja,style:{flex:1}},{id:"date",cell:r=>s("div",{className:"paddingLeft27px",children:Ee(r.created_at)}),header:"Date",style:{flex:4}},{id:"token",cell:r=>s("div",{className:"token-cell",children:r.token?.map(i=>parseFloat(i.amount)===0?null:u("div",{className:"token-cell-inner-wrapper",children:[s("img",{src:i.icon,alt:i.icon}),s("span",{className:"token-amount",children:M(i.amount)}),s("span",{className:"token-symbol",children:i.symbol}),s(qe,{onClick:n=>xe(n,t[e.network_id].explorer_url,i.web3Address,!0)})]},i.name))}),style:{flex:5},header:"Token"}],qa=({pool:e})=>{const[t,r]=T.useState(1),i=O(F.walletAddress),n=O(se.networksById),a=O(se.isMobile),o=Ia(e,n),l=Ma(e,n),{data:c,isLoading:d}=Na({networkId:e.network_id,pageNumber:t,pool:e}),f=()=>d||!c?s(Ie,{}):u(me,{children:[s($a,{columns:a?l:o,data:c.txHistory}),c.totalPages>0&&s(Vr,{numOfPages:c.totalPages,currentPage:t,onPageChanged:r,widthBTN:"28px",heightBTN:"28px"})]});return i?u(it,{className:"width-100 no-side-padding",children:[u(it.Header,{className:"tx-history-header",children:[s("div",{className:"tx-history-header-text",children:"Transaction History"}),s(mt,{address:i,onClick:p=>xe(p,n[e.network_id].explorer_url,i)})]}),s(yt,{}),s(ie,{className:"table-content no-side-padding",children:f()})]}):null},Ea=qa,Ba=x.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  margin-top: 20px;
  gap: 1rem;

  ${({theme:e})=>e.isMobile&&j`
    padding: 0 20px;
    gap: 14px;
    .header-title {
      flex: 1;
    }
  `};

  .header-title {
    font-size: 25px;
    display: flex;
    font-weight: 600;
    align-items: center;
    white-space: nowrap;

    ${({theme:e})=>e.isMobile&&j`
      font-size: 20px;
      font-weight: 400;
    `};
  
   img {
    margin-right: 7px;
    width: 32px;
    height: 32px;
   }
    span {
      margin-left: 4px;
    }
  }

  .primary.button {
    width: fit-content;
    padding-left: 16px;
    padding-right: 16px;
  }
`,Da=x.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    color: ${({theme:e})=>e.gray_light};
    text-decoration: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }
  svg {
    height: 12px;
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
    opacity: 0.5;
    margin-right: 4px;
  }
`,Wa=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme:e})=>e.isMobile&&j`
    flex-wrap: wrap;
    gap: 14px;
  `};
`,Fa=x.div`
  display: flex;
  align-items: center;

  .button {
    padding: 0 16px;
  }
`,Ka=x.div`
  color: ${({theme:e})=>e.aqua_bg};
  margin-right: 8px;
`,$t=({pool:e,formRef:t})=>{const{name:r,apy:i}=e,{isMobile:n}=Re(),o=O(se.networksById)[e.network_id],l=()=>{t?.current&&t.current.scrollIntoView({behavior:"smooth",block:"center"})},c=()=>s(ke,{style:{minHeight:34},className:"primary",onClick:l,children:"Add/Remove Liquidity"});return u(Ba,{children:[u(Da,{children:[u(It,{to:"/pools",children:[s(sr,{}),"Pools"]}),n&&c()]}),u(Wa,{children:[u("div",{className:"header-title",children:[s("img",{src:o.icon,alt:"pool name"}),r]}),u(Fa,{children:[i&&u(Ka,{children:["APY ",i,"%"]}),!n&&c()]})]})]})};$t.propTypes={pool:He.exports.object,formRef:He.exports.any};const Ha=$t,Va=x.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  width: 85%;
  max-width: 535px;
  align-self: center;
  // margin top and bottom needed to get distance from header and footer
  margin-top: ${({theme:e})=>e.isMobile?"":"5rem"};
  margin-bottom: 5rem;
  font-family: ROBOTO;

  ${({theme:e})=>e.isMobile&&j`
    width: 100%;
  `};
`,za=x(re)`
  background-color: rgba(47, 246, 211, 0.5);
  width: calc(100% - 80px);
  padding: 8px 18px;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  flex-direction: row;
  border-radius: 5px;
  border: none;

  .info-icon {
    margin-right:14px;
  }

  ${({theme:e})=>e.isMobile&&j`
    flex-wrap: wrap;
    gap: 14px;
  `};

  svg {
    margin-left: 4px;
    color: white;
    path {
      fill: white;
    }
  }

  .button.secondary {
    font-size: 18px;
    font-weight: 500;
  }
`,Za=({pool:e})=>{const{isMobile:t}=Re(),r=Ne(),i=()=>{r.push(`/pools/${e.pool_address}/stake`)},{stakingStableStats:n}=zr(e.network_id);return u(za,{children:[u("div",{className:lr("flex flex-one nowrap",{"flex-justify-center":t}),children:[u("div",{children:["Current staking APY: ",n?.apy,"%"]}),s(oe,{tooltipText:cr("tooltip.pool_staking_apy"),displayedValue:s("div",{className:"info-icon",children:s(lt,{})})})]}),s(ke,{className:"secondary small nowrap",onClick:i,children:"Stake LP Token"})]})},Ua=Za,fo=()=>{const e=Ne(),{id:t}=jt(),r=T.useRef(null),{data:i,error:n,isLoading:a}=dr({id:t});T.useEffect(()=>{n&&e.replace("/pools/")},[n,e]);const o=P.exports.useMemo(()=>i?.assets.reduce((c,d)=>c+d.value,0),[i?.assets]);return u(Va,{children:[!i&&s(Ie,{}),i&&u(me,{children:[s(Ha,{pool:i,formRef:r}),s(Ri,{pool:i,isPoolInfoLoading:a,sumPoolLiquidityValues:o}),i?.isSupportStaking&&s(Ua,{pool:i}),s(pa,{pool:i,ref:r}),s(La,{pool:i,sumPoolLiquidityValues:o}),s(Ea,{pool:i})]})]})};export{fo as default};
