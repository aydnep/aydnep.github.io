import{r as i,j as t,a as x,F as O,R as ze,u as sn}from"./unifiedFrontend.b9321740.js";import{s as r,S as Zn,A as V,p as n,c as W,t as u,a as g,m as E,b as X,L as Wt,u as c,G as N,B as L,d as $,e as Yt,T as We,f as ke,W as D,g as Fn,h as ht,i as ln,j as Y,r as pt,v as Vn,k as cn,l as En,n as B,E as Wn,C as Dn,o as mt,q as zn,w as On,x as _e,y as gt,z as Pn,P as jn,U as Gn,D as xe,F as ge,H as Ne,I as Xt,J as Un,K as Kt,M as qn,N as dn,O as pn,Q as mn,R as De,V as ut,X as gn,Y as Yn,Z as Ke,_ as Ce,$ as Xn,a0 as Jt,a1 as Kn,a2 as ft,a3 as xn,a4 as Je,a5 as hn,a6 as bt,a7 as Jn,a8 as Qt,a9 as Qe,aa as se,ab as un,ac as fn,ad as Qn,ae as eo,af as me,ag as to,ah as Xe,ai as Ht,aj as no,ak as oo,al as ao,am as io,an as ro,ao as so,ap as lo,aq as Dt,ar as co,as as zt,at as bn,au as po,av as mo,aw as wn,ax as Ot,ay as en,az as go,aA as tn,aB as Cn,aC as xo,aD as ho,aE as uo,aF as _n,aG as kn,aH as fo,aI as bo,aJ as wo,aK as Co,aL as _o,aM as xt,aN as ko,aO as yo,aP as vo,aQ as Lo,aR as Mo,aS as To,aT as So,aU as No,aV as Ao,aW as Io,aX as Bo,aY as Ro,aZ as $o,a_ as Ho,a$ as Zo,b0 as Fo,b1 as Vo}from"./index.8c6e34d8.js";import{C as yn}from"./ConnectWalletButton.0b195b95.js";import{S as Eo}from"./react-select.esm.41cd7de1.js";import{u as Wo}from"./useDebounce.3f495a27.js";import"./vendor.808b6738.js";import"./styled.e5cef5eb.js";const Do=e=>i.exports.createElement("svg",{width:23,height:22,viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.exports.createElement("path",{d:"M11.6035 13.8838C10.9331 13.8838 10.3711 14.4054 10.3711 15.0278C10.3711 15.6501 10.9331 16.1718 11.6035 16.1718C12.2492 16.1718 12.8358 15.6501 12.8063 15.0552C12.8358 14.4009 12.2788 13.8838 11.6035 13.8838Z",fill:"#F3BA2F"}),i.exports.createElement("path",{d:"M11.2991 5.85212C10.7124 6.0077 10.3477 6.5019 10.3477 7.10135C10.3772 7.46285 10.4019 7.82892 10.4315 8.19042C10.5153 9.56778 10.5991 10.9177 10.6829 12.295C10.7124 12.7618 11.1019 13.1004 11.6047 13.1004C12.1075 13.1004 12.5019 12.7389 12.5265 12.2676C12.5265 11.9839 12.5265 11.723 12.5561 11.4348C12.6103 10.5516 12.6695 9.66845 12.7237 8.78529C12.7533 8.2133 12.8075 7.64131 12.8371 7.06932C12.8371 6.8634 12.8075 6.68036 12.7237 6.49733C12.4723 5.98482 11.8857 5.72399 11.2991 5.85212Z",fill:"#F3BA2F"}),i.exports.createElement("circle",{cx:11.5,cy:11,r:10,stroke:"#F3BA2F",strokeWidth:2}));const zo=r.span.withConfig({displayName:"styled__DownArrowContainer",componentId:"sc-1jvkr0k-0"})(["cursor:pointer;.downarrow-container{&:hover{opacity:0.5;transition:all .35s ease;}}& > svg{fill:white;}"]),Oo={DownArrowContainer:zo},Vt=()=>t(Oo.DownArrowContainer,{children:t(Zn,{})}),Po=r.div`
  width: 100%;

  &.hide {
    display: none;
  }

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    background: ${({theme:e})=>e.gray_extra_light};
    outline: none;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 5px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      background: ${({theme:e})=>e.gray_extra_light};
      cursor: pointer;
      border-radius: 50%;
      border: 6px solid ${({theme:e})=>e.aqua_bg};
      box-shadow: 0px 0px 15px rgba(47, 246, 211, 0.6);
      position: relative;
      outline: none;
    }

    &::-moz-range-thumb {
      width: 13px;
      height: 13px;
      background: ${({theme:e})=>e.gray_extra_light};
      cursor: pointer;
      border-radius: 50%;
      border: 6px solid ${({theme:e})=>e.aqua_bg};
      box-shadow: 0px 0px 15px rgba(47, 246, 211, 0.6);
      position: relative;
      outline: none;
    }
  }
`,jo=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Roboto';
  padding: 0 2px;

  &.isEditable {
    margin-bottom: 24px;
  }

  span:last-of-type {
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;

    & > span {
      margin-left: 5px;
    }
  }
`,Go=r.input`
  border-radius: 5px;
  border: none;
  outline: none;
  width: 50px !important;
  height: 20px !important;
  margin-right: 10px;
  padding-left: 10px;
  color: #ffffff;
  font-size: 16px;
  box-sizing: border-box;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,Uo=r.input`
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: ${({theme:e})=>e.gray_extra_light};
  position: relative;
  transition: all 0.3s ease-out;
  box-sizing: border-box;
  opacity: 0.75;

  &.slowest {
    padding-left: 15px;
  }

  &.fastest {
    padding-right: 15px;
  }

  ${({theme:e})=>e.isMobile&&V`
    padding-left: 17px;
    padding-right: 17px;

    &.slowest {
      padding-left: 0;
    }

    &.fastest {
      padding-right: 0;
    }
  `}
`,qo=r.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-family: 'Roboto';
  margin-bottom: 20px;

  ${({theme:e})=>e.isMobile&&V`
    padding-left: 15px;
    padding-right: 15px;
  `}
`,Yo=r.span`
 cursor:pointer;
  transition: all 0.2s ease-in;
  &:hover{
    opacity:0.5;
  }
`,we={Container:Po,Header:jo,RangeEditInput:Go,RangeInput:Uo,RangeLevels:qo,RangeItem:Yo},Pt=({value:e,setValue:s,gasPrices:o,amountInUSD:m,className:d,style:l,isEditable:a=!0})=>{const[w,p]=i.exports.useState(!1),f=i.exports.useRef(null);i.exports.useEffect(()=>{if(w)return f.current.focus()},[w]);const C=()=>{if(!a)return;const _=S=>s(S.target.value),k=()=>s((o.safeLow+o.fastest)/2),h=()=>s(o.fastest),y=()=>s(o.safeLow);return x(O,{children:[t(we.RangeInput,{className:W({fastest:parseInt(e,10)>o.fastest,slowest:parseInt(e,10)<o.safeLow}),step:"0.1",type:"range",min:e<o.safeLow?e:o.safeLow,max:o.fastest,value:e,onChange:_}),x(we.RangeLevels,{children:[t(we.RangeItem,{onClick:y,children:u("common.slow")}),t(we.RangeItem,{onClick:k,children:u("common.standard")}),t(we.RangeItem,{onClick:h,children:u("common.fast")})]})]})};return x(we.Container,{className:W(d,{isEditable:a}),style:l,children:[x(we.Header,{children:[t("span",{children:a?u("modal.set_gas"):u("modal.transaction_fee")}),x("span",{onClick:()=>a&&p(!w),children:[w&&a?t(we.RangeEditInput,{ref:f,onClick:_=>_.stopPropagation(),type:"text",onBlur:()=>{if(p(!1),!e)return s(o.safeLow)},value:e,onChange:_=>s(_.target.value)}):parseFloat(e)," ","GWei",t("br",{}),x("span",{children:["(~$",m,")"]})]})]}),C()]})};Pt.propTypes={value:n.exports.oneOfType([n.exports.string,n.exports.number]).isRequired,setValue:n.exports.func.isRequired,gasPrices:n.exports.shape({safeLow:n.exports.number,fast:n.exports.number,fastest:n.exports.number}).isRequired,amountInUSD:n.exports.oneOfType([n.exports.string,n.exports.number]),className:n.exports.string,style:n.exports.object,isEditable:n.exports.bool};const Xo=r.div.withConfig({displayName:"styled__ExchangeViewContainer",componentId:"sc-19y2zif-0"})(["height:100%;width:100%;background:red;"]),Ko=r.section.withConfig({displayName:"styled__Wrapper",componentId:"sc-19y2zif-1"})(["border-radius:20px;background:",";margin:9% auto 30px auto;"," flex-direction:column;max-width:","px;width:100%;&.mobile{margin-bottom:30px;}@media only screen and (max-width:632px){border-radius:0;max-width:632px;margin-top:",";margin-left:auto;margin-right:auto;}.w-100{width:100%;}&.connected{&.mobile{margin-bottom:30px;}}.status-wrapper{display:flex;width:88%;justify-content:space-evenly;","}"],g.dark_bg,E.flexItXY("flex-start","center"),e=>e.width||"535",e=>e.isBannerShown?"25px":"0",({theme:e})=>e.isMobile&&V`
      flex-direction: column;
      align-items: center;
    `),Jo=r.div.withConfig({displayName:"styled__MainToMainWarning",componentId:"sc-19y2zif-2"})(["display:flex;justify-content:center;flex-direction:row;align-items:center;line-height:19px;font-size:14px;color:#F3BA2FE5;opacity:0.9;gap:1rem;div > span{font-weight:700;:hover{cursor:pointer;text-decoration:underline;}}div > svg{width:22px;height:22px;}padding-bottom:20px;padding-top:",";"],({theme:e})=>e.isBannerShown?"10px":""),Qo=r.div.withConfig({displayName:"styled__HeadersWrapper",componentId:"sc-19y2zif-3"})(["display:flex;flex-direction:column;gap:5px;width:100%;",";padding:20px 0px 20px 0;border-bottom:1px solid ",";"],E.flexItXY("center","center"),g.form_inp_bg),e1=r.h2.withConfig({displayName:"styled__SecondaryHeader",componentId:"sc-19y2zif-4"})(["display:flex;justify-content:center;align-items:center;padding:0;margin:0;font:normal normal 400 20px Roboto;"]),t1=r.h1.withConfig({displayName:"styled__Header",componentId:"sc-19y2zif-5"})(["display:flex;",";padding:0;margin:0;color:",";font:normal normal 600 25px Roboto;p{font-size:16px;}"],E.flexItXY("center","center"),g.white),n1=r.div.withConfig({displayName:"styled__ErrorInfo",componentId:"sc-19y2zif-6"})(["background:#bb8500;margin-left:auto;margin-right:auto;text-align:center;border-radius:5px;display:flex;padding-left:60px;padding-right:60px;margin-bottom:30px;svg{margin-right:6px;width:40px;}p{font-size:16px;line-height:19px;text-align:left;}&.mobile{padding-left:15px;padding-right:15px;}"]),o1=r.div.withConfig({displayName:"styled__Grid",componentId:"sc-19y2zif-7"})(["width:100%;box-sizing:border-box;display:flex;flex-direction:column;padding:30px 30px 10px 30px;&.disabled{opacity:0.8;pointer-events:none;}"]),a1=r.div.withConfig({displayName:"styled__DestinationWallet",componentId:"sc-19y2zif-8"})(["margin-bottom:30px;&.mobile{margin-bottom:20px;}"]),i1=r.div.withConfig({displayName:"styled__Actions",componentId:"sc-19y2zif-9"})(["display:flex;&.mobile{flex-direction:column;}"]),r1=r.div.withConfig({displayName:"styled__Numbers",componentId:"sc-19y2zif-10"})(["",""],E.flexItXY("center","center")),s1=r.div.withConfig({displayName:"styled__Number",componentId:"sc-19y2zif-11"})(["width:40px;height:40px;"," background-color:",";color:",";border-radius:5px;font:normal normal bold 18px/21px Roboto;"],E.flexItXY("center","center"),g.gray_extra_light,g.white),l1=r.div.withConfig({displayName:"styled__Line",componentId:"sc-19y2zif-12"})(["width:145px;height:1px;background-color:",";margin:0 22px;"],g.gray_light),c1=r.div.withConfig({displayName:"styled__SwapAmount",componentId:"sc-19y2zif-13"})(["position:relative;margin-bottom:30px;width:100%;input.dark{padding:0 63px 0 20px;font-weight:500;font-size:18px;}&.disabled{pointer-events:none;opacity:0.5;}",""],({theme:e})=>e.isMobile&&V`
    margin-bottom: 20px;
    width: 100%;
  `),d1=r.div.withConfig({displayName:"styled__SelectToken",componentId:"sc-19y2zif-14"})(["align-self:end;width:45%;margin-bottom:30px;&.mobile{margin-bottom:20px;width:100%;}"]),p1=r.div.withConfig({displayName:"styled__Action",componentId:"sc-19y2zif-15"})(["margin-top:10px;"]),m1=r.div.withConfig({displayName:"styled__BtnContentWrapper",componentId:"sc-19y2zif-16"})(["width:100%;height:100%;display:flex;justify-content:center;"]),g1=r.span.withConfig({displayName:"styled__BtnContent",componentId:"sc-19y2zif-17"})(["font:normal normal 500 16px/19px Roboto;display:flex;justify-content:center;align-items:center;position:relative;padding:0 30px 0 30px;line-height:25px;&.loading{& > div{margin:unset;margin-right:20px;}@media screen and (max-width:400px){padding-left:40px;}}&.center{& > div{margin:unset;display:flex;align-items:center;text-align:center;}}"]),x1=r.div.withConfig({displayName:"styled__MaxAmountBtn",componentId:"sc-19y2zif-18"})(["text-transform:uppercase;text-decoration:underline;font:normal normal normal 16px/19px Roboto;position:absolute;bottom:12px;right:20px;cursor:pointer;color:",";-webkit-transition:all .35s ease;transition:all .35s ease;&:hover{-webkit-transition:all .35s ease;transition:all .35s ease;color:",";}"],g.gray_light,g.aqua_bg),h1=r.div.withConfig({displayName:"styled__Preview",componentId:"sc-19y2zif-19"})([""," background-color:",";border-radius:5px;min-height:40px;padding:0 20px;margin-bottom:20px;& > svg{margin:0 10px;}"],E.flexItXY("center","center"),g.gray_extra_light),u1=r.div.withConfig({displayName:"styled__WithdrawPreview",componentId:"sc-19y2zif-20"})(["background-color:",";border-radius:5px;min-height:40px;padding:10px 20px;& > div:first-of-type{"," margin-bottom:8px;& > svg{margin:0 10px;}}& > div:last-child{","}"],g.gray_extra_light,E.flexItXY("center","center"),E.flexItXY("space-between","center")),f1=r.label.withConfig({displayName:"styled__FieldLabel",componentId:"sc-19y2zif-21"})(["font:normal normal normal 16px/19px Roboto;text-transform:capitalize;color:",";&.small{font:normal normal normal 14px/16px Roboto;}"],g.gray_light),b1=r.span.withConfig({displayName:"styled__Value",componentId:"sc-19y2zif-22"})(["color:",";font:normal normal bold 18px/21px Roboto;&.small{font:normal normal normal 14px/16px Roboto;}"],g.white),w1=r.div.withConfig({displayName:"styled__TokenIconWrapper",componentId:"sc-19y2zif-23"})(["margin:0 8px;"]),C1=r.div.withConfig({displayName:"styled__RightArrowWrapper",componentId:"sc-19y2zif-24"})(["margin:0 25px;"]),_1=r.div.withConfig({displayName:"styled__Info",componentId:"sc-19y2zif-25"})(["margin-bottom:20px;& > div{"," margin-bottom:20px;}& + button{margin-bottom:10px;}&.mobile{& > div{margin-bottom:10px;}}"],E.flexItXY("space-between")),k1=r.div.withConfig({displayName:"styled__Body",componentId:"sc-19y2zif-26"})(["box-sizing:border-box;height:100%;width:100%;padding:20px;"]),y1=r.div.withConfig({displayName:"styled__WithdrawBodyTop",componentId:"sc-19y2zif-27"})(["padding:20px 20px 10px;border-bottom:1px solid ",";"],g.gray_extra_light),v1=r.div.withConfig({displayName:"styled__WithdrawTokenPreview",componentId:"sc-19y2zif-28"})(["font:normal normal bold 25px/29px Roboto;color:",";padding:0 0 20px;",""],g.aqua_bg,E.flexItXY("center")),L1=r.div.withConfig({displayName:"styled__WithdrawBodyBottom",componentId:"sc-19y2zif-29"})([""]),M1=r.div.withConfig({displayName:"styled__WithdrawSwitchMessage",componentId:"sc-19y2zif-30"})(["font:normal normal normal 16px/19px Roboto;text-align:center;margin-bottom:20px;"]),T1=r.div.withConfig({displayName:"styled__FakeSelect",componentId:"sc-19y2zif-31"})(["width:100%;height:40px;border-radius:5px;border:none;outline:none;box-sizing:border-box;background-color:",";color:",";padding:0 9px 0 20px;cursor:pointer;font:normal normal bold 18px/21px Roboto;&.disabled{cursor:none;pointer-events:none;opacity:0.5;}&.fake-input{border-radius:5px;",";cursor:auto;svg{margin-right:6px;}}&.mobile{border-radius:5px;}",";& > span{text-overflow:ellipsis;overflow:hidden;max-width:120px;white-space:nowrap;font-weight:500;}"],g.form_inp_bg,g.white,E.flexItXY("flex-start","center"),E.flexItXY("space-between","center")),S1=r.div.withConfig({displayName:"styled__ErrorMessage",componentId:"sc-19y2zif-32"})(["position:absolute;left:0;bottom:-20px;font:normal normal normal 12px/14px Roboto;opacity:0.5;color:",";"],g.red),N1=r.div.withConfig({displayName:"styled__ClipBoardContainer",componentId:"sc-19y2zif-33"})(["display:flex;align-items:center;height:40px;padding:0 20px;background:",";border-radius:5px;word-break:break-all;&.mobile{height:75px;}&.copy-destination-address{padding:0 17px;}svg{cursor:pointer;}"],g.gray_extra_light),A1=r.div.withConfig({displayName:"styled__DestinationContainer",componentId:"sc-19y2zif-34"})(["color:",";font-size:16px;line-height:19px;border:none;outline:none;width:100%;box-sizing:border-box;"],g.white),I1=r(Pt).withConfig({displayName:"styled__RangeContainer",componentId:"sc-19y2zif-35"})([""]),B1=r.span.withConfig({displayName:"styled__Separator",componentId:"sc-19y2zif-36"})(["width:100;display:inline-block;position:relative;margin-bottom:30px;&:before{content:'';width:calc(100% + 60px);height:1px;background:",";position:absolute;bottom:0;left:-30px;}"],g.gray_extra_light),R1=r.div.withConfig({displayName:"styled__TransactionWrapper",componentId:"sc-19y2zif-37"})(["position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,27,67,0.9);z-index:1;overflow:auto;display:flex;justify-content:center;align-items:center;padding-bottom:50px;padding-top:50px;"]),$1=r.div.withConfig({displayName:"styled__TransactionContainer",componentId:"sc-19y2zif-38"})(["max-width:535px;width:100%;background:#00132f;border-radius:25px;margin:0px auto;margin-top:",";& > div:first-of-type{height:65px;border-bottom:1px solid ",";display:flex;justify-content:center;align-items:center;& > p{font-size:25px;padding:0 10px;font-weight:bold;margin:unset;text-align:center;}}& > div:last-of-type{& > svg{display:block;margin:30px auto;}ul{list-style:none;padding:unset;li{display:flex;justify-content:space-between;margin-bottom:10px;}}a{display:block;text-align:center;color:",";}rect{stroke:",";}line{stroke:",";}}#add-token-button{min-height:40px;margin-bottom:10px;display:flex;align-items:center;justify-content:center;color:",";}.fee-value{font-size:14px;}&.mobile{width:90%;margin-top:50px;}@media (max-height:570px){margin-top:350px;border-radius:0px;}"],({theme:e})=>e.isBannerShown?"150px":"100px",g.gray_extra_light,g.gray_extra_light4,g.gray_extra_light4,g.gray_extra_light4,g.main_bg),H1=r.div.withConfig({displayName:"styled__TransactionInfo",componentId:"sc-19y2zif-39"})(["display:flex;padding:30px;justify-content:space-between;align-items:center;border-bottom:1px solid ",";&.mobile{padding-bottom:10px;& > span{&:not(:nth-of-type(2)){flex-direction:column;justify-content:center;align-items:center;transform:translateY(-28px);& > p{margin-right:unset;}}&:nth-of-type(2){@media screen and (max-width:340px){&:before{width:30px;left:-40px;}&:after{width:30px;right:-40px;}}}&:first-of-type{svg{width:25px;height:40px;}}&:last-of-type{svg{width:40px;height:40px;margin-left:5px;}}&:nth-of-type(2){img{width:50px;height:50px;}svg{width:25px;height:25px;right:-15px;}}}}&.portout{padding:unset;border-bottom:unset;margin-bottom:50px;}& > span{display:flex;img{height:85px;}p{margin-right:20px;margin-top:18px;color:rgba(255,255,255,0.5);}.network-label span{display:none;}.network-label img{height:",";}&:nth-of-type(2){position:relative;&:before{content:'';width:40px;height:1px;background:rgba(255,255,255,0.5);position:absolute;display:inline-block;left:-65px;top:50%;}&:after{content:'';width:40px;height:1px;background:rgba(255,255,255,0.5);position:absolute;display:inline-block;right:-65px;top:50%;}& > svg{width:40px;height:40px;position:absolute;right:-20px;top:-10px;}}}span:last-child{margin-left:20px;margin-right:15px;}"],g.gray_extra_light,({theme:e})=>e.isMobile?"41px":"57px"),Z1=r.div.withConfig({displayName:"styled__TransactionStat",componentId:"sc-19y2zif-40"})(["padding:30px 30px 0px 30px;display:grid;grid-auto-rows:min-content;grid-template-columns:1fr 1fr 1fr;grid-column-gap:30px;justify-content:center;border-bottom:1px solid ",";font-size:18px;"," & > div{padding-left:5px;margin-bottom:23px;&:nth-child(-n+3){font-weight:700;}&:nth-child(6){font-weight:","}& > div{&:first-of-type{font-size:14px;color:rgba(255,255,255,0.5);font-size:14px;margin-bottom:12px;font-weight:400;}}a{color:"," !important;text-align:left !important;}}",""],g.gray_extra_light,({theme:e})=>e.isMobile&&V`
  grid-template-columns: 1fr 1fr;
  `,e=>e.baseNetworkName==="CARDANO"?"":"700",g.white,({theme:e})=>e.isMobile&&V`

  `),F1=r.a.withConfig({displayName:"styled__CheckTx",componentId:"sc-19y2zif-41"})(["transform:translateY(-15px);text-decoration:underline;color:",";margin-bottom:10px;margin-top:10px;display:flex;align-items:center;font-size:14px;-webkit-transition:all .5s ease;transition:all .5s ease;svg g,svg path{stroke:","}&:not(:disabled):hover{color:",";-webkit-transition:all .35s ease;transition:all .35s ease;svg g,svg path{stroke:","}path{stroke:","}}& > svg{margin-left:5px;g{opacity:1;}path{stroke:","}}"],g.aqua_bg,g.aqua_bg,g.white,g.white,g.white,g.aqua_bg),V1=r.div.withConfig({displayName:"styled__ActionsContainer",componentId:"sc-19y2zif-42"})(["padding:30px;box-sizing:border-box;&.mobile{padding-top:unset;&.success{padding:30px;}}"]),E1=r.div.withConfig({displayName:"styled__ScanContainer",componentId:"sc-19y2zif-43"})(["display:flex;align-items:center;justify-content:space-evenly;flex-wrap:wrap;line-height:28px;& > a{display:flex;align-items:center;svg{margin-left:8px;}}&.mobile{flex-direction:column;& > a:first-of-type{margin-bottom:20px;}}"]),W1=r.div.withConfig({displayName:"styled__MintingContainer",componentId:"sc-19y2zif-44"})(["text-align:center;font-size:25px;font-weight:bold;margin-bottom:unset;&.mobile{& > p{margin-bottom:15px;}}"]),D1=r.a.withConfig({displayName:"styled__CheckStatus",componentId:"sc-19y2zif-45"})(["display:flex;align-items:center;-webkit-transition:all .5s ease;transition:all .5s ease;font-size:14px;&:not(:disabled):hover{color:",";-webkit-transition:all .35s ease;transition:all .35s ease;svg g,svg path{opacity:1;stroke:","}}svg{margin-left:7px;}"],g.white,g.white),z1=r.span.withConfig({displayName:"styled__ConfirmingTokenText",componentId:"sc-19y2zif-46"})(["margin-left:11px;line-height:1.5;@media only screen and (max-width:500px){font-size:13px;}@media only screen and (max-width:376px){font-size:11px;}"]),O1=r.div.withConfig({displayName:"styled__CopyText",componentId:"sc-19y2zif-47"})(["margin-left:25px;margin-right:25px;text-align:center;line-height:30px;margin-bottom:20px;color:",";font-size:12px;@media (max-width:800px){margin-top:0px;}"],({theme:e})=>e.gray_light),P1=r.span.withConfig({displayName:"styled__CopySpan",componentId:"sc-19y2zif-48"})(["text-decoration:underline;margin-right:4px;color:",";&:hover{color:",";cursor:pointer;}"],({theme:e})=>e.gray_light,g.aqua_bg),j1=r.span.withConfig({displayName:"styled__ArrowWrapper",componentId:"sc-19y2zif-49"})(["&:hover{opacity:0.5;transition:all 420ms cubic-bezier(0.165,0.84,0.44,1);}"]),G1=r.div.withConfig({displayName:"styled__CFBcontainer",componentId:"sc-19y2zif-50"})([""]),U1=r.div.withConfig({displayName:"styled__CFBmsg",componentId:"sc-19y2zif-51"})([""]),q1=r.div.attrs(e=>({style:{backgroundImage:`url(${e.background})`}})).withConfig({displayName:"styled__TokenIcon",componentId:"sc-19y2zif-52"})(["margin-left:-10px;margin-right:14px;width:28px;height:28px;border-radius:50%;background-color:",";background-size:28px;background-position:center;background-repeat:no-repeat;"],g.navy_dark),Y1=r(X).withConfig({displayName:"styled__StyledSpinner",componentId:"sc-19y2zif-53"})(["position:relative;border:5px solid ",";&:before{background:",";}"],g.aqua_bg,g.main_bg),X1=r.div.withConfig({displayName:"styled__ConfirmationTextWrapper",componentId:"sc-19y2zif-54"})(["padding-left:15px;"]),K1=r.div.withConfig({displayName:"styled__FeesBox",componentId:"sc-19y2zif-55"})(["display:flex;width:100%;justify-content:center;align-items:center;border-bottom:1px solid  ",";"," &:nth-child(2n){margin-right:40px;font-size:14px;}.fee-field{display:flex;width:100%;justify-content:center;align-items:center;white-space:nowrap;"," &:first-of-type{padding-left:2rem;}.fee-label{font-size:14px;line-height:22px;margin-right:13px;color:",";white-space:nowrap;margin-bottom:13px;}}"],({theme:e})=>e.gray_extra_light,({theme:e})=>e.isMobile&&V`
    padding: 10px 35px;
    flex-direction: column;
    align-items: center;
  `,({theme:e})=>!e.isMobile&&V`
      &:not(:last-of-type) {
        padding-right: 20px;
      }
    `,({theme:e})=>e.gray_light),J1=r.div.withConfig({displayName:"styled__TokenSelectContainer",componentId:"sc-19y2zif-56"})(["display:flex;justify-content:space-between;& > div{width:220px;}",";"],({theme:e})=>e.isMobile&&V`
    flex-direction: column;
    & > div {
      width:100%;
     }
  `),Q1=r.div.withConfig({displayName:"styled__TokenImageAndNameWrapper",componentId:"sc-19y2zif-57"})(["display:flex;align-items:center;"]),v={CopyText:O1,CopySpan:P1,CheckStatus:D1,MintingContainer:W1,ScanContainer:E1,ExchangeViewContainer:Xo,ActionsContainer:V1,TransactionStat:Z1,TransactionInfo:H1,CheckTx:F1,TransactionWrapper:R1,TransactionContainer:$1,Separator:B1,ErrorInfo:n1,RangeContainer:I1,DestinationContainer:A1,ClipBoardContainer:N1,ErrorMessage:S1,FakeSelect:T1,WithdrawSwitchMessage:M1,WithdrawBodyBottom:L1,WithdrawTokenPreview:v1,WithdrawBodyTop:y1,Body:k1,Info:_1,Value:b1,Wrapper:Ko,Header:t1,MainToMainWarning:Jo,SecondaryHeader:e1,HeadersWrapper:Qo,Grid:o1,SwapAmount:c1,SelectToken:d1,Action:p1,BtnContent:g1,MaxAmountBtn:x1,DestinationWallet:a1,Actions:i1,Numbers:r1,Number:s1,Line:l1,Preview:h1,FieldLabel:f1,TokenIconWrapper:w1,RightArrowWrapper:C1,WithdrawPreview:u1,ConfirmingTokenText:z1,ArrowWrapper:j1,TokenIcon:q1,StyledSpinner:Y1,CFBcontainer:G1,CFBmsg:U1,BtnContentWrapper:m1,ConfirmationTextWrapper:X1,TokenSelectContainer:J1,FeesBox:K1,TokenImageAndNameWrapper:Q1},ea=r.div.withConfig({displayName:"styled__IconWrapper",componentId:"sc-17pcany-0"})(["cursor:pointer;margin:27px 35px 7px;grid-area:icon;"," align-items:center;transition:all 0.1s ease-in;background:",";box-shadow:0 0 25px rgba(47,246,211,0.5);border-radius:50%;width:42px;height:42px;&:hover{transform:scale(1.1);}&.rotateForward{svg{transition:all 0.5s ease-in;-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg);}}&.rotateBackward{svg{transition:all 0.5s ease-in;-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}}"," &.port{background:transparent;box-shadow:unset;}&.static{cursor:default;&:hover{transform:scale(1);}}"],E.flexItXY("center","flex-end"),e=>e.theme.aqua_bg,e=>e.theme.isMobile?V`
    margin-left: 20px;
    margin-right: 20px;
    svg {
      margin-bottom: unset;
    }
  `:""),ta={IconWrapper:ea},na=e=>i.exports.createElement("svg",{width:10,height:16,viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.919832 13.7491C0.509422 14.1187 0.476314 14.751 0.845884 15.1614C1.21545 15.5718 1.84775 15.6049 2.25816 15.2354L9.07734 9.09475C9.34455 8.85413 9.45182 8.50214 9.39215 8.17253C9.45188 7.84288 9.34461 7.49082 9.07737 7.25017L2.25819 1.10957C1.84778 0.740004 1.21548 0.773111 0.845908 1.18352C0.476338 1.59393 0.509446 2.22623 0.919856 2.5958L7.11277 8.17245L0.919832 13.7491Z",fill:"#00132F"})),vn=({onClick:e})=>{const[s,o]=i.exports.useState(null),m=()=>{o(d=>!d),e()};return t(ta.IconWrapper,{onClick:m,className:W({rotateForward:s,rotateBackward:s===!1}),children:t(na,{})})};vn.propTypes={onClick:n.exports.func.isRequired};const oa=r.div.withConfig({displayName:"styled__Container",componentId:"sc-1mupnsh-0"})(["display:flex;"]),aa=r.div.withConfig({displayName:"styled__SelectWrapper",componentId:"sc-1mupnsh-1"})(["margin-bottom:30px;display:flex;flex-direction:column;flex:1;"," &.disabled{pointer-events:none;cursor:none;opacity:0.5;}@keyframes slideDown{0%{transform:scaleY(0)}80%{transform:scaleY(1.1)}100%{transform:scaleY(1)}}.custom_select__menu{max-height:0px;animation:slideDown 300ms ease-in-out;svg{margin-right:6px;}}&.mobile{label{margin-bottom:10px;}& > div:last-child{width:100%;}.custom_select__indicator{display:none;}.custom_select__value-container{display:flex;justify-content:center;}.custom_select__menu{width:","}.custom_select__single-value{span{display:none;}svg{margin-right:unset;}}}cursor:pointer;.custom_select__single-value,s .custom_select__option{"," svg{margin-right:6px;}}"],e=>e.theme.isMobile&&V`
  .custom_select__menu {  
  ${s=>s.id==="from"?V`
    left: 0;
  `:V`
    right: 0;
  `}

  }
  `,e=>e.menuWidth?`${e.menuWidth-60}px`:`${230}px`,E.flexItXY("flex-start","center")),ia={control:(e,s)=>({...e,backgroundColor:g.form_inp_bg,border:"none",boxShadow:"none",borderBottomLeftRadius:s.menuIsOpen?"0px":void 0,borderBottomRightRadius:s.menuIsOpen?"0px":void 0,minHeight:40}),valueContainer:e=>({...e,font:"normal normal bold 19px/22px Roboto"}),singleValue:e=>({...e,color:g.white}),placeholder:e=>({...e,color:g.white}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:e=>({...e,color:g.white,cursor:"pointer","&:hover":{color:g.white,opacity:"0.5",transition:"all .35s ease"}}),menu:e=>({...e,margin:0,zIndex:2}),menuList:(e,s)=>{const o=s.options.length<8?s.options.length*38.5:"none";return{...e,minHeight:o,"::-webkit-scrollbar":{width:"7px",height:"0px"},"::-webkit-scrollbar-track":{background:g.gray_extra_light,borderBottomRightRadius:"10px"},"::-webkit-scrollbar-thumb":{background:g.gray_extra_light7,borderBottomRightRadius:"10px"},"::-webkit-scrollbar-thumb:hover":{background:g.gray_light},backgroundColor:g.form_inp_bg,borderRadius:"0 0 5px 10px"}},option:(e,s)=>({...e,font:"normal normal bold 19px/22px Roboto",backgroundColor:s.isFocused?g.gray_extra_light:s.isSelected?g.dark_bg:g.form_inp_bg,color:g.white,opacity:s.isDisabled?.3:1,display:"flex",alignItem:"center","&:last-child":{borderTop:s.data.blockchainType==="evm"?"":"1px solid rgba(255, 255, 255, 0.2)",marginBottom:"-23px"},"&:first-of-type":{marginTop:"-4px"},"&:hover":{PointerEvent:"all"}})},Ln={Container:oa,SelectWrapper:aa},Et=i.exports.forwardRef((e,s)=>{const{id:o,value:m,onChange:d,label:l,options:a,isMobile:w}=e,p=f=>t("div",{id:`${o}-${f.name}`,children:f.label});return x(Ln.SelectWrapper,{id:o,className:W({mobile:w,inverseMenu:!0}),menuWidth:s.current?.clientWidth&&Number(s.current.clientWidth),children:[t(Wt,{id:o,label:l}),t(Eo,{value:m,options:a,styles:ia,classNamePrefix:"custom_select",className:"dark",id:o,placeholder:t("span",{children:"\u2014"}),onChange:d,menuPlacement:"auto",isSearchable:!1,isOptionDisabled:f=>f?.disabled,getOptionLabel:p})]})});Et.propTypes={options:n.exports.array,value:n.exports.object,label:n.exports.object,onChange:n.exports.func,id:n.exports.string,isMobile:n.exports.bool};const ra=()=>x(O,{children:["This token is not",t("br",{}),"supported on this chain"]}),Ee=(e,s)=>e.map(o=>{if(s(o)){const m={...o,disabled:!0};return m?.disabled&&(m.label=t(We,{displayedValue:o.label,tooltipText:ra()})),m}return o}),jt=i.exports.forwardRef((e,s)=>{const{setDestinationNetwork:o,setBaseNetwork:m,swapNetworks:d}=e,l=c(N.networks),a=c(L.selectedToken),w=c(L.pendingRedeem),p=c(N.isMobile),f=c(L.baseNetwork),C=c(L.destinationNetwork),_=c($.isTokenStable),k=c(N.stablesData)?.stables_networks,h=c(N.networksById),y=c(N.networksByName),S=c($.originNetworkId),R=i.exports.useMemo(()=>({...f,label:Yt(f)}),[f]),A=i.exports.useMemo(()=>({...C,label:Yt(C)}),[C]),b=i.exports.useMemo(()=>{let M;if(a.is_native_usdc)if(a?.usdc_wrapped_target_networks){const T=[...a.usdc_native_target_networks,...a.usdc_wrapped_target_networks];M=Ee(l,F=>!T.includes(F.id))}else M=Ee(l,T=>!a.usdc_native_target_networks.includes(T.id));else if(a.is_wrapped_usdc)M=Ee(l,T=>!a.usdc_wrapped_target_networks.includes(T.id));else if(a?.web3_address&&!a?.target_networks?.includes(y.MELD.id)&&S!==y.MELD.id){if(M=Ee(l,T=>T.id===y.MELD.id&&T.id!==f?.id),C.id===y.MELD.id){const T=M.find(F=>F.id!==f?.id);o(T)}}else if(a?.target_networks?.length>0){const T=a?.target_networks.map(F=>h[F].id);M=Ee(l,F=>!T.includes(F.id))}else M=[...l];return M.filter(T=>T.id!==f?.id)},[a,l,f,h,y.MELD.id,C.id,o,S]),I=i.exports.useMemo(()=>_?Ee(l,M=>!k[M.id]?.wrapper_contract):l,[l,_,k]);return x(Ln.Container,{children:[t(Et,{id:"from",isMobile:p,label:u("modal.from"),value:R,options:I,onChange:m,ref:s}),t(vn,{onClick:d}),t(Et,{id:"to",isMobile:p,label:u("modal.to"),value:A,options:b,onChange:o,isDisabled:w,ref:s})]})});jt.propTypes={setBaseNetwork:n.exports.func,setDestinationNetwork:n.exports.func,swapNetworks:n.exports.func};const sa=r.div.withConfig({displayName:"styled__RecipientInputWrapper",componentId:"sc-1tm9c41-0"})(["grid-area:recipient;margin-bottom:30px;.recipient-info{position:absolute;top:12px;right:11px;}svg{position:relative;top:auto;left:auto;path{fill:",";&:hover{fill :",";}}}}.warning-text{svg{width:17px;height:15px;}p{font-size:14px;}}"],e=>e.isErrorMessageShown?"#FF6767":"",({theme:e})=>e.yellow),la=r.span.withConfig({displayName:"styled__ConnectRecipientWallet",componentId:"sc-1tm9c41-1"})(["margin-bottom:10px;-webkit-transition:all .5s ease;transition:all .5s ease;-webkit-transform:translate(0,0);transform:translate(0,0);color:",";opacity:0.7;font-size:14px;text-decoration:underline;cursor:pointer;&:not(:disabled):hover{color:",";-webkit-transition:all .35s ease;transition:all .35s ease;}"],({theme:e})=>e.aqua_bg,({theme:e})=>e.white),ca=r.div.withConfig({displayName:"styled__RecipientLabel",componentId:"sc-1tm9c41-2"})([""]),da=r.div.withConfig({displayName:"styled__RecipientLabelWrapper",componentId:"sc-1tm9c41-3"})(["  display:flex;justify-content:space-between;align-items:center;"]),pa=r.div.withConfig({displayName:"styled__RecipientMobile",componentId:"sc-1tm9c41-4"})(["margin-top:10px;font-size:14px;color:",";opacity:0.5;"],({theme:e})=>e.white),Zt={RecipientInputWrapper:sa,ConnectRecipientWallet:la,RecipientLabel:ca,RecipientLabelWrapper:da,RecipientMobile:pa},ma=()=>"Make sure the address is correct. Tokens sent to the wrong address will be lost forever.",Mn=({addressIsValid:e,isConfirmModalOpening:s,isLengthValidated:o,validCharacters:m,ethTransactionFee:d})=>{const l=ke(),a=i.exports.useRef(),w=c(L.destinationNetwork),p=c(D.recipientWalletAddress),f=c(N.isMobile),C=c(L.selectedToken),_=({currentTarget:R={}})=>l(ln(R.value));i.exports.useEffect(()=>{a.current=p},[p]);const k=a.current,h=i.exports.useMemo(()=>p!==k,[p,k]),y=i.exports.useMemo(()=>o?d?.errorMsg?d?.errorMsg:"Invalid wallet address":`Ensure inputted address length is ${m} characters`,[o,m,d?.errorMsg,e]),S=i.exports.useMemo(()=>!e&&!h&&!s&&p!==""||d?.errorMsg!=="",[e,h,s,p,d?.errorMsg,C.web3_address]);return x(Zt.RecipientInputWrapper,{isErrorMessageShown:S,children:[t(Zt.RecipientLabelWrapper,{children:t(Wt,{id:"recipient",label:"Recipient"})}),t(Fn,{className:"recipient-input",placeholder:f?"Paste here":`Paste the ${w?.label} wallet address to receive the tokens`,value:p,onChange:_,Icon:!1,RightIcon:x("div",{className:"recipient-info",children:["  ",t(We,{tooltipText:t(ma,{})})," "]})}),f&&!S&&x(Zt.RecipientMobile,{children:["Paste the ",w?.label," wallet address to receive the tokens here "]}),S&&t("div",{style:{marginBottom:-70},children:t(ht,{classes:"warning-text",children:t("p",{children:y})})})]})};Mn.propTypes={addressIsValid:n.exports.bool,isConfirmModalOpening:n.exports.bool,isLengthValidated:n.exports.bool,validCharacters:n.exports.number};const ga=r.div`

.progress-icon, .progress-text{
  opacity: 0.5;
 


  &.done{
    opacity: 1;
    transition-delay: 8s;
  }
}

.progress-text{
  width: 15%;
  @media (max-width: 480px) {
    width: 18%;
  }

  @media (max-width: 395px) {
    width: 22%;
  }
  @media (max-width: 370px) {
    width: 30%;
  }
text-align: center;


}

`,xa=r.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0 20px 0 20px;
`,ha=r.div`
display: flex;
flex-direction: row;
 justify-content: space-between;
margin: 0 0px 30px 0px;
`,Ft={ProgressBarOuterWrapper:ga,ProgressBarIconWrapper:xa,ProgressBarTextWrapper:ha},ua=e=>i.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:22,height:23,viewBox:"0 0 22 23",fill:"none",...e},i.exports.createElement("g",{filter:"url(#filter0_d_17300_61134)"},i.exports.createElement("circle",{cx:11,cy:11.25,r:5,fill:"#00132F"}),i.exports.createElement("circle",{cx:11,cy:11.25,r:4,stroke:"white",strokeWidth:2})),i.exports.createElement("defs",null,i.exports.createElement("filter",{id:"filter0_d_17300_61134",x:0,y:.25,width:22,height:22,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i.exports.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.exports.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.exports.createElement("feOffset",null),i.exports.createElement("feGaussianBlur",{stdDeviation:3}),i.exports.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),i.exports.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"}),i.exports.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_17300_61134"}),i.exports.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_17300_61134",result:"shape"})))),fa=r.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 25px 0 25px;

  ${({theme:e})=>e.isMobile&&V`
    font-size: 12px;
  `};

  .circle {
    fill: ${({theme:e})=>e.main_bg};
    &.done {
      fill: ${({theme:e})=>e.white};
      transition-delay: 8s;
    } 

    &.current {
      transform: scale(1.2);  
      animation: grow 3s infinite linear;
    }

    @keyframes grow {
      0% { transform: scale(1); }
      50% { transform: scale(1.2);}
      100% { transform: scale(1); }
    }
  }
`,ba=r.div`
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  margin:10px -6px 0 -6px;
`,wa=r.div`
  &.active {
    height: 2px;
    width: ${e=>e.barCompleted}%;
    background-color: white; 
    transition: width 6s ease-in-out;
  }
`,Ca=r.div`
  display: flex;
  flex-direction: row;

 
 
  flex: 1;
  // remove the last progress line
  &:last-child {
    flex: 0;
    & > div:last-child {
      display: none;
    }
  }
`,ct={ProgressBarWrapper:fa,ProgressBarLine:ba,ProgessBarLineAndCircleWrapper:Ca,ProgressBarLineInner:wa},Tn=({progressStepsLength:e,progressBarStep:s,progressBarPercentage:o})=>t(ct.ProgressBarWrapper,{children:Array.from(Array(e)).map((m,d)=>x(ct.ProgessBarLineAndCircleWrapper,{children:[t(ua,{className:W("circle",{done:d<=s,current:d===s})}),t(ct.ProgressBarLine,{className:"line",barlength:e,children:t(ct.ProgressBarLineInner,{className:W({active:d<=s}),barCompleted:d<s?100:o})})]},d))});Tn.propTypes={progressStepsLength:n.exports.number.isRequired,progressBarStep:n.exports.number.isRequired,progressBarPercentage:n.exports.number.isRequired};const Sn=({progressSteps:e,progressBarStep:s,progressBarPercentage:o})=>t(O,{children:e&&x(Ft.ProgressBarOuterWrapper,{children:[t(Ft.ProgressBarIconWrapper,{children:e.map(({icon:m},d)=>t("div",{className:W("progress-icon",{done:d<=s}),children:m},d))}),t(Tn,{progressStepsLength:e?.length,progressBarStep:s,progressBarPercentage:o}),t(Ft.ProgressBarTextWrapper,{children:e.map(({status:m},d)=>t("div",{className:W("progress-text",{done:d<=s}),children:m},d))})]})});Sn.propTypes={progressBarStep:n.exports.number,progressSteps:n.exports.array,progressBarPercentage:n.exports.number};const _a=e=>i.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",...e},i.exports.createElement("path",{d:"M17.8768 8.5542H7C4.79086 8.5542 3 10.3451 3 12.5542V24.999C3 27.2081 4.79086 28.999 7 28.999H19.4025C21.6116 28.999 23.4025 27.2081 23.4025 24.999V16.1188",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M25.5006 7.46053L26.2212 6.76726C26.0301 6.58339 25.7709 6.48009 25.5006 6.48009C25.2302 6.48009 24.971 6.58339 24.7799 6.76726L25.5006 7.46053ZM29.0005 10.8274L29.7211 11.5207C29.9123 11.3368 30.0196 11.0874 30.0196 10.8274C30.0196 10.5674 29.9123 10.318 29.7211 10.1341L29.0005 10.8274ZM14.046 18.4797L13.3254 19.1729C13.5165 19.3568 13.7757 19.4601 14.046 19.4601C14.3163 19.4601 14.5756 19.3568 14.7667 19.1729L14.046 18.4797ZM9.40924 14.0191L10.1299 13.3258C9.93878 13.142 9.67955 13.0387 9.40924 13.0387C9.13894 13.0387 8.87971 13.142 8.68857 13.3258L9.40924 14.0191ZM5.95352 17.3435L5.23285 16.6502C5.04171 16.8341 4.93433 17.0835 4.93433 17.3435C4.93433 17.6035 5.04171 17.8529 5.23285 18.0368L5.95352 17.3435ZM10.5903 21.804L11.311 22.4973C11.5021 22.3134 11.6095 22.0641 11.6095 21.804C11.6095 21.544 11.5021 21.2946 11.311 21.1108L10.5903 21.804ZM10.588 21.8063L9.8673 21.113C9.67616 21.2969 9.56879 21.5462 9.56879 21.8063C9.56879 22.0663 9.67616 22.3157 9.8673 22.4996L10.588 21.8063ZM14.0879 25.1731L13.3672 25.8664C13.7652 26.2493 14.4105 26.2493 14.8085 25.8664L14.0879 25.1731ZM24.7799 8.15381L28.2798 11.5207L29.7211 10.1341L26.2212 6.76726L24.7799 8.15381ZM14.7667 19.1729L26.2212 8.15381L24.7799 6.76726L13.3254 17.7864L14.7667 19.1729ZM8.68857 14.7124L13.3254 19.1729L14.7667 17.7864L10.1299 13.3258L8.68857 14.7124ZM6.67419 18.0368L10.1299 14.7124L8.68857 13.3258L5.23285 16.6502L6.67419 18.0368ZM11.311 21.1108L6.67419 16.6502L5.23285 18.0368L9.86963 22.4973L11.311 21.1108ZM11.3086 22.4996L11.311 22.4973L9.86963 21.1108L9.8673 21.113L11.3086 22.4996ZM14.8085 24.4799L11.3086 21.113L9.8673 22.4996L13.3672 25.8664L14.8085 24.4799ZM28.2798 10.1341L13.3672 24.4799L14.8085 25.8664L29.7211 11.5207L28.2798 10.1341Z",fill:"#2FF6D3"})),ka=e=>i.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",...e},i.exports.createElement("path",{d:"M15.069 6.93102C15.069 5.89984 14.8738 4.91274 14.5175 4.0018C18.7195 4.9209 20.9979 9.37184 20.4661 13.5438L20.4661 13.5439C20.2605 15.1581 19.7608 16.3695 19.0615 17.3104L19.0615 17.3103L19.0579 17.3152C18.4615 18.1278 19.3224 19.2827 20.2996 18.8201L20.2997 18.8201C20.5114 18.7199 20.7073 18.6121 20.8905 18.4991L20.8907 18.4989C21.8099 17.9314 22.4787 17.1885 23.2024 16.3846C23.218 16.3673 23.2336 16.35 23.2492 16.3327C23.3409 16.2308 23.4342 16.1273 23.5305 16.0211C23.5312 16.0207 23.533 16.0196 23.536 16.0185C23.5426 16.0161 23.5514 16.0147 23.561 16.0159L23.5614 16.0159C23.5683 16.0167 23.5732 16.0185 23.576 16.0199C24.168 17.136 24.5 18.3944 24.5 19.7246C24.5 24.2486 20.6301 28 15.75 28C10.8699 28 7 24.2486 7 19.7246C7 16.8914 8.50852 14.3732 10.8378 12.8757L10.3352 12.094L10.8378 12.8757C10.9567 12.7993 11.0747 12.7088 11.1862 12.602L11.1862 12.6021C11.1862 12.6021 11.1862 12.6021 11.1862 12.602C12.35 11.8571 13.3189 11.1692 13.9971 10.3053L13.9971 10.3053C14.6786 9.4373 15.069 8.38895 15.069 6.93102Z",stroke:"#2FF6D3",strokeWidth:2})),ya=e=>i.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",...e},i.exports.createElement("rect",{x:8,y:14.4497,width:15.3818,height:13.5522,rx:3,stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M11.3605 14.6256L10.0233 10.4574C9.2184 7.94845 10.5998 5.26206 13.1088 4.45718V4.45718C15.6177 3.6523 18.3041 5.03371 19.109 7.54266L19.3283 8.22645",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("mask",{id:"path-3-outside-1_15786_51821",maskUnits:"userSpaceOnUse",x:12.3184,y:16.938,width:7,height:9,fill:"black"},i.exports.createElement("rect",{fill:"white",x:12.3184,y:16.938,width:7,height:9}),i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.1482 22.3114C16.1482 21.8876 16.448 21.5303 16.7262 21.2106C16.9359 20.9696 17.0629 20.6548 17.0629 20.3102C17.0629 19.5524 16.4485 18.938 15.6906 18.938C14.9327 18.938 14.3184 19.5524 14.3184 20.3102C14.3184 20.6548 14.4454 20.9698 14.6552 21.2108C14.9334 21.5305 15.2334 21.8879 15.2334 22.3118V23.0532C15.2334 23.3058 15.4382 23.5106 15.6908 23.5106C15.9434 23.5106 16.1482 23.3058 16.1482 23.0532V22.3114Z"})),i.exports.createElement("path",{d:"M15.0629 20.3102C15.0629 20.1541 15.1225 20.0069 15.2174 19.8977L18.2349 22.5235C18.7493 21.9324 19.0629 21.1554 19.0629 20.3102H15.0629ZM15.6906 20.938C15.3439 20.938 15.0629 20.6569 15.0629 20.3102H19.0629C19.0629 18.4478 17.5531 16.938 15.6906 16.938V20.938ZM16.3184 20.3102C16.3184 20.6569 16.0373 20.938 15.6906 20.938V16.938C13.8282 16.938 12.3184 18.4478 12.3184 20.3102H16.3184ZM16.1637 19.8977C16.2587 20.0068 16.3184 20.1541 16.3184 20.3102H12.3184C12.3184 21.1556 12.632 21.9327 13.1466 22.5239L16.1637 19.8977ZM17.2334 23.0532V22.3118H13.2334V23.0532H17.2334ZM14.1482 22.3114V23.0532H18.1482V22.3114H14.1482ZM13.2334 23.0532C13.2334 24.4104 14.3336 25.5106 15.6908 25.5106V21.5106C16.5428 21.5106 17.2334 22.2013 17.2334 23.0532H13.2334ZM13.1466 22.5239C13.215 22.6025 13.2586 22.6537 13.2939 22.6983C13.328 22.7415 13.3376 22.7578 13.3353 22.7539C13.3329 22.75 13.2334 22.5861 13.2334 22.3118H17.2334C17.2334 21.6136 16.9839 21.059 16.762 20.6905C16.5499 20.3383 16.2935 20.0467 16.1637 19.8977L13.1466 22.5239ZM15.6908 25.5106C17.048 25.5106 18.1482 24.4104 18.1482 23.0532H14.1482C14.1482 22.2013 14.8389 21.5106 15.6908 21.5106V25.5106ZM15.2174 19.8977C15.0877 20.0468 14.8314 20.3383 14.6194 20.6905C14.3976 21.059 14.1482 21.6134 14.1482 22.3114H18.1482C18.1482 22.5856 18.0488 22.7495 18.0464 22.7535C18.044 22.7574 18.0536 22.7411 18.0878 22.6978C18.123 22.6533 18.1665 22.6021 18.2349 22.5235L15.2174 19.8977Z",fill:"#2FF6D3",mask:"url(#path-3-outside-1_15786_51821)"})),va=e=>i.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",...e},i.exports.createElement("rect",{x:4,y:17,width:14,height:6,rx:2,stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("circle",{cx:14,cy:20,r:1,fill:"#2FF6D3"}),i.exports.createElement("path",{d:"M5.68994 17.3355L5.68994 13.7148C5.68994 11.5057 7.4808 9.71484 9.68994 9.71484H11.5175",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M22.7243 9.26953H25.0001C27.2092 9.26953 29.0001 11.0604 29.0001 13.2695V24.0969C29.0001 26.3061 27.2092 28.097 25.0001 28.097H9.2503C6.84612 28.097 5.08863 25.8278 5.68994 23.5V23.5",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M10 13L24 13",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M13.1538 12C12.3846 10.8571 12 10.0952 12 8.72906C12 5.57635 14.8125 4 16.6875 4C18.9231 4 22 4.94581 22 9.04434C22 10.4762 21.6538 11 21 12",stroke:"#2FF6D3",strokeWidth:2,strokeLinecap:"square"})),La=e=>i.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",...e},i.exports.createElement("rect",{x:4,y:4,width:24,height:24,rx:3,stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("rect",{x:7,y:15,width:11,height:8,fill:"#2FF6D3"}),i.exports.createElement("path",{d:"M23 16L25 16",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M20 16L22 16",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M23 19L25 19",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M20 19L22 19",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("path",{d:"M12 19L16 19",stroke:"#00132F",strokeWidth:2}),i.exports.createElement("path",{d:"M28 10H4",stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("circle",{cx:15,cy:19,r:2,fill:"#00132F"})),Ma=e=>i.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",...e},i.exports.createElement("circle",{cx:20.0623,cy:11.9375,r:5.41693,transform:"rotate(-45 20.0623 11.9375)",stroke:"#2FF6D3",strokeWidth:2,strokeLinecap:"round",strokeDasharray:"4 2"}),i.exports.createElement("circle",{cx:19.8789,cy:12.1213,r:9.21212,stroke:"#2FF6D3",strokeWidth:2,strokeLinecap:"round",strokeDasharray:"4 3"}),i.exports.createElement("circle",{cx:12.1212,cy:19.879,r:12.1212,fill:"#00132F"}),i.exports.createElement("circle",{cx:12.1211,cy:19.8787,r:5.30303,stroke:"#2FF6D3",strokeWidth:2}),i.exports.createElement("circle",{cx:12.1213,cy:19.8786,r:9.18182,stroke:"#2FF6D3",strokeWidth:2})),Ta=e=>i.exports.createElement("svg",{width:34,height:32,viewBox:"0 0 34 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.exports.createElement("mask",{id:"path-1-inside-1_33171_185121",fill:"white"},i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.3322 21.5184V11.1178C7.74017 12.4295 7.06202 13.6862 6.32339 14.8074C6.21729 14.9684 6.10947 15.1274 6 15.2839L6 21.5184H8.3322ZM10.3322 21.5184H13V12.3203C12.019 11.6513 11.1165 10.7122 10.3322 9.52513V21.5184ZM15 21.5184H19V13.1049C18.2985 13.369 17.5705 13.5117 16.8278 13.5225C16.2067 13.5314 15.5951 13.4479 15 13.2757V21.5184ZM21 21.5184H23.1467V9.67598C22.5028 10.5935 21.7798 11.3648 20.9996 11.9702C20.9999 11.9801 21 11.99 21 12V21.5184ZM25.1467 21.5184H28V16.1634C27.5908 15.7175 27.2169 15.2335 26.8763 14.7324C26.2055 13.7457 25.6328 12.6482 25.1467 11.5461V21.5184ZM30 21.5184V17.7941C30.5602 18.112 31.1661 18.3497 31.8203 18.4805C32.3619 18.5888 32.8887 18.2376 32.997 17.6961C33.1053 17.1545 32.7541 16.6277 32.2126 16.5194C30.8341 16.2437 29.6071 15.1921 28.5303 13.608C27.4637 12.0391 26.6402 10.086 26.0262 8.27986C25.804 7.62625 25.3193 7.22196 24.7943 7.01573C24.6198 6.86729 24.3937 6.77771 24.1467 6.77771C24.0149 6.77771 23.8891 6.8032 23.7738 6.84952C23.0918 6.88392 22.3456 7.19813 21.912 7.91092C20.4068 10.3857 18.5177 11.4979 16.7989 11.5227C15.0969 11.5472 13.2103 10.5088 11.6853 7.91635C11.2079 7.10471 10.3217 6.8099 9.58653 6.81034C9.50532 6.78905 9.42009 6.77771 9.3322 6.77771C9.1403 6.77771 8.96102 6.83177 8.80876 6.92548C8.20783 7.10574 7.60938 7.51238 7.34317 8.2444C6.62931 10.2074 5.69716 12.1225 4.65325 13.7071C3.59787 15.309 2.48067 16.493 1.42786 17.0947C0.948343 17.3687 0.781746 17.9795 1.05576 18.459C1.32977 18.9386 1.94062 19.1051 2.42014 18.8311C2.96507 18.5197 3.49304 18.1154 4 17.6404L4 21.5184H1.92485C1.37257 21.5184 0.924855 21.9661 0.924855 22.5184C0.924855 23.0707 1.37257 23.5184 1.92485 23.5184H8.40585V28.0739C8.40585 28.5853 8.8204 28.9999 9.33177 28.9999C9.84315 28.9999 10.2577 28.5853 10.2577 28.0739V23.5184H23.2204V28.0739C23.2204 28.5853 23.6349 28.9999 24.1463 28.9999C24.6577 28.9999 25.0722 28.5853 25.0722 28.0739V23.5184H31.5543C32.1066 23.5184 32.5543 23.0707 32.5543 22.5184C32.5543 21.9661 32.1066 21.5184 31.5543 21.5184H30Z"})),i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.3322 21.5184V11.1178C7.74017 12.4295 7.06202 13.6862 6.32339 14.8074C6.21729 14.9684 6.10947 15.1274 6 15.2839L6 21.5184H8.3322ZM10.3322 21.5184H13V12.3203C12.019 11.6513 11.1165 10.7122 10.3322 9.52513V21.5184ZM15 21.5184H19V13.1049C18.2985 13.369 17.5705 13.5117 16.8278 13.5225C16.2067 13.5314 15.5951 13.4479 15 13.2757V21.5184ZM21 21.5184H23.1467V9.67598C22.5028 10.5935 21.7798 11.3648 20.9996 11.9702C20.9999 11.9801 21 11.99 21 12V21.5184ZM25.1467 21.5184H28V16.1634C27.5908 15.7175 27.2169 15.2335 26.8763 14.7324C26.2055 13.7457 25.6328 12.6482 25.1467 11.5461V21.5184ZM30 21.5184V17.7941C30.5602 18.112 31.1661 18.3497 31.8203 18.4805C32.3619 18.5888 32.8887 18.2376 32.997 17.6961C33.1053 17.1545 32.7541 16.6277 32.2126 16.5194C30.8341 16.2437 29.6071 15.1921 28.5303 13.608C27.4637 12.0391 26.6402 10.086 26.0262 8.27986C25.804 7.62625 25.3193 7.22196 24.7943 7.01573C24.6198 6.86729 24.3937 6.77771 24.1467 6.77771C24.0149 6.77771 23.8891 6.8032 23.7738 6.84952C23.0918 6.88392 22.3456 7.19813 21.912 7.91092C20.4068 10.3857 18.5177 11.4979 16.7989 11.5227C15.0969 11.5472 13.2103 10.5088 11.6853 7.91635C11.2079 7.10471 10.3217 6.8099 9.58653 6.81034C9.50532 6.78905 9.42009 6.77771 9.3322 6.77771C9.1403 6.77771 8.96102 6.83177 8.80876 6.92548C8.20783 7.10574 7.60938 7.51238 7.34317 8.2444C6.62931 10.2074 5.69716 12.1225 4.65325 13.7071C3.59787 15.309 2.48067 16.493 1.42786 17.0947C0.948343 17.3687 0.781746 17.9795 1.05576 18.459C1.32977 18.9386 1.94062 19.1051 2.42014 18.8311C2.96507 18.5197 3.49304 18.1154 4 17.6404L4 21.5184H1.92485C1.37257 21.5184 0.924855 21.9661 0.924855 22.5184C0.924855 23.0707 1.37257 23.5184 1.92485 23.5184H8.40585V28.0739C8.40585 28.5853 8.8204 28.9999 9.33177 28.9999C9.84315 28.9999 10.2577 28.5853 10.2577 28.0739V23.5184H23.2204V28.0739C23.2204 28.5853 23.6349 28.9999 24.1463 28.9999C24.6577 28.9999 25.0722 28.5853 25.0722 28.0739V23.5184H31.5543C32.1066 23.5184 32.5543 23.0707 32.5543 22.5184C32.5543 21.9661 32.1066 21.5184 31.5543 21.5184H30Z",fill:"#001B43"}),i.exports.createElement("path",{d:"M8.3322 11.1178H10.3322L6.50929 10.295L8.3322 11.1178ZM8.3322 21.5184V23.5184H10.3322V21.5184H8.3322ZM6.32339 14.8074L7.99353 15.9076L7.99353 15.9076L6.32339 14.8074ZM6 15.2839L4.36099 14.1378L4 14.654V15.2839H6ZM6 21.5184H4V23.5184H6V21.5184ZM13 21.5184V23.5184H15V21.5184H13ZM10.3322 21.5184H8.3322V23.5184H10.3322V21.5184ZM13 12.3203H15V11.2633L14.1267 10.6679L13 12.3203ZM10.3322 9.52513L12.0009 8.42264L8.3322 2.86988V9.52513H10.3322ZM19 21.5184V23.5184H21V21.5184H19ZM15 21.5184H13V23.5184H15V21.5184ZM19 13.1049H21V10.2151L18.2954 11.2332L19 13.1049ZM16.8278 13.5225L16.7989 11.5227H16.7989L16.8278 13.5225ZM15 13.2757L15.556 11.3545L13 10.6148V13.2757H15ZM23.1467 21.5184V23.5184H25.1467V21.5184H23.1467ZM21 21.5184H19V23.5184H21V21.5184ZM23.1467 9.67598H25.1467V3.34432L21.5096 8.52711L23.1467 9.67598ZM20.9996 11.9702L19.7736 10.39L18.9707 11.0129L19.0004 12.0286L20.9996 11.9702ZM28 21.5184V23.5184H30V21.5184H28ZM25.1467 21.5184H23.1467V23.5184H25.1467V21.5184ZM28 16.1634H30V15.3848L29.4736 14.8112L28 16.1634ZM26.8763 14.7324L25.2223 15.8568L25.2223 15.8568L26.8763 14.7324ZM25.1467 11.5461L26.9766 10.7389L23.1467 11.5461H25.1467ZM30 21.5184H28V23.5184H30V21.5184ZM30 17.7941L30.9869 16.0546L28 14.36V17.7941H30ZM31.8203 18.4805L31.4281 20.4417H31.4281L31.8203 18.4805ZM32.997 17.6961L31.0359 17.3038L31.0358 17.3038L32.997 17.6961ZM32.2126 16.5194L31.8203 18.4805H31.8203L32.2126 16.5194ZM28.5303 13.608L30.1843 12.4837L30.1843 12.4837L28.5303 13.608ZM26.0262 8.27986L27.9198 7.63613V7.63613L26.0262 8.27986ZM24.7943 7.01573L23.4983 8.53903L23.7525 8.75527L24.0631 8.87727L24.7943 7.01573ZM23.7738 6.84952L23.8746 8.84698L24.2091 8.8301L24.5199 8.70517L23.7738 6.84952ZM21.912 7.91092L20.2033 6.87158V6.87158L21.912 7.91092ZM16.7989 11.5227L16.8278 13.5225L16.7989 11.5227ZM11.6853 7.91635L9.96144 8.93038L9.96145 8.93038L11.6853 7.91635ZM9.58653 6.81034L9.07929 8.74495L9.32928 8.81049L9.58772 8.81034L9.58653 6.81034ZM8.80876 6.92548L9.38339 8.84116L9.63416 8.76594L9.85711 8.6287L8.80876 6.92548ZM7.34317 8.2444L9.22274 8.92794L9.22274 8.92794L7.34317 8.2444ZM4.65325 13.7071L6.32339 14.8074L4.65325 13.7071ZM1.42786 17.0947L2.42014 18.8311L2.42014 18.8311L1.42786 17.0947ZM1.05576 18.459L2.79224 17.4668L2.79224 17.4668L1.05576 18.459ZM2.42014 18.8311L3.41242 20.5676H3.41242L2.42014 18.8311ZM4 17.6404H6L6 13.0259L2.63258 16.1809L4 17.6404ZM4 21.5184V23.5184H6L6 21.5184H4ZM8.40585 23.5184H10.4059V21.5184H8.40585V23.5184ZM10.2577 23.5184V21.5184H8.2577V23.5184H10.2577ZM23.2204 23.5184H25.2204V21.5184H23.2204V23.5184ZM25.0722 23.5184V21.5184H23.0722V23.5184H25.0722ZM6.3322 11.1178V21.5184H10.3322V11.1178H6.3322ZM7.99353 15.9076C8.79833 14.686 9.52599 13.3344 10.1551 11.9406L6.50929 10.295C5.95435 11.5245 5.32571 12.6863 4.65325 13.7071L7.99353 15.9076ZM7.63901 16.4301C7.75945 16.2578 7.87764 16.0836 7.99353 15.9076L4.65325 13.7071C4.55694 13.8533 4.45949 13.9969 4.36099 14.1378L7.63901 16.4301ZM8 21.5184L8 15.2839H4L4 21.5184H8ZM8.3322 19.5184H6V23.5184H8.3322V19.5184ZM13 19.5184H10.3322V23.5184H13V19.5184ZM11 12.3203V21.5184H15V12.3203H11ZM8.66352 10.6276C9.56746 11.9958 10.6449 13.1351 11.8733 13.9727L14.1267 10.6679C13.3931 10.1676 12.6655 9.42861 12.0009 8.42264L8.66352 10.6276ZM12.3322 21.5184V9.52513H8.3322V21.5184H12.3322ZM19 19.5184H15V23.5184H19V19.5184ZM17 13.1049V21.5184H21V13.1049H17ZM16.8567 15.5223C17.8399 15.5081 18.7961 15.3187 19.7046 14.9767L18.2954 11.2332C17.8008 11.4193 17.301 11.5154 16.7989 11.5227L16.8567 15.5223ZM14.444 15.1968C15.2266 15.4233 16.0351 15.5341 16.8567 15.5223L16.7989 11.5227C16.3782 11.5287 15.9637 11.4725 15.556 11.3545L14.444 15.1968ZM17 21.5184V13.2757H13V21.5184H17ZM23.1467 19.5184H21V23.5184H23.1467V19.5184ZM21.1467 9.67598V21.5184H25.1467V9.67598H21.1467ZM22.2255 13.5503C23.1821 12.8082 24.0394 11.8855 24.7838 10.8248L21.5096 8.52711C20.9661 9.30152 20.3775 9.92141 19.7736 10.39L22.2255 13.5503ZM23 12C23 11.9704 22.9996 11.941 22.9987 11.9117L19.0004 12.0286C19.0001 12.0192 19 12.0096 19 12H23ZM23 21.5184V12H19V21.5184H23ZM28 19.5184H25.1467V23.5184H28V19.5184ZM26 16.1634V21.5184H30V16.1634H26ZM25.2223 15.8568C25.6079 16.4241 26.041 16.9868 26.5264 17.5157L29.4736 14.8112C29.1405 14.4482 28.8259 14.043 28.5303 13.608L25.2223 15.8568ZM23.3168 12.3532C23.8366 13.5319 24.4652 14.7431 25.2223 15.8568L28.5303 13.608C27.9459 12.7484 27.4289 11.7645 26.9766 10.7389L23.3168 12.3532ZM27.1467 21.5184V11.5461H23.1467V21.5184H27.1467ZM32 21.5184V17.7941H28V21.5184H32ZM29.0131 19.5337C29.7413 19.9468 30.5465 20.2654 31.4281 20.4417L32.2126 16.5194C31.7856 16.434 31.3792 16.2772 30.9869 16.0546L29.0131 19.5337ZM31.4281 20.4417C33.0528 20.7666 34.6332 19.713 34.9582 18.0883L31.0358 17.3038C31.1442 16.7623 31.671 16.411 32.2125 16.5194L31.4281 20.4417ZM34.9582 18.0883C35.2831 16.4636 34.2295 14.8831 32.6048 14.5582L31.8203 18.4805C31.2788 18.3722 30.9275 17.8454 31.0359 17.3038L34.9582 18.0883ZM32.6048 14.5582C31.974 14.432 31.135 13.8822 30.1843 12.4837L26.8763 14.7324C28.0791 16.5019 29.6942 18.0553 31.8203 18.4805L32.6048 14.5582ZM30.1843 12.4837C29.2635 11.129 28.5087 9.36855 27.9198 7.63613L24.1326 8.92359C24.7717 10.8035 25.664 12.9491 26.8763 14.7324L30.1843 12.4837ZM27.9198 7.63613C27.4741 6.32512 26.4914 5.53362 25.5255 5.15419L24.0631 8.87727C24.1092 8.89539 24.128 8.91238 24.1299 8.91424C24.1304 8.91476 24.1292 8.91351 24.1278 8.91143C24.1263 8.90905 24.1286 8.91177 24.1326 8.92359L27.9198 7.63613ZM26.0903 5.49243C25.5677 5.04786 24.8862 4.77771 24.1467 4.77771V8.77771C23.9012 8.77771 23.6719 8.68672 23.4983 8.53903L26.0903 5.49243ZM24.1467 4.77771C23.755 4.77771 23.3762 4.8538 23.0278 4.99386L24.5199 8.70517C24.4019 8.7526 24.2748 8.77771 24.1467 8.77771V4.77771ZM23.6731 4.85206C22.4937 4.91155 21.0586 5.46543 20.2033 6.87158L23.6208 8.95026C23.6339 8.92862 23.6486 8.91286 23.6828 8.89482C23.7264 8.87183 23.7948 8.851 23.8746 8.84698L23.6731 4.85206ZM20.2033 6.87158C18.9304 8.96425 17.5905 9.51104 16.7701 9.52288L16.8278 13.5225C19.4449 13.4847 21.8831 11.8071 23.6208 8.95026L20.2033 6.87158ZM16.7701 9.52288C15.9991 9.53401 14.6917 9.08263 13.4092 6.90231L9.96145 8.93038C11.7289 11.935 14.1946 13.5605 16.8278 13.5225L16.7701 9.52288ZM13.4092 6.90231C12.4558 5.28155 10.7654 4.80964 9.58534 4.81034L9.58772 8.81034C9.70183 8.81027 9.8105 8.83538 9.88291 8.86935C9.94083 8.89654 9.95341 8.91672 9.96144 8.93038L13.4092 6.90231ZM10.0938 4.87573C9.84841 4.8114 9.59275 4.77771 9.3322 4.77771V8.77771C9.24743 8.77771 9.16223 8.76669 9.07929 8.74495L10.0938 4.87573ZM9.3322 4.77771C8.75963 4.77771 8.21887 4.94008 7.76041 5.22226L9.85711 8.6287C9.70317 8.72346 9.52096 8.77771 9.3322 8.77771V4.77771ZM8.23414 5.00981C7.2109 5.31674 6.0036 6.076 5.4636 7.56087L9.22274 8.92794C9.22663 8.91724 9.22846 8.9159 9.22659 8.91851C9.2252 8.92046 9.2261 8.91841 9.23324 8.91245C9.25061 8.89792 9.29797 8.86678 9.38339 8.84116L8.23414 5.00981ZM5.4636 7.56087C4.79419 9.40159 3.92801 11.1725 2.98311 12.6068L6.32339 14.8074C7.46631 13.0725 8.46443 11.0131 9.22274 8.92794L5.4636 7.56087ZM2.98311 12.6068C2.00369 14.0935 1.09548 14.9811 0.435582 15.3582L2.42014 18.8311C3.86586 18.005 5.19205 16.5246 6.32339 14.8074L2.98311 12.6068ZM0.435583 15.3582C-1.00297 16.1802 -1.50276 18.0128 -0.68073 19.4513L2.79224 17.4668C3.06625 17.9463 2.89966 18.5571 2.42014 18.8311L0.435583 15.3582ZM-0.680731 19.4513C0.1413 20.8899 1.97386 21.3897 3.41242 20.5676L1.42786 17.0947C1.90738 16.8206 2.51823 16.9872 2.79224 17.4668L-0.680731 19.4513ZM3.41242 20.5676C4.11892 20.1639 4.77094 19.6588 5.36742 19.0999L2.63258 16.1809C2.21513 16.572 1.81123 16.8756 1.42786 17.0947L3.41242 20.5676ZM2 17.6404L2 21.5184H6V17.6404H2ZM4 19.5184H1.92485V23.5184H4V19.5184ZM1.92485 19.5184C0.268 19.5184 -1.07515 20.8616 -1.07515 22.5184H2.92485C2.92485 23.0707 2.47714 23.5184 1.92485 23.5184V19.5184ZM-1.07515 22.5184C-1.07515 24.1753 0.268 25.5184 1.92485 25.5184V21.5184C2.47714 21.5184 2.92485 21.9661 2.92485 22.5184H-1.07515ZM1.92485 25.5184H8.40585V21.5184H1.92485V25.5184ZM6.40585 23.5184V28.0739H10.4059V23.5184H6.40585ZM6.40585 28.0739C6.40585 29.6899 7.71583 30.9999 9.33177 30.9999V26.9999C9.92497 26.9999 10.4059 27.4808 10.4059 28.0739H6.40585ZM9.33177 30.9999C10.9477 30.9999 12.2577 29.6899 12.2577 28.0739H8.2577C8.2577 27.4808 8.73857 26.9999 9.33177 26.9999V30.9999ZM12.2577 28.0739V23.5184H8.2577V28.0739H12.2577ZM10.2577 25.5184H23.2204V21.5184H10.2577V25.5184ZM21.2204 23.5184V28.0739H25.2204V23.5184H21.2204ZM21.2204 28.0739C21.2204 29.6899 22.5304 30.9999 24.1463 30.9999V26.9999C24.7395 26.9999 25.2204 27.4808 25.2204 28.0739H21.2204ZM24.1463 30.9999C25.7623 30.9999 27.0722 29.6899 27.0722 28.0739H23.0722C23.0722 27.4808 23.5531 26.9999 24.1463 26.9999V30.9999ZM27.0722 28.0739V23.5184H23.0722V28.0739H27.0722ZM25.0722 25.5184H31.5543V21.5184H25.0722V25.5184ZM31.5543 25.5184C33.2112 25.5184 34.5543 24.1753 34.5543 22.5184H30.5543C30.5543 21.9661 31.002 21.5184 31.5543 21.5184V25.5184ZM34.5543 22.5184C34.5543 20.8616 33.2112 19.5184 31.5543 19.5184V23.5184C31.002 23.5184 30.5543 23.0707 30.5543 22.5184H34.5543ZM31.5543 19.5184H30V23.5184H31.5543V19.5184Z",fill:"#2FF6D3",mask:"url(#path-1-inside-1_33171_185121)"})),Sa=e=>i.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.exports.createElement("path",{d:"M29 6L3 17.9167H9.8421M29 6L14.4035 17.9167M29 6L19.8772 28L16 21M14.4035 17.9167H9.8421M14.4035 17.9167L16 21M9.8421 17.9167V23.875L16 21",stroke:"#2FF6D3",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Na=[{status:"Confirm",icon:t(_a,{})},{status:"Deposit",icon:t(La,{})},{status:"Burn",icon:t(ka,{})},{status:"Mint",icon:t(Ma,{})},{status:"Release",icon:t(ya,{})},{status:"Receive",icon:t(va,{})},{status:"Bridge",icon:t(Ta,{})},{status:"Send",icon:t(Sa,{})}],Aa=["confirm","deposit","mint","receive"],Ia=["confirm","burn","mint","receive"],Ba=["confirm","burn","release","receive"],Ra=["confirm","deposit","release","receive"],$a=["confirm","deposit","burn","release","receive"],Ha=["confirm","deposit","release","receive"],Za=["confirm","deposit","burn","mint","receive"],Fa=["confirm","deposit","mint","receive"],Va=["confirm","send","bridge","receive"],Ea=()=>{const e=c(N.progressBarPercentage),s=c(N.progressBarStep),o=c(L.baseNetwork),m=c(N.networksByName),d=c(L.destinationNetwork),l=c($.isTokenNative),a=c(L.pendingRedeem),w=c($.originNetworkId),p=c(Y.cardanoBridgeVersion),f=c(L.selectedToken),C=c($.isLifiToken),_=i.exports.useCallback(()=>{let h;return f?.target_networks?.length>0?(h=Ra,h):C?(h=Va,h):l?(h=Aa,h):p===1&&o?.id===m?.CARDANO?.id&&w!==d?.id?(h=Za,h):o?.id===m?.CARDANO?.id&&w!==d?.id?(h=Fa,h):p===1&&(o?.id===m?.CARDANO?.id||a?.base_network_id===m?.CARDANO?.id)?(h=$a,h):o?.id===m?.CARDANO?.id||a?.base_network_id===m?.CARDANO?.id?(h=Ha,h):w===d?.id||a?(h=Ba,h):(h=Ia,h)},[o?.id,p,d?.id,l,m?.CARDANO?.id,w,a,f?.target_networks?.length,C]),k=i.exports.useMemo(()=>{const h=[],y=_(),S=Na.filter(R=>y.includes(R.status.toLowerCase()));return h.push(...S),h},[_]);return t(Sn,{progressSteps:k,progressBarStep:s,progressBarPercentage:e})},Wa=r.div`
display: flex;
margin-bottom: 20px;
align-items: center;
font-size: 12px;
color: ${({theme:e})=>e.gray_light};
justify-content: center;

span {
  margin-right: 8px;
  margin-left: 8px;
}
  `,Da={PoweredByCircle:Wa},za=e=>i.exports.createElement("svg",{width:59,height:16,viewBox:"0 0 59 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.exports.createElement("path",{d:"M14.4286 4.05963L14.1088 3.49803C14.0837 3.45401 14.0488 3.41639 14.0068 3.38809C13.9648 3.3598 13.9168 3.3416 13.8665 3.33491C13.8163 3.32822 13.7652 3.33323 13.7173 3.34954C13.6693 3.36585 13.6258 3.39303 13.59 3.42895L12.8545 4.16389C12.8007 4.21794 12.7672 4.28892 12.7598 4.3648C12.7523 4.44068 12.7713 4.51681 12.8135 4.5803C13.0817 4.99017 13.2967 5.43252 13.4532 5.89668C13.7455 6.76437 13.8271 7.68918 13.6913 8.59466C13.5555 9.50015 13.2061 10.3603 12.6721 11.104C12.138 11.8478 11.4346 12.4537 10.6201 12.8718C9.80546 13.2899 8.90306 13.5081 7.98744 13.5084C7.04487 13.511 6.11628 13.2805 5.28433 12.8374L6.52842 11.5927C7.29934 11.8842 8.13999 11.9379 8.94172 11.7467C9.74344 11.5555 10.4694 11.1282 11.0257 10.5201C11.5821 9.91193 11.9432 9.15091 12.0625 8.33538C12.1817 7.51984 12.0537 6.68727 11.6948 5.94529C11.672 5.89778 11.6382 5.85643 11.5961 5.8247C11.554 5.79298 11.5049 5.77181 11.453 5.76298C11.4011 5.75414 11.3477 5.7579 11.2976 5.77393C11.2474 5.78996 11.2017 5.81779 11.1645 5.8551L10.42 6.59452C10.3803 6.63417 10.3514 6.68331 10.3361 6.73728C10.3207 6.79124 10.3194 6.84823 10.3324 6.90283L10.3963 7.1702C10.5064 7.63856 10.4773 8.12886 10.3127 8.58093C10.1481 9.03301 9.85508 9.42719 9.46963 9.71511C9.08418 10.003 8.62305 10.1722 8.14285 10.2017C7.66264 10.2313 7.18425 10.1201 6.76637 9.88163L6.43824 9.69358C6.37553 9.65746 6.30264 9.64308 6.23092 9.65268C6.1592 9.66229 6.09266 9.69533 6.04166 9.74667L3.00273 12.785C2.96956 12.8181 2.94385 12.858 2.92734 12.9019C2.91082 12.9458 2.90388 12.9928 2.90696 13.0396C2.91005 13.0864 2.92311 13.132 2.94525 13.1734C2.96739 13.2147 2.99811 13.2509 3.03535 13.2794L3.4831 13.6229C4.77434 14.6179 6.35984 15.1553 7.99 15.1503C9.28783 15.1487 10.5625 14.8066 11.6868 14.1583C12.8112 13.51 13.7458 12.5782 14.3974 11.4558C15.049 10.3334 15.3948 9.0597 15.4002 7.76188C15.4057 6.46406 15.0707 5.1875 14.4286 4.05963Z",fill:"rgba(255, 255, 255, 0.5)"}),i.exports.createElement("path",{d:"M12.4991 1.84991C11.208 0.854492 9.62243 0.316895 7.99218 0.321811C6.69372 0.32282 5.41825 0.664558 4.29323 1.31288C3.16821 1.9612 2.23301 2.8934 1.58109 4.01635C0.929171 5.13929 0.583351 6.41365 0.578184 7.7121C0.573017 9.01055 0.908683 10.2876 1.55165 11.4157L1.87147 11.9767C1.89665 12.0207 1.93163 12.0582 1.97368 12.0865C2.01573 12.1148 2.06373 12.133 2.11395 12.1398C2.16417 12.1465 2.21528 12.1416 2.26329 12.1254C2.31131 12.1092 2.35496 12.0822 2.39085 12.0464L3.12516 11.3121C3.17857 11.258 3.21178 11.1871 3.21923 11.1115C3.22668 11.0358 3.20792 10.9598 3.1661 10.8963C2.89763 10.4866 2.68267 10.0442 2.52646 9.57996C2.23411 8.71227 2.15247 7.78745 2.28829 6.88197C2.4241 5.97648 2.77348 5.11632 3.30753 4.37259C3.84158 3.62885 4.54498 3.0229 5.35957 2.60482C6.17416 2.18674 7.07656 1.96853 7.99218 1.96824C8.93473 1.96611 9.86316 2.19728 10.6947 2.64114L9.44992 3.88524C8.82638 3.64892 8.15478 3.56753 7.49284 3.64806C6.8309 3.72859 6.19841 3.96865 5.64973 4.34758C5.10104 4.72652 4.65257 5.23302 4.34285 5.82355C4.03313 6.41407 3.87142 7.07097 3.87162 7.73779C3.87162 7.80623 3.89017 8.11838 3.89593 8.17211C3.94637 8.64452 4.0777 9.10474 4.28419 9.53262C4.30705 9.58014 4.34097 9.62149 4.3831 9.65321C4.42522 9.68492 4.47434 9.70609 4.52633 9.71492C4.57832 9.72375 4.63167 9.72 4.68191 9.70397C4.73215 9.68795 4.77781 9.66011 4.81509 9.62281L5.55963 8.87763C5.59928 8.83808 5.6282 8.78907 5.64364 8.73524C5.65909 8.68141 5.66055 8.62452 5.6479 8.56996L5.58393 8.30195C5.47372 7.83359 5.50269 7.34323 5.66728 6.8911C5.83188 6.43897 6.12493 6.04474 6.51045 5.75684C6.89597 5.46894 7.35718 5.29989 7.83744 5.27046C8.3177 5.24103 8.7961 5.35249 9.21389 5.59116L9.54202 5.77922C9.60482 5.81501 9.67763 5.82921 9.74927 5.81961C9.82092 5.81002 9.88743 5.77718 9.9386 5.72613L12.9769 2.68784C13.0101 2.65465 13.0359 2.61476 13.0524 2.57082C13.069 2.52688 13.076 2.47992 13.073 2.43306C13.07 2.3862 13.057 2.34052 13.0349 2.29908C13.0128 2.25764 12.9821 2.22139 12.9449 2.19276L12.4991 1.84991Z",fill:"rgba(255, 255, 255, 0.5)"}),i.exports.createElement("path",{d:"M24.9809 9.78226C24.9254 9.73726 24.8558 9.71345 24.7845 9.71509C24.7131 9.71673 24.6446 9.74371 24.5913 9.79121C24.1148 10.1609 23.5621 10.5031 22.7543 10.5031C21.2754 10.5031 20.0723 9.25775 20.0723 7.72582C20.0723 6.19388 21.271 4.93763 22.7434 4.93763C23.383 4.93763 24.0739 5.20692 24.5817 5.65275C24.6104 5.68595 24.6459 5.71245 24.686 5.73036C24.726 5.74827 24.7694 5.75715 24.8133 5.75637C24.8513 5.75335 24.8881 5.74205 24.9213 5.72327C24.9544 5.70448 24.9831 5.67866 25.0052 5.64763L25.4862 5.15255C25.5168 5.12292 25.541 5.08729 25.5571 5.04788C25.5733 5.00847 25.5812 4.96615 25.5802 4.92356C25.5784 4.88028 25.5677 4.83784 25.5488 4.79889C25.5299 4.75993 25.5031 4.72529 25.4702 4.69712C24.6303 3.96538 23.7867 3.63916 22.7319 3.63916C20.4804 3.63916 18.6484 5.4826 18.6484 7.7482C18.6493 8.83124 19.0797 9.86972 19.8452 10.6358C20.6107 11.402 21.6489 11.8332 22.7319 11.8349C23.2407 11.8409 23.7456 11.7462 24.2176 11.5563C24.6897 11.3664 25.1195 11.085 25.4823 10.7283C25.5142 10.6958 25.5392 10.6573 25.5559 10.615C25.5726 10.5727 25.5806 10.5275 25.5796 10.482C25.5787 10.4458 25.5706 10.4102 25.5556 10.3772C25.5407 10.3442 25.5192 10.3146 25.4926 10.2901L24.9809 9.78226Z",fill:"rgba(255, 255, 255, 0.5)"}),i.exports.createElement("path",{d:"M28.4828 3.75049H27.7543C27.673 3.75322 27.5958 3.78682 27.5384 3.84445C27.481 3.90208 27.4477 3.97941 27.4453 4.06071V11.4166C27.4475 11.498 27.4808 11.5755 27.5382 11.6332C27.5956 11.691 27.6729 11.7247 27.7543 11.7274H28.4828C28.5642 11.7247 28.6415 11.691 28.6989 11.6332C28.7563 11.5755 28.7895 11.498 28.7918 11.4166V4.06071C28.7894 3.97941 28.7561 3.90208 28.6987 3.84445C28.6413 3.78682 28.5641 3.75322 28.4828 3.75049Z",fill:"rgba(255, 255, 255, 0.5)"}),i.exports.createElement("path",{d:"M37.1001 6.22653C37.1001 4.86154 35.9762 3.75049 34.5946 3.75049H31.5902C31.5081 3.75083 31.4296 3.78366 31.3717 3.8418C31.3138 3.89994 31.2812 3.97866 31.2813 4.06071V11.4166C31.2811 11.4987 31.3135 11.5776 31.3714 11.6359C31.4294 11.6942 31.508 11.7271 31.5902 11.7274H32.3079C32.3893 11.7247 32.4666 11.691 32.524 11.6332C32.5814 11.5755 32.6146 11.498 32.6168 11.4166V8.68083H34.1225L35.5649 11.5688C35.5912 11.6161 35.6297 11.6555 35.6764 11.6829C35.7231 11.7102 35.7763 11.7245 35.8304 11.7242H36.6913C36.7457 11.726 36.7996 11.7134 36.8476 11.6877C36.8955 11.662 36.9359 11.6241 36.9644 11.5778C36.9917 11.5289 37.006 11.4738 37.006 11.4178C37.006 11.3619 36.9917 11.3068 36.9644 11.2579L35.501 8.53052C36.4898 8.09108 37.1001 7.21733 37.1001 6.22653ZM35.7536 6.24892C35.7536 6.94165 35.1824 7.5282 34.5063 7.5282H32.6392V5.02657H34.5038C35.1811 5.02657 35.751 5.58625 35.751 6.24892H35.7536Z",fill:"rgba(255, 255, 255, 0.5)"}),i.exports.createElement("path",{d:"M44.9458 9.78226C44.8904 9.73726 44.8207 9.71345 44.7494 9.71509C44.678 9.71673 44.6095 9.74371 44.5562 9.79121C44.0797 10.1609 43.5271 10.5031 42.7192 10.5031C41.2404 10.5031 40.0372 9.25775 40.0372 7.72582C40.0372 6.19388 41.2352 4.93763 42.7077 4.93763C43.3473 4.93763 44.0381 5.20692 44.5466 5.65275C44.5754 5.68627 44.6113 5.71297 44.6517 5.73089C44.6921 5.74882 44.7359 5.75752 44.7801 5.75637C44.8181 5.75335 44.855 5.74205 44.8881 5.72327C44.9213 5.70448 44.9499 5.67866 44.972 5.64763L45.453 5.15255C45.4835 5.12289 45.5076 5.08724 45.5237 5.04783C45.5397 5.00842 45.5475 4.9661 45.5464 4.92356C45.5449 4.88029 45.5344 4.83782 45.5155 4.79884C45.4967 4.75986 45.47 4.72522 45.437 4.69712C44.5991 3.96538 43.7554 3.63916 42.7006 3.63916C40.4491 3.63916 38.6172 5.4826 38.6172 7.7482C38.618 8.83124 39.0484 9.86972 39.8139 10.6358C40.5795 11.402 41.6176 11.8332 42.7006 11.8349C43.2094 11.8408 43.7143 11.7461 44.1864 11.5562C44.6584 11.3663 45.0882 11.0849 45.4511 10.7283C45.483 10.6957 45.508 10.6571 45.5247 10.6147C45.5414 10.5723 45.5494 10.5269 45.5483 10.4814C45.5475 10.4452 45.5394 10.4095 45.5244 10.3766C45.5095 10.3436 45.488 10.314 45.4613 10.2895L44.9458 9.78226Z",fill:"rgba(255, 255, 255, 0.5)"}),i.exports.createElement("path",{d:"M51.6439 10.4923H48.7527V4.06071C48.7503 3.97941 48.717 3.90208 48.6596 3.84445C48.6022 3.78682 48.525 3.75322 48.4437 3.75049H47.7152C47.6331 3.75083 47.5546 3.78366 47.4967 3.8418C47.4388 3.89994 47.4062 3.97866 47.4063 4.06071V11.4166C47.4061 11.4987 47.4385 11.5776 47.4964 11.6359C47.5544 11.6942 47.633 11.7271 47.7152 11.7274H51.6439C51.6846 11.7274 51.7249 11.7192 51.7625 11.7036C51.8001 11.6879 51.8343 11.665 51.863 11.6361C51.8918 11.6073 51.9146 11.573 51.9301 11.5353C51.9456 11.4977 51.9535 11.4573 51.9535 11.4166V10.8057C51.9539 10.7648 51.9462 10.7241 51.9308 10.6862C51.9155 10.6482 51.8927 10.6136 51.864 10.5845C51.8352 10.5554 51.8009 10.5322 51.7631 10.5164C51.7254 10.5006 51.6848 10.4924 51.6439 10.4923Z",fill:"rgba(255, 255, 255, 0.5)"}),i.exports.createElement("path",{d:"M58.1912 4.99526C58.2733 4.99492 58.3518 4.96209 58.4097 4.90395C58.4676 4.84581 58.5002 4.76709 58.5002 4.68504V4.06267C58.5002 3.98061 58.4676 3.9019 58.4097 3.84376C58.3518 3.78561 58.2733 3.75278 58.1912 3.75244H53.7777C53.6956 3.75278 53.6171 3.78561 53.5592 3.84376C53.5013 3.9019 53.4687 3.98061 53.4688 4.06267V11.4185C53.4686 11.5007 53.501 11.5796 53.5589 11.6378C53.6169 11.6961 53.6955 11.729 53.7777 11.7294H58.1912C58.2734 11.729 58.3521 11.6961 58.41 11.6378C58.4679 11.5796 58.5003 11.5007 58.5002 11.4185V10.8077C58.5002 10.7256 58.4676 10.6469 58.4097 10.5888C58.3518 10.5306 58.2733 10.4978 58.1912 10.4974H54.8011V8.30284H57.6482C57.7303 8.30267 57.8091 8.26991 57.8671 8.21175C57.9251 8.15359 57.9577 8.07478 57.9577 7.99261V7.37088C57.9555 7.28936 57.9222 7.21178 57.8647 7.154C57.8071 7.09622 57.7297 7.0626 57.6482 7.06002H54.803V4.99526H58.1912Z",fill:"rgba(255, 255, 255, 0.5)"})),Oa=()=>x(Da.PoweredByCircle,{children:[t("span",{children:"This port is powered by the  "}),t(za,{}),t("span",{children:" CCTP bridge protocol"})]}),Nn=ze.memo(({swapAmount:e,isWalletConnected:s,balance:o,isMobile:m,openTokenModal:d,selectedToken:l,baseNetwork:a,setBaseNetwork:w,destinationNetwork:p,allowanceForToken:f,redeem:C,swapNetworks:_,ethTransactionFee:k,processingPort:h,openConfirmTxModal:y,handleAddAllowance:S,approveLoading:R,handleWithdrawTokens:A,withdrawLoading:b,txHash:I,blockConfirmations:M,networksByName:T,setTitle:F,openConnectWalletModal:U,walletBalance:z,resetSwapAmount:H,isTokenNative:ne,originNetworkId:J,portTx:j,isRedeemOnGoing:oe,nativeCoinRates:le,isTokenCFB:ye,tokenError:ae,allowanceLoading:ve,setDestinationNetwork:Ae,calculatePortxFee:wt,walletAddress:ce,recipientWalletAddress:Q,setRecipientWalletAddress:Oe,cardanoBurnTx:Le,updateProgressBar:et,networksById:Ie,handleBalanceChange:Ct,mainToMainObj:te,isTokenMainToMain:Be,liquidityAvaib:tt})=>{const[Re,he]=i.exports.useState(!1),_t=c(L.isTokenHasLiquidity),[Pe,kt]=i.exports.useState(!0),[yt,vt]=i.exports.useState(0),ue=c(N.isBannerShown),nt=c(Y.cardanoBridgeVersion),Lt=c(N.stablesData),Mt=c($.isLifiToken),je=i.exports.useRef(),$e=ke(),ot=i.exports.useMemo(()=>pt(le?.[a?.name]*k?.fee)||0,[le,k?.fee,a?.name]),de=i.exports.useMemo(()=>Vn(a?.blockchainType),[a?.blockchainType]),at=i.exports.useMemo(()=>a?.blockchainType==="cardano"?cn(Q):p?.blockchainType==="cardano"?En(Q):!1,[Q,a?.blockchainType,p?.blockchainType]),Tt=a?.id===T.CARDANO.id?B.fromWei(+o,l?.decimals):o,it=i.exports.useMemo(()=>a?.blockchainType==="cardano"&&Q.length===Wn||p?.blockchainType==="cardano"&&Q.length===Dn,[Q,a?.blockchainType,p?.blockchainType]),St=async ee=>{if(ee==="lifiBridge"){const Te=await B.portFeeLIFI(a?.id),G=B.fromWei(Te);return vt(G),Te}if(ee==="usdcBridge"){const Te=Lt.usdc_destination_domains[p.name];return await B.portFeeUSDC(a?.id,Te)}return await B.gasFeesPerNetwork(p?.id,a?.id,ee)},He=async()=>{try{if(l.network_name!=null){if(he(!0),p?.blockchainType==="cardano"||a?.blockchainType==="cardano"){let G=!0;if(a?.blockchainType==="cardano"&&e<=1){Ne(t(Xt,{content:Un}),Kt),he(!1);return}const K=await qn(Q,p?.blockchainType);if(p?.blockchainType==="cardano"){const Ve=B.toWei(e,l.decimals);G=await dn(ce,l.web3_address,a.id,Ve)}const P=K&&at&&it;if(kt(P),k?.errorMsg){he(!1);return}if(!P||!G){he(!1);return}}const ee=T[l.network_name]?.chainport_network_id,Ye=Q&&a?.blockchainType==="cardano"?Q:ce,Te=await wt(e,l,ee,Ye)||{};if(ae)he(!1),Ne.error(ae);else{let G;if(a?.blockchainType!=="cardano"){const ie=T[l.network_name]?.id,pe=await $e(pn(ie,l.web3_address));let re;l?.is_native_usdc&&!l?.usdc_wrapped_target_networks?.includes(p.id)?re="usdcBridge":Mt?re="lifiBridge":pe?re="depositTokens":p.id===J&&a.id!==T.CARDANO.id&&p.id!==T.CARDANO.id?re="burnTokens":re="crossChainTransfer";const qt=await St(re);G=B.fromWei(qt,18)}const K={from:ce,estimateGas:!0};let P;if(a.id===T.POLYGON.id)P=(await mn(K,!0))?.maxFee;else{const pe=await De.injectGasPrice(K,!0)/1e9;P=new ut(pe).toFixed()}$e(gn(P));const Ve=_t;if(a?.blockchainType==="cardano"&&p?.id===T.ETHEREUM.id){const ie=B.toWei(e,l.decimals),pe=await Yn(ce,ie,Q,p.id,l.web3_address);G=B.fromWei(pe.fees,6)}y(A,ot,Ve,Te,G,yt),he(!1)}}}catch(ee){console.log(ee)}},Ze=i.exports.useMemo(()=>typeof M>"u"&&!I&&!b?u("modal.in_progress"):M&&M>a?.minimum_confirmation?a.minimum_confirmation:M,[M,I,b,a?.minimum_confirmation]),Ge=i.exports.useMemo(()=>Object.prototype.hasOwnProperty.call(f,"allowance")?!k.isEnoughTokens||!k.isEnoughBalance:!0,[f,k]),Me=i.exports.useMemo(()=>!!h?.id&&!h?.target_tx_status,[h?.id,h?.target_tx_status]),q=i.exports.useMemo(()=>a?.id!==T.CARDANO.id&&(Me||I&&!oe&&!C&&!h?.target_tx_status&&!R&&!j?.burnTokens)?"withdraw":!Me&&(!l||mt(l)||!e||!p||!a)?"chooseData":e>f?.allowance&&a.id!==T.CARDANO.id&&!te?.isLoading&&+o!==f?.allowance?"approve":!ne&&(p.id===J&&a.id!==T.CARDANO.id&&!C||Le)?"burn":a.id===T.CARDANO.id?"return":"withdraw",[f?.allowance,R,o,a,Le,p,Me,oe,ne,te?.isLoading,T.CARDANO.id,J,j?.burnTokens,h?.target_tx_status,C,l,e,I]);i.exports.useEffect(()=>{q&&$e(zn(q))},[q,$e]);const Ue=(()=>{if(M&&q==="withdraw"&&M>a?.minimum_confirmation+On)return u("common.final_confirmation");if(q==="withdraw")return a?.minimum_confirmation?u("modal.confirmations",{displayedConfirmations:Ze||"0",minConfirmations:a?.minimum_confirmation}):u("modal.porting_in_progress");if(q==="burn")return u("modal.burn_confirmations",{swapAmount:_e(e,3,!0),baseNetwork:a?.label,selectedTokenSymbol:l?.symbol,displayedConfirmations:Ze,minConfirmations:a?.minimum_confirmation});if(q==="return")return u("modal.returning",{swapAmount:_e(e,3,!0),selectedTokenSymbol:l?.symbol,displayedConfirmations:Ze,minConfirmations:a?.minimum_confirmation})})();i.exports.useEffect(()=>{!h&&!C&&!I&&!b&&mt(j)&&(H(),Oe(""),et(0))},[ce]);const Fe=i.exports.useMemo(()=>a?.blockchainType==="cardano"?B.fromWei(o,6):o,[o,a?.blockchainType]),rt=Be&&+te?.destTokenBalance>=0&&+te?.destTokenBalance<e&&p?.id!==9||te?.isLoading,fe=Q===""&&(a?.blockchainType==="cardano"||p?.blockchainType==="cardano"),be=i.exports.useMemo(()=>rt||h?.id||!l.network_name||!k.isEnoughTokens||!k?.isEnoughBalance||parseFloat(e)>parseFloat(Fe||"0")||fe,[rt,h?.id,l.network_name,k.isEnoughTokens,k?.isEnoughBalance,e,Fe,fe]),Nt=i.exports.useMemo(()=>!k?.isEnoughBalance||h?.id||Ge||parseFloat(e)<=0||Q===""&&(a?.blockchainType==="cardano"||p?.blockchainType==="cardano"),[k?.isEnoughBalance,h?.id,Ge,e,Q,a?.blockchainType,p?.blockchainType]),qe=i.exports.useMemo(()=>x(v.BtnContent,{className:"loading",children:[t(X,{}),t(v.ConfirmingTokenText,{children:I?Ue:u("modal.confirm_tx_in_wallet")})]}),[I,Ue]),st=()=>te?.destTokenBalance&&parseFloat(te?.destTokenBalance)<e&&Be?t(v.BtnContent,{children:u("modal.exceed_main_to_main_balance",{token:l?.symbol})}):!be&&parseFloat(e)<=parseFloat(o||"0")?t(v.BtnContent,{children:u("modal.port_to",{swapAmount:gt(e),selectedTokenSymbol:l.symbol,baseNetwork:a?.label,destinationNetwork:p.label})}):fe?t(v.BtnContent,{children:u("Waiting for recipient address")}):t(v.BtnContent,{children:u("modal.exceed_limit")}),lt=(()=>q==="withdraw"?Me?x(v.BtnContent,{className:"loading",children:[t(X,{}),t(v.ConfirmationTextWrapper,{children:Ue})]}):b?qe:Re||te?.isLoading?t(v.BtnContentWrapper,{children:t(v.BtnContent,{className:"loading",children:t(X,{})})}):st():null)(),At=(()=>q==="burn"?b?qe:Re||tt?.isLoading?t(v.BtnContentWrapper,{children:t(v.BtnContent,{className:"loading",children:t(X,{})})}):be&&parseFloat(e)>parseFloat(o||"0")?t(v.BtnContent,{children:u("modal.exceed_limit")}):x(v.BtnContent,{children:[u("modal.burn_tokens",{swapAmount:gt(e),selectedTokenSymbol:l.symbol,baseNetwork:a?.label})," "]}):null)(),It=(()=>{if(q==="return")return b?qe:Re?t(v.BtnContentWrapper,{children:t(v.BtnContent,{className:"loading",children:t(X,{})})}):Me?x(v.BtnContent,{className:"loading",children:[t(X,{}),u("modal.confirmations",{displayedConfirmations:Ze||"0",minConfirmations:a?.minimum_confirmation})]}):be&&parseFloat(e)>parseFloat(B.fromWei(o,6)||"0")?t(v.BtnContent,{children:u("modal.exceed_limit")}):t(v.BtnContent,{children:u("modal.return",{swapAmount:_e(e,2,!0),selectedTokenSymbol:l.symbol,baseNetwork:a?.label,destinationNetwork:p.label})})})(),Bt=()=>{if(tt?.isLiquidityAvaib||p?.name?.toLowerCase()==="cardano"){He();return}const ee=`Your attempted port of ${l?.symbol} from ${a?.name.trim()==="BSC"?"BNB":a?.name} to ${p?.name.trim()==="BSC"?"BNB":p?.name} has been flagged for further checks to ensure security and safety of the bridge. Please check back in a few hours or open a support ticket to track the approval progress.`;Ne(t(Xt,{content:ee}),Kt)},Rt=i.exports.useCallback(()=>{Pn(a,p,l,e)},[a,p,l,e]),$t=i.exports.useMemo(()=>l.token_image?t(v.TokenIcon,{background:l.token_image}):t("div",{children:"\u2014"}),[l]);return x(O,{children:[x(v.Wrapper,{className:W({connected:s,mobile:m}),isBannerShown:ue,children:[x(v.HeadersWrapper,{children:[t(v.Header,{children:F}),!s&&t(v.SecondaryHeader,{children:"Cross-Chain Bridge App"})]}),x(v.Grid,{className:W({"wallet-connected":s,mobile:m,disabled:s&&(R||b)}),ref:je,children:[!k?.isEnoughBalance&&s&&z&&!I&&t(ht,{isMobile:m,children:t("p",{children:u("modal.no_funds",{tokenname:a?.native_token_symbol,network:a?.label})})}),t(jt,{setBaseNetwork:w,swapNetworks:_,baseNetwork:a,destinationNetwork:p,setDestinationNetwork:Ae,ref:je}),t(v.Separator,{className:W({mobile:m})}),x(v.TokenSelectContainer,{children:[x(v.SelectToken,{className:W({mobile:m}),children:[t(Wt,{id:"select_token",label:u("common.select_token")}),x(v.FakeSelect,{className:W({mobile:m}),onClick:s?()=>d():()=>U(),children:[x(v.TokenImageAndNameWrapper,{children:["  ",$t," ",t("span",{children:l?.symbol?l.symbol:null})]}),t(Vt,{})]})]}),x("span",{style:{width:m?"100%":"45%"},children:["  ",t(jn,{})]})]}),te?.destTokenBalance&&+te?.destTokenBalance<Tt&&+te?.destTokenBalance<+e&&Be&&p.id!==9?x(v.MainToMainWarning,{children:[t("div",{children:t(Do,{})}),x("div",{children:[t(O,{children:"A maximum amount of "}),x("span",{onClick:Ct,children:[gt(te?.destTokenBalance)," ",l?.symbol]}),t(O,{children:` tokens are currently available to be ported to ${p?.name}`})]})]}):null,s&&(a?.blockchainType==="cardano"||p?.blockchainType==="cardano")&&t(Mn,{addressIsValid:Pe,isConfirmModalOpening:Re,validCharacters:de,isLengthValidated:it,ethTransactionFee:k}),s&&(!h||!C)?x(O,{children:[(l?.is_native_usdc||l?.is_wrapped_usdc)&&!b&&t(Gn,{destinationNetwork:p,selectedToken:l,baseNetwork:a}),b&&t(v.Separator,{className:W({mobile:m})}),b&&t(Ea,{}),t(v.Actions,{className:W({mobile:m}),children:{chooseData:t(xe,{className:`primary w-100 action ${a?.name.toLowerCase()}`,disabled:!0,children:ve?t(v.BtnContentWrapper,{children:t(v.BtnContent,{className:"loading",children:t(X,{})})}):t(v.BtnContent,{children:u("modal.select_token")})}),approve:t(xe,{className:`primary w-100 action ${a?.name.toLowerCase()}`,onClick:S,disabled:Nt,children:R?x(v.BtnContent,{className:"loading",children:[t(X,{})," ",u("button.approving")]}):x(v.BtnContent,{children:[" ",u("button.approve_token")," "]})}),burn:t(xe,{className:`primary w-100 action ${a?.name.toLowerCase()}`,onClick:Bt,disabled:be,children:At}),return:t(xe,{className:`primary w-100 action ${a?.name.toLowerCase()}`,onClick:He,disabled:be,children:It}),withdraw:t(xe,{className:`primary w-100 action ${a?.name.toLowerCase()}`,onClick:He,disabled:be,children:lt})}[q]})]}):t(v.Action,{children:t(yn,{className:"outlined-primary white w-100 modal"})}),ye&&!mt(l)?t(ht,{strict:!1,classes:"burn-warning",children:t("p",{style:{marginBottom:"-10px"},children:u("modal.cfb_text")})}):null]}),I&&x("div",{className:"status-wrapper",children:[x(v.CheckTx,{href:`${Ie[a?.id]?.explorer_url}${a?.blockchainType==="cardano"?"transaction/":"tx/"}${I}`,target:"_blank",rel:"noopener noreferrer",children:[a?.blockchainType==="cardano"&&nt!==2?"Check Deposit Status":u("modal.check_tx"),t(ge,{})]}),a.id===T.CARDANO.id&&q==="burn"&&nt===1&&x(v.CheckTx,{href:`${Ie[a?.id]?.explorer_url}transaction/${Le}`,target:"_blank",rel:"noopener noreferrer",children:[u("modal.check_burn_status"),t(ge,{})]})]})]}),x("div",{children:[l.is_native_usdc&&l?.usdc_native_target_networks.includes(p?.id)&&t("div",{children:t(Oa,{})}),s&&!b&&l?.symbol&&t(v.CopyText,{children:u("modal.copy_deeplink_02",{CopyLink:ee=>t(v.CopySpan,{onClick:Rt,children:ee})})})]})]})});Nn.propTypes={swapAmount:n.exports.oneOfType([n.exports.number,n.exports.string]),swapNetworks:n.exports.func,isWalletConnected:n.exports.bool,balance:n.exports.oneOfType([n.exports.number,n.exports.string]),isMobile:n.exports.bool,openTokenModal:n.exports.func,baseNetwork:n.exports.object,setBaseNetwork:n.exports.func,destinationNetwork:n.exports.object,selectedToken:n.exports.object,handleAddAllowance:n.exports.func,allowanceForToken:n.exports.object,redeem:n.exports.object,processingPort:n.exports.object,ethTransactionFee:n.exports.shape({fee:n.exports.number,isEnoughBalance:n.exports.bool,isEnoughTokens:n.exports.bool,isFeeLoading:n.exports.bool}),approveLoading:n.exports.bool,allowanceLoading:n.exports.bool,handleWithdrawTokens:n.exports.func,withdrawLoading:n.exports.bool,txHash:n.exports.string,blockConfirmations:n.exports.number,networksByName:n.exports.object,setTitle:n.exports.oneOfType([n.exports.object,n.exports.string]),openConfirmTxModal:n.exports.func,openConnectWalletModal:n.exports.func.isRequired,walletBalance:n.exports.string,resetSwapAmount:n.exports.func,isTokenNative:n.exports.oneOfType([n.exports.bool,n.exports.string]),originNetworkId:n.exports.oneOfType([n.exports.string,n.exports.number]),portTx:n.exports.object,isRedeemOnGoing:n.exports.bool,nativeCoinRates:n.exports.object,isTokenCFB:n.exports.bool,tokenError:n.exports.string,setDestinationNetwork:n.exports.func,walletAddress:n.exports.string,calculatePortxFee:n.exports.func,recipientWalletAddress:n.exports.string,setRecipientWalletAddress:n.exports.func,cardanoBurnTx:n.exports.string,updateProgressBar:n.exports.func,networksById:n.exports.object,isTokenMainToMain:n.exports.bool,handleBalanceChange:n.exports.func,mainToMainObj:n.exports.object,liquidityAvaib:n.exports.object};const nn=[1,4,2,3,5,6],Pa=ze.memo(()=>{const e=c(N.networksByName),s=c(N.networksById),o=c(L.processingPort),m=c(L.baseNetwork),d=c(L.destinationNetwork),l=c(D.walletAddress),a=c(Y.portxFee),w=c(D.cardanoWalletAddress),p=c(Y.redeemTx),f=c(D.recipientWalletAddress),C=c(N.isMobile),_=i.exports.useMemo(()=>p&&o.base_network_id===e.CARDANO.id?w:l,[p,w,l,o.base_network_id,e.CARDANO.id]),k=i.exports.useMemo(()=>p&&o.base_network_id===e.CARDANO.id?l:f,[p,l,o.base_network_id,e.CARDANO.id,f]),h=i.exports.useMemo(()=>o?.target_network_id===e?.TELOS?.id?"address/":"token/",[o.target_network_id,e]),y=i.exports.useMemo(()=>[{label:u("myactivity.source_chain"),id:1,value:e[o.base_network]?.label_name},{label:u("modal.target_chain"),id:2,value:e[o.target_network].label_name},{label:u("stats.tokens_ported"),id:3,value:`${Ke(parseFloat(a?.amountBeforeFee),8)} ${o?.token?.symbol}`},{label:u("modal.token_address"),id:4,value:t("a",{href:`${s[o.target_network_id].explorer_url}${h}${o?.token?.web3_address}`,target:"_blank",rel:"noopener noreferrer",children:Ce(o?.token?.web3_address)})},{label:u("modal.wallet_address"),id:5,value:t("a",{href:`${s[o.target_network_id].explorer_url}address/${l}`,target:"_blank",rel:"noopener noreferrer",children:Ce(l)})},{label:u("modal.tokens_to_receive"),id:6,value:`${Ke(parseFloat(o?.amount),8)} ${o?.token?.symbol}`}],[e,o.base_network,o.target_network,o?.token?.symbol,o?.token?.web3_address,o.target_network_id,o?.amount,a?.amountBeforeFee,s,l,h]),S=i.exports.useMemo(()=>[{label:u("modal.tokens_received"),id:1,value:`${Ke(parseFloat(o?.amount),6)} ${o?.token?.symbol}`},{label:u("myactivity.source_chain"),id:2,value:e[o.base_network]?.label_name},{label:u("modal.target_chain"),id:3,value:e[o.target_network].label_name},{label:u("modal.token_address"),id:4,value:t("a",{href:`${s[o.target_network_id].explorer_url}token/${o?.token?.web3_address}`,target:"_blank",rel:"noopener noreferrer",children:Ce(o?.token?.web3_address)})},{label:u("modal.walletType",{networkName:s[o?.base_network_id]?.label_name}),id:5,value:t("a",{href:`${s[o?.base_network_id].explorer_url}address/${_}`,target:"_blank",rel:"noopener noreferrer",children:Ce(_)})},{label:u("modal.walletType",{networkName:s[o?.target_network_id]?.label_name}),id:6,value:t("a",{href:`${s[o?.target_network_id].explorer_url}address/${k}`,target:"_blank",rel:"noopener noreferrer",children:Ce(k)})}],[e,o?.base_network,o?.target_network,o?.token?.symbol,o?.token?.web3_address,o?.target_network_id,o?.base_network_id,_,k,s,o?.amount]),R=i.exports.useMemo(()=>C?S.sort((b,I)=>nn.indexOf(b.id)-nn.indexOf(I.id)):S,[S,C]),A=o?.base_network_id===e.CARDANO.id||d.blockchainType==="cardano"?R:y;return t(v.TransactionStat,{baseNetworkName:m?.name,children:A.map(({label:b,id:I,value:M})=>x("div",{children:[t("div",{children:b}),t("div",{children:M})]},I))})}),ja=e=>i.exports.createElement("svg",{width:44,height:44,viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.exports.createElement("circle",{cx:21.913,cy:21.913,r:21.913,fill:"#192A43"}),i.exports.createElement("g",{clipPath:"url(#clip0)"},i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2451 19.9385C14.0768 19.1936 15.3679 19.2497 16.1289 20.0637L21.2714 25.5644C22.0324 26.3784 21.9751 27.6421 21.1434 28.3869C20.3117 29.1318 19.0205 29.0757 18.2595 28.2617L13.1171 22.761C12.3561 21.947 12.4134 20.6833 13.2451 19.9385Z",fill:"#2FF6D3"}),i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.4274 15.4992C32.2245 16.2794 32.2245 17.5443 31.4274 18.3245L21.2091 28.3256C20.412 29.1058 19.1196 29.1058 18.3225 28.3256C17.5253 27.5454 17.5253 26.2804 18.3225 25.5002L28.5407 15.4992C29.3378 14.719 30.6302 14.719 31.4274 15.4992Z",fill:"#2FF6D3"})),i.exports.createElement("defs",null,i.exports.createElement("clipPath",{id:"clip0"},i.exports.createElement("rect",{width:21.1304,height:15.6522,fill:"white",transform:"translate(11.739 14.0869)"})))),Gt=({processedPort:e})=>{const s=c(N.networksById),o=c(N.isMobile),m=c($.isLifiToken);return x(v.TransactionInfo,{className:W({mobile:o}),children:[x("span",{children:[t("p",{children:u("modal.from")}),s[e?.base_network_id].label]}),x("span",{children:[t("img",{src:"./chainport-logo.png",alt:"chainport-logo"}),e?.target_tx_hash&&e?.base_tx_hash&&t(ja,{})]}),x("span",{children:[t("p",{children:u("modal.to")}),s[e?.target_network_id]?.label]}),m&&t(Xn,{})]})};Gt.propTypes={processedPort:n.exports.object};const Ga=()=>{const e=c(L.processingPort),s=c(N.networksById),o=c(N.networksByName),m=c(Y.cardanoBurnTx),d=c(L.baseNetwork),l=c(L.destinationNetwork),a=c(Y.cardanoBridgeVersion),w=i.exports.useMemo(()=>[{id:e.base_network_id,txHash:e.base_tx_hash,explorerUrlString:"tx/"},{id:e.target_network_id,txHash:e.target_tx_hash,explorerUrlString:`${d.blockchainType==="cardano"||l.blockchainType==="cardano"?"transaction/":"tx/"}`}],[e,d.blockchainType,l.blockchainType]),p=sn(),f=i.exports.useCallback(C=>C===o.ETHEREUM.id?`${u("modal.view_on",null,null,p)} EtherScan`:C===o?.ARBITRUM?.id?`${u("modal.view_on",null,null,p)} ArbiScan`:`${u("modal.view_on",null,null,p)} ${Jt.get(s[C].name)}`,[s,o,p]);return t(O,{children:e.base_network!=="CARDANO"?w.map(({id:C,txHash:_,explorerUrlString:k})=>x(v.CheckStatus,{href:`${s[C].explorer_url}${k}${_}`,target:"_blank",rel:"noopener noreferrer",children:[f(C),t(ge,{})]},C)):x(O,{children:[x(v.CheckStatus,{href:`${s[e.base_network_id].explorer_url}transaction/${e.base_tx_hash}`,target:"_blank",rel:"noopener noreferrer",children:["Deposit on Cardano Explorer",t(ge,{})]}),a===1&&x(v.CheckStatus,{href:`${s[e.base_network_id].explorer_url}transaction/${m}`,target:"_blank",rel:"noopener noreferrer",children:["Burn on Cardano Explorer",t(ge,{})]}),x(v.CheckStatus,{href:`${s[e.target_network_id].explorer_url}tx/${e.target_tx_hash}`,target:"_blank",rel:"noopener noreferrer",children:[e.target_network_id!==o.ETHEREUM.id?`${u("modal.release_on",null,null,p)} ${Jt.get(s[e.target_network_id].name)}`:`${u("modal.release_on",null,null,p)} EtherScan`,t(ge,{})]})]})})},Ut=({handleAddToken:e,disabled:s,tokenSymbol:o,walletName:m})=>x(xe,{style:{display:"flex",alignItems:"center",justifyContent:"center"},className:"primary w-100",id:"add-token-button",onClick:e,disabled:s,children:[t("span",{children:t(Kn,{style:{marginBottom:"-5px",marginRight:"9px",width:"34px",height:"34px"}})}),u("modal.add_to",{tokenSymbol:o,wallet_name:m})]});Ut.propTypes={handleAddToken:n.exports.func,disabled:n.exports.bool,tokenSymbol:n.exports.string,walletName:n.exports.string};const An=({processingPort:e,acknowledgePort:s,isMobile:o,networksById:m,networksByName:d,handleBaseNetworkChange:l,baseNetwork:a,providerName:w,isAckLoading:p,isToNative:f,portxFee:C,destinationNetwork:_,gasTransactionFee:k,gasUsed:h})=>{const y=c(N.nativeCoinRates),S=c($.isLifiToken),R=i.exports.useMemo(()=>parseFloat(f?e?.target_gasPrice:e?.base_gasPrice)||0,[f,e?.target_gasPrice,e?.base_gasPrice]),A=ft(k,R),b=i.exports.useMemo(()=>e?.target_tx_status,[e]),I=i.exports.useMemo(()=>a?.id===d.CARDANO.id?y?.[d.CARDANO.name]:f?e?.target_network===d.ETHEREUM.name?xn(y.ETHEREUM,A.fee):e?.target_network===d.CARDANO.name?pt(y[e?.base_network]*A.fee):pt(y[e?.target_network]*A.fee):pt(y[e?.base_network]*A.fee),[a?.id,d.CARDANO.id,d.CARDANO.name,d.ETHEREUM.name,f,y,e?.base_network,e?.target_network,A.fee]),M=async()=>{const U=window.ethereum||window.web3?.currentProvider;if(w!=="MetaMask")return null;e?.target_network_id===a.id?await U.sendAsync({method:"metamask_watchAsset",params:{type:"ERC20",options:{address:e.token?.web3_address,symbol:e.token?.symbol,decimals:e.token?.decimals}}}):(Ne.info(u("modal.switch_the_rpc"),{position:"top-left"}),l(m[e?.target_network_id]))},T=i.exports.useMemo(()=>p?t(v.StyledSpinner,{}):u("common.close"),[p]),F=i.exports.useMemo(()=>{const U=`~ 0.17 ADA ( ~ $${I})`,z=`${Je(e.base_gasPrice*h?.gasUsedWeb3Base)} ${a?.native_token_symbol} ( ~ $${I})`,H=`${Je(e.target_gasPrice*h?.gasUsedWeb3Destanation)} ${a?.native_token_symbol} ( ~ $${I})`;return a?.blockchainType==="cardano"?U:f&&_?.blockchainType==="cardano"?z:f?H:z},[I,e.base_gasPrice,e.target_gasPrice,a?.native_token_symbol,a?.blockchainType,f,_?.blockchainType,h]);return x(v.TransactionContainer,{className:W({mobile:o}),children:[t("div",{children:b&&t("p",{children:"Assets Arrived"})}),x("div",{children:[t(Gt,{isComplete:b,processedPort:e}),b&&e.base_tx_hash?x(O,{children:[t(Pa,{}),x(v.FeesBox,{children:[x("div",{className:"fee-field",children:[t("p",{className:"fee-label",children:u("modal.transaction_fee")}),t("p",{className:"fee-value",children:F})]}),x("div",{className:"fee-field",children:[t("p",{className:"fee-label",children:S?"Bridge Fee":"Port fee"}),t("p",{className:"fee-value",children:C?.is_portx_fee_payment?`${Ke(C?.portx_fee_amount,8)} PORTX`:`${Ke(C?.fee,8)} ${e.token?.symbol}`||"N/A"})]})]})]}):t(v.MintingContainer,{className:W({mobile:o}),children:x("p",{children:[_e(e.amount,3,!0)," ",e.token?.symbol]})}),x(v.ActionsContainer,{className:W({mobile:o,success:b}),children:[window?.ethereum?.isMetaMask&&window?._web3.currentProvider?.isMetaMask&&w==="MetaMask"&&e?.target_network_id!==d.CARDANO.id?t(Ut,{handleAddToken:M,disabled:!b||p,tokenSymbol:e.token?.symbol,walletName:hn()}):null,t(xe,{className:"secondary w-100 action",onClick:s,disabled:!b||p,children:t("div",{children:T})}),!b&&!!e.tx_hash_link&&x(v.CheckStatus,{href:e.tx_hash_link,target:"_blank",rel:"noopener noreferrer",children:[u("modal.check_tx")," ",t(ge,{})]}),b&&e.target_tx_hash&&e.base_tx_hash&&t(v.ScanContainer,{className:W({mobile:o}),children:t(Ga,{})})]})]})]})};An.propTypes={processingPort:n.exports.object.isRequired,acknowledgePort:n.exports.func.isRequired,isMobile:n.exports.bool,gasTransactionFee:n.exports.number,networksById:n.exports.object,networksByName:n.exports.object,handleBaseNetworkChange:n.exports.func,baseNetwork:n.exports.object,providerName:n.exports.string,isAckLoading:n.exports.bool,isToNative:n.exports.bool,portxFee:n.exports.object,destinationNetwork:n.exports.object,gasUsed:n.exports.number};const Ua=e=>i.exports.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.exports.createElement("g",{opacity:.7},i.exports.createElement("mask",{id:"path-1-inside-1_23688_95434",fill:"white"},i.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.75477 2.00001C6.75479 0.895436 7.65023 0 8.75479 0H9.99022C11.0948 0 11.9902 0.895437 11.9902 2.00001L11.9902 2.66857C12.5248 2.92144 13.0223 3.24004 13.4722 3.61394L14.1288 3.23488C15.0854 2.6826 16.3086 3.01034 16.8609 3.96692L17.4786 5.03684C18.0309 5.99341 17.7031 7.21658 16.7465 7.76886L15.9584 8.22389C15.9865 8.47872 16.0009 8.73768 16.0009 9C16.0009 9.26256 15.9865 9.52173 15.9583 9.77678L16.7412 10.2288C17.6977 10.7811 18.0255 12.0043 17.4732 12.9608L16.8555 14.0308C16.3032 14.9873 15.08 15.3151 14.1235 14.7628L13.4717 14.3865C13.0219 14.7602 12.5245 15.0787 11.99 15.3315L11.99 16C11.99 17.1046 11.0945 18 9.98998 18H8.75454C7.64998 18 6.75456 17.1046 6.75458 16L6.75458 15.6318C6.06529 15.3985 5.42416 15.0606 4.85003 14.6372L4.27574 14.9688C3.31915 15.521 2.09596 15.1933 1.54367 14.2367L0.925946 13.1668C0.373658 12.2102 0.701414 10.9871 1.65801 10.4348L2.0997 10.1798C2.03461 9.79623 2.00071 9.40208 2.00071 9C2.00071 8.59805 2.03459 8.20402 2.09964 7.8206L1.65268 7.56253C0.696095 7.01023 0.368342 5.78704 0.920624 4.83046L1.53834 3.76054C2.09062 2.80396 3.3138 2.47623 4.27039 3.02853L4.84973 3.36303C5.42399 2.93946 6.06528 2.60153 6.75477 2.36811L6.75477 2.00001Z"})),i.exports.createElement("path",{d:"M6.75477 2.00001L7.75477 2.00003V2.00003L6.75477 2.00001ZM11.9902 2.00001L12.9902 2.00003V2.00003L11.9902 2.00001ZM11.9902 2.66857L10.9902 2.66855L10.9902 3.30181L11.5626 3.57256L11.9902 2.66857ZM13.4722 3.61394L12.8331 4.38302L13.3689 4.82831L13.9722 4.47997L13.4722 3.61394ZM14.1288 3.23488L14.6288 4.10091L14.1288 3.23488ZM16.8609 3.96692L17.7269 3.46691V3.46691L16.8609 3.96692ZM17.4786 5.03684L16.6126 5.53684L17.4786 5.03684ZM16.7465 7.76886L17.2465 8.63489L16.7465 7.76886ZM15.9584 8.22389L15.4584 7.35786L14.8928 7.68439L14.9644 8.33353L15.9584 8.22389ZM15.9583 9.77678L14.9644 9.66705L14.8927 10.3162L15.4583 10.6428L15.9583 9.77678ZM16.7412 10.2288L17.2412 9.36275L16.7412 10.2288ZM17.4732 12.9608L18.3392 13.4608L17.4732 12.9608ZM16.8555 14.0308L15.9895 13.5308V13.5308L16.8555 14.0308ZM14.1235 14.7628L14.6235 13.8967L14.1235 14.7628ZM13.4717 14.3865L13.9717 13.5205L13.3684 13.1721L12.8326 13.6173L13.4717 14.3865ZM11.99 15.3315L11.5625 14.4275L10.99 14.6983L10.99 15.3315L11.99 15.3315ZM11.99 16L10.99 16V16L11.99 16ZM8.75454 18L8.75454 19H8.75454V18ZM6.75458 16L5.75458 16V16L6.75458 16ZM6.75458 15.6318L7.75458 15.6319L7.75459 14.9147L7.07528 14.6847L6.75458 15.6318ZM4.85003 14.6372L5.44359 13.8324L4.91686 13.4439L4.35004 13.7712L4.85003 14.6372ZM4.27574 14.9688L4.77574 15.8348H4.77574L4.27574 14.9688ZM1.54367 14.2367L0.677649 14.7367H0.677649L1.54367 14.2367ZM0.925946 13.1668L1.79197 12.6668H1.79197L0.925946 13.1668ZM1.65801 10.4348L1.15801 9.56875H1.15801L1.65801 10.4348ZM2.0997 10.1798L2.5997 11.0458L3.20198 10.6981L3.0856 10.0124L2.0997 10.1798ZM2.09964 7.8206L3.08555 7.98788L3.20188 7.30229L2.59966 6.95458L2.09964 7.8206ZM1.65268 7.56253L1.15267 8.42855H1.15267L1.65268 7.56253ZM0.920624 4.83046L1.78665 5.33046L0.920624 4.83046ZM1.53834 3.76054L2.40437 4.26054L1.53834 3.76054ZM4.27039 3.02853L3.77037 3.89455H3.77037L4.27039 3.02853ZM4.84973 3.36303L4.34972 4.22905L4.91658 4.55633L5.44333 4.16779L4.84973 3.36303ZM6.75477 2.36811L7.07544 3.3153L7.75476 3.08531L7.75477 2.36812L6.75477 2.36811ZM8.75479 -1C7.09793 -1 5.7548 0.343154 5.75477 2L7.75477 2.00003C7.75478 1.44772 8.20252 1 8.75479 1V-1ZM9.99022 -1H8.75479V1H9.99022V-1ZM12.9902 2.00003C12.9902 0.343173 11.6471 -1 9.99022 -1V1C10.5425 1 10.9902 1.4477 10.9902 2L12.9902 2.00003ZM12.9902 2.66858L12.9902 2.00003L10.9902 2L10.9902 2.66855L12.9902 2.66858ZM11.5626 3.57256C12.0206 3.78914 12.4471 4.06222 12.8331 4.38302L14.1114 2.84487C13.5976 2.41786 13.0291 2.05374 12.4177 1.76458L11.5626 3.57256ZM13.6288 2.36885L12.9722 2.74791L13.9722 4.47997L14.6288 4.10091L13.6288 2.36885ZM17.7269 3.46691C16.8985 2.03204 15.0637 1.54044 13.6288 2.36885L14.6288 4.10091C15.1071 3.82476 15.7187 3.98864 15.9948 4.46693L17.7269 3.46691ZM18.3446 4.53683L17.7269 3.46691L15.9948 4.46693L16.6126 5.53684L18.3446 4.53683ZM17.2465 8.63489C18.6814 7.80648 19.1731 5.97171 18.3446 4.53683L16.6126 5.53684C16.8887 6.01511 16.7248 6.62669 16.2465 6.90283L17.2465 8.63489ZM16.4584 9.08992L17.2465 8.63489L16.2465 6.90283L15.4584 7.35786L16.4584 9.08992ZM14.9644 8.33353C14.9885 8.55202 15.0009 8.77438 15.0009 9H17.0009C17.0009 8.70098 16.9845 8.40542 16.9524 8.11425L14.9644 8.33353ZM15.0009 9C15.0009 9.22582 14.9885 9.44837 14.9644 9.66705L16.9523 9.88651C16.9845 9.5951 17.0009 9.29929 17.0009 9H15.0009ZM17.2412 9.36275L16.4583 8.91076L15.4583 10.6428L16.2411 11.0948L17.2412 9.36275ZM18.3392 13.4608C19.1677 12.026 18.676 10.1912 17.2412 9.36275L16.2411 11.0948C16.7195 11.3709 16.8833 11.9826 16.6072 12.4608L18.3392 13.4608ZM17.7215 14.5308L18.3392 13.4608L16.6072 12.4608L15.9895 13.5308L17.7215 14.5308ZM13.6234 15.6288C15.0583 16.4572 16.8931 15.9656 17.7215 14.5308L15.9895 13.5308C15.7133 14.009 15.1018 14.1729 14.6235 13.8967L13.6234 15.6288ZM12.9717 15.2525L13.6234 15.6288L14.6235 13.8967L13.9717 13.5205L12.9717 15.2525ZM12.8326 13.6173C12.4467 13.938 12.0203 14.211 11.5625 14.4275L12.4175 16.2355C13.0288 15.9465 13.5971 15.5825 14.1108 15.1556L12.8326 13.6173ZM12.99 16L12.99 15.3315L10.99 15.3315L10.99 16L12.99 16ZM9.98998 19C11.6468 19 12.99 17.6568 12.99 16L10.99 16C10.99 16.5523 10.5422 17 9.98998 17V19ZM8.75454 19H9.98998V17H8.75454V19ZM5.75458 16C5.75456 17.6568 7.09768 19 8.75454 19L8.75454 17C8.20228 17 7.75457 16.5523 7.75458 16L5.75458 16ZM5.75458 15.6318L5.75458 16L7.75458 16L7.75458 15.6319L5.75458 15.6318ZM7.07528 14.6847C6.48532 14.4849 5.93601 14.1956 5.44359 13.8324L4.25648 15.442C4.91231 15.9257 5.64525 16.312 6.43389 16.579L7.07528 14.6847ZM4.77574 15.8348L5.35003 15.5032L4.35004 13.7712L3.77575 14.1027L4.77574 15.8348ZM0.677649 14.7367C1.50608 16.1716 3.34086 16.6632 4.77574 15.8348L3.77575 14.1027C3.29744 14.3789 2.68583 14.215 2.40969 13.7367L0.677649 14.7367ZM0.0599241 13.6668L0.677649 14.7367L2.40969 13.7367L1.79197 12.6668L0.0599241 13.6668ZM1.15801 9.56875C-0.27687 10.3972 -0.768517 12.2319 0.0599242 13.6668L1.79197 12.6668C1.51583 12.1885 1.6797 11.5769 2.158 11.3008L1.15801 9.56875ZM1.59971 9.31374L1.15801 9.56875L2.158 11.3008L2.5997 11.0458L1.59971 9.31374ZM3.0856 10.0124C3.02985 9.68395 3.00071 9.34577 3.00071 9H1.00071C1.00071 9.45838 1.03936 9.90851 1.1138 10.3471L3.0856 10.0124ZM3.00071 9C3.00071 8.65434 3.02983 8.31627 3.08555 7.98788L1.11373 7.65331C1.03934 8.09177 1.00071 8.54177 1.00071 9H3.00071ZM1.15267 8.42855L1.59963 8.68662L2.59966 6.95458L2.15269 6.69652L1.15267 8.42855ZM0.0545992 4.33046C-0.773829 5.76534 -0.282191 7.60011 1.15267 8.42855L2.15269 6.69652C1.67438 6.42035 1.51051 5.80874 1.78665 5.33046L0.0545992 4.33046ZM0.672318 3.26054L0.0545992 4.33046L1.78665 5.33046L2.40437 4.26054L0.672318 3.26054ZM4.7704 2.16251C3.33553 1.33407 1.50075 1.82566 0.672318 3.26054L2.40437 4.26054C2.6805 3.78227 3.29207 3.6184 3.77037 3.89455L4.7704 2.16251ZM5.34975 2.49701L4.7704 2.16251L3.77037 3.89455L4.34972 4.22905L5.34975 2.49701ZM5.44333 4.16779C5.93586 3.8045 6.48532 3.51508 7.07544 3.3153L6.4341 1.42091C5.64525 1.68798 4.91211 2.07442 4.25613 2.55827L5.44333 4.16779ZM5.75477 2L5.75477 2.36809L7.75477 2.36812L7.75477 2.00003L5.75477 2Z",fill:"white",mask:"url(#path-1-inside-1_23688_95434)"}),i.exports.createElement("circle",{cx:9,cy:9,r:2.5,stroke:"white"})));r.div`
  height: 100%;
  width: 100%;
  background: red;
`;const on=r.section`
  font-family: 'Roboto';
  border-radius: 20px;
  background: ${g.dark_bg};
  margin: 9% auto 30px auto;
  ${E.flexItXY("flex-start","center")}
  flex-direction: column;
  max-width: ${e=>e.width||"535"}px;
  width: 100%;
  position: relative;
  overflow: hidden;

  ${({theme:e})=>e.isMobile&&V`
    margin-bottom: 30px;
  `}

  @media only screen and (max-width: 632px) {
    border-radius: 0;
    max-width: 632px;
    margin-top: ${e=>e.isBannerShown?"25px":"0"};
    margin-left: auto;
    margin-right: auto;
  }

  .w-100 {
    width: 100%;
  }

  .status-wrapper {
    display: flex;
    width: 88%;
    justify-content:space-evenly;

    ${({theme:e})=>e.isMobile&&V`
      flex-direction: column;
      align-items: center;
    `}
  }
`,qa=r.header`
  width: 100%;
  color: ${g.white};
  ${E.flexItXY("center","center")};
  border-bottom: 1px solid ${g.form_inp_bg};
  font: normal normal 700 25px/29px Roboto;
  display: flex;
  position: relative;
  flex-direction: row;
  padding: 25px 0;
`;r.div`
  background: #bb8500;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 5px;
  display: flex;
  // align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 30px;

  svg {
    margin-right: 6px;
    width: 40px;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }

  &.mobile {
    padding-left: 15px;
    padding-right: 15px;
  }
`;const Ya=r.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 10px 30px;

  &.wallet-connected.mobile {

  }

  &.withdraw-section {

    &.mobile {

    }
  }

  &.disabled {
    opacity: 0.8;
    pointer-events: none;
  }
`;r.div`
  margin-bottom: 30px;

  &.mobile {
    margin-bottom: 20px;
  }
`;r.div`
  display: flex;

  &.mobile {
    flex-direction: column;
  }
`;r.div`
  ${E.flexItXY("center","center")}
`;r.div`
  width: 40px;
  height: 40px;
  ${E.flexItXY("center","center")}
  background-color: ${g.gray_extra_light};
  color: ${g.white};
  border-radius: 5px;
  font: normal normal bold 18px/21px Roboto;
`;r.div`
  width: 145px;
  height: 1px;
  background-color: ${g.gray_light};
  margin: 0 22px;
`;r.div`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
  input.dark {
    padding: 0 63px 0 20px;
    font-weight: 500;
    font-size: 18px;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  ${({theme:e})=>e.isMobile&&V`
    margin-bottom: 20px;
    width: 100%;
  `}
`;r.div`
  align-self:end;
  width: 45%;

  margin-bottom: 30px;
  &.mobile {
    margin-bottom: 20px;
    width: 100%;
  }
`;r.div`
  margin-top: 10px;
`;r.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
`;r.span`
  font: normal normal 500 16px/19px Roboto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding:0 30px 0 30px;
  line-height:25px;

 


  &.loading {
    & > div {
      margin: unset;
      margin-right: 20px;
    }

    @media screen and (max-width: 400px) {
      padding-left: 40px;
    }
  }

  &.center {
    & > div {
      margin: unset;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
`;r.div`
  text-transform: uppercase;
  text-decoration: underline;
  font: normal normal normal 16px/19px Roboto;
  position: absolute;
  bottom: 12px;
  right: 20px;
  cursor: pointer;
  color: ${g.gray_light};
  -webkit-transition: all .35s ease;
  transition: all .35s ease;

  &:hover {
    -webkit-transition: all .35s ease;
    transition: all .35s ease;
    color: ${g.aqua_bg};
  }
`;r.div`
  ${E.flexItXY("center","center")}
  background-color: ${g.gray_extra_light};
  border-radius: 5px;
  min-height: 40px;
  padding: 0 20px;
  margin-bottom: 20px;

  & > svg {
    margin: 0 10px;
  }
`;r.div`
  background-color: ${g.gray_extra_light};
  border-radius: 5px;
  min-height: 40px;
  padding: 10px 20px;

  & > div:first-of-type {
    ${E.flexItXY("center","center")}
    margin-bottom: 8px;
    & > svg {
      margin: 0 10px;
    }
  }
  & > div:last-child {
    ${E.flexItXY("space-between","center")}
  }
`;r.label`
  font: normal normal normal 16px/19px Roboto;
  text-transform: capitalize;
  color: ${g.gray_light};

  &.small {
    font: normal normal normal 14px/16px Roboto;
  }
`;r.span`
  color: ${g.white};
  font: normal normal bold 18px/21px Roboto;

  &.small {
    font: normal normal normal 14px/16px Roboto;
  }
`;r.div`
  margin: 0 8px;
`;r.div`
  margin: 0 25px;
`;r.div`
  margin-bottom: 20px;
  & > div {
    ${E.flexItXY("space-between")}
    margin-bottom: 20px;
  }

  & + button {
    margin-bottom: 10px;
  }

  &.mobile {
    & > div {
      margin-bottom: 10px;
    }
  }
`;r.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 20px;
`;r.div`
  padding: 20px 20px 10px;
  border-bottom: 1px solid ${g.gray_extra_light};
`;r.div`
  font: normal normal bold 25px/29px Roboto;
  color: ${g.aqua_bg};
  padding: 0 0 20px;
  ${E.flexItXY("center")}
`;r.div`
`;r.div`
  font: normal normal normal 16px/19px Roboto;
  text-align: center;
  margin-bottom: 20px;
`;const an=r.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-sizing: border-box;
  background-color: ${g.form_inp_bg};
  color: ${g.white};
  padding: 0 9px 0 20px;
  cursor: pointer;


  font: normal normal bold 18px/21px Roboto;

  
  &.disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.5;
  }

  &.fake-input {
    border-radius: 5px;
    ${E.flexItXY("flex-start","center")};
    cursor: auto;

    svg {
      margin-right: 6px;
    }
  }

  ${({theme:e})=>e.isMobile&&V`
    border-radius: 5px;
  `}

  ${E.flexItXY("space-between","center")};

  & > span {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 120px;
    white-space: nowrap;
    font-weight: 500;
  }
`;r.div`
  position: absolute;
  left: 0;
  bottom: -20px;
  font: normal normal normal 12px/14px Roboto;
  opacity: 0.5;
  color: ${g.red};
`;r.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  background: ${g.gray_extra_light};
  border-radius: 5px;
  word-break: break-all;
  &.mobile {
    height: 75px;
  }

  &.copy-destination-address {
    padding: 0 17px;
  }

  svg {
    cursor: pointer;
  }
`;r.div`
  color: ${g.white};
  font-size: 16px;
  line-height: 19px;
  border: none;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;r(Pt)`
`;const Xa=r.span`
  width: 100;
  display: inline-block;
  position: relative;
  margin-bottom: 30px;

  &:before {
    content: '';
    width: calc(100% + 60px);
    height: 1px;
    background: ${g.gray_extra_light};
    position: absolute;
    bottom: 0;
    left: -30px;
  }
`;r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 27, 67, 0.9);
  z-index: 1;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;r.div`
max-width: 535px;
width: 100%;
  background: #00132f;
  border-radius: 25px;
  margin: 0px auto;
  margin-top: ${({theme:e})=>e.isBannerShown?"150px":"100px"};

  & > div:first-of-type {
    height: 65px;
    border-bottom: 1px solid ${g.gray_extra_light};
    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
      font-size: 25px;
      padding: 0 10px;
      font-weight: bold;
      margin: unset;
      text-align: center;
    }
  }

  & > div:last-of-type {
    & > svg {
      display: block;
      margin: 30px auto;
    }

    ul {
      list-style: none;
      padding: unset;

      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    }

    a {
      display: block;
      text-align: center;
      color: ${g.gray_extra_light4};
    }

      rect{
        stroke: ${g.gray_extra_light4};
      }
      line{
        stroke: ${g.gray_extra_light4};
    }
  }

  #add-token-button{
    min-height:40px;
    margin-bottom:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:  ${g.main_bg};
  }

  .fee-value{
    font-size: 14px;
  }

  &.mobile {
    width: 90%;
    margin-top: 50px;
  }

  @media (max-height: 570px) {
    margin-top: 350px;
    border-radius: 0px;

  }
`;r.div`
  display: flex;
  padding:30px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${g.gray_extra_light};

  &.mobile {
    padding-bottom: 10px;
    & > span {
      &:not(:nth-of-type(2)) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(-28px);

        & > p {
          margin-right: unset;
        }
      }

      &:nth-of-type(2) {
        @media screen and (max-width: 340px) {
          &:before {
            width: 30px;
            left: -40px;
          }

          &:after {
            width: 30px;
            right: -40px;
          }
        }
      }

      &:first-of-type {
        svg {
          width: 25px;
          height: 40px;
        }
      }

      &:last-of-type {
        svg {
          width: 40px;
          height: 40px;
          margin-left: 5px;
        }
      }

      &:nth-of-type(2) {
        img {
          width: 50px;
          height: 50px;
        }

        svg {
          width: 25px;
          height: 25px;
          right: -15px;
        }
      }
    }
  }

  &.portout {
    padding: unset;
    border-bottom: unset;
    margin-bottom: 50px;
  }

  & > span {
    display: flex;

    img{
      height:85px;
    }



    p {
      margin-right: 20px;
      margin-top: 18px;
      color: rgba(255, 255, 255, 0.5);
    }
  
   
    .network-label span {
      display: none;
    }
   
    .network-label img {
       height: ${({theme:e})=>e.isMobile?"41px":"57px"};

    }


    // svg {
    //   height: 50px;
    // }
    
    &:nth-of-type(2) {
      position: relative;
      &:before {
        content: '';
        width: 40px;
        height: 1px;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        display: inline-block;
        left: -65px;
        top: 50%;
      }
      &:after {
        content: '';
        width: 40px;
        height: 1px;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        display: inline-block;
        right: -65px;
        top: 50%;
      }

      & > svg {
        width: 40px;
        height: 40px;
        position: absolute;
        right: -20px;
        top: -10px;
      }
    }
  }

  span:last-child{
    margin-left:20px;
    margin-right:15px;
  }
`;r.div`
  padding: 30px 30px 0px 30px;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  justify-content: center;
  border-bottom: 1px solid ${g.gray_extra_light};
  font-size: 18px;

  ${({theme:e})=>e.isMobile&&V`
  grid-template-columns: 1fr 1fr;
  `}
 
  & > div {
    padding-left: 5px;
    margin-bottom:23px;
   
    &:nth-child(-n+3) {
     font-weight:700;
    }


    &:nth-child(6) {
      font-weight: ${e=>e.baseNetworkName==="CARDANO"?"":"700"} 
    }
    & > div {
      &:first-of-type {
        font-size:14px;
        color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
        margin-bottom:12px;
        font-weight:400;
      }

    
    }

   
    a{
      color: ${g.white} !important;
      text-align: left !important;
    }

  }

  ${({theme:e})=>e.isMobile&&V`

  `}

`;const Ka=r.a`
  transform: translateY(-15px);
  text-decoration: underline;
  color: ${g.aqua_bg}; 
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;

  -webkit-transition: all .5s ease;
  transition: all .5s ease;

  svg g, svg path {
    stroke: ${g.aqua_bg}
  }

  &:not(:disabled):hover {
    color: ${g.white};
    -webkit-transition: all .35s ease;
    transition: all .35s ease;

    svg g, svg path {
      stroke: ${g.white}
    }

    path {
      stroke: ${g.white}
    }
  }

  & > svg {
    margin-left: 5px;
 g{
  opacity: 1;
 }
    path {
      stroke: ${g.aqua_bg}
    
    }
  }
`;r.div`
  padding: 30px;
  box-sizing: border-box;

  &.mobile {
    padding-top: unset;

    &.success {
      padding: 30px;
    }
  }
`;r.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  line-height: 28px;

  & > a {
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }

  &.mobile {
    flex-direction: column;

    & > a:first-of-type {
      margin-bottom: 20px;
    }
  }
`;r.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: unset;

  &.mobile {
    & > p {
      margin-bottom: 15px;
    }
  }
`;r.a`
  display: flex;
  align-items: center;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  font-size: 14px;
 

  &:not(:disabled):hover {
    color: ${g.white};
    -webkit-transition: all .35s ease;
    transition: all .35s ease;

    svg g, svg path {
      opacity:1;
      stroke: ${g.white}
    }
  }

  svg {
    margin-left: 7px;
  }
`;r.span`
margin-left:11px;
line-height:1.5;

@media only screen and (max-width: 500px) {

  font-size: 13px;


}
@media only screen and (max-width: 376px) {

  font-size: 11px;


}
`;r.div`
margin-left:25px;
margin-right:25px;
text-align:center;
line-height:30px;
margin-bottom:20px;
color: ${({theme:e})=>e.gray_light};
font-size:12px;

@media (max-width: 800px){
  margin-top: 0px;
}


`;r.span`

  text-decoration: underline;
  margin-right:4px;
  color: ${({theme:e})=>e.gray_light};

  &:hover {
    color: ${g.aqua_bg};
    cursor: pointer;
   
  }

`;r.span`

  &:hover {
    opacity: 0.5;
    transition: all 420ms cubic-bezier(0.165, 0.84, 0.44, 1);

  }
`;r.div``;r.div``;r.div.attrs(e=>({style:{backgroundImage:`url(${e.background})`}}))`
margin-left:-10px;
margin-right:14px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${g.navy_dark};
  background-size: 28px;
  background-position: center;
  background-repeat: no-repeat;

`;r(X)`
  position: relative;

  border: 5px solid ${g.aqua_bg};


  &:before {
    background: ${g.main_bg};
  }
`;r.div`
padding-left:15px;
`;r.div`
  display: flex;
  width: 100%;
  padding:10px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid  ${({theme:e})=>e.gray_extra_light} ;

  ${({theme:e})=>e.isMobile&&V`
    padding: 10px 35px;
    flex-direction: column;
    align-items: center;
  `}

  &:nth-child(2n) {
    margin-right:40px;
    font-size: 14px;

  }
  .fee-field {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    ${({theme:e})=>!e.isMobile&&V`
      &:not(:last-of-type) {
        padding-right: 20px;
      }
    `}

    .fee-label {
      font-size: 14px;
      line-height: 22px;
      margin-right:13px;
      color: ${({theme:e})=>e.gray_light};
      white-space: nowrap;
      margin-bottom:13px;
    }
  }
`;r.div`
  display: flex;
  justify-content: space-between;

  //change width of modal token input
  & > div {
   width:220px;
  }


  ${({theme:e})=>e.isMobile&&V`
    flex-direction: column;
    & > div {
      width:100%;
     }
  `};
`;r.div`
  display: flex;
  align-items: center;
  `;r(Ua)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 10px);
  right: 20px;
`;const dt=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 14px;
 &:last-of-type {
    margin-bottom: 10px;
  }
  
  .label {
    display: flex;
    flex-wrap: wrap;
 
    color: ${({theme:e})=>e.gray_light};
    font-size: 14px;
    .last-word, .label-text {
      margin-right: 5px;
      margin-left: 2px;
    }
  }

  .value {
    font-size: 16px;
    color: ${({theme:e})=>e.whiteWithOpacity};
    text-align: right;

   
  }
  `,In=e=>{const s=c(D.walletAddress),{data:o}=bt({queryKey:["token_blances",e.map(m=>m.web3_address)],queryFn:async()=>(await Promise.all(e.map(async d=>{try{const l=await B.getTokenMetaFromAddress(d?.web3_address,d?.network_name),a=await B.getTokenBalance(d.web3_address,s,d.chain_id);return{balanceWei:a,balance:B.fromWei(a,parseInt(l.decimals,10)),web3_address:d.web3_address}}catch(l){console.error(l)}}))).reduce((d,l)=>l?{...d,balances:{...d?.balances,[l.web3_address]:l.balance},balancesWei:{...d?.balancesWei,[l.web3_address]:l.balanceWei}}:d,{balances:{},balancesWei:{}}),enabled:!!s});return{data:o}},Ja=()=>{const e=c(L.swapAmount),s=c(D.isWalletConnected),o=c(L.isUserInputBalanceMax),m=c(N.networksByName),d=c($.sourceToken),{data:l}=In([d]),a=ke(),w=l?.balances?.[d?.web3_address],p=S=>a(S===""?Qe(0):Qe(S?parseFloat(S):"")),f=(S,R)=>{!R.event||p(S.floatValue)},C=()=>{if(!e)return p("0")},_=()=>{o&&a(Qt(!1))},k=async()=>{a(Qt(!0)),a(Qe(w||0))},h=!s||!d?.web3_address||!w||Number(w)<=0,y=d.network_name===m.CARDANO.name?6:void 0;return t("div",{style:{width:"100%"},children:t(Jn,{className:W({disabled:h}),portAmountText:`Balance: (${_e(w)||0})`,swapAmount:e,onChange:_,onAmountChange:f,decimalScale:y,handleSetMaxAmount:k,onAmountBlur:C})})},Z={Loading:"Loading",Approve:"Approve",ApproveConfirmWallet:"ApproveConfirmWallet",ApproveLoading:"ApproveLoading",OpenConfirmTxModal:"OpenConfirmTxModal",PortToken:"PortToken",SwapToken:"SwapToken",SelectTokenAndAmount:"SelectTokenAndAmount",BalaceExceeds:"BalaceExceeds",ConfirmTxInWallet:"ConfirmTxInWallet",PortingInProcess:"PortingInProcess",FinalConfirmation:"FinalConfirmation",MinBlockConfirmations:"MinBlockConfirmations",FetchingPortFunction:"FetchingPortFunction",ConfirmingSwap:"ConfirmingSwap",MinimumAmountRequired:"MinimumAmountRequired"},Qa=(e,s,o,m)=>{const d=c(L.swapAmount),l=c(Y.txHash),a=c(L.baseNetwork),w=c(L.destinationNetwork),p=c($.sourceToken),f=c($.destinationToken),[C,_]=ze.useState(!1),k=o?.functionCall&&(se[o?.functionCall]?un(a.id):fn(a.id)),h=o?.functionCall&&(se[o?.functionCall]?"pool":"stableBridge"),{refetch:y,isFetching:S}=Qn(k,[p],{[p?.web3_address]:d}),{mutateAsync:R,isLoading:A}=eo(),{data:b}=In([p]),I=b?.balances?.[p?.web3_address];ze.useEffect(()=>{const H=async()=>{const{data:ne}=await y();_(ne?.[0]?.isApproveRequired)};d>0&&!l&&H()},[d,p.web3_address,y,k,A,l]);const{isLoading:M,txHash:T,blockConfirmations:F}=e;return{[Z.Approve]:{text:`Approve ${p?.name}`,disabled:!1,action:async()=>{R({token:p,swapAmount:d,contractType:h},{onSuccess:()=>{_(!1)}})},state:"approve",className:"primary w-100 action"},[Z.ApproveConfirmWallet]:{text:x(O,{children:[t(X,{}),"Confirm Approve Tx in your wallet"]}),disabled:!0,action:me,state:"ApproveConfirmWallet",className:"primary w-100 action opacity7"},[Z.ApproveLoading]:{text:x(O,{children:[t(X,{}),`Approving ${p.name}`," "]}),disabled:!0,action:me,state:"approveLoading",className:"primary w-100 action opacity7"},[Z.OpenConfirmTxModal]:{text:t(X,{}),disabled:!0,action:()=>{},state:"OpenConfirmTxModal",className:"primary w-100 action"},[Z.PortToken]:{text:`Port ${_e(d)} ${p?.name}`,disabled:!1,action:m,state:"PortToken",className:"primary w-100 action"},[Z.SwapToken]:{text:`Swap ${_e(d)} ${p?.name}`,disabled:!1,action:m,state:"SwapToken",className:"primary w-100 action"},[Z.ConfirmingSwap]:{text:x(O,{children:[t(X,{}),"Swapping ",_e(d)," ",p?.name]}),disabled:!0,action:m,state:"ConfirmingSwap",className:"primary w-100 action"},[Z.SelectTokenAndAmount]:{text:t(O,{children:"Select Token and Amount"}),disabled:!0,action:me,state:"selectTokenAndAmount",className:"primary w-100 action opacity7"},[Z.BalaceExceeds]:{text:t(O,{children:"Insufficient balance"}),disabled:!0,action:me,state:"balaceExceeds",className:"primary w-100 action opacity7"},[Z.ConfirmTxInWallet]:{text:t(O,{children:"Confirm Tx in your wallet"}),disabled:!0,loading:!0,action:me,state:"ConfirmTxInWallet",className:"primary w-100 action opacity7"},[Z.PortingInProcess]:{text:x(O,{children:[t(X,{}),u("modal.confirmations",{displayedConfirmations:F||"0",minConfirmations:a?.minimum_confirmation})]}),disabled:!0,action:me,state:"PortingInProcess",className:"primary w-100 action opacity7"},[Z.FinalConfirmation]:{text:x(O,{children:[t(X,{}),u("common.final_confirmation")]}),disabled:!0,action:me,state:"FinalConfirmation",className:"primary w-100 action opacity7"},[Z.MinBlockConfirmations]:{text:x(O,{children:[t(X,{}),u("modal.confirmations",{displayedConfirmations:a?.minimum_confirmation,minConfirmations:a?.minimum_confirmation})]}),disabled:!0,action:me,state:"MinBlockConfirmations",className:"primary w-100 action opacity7"},[Z.FetchingPortFunction]:{text:t(X,{style:{marginLeft:200}}),disabled:!0,action:me,state:"FetchingPortFunction",className:"primary w-100 action opacity7"},[Z.MinimumAmountRequired]:{text:`The minimum amount required is greater than ${o?.error?.errorData?.minAmount} ${p?.name}`,disabled:!0,action:me,state:"MinimumAmountRequired",className:"primary w-100 action opacity7"}}[(()=>o?.error?.errorCode?Z.MinimumAmountRequired:I&&d>Number(I)?Z.BalaceExceeds:s||S?Z.FetchingPortFunction:C&&!A&&d?Z.Approve:!l&&!d?Z.SelectTokenAndAmount:a.id===w.id&&T?Z.ConfirmingSwap:F>a.minimum_confirmation+5?Z.FinalConfirmation:F>a.minimum_confirmation?Z.MinBlockConfirmations:!l&&A?Z.ApproveConfirmWallet:l&&A?Z.ApproveLoading:M&&!T?Z.ConfirmTxInWallet:M&&T?Z.PortingInProcess:(a.id===w.id||f.symbol!==p.symbol)&&f.symbol!==p.symbol?Z.SwapToken:Z.PortToken)()]},ei=(e,s,o,m)=>{const d=c(D.walletAddress),l=c(L.baseNetwork),a=c(N.networksById),w=c(L.destinationNetwork),p=c($.destinationToken),f=c(N.progressBarStep),C=c($.sourceToken),_=c(L.swapAmount),[k,h]=i.exports.useState(null),[y,S]=i.exports.useState(0),[R,A]=i.exports.useState(null),b=ke();let I;const{mutate:M,...T}=to({mutationFn:async({existingTxHash:F}={})=>{localStorage.removeItem("isSuccessPort");const U=F??await s?.();b(Xe(f+1)),b(Ht(U));const z=await no(d,U);if(z&&se[e]){b(Ht(z.transactionHash));const H=z.logs[2].data,ne=parseInt(H,16),j=new ut(ne).toFixed();localStorage.setItem("portSuccessData",JSON.stringify({functionCall:e}));const oe={target_tx_hash:z.transactionHash,target_network_id:w.id,base_tx_hash:z.transactionHash,base_network:l.name,base_network_id:l.id,tx_gas_price:"",amountReceived:j.toLocaleString(),functionCall:e,targetToken:null},le=await B.getTransactionGasPrice(oe.target_tx_hash,a[oe.target_network_id].chainId);return oe.tx_gas_price=le,oe.targetToken=p,A(oe),z.transactionHash}if(z&&(b(Xe(f+1)),h(z.transactionHash),I=setInterval(async()=>{const H=await oo(z.transactionHash,l.id);b(ao(H,!0)),H>l.minimum_confirmation&&b(Xe(f+1)),S(H)},6e3)),z.status){await io(d);const H=await ro(d);await so(d);const ne=await B.getTransactionGasPrice(H.base_tx_hash,a[H.base_network_id].chainId);H.tx_gas_price=ne,localStorage.setItem("portSuccessData",JSON.stringify({sourceToken:C,gasPrice:H.tx_gas_price,swapAmount:_,baseNetwork:l,functionCall:e,fee:o,destinationNetwork:w})),b(Xe(f+1));const J=await lo(H.base_network_id,H.base_tx_hash);H.swap_success=J?.swap_success,H.targetToken=J?.target_stable_token_obj,H.targetChainportToken=J?.target_chainport_usd_obj,H.targetToken.web3_address=J?.target_stable_token_obj.token_address,H.amountReceived=J?.amount_received,A(H)}return clearInterval(I),U},onError:F=>{Ne.error(F.message)},onSettled:()=>{clearInterval(I),b(Ht(null)),S(0)},...m});return{port:M,txHash:k,blockConfirmations:y,processedPort:R,...T}},ti=({walletAddress:e,sourceToken:s,destinationToken:o,isTokenStable:m,swapAmount:d})=>m?["function_caller",e,s?.web3_address,o?.web3_address,d]:["function_caller",e,s?.web3_address,d],ni=()=>{const e=c(D.walletAddress),s=c(L.baseNetwork),o=c($.sourceToken),m=c($.destinationToken),d=c(N.networksByName),l=c(L.swapAmount),a=c($.isTokenStable),w=Wo(B.toWei(l,o?.decimals),500),{data:p,isFetching:f}=bt({queryKey:ti({walletAddress:e,sourceToken:o,destinationToken:m,isTokenStable:a,swapAmount:w}),queryFn:async()=>{const C=a?"stables":"alt",{data:_}=await Dt.get(`/${C}/function_caller`,{params:{source_token_address:o.web3_address,source_token_amount_in_wei:w,source_network_id:d[o.network_name]?.id,target_network_id:d[m.network_name]?.id,user_address:e,...a?{target_token_address:m.web3_address}:void 0}});localStorage.removeItem("portSuccessData");const h=await(async()=>{const S={from:e,estimateGas:!0};let R;if(s.id===d.POLYGON.id)R=(await mn())?.maxFee;else{const b=await De.injectGasPrice(S,!0)/1e9;R=new ut(b).toFixed()}return R})();return{portFunction:async()=>{const S=fn(s.id),R=un(s.id),b=(se[_.function_call]?De.getPoolContract(R):De.getStableBridgeContract(S)).methods[_.function_call](..._.attributes),I=0,M={from:e,gasPrice:(h*10**9).toFixed()},T=await De.estimateGas(b,M,I);return co(b.send,[{...M,gas:T,value:I}])},slippage:_?.slippage,fee:_?.fee,sourceToken:_?.source_token,targetToken:_?.target_token,functionCall:_?.function_call,error:{errorCode:_?.errorCode,errorData:_?.errorData},gasFee:h}},refetchOnWindowFocus:!1,enabled:!!e&&!!o&&!!m&&!!l&&Number(w)>0});return{data:p,isFetching:f}},oi=r.div`
width: 100%;
.port-successful-text{
  font-size: 22px;
  text-align: center;
  font-weight: 600;
  padding: 30px 0;
  border-bottom: 1px solid ${({theme:e})=>e.gray_extra_light};
}

.text-icon-wrapper {
  display: flex;
  align-items: center;
  padding:30px;

  svg {
    width: 15px;
    height: 15px;
  }
}

.low-slippage-tolerance-warning-text {
  color:${({theme:e})=>e.yellow03};
  line-height: 16px;
  font-size: 12px;
  margin-left: 17px;
}
`,ai=r.div``,ii=r.div`
  margin: 30px 30px 0px 30px;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  font-size: 18px;
  line-height: 27px;



  ${({theme:e})=>e.isMobile&&V`
  grid-template-columns: 1fr 1fr;
  `}

  & > div {
    padding-left: 5px;
    margin-bottom:23px;

    &:nth-child(-n+2) {
     font-weight:700;
    }


      

   
       
   

    a{
      color: ${g.white} !important;
      text-align: left !important;
    }

  }

  ${({theme:e})=>e.isMobile&&V`

  `}

`,ri=r.div`
font-size:14px;
      font-size: 14px;
      margin-bottom:10px;
      font-weight:400;
`,si=r.div`
color:  'rgba(255, 255, 255, 0.5)';
    & > a {
      &:hover {
        color: ${g.aqua_bg} !important;
      }
    }
   
`,li=r.a`
  transform: translateY(-15px);
  text-decoration: underline;
  color: ${g.aqua_bg}; 
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;

  -webkit-transition: all .5s ease;
  transition: all .5s ease;

  svg g, svg path {
    stroke: ${g.aqua_bg}
  }

  &:not(:disabled):hover {
    color: ${g.white};
    -webkit-transition: all .35s ease;
    transition: all .35s ease;

    svg g, svg path {
      stroke: ${g.white}
    }

    path {
      stroke: ${g.white}
    }
  }

  & > svg {
    margin-left: 5px;
 g{
  opacity: 1;
 }
    path {
      stroke: ${g.aqua_bg}
    
    }
  }
`,ci=r.div`
  padding: 30px;
  box-sizing: border-box;

  &.mobile {
    padding-top: unset;

    &.success {
      padding: 30px;
    }
  }
`,di=r.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  line-height: 28px;

  & > a {
    display: flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }

  &.mobile {
    flex-direction: column;

    & > a:first-of-type {
      margin-bottom: 20px;
    }
  }
`,pi=r.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: unset;

  &.mobile {
    & > p {
      margin-bottom: 15px;
    }
  }
`,mi=r.a`
  display: flex;
  align-items: center;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  font-size: 14px;
 

  &:not(:disabled):hover {
    color: ${g.white};
    -webkit-transition: all .35s ease;
    transition: all .35s ease;

    svg g, svg path {
      opacity:1;
      stroke: ${g.white}
    }
  }

  svg {
    margin-left: 7px;
  }
`,gi=r.div`
  display: flex;
  width: 100%;
  padding:10px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid  ${({theme:e})=>e.gray_extra_light} ;
  border-top: 1px solid  ${({theme:e})=>e.gray_extra_light} ;

  ${({theme:e})=>e.isMobile&&V`
    padding: 10px 35px;
    flex-direction: column;
    align-items: center;
  `}

  &:nth-child(2n) {
    margin-right:40px;
    font-size: 14px;

  }
  .fee-field {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    ${({theme:e})=>!e.isMobile&&V`
      &:not(:last-of-type) {
        padding-right: 20px;
      }
    `}

    .fee-label {
      font-size: 14px;
      line-height: 22px;
      margin-right:13px;
      color: ${({theme:e})=>e.gray_light};
      white-space: nowrap;
      margin-bottom:13px;
    }
  }
`,Se={CheckStatus:mi,MintingContainer:pi,ScanContainer:di,ActionsContainer:ci,TransactionStat:ii,TransactionInfo:ai,CheckTx:li,TransactionContainer:oi,FeesBox:gi,Label:ri,Value:si},xi=r.a`
display: flex;
align-items: center;
justify-content: center;
color:  ${({theme:e})=>e.gray_extra_light4};
-webkit-transition: all .5s ease;
transition: all .5s ease;
font-size: 14px;


&:not(:disabled):hover {
  color:  ${({theme:e})=>e.white};
  -webkit-transition: all .35s ease;
  transition: all .35s ease;

  svg g, svg path {
    opacity:1;
    stroke:  ${({theme:e})=>e.white};
  }
}

svg {
  margin-left: 7px;
}
`,rn={CheckStatus:xi},Bn=({processedPort:e})=>{const s=c(N.networksById),o=c(N.networksByName),m=c(L.destinationNetwork),d=sn(),l=i.exports.useCallback(a=>a===o.ETHEREUM.id?`${u("modal.view_on",null,null,d)} EtherScan`:a===o?.ARBITRUM?.id?`${u("modal.view_on",null,null,d)} ArbiScan`:`${u("modal.view_on",null,null,d)} ${s[a]?.label_name} Scan`,[s,o,d]);return x(O,{children:[x(rn.CheckStatus,{href:`${s[e?.base_network_id].explorer_url}tx/${e?.base_tx_hash}`,target:"_blank",rel:"noopener noreferrer",children:[l(e.base_network_id),t(ge,{})]}),!se[e.functionCall]&&x(rn.CheckStatus,{href:`${s[e?.target_network_id].explorer_url}tx/${e?.target_tx_hash}`,target:"_blank",rel:"noopener noreferrer",children:[l(m.id),t(ge,{})]})]})};Bn.propTypes={processedPort:n.exports.object};const Rn=ze.memo(({processedPort:e})=>{const s=c(N.networksById),o=c(L.baseNetwork),m=c(D.walletAddress),d=c($.sourceToken),l=c(L.swapAmount),a=JSON.parse(localStorage.getItem("portSuccessData")),w=i.exports.useMemo(()=>se[a?.functionCall]?d:a?.sourceToken,[d,a]),p=(h,y,S)=>x("div",{children:[t("div",{children:h}),x("div",{children:[x("span",{children:[gt(y)," "]}),t("span",{children:S})]})]}),f=i.exports.useMemo(()=>!(e?.swap_success===1||e?.swap_success===null)&&!se[e?.functionCall]?B.fromWei(e.amountReceived,e?.target_chainport_usd_obj?.decimals):B.fromWei(e.amountReceived,e?.targetToken?.decimals),[e]),C=i.exports.useMemo(()=>!(e?.swap_success===1||e?.swap_success===null)&&!se[e?.functionCall]?e?.target_chainport_usd_obj?.symbol:e?.targetToken?.symbol,[e]),_=i.exports.useMemo(()=>se[a.functionCall]?p(s[e?.base_network_id]?.label_name,l,d?.symbol):p(s[e?.base_network_id]?.label_name,a?.swapAmount,w?.symbol),[a,s,e,l,w,d]),k=i.exports.useMemo(()=>[{label:u("modal.from"),id:1,value:_},{label:u("modal.tokens_received"),id:2,value:p(s[e?.target_network_id]?.label_name,f,C)},{label:u("modal.wallet_address"),id:3,value:t("a",{href:`${s[e?.target_network_id].explorer_url}address/${m}`,target:"_blank",rel:"noopener noreferrer",children:Ce(m)})},{label:u("modal.token_address"),id:4,value:t("a",{href:`${s[e?.base_network_id].explorer_url}token/${w?.web3_address}`,target:"_blank",rel:"noopener noreferrer",children:Ce(w.web3_address)})},{label:u("modal.token_address"),id:5,value:t("a",{href:`${s[e?.target_network_id].explorer_url}token/${e?.targetToken?.web3_address}`,target:"_blank",rel:"noopener noreferrer",children:Ce(e.targetToken.web3_address)})}],[_,s,e?.target_network_id,e?.base_network_id,e.targetToken.web3_address,f,C,m,w.web3_address]);return t(Se.TransactionStat,{baseNetworkName:o?.name,children:k.map(({label:h,id:y,value:S})=>x("div",{children:[t(Se.Label,{className:"transactionstats-label",children:h}),t(Se.Value,{className:"transactionstats-value",children:S})]},y))})});Rn.propTypes={processedPort:n.exports.func};const $n=({processedPort:e,onClose:s})=>{const o=ke(),m=JSON.parse(localStorage.getItem("portSuccessData")),[d]=zt(),l=c(D.providerName),a=c(L.baseNetwork),w=c(N.networksById),p=c(N.networksByName),f=c(N.nativeCoinRates),C=c($.sourceToken),_=c(L.destinationNetwork),k=c($.destinationToken),h=u("modal.close"),y=()=>{s(),localStorage.setItem("isSuccessPort",!1),o(wn()),o(Ot({}))},S=i.exports.useMemo(()=>!(e?.swap_success===1||e?.swap_success===null)&&!se[e?.functionCall]?u("modal.port.finished"):(a.id===_.id||k.symbol!==C.symbol)&&k.symbol!==C.symbol?"Swap Successful":u("modal.port_successful"),[e,C,k,a,_]),R=async()=>{const I=window.ethereum||window.web3?.currentProvider;if(l!=="MetaMask")return null;e?.target_network_id===a.id?I.sendAsync({method:"metamask_watchAsset",params:{type:"ERC20",options:{address:e?.targetToken.web3_address,symbol:e?.targetToken.symbol,decimals:e?.targetToken.decimals}}}):(Ne.info(u("modal.switch_the_rpc"),{position:"top-left"}),d(w[e?.target_network_id]))},A=ft(21e3,e?.tx_gas_price),b=i.exports.useMemo(()=>bn(A.fee,a.name,p,f),[A,a.name,p,f]);return x(Se.TransactionContainer,{children:[t("div",{className:"port-successful-text",children:S}),!(e?.swap_success===1||e?.swap_success===null)&&!se[e?.functionCall]&&x("div",{className:"text-icon-wrapper",children:[t("div",{className:"icon-wrapper",children:t(po,{})}),x("div",{className:"low-slippage-tolerance-warning-text",children:["Slippage tolerance was too low and prevented the TX from completing the request. You received ",B.fromWei(e?.amountReceived,18)," xUSD on the ",m?.destinationNetwork,". Swap them now for the token of your choice."]})]}),e&&t(Gt,{processedPort:e}),x(O,{children:[t(Rn,{processedPort:e}),x(Se.FeesBox,{children:[x("div",{className:"fee-field",children:[t("p",{className:"fee-label",children:u("modal.gas_fee")}),x("p",{className:"fee-value",children:[e?.tx_gas_price," Gwei ($",b,") "]})]}),!se[e?.functionCall]&&x("div",{className:"fee-field",children:[t("p",{className:"fee-label",children:"Port fee "}),x("p",{className:"fee-value",children:[m?.fee," xUSD on ",_.label,"  ($",xn(mo(C?.name.toLowerCase()),m?.fee),")   "]})]})]})]}),x(Se.ActionsContainer,{children:[window?.ethereum?.isMetaMask&&window?._web3.currentProvider?.isMetaMask&&l==="MetaMask"&&e?.target_network_id!==p.CARDANO.id?t(Ut,{handleAddToken:R,tokenSymbol:w[e?.target_network_id]?.symbol,walletName:hn()}):null,t(xe,{className:"secondary w-100 action",onClick:y,children:t("div",{children:h})}),t(Se.ScanContainer,{children:t(Bn,{processedPort:e})})]})]})};$n.propTypes={processedPort:n.exports.object,onClose:n.exports.func};function hi(e,s){const o=c(Y.txHash),m=i.exports.useRef(!0);i.exports.useEffect(()=>{if(!o||!m.current){m.current=!1;return}o&&!s?.isFetching&&e&&(m.current=!1,s.port({existingTxHash:o}))},[o,s,e])}const ui=ze.memo(()=>{const e=c(D.isWalletConnected),s=c(L.baseNetwork),o=c(L.destinationNetwork),m=c(N.networksById),d=c(D.walletBalance),l=c($.sourceToken),a=c($.destinationToken),w=c(N.networksByName),p=c(N.isMobile),f=c(Y.txHash),[C,_]=i.exports.useState(!1),k=i.exports.useRef(),h=ke(),[y,S,R]=zt(),A=c(N.nativeCoinRates),{data:b,isFetching:I}=ni(),M=i.exports.useMemo(()=>B.fromWei(b?.fee,18),[b?.fee]),T=ei(b?.functionCall,b?.portFunction,M,{onSuccess:()=>{_(!0),localStorage.setItem("isSuccessPort","true")}});hi(b,T);const F=ft(21e3,b?.gasFee),{isLoading:U,txHash:z,processedPort:H}=T,ne=()=>b?.slippage?.slippage?`${Je(b?.slippage?.slippage)}%`:null,J=i.exports.useMemo(()=>bn(F?.fee,s.name,w,A),[F?.fee,s.name,w,A]),j=Qa(T,I,b,()=>{const Ae=B.fromWei(parseFloat(b?.slippage?.target_chain_min_tokens_received),a?.decimals);h(go(T.port,b?.slippage?.slippage,M,J,Ae,b?.gasFee))}),oe=()=>{h(tn("sourceToken")),h(Cn("sourceToken"))},le=()=>{h(tn("destinationToken")),h(xo())},ye=localStorage.getItem("isSuccessPort");if(H?.base_tx_hash&&(C||ye))return t(on,{className:W({connected:e}),children:t($n,{processedPort:H,onClose:()=>_(!1)})});const ae=Je(B.fromWei(b?.slippage?.target_chain_min_tokens_received,a?.decimals)),ve=()=>e?t(xe,{className:`primary w-100 action ${s?.name.toLowerCase()}`,loading:j.loading,onClick:j?.action,disabled:j?.disabled,children:j?.text}):t(yn,{className:"outlined-primary white w-100 modal fontSize16"});return x(on,{className:W({connected:e}),children:[t(qa,{children:x("span",{children:[" ",(s.id===o.id||a.symbol!==l.symbol)&&a.symbol!==l.symbol?"Swap Your Tokens":"Port Your Tokens"]})}),x(Ya,{className:W({"wallet-connected":e,disabled:U||I}),ref:k,children:[!F?.isEnoughBalance&&e&&d&&!z&&t(ht,{children:t("p",{children:u("modal.no_funds",{tokenname:s?.native_token_symbol,network:s?.label})})}),t(jt,{setBaseNetwork:y,swapNetworks:R,setDestinationNetwork:S,ref:k}),x("div",{className:"flex flex-justify-space margin-bottom",children:[x(an,{style:{width:p?"46%":"38%",paddingLeft:"10px"},onClick:oe,children:[en(l?.token_image,l?.symbol),t(Vt,{})]}),x(an,{style:{width:p?"46%":"38%",paddingLeft:"10px"},onClick:le,children:[en(a?.token_image,a?.symbol),t(Vt,{})]})]}),t(Xa,{}),t(Ja,{}),!U&&b?.slippage&&b?.gasFee&&x("div",{children:[x(dt,{children:[t("div",{className:"label",children:x("div",{className:"flex flex-align-center",children:[t("span",{className:"label-text",children:"Gas Fee "}),t(We,{tooltipText:s.id===w.ETHEREUM.id?u("modal.gas_fee_eth"):u("modal.gas_fee_non_eth")})]})}),x("div",{className:"value",children:[Je(b?.gasFee)," Gwei (~$",J,") "]})]}),x(dt,{children:[t("div",{className:"label",children:x("div",{className:"flex flex-align-center",children:[t("span",{className:"label-text",children:"Porting Fee "}),t(We,{tooltipText:"no tooltip yet"})]})}),x("div",{className:"value",children:[M," xUSD"]})]}),x(O,{children:[x(dt,{children:[x("div",{className:"label",children:[" ",x("div",{className:"flex flex-align-center",children:[t("span",{className:"label-text",children:t("span",{children:"Slippage"})}),t(We,{tooltipText:u("modal.slippage")})]})," "]}),t("div",{className:"value",children:ne()})]}),x(dt,{children:[x("div",{className:"label",children:["You will receive at ",t("span",{className:"last-word",children:" least "}),t(We,{tooltipText:u("modal.minimum_tokens_received")})]}),t("div",{className:"value",children:ae})]})]})]}),ve()]}),(z||f)&&t("div",{className:"status-wrapper",children:x(Ka,{href:`${m[s?.id]?.explorer_url}${s?.blockchainType==="cardano"?"transaction/":"tx/"}${j.state==="approveLoading"?f:z}`,target:"_blank",rel:"noopener noreferrer",children:[u("modal.check_tx"),t(ge,{})]})})]})}),fi=()=>{const e=c(D.isWalletConnected),s=c(L.baseNetwork),o=c(L.destinationNetwork),m=c(L.selectedToken),d=c(L.swapAmount),{chainport_network_id:l}=s||{},{chainport_network_id:a}=o||{},{web3_address:w}=m||{},{data:p,isInitialLoading:f}=bt({queryKey:[d,o,"balanceMainToMainTokens"],queryFn:async()=>{let C=0;try{C=await Dt.get("/get_token_balance",{params:{base_network_id:l,token_web3_address:w,target_network_id:a}})}catch(k){console.error(k)}return B.fromWei(C?.data,m.decimals)},enabled:e&&m?.target_networks?.length>0&&!m?.is_native_usdc&&o?.id!==9,refetchOnWindowFocus:!1});return{destTokenBalance:p||0,isLoading:f}},bi=()=>{const e=ke(),s=ho(),o=c(D.walletAddress),m=c(D.isWalletConnected),d=c(L.baseNetwork),l=c($.tokens),a=c(N.networksByName);i.exports.useEffect(()=>{const w=a[s.get("from")?.toUpperCase()],p=a[s.get("to")?.toUpperCase()],f=s.get("token")?.toLocaleLowerCase(),C=s.get("amount")?.toLocaleUpperCase();if(l?.length&&w&&p){const _=l.filter(k=>k?.web3_address===f&&k?.chain_id===d?.chainId);m&&_[0]?.web3_address&&uo(_[0],w.name)&&(e(Ot(_[0])),e(_n([_[0]],o)),e(kn(o,_[0])),C>0&&e(Qe(parseFloat(C))),window.history.replaceState(null,null,window.location?.pathname))}},[m,l]),i.exports.useEffect(()=>{l?.length===0&&(async()=>await e(fo()))()},[])},wi=e=>{const s=c(D.walletAddress),o=c(L.swapAmount),m=c(L.selectedToken),{id:d}=c(L.baseNetwork),{id:l}=c(L.destinationNetwork),{web3_address:a}=m,{data:w,isInitialLoading:p}=bt({queryKey:[o,"check_redeem_liquidity"],queryFn:async()=>{let f;try{f=await Dt.get("/burn_amount/get",{params:{target_network_id:l,burn_amount_wei:B.toWei(o,m?.decimals),base_network_id:d,wrapped_token_web3_address:a}})}catch(C){console.warn(C)}return f=f?.data??null,{res:f}},enabled:!!s&&!!+o&&!!a&&e==="burn"&&d!==9&&l!==9,refetchOnWindowFocus:!1});return{isLiquidityAvaib:w?.res,isLoading:p}},Hn=e=>{const{isWalletConnected:s,selectedToken:o,walletAddress:m,swapAmount:d,isUserInputBalanceMax:l,tokens:a,balances:w,balancesWei:p,pendingRedeem:f,gasPrices:C,networks:_,networksByChain:k,baseNetwork:h,destinationNetwork:y,networkId:S,allowanceForToken:R,networksByName:A,setSelectedToken:b,acknowledgePort:I,processingPort:M,resetSwapAmount:T,approveLoading:F,withdrawLoading:U,walletBalance:z,isMobile:H,networksById:ne,normalLogin:J,txHash:j,blockConfirmations:oe,addAllowance:le,setGasRangePrice:ye,gasRangePrice:ae,depositTokens:ve,withdrawTokens:Ae,openConfirmTxModal:wt,isRedeemOnGoing:ce,providerName:Q,isTokenNative:Oe,isAckLoading:Le,setAckLoading:et,portTx:Ie,originNetworkId:Ct,setActivePage:te,checkTokenIsNative:Be,setWithdrawLoading:tt,nativeCoinRates:Re,isToNative:he,isTokenCFB:_t,tokenError:Pe,allowanceLoading:kt,calculatePortxFee:yt,portxFee:vt,recipientWalletAddress:ue,setRecipientWalletAddress:nt,cardanoBurnTx:Lt,updateProgressBar:Mt,setCardanoAddress:je,isTokenStable:$e,getTokenOrigin:ot}=e,de=ke(),[at,Tt]=i.exports.useState(21e3),[it,St]=i.exports.useState({}),He=wo(),Ze=ft(at,ae),[,Ge]=Co(),Me=c(L.bridgeActionType),q=c($.isLifiToken);_o(),bi();const Ue=wi(Me),Fe=fi(),rt=!!o?.target_networks?.length>0,[fe,be,Nt]=zt(),qe=i.exports.useCallback(async()=>{et(!0),await I(M),h?.id!==A.CARDANO.id&&fe(k[S]||A.ETHEREUM)},[I,M,et,S,fe,k,A,h]);i.exports.useEffect(()=>{m&&Ge()},[h?.id,Ge,m]),i.exports.useEffect(async()=>{if(a.length&&m){const G={from:m,estimateGas:!0},P=await De.injectGasPrice(G,!0)/1e9,ie=new ut(P).toFixed();ye(ie)}if(M?.target_tx_hash&&h?.name?.toLowerCase()!=="cardano"&&y?.name?.toLowerCase()!=="cardano"){const G=await B?.getGasUsed(M?.target_tx_hash,y?.chain_id),K=await B?.getGasUsed(M?.base_tx_hash,h?.chain_id),P={gasUsedWeb3Destanation:parseFloat(G),gasUsedWeb3Base:parseFloat(K)};St(P)}if(a.length&&m&&h?.name===A.ETHEREUM.name){const G=!(R.allowance>=d&&d>0);let K=21e3;const P=o?.web3_address?o:a[0],Ve=B.toWei(d||1,P.decimals),ie=l?p[o?.web3_address]:Ve,pe={from:m,estimateGas:!0};if(G&&P.network_name!==A.CARDANO.name)K=await B.approve(h.chain_id,h.bridges.ChainportMainBridge,P.web3_address,ie,pe);else if(y.blockchainType==="cardano"&&ue!==""&&cn(ue)){const re=await B.gasFeesPerNetwork(y.id,h.id,"depositTokens");await ot(h.id,P.web3_address)===y.id?K=await B.nonEVMCrossChainTransfer(h.id,P.web3_address,ie,y.id,ue,pe,re):K=await B.nonEVMDepositTokens(h.id,P.web3_address,ie,y.id,ue,pe,re)}else if(y.blockchainType!=="cardano"&&Oe&&!P?.is_native_usdc&&!q){const re=await B.gasFeesPerNetwork(y.id,h.id,"depositTokens");K=await B.depositTokens(h.id,P.web3_address,ie,y.id,pe,re)}He.current&&!ce&&!Le&&!M&&Tt(K)}},[R,d,a,o,h,y,k,A,m,S,p,He,ue,ye,l,j,ce,Le,M,Oe,ot,q]);const st=i.exports.useCallback(async()=>{if(de(xt(!0)),o?.chain_id)if(h?.id===A.CARDANO.id||y?.id===A.CARDANO.id){const G=B.toWei(d,o.decimals);await dn(m,o.web3_address,k[o.chain_id].id,G)?le(m,ae,o,d):de(xt(!1))}else q?le(m,ae,o,d,"lifiBridge"):o.is_native_usdc?le(m,ae,o,d,"usdcBridge"):Pe?(de(xt(!1)),Ne.error(Pe)):le(m,ae,o,d)},[m,ae,o,d,F]),lt=i.exports.useCallback(async()=>{const G=A[o.network_name]?.id;je(m);try{if(q){const P=await ko(h.id,y.id,o.web3_address,m,d);return de(yo(P))}if(o?.is_native_usdc)return o.usdc_native_target_networks.includes(y?.id)?de(vo()):ve();await Be(G,o.web3_address)?ve():Ae()}catch(K){console.log(K)}},[o,m,ve,Ae,Be,y,de,A,je,q,h,d]),At=i.exports.useCallback(()=>{U&&s&&j&&!f&&!ce&&!mt(Ie)&&lt()},[U,s,j,f,ce,Ie]),It=i.exports.useCallback(()=>{F&&j&&s&&st()},[F,j,s]);i.exports.useEffect(()=>{(U&&!j||oe>2e3)&&(tt(!1),T(),b({})),s&&(At(),It())},[s]);const Bt=i.exports.useCallback(()=>{de(Qe(Fe?.destTokenBalance))},[de,Fe?.destTokenBalance]),Rt=i.exports.useMemo(()=>s?u("common.port_your_tokens"):"ChainPort",[s]),$t=i.exports.useCallback(()=>{J(null,h?.id)},[]),ee=!!M?.id&&!!M?.target_tx_hash&&!!M?.target_tx_status&&s,Ye=!!f?.id&&!!f?.target_tx_hash&&!!f?.target_tx_status&&s;return i.exports.useMemo(()=>ee||Ye,[ee,Ye])?t(An,{gasTransactionFee:at,baseNetwork:h,destinationNetwork:y,networksById:ne,networksByName:A,isMobile:H,acknowledgePort:qe,processingPort:M,handleBaseNetworkChange:fe,providerName:Q,isAckLoading:Le,isToNative:he,portxFee:vt,gasUsed:it}):o&&$e?t(ui,{}):t(Nn,{...e,openConfirmTxModal:wt,setTitle:Rt,processingPort:M,isMobile:H,gasRangePrice:ae,setGasRangePrice:ye,swapAmount:d,networks:_,selectedToken:o,baseNetwork:h,setBaseNetwork:fe,destinationNetwork:y,setDestinationNetwork:be,balance:w?.[o?.web3_address],approveLoading:F,withdrawLoading:U,handleWithdrawTokens:lt,handleAddAllowance:st,isWalletConnected:s,redeem:f,gasPrices:C,swapNetworks:Nt,ethTransactionFee:Ze,networksById:ne,walletBalance:z,txHash:j,blockConfirmations:oe,openConnectWalletModal:$t,resetSwapAmount:T,setSelectedToken:b,portTx:Ie,isTokenNative:Oe,isRedeemOnGoing:ce,originNetworkId:Ct,setActivePage:te,nativeCoinRates:Re,isTokenCFB:_t,tokenError:Pe,allowanceLoading:kt,walletAddress:m,calculatePortxFee:yt,recipientWalletAddress:ue,setRecipientWalletAddress:nt,cardanoBurnTx:Lt,updateProgressBar:Mt,handleBalanceChange:Bt,mainToMainObj:Fe,isTokenMainToMain:rt,liquidityAvaib:Ue})};Hn.propTypes={inch:n.exports.object,connectingWallet:n.exports.bool,isWalletConnected:n.exports.bool,networksByChain:n.exports.object,networksByName:n.exports.object,allowanceForToken:n.exports.object,selectedToken:n.exports.object,setBaseNetwork:n.exports.func,walletAddress:n.exports.string,setAllowanceForToken:n.exports.func,swapAmount:n.exports.oneOfType([n.exports.number,n.exports.string]),baseNetwork:n.exports.object,destinationNetwork:n.exports.object,networkId:n.exports.number,tokens:n.exports.array,setBalances:n.exports.func,balances:n.exports.object,balancesWei:n.exports.object,pendingRedeem:n.exports.object,processingPort:n.exports.object,gasPrices:n.exports.object,acknowledgePort:n.exports.func,setSelectedToken:n.exports.func,networks:n.exports.array,resetSwapAmount:n.exports.func,setApproveLoading:n.exports.func,approveLoading:n.exports.bool,withdrawLoading:n.exports.bool,walletBalance:n.exports.string,isMobile:n.exports.bool,networksById:n.exports.object,normalLogin:n.exports.func,txHash:n.exports.string,blockConfirmations:n.exports.number,depositTokens:n.exports.func,withdrawTokens:n.exports.func,addAllowance:n.exports.func,setGasRangePrice:n.exports.func,gasRangePrice:n.exports.oneOfType([n.exports.number,n.exports.string]),selectedTokenOnTargetNetwork:n.exports.object,openConfirmTxModal:n.exports.func,accountType:n.exports.string,isUserInputBalanceMax:n.exports.bool,redeemTx:n.exports.string,isRedeemOnGoing:n.exports.bool,providerName:n.exports.string,isTokenNative:n.exports.oneOfType([n.exports.bool,n.exports.string]),isAckLoading:n.exports.bool,setAckLoading:n.exports.func,portTx:n.exports.object,checkTokenIsNative:n.exports.func,originNetworkId:n.exports.oneOfType([n.exports.number,n.exports.string]),setTitle:n.exports.string,setActivePage:n.exports.func,setWithdrawLoading:n.exports.func,nativeCoinRates:n.exports.object,isToNative:n.exports.bool,isTokenCFB:n.exports.bool,tokenError:n.exports.string,allowanceLoading:n.exports.bool,refreshAllowance:n.exports.func,calculatePortxFee:n.exports.func,portxFee:n.exports.object,recipientWalletAddress:n.exports.string,setRecipientWalletAddress:n.exports.func,cardanoBurnTx:n.exports.string,updateProgressBar:n.exports.func,setCardanoAddress:n.exports.func,isTokenStable:n.exports.bool,getTokenOrigin:n.exports.func};const Ci=e=>({connectingWallet:D.connectingWallet(e),isWalletConnected:D.isWalletConnected(e),isMobile:N.isMobile(e),inch:$.inchTokens(e),tokens:$.tokens(e),selectedToken:L.selectedToken(e),pendingRedeem:L.pendingRedeem(e),processingPort:L.processingPort(e),walletAddress:D.walletAddress(e),accountType:D.accountType(e),allowanceForToken:L.allowanceForToken(e),isUserInputBalanceMax:L.isUserInputBalanceMax(e),swapAmount:L.swapAmount(e),balances:$.balances(e),balancesWei:$.balancesWei(e),gasPrices:N.gasPrices(e),networks:N.networks(e),networksByChain:N.networksByChain(e),networksByName:N.networksByName(e),networksById:N.networksById(e),baseNetwork:L.baseNetwork(e),destinationNetwork:L.destinationNetwork(e),networkId:L.networkId(e),recipientWalletAddress:D.recipientWalletAddress(e),approveLoading:N.approveLoading(e),withdrawLoading:N.withdrawLoading(e),walletBalance:D.walletBalance(e),txHash:Y.txHash(e),blockConfirmations:Y.blockConfirmations(e),gasRangePrice:L.gasRangePrice(e),selectedTokenOnTargetNetwork:L.selectedTokenOnTargetNetwork(e),redeemTx:Y.redeemTx(e.transactions),isRedeemOnGoing:Y.isRedeemOnGoing(e),providerName:D.providerName(e),isTokenNative:$.isTokenNative(e),isAckLoading:N.isAckLoading(e),portTx:Y.portTx(e.transactions),intervalId:Y.intervalId(e.transactions),portTimeoutId:Y.intervalId(e.transactions),originNetworkId:$.originNetworkId(e),nativeCoinRates:N.nativeCoinRates(e),isToNative:L.isToNative(e),isTokenCFB:$.isTokenCFB(e),allowanceLoading:N.allowanceLoading(e),portxFee:Y.portxFee(e),cardanoBurnTx:Y.cardanoBurnTx(e),isTokenStable:$.isTokenStable(e)}),_i={openTokenModal:Cn,setAllowanceForToken:Lo,setBaseNetwork:Mo,setBalances:_n,setSelectedToken:Ot,acknowledgePort:To,resetSwapAmount:wn,setApproveLoading:xt,normalLogin:So,depositTokens:No,withdrawTokens:Ao,addAllowance:Io,setGasRangePrice:gn,openConfirmTxModal:Bo,setAckLoading:Ro,setActivePage:$o,checkTokenIsNative:pn,setWithdrawLoading:Ho,refreshAllowance:kn,calculatePortxFee:Zo,setRecipientWalletAddress:ln,updateProgressBar:Xe,setCardanoAddress:Fo,getTokenOrigin:Vo},Ni=bo(Ci,_i)(Hn);export{Ni as default};
