import{O as y,hB as g,hC as z,hD as p,hE as m,hF as x,hG as c,Q as V,cv as d,e as t,y as l,a as $,S as w,hH as i,gz as D,j as F}from"./index-_cfZD3Ca.js";import{p as G}from"./normalizeUtilsSync-CRG1JXH9.js";const r=V(),u=d(),a=d(),h=d();function M(o,e,n){return y(r,e[0],e[1],1),g(r,r,z(u,n)),r[2]===0?p(o,r[0],r[1]):p(o,r[0]/r[2],r[1]/r[2])}function N(o,e,n){return f(a,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),f(h,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),m(o,x(a,a),h),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,e,n,C,v,S,j,B,b){c(o,e,C,S,n,v,j,1,1,1),y(r,B,b,1),x(u,o);const[E,O,R]=g(r,r,z(u,u));return c(u,E,0,0,0,O,0,0,0,R),m(o,u,o)}let s=class extends w{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:i(o.extent)}get coords(){var e;const o=(e=this.element.georeference)==null?void 0:e.coords;return D(o,this.spatialReference).geometry}get normalizedCoords(){return F.fromJSON(G(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?i(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([$("esri.layers.support.MediaElementView")],s);export{N as j,s as m,M as p};