import{r as c,j as n,a as i}from"./unifiedFrontend.b9321740.js";import{p as o,aI as p,b2 as m,t as d,aT as u}from"./index.8c6e34d8.js";import{S as r}from"./styled.e5cef5eb.js";const a=({normalLogin:t,connectingWalletProvider:s,className:e})=>{const l=c.exports.useCallback(()=>t(),[t]);return n(r.WalletButton,{className:e,onClick:l,children:s?n(m,{}):i(r.WalletBtnContent,{className:e,children:[d("modal.connect_wallet")," "]})})};a.propTypes={normalLogin:o.exports.func.isRequired,connectingWalletProvider:o.exports.bool.isRequired,className:o.exports.string};const x=({wallet:t})=>({connectingWalletProvider:t.connectingWalletProvider}),W={normalLogin:u},P=p(x,W)(a);export{P as C};