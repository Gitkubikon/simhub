import{eG as e,bY as a,eH as t,eg as r,cD as n,eI as s,eJ as l,eK as o,eL as i,eM as c,b as u,eN as y}from"./index-DSIPxOWi.js";import{$ as f,w as p,I as d,v as m,j as h,y as v,P as w,l as b,d as T,c as I}from"./utils-CNFe6p3t.js";import{a as A,b as S,i as P}from"./fetchService-CJQ8-6Ub.js";const $="Feature Service",E="feature-layer-utils",L=`${E}-save`,x=`${E}-save-as`,N=`${E}-saveall`,g=`${E}-saveall-as`;function O(e){return{isValid:c(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function U(e){const a=[],t=[];for(const{layer:r,layerJSON:n}of e)r.isTable?t.push(n):a.push(n);return{layers:a,tables:t}}function j(e){return U([e])}async function J(e,a){return/\/\d+\/?$/.test(e.url)?j(a[0]):M(a,e)}async function M(e,a){if(e.reverse(),!a)return U(e);const t=await async function R(e,a){let t=await e.fetchData("json");if(function D(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(t))return t;t||(t={}),function F(e){e.layers||(e.layers=[]),e.tables||(e.tables=[])}(t);const{layer:{url:r,customParameters:n,apiKey:s}}=a[0];return await async function z(e,a,t){const{url:r,customParameters:n,apiKey:s}=a,{serviceJSON:l,layersJSON:o}=await A(r,{customParameters:n,apiKey:s}),i=G(e.layers,l.layers,t),c=G(e.tables,l.tables,t);e.layers=i.itemResources,e.tables=c.itemResources;const u=[...i.added,...c.added],y=o?[...o.layers,...o.tables]:[];await async function B(e,a,t,r){const n=await async function V(e){const a=[];e.forEach((({type:e})=>{const t=P(e),r=S[t];a.push(r())}));const t=await Promise.all(a),r=new Map;return e.forEach((({type:e},a)=>{r.set(e,t[a])})),r}(a),s=a.map((({id:e,type:a})=>new(n.get(a))({url:t,layerId:e,sourceJSON:r.find((({id:a})=>a===e))})));await Promise.allSettled(s.map((e=>e.load()))),s.forEach((a=>{const{layerId:t,loaded:r,defaultPopupTemplate:n}=a;if(!r||null==n)return;const s={id:t,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==a.operationalLayerType&&(s.layerType=a.operationalLayerType),k(a,s,e)}))}(e,u,r,y)}(t,{url:r??"",customParameters:n,apiKey:s},a.map((e=>e.layer.layerId))),t}(a,e);for(const r of e)k(r.layer,r.layerJSON,t);return function K(e,a){const t=[],r=[];for(const{layer:n}of a){const{isTable:e,layerId:a}=n;e?r.push(a):t.push(a)}Y(e.layers,t),Y(e.tables,r)}(t,e),t}function Y(e,t){if(e.length<2)return;const r=[];for(const{id:a}of e)r.push(a);a(r.sort(_),t.slice().sort(_))&&e.sort(((e,a)=>{const r=t.indexOf(e.id),n=t.indexOf(a.id);return r<n?-1:r>n?1:0}))}function _(e,a){return e<a?-1:e>a?1:0}function G(e,a,r){const n=t(e,a,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const s=n.added;return s.forEach((({id:a})=>{e.push({id:a})})),{itemResources:e,added:s.filter((({id:e})=>!r.includes(e)))}}function k(e,a,t){e.isTable?q(t.tables,a):q(t.layers,a)}function q(e,a){const t=e.findIndex((({id:e})=>e===a.id));-1===t?e.push(a):e[t]=a}function C(e,a){if(!e.length)throw new u(`${a}:missing-parameters`,"'layers' array should contain at least one feature layer")}function Q(e,a){const t=e.map((e=>e.layerId));if(new Set(t).size!==t.length)throw new u(`${a}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function W(e){C(e,N),await Promise.all(e.map((e=>e.load())));for(const a of e)b(a,N,O),T({layer:a,itemType:$,errorNamePrefix:N});(function H(e,a){const t=e.map((e=>e.portalItem.id));if(new Set(t).size>1)throw new u(`${a}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")})(e,N),Q(e,N)}async function X(e,a){const{url:t,layerId:n,title:o,fullExtent:c,isTable:u}=e,f=r(t);a.url=("FeatureServer"===(null==f?void 0:f.serverType)?t:`${t}/${n}`)??null,a.title||(a.title=o),a.extent=null,u||null==c||(a.extent=await s(c)),l(a,i.METADATA),l(a,i.MULTI_LAYER),y(a,i.SINGLE_LAYER),u&&y(a,i.TABLE)}async function ee(e){C(e,g),await Promise.all(e.map((e=>e.load())));for(const a of e)b(a,g,O);(function Z(e,a){for(const s of e){const t=s.parsedUrl.path,n=r(t);if(!(null==n?void 0:n.url.path))throw new u(`${a}:invalid-parameters`,I(s,`has unsupported url pattern: ${t}`),{layer:s});const l=null==n?void 0:n.serverType;if("FeatureServer"!==l&&"MapServer"!==l)throw new u(`${a}:invalid-parameters`,I(s,`has unsupported server type: ${l}`),{layer:s});if("MapServer"===l&&e.length>1)throw new u(`${a}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=r(e[0].parsedUrl.path),n=null==t?void 0:t.url.path;if(!e.every((e=>{const a=r(e.parsedUrl.path);return(null==a?void 0:a.url.path)===n})))throw new u(`${a}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")})(e,g),Q(e,g)}async function ae(e,a){return f({layer:e,itemType:$,validateLayer:O,createItemData:(e,a)=>J(a,[e]),errorNamePrefix:L},a)}async function te(a,t){await W(a);const r=a[0].portalItem,n=p(r),s=await Promise.all(a.map((e=>d(e,n,t)))),l=await J(r,a.map(((e,a)=>({layer:e,layerJSON:s[a]}))));return m(r),await r.update({data:l}),await Promise.all(a.slice(1).map((e=>e.portalItem.reload()))),e(n),r.clone()}async function ne(e,a,t){return h({layer:e,itemType:$,validateLayer:O,createItemData:(e,a)=>Promise.resolve(j(e)),errorNamePrefix:x,newItem:a,setItemProperties:X},t)}async function oe(a,t,c){await ee(a);const u=v({itemType:$,errorNamePrefix:g,newItem:t}),y=p(u),f=await Promise.all(a.map((e=>d(e,y,c)))),h=await M(a.map(((e,a)=>({layer:e,layerJSON:f[a]}))));await async function re(e,a){let t=0,c=0;for(const{isTable:r}of a)r?c++:t++;const u=a[0].parsedUrl.path,y=r(u);if(e.url="FeatureServer"===(null==y?void 0:y.serverType)?y.url.path:u,e.title||(e.title=y.title),e.extent=null,t>0){const t=a.map((e=>e.fullExtent)).filter(n).reduce(((e,a)=>e.clone().union(a)));t&&(e.extent=await s(t))}l(e,i.METADATA),o(e,i.MULTI_LAYER,a.length>1),o(e,i.SINGLE_LAYER,1===a.length),o(e,i.TABLE,c>0&&0===t),m(e)}(u,a),await w(u,h,c);for(const e of a)e.portalItem=u.clone();return e(y),u}export{ae as save,te as saveAll,oe as saveAllAs,ne as saveAs};