import{aG as g,aC as c,aA as $,aH as p,aI as s,aJ as F,aK as x,aL as y,aM as d,aN as h,aO as w,aP as I,aQ as O}from"./index-_cfZD3Ca.js";function B(r,t,n){return r.units[t][n]}function o(r,t,n,e=2,a="abbr"){return`${c(t,{minimumFractionDigits:e,maximumFractionDigits:e,signDisplay:t>0?"never":"exceptZero"})} ${B(r,n,a)}`}function b(r,t,n,e=2,a="abbr"){return`${c(t,{minimumFractionDigits:e,maximumFractionDigits:e,signDisplay:"exceptZero"})} ${B(r,n,a)}`}function Z(r,t,n,e=2,a="abbr"){const i=p(t,n);return o(r,s(t,n,i),i,e,a)}function K(r,t,n,e=2,a="abbr"){const i=p(t,n);return b(r,s(t,n,i),i,e,a)}function v(r,t,n,e=2,a="abbr"){const i=F(t,n);return o(r,s(t,n,i),i,e,a)}function z(r,t,n,e=2,a="abbr"){const i=F(t,n);return b(r,s(t,n,i),i,e,a)}function E(r,t,n,e=2,a="abbr"){const i=x(t,n);return o(r,s(t,n,i),i,e,a)}function J(r,t,n,e=2,a="abbr"){const i=x(t,n);return b(r,s(t,n,i),i,e,a)}function L(r,t,n,e=2,a="abbr"){const i=y(t,n);return o(r,s(t,n,i),i,e,a)}function N(r,t,n,e=2,a="abbr"){const i=y(t,n);return b(r,s(t,n,i),i,e,a)}function j(r,t,n,e=2,a="abbr"){const i=I(t,n);return o(r,s(t,n,i),i,e,a)}function A(r,t,n,e=2,a="abbr"){const i=O(t,n);return o(r,s(t,n,i),i,e,a)}const S=(r,t)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:t,minimumFractionDigits:t,signDisplay:r>0?"never":"exceptZero"});function G(r,t,n,e,a,i=w,u=!0){let m=i.normalize(h(s(r,t,"degrees"),n,e),0,u);const f=S(m,a??2);return m=M(m,f),c(m,f)}function U(r,t,n,e,a){n!==e&&(r=-r);const i={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:a=a??2,minimumFractionDigits:a,signDisplay:"exceptZero"};let u=s(r,t,"degrees")%360;return u=M(u,i),c(u,i)}const l=new Map;function M(r,t){const n=JSON.stringify(t);let e=l.get(n);return e||(e=new Intl.NumberFormat("en-US",t),l.set(n,e)),/^[-+]?360\.?0*°?$/.test(e.format(r))?0:r}const D=["B","kB","MB","GB","TB"];function Y(r,t){let n=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(g.KILOBYTES));n=d(n,0,D.length-1);const e=c(t/g.KILOBYTES**n,{maximumFractionDigits:2});return $(r.units.bytes[D[n]],{fileSize:e})}export{j as $,L as B,Z as D,z as F,N as M,Y as T,U as Z,B as b,E as d,o as g,J as h,A as j,b as p,G as w,K as x,v as y};