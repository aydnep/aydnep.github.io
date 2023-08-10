import{j as p,_ as d}from"./_baseAssignValue.e2c24b97.js";import{_ as u}from"./_baseEach.4f840fa4.js";import{a as f}from"./keys.94ea85c1.js";import{a as A,j as h}from"./unifiedFrontend.b9321740.js";import{p as n,s as i,c as l,_ as b,b8 as _}from"./index.8c6e34d8.js";function m(r,a,e,s){for(var t=-1,o=r==null?0:r.length;++t<o;){var g=r[t];a(s,g,e(g),r)}return s}var v=m,x=u;function y(r,a,e,s){return x(r,function(t,o,g){a(s,t,e(t),g)}),s}var $=y,j=v,k=$,q=p,w=f;function N(r,a){return function(e,s){var t=w(e)?j:k,o=a?a():{};return t(e,r,q(s),o)}}var O=N,P=d,R=O,S=Object.prototype,B=S.hasOwnProperty,E=R(function(r,a,e){B.call(r,e)?r[e].push(a):P(r,e,[a])}),z=E;const c=({address:r,onClick:a,className:e=""})=>A("div",{onClick:a,className:l(e,"address-link"),children:[b(r),h(_,{className:"redirect-icon"})]});c.propTypes={address:n.exports.string.isRequired,className:n.exports.string,onClick:n.exports.func.isRequired};const D=i(c)`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;


  &:hover {
    color: ${({theme:r})=>r.aqua_bg};
    opacity: 1;

    path {
      stroke: ${({theme:r})=>r.aqua_bg};
    }
  }

  .redirect-icon {
    cursor: pointer;
    margin-left: 4px;
  }
`,F=i.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme:r})=>r.gray_extra_light7};
`;export{D as A,F as S,z as g};
