import{b as y,ew as w,ex as T,ey as L,ez as S,eg as M}from"./index-DG8rgzil.js";import{t as F,b as P,a as x}from"./fetchService-DZLVx0jC.js";import{s as d,a as D,o as $,u as h,t as f,c as k,n as C,i as E,e as b}from"./portalLayers-Dv1C7DDT.js";import{populateGroupLayer as R}from"./layersCreator-B-ief8BW.js";async function Y(a,r){const t=a.instance.portalItem;if(t!=null&&t.id)return await t.load(r),j(a),a.validateItem&&a.validateItem(t),G(a,r)}function j(a){const r=a.instance.portalItem;if(!(r!=null&&r.type)||!a.supportedTypes.includes(r.type))throw new y("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r==null?void 0:r.type,expectedType:a.supportedTypes.join(", ")})}async function G(a,r){const t=a.instance,e=t.portalItem;if(!e)return;const{url:i,title:n}=e,l=w(e,"portal-item");if(t.type==="group")return J(t,l,a);i&&t.type!=="media"&&t.read({url:i},l);const o=new b,s=await g(a,o,r);return s&&t.read(s,l),t.resourceReferences={portalItem:e,paths:l.readResourcePaths??[]},t.type!=="subtype-group"&&t.read({title:n},l),T(t,l)}async function J(a,r,t){const e=a.portalItem;if(!a.sourceIsPortalItem)return;const{title:i,type:n}=e;if(n==="Group Layer"){if(!L(e,"Map"))throw new y("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return N(a)}return a.read({title:i},r),O(a,t)}async function N(a){const r=a.portalItem,t=await r.fetchData("json");if(!t)return;const e=w(r,"web-map");a.read(t,e),await R(a,t,{context:e}),a.resourceReferences={portalItem:r,paths:e.readResourcePaths??[]}}async function O(a,r){var u;let t;const{portalItem:e}=a;if(!e)return;const i=e.type,n=r.layerModuleTypeMap;switch(i){case"Feature Service":case"Feature Collection":t=n.FeatureLayer;break;case"Stream Service":t=n.StreamLayer;break;case"Scene Service":t=n.SceneLayer;break;default:throw new y("portal:unsupported-item-type-as-group",`The item type '${i}' is not supported as a 'IGroupLayer'`)}const l=new b;let[o,s]=await Promise.all([t(),g(r,l)]),c=()=>o;if(i==="Feature Service"){const I=(u=d(s))==null?void 0:u.customParameters;s=e.url?await D(s,e.url,l):{},c=await Q(s,n)||c;const v=await K(e.url,{customParameters:I,loadContext:l});return await p(a,c,s,v)}return i==="Scene Service"&&e.url&&(s=await $(e,s,l)),h(s)>0?await p(a,c,s):await z(a,c)}async function z(a,r){var i,n;const{portalItem:t}=a;if(!(t!=null&&t.url))return;const e=await F(t.url);e&&p(a,r,{layers:(i=e.layers)==null?void 0:i.map(f),tables:(n=e.tables)==null?void 0:n.map(f)})}async function p(a,r,t,e){var l;let i=t.layers||[];const n=t.tables||[];if(((l=a.portalItem)==null?void 0:l.type)==="Feature Collection"?(i.forEach((o,s)=>{var c;o.id=s,((c=o==null?void 0:o.layerDefinition)==null?void 0:c.type)==="Table"&&n.push(o)}),i=i.filter(o=>{var s;return((s=o==null?void 0:o.layerDefinition)==null?void 0:s.type)!=="Table"})):(i.reverse(),n.reverse()),i.forEach(o=>{const s=e==null?void 0:e(o);if(s||!e){const c=m(a,r(o),t,o,s);a.add(c)}}),n.length){const o=await P.FeatureLayer();n.forEach(s=>{const c=e==null?void 0:e(s);if(c||!e){const u=m(a,o,t,s,c);a.tables.add(u)}})}}function m(a,r,t,e,i){const n=a.portalItem,l={portalItem:n.clone(),layerId:e.id};e.url!=null&&(l.url=e.url);const o=new r(l);if("sourceJSON"in o&&(o.sourceJSON=i),o.type!=="subtype-group"&&o.type!=="catalog"&&(o.sublayerTitleMode="service-name"),n.type==="Feature Collection"){const s={origin:"portal-item",portal:n.portal||S.getDefault()};o.read(e,s);const c=t.showLegend;c!=null&&o.read({showLegend:c},s)}return o}async function g(a,r,t){if(a.supportsData===!1)return;const e=a.instance,i=e.portalItem;if(!i)return;let n=null;try{n=await i.fetchData("json",t)}catch{}if(B(e)){let l=null;const o=await A(i,n,r);if((n!=null&&n.layers||n!=null&&n.tables)&&o>0){if(e.layerId==null){const s=k(e.type),c=s?C(n,s)[0]:d(n);c&&(e.layerId=c.id)}l=q(n,e),l&&n.showLegend!=null&&(l.showLegend=n.showLegend)}return o>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),l}return n}async function A(a,r,t){var n,l,o,s,c;if(r!=null&&r.layers&&(r!=null&&r.tables))return h(r);const e=M(a.url);if(!e)return 1;const i=await t.fetchServiceMetadata(e.url.path,{customParameters:(n=d(r))==null?void 0:n.customParameters}).catch(()=>null);return(((l=r==null?void 0:r.layers)==null?void 0:l.length)??((o=i==null?void 0:i.layers)==null?void 0:o.length)??0)+(((s=r==null?void 0:r.tables)==null?void 0:s.length)??((c=i==null?void 0:i.tables)==null?void 0:c.length)??0)}function q(a,r){var i,n;const{layerId:t}=r,e=((i=a.layers)==null?void 0:i.find(l=>l.id===t))||((n=a.tables)==null?void 0:n.find(l=>l.id===t));return e&&H(e,r)?e:null}function B(a){return a.type!=="stream"&&"layerId"in a}function H(a,r){const t="layerType"in a&&a.layerType,{type:e}=r;return!(e==="feature"&&t||e==="catalog"&&!t||e==="oriented-imagery"&&!t||e==="subtype-group"&&!t)}async function K(a,r){const{layersJSON:t}=await x(a,r);if(!t)return null;const e=[...t.layers,...t.tables];return i=>e.find(n=>n.id===i.id)}async function Q(a,r){const{layers:t}=a;if(!(t!=null&&t.length))return;const e=new Set,i=[];for(const{layerType:o}of t){const s=o??"FeatureLayer";if(e.has(s))continue;e.add(s);const c=r[E(s)];i.push(c())}const n=await Promise.all(i),l=new Map;return Array.from(e).forEach((o,s)=>{l.set(o,n[s])}),({layerType:o})=>{const s=o??"FeatureLayer";return l.get(s)}}export{Y as load};