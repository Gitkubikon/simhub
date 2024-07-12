const __vite__fileDeps=["assets/knowledgeGraphService-qQQwd7TJ.js","assets/index-DSIPxOWi.js","assets/index-B_7YxLDX.css","assets/GraphQueryStreaming-DGarY5EH.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ez as e,_ as n,g5 as r,d6 as t,d7 as a,d8 as i,I as o,h0 as s,h1 as l,eO as c,g_ as u,h2 as p,h3 as f}from"./index-DSIPxOWi.js";import{a as d,b as m,r as h,I as g,m as w,G as y,ab as v,P as S,N as R,U as I,A as x,E as _,X as b,w as j,v as T,ac as W,ad as G,ae as k}from"./arcadeUtils-CHsZDnQG.js";import{l as D}from"./portalUtils-CJNVYHNM.js";import{s as P,m as A,t as F,p as q,c as N}from"./GraphQueryStreaming-DGarY5EH.js";import"./TimeOnly-C5lZbbIX.js";import"./ImmutableArray-BLzlMo4D.js";import"./number-DXNV0RYc.js";import"./hash-BjBdcEEU.js";let O=null;async function M(e,r){const t=new c({portal:e,id:r});return await t.load(),null===O&&(O=await n((()=>import("./knowledgeGraphService-qQQwd7TJ.js").then((e=>e.k))),__vite__mapDeps([0,1,2,3]))),await O.fetchKnowledgeGraph(t.url)}function Q(e,n,r,t,a){if(null===e)return null;if(y(e)||_(e))return e;if(b(e))return e.toJSDate();if(b(e))return e.toJSDate();if(j(e))return e.toStorageFormat();if(T(e))return e.toStorageString();if(W(e)){const i={};for(const o of e.keys())i[o]=Q(e.field(o),n,r,t,a),i[o]instanceof u&&a.push({container:i,indexer:o});return i}if(I(e)){const i=e.map((e=>Q(e,n,r,t,a)));for(let e=0;e<i.length;e++)i[e]instanceof u&&a.push({container:i,indexer:e});return i}return G(e)?e.spatialReference.isWGS84?e:e.spatialReference.isWebMercator&&n?p(e):e:void 0}function K(e,n){if(!e)return null;const r={};for(const t in e)r[t]=V(e[t],n);return r}function V(e,n){return null===e?null:I(e)?e.map((e=>V(e,n))):e instanceof A?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:K(e.properties,n)}:e instanceof F?{graphType:"object",properties:K(e.properties,n)}:e instanceof q?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:K(e.properties,n)}:e instanceof N?{graphType:"path",path:e.path?e.path.map((e=>V(e,n))):null}:G(e)?function E(e,n){if(!e)return e;if(e.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return f(e);if(e.spatialReference.equals(n.spatialReference))return e;throw new m(n,h.WrongSpatialReference,null)}(e,n):y(e)||_(e)||k(e)?e:null}function C(c){"async"===c.mode&&(c.functions.knowledgegraphbyportalitem=function(n,r){return c.standardFunctionAsync(n,r,((t,a,i)=>{var o,s;if(d(i,2,2,n,r),null===i[0])throw new m(n,h.PortalRequired,r);if(i[0]instanceof g){const r=w(i[1]);let t;return t=(null==(o=n.services)?void 0:o.portal)?n.services.portal:e.getDefault(),M(D(i[0],t),r)}if(!1===y(i[0]))throw new m(n,h.InvalidParameter,r);const l=w(i[0]);return M((null==(s=n.services)?void 0:s.portal)??e.getDefault(),l)}))},c.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),c.functions.querygraph=function(e,u){return c.standardFunctionAsync(e,u,(async(c,p,f)=>{var g;d(f,2,4,e,u);const w=f[0];if(!v(w))throw new m(e,h.InvalidParameter,u);const _=f[1];if(!y(_))throw new m(e,h.InvalidParameter,u);null===O&&(O=await n((()=>import("./knowledgeGraphService-qQQwd7TJ.js").then((e=>e.k))),__vite__mapDeps([0,1,2,3])));let b=null;const j=S(f[2],null);if(!(j instanceof R||null===j))throw new m(e,h.InvalidParameter,u);if(j){let n=[];b=Q(j,!0,!1,e,n),n=n.filter((e=>!e.container[e.indexer].spatialReference.isWGS84)),n.length>0&&await async function J(e){const n=r.geometryServiceUrl??"";if(!n){t()||await a();for(const n of e)n.container[n.indexer]=i(n.container[n.indexer],o.WGS84);return}const c=e.map((e=>e.container[e.indexer])),u=new s({geometries:c,outSpatialReference:o.WGS84}),p=await l(n,u);for(let r=0;r<p.length;r++){const n=e[r];n.container[n.indexer]=p[r]}}(n)}const T=new P({openCypherQuery:_,bindParameters:b});((null==(g=null==w?void 0:w.serviceDefinition)?void 0:g.currentVersion)??11.3)>11.2&&(T.outputSpatialReference=e.spatialReference);const W=(await O.executeQueryStreaming(w,T)).resultRowsStream.getReader(),G=[];try{for(;;){const{done:n,value:r}=await W.read();if(n)break;if(I(r))for(const t of r)G.push(V(t,e));else{const n=[];for(const t of r)n.push(V(r[t],e));G.push(n)}}}catch(k){throw k}return R.convertJsonToArcade(G,x(e),!1,!0)}))},c.signatures.push({name:"querygraph",min:2,max:4}))}export{C as registerFunctions};
