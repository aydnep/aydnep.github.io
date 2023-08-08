(self.webpackChunk_dcentralab_web3_wallet_connector=self.webpackChunk_dcentralab_web3_wallet_connector||[]).push([[2065],{12906:(e,t,r)=>{const n=r(17187).EventEmitter,o=r(89539).inherits,s=r(86918),{PollingBlockTracker:a}=r(6842),i=r(94005),c=r(94282),u=r(52698),f=(r(6496),r(39728)),l=function(){};function d(e){const t=this;n.call(t),t.setMaxListeners(30),e=e||{};const r={sendAsync:t._handleAsync.bind(t)},o=e.blockTrackerProvider||r;t._blockTracker=e.blockTracker||new a({provider:o,pollingInterval:e.pollingInterval||4e3,setSkipCacheFlag:!0}),t._ready=new u,t.currentBlock=null,t._providers=[]}e.exports=d,o(d,n),d.prototype.start=function(e=l){const t=this;t._ready.go(),t._blockTracker.on("latest",(e=>{t._getBlockByNumberWithRetry(e,((e,r)=>{if(e)return void this.emit("error",e);if(!r)return console.log(r),void this.emit("error",new Error("Could not find block"));const n=(o=r,{number:s.toBuffer(o.number),hash:s.toBuffer(o.hash),parentHash:s.toBuffer(o.parentHash),nonce:s.toBuffer(o.nonce),mixHash:s.toBuffer(o.mixHash),sha3Uncles:s.toBuffer(o.sha3Uncles),logsBloom:s.toBuffer(o.logsBloom),transactionsRoot:s.toBuffer(o.transactionsRoot),stateRoot:s.toBuffer(o.stateRoot),receiptsRoot:s.toBuffer(o.receiptRoot||o.receiptsRoot),miner:s.toBuffer(o.miner),difficulty:s.toBuffer(o.difficulty),totalDifficulty:s.toBuffer(o.totalDifficulty),size:s.toBuffer(o.size),extraData:s.toBuffer(o.extraData),gasLimit:s.toBuffer(o.gasLimit),gasUsed:s.toBuffer(o.gasUsed),timestamp:s.toBuffer(o.timestamp),transactions:o.transactions});var o;t._setCurrentBlock(n),t.emit("rawBlock",r),t.emit("latest",r)}))})),t._blockTracker.on("sync",t.emit.bind(t,"sync")),t._blockTracker.on("error",t.emit.bind(t,"error")),t._running=!0,t.emit("start")},d.prototype.stop=function(){const e=this;e._blockTracker.removeAllListeners(),e._running=!1,e.emit("stop")},d.prototype.isRunning=function(){return this._running},d.prototype.addProvider=function(e,t){const r=this;"number"==typeof t?r._providers.splice(t,0,e):r._providers.push(e),e.setEngine(this)},d.prototype.removeProvider=function(e){const t=this._providers.indexOf(e);if(t<0)throw new Error("Provider not found.");this._providers.splice(t,1)},d.prototype.send=function(e){throw new Error("Web3ProviderEngine does not support synchronous requests.")},d.prototype.sendAsync=function(e,t){const r=this;r._ready.await((function(){Array.isArray(e)?i(e,r._handleAsync.bind(r),t):r._handleAsync(e,t)}))},d.prototype._getBlockByNumberWithRetry=function(e,t){const r=this;let n=5;return void o();function o(){r._getBlockByNumber(e,s)}function s(e,r){return e?t(e):r?void t(null,r):n>0?(n--,void setTimeout((function(){o()}),1e3)):void t(null,null)}},d.prototype._getBlockByNumber=function(e,t){const r=f({method:"eth_getBlockByNumber",params:[e,!1],skipCache:!0});this._handleAsync(r,((e,r)=>e?t(e):t(null,r.result)))},d.prototype._handleAsync=function(e,t){var r=this,n=-1,o=null,s=null,a=[];function i(r,n){s=r,o=n,c(a,(function(e,t){e?e(s,o,t):t()}),(function(){var r={id:e.id,jsonrpc:e.jsonrpc,result:o};null!=s?(r.error={message:s.stack||s.message||s,code:-32e3},t(s,r)):t(null,r)}))}!function t(o){if(n+=1,a.unshift(o),n>=r._providers.length)i(new Error('Request for method "'+e.method+'" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try{r._providers[n].handleRequest(e,t,i)}catch(e){i(e)}}()},d.prototype._setCurrentBlock=function(e){this.currentBlock=e,this.emit("block",e)}},86918:(e,t,r)=>{"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(82192),s=o.keccak224,a=o.keccak384,i=o.keccak256,c=o.keccak512,u=r(76666),f=r(69282),l=r(51675),d=r(13550),p=r(23482),h=r(89509).Buffer;Object.assign(t,r(80884)),t.MAX_INTEGER=new d("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),t.TWO_POW256=new d("10000000000000000000000000000000000000000000000000000000000000000",16),t.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",t.SHA3_NULL_S=t.KECCAK256_NULL_S,t.KECCAK256_NULL=h.from(t.KECCAK256_NULL_S,"hex"),t.SHA3_NULL=t.KECCAK256_NULL,t.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",t.SHA3_RLP_ARRAY_S=t.KECCAK256_RLP_ARRAY_S,t.KECCAK256_RLP_ARRAY=h.from(t.KECCAK256_RLP_ARRAY_S,"hex"),t.SHA3_RLP_ARRAY=t.KECCAK256_RLP_ARRAY,t.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",t.SHA3_RLP_S=t.KECCAK256_RLP_S,t.KECCAK256_RLP=h.from(t.KECCAK256_RLP_S,"hex"),t.SHA3_RLP=t.KECCAK256_RLP,t.BN=d,t.rlp=l,t.secp256k1=u,t.zeros=function(e){return h.allocUnsafe(e).fill(0)},t.zeroAddress=function(){var e=t.zeros(20);return t.bufferToHex(e)},t.setLengthLeft=t.setLength=function(e,r,n){var o=t.zeros(r);return e=t.toBuffer(e),n?e.length<r?(e.copy(o),o):e.slice(0,r):e.length<r?(e.copy(o,r-e.length),o):e.slice(-r)},t.setLengthRight=function(e,r){return t.setLength(e,r,!0)},t.unpad=t.stripZeros=function(e){for(var r=(e=t.stripHexPrefix(e))[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e},t.toBuffer=function(e){if(!h.isBuffer(e))if(Array.isArray(e))e=h.from(e);else if("string"==typeof e)e=t.isHexString(e)?h.from(t.padToEven(t.stripHexPrefix(e)),"hex"):h.from(e);else if("number"==typeof e)e=t.intToBuffer(e);else if(null==e)e=h.allocUnsafe(0);else if(d.isBN(e))e=e.toArrayLike(h);else{if(!e.toArray)throw new Error("invalid type");e=h.from(e.toArray())}return e},t.bufferToInt=function(e){return new d(t.toBuffer(e)).toNumber()},t.bufferToHex=function(e){return"0x"+(e=t.toBuffer(e)).toString("hex")},t.fromSigned=function(e){return new d(e).fromTwos(256)},t.toUnsigned=function(e){return h.from(e.toTwos(256).toArray())},t.keccak=function(e,r){switch(e=t.toBuffer(e),r||(r=256),r){case 224:return s(e);case 256:return i(e);case 384:return a(e);case 512:return c(e);default:throw new Error("Invald algorithm: keccak"+r)}},t.keccak256=function(e){return t.keccak(e)},t.sha3=t.keccak,t.sha256=function(e){return e=t.toBuffer(e),p("sha256").update(e).digest()},t.ripemd160=function(e,r){e=t.toBuffer(e);var n=p("rmd160").update(e).digest();return!0===r?t.setLength(n,32):n},t.rlphash=function(e){return t.keccak(l.encode(e))},t.isValidPrivate=function(e){return u.privateKeyVerify(e)},t.isValidPublic=function(e,t){return 64===e.length?u.publicKeyVerify(h.concat([h.from([4]),e])):!!t&&u.publicKeyVerify(e)},t.pubToAddress=t.publicToAddress=function(e,r){return e=t.toBuffer(e),r&&64!==e.length&&(e=u.publicKeyConvert(e,!1).slice(1)),f(64===e.length),t.keccak(e).slice(-20)};var g=t.privateToPublic=function(e){return e=t.toBuffer(e),u.publicKeyCreate(e,!1).slice(1)};t.importPublic=function(e){return 64!==(e=t.toBuffer(e)).length&&(e=u.publicKeyConvert(e,!1).slice(1)),e},t.ecsign=function(e,t){var r=u.sign(e,t),n={};return n.r=r.signature.slice(0,32),n.s=r.signature.slice(32,64),n.v=r.recovery+27,n},t.hashPersonalMessage=function(e){var r=t.toBuffer("Ethereum Signed Message:\n"+e.length.toString());return t.keccak(h.concat([r,e]))},t.ecrecover=function(e,r,n,o){var s=h.concat([t.setLength(n,32),t.setLength(o,32)],64),a=r-27;if(0!==a&&1!==a)throw new Error("Invalid signature v value");var i=u.recover(e,s,a);return u.publicKeyConvert(i,!1).slice(1)},t.toRpcSig=function(e,r,n){if(27!==e&&28!==e)throw new Error("Invalid recovery id");return t.bufferToHex(h.concat([t.setLengthLeft(r,32),t.setLengthLeft(n,32),t.toBuffer(e-27)]))},t.fromRpcSig=function(e){if(65!==(e=t.toBuffer(e)).length)throw new Error("Invalid signature length");var r=e[64];return r<27&&(r+=27),{v:r,r:e.slice(0,32),s:e.slice(32,64)}},t.privateToAddress=function(e){return t.publicToAddress(g(e))},t.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},t.isZeroAddress=function(e){return t.zeroAddress()===t.addHexPrefix(e)},t.toChecksumAddress=function(e){e=t.stripHexPrefix(e).toLowerCase();for(var r=t.keccak(e).toString("hex"),n="0x",o=0;o<e.length;o++)parseInt(r[o],16)>=8?n+=e[o].toUpperCase():n+=e[o];return n},t.isValidChecksumAddress=function(e){return t.isValidAddress(e)&&t.toChecksumAddress(e)===e},t.generateAddress=function(e,r){return e=t.toBuffer(e),r=(r=new d(r)).isZero()?null:h.from(r.toArray()),t.rlphash([e,r]).slice(-20)},t.isPrecompiled=function(e){var r=t.unpad(e);return 1===r.length&&r[0]>=1&&r[0]<=8},t.addHexPrefix=function(e){return"string"!=typeof e||t.isHexPrefixed(e)?e:"0x"+e},t.isValidSignature=function(e,t,r,n){var o=new d("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),s=new d("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);return 32===t.length&&32===r.length&&((27===e||28===e)&&(t=new d(t),r=new d(r),!(t.isZero()||t.gt(s)||r.isZero()||r.gt(s))&&(!1!==n||1!==new d(r).cmp(o))))},t.baToJSON=function(e){if(h.isBuffer(e))return"0x"+e.toString("hex");if(e instanceof Array){for(var r=[],n=0;n<e.length;n++)r.push(t.baToJSON(e[n]));return r}},t.defineProperties=function(e,r,o){if(e.raw=[],e._fields=[],e.toJSON=function(r){if(r){var n={};return e._fields.forEach((function(t){n[t]="0x"+e[t].toString("hex")})),n}return t.baToJSON(this.raw)},e.serialize=function(){return l.encode(e.raw)},r.forEach((function(r,n){function o(){return e.raw[n]}function s(o){"00"!==(o=t.toBuffer(o)).toString("hex")||r.allowZero||(o=h.allocUnsafe(0)),r.allowLess&&r.length?(o=t.stripZeros(o),f(r.length>=o.length,"The field "+r.name+" must not have more "+r.length+" bytes")):r.allowZero&&0===o.length||!r.length||f(r.length===o.length,"The field "+r.name+" must have byte length of "+r.length),e.raw[n]=o}e._fields.push(r.name),Object.defineProperty(e,r.name,{enumerable:!0,configurable:!0,get:o,set:s}),r.default&&(e[r.name]=r.default),r.alias&&Object.defineProperty(e,r.alias,{enumerable:!1,configurable:!0,set:s,get:o})})),o)if("string"==typeof o&&(o=h.from(t.stripHexPrefix(o),"hex")),h.isBuffer(o)&&(o=l.decode(o)),Array.isArray(o)){if(o.length>e._fields.length)throw new Error("wrong number of fields in data");o.forEach((function(r,n){e[e._fields[n]]=t.toBuffer(r)}))}else{if("object"!==(void 0===o?"undefined":n(o)))throw new Error("invalid data");var s=Object.keys(o);r.forEach((function(t){-1!==s.indexOf(t.name)&&(e[t.name]=o[t.name]),-1!==s.indexOf(t.alias)&&(e[t.alias]=o[t.alias])}))}}},76666:(e,t,r)=>{"use strict";var n=r(48764).Buffer,o=r(95053),s=r(64078),a=r(78741),i=function(e){return 32===e.length&&o.privateKeyVerify(Uint8Array.from(e))};e.exports={privateKeyVerify:i,privateKeyExport:function(e,t){if(32!==e.length)throw new RangeError("private key length is invalid");var r=s.privateKeyExport(e,t);return a.privateKeyExport(e,r,t)},privateKeyImport:function(e){if(null!==(e=a.privateKeyImport(e))&&32===e.length&&i(e))return e;throw new Error("couldn't import from DER format")},privateKeyNegate:function(e){return n.from(o.privateKeyNegate(Uint8Array.from(e)))},privateKeyModInverse:function(e){if(32!==e.length)throw new Error("private key length is invalid");return n.from(s.privateKeyModInverse(Uint8Array.from(e)))},privateKeyTweakAdd:function(e,t){return n.from(o.privateKeyTweakAdd(Uint8Array.from(e),t))},privateKeyTweakMul:function(e,t){return n.from(o.privateKeyTweakMul(Uint8Array.from(e),Uint8Array.from(t)))},publicKeyCreate:function(e,t){return n.from(o.publicKeyCreate(Uint8Array.from(e),t))},publicKeyConvert:function(e,t){return n.from(o.publicKeyConvert(Uint8Array.from(e),t))},publicKeyVerify:function(e){return(33===e.length||65===e.length)&&o.publicKeyVerify(Uint8Array.from(e))},publicKeyTweakAdd:function(e,t,r){return n.from(o.publicKeyTweakAdd(Uint8Array.from(e),Uint8Array.from(t),r))},publicKeyTweakMul:function(e,t,r){return n.from(o.publicKeyTweakMul(Uint8Array.from(e),Uint8Array.from(t),r))},publicKeyCombine:function(e,t){var r=[];return e.forEach((function(e){r.push(Uint8Array.from(e))})),n.from(o.publicKeyCombine(r,t))},signatureNormalize:function(e){return n.from(o.signatureNormalize(Uint8Array.from(e)))},signatureExport:function(e){return n.from(o.signatureExport(Uint8Array.from(e)))},signatureImport:function(e){return n.from(o.signatureImport(Uint8Array.from(e)))},signatureImportLax:function(e){if(0===e.length)throw new RangeError("signature length is invalid");var t=a.signatureImportLax(e);if(null===t)throw new Error("couldn't parse DER signature");return s.signatureImport(t)},sign:function(e,t,r){if(null===r)throw new TypeError("options should be an Object");var s=void 0;if(r){if(s={},null===r.data)throw new TypeError("options.data should be a Buffer");if(r.data){if(32!==r.data.length)throw new RangeError("options.data length is invalid");s.data=new Uint8Array(r.data)}if(null===r.noncefn)throw new TypeError("options.noncefn should be a Function");r.noncefn&&(s.noncefn=function(e,t,o,s,a){var i=null!=o?n.from(o):null,c=null!=s?n.from(s):null,u=n.from("");return r.noncefn&&(u=r.noncefn(n.from(e),n.from(t),i,c,a)),Uint8Array.from(u)})}var a=o.ecdsaSign(Uint8Array.from(e),Uint8Array.from(t),s);return{signature:n.from(a.signature),recovery:a.recid}},verify:function(e,t,r){return o.ecdsaVerify(Uint8Array.from(t),Uint8Array.from(e),r)},recover:function(e,t,r,s){return n.from(o.ecdsaRecover(Uint8Array.from(t),r,Uint8Array.from(e),s))},ecdh:function(e,t){return n.from(o.ecdh(Uint8Array.from(e),Uint8Array.from(t),{}))},ecdhUnsafe:function(e,t,r){if(33!==e.length&&65!==e.length)throw new RangeError("public key length is invalid");if(32!==t.length)throw new RangeError("private key length is invalid");return n.from(s.ecdhUnsafe(Uint8Array.from(e),Uint8Array.from(t),r))}}},78741:(e,t,r)=>{"use strict";var n=r(48764).Buffer,o=n.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),s=n.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);t.privateKeyExport=function(e,t,r){var a=n.from(r?o:s);return e.copy(a,r?8:9),t.copy(a,r?181:214),a},t.privateKeyImport=function(e){var t=e.length,r=0;if(t<r+1||48!==e[r])return null;if(t<(r+=1)+1||!(128&e[r]))return null;var n=127&e[r];if(n<1||n>2)return null;if(t<(r+=1)+n)return null;var o=e[r+n-1]|(n>1?e[r+n-2]<<8:0);return t<(r+=n)+o||t<r+3||2!==e[r]||1!==e[r+1]||1!==e[r+2]||t<(r+=3)+2||4!==e[r]||e[r+1]>32||t<r+2+e[r+1]?null:e.slice(r+2,r+2+e[r+1])},t.signatureImportLax=function(e){var t=n.alloc(32,0),r=n.alloc(32,0),o=e.length,s=0;if(48!==e[s++])return null;var a=e[s++];if(128&a&&(s+=a-128)>o)return null;if(2!==e[s++])return null;var i=e[s++];if(128&i){if(s+(a=i-128)>o)return null;for(;a>0&&0===e[s];s+=1,a-=1);for(i=0;a>0;s+=1,a-=1)i=(i<<8)+e[s]}if(i>o-s)return null;var c=s;if(s+=i,2!==e[s++])return null;var u=e[s++];if(128&u){if(s+(a=u-128)>o)return null;for(;a>0&&0===e[s];s+=1,a-=1);for(u=0;a>0;s+=1,a-=1)u=(u<<8)+e[s]}if(u>o-s)return null;var f=s;for(s+=u;i>0&&0===e[c];i-=1,c+=1);if(i>32)return null;var l=e.slice(c,c+i);for(l.copy(t,32-l.length);u>0&&0===e[f];u-=1,f+=1);if(u>32)return null;var d=e.slice(f,f+u);return d.copy(r,32-d.length),{r:t,s:r}}},64078:(e,t,r)=>{"use strict";var n=r(48764).Buffer,o=r(13550),s=new(0,r(86266).ec)("secp256k1"),a=s.curve;t.privateKeyExport=function(e,t){var r=new o(e);if(r.ucmp(a.n)>=0)throw new Error("couldn't export to DER format");var n=s.g.mul(r);return i(n.getX(),n.getY(),t)},t.privateKeyModInverse=function(e){var t=new o(e);if(t.ucmp(a.n)>=0||t.isZero())throw new Error("private key range is invalid");return t.invm(a.n).toArrayLike(n,"be",32)},t.signatureImport=function(e){var t=new o(e.r);t.ucmp(a.n)>=0&&(t=new o(0));var r=new o(e.s);return r.ucmp(a.n)>=0&&(r=new o(0)),n.concat([t.toArrayLike(n,"be",32),r.toArrayLike(n,"be",32)])},t.ecdhUnsafe=function(e,t,r){var n=s.keyFromPublic(e),c=new o(t);if(c.ucmp(a.n)>=0||c.isZero())throw new Error("scalar was invalid (zero or overflow)");var u=n.pub.mul(c);return i(u.getX(),u.getY(),r)};var i=function(e,t,r){var o=void 0;return r?((o=n.alloc(33))[0]=t.isOdd()?3:2,e.toArrayLike(n,"be",32).copy(o,1)):((o=n.alloc(65))[0]=4,e.toArrayLike(n,"be",32).copy(o,1),t.toArrayLike(n,"be",32).copy(o,33)),o}},78747:(e,t,r)=>{const n=r(7879),o=r(80047),s=r(89539).inherits,a=r(86918),i=r(2843),c=r(47529),u=r(80045),f=r(30398),l=r(28372),d=/^[0-9A-Fa-f]+$/g;function p(e){const t=this;t.nonceLock=u(1),e.getAccounts&&(t.getAccounts=e.getAccounts),e.processTransaction&&(t.processTransaction=e.processTransaction),e.processMessage&&(t.processMessage=e.processMessage),e.processPersonalMessage&&(t.processPersonalMessage=e.processPersonalMessage),e.processTypedMessage&&(t.processTypedMessage=e.processTypedMessage),t.approveTransaction=e.approveTransaction||t.autoApprove,t.approveMessage=e.approveMessage||t.autoApprove,t.approvePersonalMessage=e.approvePersonalMessage||t.autoApprove,t.approveDecryptMessage=e.approveDecryptMessage||t.autoApprove,t.approveEncryptionPublicKey=e.approveEncryptionPublicKey||t.autoApprove,t.approveTypedMessage=e.approveTypedMessage||t.autoApprove,e.signTransaction&&(t.signTransaction=e.signTransaction||v("signTransaction")),e.signMessage&&(t.signMessage=e.signMessage||v("signMessage")),e.signPersonalMessage&&(t.signPersonalMessage=e.signPersonalMessage||v("signPersonalMessage")),e.decryptMessage&&(t.decryptMessage=e.decryptMessage||v("decryptMessage")),e.encryptionPublicKey&&(t.encryptionPublicKey=e.encryptionPublicKey||v("encryptionPublicKey")),e.signTypedMessage&&(t.signTypedMessage=e.signTypedMessage||v("signTypedMessage")),e.recoverPersonalSignature&&(t.recoverPersonalSignature=e.recoverPersonalSignature),e.publishTransaction&&(t.publishTransaction=e.publishTransaction),t.estimateGas=e.estimateGas||t.estimateGas,t.getGasPrice=e.getGasPrice||t.getGasPrice}function h(e){return e.toLowerCase()}function g(e){const t=a.addHexPrefix(e);return a.isValidAddress(t)}function y(e){const t=a.addHexPrefix(e);return!a.isValidAddress(t)&&m(e)}function m(e){if(!("string"==typeof e))return!1;if(!("0x"===e.slice(0,2)))return!1;return e.slice(2).match(d)}function v(e){return function(t,r){r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "'+e+'" fn in constructor options'))}}e.exports=p,s(p,f),p.prototype.handleRequest=function(e,t,r){const o=this;let s,a,i,u,f;switch(o._parityRequests={},o._parityRequestCount=0,e.method){case"eth_coinbase":return void o.getAccounts((function(e,t){if(e)return r(e);let n=t[0]||null;r(null,n)}));case"eth_accounts":return void o.getAccounts((function(e,t){if(e)return r(e);r(null,t)}));case"eth_sendTransaction":return s=e.params[0],void n([e=>o.validateTransaction(s,e),e=>o.processTransaction(s,e)],r);case"eth_signTransaction":return s=e.params[0],void n([e=>o.validateTransaction(s,e),e=>o.processSignTransaction(s,e)],r);case"eth_sign":return f=e.params[0],u=e.params[1],i=e.params[2]||{},a=c(i,{from:f,data:u}),void n([e=>o.validateMessage(a,e),e=>o.processMessage(a,e)],r);case"personal_sign":return function(){const t=e.params[0];if(y(e.params[1])&&g(t)){let t="The eth_personalSign method requires params ordered ";t+="[message, address]. This was previously handled incorrectly, ",t+="and has been corrected automatically. ",t+="Please switch this param order for smooth behavior in the future.",console.warn(t),f=e.params[0],u=e.params[1]}else u=e.params[0],f=e.params[1];i=e.params[2]||{},a=c(i,{from:f,data:u}),n([e=>o.validatePersonalMessage(a,e),e=>o.processPersonalMessage(a,e)],r)}();case"eth_decryptMessage":return function(){const t=e.params[0];if(y(e.params[1])&&g(t)){let t="The eth_decryptMessage method requires params ordered ";t+="[message, address]. This was previously handled incorrectly, ",t+="and has been corrected automatically. ",t+="Please switch this param order for smooth behavior in the future.",console.warn(t),f=e.params[0],u=e.params[1]}else u=e.params[0],f=e.params[1];i=e.params[2]||{},a=c(i,{from:f,data:u}),n([e=>o.validateDecryptMessage(a,e),e=>o.processDecryptMessage(a,e)],r)}();case"encryption_public_key":return function(){const t=e.params[0];n([e=>o.validateEncryptionPublicKey(t,e),e=>o.processEncryptionPublicKey(t,e)],r)}();case"personal_ecRecover":return function(){u=e.params[0];let t=e.params[1];i=e.params[2]||{},a=c(i,{sig:t,data:u}),o.recoverPersonalSignature(a,r)}();case"eth_signTypedData":case"eth_signTypedData_v3":case"eth_signTypedData_v4":return function(){const t=e.params[0],s=e.params[1];g(t)?(f=t,u=s):(u=t,f=s),i=e.params[2]||{},a=c(i,{from:f,data:u}),n([e=>o.validateTypedMessage(a,e),e=>o.processTypedMessage(a,e)],r)}();case"parity_postTransaction":return s=e.params[0],void o.parityPostTransaction(s,r);case"parity_postSign":return f=e.params[0],u=e.params[1],void o.parityPostSign(f,u,r);case"parity_checkRequest":return function(){const t=e.params[0];o.parityCheckRequest(t,r)}();case"parity_defaultAccount":return void o.getAccounts((function(e,t){if(e)return r(e);const n=t[0]||null;r(null,n)}));default:return void t()}},p.prototype.getAccounts=function(e){e(null,[])},p.prototype.processTransaction=function(e,t){const r=this;n([t=>r.approveTransaction(e,t),(e,t)=>r.checkApproval("transaction",e,t),t=>r.finalizeAndSubmitTx(e,t)],t)},p.prototype.processSignTransaction=function(e,t){const r=this;n([t=>r.approveTransaction(e,t),(e,t)=>r.checkApproval("transaction",e,t),t=>r.finalizeTx(e,t)],t)},p.prototype.processMessage=function(e,t){const r=this;n([t=>r.approveMessage(e,t),(e,t)=>r.checkApproval("message",e,t),t=>r.signMessage(e,t)],t)},p.prototype.processPersonalMessage=function(e,t){const r=this;n([t=>r.approvePersonalMessage(e,t),(e,t)=>r.checkApproval("message",e,t),t=>r.signPersonalMessage(e,t)],t)},p.prototype.processDecryptMessage=function(e,t){const r=this;n([t=>r.approveDecryptMessage(e,t),(e,t)=>r.checkApproval("decryptMessage",e,t),t=>r.decryptMessage(e,t)],t)},p.prototype.processEncryptionPublicKey=function(e,t){const r=this;n([t=>r.approveEncryptionPublicKey(e,t),(e,t)=>r.checkApproval("encryptionPublicKey",e,t),t=>r.encryptionPublicKey(e,t)],t)},p.prototype.processTypedMessage=function(e,t){const r=this;n([t=>r.approveTypedMessage(e,t),(e,t)=>r.checkApproval("message",e,t),t=>r.signTypedMessage(e,t)],t)},p.prototype.autoApprove=function(e,t){t(null,!0)},p.prototype.checkApproval=function(e,t,r){r(t?null:new Error("User denied "+e+" signature."))},p.prototype.parityPostTransaction=function(e,t){const r=this,n=`0x${r._parityRequestCount.toString(16)}`;r._parityRequestCount++,r.emitPayload({method:"eth_sendTransaction",params:[e]},(function(e,t){if(e)return void(r._parityRequests[n]={error:e});const o=t.result;r._parityRequests[n]=o})),t(null,n)},p.prototype.parityPostSign=function(e,t,r){const n=this,o=`0x${n._parityRequestCount.toString(16)}`;n._parityRequestCount++,n.emitPayload({method:"eth_sign",params:[e,t]},(function(e,t){if(e)return void(n._parityRequests[o]={error:e});const r=t.result;n._parityRequests[o]=r})),r(null,o)},p.prototype.parityCheckRequest=function(e,t){const r=this._parityRequests[e]||null;return r?r.error?t(r.error):void t(null,r):t(null,null)},p.prototype.recoverPersonalSignature=function(e,t){let r;try{r=i.recoverPersonalSignature(e)}catch(e){return t(e)}t(null,r)},p.prototype.validateTransaction=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign transaction."));this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`))}))},p.prototype.validateMessage=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign message."));this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))}))},p.prototype.validatePersonalMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign personal message.")):void 0===e.data?t(new Error("Undefined message - message required to sign personal message.")):m(e.data)?void this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))})):t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))},p.prototype.validateDecryptMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to decrypt message.")):void 0===e.data?t(new Error("Undefined message - message required to decrypt message.")):m(e.data)?void this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error(`Unknown address - unable to decrypt message for this address: "${e.from}"`))})):t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))},p.prototype.validateEncryptionPublicKey=function(e,t){this.validateSender(e,(function(r,n){return r?t(r):n?void t():t(new Error(`Unknown address - unable to obtain encryption public key for this address: "${e}"`))}))},p.prototype.validateTypedMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign typed data.")):void 0===e.data?t(new Error("Undefined data - message required to sign typed data.")):void this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))}))},p.prototype.validateSender=function(e,t){if(!e)return t(null,!1);this.getAccounts((function(r,n){if(r)return t(r);const o=-1!==n.map(h).indexOf(e.toLowerCase());t(null,o)}))},p.prototype.finalizeAndSubmitTx=function(e,t){const r=this;r.nonceLock.take((function(){n([r.fillInTxExtras.bind(r,e),r.signTransaction.bind(r),r.publishTransaction.bind(r)],(function(e,n){if(r.nonceLock.leave(),e)return t(e);t(null,n)}))}))},p.prototype.finalizeTx=function(e,t){const r=this;r.nonceLock.take((function(){n([r.fillInTxExtras.bind(r,e),r.signTransaction.bind(r)],(function(n,o){if(r.nonceLock.leave(),n)return t(n);t(null,{raw:o,tx:e})}))}))},p.prototype.publishTransaction=function(e,t){this.emitPayload({method:"eth_sendRawTransaction",params:[e]},(function(e,r){if(e)return t(e);t(null,r.result)}))},p.prototype.estimateGas=function(e,t){l(this.engine,e,t)},p.prototype.getGasPrice=function(e){this.emitPayload({method:"eth_gasPrice",params:[]},(function(t,r){if(t)return e(t);e(null,r.result)}))},p.prototype.fillInTxExtras=function(e,t){const r=this,n=e.from,s={};void 0===e.gasPrice&&(s.gasPrice=r.getGasPrice.bind(r)),void 0===e.nonce&&(s.nonce=r.emitPayload.bind(r,{method:"eth_getTransactionCount",params:[n,"pending"]})),void 0===e.gas&&(s.gas=r.estimateGas.bind(r,function(e){return{from:e.from,to:e.to,value:e.value,data:e.data,gas:e.gas,gasPrice:e.gasPrice,nonce:e.nonce}}(e))),o(s,(function(r,n){if(r)return t(r);const o={};n.gasPrice&&(o.gasPrice=n.gasPrice),n.nonce&&(o.nonce=n.nonce.result),n.gas&&(o.gas=n.gas),t(null,c(e,o))}))}},74730:(e,t,r)=>{const n=r(34155).browser?r(41875):r(39342),o=r(89539).inherits,s=r(39728),a=r(30398),{ethErrors:i,serializeError:c}=r(58594);function u(e){this.rpcUrl=e.rpcUrl}e.exports=u,o(u,a),u.prototype.handleRequest=function(e,t,r){const o=this.rpcUrl,a=function(e){return{id:e.id,jsonrpc:e.jsonrpc,method:e.method,params:e.params}}(e),u=s(a);n({uri:o,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(u),rejectUnauthorized:!1,timeout:2e4},(function(e,t,n){if(e)return r(c(e));switch(t.statusCode){case 405:return r(i.rpc.methodNotFound());case 504:return function(){let e="Gateway timeout. The request took too long to process. ";e+="This can happen when querying logs over too wide a block range.";const t=new Error("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range.");return r(c(t))}();case 429:return function(){const e=new Error("Too Many Requests");return r(c(e))}();default:if(200!=t.statusCode){const e="Unknown Error: "+t.body,n=new Error(e);return r(c(n))}}let o;try{o=JSON.parse(n)}catch(e){return console.error(e.stack),r(c(e))}if(o.error)return r(o.error);r(null,o.result)}))}},30398:(e,t,r)=>{const n=r(39728);function o(){}e.exports=o,o.prototype.setEngine=function(e){const t=this;t.engine||(t.engine=e,e.on("block",(function(e){t.currentBlock=e})),e.on("start",(function(){t.start()})),e.on("stop",(function(){t.stop()})))},o.prototype.handleRequest=function(e,t,r){throw new Error("Subproviders should override `handleRequest`.")},o.prototype.emitPayload=function(e,t){this.engine.sendAsync(n(e),t)},o.prototype.stop=function(){},o.prototype.start=function(){}},49837:(e,t,r)=>{const n=r(25144),o=r(17187),s=(r(89539).inherits,r.g.WebSocket||r(94103)),a=r(30398),i=r(39728);class c extends a{constructor({rpcUrl:e,debug:t,origin:r}){super(),o.call(this),Object.defineProperties(this,{_backoff:{value:n.exponential({randomisationFactor:.2,maxDelay:5e3})},_connectTime:{value:null,writable:!0},_log:{value:t?(...e)=>console.info.apply(console,["[WSProvider]",...e]):()=>{}},_origin:{value:r},_pendingRequests:{value:new Map},_socket:{value:null,writable:!0},_unhandledRequests:{value:[]},_url:{value:e}}),this._handleSocketClose=this._handleSocketClose.bind(this),this._handleSocketMessage=this._handleSocketMessage.bind(this),this._handleSocketOpen=this._handleSocketOpen.bind(this),this._backoff.on("ready",(()=>{this._openSocket()})),this._openSocket()}handleRequest(e,t,r){if(!this._socket||this._socket.readyState!==s.OPEN)return this._unhandledRequests.push(Array.from(arguments)),void this._log("Socket not open. Request queued.");this._pendingRequests.set(e.id,[e,r]);const n=i(e);delete n.origin,this._socket.send(JSON.stringify(n)),this._log(`Sent: ${n.method} #${n.id}`)}_handleSocketClose({reason:e,code:t}){this._log(`Socket closed, code ${t} (${e||"no reason"})`),this._connectTime&&Date.now()-this._connectTime>5e3&&this._backoff.reset(),this._socket.removeEventListener("close",this._handleSocketClose),this._socket.removeEventListener("message",this._handleSocketMessage),this._socket.removeEventListener("open",this._handleSocketOpen),this._socket=null,this._backoff.backoff()}_handleSocketMessage(e){let t;try{t=JSON.parse(e.data)}catch(e){return void this._log("Received a message that is not valid JSON:",t)}if(void 0===t.id)return this.engine.emit("data",null,t);if(!this._pendingRequests.has(t.id))return;const[r,n]=this._pendingRequests.get(t.id);if(this._pendingRequests.delete(t.id),this._log(`Received: ${r.method} #${t.id}`),t.error)return n(new Error(t.error.message));n(null,t.result)}_handleSocketOpen(){this._log("Socket open."),this._connectTime=Date.now(),this._pendingRequests.forEach((([e,t])=>{this._unhandledRequests.push([e,null,t])})),this._pendingRequests.clear();this._unhandledRequests.splice(0,this._unhandledRequests.length).forEach((e=>{this.handleRequest.apply(this,e)}))}_openSocket(){this._log("Opening socket..."),this._socket=new s(this._url,[],this._origin?{headers:{origin:this._origin}}:{}),this._socket.addEventListener("close",this._handleSocketClose),this._socket.addEventListener("message",this._handleSocketMessage),this._socket.addEventListener("open",this._handleSocketOpen)}}Object.assign(c.prototype,o.prototype),e.exports=c},39728:(e,t,r)=>{const n=r(88620),o=r(47529);e.exports=function(e){return o({id:n(),jsonrpc:"2.0",params:[]},e)}},28372:(e,t,r)=>{const n=r(39728);e.exports=function(e,t,r){e.sendAsync(n({method:"eth_estimateGas",params:[t]}),(function(e,t){if(e)return"no contract code at given address"===e.message?r(null,"0xcf08"):r(e);r(null,t.result)}))}},88620:e=>{e.exports=function(){return Math.floor(Number.MAX_SAFE_INTEGER*Math.random())}},6496:(e,t,r)=>{const n=r(67266);function o(e){return"never"!==i(e)}function s(e){var t=a(e);return t>=e.params.length?e.params:"eth_getBlockByNumber"===e.method?e.params.slice(1):e.params.slice(0,t)}function a(e){switch(e.method){case"eth_getStorageAt":return 2;case"eth_getBalance":case"eth_getCode":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":return 1;case"eth_getBlockByNumber":return 0;default:return}}function i(e){switch(e.method){case"web3_clientVersion":case"web3_sha3":case"eth_protocolVersion":case"eth_getBlockTransactionCountByHash":case"eth_getUncleCountByBlockHash":case"eth_getCode":case"eth_getBlockByHash":case"eth_getTransactionByHash":case"eth_getTransactionByBlockHashAndIndex":case"eth_getTransactionReceipt":case"eth_getUncleByBlockHashAndIndex":case"eth_getCompilers":case"eth_compileLLL":case"eth_compileSolidity":case"eth_compileSerpent":case"shh_version":return"perma";case"eth_getBlockByNumber":case"eth_getBlockTransactionCountByNumber":case"eth_getUncleCountByBlockNumber":case"eth_getTransactionByBlockNumberAndIndex":case"eth_getUncleByBlockNumberAndIndex":return"fork";case"eth_gasPrice":case"eth_getBalance":case"eth_getStorageAt":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":case"eth_getFilterLogs":case"eth_getLogs":case"eth_blockNumber":return"block";case"net_version":case"net_peerCount":case"net_listening":case"eth_syncing":case"eth_sign":case"eth_coinbase":case"eth_mining":case"eth_hashrate":case"eth_accounts":case"eth_sendTransaction":case"eth_sendRawTransaction":case"eth_newFilter":case"eth_newBlockFilter":case"eth_newPendingTransactionFilter":case"eth_uninstallFilter":case"eth_getFilterChanges":case"eth_getWork":case"eth_submitWork":case"eth_submitHashrate":case"db_putString":case"db_getString":case"db_putHex":case"db_getHex":case"shh_post":case"shh_newIdentity":case"shh_hasIdentity":case"shh_newGroup":case"shh_addToGroup":case"shh_newFilter":case"shh_uninstallFilter":case"shh_getFilterChanges":case"shh_getMessages":return"never"}}e.exports={cacheIdentifierForPayload:function(e,t={}){if(!o(e))return null;const{includeBlockRef:r}=t,a=r?e.params:s(e);return e.method+":"+n(a)},canCache:o,blockTagForPayload:function(e){var t=a(e);if(t>=e.params.length)return null;return e.params[t]},paramsWithoutBlockTag:s,blockTagParamIndex:a,cacheTypeForPayload:i}},52698:(e,t,r)=>{const n=r(17187).EventEmitter,o=r(89539).inherits;function s(){n.call(this),this.isLocked=!0}e.exports=s,o(s,n),s.prototype.go=function(){this.isLocked=!1,this.emit("unlock")},s.prototype.stop=function(){this.isLocked=!0,this.emit("lock")},s.prototype.await=function(e){const t=this;t.isLocked?t.once("unlock",e):setTimeout(e)}}}]);