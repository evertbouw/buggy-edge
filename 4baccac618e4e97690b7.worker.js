!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/buggy-edge/",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function u(){if(!n)throw new Error("uuid: This browser does not seem to support crypto.getRandomValues(). If you need to support this browser, please provide a custom random number generator through options.rng.");return n(o)}for(var i=[],a=0;a<256;++a)i[a]=(a+256).toString(16).substr(1);var f=function(e,r){var t=r||0,n=i;return[n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]]].join("")};var s=function(e,r,t){var n=r&&t||0;"string"==typeof e&&(r="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||u)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,r)for(var i=0;i<16;++i)r[n+i]=o[i];return r||f(o)};self.postMessage(s())}]);
//# sourceMappingURL=4baccac618e4e97690b7.worker.js.map