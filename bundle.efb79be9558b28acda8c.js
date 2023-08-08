"use strict";(self.webpackChunk_dcentralab_web3_wallet_connector=self.webpackChunk_dcentralab_web3_wallet_connector||[]).push([[9994],{56387:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NETWORK_IDS=t.PROTOCOL_MAGICS=void 0,function(e){e[e.mainnet=764824073]="mainnet",e[e.testnet_preprod=1]="testnet_preprod",e[e.testnet_preview=2]="testnet_preview",e[e.testnet_legacy=1097911063]="testnet_legacy"}(t.PROTOCOL_MAGICS||(t.PROTOCOL_MAGICS={})),function(e){e[e.mainnet=1]="mainnet",e[e.testnet=0]="testnet"}(t.NETWORK_IDS||(t.NETWORK_IDS={}))},39880:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LIBUSB_ERROR_MESSAGE=t.WEBUSB_ERROR_MESSAGE=t.INVALID_PIN_ERROR_MESSAGE=t.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE=t.serializeError=t.TypedError=t.TrezorError=t.ERROR_CODES=void 0,t.ERROR_CODES={Init_NotInitialized:"TrezorConnect not initialized",Init_AlreadyInitialized:"TrezorConnect has been already initialized",Init_IframeBlocked:"Iframe blocked",Init_IframeTimeout:"Iframe timeout",Init_ManifestMissing:"Manifest not set. Read more at https://github.com/trezor/trezor-suite/blob/develop/docs/packages/connect/index.md",Popup_ConnectionMissing:"Unable to establish connection with iframe",Transport_Missing:"Transport is missing",Transport_InvalidProtobuf:"",Method_InvalidPackage:"This package is not suitable to work with browser. Use @trezor/connect-web package instead",Method_InvalidParameter:"",Method_NotAllowed:"Method not allowed for this configuration",Method_PermissionsNotGranted:"Permissions not granted",Method_Cancel:"Cancelled",Method_Interrupted:"Popup closed",Method_UnknownCoin:"Coin not found",Method_AddressNotMatch:"Addresses do not match",Method_FirmwareUpdate_DownloadFailed:"Failed to download firmware binary",Method_Discovery_BundleException:"",Method_Override:"override",Method_NoResponse:"Call resolved without response",Backend_NotSupported:"BlockchainLink settings not found in coins.json",Backend_WorkerMissing:"",Backend_Disconnected:"Backend disconnected",Backend_Invalid:"Invalid backend",Backend_Error:"",Runtime:"",Device_NotFound:"Device not found",Device_InitializeFailed:"",Device_FwException:"",Device_ModeException:"",Device_Disconnected:"Device disconnected",Device_UsedElsewhere:"Device is used in another window",Device_InvalidState:"Passphrase is incorrect",Device_CallInProgress:"Device call in progress"};class o extends Error{constructor(e,t){super(t),this.code=e,this.message=t}}t.TrezorError=o;t.TypedError=(e,r)=>new o(e,r||t.ERROR_CODES[e]);t.serializeError=e=>e&&e.error instanceof Error?{error:e.error.message,code:e.error.code}:e,t.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE="wrong previous session",t.INVALID_PIN_ERROR_MESSAGE="PIN invalid",t.WEBUSB_ERROR_MESSAGE="NetworkError: Unable to claim interface.",t.LIBUSB_ERROR_MESSAGE="LIBUSB_ERROR"},41048:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PROTO=t.NEM=t.CARDANO=t.NETWORK=t.ERRORS=void 0;const r=o(51748);t.ERRORS=r.__importStar(o(39880)),t.NETWORK=r.__importStar(o(59803)),t.CARDANO=r.__importStar(o(56387)),t.NEM=r.__importStar(o(69202)),t.PROTO=r.__importStar(o(70765))},69202:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TxVersion=t.TxType=t.Networks=void 0,function(e){e[e.mainnet=104]="mainnet",e[e.testnet=152]="testnet",e[e.mijin=96]="mijin"}(t.Networks||(t.Networks={})),function(e){e[e.TRANSFER=257]="TRANSFER",e[e.COSIGNING=258]="COSIGNING",e[e.IMPORTANCE_TRANSFER=2049]="IMPORTANCE_TRANSFER",e[e.AGGREGATE_MODIFICATION=4097]="AGGREGATE_MODIFICATION",e[e.MULTISIG_SIGNATURE=4098]="MULTISIG_SIGNATURE",e[e.MULTISIG=4100]="MULTISIG",e[e.PROVISION_NAMESPACE=8193]="PROVISION_NAMESPACE",e[e.MOSAIC_CREATION=16385]="MOSAIC_CREATION",e[e.SUPPLY_CHANGE=16386]="SUPPLY_CHANGE"}(t.TxType||(t.TxType={})),function(e){e[e.mainnet=1744830464]="mainnet",e[e.testnet=-1744830464]="testnet",e[e.mijin=1610612736]="mijin"}(t.TxVersion||(t.TxVersion={}))},59803:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TYPES=void 0,t.TYPES={bitcoin:"Bitcoin",ethereum:"Ethereum",eos:"Eos",nem:"NEM",stellar:"Stellar",cardano:"Cardano",ripple:"Ripple",tezos:"Tezos",binance:"Binance"}},36680:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0;const r=o(54018);t.config={webusb:r.TREZOR_DESCS,whitelist:[{origin:"chrome-extension://imloifkgjagghnncjkhggdhalmcnfklk",priority:1},{origin:"chrome-extension://niebkpllfhmpfbffbfifagfgoamhpflf",priority:1},{origin:"file://",priority:2},{origin:"trezor.io",priority:0},{origin:"sldev.cz",priority:0},{origin:"localhost",priority:0},{origin:"trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad.onion",priority:0}],management:[{origin:"trezor.io"},{origin:"sldev.cz"},{origin:"localhost"}],knownHosts:[{origin:"imloifkgjagghnncjkhggdhalmcnfklk",label:"Trezor Password Manager (Develop)",icon:""},{origin:"niebkpllfhmpfbffbfifagfgoamhpflf",label:"Trezor Password Manager",icon:""},{origin:"trezor-connect@trezor.io",label:"Trezor Connect FF Extension",icon:""},{origin:"efbfhenfhihgdcmnfdkhaphjdnopihlf",label:"Trezor Connect Chrome Extension",icon:""},{origin:"mnpfhpndmjholfdlhpkjfmjkgppmodaf",label:"MetaMask",icon:""},{origin:"webextension@metamask.io",label:"MetaMask",icon:""},{origin:"file://",label:" ",icon:""}],onionDomains:{"trezor.io":"trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad.onion"},assets:[{name:"coins",url:"./data/coins.json"},{name:"bridge",url:"./data/bridge/releases.json"},{name:"firmware-t1",url:"./data/firmware/1/releases.json"},{name:"firmware-t2",url:"./data/firmware/2/releases.json"}],messages:"./data/messages/messages.json",supportedBrowsers:{chrome:{version:59,download:"https://www.google.com/chrome/",update:"https://support.google.com/chrome/answer/95414"},chromium:{version:59,download:"https://www.chromium.org/",update:"https://www.chromium.org/"},electron:{version:0,download:"https://www.electronjs.org/",update:"https://www.electronjs.org/"},firefox:{version:54,download:"https://www.mozilla.org/en-US/firefox/new/",update:"https://support.mozilla.org/en-US/kb/update-firefox-latest-version"}},supportedFirmware:[{coin:["xrp","txrp"],methods:["getAccountInfo"],min:["0","2.1.0"],max:void 0,comment:["Since firmware 2.1.0 there is a new protobuf field 'destination_tag' in RippleSignTx"]},{coin:["bnb"],min:["1.9.0","2.3.0"],comment:["There were protobuf backwards incompatible changes with introduction of 1.9.0/2.3.0 firmwares"]},{coin:["eth","tgor"],min:["1.8.0","2.1.0"],comment:["There were protobuf backwards incompatible changes."]},{methods:["rippleGetAddress","rippleSignTransaction"],min:["0","2.1.0"],comment:["Since firmware 2.1.0 there is a new protobuf field 'destination_tag' in RippleSignTx"]},{methods:["cardanoGetAddress","cardanoGetPublicKey"],min:["0","2.3.2"],comment:["Shelley fork support since firmware 2.3.2"]},{methods:["cardanoSignTransaction"],min:["0","2.4.2"],comment:["Non-streamed signing no longer supported"]},{methods:["cardanoGetNativeScriptHash"],min:["0","2.4.3"],comment:["Cardano GetNativeScriptHash call added in 2.4.3"]},{methods:["tezosSignTransaction"],min:["0","2.1.8"],comment:["Since 2.1.8 there are new protobuf fields in tezos transaction (Babylon fork)"]},{methods:["stellarSignTransaction"],min:["1.9.0","2.3.0"],comment:["There were protobuf backwards incompatible changes with introduction of 1.9.0/2.3.0 firmwares"]},{capabilities:["replaceTransaction","amountUnit"],min:["1.9.4","2.3.5"],comment:["new sign tx process since 1.9.4/2.3.5"]},{capabilities:["decreaseOutput"],min:["1.10.0","2.4.0"],comment:["allow reduce output in RBF transaction since 1.10.0/2.4.0"]},{capabilities:["eip1559"],min:["1.10.4","2.4.2"],comment:["new eth transaction pricing mechanism (EIP1559) since 1.10.4/2.4.2"]},{capabilities:["taproot","signMessageNoScriptType"],min:["1.10.4","2.4.3"],comment:["new btc accounts taproot since 1.10.4/2.4.3 (BTC + TEST only)","SignMessage with no_script_type support"]},{coin:["dcr","tdcr"],methods:["signTransaction"],min:["1.10.1","2.4.0"],comment:[""]},{methods:["ethereumSignTypedData"],min:["1.10.5","2.4.3"],comment:["EIP-712 typed signing support added in 1.10.5/2.4.3"]},{capabilities:["eip712-domain-only"],min:["1.10.6","2.4.4"],comment:["EIP-712 domain-only signing, when primaryType=EIP712Domain"]},{capabilities:["coinjoin"],methods:["authorizeCoinjoin","getOwnershipId","getOwnershipProof","setBusy","unlockPath"],min:["1.12.1","2.5.3"]}]}},4632:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseConnectSettings=t.corsValidator=t.DEFAULT_PRIORITY=void 0;const r=o(9841);t.DEFAULT_PRIORITY=2;const n={configSrc:"./data/config.json",version:r.VERSION,debug:!1,priority:t.DEFAULT_PRIORITY,trustedHost:!0,connectSrc:r.DEFAULT_DOMAIN,iframeSrc:`${r.DEFAULT_DOMAIN}iframe.html`,popup:!1,popupSrc:`${r.DEFAULT_DOMAIN}popup.html`,webusbSrc:`${r.DEFAULT_DOMAIN}webusb.html`,transports:void 0,pendingTransportEvent:!0,env:"node",lazyLoad:!1,timestamp:(new Date).getTime(),interactionTimeout:600};t.corsValidator=e=>{if("string"==typeof e)return e.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*trezor\.io\//)||e.match(/^https?:\/\/localhost:[58][0-9]{3}\//)||e.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*sldev\.cz\//)||e.match(/^https?:\/\/([A-Za-z0-9\-_]+\.)*trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad\.onion\//)?e:void 0};t.parseConnectSettings=(e={})=>{var o;const i={...n};"debug"in e&&("boolean"==typeof e.debug?i.debug=e.debug:"string"==typeof e.debug&&(i.debug="true"===e.debug)),"string"==typeof e.connectSrc&&(null===(o=e.connectSrc)||void 0===o?void 0:o.startsWith("http"))?i.connectSrc=(0,t.corsValidator)(e.connectSrc):i.trustedHost&&(i.connectSrc=e.connectSrc);const a=i.connectSrc||r.DEFAULT_DOMAIN;return i.iframeSrc=`${a}iframe.html`,i.popupSrc=`${a}popup.html`,i.webusbSrc=`${a}webusb.html`,"boolean"==typeof e.transportReconnect&&(i.transportReconnect=e.transportReconnect),"boolean"==typeof e.webusb&&(i.webusb=e.webusb),Array.isArray(e.transports)&&(i.transports=e.transports),"boolean"==typeof e.popup&&(i.popup=e.popup),"boolean"==typeof e.lazyLoad&&(i.lazyLoad=e.lazyLoad),"boolean"==typeof e.pendingTransportEvent&&(i.pendingTransportEvent=e.pendingTransportEvent),"string"==typeof e.extension&&(i.extension=e.extension),"string"==typeof e.env&&(i.env=e.env),"number"==typeof e.timestamp&&(i.timestamp=e.timestamp),"number"==typeof e.interactionTimeout&&(i.interactionTimeout=e.interactionTimeout),"object"==typeof e.manifest&&(i.manifest=(e=>{if(e&&"string"==typeof e.email&&"string"==typeof e.appUrl)return{email:e.email,appUrl:e.appUrl}})(e.manifest)),i}},9841:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_DOMAIN=t.VERSION=void 0,t.VERSION="9.0.11";const o=t.VERSION.split(".").map((e=>parseInt(e,10)));t.DEFAULT_DOMAIN=`https://connect.trezor.io/${o[0]}/`},36376:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createBlockchainMessage=t.BLOCKCHAIN=t.BLOCKCHAIN_EVENT=void 0,t.BLOCKCHAIN_EVENT="BLOCKCHAIN_EVENT",t.BLOCKCHAIN={CONNECT:"blockchain-connect",ERROR:"blockchain-error",BLOCK:"blockchain-block",NOTIFICATION:"blockchain-notification",FIAT_RATES_UPDATE:"fiat-rates-update"};t.createBlockchainMessage=(e,o)=>({event:t.BLOCKCHAIN_EVENT,type:e,payload:o})},75484:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createResponseMessage=t.RESPONSE_EVENT=void 0;const r=o(39880);t.RESPONSE_EVENT="RESPONSE_EVENT";t.createResponseMessage=(e,o,n)=>({event:t.RESPONSE_EVENT,type:t.RESPONSE_EVENT,id:e,success:o,payload:o?n:(0,r.serializeError)(n)})},55629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createErrorMessage=t.parseMessage=t.CORE_EVENT=void 0,t.CORE_EVENT="CORE_EVENT";t.parseMessage=e=>{const t={event:e.event,type:e.type,payload:e.payload};return"number"==typeof e.id&&(t.id=e.id),"boolean"==typeof e.success&&(t.success=e.success),t};t.createErrorMessage=e=>({success:!1,payload:{error:e.message,code:e.code}})},75772:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createDeviceMessage=t.DEVICE=t.DEVICE_EVENT=void 0,t.DEVICE_EVENT="DEVICE_EVENT",t.DEVICE={CONNECT:"device-connect",CONNECT_UNACQUIRED:"device-connect_unacquired",DISCONNECT:"device-disconnect",CHANGED:"device-changed",ACQUIRE:"device-acquire",RELEASE:"device-release",ACQUIRED:"device-acquired",RELEASED:"device-released",USED_ELSEWHERE:"device-used_elsewhere",LOADING:"device-loading",BUTTON:"button",PIN:"pin",PASSPHRASE:"passphrase",PASSPHRASE_ON_DEVICE:"passphrase_on_device",WORD:"word"};t.createDeviceMessage=(e,o)=>({event:t.DEVICE_EVENT,type:e,payload:o})},57075:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIFrameMessage=t.IFRAME=void 0;const r=o(28449);t.IFRAME={BOOTSTRAP:"iframe-bootstrap",LOADED:"iframe-loaded",INIT:"iframe-init",ERROR:"iframe-error",CALL:"iframe-call"};t.createIFrameMessage=(e,t)=>({event:r.UI_EVENT,type:e,payload:t})},92461:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;const r=o(51748),n=o(28449),i=o(93697);r.__exportStar(o(36376),t),r.__exportStar(o(75484),t),r.__exportStar(o(55629),t),r.__exportStar(o(75772),t),r.__exportStar(o(57075),t),r.__exportStar(o(27532),t),r.__exportStar(o(67024),t),r.__exportStar(o(71484),t),r.__exportStar(o(28449),t),r.__exportStar(o(93697),t),t.UI={...n.UI_REQUEST,...i.UI_RESPONSE}},27532:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createPopupMessage=t.POPUP=void 0;const r=o(28449);t.POPUP={BOOTSTRAP:"popup-bootstrap",LOADED:"popup-loaded",INIT:"popup-init",ERROR:"popup-error",EXTENSION_USB_PERMISSIONS:"open-usb-permissions",HANDSHAKE:"popup-handshake",CLOSED:"popup-closed",CANCEL_POPUP_REQUEST:"ui-cancel-popup-request",CLOSE_WINDOW:"window.close"};t.createPopupMessage=(e,t)=>({event:r.UI_EVENT,type:e,payload:t})},67024:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createTransportMessage=t.TRANSPORT=t.TRANSPORT_EVENT=void 0;const r=o(39880);t.TRANSPORT_EVENT="TRANSPORT_EVENT",t.TRANSPORT={START:"transport-start",ERROR:"transport-error",UPDATE:"transport-update",STREAM:"transport-stream",REQUEST_DEVICE:"transport-request_device",DISABLE_WEBUSB:"transport-disable_webusb",START_PENDING:"transport-start_pending"};t.createTransportMessage=(e,o)=>({event:t.TRANSPORT_EVENT,type:e,payload:"error"in o?(0,r.serializeError)(o):o})},71484:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},28449:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createUiMessage=t.UI_REQUEST=t.UI_EVENT=void 0,t.UI_EVENT="UI_EVENT",t.UI_REQUEST={TRANSPORT:"ui-no_transport",BOOTLOADER:"ui-device_bootloader_mode",NOT_IN_BOOTLOADER:"ui-device_not_in_bootloader_mode",REQUIRE_MODE:"ui-device_require_mode",INITIALIZE:"ui-device_not_initialized",SEEDLESS:"ui-device_seedless",FIRMWARE_OLD:"ui-device_firmware_old",FIRMWARE_OUTDATED:"ui-device_firmware_outdated",FIRMWARE_NOT_SUPPORTED:"ui-device_firmware_unsupported",FIRMWARE_NOT_COMPATIBLE:"ui-device_firmware_not_compatible",FIRMWARE_NOT_INSTALLED:"ui-device_firmware_not_installed",FIRMWARE_PROGRESS:"ui-firmware-progress",DEVICE_NEEDS_BACKUP:"ui-device_needs_backup",REQUEST_UI_WINDOW:"ui-request_window",CLOSE_UI_WINDOW:"ui-close_window",REQUEST_PERMISSION:"ui-request_permission",REQUEST_CONFIRMATION:"ui-request_confirmation",REQUEST_PIN:"ui-request_pin",INVALID_PIN:"ui-invalid_pin",REQUEST_PASSPHRASE:"ui-request_passphrase",REQUEST_PASSPHRASE_ON_DEVICE:"ui-request_passphrase_on_device",INVALID_PASSPHRASE:"ui-invalid_passphrase",CONNECT:"ui-connect",LOADING:"ui-loading",SET_OPERATION:"ui-set_operation",SELECT_DEVICE:"ui-select_device",SELECT_ACCOUNT:"ui-select_account",SELECT_FEE:"ui-select_fee",UPDATE_CUSTOM_FEE:"ui-update_custom_fee",INSUFFICIENT_FUNDS:"ui-insufficient_funds",REQUEST_BUTTON:"ui-button",REQUEST_WORD:"ui-request_word",LOGIN_CHALLENGE_REQUEST:"ui-login_challenge_request",BUNDLE_PROGRESS:"ui-bundle_progress",ADDRESS_VALIDATION:"ui-address_validation",IFRAME_FAILURE:"ui-iframe_failure"};t.createUiMessage=(e,o)=>({event:t.UI_EVENT,type:e,payload:o})},93697:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createUiResponse=t.UI_RESPONSE=void 0;const r=o(28449);t.UI_RESPONSE={RECEIVE_PERMISSION:"ui-receive_permission",RECEIVE_CONFIRMATION:"ui-receive_confirmation",RECEIVE_PIN:"ui-receive_pin",RECEIVE_PASSPHRASE:"ui-receive_passphrase",RECEIVE_DEVICE:"ui-receive_device",RECEIVE_ACCOUNT:"ui-receive_account",RECEIVE_FEE:"ui-receive_fee",RECEIVE_WORD:"ui-receive_word",INVALID_PASSPHRASE_ACTION:"ui-invalid_passphrase_action",CHANGE_SETTINGS:"ui-change_settings",LOGIN_CHALLENGE_RESPONSE:"ui-login_challenge_response"};t.createUiResponse=(e,t)=>({event:r.UI_EVENT,type:e,payload:t})},66882:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseConnectSettings=void 0;const r=o(51748);r.__exportStar(o(41048),t),r.__exportStar(o(92461),t),r.__exportStar(o(66124),t);var n=o(4632);Object.defineProperty(t,"parseConnectSettings",{enumerable:!0,get:function(){return n.parseConnectSettings}})},99577:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.factory=void 0;const r=o(92461);t.factory=({eventEmitter:e,manifest:t,init:o,call:n,requestLogin:i,uiResponse:a,renderWebUSBButton:s,disableWebUSB:c,requestWebUSBDevice:l,cancel:d,dispose:u})=>({manifest:t,init:o,getSettings:()=>n({method:"getSettings"}),on:(t,o)=>{e.on(t,o)},off:(t,o)=>{e.removeListener(t,o)},removeAllListeners:t=>{"string"==typeof t?e.removeAllListeners(t):e.removeAllListeners()},uiResponse:a,blockchainGetAccountBalanceHistory:e=>n({...e,method:"blockchainGetAccountBalanceHistory"}),blockchainGetCurrentFiatRates:e=>n({...e,method:"blockchainGetCurrentFiatRates"}),blockchainGetFiatRatesForTimestamps:e=>n({...e,method:"blockchainGetFiatRatesForTimestamps"}),blockchainDisconnect:e=>n({...e,method:"blockchainDisconnect"}),blockchainEstimateFee:e=>n({...e,method:"blockchainEstimateFee"}),blockchainGetTransactions:e=>n({...e,method:"blockchainGetTransactions"}),blockchainSetCustomBackend:e=>n({...e,method:"blockchainSetCustomBackend"}),blockchainSubscribe:e=>n({...e,method:"blockchainSubscribe"}),blockchainSubscribeFiatRates:e=>n({...e,method:"blockchainSubscribeFiatRates"}),blockchainUnsubscribe:e=>n({...e,method:"blockchainUnsubscribe"}),blockchainUnsubscribeFiatRates:e=>n({...e,method:"blockchainUnsubscribeFiatRates"}),requestLogin:e=>i(e),cardanoGetAddress:t=>n({...t,method:"cardanoGetAddress",useEventListener:e.listenerCount(r.UI.ADDRESS_VALIDATION)>0}),cardanoGetNativeScriptHash:e=>n({...e,method:"cardanoGetNativeScriptHash"}),cardanoGetPublicKey:e=>n({...e,method:"cardanoGetPublicKey"}),cardanoSignTransaction:e=>n({...e,method:"cardanoSignTransaction"}),cipherKeyValue:e=>n({...e,method:"cipherKeyValue"}),composeTransaction:e=>n({...e,method:"composeTransaction"}),ethereumGetAddress:t=>n({...t,method:"ethereumGetAddress",useEventListener:e.listenerCount(r.UI.ADDRESS_VALIDATION)>0}),ethereumGetPublicKey:e=>n({...e,method:"ethereumGetPublicKey"}),ethereumSignMessage:e=>n({...e,method:"ethereumSignMessage"}),ethereumSignTransaction:e=>n({...e,method:"ethereumSignTransaction"}),ethereumSignTypedData:e=>n({...e,method:"ethereumSignTypedData"}),ethereumVerifyMessage:e=>n({...e,method:"ethereumVerifyMessage"}),getAccountInfo:e=>n({...e,method:"getAccountInfo"}),getAddress:t=>n({...t,method:"getAddress",useEventListener:e.listenerCount(r.UI.ADDRESS_VALIDATION)>0}),getDeviceState:e=>n({...e,method:"getDeviceState"}),getFeatures:e=>n({...e,method:"getFeatures"}),getFirmwareHash:e=>n({...e,method:"getFirmwareHash"}),getOwnershipId:e=>n({...e,method:"getOwnershipId"}),getOwnershipProof:e=>n({...e,method:"getOwnershipProof"}),getPublicKey:e=>n({...e,method:"getPublicKey"}),nemGetAddress:t=>n({...t,method:"nemGetAddress",useEventListener:e.listenerCount(r.UI.ADDRESS_VALIDATION)>0}),nemSignTransaction:e=>n({...e,method:"nemSignTransaction"}),pushTransaction:e=>n({...e,method:"pushTransaction"}),rippleGetAddress:t=>n({...t,method:"rippleGetAddress",useEventListener:e.listenerCount(r.UI.ADDRESS_VALIDATION)>0}),rippleSignTransaction:e=>n({...e,method:"rippleSignTransaction"}),signMessage:e=>n({...e,method:"signMessage"}),signTransaction:e=>n({...e,method:"signTransaction"}),stellarGetAddress:t=>n({...t,method:"stellarGetAddress",useEventListener:e.listenerCount(r.UI.ADDRESS_VALIDATION)>0}),stellarSignTransaction:e=>n({...e,method:"stellarSignTransaction"}),tezosGetAddress:t=>n({...t,method:"tezosGetAddress",useEventListener:e.listenerCount(r.UI.ADDRESS_VALIDATION)>0}),tezosGetPublicKey:e=>n({...e,method:"tezosGetPublicKey"}),tezosSignTransaction:e=>n({...e,method:"tezosSignTransaction"}),unlockPath:e=>n({...e,method:"unlockPath"}),eosGetPublicKey:e=>n({...e,method:"eosGetPublicKey"}),eosSignTransaction:e=>n({...e,method:"eosSignTransaction"}),binanceGetAddress:t=>n({...t,method:"binanceGetAddress",useEventListener:e.listenerCount(r.UI.ADDRESS_VALIDATION)>0}),binanceGetPublicKey:e=>n({...e,method:"binanceGetPublicKey"}),binanceSignTransaction:e=>n({...e,method:"binanceSignTransaction"}),verifyMessage:e=>n({...e,method:"verifyMessage"}),resetDevice:e=>n({...e,method:"resetDevice"}),wipeDevice:e=>n({...e,method:"wipeDevice"}),checkFirmwareAuthenticity:e=>n({...e,method:"checkFirmwareAuthenticity"}),applyFlags:e=>n({...e,method:"applyFlags"}),applySettings:e=>n({...e,method:"applySettings"}),authorizeCoinjoin:e=>n({...e,method:"authorizeCoinjoin"}),backupDevice:e=>n({...e,method:"backupDevice"}),changePin:e=>n({...e,method:"changePin"}),firmwareUpdate:e=>n({...e,method:"firmwareUpdate"}),recoveryDevice:e=>n({...e,method:"recoveryDevice"}),getCoinInfo:e=>n({...e,method:"getCoinInfo"}),rebootToBootloader:e=>n({...e,method:"rebootToBootloader"}),setBusy:e=>n({...e,method:"setBusy"}),setProxy:e=>n({...e,method:"setProxy"}),dispose:u,cancel:d,renderWebUSBButton:s,disableWebUSB:c,requestWebUSBDevice:l})},86209:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},25980:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},46558:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},25953:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},82078:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},77913:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9950:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},88882:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},20458:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},87743:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9195:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},66258:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},12766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},66124:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(51748);r.__exportStar(o(9950),t),r.__exportStar(o(86209),t),r.__exportStar(o(9195),t),r.__exportStar(o(66258),t),r.__exportStar(o(12766),t),r.__exportStar(o(26836),t),r.__exportStar(o(35701),t),r.__exportStar(o(25953),t),r.__exportStar(o(25980),t),r.__exportStar(o(46558),t),r.__exportStar(o(82078),t),r.__exportStar(o(88882),t),r.__exportStar(o(77913),t),r.__exportStar(o(20458),t),r.__exportStar(o(87743),t)},26836:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},35701:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},86201:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getLog=t.enableLogByPrefix=t.enableLog=t.initLog=void 0;const o={"@trezor/connect":"color: #f4a742; background: #000;",IFrame:"color: #f4a742; background: #000;",Core:"color: #f4a742; background: #000;",DescriptorStream:"color: #77ab59; background: #000;",DeviceList:"color: #77ab59; background: #000;",Device:"color: #bada55; background: #000;",DeviceCommands:"color: #bada55; background: #000;"};class r{constructor(e,t){this.prefix=e,this.enabled=t,this.messages=[],this.css="undefined"!=typeof window&&o[e]?o[e]:""}addMessage(e,t,...o){this.messages.push({level:e,prefix:t,message:o,timestamp:(new Date).getTime()}),this.messages.length>100&&this.messages.shift()}log(...e){this.addMessage("log",this.prefix,...e),this.enabled&&console.log(this.prefix,...e)}error(...e){this.addMessage("error",this.prefix,...e),this.enabled&&console.error(this.prefix,...e)}warn(...e){this.addMessage("warn",this.prefix,...e),this.enabled&&console.warn(this.prefix,...e)}debug(...e){this.addMessage("debug",this.prefix,...e),this.enabled&&(this.css?console.log(`%c${this.prefix}`,this.css,...e):console.log(this.prefix,...e))}}const n={};t.initLog=(e,t)=>{const o=new r(e,!!t);return n[e]=o,o};t.enableLog=e=>{Object.keys(n).forEach((t=>{n[t].enabled=!!e}))};t.enableLogByPrefix=(e,t)=>{n[e]&&(n[e].enabled=t)};t.getLog=()=>{let e=[];return Object.keys(n).forEach((t=>{e=e.concat(n[t].messages)})),e.sort(((e,t)=>e.timestamp-t.timestamp)),e}},2134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getOnionDomain=t.getHost=t.getOrigin=void 0;t.getOrigin=e=>{var t;if("string"!=typeof e)return"unknown";if(0===e.indexOf("file://"))return"file://";const[o]=null!==(t=e.match(/^https?:\/\/[^/]+/))&&void 0!==t?t:[];return null!=o?o:"unknown"};t.getHost=e=>{var t;if("string"!=typeof e)return;const[,,o]=null!==(t=e.match(/^(https?):\/\/([^:/]+)?/i))&&void 0!==t?t:[];if(o){const e=o.split(".");return e.length>2?e.slice(e.length-2,e.length).join("."):o}};t.getOnionDomain=(e,o)=>{var r;if(Array.isArray(e))return e.map((e=>(0,t.getOnionDomain)(e,o)));if("string"==typeof e){const[,t,n,i,a]=null!==(r=e.match(/^(http|ws)s?:\/\/([^:/]+\.)?([^/.]+\.[^/.]+)(\/.*)?$/i))&&void 0!==r?r:[];return i&&o[i]?`${t}://${n||""}${o[i]}${a||""}`:e}return e}},51748:(e,t,o)=>{o.r(t),o.d(t,{__assign:()=>i,__asyncDelegator:()=>I,__asyncGenerator:()=>T,__asyncValues:()=>R,__await:()=>O,__awaiter:()=>f,__classPrivateFieldGet:()=>D,__classPrivateFieldIn:()=>C,__classPrivateFieldSet:()=>M,__createBinding:()=>E,__decorate:()=>s,__esDecorate:()=>l,__exportStar:()=>h,__extends:()=>n,__generator:()=>m,__importDefault:()=>N,__importStar:()=>P,__makeTemplateObject:()=>w,__metadata:()=>_,__param:()=>c,__propKey:()=>u,__read:()=>S,__rest:()=>a,__runInitializers:()=>d,__setFunctionName:()=>p,__spread:()=>g,__spreadArray:()=>y,__spreadArrays:()=>v,__values:()=>b,default:()=>U});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},r(e,t)};function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}var i=function(){return i=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};function a(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o}function s(e,t,o,r){var n,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,o,a):n(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a}function c(e,t){return function(o,r){t(o,r,e)}}function l(e,t,o,r,n,i){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,c=r.kind,l="getter"===c?"get":"setter"===c?"set":"value",d=!t&&e?r.static?e:e.prototype:null,u=t||(d?Object.getOwnPropertyDescriptor(d,r.name):{}),p=!1,_=o.length-1;_>=0;_--){var f={};for(var m in r)f[m]="access"===m?{}:r[m];for(var m in r.access)f.access[m]=r.access[m];f.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(e||null))};var E=(0,o[_])("accessor"===c?{get:u.get,set:u.set}:u[l],f);if("accessor"===c){if(void 0===E)continue;if(null===E||"object"!=typeof E)throw new TypeError("Object expected");(s=a(E.get))&&(u.get=s),(s=a(E.set))&&(u.set=s),(s=a(E.init))&&n.unshift(s)}else(s=a(E))&&("field"===c?n.unshift(s):u[l]=s)}d&&Object.defineProperty(d,r.name,u),p=!0}function d(e,t,o){for(var r=arguments.length>2,n=0;n<t.length;n++)o=r?t[n].call(e,o):t[n].call(e);return r?o:void 0}function u(e){return"symbol"==typeof e?e:"".concat(e)}function p(e,t,o){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:o?"".concat(o," ",t):t})}function _(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function m(e,t){var o,r,n,i,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(o=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){a.label=s[1];break}if(6===s[0]&&a.label<n[1]){a.label=n[1],n=s;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(s);break}n[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{o=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}var E=Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]};function h(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||E(t,e,o)}function b(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],r=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function S(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var r,n,i=o.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){n={error:e}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return a}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(S(arguments[t]));return e}function v(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var r=Array(e),n=0;for(t=0;t<o;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,n++)r[n]=i[a];return r}function y(e,t,o){if(o||2===arguments.length)for(var r,n=0,i=t.length;n<i;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function T(e,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,n=o.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){n[e]&&(r[e]=function(t){return new Promise((function(o,r){i.push([e,t,o,r])>1||s(e,t)}))})}function s(e,t){try{(o=n[e](t)).value instanceof O?Promise.resolve(o.value.v).then(c,l):d(i[0][2],o)}catch(e){d(i[0][3],e)}var o}function c(e){s("next",e)}function l(e){s("throw",e)}function d(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function I(e){var t,o;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,n){t[r]=e[r]?function(t){return(o=!o)?{value:O(e[r](t)),done:!1}:n?n(t):t}:n}}function R(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,o=e[Symbol.asyncIterator];return o?o.call(e):(e=b(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(t){return new Promise((function(r,n){(function(e,t,o,r){Promise.resolve(r).then((function(t){e({value:t,done:o})}),t)})(r,n,(t=e[o](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var A=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&E(t,e,o);return A(t,e),t}function N(e){return e&&e.__esModule?e:{default:e}}function D(e,t,o,r){if("a"===o&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?r:"a"===o?r.call(e):r?r.value:t.get(e)}function M(e,t,o,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,o):n?n.value=o:t.set(e,o),o}function C(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}const U={__extends:n,__assign:i,__rest:a,__decorate:s,__param:c,__metadata:_,__awaiter:f,__generator:m,__createBinding:E,__exportStar:h,__values:b,__read:S,__spread:g,__spreadArrays:v,__spreadArray:y,__await:O,__asyncGenerator:T,__asyncDelegator:I,__asyncValues:R,__makeTemplateObject:w,__importStar:P,__importDefault:N,__classPrivateFieldGet:D,__classPrivateFieldSet:M,__classPrivateFieldIn:C}}}]);