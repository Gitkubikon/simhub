import{b_ as G,b$ as _,aw as j,c0 as z,c1 as O,c2 as E,c3 as V,c4 as A,I as D,c5 as L,c6 as P}from"./index-Cev3ONi_.js";import{Z as R}from"./utils-Cp64qqvh.js";import{c as T,B as U}from"./utils-D12MV3Ou.js";let m=null;const Y=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Z(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function q(t,e,o,s){const a=G(o)?_(o):null,c=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(i=>{const r=new j(i.geometry);return z(e,r,r),i.geometry=a?Z(r,c??0,s[0]):r,i})}function H(t,e=18,o,s,a){const c=new Float64Array(s*a);e=Math.round(L(e));let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;const N=P(o);for(const{geometry:h,attributes:g}of t){const{x:$,y:u}=h,I=Math.max(0,$-e),M=Math.max(0,u-e),F=Math.min(a,u+e),b=Math.min(s,$+e),p=+N(g);for(let f=M;f<F;f++)for(let d=I;d<b;d++){const w=f*s+d,y=O(d-$,f-u,e)*p,l=c[w]+=y;i=Math.min(i,l),r=Math.max(r,l)}}return{min:i,max:r}}function B(t){const e=Y.exec(t);if(!e)return null;const{hh:o,mm:s,ss:a,ms:c}=e.groups;return Number(o)*E.hours+Number(s)*E.minutes+Number(a)*E.seconds+Number(c||0)}async function J(t,e,o=!0){if(!e)return[];const{field:s,field2:a,field3:c,fieldDelimiter:i,fieldInfos:r,timeZone:N}=t,h=s&&(r==null?void 0:r.find(l=>l.name.toLowerCase()===s.toLowerCase())),g=!!h&&V(h),$=!!h&&R(h),u=t.valueExpression,I=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,b=[],p=t.viewInfoParams;let f=null,d=null;if(u){if(!m){const{arcadeUtils:l}=await A();m=l}m.hasGeometryOperations(u)&&await m.enableGeometryOperations(),f=m.createFunction(u),d=p?m.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new D(p.spatialReference)}):null}const w=t.fieldInfos,y=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&w?{fields:w}:null;return e.forEach(l=>{const x=l.attributes;let n;if(u){const v=y?{...l,layer:y}:l,C=m.createExecContext(v,d,N);n=m.executeFunction(f,C)}else x&&(n=x[s],a?(n=`${T(n)}${i}${T(x[a])}`,c&&(n=`${n}${i}${T(x[c])}`)):typeof n=="string"&&o&&($?n=n?new Date(n).getTime():null:g&&(n=n?B(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const v=x&&parseFloat(x[M]);n=U(n,I,v,F)}b.push(n)}),b}export{J as b,q as j,B as w,H as x};
