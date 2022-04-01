// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var f=t,c=function(r,e,t){var f,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||l.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=f):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?f:c;var p=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var v=function(r){return r!=r},b=Math.floor,y=v,d=b;var s=function r(e,t,n,o){var a,u,i,l,f,c,_,p,v,b,s,j,g;if(e<=0)return 0;if(1===e||0===n)return y(t[o])?0:t[o];if(a=o,e<8){for(s=0,g=0;g<e;g++)!1===y(t[a])&&(s+=t[a]),a+=n;return s}if(e<=128){for(u=y(t[a])?0:t[a],i=y(t[a+=n])?0:t[a],l=y(t[a+=n])?0:t[a],f=y(t[a+=n])?0:t[a],c=y(t[a+=n])?0:t[a],_=y(t[a+=n])?0:t[a],p=y(t[a+=n])?0:t[a],v=y(t[a+=n])?0:t[a],a+=n,b=e%8,g=8;g<e-b;g+=8)u+=y(t[a])?0:t[a],i+=y(t[a+=n])?0:t[a],l+=y(t[a+=n])?0:t[a],f+=y(t[a+=n])?0:t[a],c+=y(t[a+=n])?0:t[a],_+=y(t[a+=n])?0:t[a],p+=y(t[a+=n])?0:t[a],v+=y(t[a+=n])?0:t[a],a+=n;for(s=u+i+(l+f)+(c+_+(p+v));g<e;g++)!1===y(t[a])&&(s+=t[a]),a+=n;return s}return j=d(e/2),r(j-=j%8,t,n,a)+r(e-j,t,n,a+j*n)},j=v,g=s;var m=function(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return j(e[0])?0:e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)!1===j(e[n])&&(o+=e[n]),n+=t;return o}return g(r,e,t,n)},w=s;p(m,"ndarray",w);var h=m;export{h as default,w as ndarray};
//# sourceMappingURL=mod.js.map
