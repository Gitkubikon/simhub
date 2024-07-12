import{b as e,ew as t,ex as a,ey as r,ez as n,eg as l}from"./index-DSIPxOWi.js";import{t as o,b as i,a as s}from"./fetchService-CJQ8-6Ub.js";import{s as u,a as c,o as p,u as d,t as y,c as f,n as m,i as w,e as h}from"./portalLayers-CiL_1SNh.js";import{populateGroupLayer as I}from"./layersCreator-CnQujQsO.js";async function b(n,l){const i=n.instance.portalItem;if(null==i?void 0:i.id)return await i.load(l),function g(t){const a=t.instance.portalItem;if(!(null==a?void 0:a.type)||!t.supportedTypes.includes(a.type))throw new e("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null==a?void 0:a.type,expectedType:t.supportedTypes.join(", ")})}(n),n.validateItem&&n.validateItem(i),async function L(n,l){const i=n.instance,f=i.portalItem;if(!f)return;const{url:m,title:G}=f,$=t(f,"portal-item");if("group"===i.type)return async function v(a,n,l){const i=a.portalItem;if(!a.sourceIsPortalItem)return;const{title:f,type:m}=i;if("Group Layer"===m){if(!r(i,"Map"))throw new e("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return async function j(e){const a=e.portalItem,r=await a.fetchData("json");if(!r)return;const n=t(a,"web-map");e.read(r,n),await I(e,r,{context:n}),e.resourceReferences={portalItem:a,paths:n.readResourcePaths??[]}}(a)}return a.read({title:f},n),async function S(t,a){var r;let n;const{portalItem:l}=t;if(!l)return;const i=l.type,f=a.layerModuleTypeMap;switch(i){case"Feature Service":case"Feature Collection":n=f.FeatureLayer;break;case"Stream Service":n=f.StreamLayer;break;case"Scene Service":n=f.SceneLayer;break;default:throw new e("portal:unsupported-item-type-as-group",`The item type '${i}' is not supported as a 'IGroupLayer'`)}const m=new h;let[I,G]=await Promise.all([n(),F(a,m)]),d2=()=>I;if("Feature Service"===i){const e=null==(r=u(G))?void 0:r.customParameters;G=l.url?await c(G,l.url,m):{},d2=await async function R(e,t){const{layers:a}=e;if(!(null==a?void 0:a.length))return;const r=new Set,n=[];for(const{layerType:i}of a){const e=i??"FeatureLayer";if(r.has(e))continue;r.add(e);const a=t[w(e)];n.push(a())}const l=await Promise.all(n),o=new Map;return Array.from(r).forEach(((e,t)=>{o.set(e,l[t])})),({layerType:e})=>{const t=e??"FeatureLayer";return o.get(t)}}(G,f)||d2;const a=await async function E(e,t){const{layersJSON:a}=await s(e,t);if(!a)return null;const r=[...a.layers,...a.tables];return e=>r.find((t=>t.id===e.id))}(l.url,{customParameters:e,loadContext:m});return await P(t,d2,G,a)}return"Scene Service"===i&&l.url&&(G=await p(l,G,m)),d(G)>0?await P(t,d2,G):await async function T(e,t){var a,r;const{portalItem:n}=e;if(!(null==n?void 0:n.url))return;const l=await o(n.url);l&&P(e,t,{layers:null==(a=l.layers)?void 0:a.map(y),tables:null==(r=l.tables)?void 0:r.map(y)})}(t,d2)}(a,l)}(i,$,n);m&&"media"!==i.type&&i.read({url:m},$);const J=new h,N=await F(n,J,l);return N&&i.read(N,$),i.resourceReferences={portalItem:f,paths:$.readResourcePaths??[]},"subtype-group"!==i.type&&i.read({title:G},$),a(i,$)}(n,l)}async function P(e,t,a,r){var n;let l=a.layers||[];const o=a.tables||[];if("Feature Collection"===(null==(n=e.portalItem)?void 0:n.type)?(l.forEach(((e,t)=>{var a;e.id=t,"Table"===(null==(a=null==e?void 0:e.layerDefinition)?void 0:a.type)&&o.push(e)})),l=l.filter((e=>{var t;return"Table"!==(null==(t=null==e?void 0:e.layerDefinition)?void 0:t.type)}))):(l.reverse(),o.reverse()),l.forEach((n=>{const l=null==r?void 0:r(n);if(l||!r){const r=M(e,t(n),a,n,l);e.add(r)}})),o.length){const t=await i.FeatureLayer();o.forEach((n=>{const l=null==r?void 0:r(n);if(l||!r){const r=M(e,t,a,n,l);e.tables.add(r)}}))}}function M(e,t,a,r,l){const o=e.portalItem,i={portalItem:o.clone(),layerId:r.id};null!=r.url&&(i.url=r.url);const s=new t(i);if("sourceJSON"in s&&(s.sourceJSON=l),"subtype-group"!==s.type&&"catalog"!==s.type&&(s.sublayerTitleMode="service-name"),"Feature Collection"===o.type){const e={origin:"portal-item",portal:o.portal||n.getDefault()};s.read(r,e);const t=a.showLegend;null!=t&&s.read({showLegend:t},e)}return s}async function F(e,t,a){if(!1===e.supportsData)return;const r=e.instance,n=r.portalItem;if(!n)return;let o=null;try{o=await n.fetchData("json",a)}catch(i){}if(function D(e){return"stream"!==e.type&&"layerId"in e}(r)){let e=null;const a=await async function x(e,t,a){var r,n,o,i,s;if((null==t?void 0:t.layers)&&(null==t?void 0:t.tables))return d(t);const c=l(e.url);if(!c)return 1;const p=await a.fetchServiceMetadata(c.url.path,{customParameters:null==(r=u(t))?void 0:r.customParameters}).catch((()=>null));return((null==(n=null==t?void 0:t.layers)?void 0:n.length)??(null==(o=null==p?void 0:p.layers)?void 0:o.length)??0)+((null==(i=null==t?void 0:t.tables)?void 0:i.length)??(null==(s=null==p?void 0:p.tables)?void 0:s.length)??0)}(n,o,t);if(((null==o?void 0:o.layers)||(null==o?void 0:o.tables))&&a>0){if(null==r.layerId){const e=f(r.type),t=e?m(o,e)[0]:u(o);t&&(r.layerId=t.id)}e=function C(e,t){var a,r;const{layerId:n}=t,l=(null==(a=e.layers)?void 0:a.find((e=>e.id===n)))||(null==(r=e.tables)?void 0:r.find((e=>e.id===n)));return l&&function k(e,t){const a="layerType"in e&&e.layerType,{type:r}=t;return!("feature"===r&&a||"catalog"===r&&!a||"oriented-imagery"===r&&!a||"subtype-group"===r&&!a)}(l,t)?l:null}(o,r),e&&null!=o.showLegend&&(e.showLegend=o.showLegend)}return a>1&&"sublayerTitleMode"in r&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),e}return o}export{b as load};