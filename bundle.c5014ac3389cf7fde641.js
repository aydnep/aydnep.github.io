"use strict";(self.webpackChunk_dcentralab_web3_wallet_connector=self.webpackChunk_dcentralab_web3_wallet_connector||[]).push([[6802],{85723:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(48764);t.default=class{constructor(){this.buf=r.Buffer.alloc(0)}get length(){return this.buf.length}read(e){if(0===e)return r.Buffer.alloc(0);if(e<0)throw new Error("invalid length");const t=this.buf.slice(0,e);if(this.buf=this.buf.slice(e),t.length<e)throw new Error("Not enough buffer");return t}push(e){e.length&&(this.buf=r.Buffer.concat([this.buf,e]))}}},67640:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class extends Array{constructor(){super(...arguments),this.byteSpan=[0,0]}setByteSpan(e){this.byteSpan=e}getByteSpan(){return this.byteSpan}}},1022:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n extends Map{constructor(){super(...arguments),this.byteSpan=[0,0]}setByteSpan(e){this.byteSpan=e}getByteSpan(){return this.byteSpan}}t.default=n},95257:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e,t){this.byteSpan=[0,0],this.value=e,this.tag=t}setByteSpan(e){this.byteSpan=e}getByteSpan(){return this.byteSpan}}},36217:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return s(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const f=n(48764),u=i(n(42830)),o=a(n(44431)),l=n(73726),d=a(n(85723)),c=a(n(61604)),h=a(n(95257)),p=a(n(67640)),_=a(n(1022)),y=e=>255===e;class b extends u.Transform{constructor(){super({writableObjectMode:!1,readableObjectMode:!0}),this.needed=null,this.fresh=!0,this._parser=this.parse(),this.offset=0,this.usedBytes=[],this.bl=new d.default,this.restart()}static decode(e){const t=new b,n=new d.default;n.push(e);const r=t.parse();let s=r.next();for(;!s.done;){const e=n.read(s.value);if(null==e||e.length!==s.value)throw new Error("Insufficient data");s=r.next(e)}if(n.length>0)throw new Error("Remaining Bytes");return{bytes:e,value:s.value}}readUInt64(e,t,n){const r=(0,l.getBigNum)(e,t);return o.default.isBigNumber(r)?(0,l.addSpanBytesToObject)(r,[n,this.offset]):r}updateTracker(e){this.usedBytes.push(e),this.offset+=e.length}*readIndefiniteStringLength(e,t){let n,r=yield 1;const s=r.readUInt8(0);if(255===s)n=-1;else{const i=31&s,a=this.readLength(i,t);let f=a.next();for(;!f.done;)r=yield f.value,this.updateTracker(r),f=a.next(r);if(n=f.value,n<0||s>>5!==e)throw new Error("Invalid indefinite length encoding")}return n}*readLength(e,t){if(e<24)return e;if(24===e){return(yield 1).readUInt8(0)}if(25===e){return(yield 2).readUInt16BE(0)}if(26===e){return(yield 4).readUInt32BE(0)}if(27===e){const e=(yield 4).readUInt32BE(0),n=(yield 4).readUInt32BE(0);return this.readUInt64(e,n,t)}if(31===e)return-1;throw new Error("Invalid length encoding")}_transform(e,t,n){for(this.bl.push(e);this.bl.length>=this.needed;){let e,t=null;e=null===this.needed?void 0:this.bl.read(this.needed);try{t=this._parser.next(e)}catch(e){return n(e)}this.needed&&(this.fresh=!1),t.done?(this.push({bytes:this.usedBytes,value:t.value}),this.restart()):this.needed=t.value||1/0}return n()}*parse(e){let t,n=this.offset;e?(t=e,n-=e.length):(t=yield 1,this.updateTracker(t));const r=t.readUInt8(0),s=r>>5,i=31&r;let a;if(7===s){if(25===i){t=yield 2,this.updateTracker(t);return(e=>{const t=32768&e;let n=31744&e;const r=1023&e;if(31744===n)n=261120;else if(0!==n)n+=114688;else if(0!==r)return(t?-1:1)*r*l.POW_2_24;const s=f.Buffer.alloc(4);return s.writeUInt32BE(t<<16|n<<13|r<<13),s.readFloatBE(0)})(t.readUInt16BE(0))}if(26===i)return t=yield 4,this.updateTracker(t),t.readFloatBE(0);if(27===i)return t=yield 8,this.updateTracker(t),t.readDoubleBE(0)}const u=this.readLength(i,n);let d=u.next();for(;!d.done;)t=yield d.value,this.updateTracker(t),d=u.next(t);if(a=d.value,a<0&&(s<2||s>6))throw new Error("Invalid length");switch(s){case 0:return a;case 1:if(a===Number.MAX_SAFE_INTEGER){const e=new o.default(-1).minus(new o.default(Number.MAX_SAFE_INTEGER.toString(16),16));return(0,l.addSpanBytesToObject)(e,[n,this.offset])}if(o.default.isBigNumber(a)){const e=new o.default(-1).minus(a);return(0,l.addSpanBytesToObject)(e,[n,this.offset])}return-1-a;case 2:if(a<0){const e=[];{const e=this.readIndefiniteStringLength(s,n);let r=e.next();for(;!r.done;)t=yield r.value,this.updateTracker(t),r=e.next(t);a=r.value}for(;a>=0;){t=yield a,this.updateTracker(t),e.push(t);{const e=this.readIndefiniteStringLength(s,n);let r=e.next();for(;!r.done;)t=yield r.value,this.updateTracker(t),r=e.next(t);a=r.value}}const r=f.Buffer.concat(e);return(0,l.addSpanBytesToObject)(r,[n,this.offset])}return t=yield a,this.updateTracker(t),(0,l.addSpanBytesToObject)(t,[n,this.offset]);case 3:{const e=[];if(a<0){{const e=this.readIndefiniteStringLength(s,n);let r=e.next();for(;!r.done;)t=yield r.value,this.updateTracker(t),r=e.next(t);a=r.value}for(;a>=0;){t=yield a,this.updateTracker(t),e.push(t);{const e=this.readIndefiniteStringLength(s,n);let r=e.next();for(;!r.done;)t=yield r.value,this.updateTracker(t),r=e.next(t);a=r.value}}return(0,l.utf8Decoder)(f.Buffer.concat(e))}t=yield a,this.updateTracker(t);return(0,l.utf8Decoder)(t)}case 4:{if(a<0){const e=new p.default;t=yield 1,this.updateTracker(t);let r=t.readUInt8(0);for(;!y(r);)e.push(yield*this.parse(t)),t=yield 1,this.updateTracker(t),r=t.readUInt8(0);return e.setByteSpan([n,this.offset]),e}const e=new p.default;for(let t=0;t<a;t+=1)e.push(yield*this.parse());return e.setByteSpan([n,this.offset]),e}case 5:{if(a<0){const e=new _.default;t=yield 1,this.updateTracker(t);let r=t.readUInt8(0);for(;!y(r);){const n=yield*this.parse(t),s=yield*this.parse();e.set(n,s),t=yield 1,this.updateTracker(t),r=t.readUInt8(0)}return e.setByteSpan([n,this.offset]),e}const e=new _.default;for(let t=0;t<a;t+=1){const t=yield*this.parse(),n=yield*this.parse();e.set(t,n)}return e.setByteSpan([n,this.offset]),e}case 6:{const e=new h.default(yield*this.parse(),a);return e.setByteSpan([n,this.offset]),e}case 7:switch(a){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;default:return new c.default(a)}default:throw new Error("Invalid CBOR encoding")}}restart(){this.needed=null,this._parser=this.parse(),this.fresh=!0,this.offset=0,this.usedBytes=[]}_flush(e){e(this.fresh?null:new Error("unexpected end of input"))}}t.default=b},61604:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.value=e}}},87747:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(48764),i=r(n(44431)),a=n(47730),f=n(72339),u=n(73726),o=s.Buffer.from("f97e00","hex"),l=s.Buffer.from("ff","hex");t.default=(e,t={collapseBigNumber:!0})=>{const n=[];function r(e){const t=s.Buffer.allocUnsafe(1);t.writeUInt8(e,0),n.push(t)}function d(e){n.push(e)}function c(e){const t=s.Buffer.allocUnsafe(4);t.writeUInt32BE(e,0),n.push(t)}function h(e,t){t<24?r(e<<5|t):t<256?(r(e<<5|24),r(t)):t<65536?(r(e<<5|25),function(e){const t=s.Buffer.allocUnsafe(2);t.writeUInt16BE(e,0),n.push(t)}(t)):t<4294967296?(r(e<<5|26),c(t)):(r(e<<5|27),function(e){const t=e%u.POW_2_32,r=(e-t)/u.POW_2_32,i=s.Buffer.allocUnsafe(8);i.writeUInt32BE(r,0),i.writeUInt32BE(t,4),n.push(i)}(t))}function p(e){return Object.is(e,-0)?d(s.Buffer.from("f98000","hex")):e>=0&&e<=u.POW_2_53?h(0,e):-u.POW_2_53<=e&&e<0?h(1,-(e+1)):void 0}function _(e){let n=e,i=0,a=2;if(n.isNegative()&&(n=n.negated().minus(1),i=1,a=3),t.collapseBigNumber&&n.lte(u.MAX_BIG_NUM_INT64)){if(n.lte(u.MAX_BIG_NUM_INT32))return h(i,n.toNumber());r(i<<5|27),c(n.dividedToIntegerBy(u.SHIFT32).toNumber()),c(n.mod(u.SHIFT32).toNumber())}else{let e=n.toString(16);e.length%2&&(e=`0${e}`),h(6,a);const t=s.Buffer.from(e,"hex");h(2,t.length),d(t)}}return function e(t){if(!1===t)return r(244);if(!0===t)return r(245);if(null===t)return r(246);if(void 0===t)return r(247);switch(typeof t){case"number":return Math.round(t)===t?p(t):(r(251),function(e){const t=s.Buffer.allocUnsafe(8);t.writeDoubleBE(e),n.push(t)}(t));case"string":{const e=s.Buffer.from(t,"utf8");return h(3,e.length),d(e)}default:if(Array.isArray(t)){t instanceof f.IndefiniteArray?r(159):h(4,t.length);for(const n of t)e(n);t instanceof f.IndefiniteArray&&d(l)}else if(t instanceof s.Buffer)h(2,t.length),d(t);else if(t instanceof ArrayBuffer){const e=s.Buffer.from(t);h(2,e.length),d(e)}else if(t instanceof Uint8ClampedArray){const e=s.Buffer.from(t);h(2,e.length),d(e)}else if(t instanceof Uint8Array){const e=s.Buffer.from(t);h(2,e.length),d(e)}else if(i.default.isBigNumber(t))!function(e){if(e.isNaN())d(o);else if(e.isInteger())_(e);else{h(6,4),h(4,2);const t=e.decimalPlaces(),n=e.shiftedBy(t);p(-t),n.abs().isLessThan(u.MAX_BIG_NUM_INT)?p(n.toNumber()):_(n)}}(t);else if(t instanceof a.CborTag)h(6,t.tag),e(t.value);else{let n;n=t instanceof Map?[...t.entries()]:[...Object.entries(t)],t instanceof f.IndefiniteMap?r(191):h(5,n.length);for(const[t,r]of n)e(t),e(r);t instanceof f.IndefiniteMap&&d(l)}}}(e),s.Buffer.concat(n)}},72339:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CborTag=t.IndefiniteArray=t.IndefiniteMap=void 0;class s extends Map{}t.IndefiniteMap=s;t.IndefiniteArray=class extends Array{};var i=n(95257);Object.defineProperty(t,"CborTag",{enumerable:!0,get:function(){return r(i).default}})},47730:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Decoder=t.Encoder=void 0;const a=i(n(87747));t.Encoder={encode:a.default};var f=n(36217);Object.defineProperty(t,"Decoder",{enumerable:!0,get:function(){return i(f).default}}),s(n(72339),t)},73726:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.utf8Decoder=t.addSpanBytesToObject=t.getBigNum=t.MAX_BIG_NUM_INT64=t.MAX_BIG_NUM_INT32=t.MAX_BIG_NUM_INT=t.POW_2_53=t.POW_2_32=t.POW_2_24=t.SHIFT32=void 0;const s=r(n(44431));t.SHIFT32=4294967296,t.POW_2_24=5.960464477539063e-8,t.POW_2_32=4294967296,t.POW_2_53=9007199254740992,t.MAX_BIG_NUM_INT=new s.default("0x20000000000000"),t.MAX_BIG_NUM_INT32=new s.default("0xffffffff"),t.MAX_BIG_NUM_INT64=new s.default("0xffffffffffffffff");t.getBigNum=(e,n)=>e>2097151?new s.default(e).times(t.SHIFT32).plus(n):e*t.SHIFT32+n;t.addSpanBytesToObject=(e,t)=>{const n=e;return n.byteSpan=t,n.getByteSpan=function(){return this.byteSpan},n};const i=new TextDecoder("utf8",{fatal:!0,ignoreBOM:!0});t.utf8Decoder=e=>i.decode(e)}}]);