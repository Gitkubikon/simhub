import{hI as f,hJ as y,hK as R,hL as b,Q as h,O as g,H as v,hM as C,hN as M,hO as U,hP as j,dy as k,hQ as x,hR as A}from"./index-DG8rgzil.js";import{geodesicArea as F}from"./geometryEngine-Dk3H2taA.js";import{p as K,y as O}from"./geodesicLengthMeasurementUtils-BbGYSTd8.js";function z(n){const{spatialReference:e}=n;return K(e,Q,W,n)}function Q(n){return f(Math.abs(O([n],"square-meters")[0]),"square-meters")}function W(n){try{return f(Math.abs(F(n,"square-meters")),"square-meters")}catch{return null}}function B(n,e=J()){return w(n,e,!1)}function w(n,e,o=n.hasZ){const a=R(n.spatialReference),u=b(a);if(u==null)return null;const d=(i,s)=>!(s.length<2)&&(g(i,s[0],s[1],o&&s[2]||0),!0);let p=0;for(const i of n.rings){const s=i.length;if(s<3)continue;const{positionsWorldCoords:r}=e;for(;r.length<s;)r.push(h());const m=H,l=g(I,0,0,0),q=1/s;for(let t=0;t<s;t++){if(!d(m,i[t])||!v(m,n.spatialReference,r[t],a))return null;C(l,l,r[t],q)}const $=M(r[0],r[1],l,U());if(j(k($))===0)continue;for(let t=0;t<s;t++)x($,l,r[t],r[t]);const c=L(r);for(let t=0;t<c.length;t+=3)p+=A(r[c[t]],r[c[t+1]],r[c[t+2]])}return f(p,u)}const H=h(),I=h();function J(){return{positionsWorldCoords:[]}}function L(n){return y(N(n),[],2)}function N(n){const e=new Float64Array(2*n.length);for(let o=0;o<n.length;++o){const a=n[o],u=2*o;e[u]=a[0],e[u+1]=a[1]}return e}export{J as U,B as j,L as k,z as o};