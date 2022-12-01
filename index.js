// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterNegaLucasSeq=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Object.prototype.hasOwnProperty;function y(t,r){return null!=t&&p.call(t,r)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&y(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(t){var r,e,n;if(null==t)return d.call(t);e=t[m],r=y(t,m);try{t[m]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[m]=e:delete t[m],n}:function(t){return d.call(t)};var _=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var g=/./;function h(t){return"boolean"==typeof t}var O=Boolean.prototype.toString;var w=v();function S(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function E(t){return h(t)||S(t)}function P(){return new Function("return this;")()}a(E,"isPrimitive",h),a(E,"isObject",S);var T="object"==typeof self?self:null,I="object"==typeof window?window:null,A="object"==typeof global?global:null;var N=function(t){if(arguments.length){if(!h(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return P()}if(T)return T;if(I)return I;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),B=N.document&&N.document.childNodes,x=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;function C(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(F,"REGEXP",V),a(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!_(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var L="function"==typeof g||"object"==typeof x||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function k(t){return"function"===L(t)}var M,R=Object.getPrototypeOf;M=k(Object.getPrototypeOf)?R:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var q=M;var U=Object.prototype;function Y(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!_(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),q(t))}(t),!r||!y(t,"constructor")&&y(r,"constructor")&&k(r.constructor)&&"[object Function]"===j(r.constructor)&&y(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===U||function(t){var r;for(r in t)if(!y(t,r))return!1;return!0}(t)))}function X(t){return"number"==typeof t}var z=Number,D=z.prototype.toString;var H=v();function J(t){return"object"==typeof t&&(t instanceof z||(H?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function K(t){return X(t)||J(t)}a(K,"isPrimitive",X),a(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,W=z.NEGATIVE_INFINITY,Z=Math.floor;function $(t){return t<Q&&t>W&&Z(r=t)===r;var r}function tt(t){return X(t)&&$(t)}function rt(t){return J(t)&&$(t.valueOf())}function et(t){return tt(t)||rt(t)}function nt(t){return tt(t)&&t>=0}function ot(t){return rt(t)&&t.valueOf()>=0}function ut(t){return nt(t)||ot(t)}function it(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function ct(t,r){if(!Y(r))return new TypeError(it("0I22h",r));if(y(r,"iter")){if(t.iter=r.iter,!nt(r.iter))return new TypeError(it("0I235","iter",r.iter));if(r.iter>77)return new RangeError(it("invalid option. `%s` option must be less than or equal to 77. Option: `%u`.","iter",r.iter))}return null}a(et,"isPrimitive",tt),a(et,"isObject",rt),a(ut,"isPrimitive",nt),a(ut,"isObject",ot);return function t(r){var e,n,o,u,i,c,f,l;if(e={iter:77},arguments.length&&(u=ct(e,r)))throw u;return i=2,c=-1,f=0,l=0,a(n={},"next",p),a(n,"return",y),s&&a(n,s,b),n;function p(){return l+=1,o||l>e.iter?{done:!0}:(1===l?f=2:2===l?f=-1:(f=i-c,i=c,c=f),{value:f,done:!1})}function y(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function b(){return t(e)}}}));
//# sourceMappingURL=index.js.map
