"use strict";var B=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var w=B(function(z,C){
var u=require('@stdlib/math-base-assert-is-nan/dist'),M=require('@stdlib/math-base-special-floor/dist'),R=128;function i(v,a,n,L){var r,q,c,p,l,s,y,m,g,O,e,o,f;if(v<=0)return 0;if(r=L,n===0)return u(a[r])?0:v*a[r];if(v<8){for(e=0,f=0;f<v;f++)u(a[r])===!1&&(e+=a[r]),r+=n;return e}if(v<=R){for(q=u(a[r])?0:a[r],r+=n,c=u(a[r])?0:a[r],r+=n,p=u(a[r])?0:a[r],r+=n,l=u(a[r])?0:a[r],r+=n,s=u(a[r])?0:a[r],r+=n,y=u(a[r])?0:a[r],r+=n,m=u(a[r])?0:a[r],r+=n,g=u(a[r])?0:a[r],r+=n,O=v%8,f=8;f<v-O;f+=8)q+=u(a[r])?0:a[r],r+=n,c+=u(a[r])?0:a[r],r+=n,p+=u(a[r])?0:a[r],r+=n,l+=u(a[r])?0:a[r],r+=n,s+=u(a[r])?0:a[r],r+=n,y+=u(a[r])?0:a[r],r+=n,m+=u(a[r])?0:a[r],r+=n,g+=u(a[r])?0:a[r],r+=n;for(e=q+c+(p+l)+(s+y+(m+g)),f;f<v;f++)u(a[r])===!1&&(e+=a[r]),r+=n;return e}return o=M(v/2),o-=o%8,i(o,a,n,r)+i(v-o,a,n,r+o*n)}C.exports=i
});var I=B(function(A,E){
var S=require('@stdlib/strided-base-stride2offset/dist'),Z=w();function b(v,a,n){return Z(v,a,n,S(v,n))}E.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),K=I(),j=w();h(K,"ndarray",j);module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
