// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&u&&u.call(e,r,t.set),e};var c=r;function p(e){return e!=e}var _=Math.floor;function d(e,r,t,n){var o,a,i,u,f,l,c,s,y,b,v,j,g;if(e<=0)return 0;if(1===e||0===t)return p(r[n])?0:r[n];if(o=n,e<8){for(v=0,g=0;g<e;g++)!1===p(r[o])&&(v+=r[o]),o+=t;return v}if(e<=128){for(a=p(r[o])?0:r[o],i=p(r[o+=t])?0:r[o],u=p(r[o+=t])?0:r[o],f=p(r[o+=t])?0:r[o],l=p(r[o+=t])?0:r[o],c=p(r[o+=t])?0:r[o],s=p(r[o+=t])?0:r[o],y=p(r[o+=t])?0:r[o],o+=t,b=e%8,g=8;g<e-b;g+=8)a+=p(r[o])?0:r[o],i+=p(r[o+=t])?0:r[o],u+=p(r[o+=t])?0:r[o],f+=p(r[o+=t])?0:r[o],l+=p(r[o+=t])?0:r[o],c+=p(r[o+=t])?0:r[o],s+=p(r[o+=t])?0:r[o],y+=p(r[o+=t])?0:r[o],o+=t;for(v=a+i+(u+f)+(l+c+(s+y));g<e;g++)!1===p(r[o])&&(v+=r[o]),o+=t;return v}return j=_(e/2),d(j-=j%8,r,t,o)+d(e-j,r,t,o+j*t)}function s(e,r,t){var n,o,a;if(e<=0)return 0;if(1===e||0===t)return p(r[0])?0:r[0];if(n=t<0?(1-e)*t:0,e<8){for(o=0,a=0;a<e;a++)!1===p(r[n])&&(o+=r[n]),n+=t;return o}return d(e,r,t,n)}c(s,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:d}),e.default=s,e.ndarray=d,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).gnansumpw={});
//# sourceMappingURL=index.js.map
