import{gY as t,ej as e,bZ as n,bF as r,fk as o,gr as l}from"./index-DSIPxOWi.js";import{R as i}from"./normalizeUtils-BrH-PrZy.js";import{t as u}from"./query-C2USZ63O.js";const s="Layer does not support extent calculation.";function y(t,e){var n,r;const i=t.geometry,u=t.toJSON(),s=u;if(null!=i&&(s.geometry=JSON.stringify(i),s.geometryType=o(i),s.inSR=l(i.spatialReference)),(null==(n=u.topFilter)?void 0:n.groupByFields)&&(s.topFilter.groupByFields=u.topFilter.groupByFields.join(",")),(null==(r=u.topFilter)?void 0:r.orderByFields)&&(s.topFilter.orderByFields=u.topFilter.orderByFields.join(",")),u.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),u.objectIds&&(s.objectIds=u.objectIds.join(",")),u.orderByFields&&(s.orderByFields=u.orderByFields.join(",")),u.outFields&&!((null==e?void 0:e.returnCountOnly)||(null==e?void 0:e.returnExtentOnly)||(null==e?void 0:e.returnIdsOnly))?u.outFields.includes("*")?s.outFields="*":s.outFields=u.outFields.join(","):delete s.outFields,u.outSR?s.outSR=l(u.outSR):i&&u.returnGeometry&&(s.outSR=s.inSR),u.returnGeometry&&delete u.returnGeometry,u.timeExtent){const t=u.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:`${e??"null"},${n??"null"}`),delete u.timeExtent}return s}async function p(e,n,r,o){const l=await a(e,n,"json",o);return t(n,r,l.data),l}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:a(t,e,"json",n,{returnIdsOnly:!0})}async function d(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:a(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(s);if(e.hasOwnProperty("count"))throw new Error(s);return t}))}function c(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):a(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function a(t,o,l,s={},F={}){const f="string"==typeof t?e(t):t,j=o.geometry?[o.geometry]:[];return s.responseType="json",i(j,null,s).then((t=>{const e=null==t?void 0:t[0];null!=e&&((o=o.clone()).geometry=e);const i=u({...f.query,f:l,...F,...y(o,F)});return n(r(f.path,"queryTopFeatures"),{...s,query:{...i,...s.query}})}))}export{c,d,m,p};