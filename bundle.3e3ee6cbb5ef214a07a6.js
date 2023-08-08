"use strict";(self.webpackChunk_dcentralab_web3_wallet_connector=self.webpackChunk_dcentralab_web3_wallet_connector||[]).push([[2900],{28400:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseConnectSettings=t.getEnv=void 0;const o=n(66882);t.getEnv=()=>{var e;if("undefined"!=typeof chrome&&void 0!==(null===(e=chrome.runtime)||void 0===e?void 0:e.onConnect))return"webextension";if("undefined"!=typeof navigator){if("string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase())return"react-native";if(navigator.userAgent.toLowerCase().indexOf(" electron/")>-1)return"electron"}return"web"};t.parseConnectSettings=(e={})=>{var i;const s=Object.assign({popup:!0},e);let r;if("undefined"!=typeof window?r=window.__TREZOR_CONNECT_SRC:void 0!==n.g&&(r=n.g.__TREZOR_CONNECT_SRC),"string"==typeof r&&(s.connectSrc=r,s.debug=!0),"undefined"!=typeof window&&"string"==typeof(null===(i=window.location)||void 0===i?void 0:i.search)){const e=window.location.search.split("&").find((e=>e.indexOf("trezor-connect-src")>=0));if(e){const[,t]=e.split("=");s.connectSrc=decodeURIComponent(t),s.debug=!0}}return"string"!=typeof e.env&&(s.env=(0,t.getEnv)()),(0,o.parseConnectSettings)(s)}},6283:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.clearTimeout=t.postMessage=t.init=t.dispose=t.messagePromises=t.error=t.timeout=t.initPromise=t.origin=t.instance=void 0;const o=n(97582),i=n(62261),s=n(66882),r=n(2134),a=o.__importDefault(n(64107));t.initPromise=(0,i.createDeferred)(),t.timeout=0;let c=0;t.messagePromises={};t.dispose=()=>{if(t.instance&&t.instance.parentNode)try{t.instance.parentNode.removeChild(t.instance)}catch(e){}t.instance=null,t.timeout=0};t.init=async e=>{var n;t.initPromise=(0,i.createDeferred)();const o=document.getElementById("trezorconnect");let c;if(o?t.instance=o:(t.instance=document.createElement("iframe"),t.instance.frameBorder="0",t.instance.width="0px",t.instance.height="0px",t.instance.style.position="absolute",t.instance.style.display="none",t.instance.style.border="0px",t.instance.style.width="0px",t.instance.style.height="0px",t.instance.id="trezorconnect"),"web"===e.env){const t=e.manifest?JSON.stringify(e.manifest):"undefined",n=`version=${e.version}&manifest=${encodeURIComponent(btoa(JSON.stringify(t)))}`;c=`${e.iframeSrc}?${n}`}else c=e.iframeSrc;t.instance.setAttribute("src",c),e.webusb&&console.warn('webusb option is deprecated. use `transports: ["WebUsbTransport"] instead`'),(e.webusb||(null===(n=e.transports)||void 0===n?void 0:n.includes("WebUsbTransport")))&&t.instance.setAttribute("allow","usb"),t.origin=(0,r.getOrigin)(t.instance.src),t.timeout=window.setTimeout((()=>{t.initPromise.reject(s.ERRORS.TypedError("Init_IframeTimeout"))}),1e4);const p=()=>{var n,o;if(!t.instance)return void t.initPromise.reject(s.ERRORS.TypedError("Init_IframeBlocked"));try{const e=null===(n=t.instance.contentWindow)||void 0===n?void 0:n.location.origin;if(!e||"null"===e)return window.clearTimeout(t.timeout),t.error=s.ERRORS.TypedError("Init_IframeBlocked"),(0,t.dispose)(),void t.initPromise.reject(t.error)}catch(e){}let i;"undefined"!=typeof chrome&&chrome.runtime&&void 0!==chrome.runtime.onConnect&&(chrome.runtime.onConnect.addListener((()=>{})),i=chrome.runtime.id),null===(o=t.instance.contentWindow)||void 0===o||o.postMessage({type:s.IFRAME.INIT,payload:{settings:e,extension:i}},t.origin),t.instance.onload=null};t.instance.attachEvent?t.instance.attachEvent("onload",p):t.instance.onload=p,document.body&&(document.body.appendChild(t.instance),(()=>{if(!t.instance)throw s.ERRORS.TypedError("Init_IframeBlocked");const e=t.instance.ownerDocument,n=e.head||e.getElementsByTagName("head")[0],o=document.createElement("style");o.setAttribute("type","text/css"),o.setAttribute("id","TrezorConnectStylesheet"),o.styleSheet?(o.styleSheet.cssText=a.default,n.appendChild(o)):(o.appendChild(document.createTextNode(a.default)),n.append(o))})());try{await t.initPromise.promise}catch(e){throw t.instance&&(t.instance.parentNode&&t.instance.parentNode.removeChild(t.instance),t.instance=null),e}finally{window.clearTimeout(t.timeout),t.timeout=0}};t.postMessage=(e,n=!0)=>{var o,r;if(!t.instance)throw s.ERRORS.TypedError("Init_IframeBlocked");if(n){c++,e.id=c,t.messagePromises[c]=(0,i.createDeferred)();const{promise:n}=t.messagePromises[c];return null===(o=t.instance.contentWindow)||void 0===o||o.postMessage(e,t.origin),n}return null===(r=t.instance.contentWindow)||void 0===r||r.postMessage(e,t.origin),null};t.clearTimeout=()=>{window.clearTimeout(t.timeout)}},64107:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default='.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */'},81449:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(97582),i=o.__importDefault(n(17187)),s=n(66882),r=n(99577),a=n(86201),c=n(36680),p=o.__importStar(n(6283)),d=o.__importStar(n(51873)),l=o.__importDefault(n(33750)),m=n(28400),u=new i.default,h=(0,a.initLog)("@trezor/connect");let E,g=(0,m.parseConnectSettings)();const w=()=>{const e=new d.PopupManager(g);return e.on(s.POPUP.CLOSED,(e=>{p.postMessage({type:s.POPUP.CLOSED,payload:e?{error:e}:null},!1)})),e},U=()=>(u.removeAllListeners(),p.dispose(),g=(0,m.parseConnectSettings)(),E&&E.close(),Promise.resolve(void 0)),b=e=>{if(e.origin!==p.origin)return;const t=(0,s.parseMessage)(e.data),n=t.id||0;switch(h.log("handleMessage",t),t.event){case s.RESPONSE_EVENT:p.messagePromises[n]?(p.messagePromises[n].resolve({id:n,success:t.success,payload:t.payload}),delete p.messagePromises[n]):h.warn(`Unknown message id ${n}`);break;case s.DEVICE_EVENT:case s.TRANSPORT_EVENT:case s.BLOCKCHAIN_EVENT:u.emit(t.event,t),u.emit(t.type,t.payload);break;case s.UI_EVENT:if(t.type===s.IFRAME.BOOTSTRAP){p.clearTimeout();break}t.type===s.IFRAME.LOADED&&p.initPromise.resolve(),t.type===s.IFRAME.ERROR&&p.initPromise.reject(t.payload.error),u.emit(t.event,t),u.emit(t.type,t.payload);break;default:h.log("Undefined message",t.event,e)}},y=async(e={})=>{var t;if(p.instance)throw s.ERRORS.TypedError("Init_AlreadyInitialized");if(g=(0,m.parseConnectSettings)(Object.assign(Object.assign({},g),e)),!g.manifest)throw s.ERRORS.TypedError("Init_ManifestMissing");(null===(t=g.transports)||void 0===t?void 0:t.length)||(g.transports=["BridgeTransport","WebUsbTransport"]),g.lazyLoad?g.lazyLoad=!1:(E||(E=w()),h.enabled=!!g.debug,window.addEventListener("message",b),window.addEventListener("unload",U),await p.init(g))},Q=async e=>{if(!p.instance&&!p.timeout){if(g=(0,m.parseConnectSettings)(g),!g.manifest)return(0,s.createErrorMessage)(s.ERRORS.TypedError("Init_ManifestMissing"));E||(E=w()),E.request(!0);try{await y(g)}catch(e){return E&&(["Init_IframeBlocked","Init_IframeTimeout"].includes(e.code)?E.postMessage((0,s.createUiMessage)(s.UI.IFRAME_FAILURE)):E.close()),(0,s.createErrorMessage)(e)}}if(p.timeout)return(0,s.createErrorMessage)(s.ERRORS.TypedError("Init_ManifestMissing"));if(p.error)return(0,s.createErrorMessage)(p.error);g.popup&&E&&E.request();try{const t=await p.postMessage({type:s.IFRAME.CALL,payload:e});return t?(!t.success&&"Device_CallInProgress"!==t.payload.code&&E&&E.unlock(),t):(E&&E.unlock(),(0,s.createErrorMessage)(s.ERRORS.TypedError("Method_NoResponse")))}catch(e){return h.error("__call error",e),E&&E.close(),(0,s.createErrorMessage)(e)}},f=(0,r.factory)({eventEmitter:u,manifest:e=>{g=(0,m.parseConnectSettings)(Object.assign(Object.assign({},g),{manifest:e}))},init:y,call:Q,requestLogin:async e=>{if("function"==typeof e.callback){const{callback:t}=e,n=async e=>{const{data:n}=e;if(n&&n.type===s.UI.LOGIN_CHALLENGE_REQUEST)try{const e=await t();p.postMessage({event:s.UI_EVENT,type:s.UI.LOGIN_CHALLENGE_RESPONSE,payload:e})}catch(e){p.postMessage({event:s.UI_EVENT,type:s.UI.LOGIN_CHALLENGE_RESPONSE,payload:e.message})}};window.addEventListener("message",n,!1);const o=await Q(Object.assign(Object.assign({method:"requestLogin"},e),{asyncChallenge:!0,callback:null}));return window.removeEventListener("message",n),o}return Q(Object.assign({method:"requestLogin"},e))},uiResponse:e=>{if(!p.instance)throw s.ERRORS.TypedError("Init_NotInitialized");const{type:t,payload:n}=e;p.postMessage({event:s.UI_EVENT,type:t,payload:n})},renderWebUSBButton:e=>{(0,l.default)(e,g.webusbSrc)},disableWebUSB:()=>{if(!p.instance)throw s.ERRORS.TypedError("Init_NotInitialized");p.postMessage({event:s.UI_EVENT,type:s.TRANSPORT.DISABLE_WEBUSB})},requestWebUSBDevice:async()=>{try{await window.navigator.usb.requestDevice({filters:c.config.webusb}),p.postMessage({event:s.UI_EVENT,type:s.TRANSPORT.REQUEST_DEVICE})}catch(e){}},cancel:e=>{E&&E.emit(s.POPUP.CLOSED,e)},dispose:U});t.default=f,o.__exportStar(n(66882),t)},51873:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PopupManager=void 0;const o=n(97582).__importDefault(n(17187)),i=n(62261),s=n(66882),r=n(2134),a=n(70743);class c extends o.default{constructor(e){super(),this.locked=!1,this.requestTimeout=0,this.closeInterval=0,this.extensionTabId=0,this.settings=e,this.origin=(0,r.getOrigin)(e.popupSrc),this.handleMessage=this.handleMessage.bind(this),this.iframeHandshake=(0,i.createDeferred)(s.IFRAME.LOADED),"webextension"===this.settings.env&&(this.handleExtensionConnect=this.handleExtensionConnect.bind(this),this.handleExtensionMessage=this.handleExtensionMessage.bind(this),chrome.runtime.onConnect.addListener(this.handleExtensionConnect)),window.addEventListener("message",this.handleMessage,!1)}request(e=!1){if(this.locked)return void(this.popupWindow&&("webextension"===this.settings.env?chrome.tabs.update(this.popupWindow.id,{active:!0}):this.popupWindow.focus()));const t=this.open.bind(this);this.locked=!0;const n=e||"webextension"===this.settings.env?1:850;this.requestTimeout=window.setTimeout((()=>{this.requestTimeout=0,t(e)}),n)}cancel(){this.close()}unlock(){this.locked=!1}open(e){const t=this.settings.popupSrc;this.popupPromise=(0,i.createDeferred)(s.POPUP.LOADED),this.openWrapper(e?`${t}#loading`:t),this.closeInterval=window.setInterval((()=>{this.popupWindow&&("webextension"===this.settings.env?chrome.tabs.get(this.popupWindow.id,(e=>{e||(this.close(),this.emit(s.POPUP.CLOSED))})):this.popupWindow.closed&&(this.close(),this.emit(s.POPUP.CLOSED)))}),500),this.openTimeout=setTimeout((()=>{this.close(),(0,a.showPopupRequest)(this.open.bind(this),(()=>{this.emit(s.POPUP.CLOSED)}))}),3e3)}openWrapper(e){"webextension"===this.settings.env?chrome.windows.getCurrent((t=>{"normal"!==t.type?chrome.windows.create({url:e},(e=>{chrome.tabs.query({windowId:null==e?void 0:e.id,active:!0},(e=>{this.popupWindow=e[0]}))})):chrome.tabs.query({currentWindow:!0,active:!0},(t=>{this.extensionTabId=t[0].id,chrome.tabs.create({url:e,index:t[0].index+1},(e=>{this.popupWindow=e}))}))})):"electron"===this.settings.env?this.popupWindow=window.open(e,"modal"):(this.popupWindow=window.open("","_blank"),this.popupWindow&&(this.popupWindow.location.href=e))}handleExtensionConnect(e){var t,n;"trezor-connect"===e.name&&(!this.popupWindow||this.popupWindow&&this.popupWindow.id!==(null===(n=null===(t=e.sender)||void 0===t?void 0:t.tab)||void 0===n?void 0:n.id)||(this.openTimeout&&clearTimeout(this.openTimeout),this.extensionPort=e,this.extensionPort.onMessage.addListener(this.handleExtensionMessage)))}handleExtensionMessage(e){if(!this.extensionPort)return;const t=this.extensionPort,{data:n}=e;if(n&&"object"==typeof n)if(n.type===s.POPUP.ERROR){const e=n.payload&&"string"==typeof n.payload.error?n.payload.error:null;this.emit(s.POPUP.CLOSED,e?`Popup error: ${e}`:null),this.close()}else n.type===s.POPUP.LOADED?(this.popupPromise&&this.popupPromise.resolve(),this.iframeHandshake.promise.then((e=>{t.postMessage({type:s.POPUP.INIT,payload:Object.assign(Object.assign({},e),{settings:this.settings})})}))):n.type===s.POPUP.EXTENSION_USB_PERMISSIONS?chrome.tabs.query({currentWindow:!0,active:!0},(e=>{chrome.tabs.create({url:"trezor-usb-permissions.html",index:e[0].index+1},(e=>{}))})):n.type===s.POPUP.CLOSE_WINDOW&&(this.emit(s.POPUP.CLOSED),this.close())}handleMessage(e){const{data:t}=e;if((0,r.getOrigin)(e.origin)===this.origin&&t&&"object"==typeof t)if(t.type===s.IFRAME.LOADED)this.iframeHandshake.resolve(t.payload);else if(t.type===s.POPUP.BOOTSTRAP)this.openTimeout&&clearTimeout(this.openTimeout);else if(t.type===s.POPUP.ERROR&&this.popupWindow){const e=t.payload&&"string"==typeof t.payload.error?t.payload.error:null;this.emit(s.POPUP.CLOSED,e?`Popup error: ${e}`:null),this.close()}else t.type===s.POPUP.LOADED?(this.popupPromise&&this.popupPromise.resolve(),this.iframeHandshake.promise.then((e=>{this.popupWindow.postMessage({type:s.POPUP.INIT,payload:Object.assign(Object.assign({},e),{settings:this.settings})},this.origin)}))):t.type!==s.POPUP.CANCEL_POPUP_REQUEST&&t.type!==s.UI.CLOSE_UI_WINDOW||this.close()}close(){if(this.locked=!1,this.popupPromise=void 0,this.requestTimeout&&(window.clearTimeout(this.requestTimeout),this.requestTimeout=0),this.openTimeout&&(clearTimeout(this.openTimeout),this.openTimeout=void 0),this.closeInterval&&(window.clearInterval(this.closeInterval),this.closeInterval=0),this.extensionPort&&(this.extensionPort.disconnect(),this.extensionPort=void 0),this.extensionTabId&&(chrome.tabs.update(this.extensionTabId,{active:!0}),this.extensionTabId=0),this.popupWindow){if("webextension"===this.settings.env){let e=chrome.runtime.lastError;chrome.tabs.remove(this.popupWindow.id,(()=>{e=chrome.runtime.lastError}))}else this.popupWindow.close();this.popupWindow=null}}async postMessage(e){if(!this.popupWindow&&e.type!==s.UI.REQUEST_UI_WINDOW&&this.openTimeout)return this.close(),void(0,a.showPopupRequest)(this.open.bind(this),(()=>{this.emit(s.POPUP.CLOSED)}));this.popupPromise&&await this.popupPromise.promise,this.popupWindow&&this.popupWindow.postMessage(e,this.origin)}}t.PopupManager=c},70743:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showPopupRequest=void 0;const n="TrezorConnectInteractionLayer",o=`\n    <div class="trezorconnect-container" id="${n}">\n        <div class="trezorconnect-window">\n            <div class="trezorconnect-head">\n                <svg class="trezorconnect-logo" x="0px" y="0px" viewBox="0 0 163.7 41.9" width="78px" height="20px" preserveAspectRatio="xMinYMin meet">\n                    <polygon points="101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1"/>\n                    <path d="M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z"/>\n                    <path d="M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z"/>\n                    <polygon points="82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 "/>\n                    <path d="M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z"/>\n                    <path d="M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z"/>\n                    <polygon points="40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 "/>\n                </svg>\n                <div class="trezorconnect-close">\n                    <svg x="0px" y="0px" viewBox="24 24 60 60" width="24px" height="24px" preserveAspectRatio="xMinYMin meet">\n                        <polygon class="st0" points="40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 "/>\n                    </svg>\n                </div>\n            </div>\n            <div class="trezorconnect-body">\n                <h3>Popup was blocked</h3>\n                <p>Please click to "Continue" to open popup manually</p>\n                <button class="trezorconnect-open">Continue</button>\n            </div>\n        </div>\n    </div>\n`;t.showPopupRequest=(e,t)=>{if(document.getElementById(n))return;const i=document.createElement("div");i.id=n,i.className="trezorconnect-container",i.innerHTML=o,document.body&&document.body.appendChild(i);i.getElementsByClassName("trezorconnect-open")[0].onclick=()=>{e(),document.body&&document.body.removeChild(i)};i.getElementsByClassName("trezorconnect-close")[0].onclick=()=>{t(),document.body&&document.body.removeChild(i)}}},33750:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=(e="",t)=>{const n=e||".trezor-webusb-button",o=document.querySelectorAll(n),i=`${t}?${Date.now()}`;o.forEach((e=>{if(e.getElementsByTagName("iframe").length<1){const t=e.getBoundingClientRect(),n=document.createElement("iframe");n.frameBorder="0",n.width=`${Math.round(t.width)}px`,n.height=`${Math.round(t.height)}px`,n.style.position="absolute",n.style.top="0px",n.style.left="0px",n.style.zIndex="1",n.setAttribute("allow","usb"),n.setAttribute("scrolling","no"),n.src=i,e.append(n)}}))}}}]);