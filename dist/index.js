"use strict";var C=function(u,a){return function(){return a||u((a={exports:{}}).exports,a),a.exports}};var O=C(function(z,E){
var v=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-special-floor/dist'),S=128;function w(u,a,n,f){var r,o,l,c,p,m,y,g,s,B,i,q,e;if(u<=0)return 0;if(u===1||n===0)return v(a[f])?0:a[f];if(r=f,u<8){for(i=0,e=0;e<u;e++)v(a[r])===!1&&(i+=a[r]),r+=n;return i}if(u<=S){for(o=v(a[r])?0:a[r],r+=n,l=v(a[r])?0:a[r],r+=n,c=v(a[r])?0:a[r],r+=n,p=v(a[r])?0:a[r],r+=n,m=v(a[r])?0:a[r],r+=n,y=v(a[r])?0:a[r],r+=n,g=v(a[r])?0:a[r],r+=n,s=v(a[r])?0:a[r],r+=n,B=u%8,e=8;e<u-B;e+=8)o+=v(a[r])?0:a[r],r+=n,l+=v(a[r])?0:a[r],r+=n,c+=v(a[r])?0:a[r],r+=n,p+=v(a[r])?0:a[r],r+=n,m+=v(a[r])?0:a[r],r+=n,y+=v(a[r])?0:a[r],r+=n,g+=v(a[r])?0:a[r],r+=n,s+=v(a[r])?0:a[r],r+=n;for(i=o+l+(c+p)+(m+y+(g+s)),e;e<u;e++)v(a[r])===!1&&(i+=a[r]),r+=n;return i}return q=R(u/2),q-=q%8,w(q,a,n,r)+w(u-q,a,n,r+q*n)}E.exports=w
});var L=C(function(A,K){
var I=require('@stdlib/math-base-assert-is-nan/dist'),Z=O();function b(u,a,n){var f,r,o;if(u<=0)return 0;if(u===1||n===0)return I(a[0])?0:a[0];if(n<0?f=(1-u)*n:f=0,u<8){for(r=0,o=0;o<u;o++)I(a[f])===!1&&(r+=a[f]),f+=n;return r}return Z(u,a,n,f)}K.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=L(),j=O();h(M,"ndarray",j);module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map