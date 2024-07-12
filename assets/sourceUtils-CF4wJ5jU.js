const __vite__fileDeps=["assets/geometryEngineJSON-C0bkwI2l.js","assets/geometryEngineBase-DWDcI5KJ.js","assets/index-Cev3ONi_.js","assets/index-Blpd_LPN.css","assets/json-Wa8cmqdu.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{fs as d,ft as h,fp as p,fu as g,aR as m,fv as y,fw as a,_ as w}from"./index-Cev3ONi_.js";import{n as _}from"./date-M6n_RqpC.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(t){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function c(n){return new b(n)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function A(n){return new q(n)}const u=new Set;function F(n,t,e,f=!1){u.clear();for(const i in e){const r=n.get(i);if(!r)continue;const o=P(r,e[i]);if(u.add(r.name),r&&(f||r.editable)){const l=d(r,o);if(l)return c(h(l,r,o));t[r.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,t){let e=t;return p(n)&&typeof t=="string"?e=parseFloat(t):g(n)&&t!=null&&typeof t!="string"?e=String(t):m(n)&&typeof t=="string"&&(e=_(t)),y(e)}let s;function G(n,t){if(!n||!a(t))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(t,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-C0bkwI2l.js").then(n=>n.g),__vite__mapDeps([0,1,2,3,4]))),s}async function R(n,t){!a(n)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await j()}export{A as d,c as f,R as j,F as p,G as y};
