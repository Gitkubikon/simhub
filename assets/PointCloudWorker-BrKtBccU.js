import{fC as t,cD as r,I as e,fD as a,fE as n,fF as o,fG as f,fH as u,bX as s,fI as i}from"./index-DSIPxOWi.js";import{u as l,c as b,i as m,f as p}from"./PointCloudWorkerUtil-BvnCwL7b.js";import"./PointCloudUniqueValueRenderer-CAfl8sj6.js";class c{transform(r){const e=this._transform(r),a=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&a.push(e.pointIdFilterMap.buffer);for(const n of e.attributes)"buffer"in n.values&&t(n.values.buffer)&&n.values.buffer!==e.rgb.buffer&&a.push(n.values.buffer);return Promise.resolve({result:e,transferList:a})}_transform(t){const s=l(t.schema,t.geometryBuffer);let A=s.length/3,d=null;const v=new Array,M=b(t.primaryAttributeData,s,A);null!=t.primaryAttributeData&&M&&v.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:M});const y=b(t.modulationAttributeData,s,A);null!=t.modulationAttributeData&&y&&v.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:y});let w=m(t.rendererInfo,M,y,A);if(t.filterInfo&&t.filterInfo.length>0&&null!=t.filterAttributesData){const e=t.filterAttributesData.filter(r).map((t=>{const r=b(t,s,A),e={attributeInfo:t.attributeInfo,values:r};return v.push(e),e}));d=new Uint32Array(A),A=p(s,w,d,t.filterInfo,e)}for(const r of t.userAttributesData){const t=b(r,s,A);v.push({attributeInfo:r.attributeInfo,values:t})}3*A<w.length&&(w=new Uint8Array(w.buffer.slice(0,3*A))),function I(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e}(s,A,t.elevationOffset);const S=function h(t,r,e,a,s){if(!n(t,a,0,t,s,0,r))throw new Error("Can't reproject");const l=o(e.center),b=i(),m=i(),p=o(e.halfSize);f(D,e.quaternion);const A=new Float32Array(3*r);for(let n=0;n<r;n++){let r=3*n;b[0]=t[r]-l[0],b[1]=t[r+1]-l[1],b[2]=t[r+2]-l[2],u(m,b,D),p[0]=Math.max(p[0],Math.abs(m[0])),p[1]=Math.max(p[1],Math.abs(m[1])),p[2]=Math.max(p[2],Math.abs(m[2])),A[r++]=b[0],A[r++]=b[1],A[r]=b[2]}return e.halfSize=p,A}(s,A,a.fromData(t.obbData),e.fromJSON(t.inSR),e.fromJSON(t.outSR));return{obbData:t.obbData,points:S,rgb:w,attributes:v,pointIdFilterMap:d}}}const D=s();function g(){return new c}export{g as default};
