import{b_ as e,b$ as t,aw as n,c0 as a,c1 as s,c2 as o,c3 as i,c4 as r,I as l,c5 as c,c6 as u}from"./index-DSIPxOWi.js";import{Z as m}from"./utils-DEUXBrCj.js";import{c as f,B as d}from"./utils-1_4Re7um.js";let h=null;const p=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function j(s,o,i,r){const l=e(i)?t(i):null,c=l?Math.round((l.valid[1]-l.valid[0])/o.scale[0]):null;return s.map((e=>{const t=new n(e.geometry);return a(o,t,t),e.geometry=l?function I(e,t,n){return e.x<0?e.x+=t:e.x>n&&(e.x-=t),e}(t,c??0,r[0]):t,e}))}function x(e,t=18,n,a,o){const i=new Float64Array(a*o);t=Math.round(c(t));let r=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;const m=u(n);for(const{geometry:c,attributes:u}of e){const{x:e,y:n}=c,f=Math.max(0,e-t),d=Math.max(0,n-t),h=Math.min(o,n+t),p=Math.min(a,e+t),y=+m(u);for(let o=d;o<h;o++)for(let c=f;c<p;c++){const u=o*a+c,m=s(c-e,o-n,t)*y,f=i[u]+=m;r=Math.min(r,f),l=Math.max(l,f)}}return{min:r,max:l}}function w(e){const t=p.exec(e);if(!t)return null;const{hh:n,mm:a,ss:s,ms:i}=t.groups;return Number(n)*o.hours+Number(a)*o.minutes+Number(s)*o.seconds+Number(i||0)}async function b(e,t,n=!0){if(!t)return[];const{field:a,field2:s,field3:o,fieldDelimiter:c,fieldInfos:u,timeZone:p}=e,y=a&&(null==u?void 0:u.find((e=>e.name.toLowerCase()===a.toLowerCase()))),N=!!y&&i(y),M=!!y&&m(y),g=e.valueExpression,F=e.normalizationType,$=e.normalizationField,v=e.normalizationTotal,T=[],E=e.viewInfoParams;let C=null,G=null;if(g){if(!h){const{arcadeUtils:e}=await r();h=e}h.hasGeometryOperations(g)&&await h.enableGeometryOperations(),C=h.createFunction(g),G=E?h.getViewInfo({viewingMode:E.viewingMode,scale:E.scale,spatialReference:new l(E.spatialReference)}):null}const z=e.fieldInfos,O=t[0]&&"declaredClass"in t[0]&&"esri.Graphic"===t[0].declaredClass||!z?null:{fields:z};return t.forEach((e=>{const t=e.attributes;let i;if(g){const t=O?{...e,layer:O}:e,n=h.createExecContext(t,G,p);i=h.executeFunction(C,n)}else t&&(i=t[a],s?(i=`${f(i)}${c}${f(t[s])}`,o&&(i=`${i}${c}${f(t[o])}`)):"string"==typeof i&&n&&(M?i=i?new Date(i).getTime():null:N&&(i=i?w(i):null)));if(F&&"number"==typeof i&&isFinite(i)){const e=t&&parseFloat(t[$]);i=d(i,F,e,v)}T.push(i)})),T}export{b,j,w,x};
