(self.webpackChunk_dcentralab_web3_wallet_connector=self.webpackChunk_dcentralab_web3_wallet_connector||[]).push([[3619],{17221:(e,r,t)=>{e.exports=t(59119)(t(58573))},58573:(e,r,t)=>{const n=new(0,t(86266).ec)("secp256k1"),i=n.curve,o=i.n.constructor;function a(e){const r=e[0];switch(r){case 2:case 3:return 33!==e.length?null:function(e,r){let t=new o(r);if(t.cmp(i.p)>=0)return null;t=t.toRed(i.red);let a=t.redSqr().redIMul(t).redIAdd(i.b).redSqrt();return 3===e!==a.isOdd()&&(a=a.redNeg()),n.keyPair({pub:{x:t,y:a}})}(r,e.subarray(1,33));case 4:case 6:case 7:return 65!==e.length?null:function(e,r,t){let a=new o(r),c=new o(t);if(a.cmp(i.p)>=0||c.cmp(i.p)>=0)return null;if(a=a.toRed(i.red),c=c.toRed(i.red),(6===e||7===e)&&c.isOdd()!==(7===e))return null;const u=a.redSqr().redIMul(a);return c.redSqr().redISub(u.redIAdd(i.b)).isZero()?n.keyPair({pub:{x:a,y:c}}):null}(r,e.subarray(1,33),e.subarray(33,65));default:return null}}function c(e,r){const t=r.encode(null,33===e.length);for(let r=0;r<e.length;++r)e[r]=t[r]}e.exports={contextRandomize:()=>0,privateKeyVerify(e){const r=new o(e);return r.cmp(i.n)<0&&!r.isZero()?0:1},privateKeyNegate(e){const r=new o(e),t=i.n.sub(r).umod(i.n).toArrayLike(Uint8Array,"be",32);return e.set(t),0},privateKeyTweakAdd(e,r){const t=new o(r);if(t.cmp(i.n)>=0)return 1;if(t.iadd(new o(e)),t.cmp(i.n)>=0&&t.isub(i.n),t.isZero())return 1;const n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},privateKeyTweakMul(e,r){let t=new o(r);if(t.cmp(i.n)>=0||t.isZero())return 1;t.imul(new o(e)),t.cmp(i.n)>=0&&(t=t.umod(i.n));const n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},publicKeyVerify:e=>null===a(e)?1:0,publicKeyCreate(e,r){const t=new o(r);if(t.cmp(i.n)>=0||t.isZero())return 1;return c(e,n.keyFromPrivate(r).getPublic()),0},publicKeyConvert(e,r){const t=a(r);if(null===t)return 1;return c(e,t.getPublic()),0},publicKeyNegate(e,r){const t=a(r);if(null===t)return 1;const n=t.getPublic();return n.y=n.y.redNeg(),c(e,n),0},publicKeyCombine(e,r){const t=new Array(r.length);for(let e=0;e<r.length;++e)if(t[e]=a(r[e]),null===t[e])return 1;let n=t[0].getPublic();for(let e=1;e<t.length;++e)n=n.add(t[e].pub);return n.isInfinity()?2:(c(e,n),0)},publicKeyTweakAdd(e,r,t){const n=a(r);if(null===n)return 1;if((t=new o(t)).cmp(i.n)>=0)return 2;const u=n.getPublic().add(i.g.mul(t));return u.isInfinity()?2:(c(e,u),0)},publicKeyTweakMul(e,r,t){const n=a(r);if(null===n)return 1;if((t=new o(t)).cmp(i.n)>=0||t.isZero())return 2;return c(e,n.getPublic().mul(t)),0},signatureNormalize(e){const r=new o(e.subarray(0,32)),t=new o(e.subarray(32,64));return r.cmp(i.n)>=0||t.cmp(i.n)>=0?1:(1===t.cmp(n.nh)&&e.set(i.n.sub(t).toArrayLike(Uint8Array,"be",32),32),0)},signatureExport(e,r){const t=r.subarray(0,32),n=r.subarray(32,64);if(new o(t).cmp(i.n)>=0)return 1;if(new o(n).cmp(i.n)>=0)return 1;const{output:a}=e;let c=a.subarray(4,37);c[0]=0,c.set(t,1);let u=33,s=0;for(;u>1&&0===c[s]&&!(128&c[s+1]);--u,++s);if(c=c.subarray(s),128&c[0])return 1;if(u>1&&0===c[0]&&!(128&c[1]))return 1;let l=a.subarray(39,72);l[0]=0,l.set(n,1);let w=33,y=0;for(;w>1&&0===l[y]&&!(128&l[y+1]);--w,++y);return l=l.subarray(y),128&l[0]||w>1&&0===l[0]&&!(128&l[1])?1:(e.outputlen=6+u+w,a[0]=48,a[1]=e.outputlen-2,a[2]=2,a[3]=c.length,a.set(c,4),a[4+u]=2,a[5+u]=l.length,a.set(l,6+u),0)},signatureImport(e,r){if(r.length<8)return 1;if(r.length>72)return 1;if(48!==r[0])return 1;if(r[1]!==r.length-2)return 1;if(2!==r[2])return 1;const t=r[3];if(0===t)return 1;if(5+t>=r.length)return 1;if(2!==r[4+t])return 1;const n=r[5+t];if(0===n)return 1;if(6+t+n!==r.length)return 1;if(128&r[4])return 1;if(t>1&&0===r[4]&&!(128&r[5]))return 1;if(128&r[t+6])return 1;if(n>1&&0===r[t+6]&&!(128&r[t+7]))return 1;let a=r.subarray(4,4+t);if(33===a.length&&0===a[0]&&(a=a.subarray(1)),a.length>32)return 1;let c=r.subarray(6+t);if(33===c.length&&0===c[0]&&(c=c.slice(1)),c.length>32)throw new Error("S length is too long");let u=new o(a);u.cmp(i.n)>=0&&(u=new o(0));let s=new o(r.subarray(6+t));return s.cmp(i.n)>=0&&(s=new o(0)),e.set(u.toArrayLike(Uint8Array,"be",32),0),e.set(s.toArrayLike(Uint8Array,"be",32),32),0},ecdsaSign(e,r,t,a,c){if(c){const e=c;c=n=>{const i=e(r,t,null,a,n);if(!(i instanceof Uint8Array&&32===i.length))throw new Error("This is the way");return new o(i)}}const u=new o(t);if(u.cmp(i.n)>=0||u.isZero())return 1;let s;try{s=n.sign(r,t,{canonical:!0,k:c,pers:a})}catch(e){return 1}return e.signature.set(s.r.toArrayLike(Uint8Array,"be",32),0),e.signature.set(s.s.toArrayLike(Uint8Array,"be",32),32),e.recid=s.recoveryParam,0},ecdsaVerify(e,r,t){const c={r:e.subarray(0,32),s:e.subarray(32,64)},u=new o(c.r),s=new o(c.s);if(u.cmp(i.n)>=0||s.cmp(i.n)>=0)return 1;if(1===s.cmp(n.nh)||u.isZero()||s.isZero())return 3;const l=a(t);if(null===l)return 2;const w=l.getPublic();return n.verify(r,c,w)?0:3},ecdsaRecover(e,r,t,a){const u={r:r.slice(0,32),s:r.slice(32,64)},s=new o(u.r),l=new o(u.s);if(s.cmp(i.n)>=0||l.cmp(i.n)>=0)return 1;if(s.isZero()||l.isZero())return 2;let w;try{w=n.recoverPubKey(a,u,t)}catch(e){return 2}return c(e,w),0},ecdh(e,r,t,c,u,s,l){const w=a(r);if(null===w)return 1;const y=new o(t);if(y.cmp(i.n)>=0||y.isZero())return 2;const p=w.getPublic().mul(y);if(void 0===u){const r=p.encode(null,!0),t=n.hash().update(r).digest();for(let r=0;r<32;++r)e[r]=t[r]}else{s||(s=new Uint8Array(32));const r=p.getX().toArray("be",32);for(let e=0;e<32;++e)s[e]=r[e];l||(l=new Uint8Array(32));const t=p.getY().toArray("be",32);for(let e=0;e<32;++e)l[e]=t[e];const n=u(s,l,c);if(!(n instanceof Uint8Array&&n.length===e.length))return 2;e.set(n)}return 0}}},59119:e=>{const r="Impossible case. Please create issue.",t="The tweak was out of range or the resulted private key is invalid",n="The tweak was out of range or equal to zero",i="Unknow error on context randomization",o="Private Key is invalid",a="Public Key could not be parsed",c="Public Key serialization error",u="The sum of the public keys is not valid",s="Signature could not be parsed",l="The nonce generation function failed, or the private key was invalid",w="Public key could not be recover",y="Scalar was invalid (zero or overflow)";function p(e,r){if(!e)throw new Error(r)}function b(e,r,t){if(p(r instanceof Uint8Array,`Expected ${e} to be an Uint8Array`),void 0!==t)if(Array.isArray(t)){const n=`Expected ${e} to be an Uint8Array with length [${t.join(", ")}]`;p(t.includes(r.length),n)}else{const n=`Expected ${e} to be an Uint8Array with length ${t}`;p(r.length===t,n)}}function d(e){p("Boolean"===f(e),"Expected compressed to be a Boolean")}function h(e=(e=>new Uint8Array(e)),r){return"function"==typeof e&&(e=e(r)),b("output",e,r),e}function f(e){return Object.prototype.toString.call(e).slice(8,-1)}e.exports=e=>({contextRandomize(r){if(p(null===r||r instanceof Uint8Array,"Expected seed to be an Uint8Array or null"),null!==r&&b("seed",r,32),1===e.contextRandomize(r))throw new Error(i)},privateKeyVerify:r=>(b("private key",r,32),0===e.privateKeyVerify(r)),privateKeyNegate(t){switch(b("private key",t,32),e.privateKeyNegate(t)){case 0:return t;case 1:throw new Error(r)}},privateKeyTweakAdd(r,n){switch(b("private key",r,32),b("tweak",n,32),e.privateKeyTweakAdd(r,n)){case 0:return r;case 1:throw new Error(t)}},privateKeyTweakMul(r,t){switch(b("private key",r,32),b("tweak",t,32),e.privateKeyTweakMul(r,t)){case 0:return r;case 1:throw new Error(n)}},publicKeyVerify:r=>(b("public key",r,[33,65]),0===e.publicKeyVerify(r)),publicKeyCreate(r,t=!0,n){switch(b("private key",r,32),d(t),n=h(n,t?33:65),e.publicKeyCreate(n,r)){case 0:return n;case 1:throw new Error(o);case 2:throw new Error(c)}},publicKeyConvert(r,t=!0,n){switch(b("public key",r,[33,65]),d(t),n=h(n,t?33:65),e.publicKeyConvert(n,r)){case 0:return n;case 1:throw new Error(a);case 2:throw new Error(c)}},publicKeyNegate(t,n=!0,i){switch(b("public key",t,[33,65]),d(n),i=h(i,n?33:65),e.publicKeyNegate(i,t)){case 0:return i;case 1:throw new Error(a);case 2:throw new Error(r);case 3:throw new Error(c)}},publicKeyCombine(r,t=!0,n){p(Array.isArray(r),"Expected public keys to be an Array"),p(r.length>0,"Expected public keys array will have more than zero items");for(const e of r)b("public key",e,[33,65]);switch(d(t),n=h(n,t?33:65),e.publicKeyCombine(n,r)){case 0:return n;case 1:throw new Error(a);case 2:throw new Error(u);case 3:throw new Error(c)}},publicKeyTweakAdd(r,n,i=!0,o){switch(b("public key",r,[33,65]),b("tweak",n,32),d(i),o=h(o,i?33:65),e.publicKeyTweakAdd(o,r,n)){case 0:return o;case 1:throw new Error(a);case 2:throw new Error(t)}},publicKeyTweakMul(r,t,i=!0,o){switch(b("public key",r,[33,65]),b("tweak",t,32),d(i),o=h(o,i?33:65),e.publicKeyTweakMul(o,r,t)){case 0:return o;case 1:throw new Error(a);case 2:throw new Error(n)}},signatureNormalize(r){switch(b("signature",r,64),e.signatureNormalize(r)){case 0:return r;case 1:throw new Error(s)}},signatureExport(t,n){b("signature",t,64);const i={output:n=h(n,72),outputlen:72};switch(e.signatureExport(i,t)){case 0:return n.slice(0,i.outputlen);case 1:throw new Error(s);case 2:throw new Error(r)}},signatureImport(t,n){switch(b("signature",t),n=h(n,64),e.signatureImport(n,t)){case 0:return n;case 1:throw new Error(s);case 2:throw new Error(r)}},ecdsaSign(t,n,i={},o){b("message",t,32),b("private key",n,32),p("Object"===f(i),"Expected options to be an Object"),void 0!==i.data&&b("options.data",i.data),void 0!==i.noncefn&&p("Function"===f(i.noncefn),"Expected options.noncefn to be a Function");const a={signature:o=h(o,64),recid:null};switch(e.ecdsaSign(a,t,n,i.data,i.noncefn)){case 0:return a;case 1:throw new Error(l);case 2:throw new Error(r)}},ecdsaVerify(r,t,n){switch(b("signature",r,64),b("message",t,32),b("public key",n,[33,65]),e.ecdsaVerify(r,t,n)){case 0:return!0;case 3:return!1;case 1:throw new Error(s);case 2:throw new Error(a)}},ecdsaRecover(t,n,i,o=!0,a){switch(b("signature",t,64),p("Number"===f(n)&&n>=0&&n<=3,"Expected recovery id to be a Number within interval [0, 3]"),b("message",i,32),d(o),a=h(a,o?33:65),e.ecdsaRecover(a,t,n,i)){case 0:return a;case 1:throw new Error(s);case 2:throw new Error(w);case 3:throw new Error(r)}},ecdh(r,t,n={},i){switch(b("public key",r,[33,65]),b("private key",t,32),p("Object"===f(n),"Expected options to be an Object"),void 0!==n.data&&b("options.data",n.data),void 0!==n.hashfn?(p("Function"===f(n.hashfn),"Expected options.hashfn to be a Function"),void 0!==n.xbuf&&b("options.xbuf",n.xbuf,32),void 0!==n.ybuf&&b("options.ybuf",n.ybuf,32),b("output",i)):i=h(i,32),e.ecdh(i,r,t,n.data,n.hashfn,n.xbuf,n.ybuf)){case 0:return i;case 1:throw new Error(a);case 2:throw new Error(y)}}})}}]);