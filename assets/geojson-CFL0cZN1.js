import{t as e}from"./date-Do_V47iR.js";import{b as n,f1 as t,fo as o,fp as r,fq as i,fr as s}from"./index-DSIPxOWi.js";const c={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return c[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const n of e.features)n&&(yield n)}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const n of e.coordinates)yield*n;break;case"MultiPolygon":for(const n of e.coordinates)for(const e of n)yield*e}}function a(e){for(const n of e)if(n.length>2)return!0;return!1}function g(e){let n=0;for(let t=0;t<e.length;t++){const o=e[t],r=e[(t+1)%e.length];n+=o[0]*r[1]-r[0]*o[1]}return n<=0}function m(e){const n=e[0],t=e[e.length-1];return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]||e.push(n),e}function h(e,n,t){switch(n.type){case"LineString":return function w(e,n,t){return M(e,n.coordinates,t),e}(e,n,t);case"MultiLineString":return function P(e,n,t){for(const o of n.coordinates)M(e,o,t);return e}(e,n,t);case"MultiPoint":return function j(e,n,t){return M(e,n.coordinates,t),e}(e,n,t);case"MultiPolygon":return function b(e,n,t){for(const o of n.coordinates){G(e,o[0],t);for(let n=1;n<o.length;n++)k(e,o[n],t)}return e}(e,n,t);case"Point":return function S(e,n,t){return O(e,n.coordinates,t),e}(e,n,t);case"Polygon":return function F(e,n,t){const o=n.coordinates;G(e,o[0],t);for(let r=1;r<o.length;r++)k(e,o[r],t);return e}(e,n,t)}}function G(e,n,t){const o=m(n);!function y(e){return!g(e)}(o)?M(e,o,t):T(e,o,t)}function k(e,n,t){const o=m(n);!function d(e){return g(e)}(o)?M(e,o,t):T(e,o,t)}function M(e,n,t){for(const o of n)O(e,o,t);e.lengths.push(n.length)}function T(e,n,t){for(let o=n.length-1;o>=0;o--)O(e,n[o],t);e.lengths.push(n.length)}function O(e,n,t){const[o,r,i]=n;e.coords.push(o,r),t.hasZ&&e.coords.push(i||0)}function L(n){switch(typeof n){case"string":return e(n)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function E(e,o=4326){if(!e)throw new n("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new n("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:r}=e;if(!r)return;const i="string"==typeof r?r:"name"===r.type?r.properties.name:"EPSG"===r.type?r.properties.code:null,s=t({wkid:o})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${o})$`,"i");if(!i||!s.test(i))throw new n("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:r})}function I(e,n={}){const t=[],i=new Set,s=new Set;let c,x=!1,v=null,C=!1,{geometryType:D=null}=n,J=!1;for(const r of l(e)){const{geometry:e,properties:n,id:R}=r;if((!e||(D||(D=u(e.type)),u(e.type)===D))&&(x||(x=a(f(e))),C||(C=null!=R,C&&(c=typeof R,n&&(v=Object.keys(n).filter((e=>n[e]===R))))),n&&v&&C&&null!=R&&(v.length>1?v=v.filter((e=>n[e]===R)):1===v.length&&(v=n[v[0]]===R?v:[])),!J&&n)){let e=!0;for(const r in n){if(i.has(r))continue;const c=n[r];if(null==c){e=!1,s.add(r);continue}const x=L(c);if("unknown"===x){s.add(r);continue}s.delete(r),i.add(r);const v=o(r);v&&t.push({name:v,alias:r,type:x})}J=e}}const R=o(1===(null==v?void 0:v.length)&&v[0]||null)??void 0;if(R)for(const o of t)if(o.name===R&&r(o)){o.type="esriFieldTypeOID";break}return{fields:t,geometryType:D,hasZ:x,objectIdFieldName:R,objectIdFieldType:c,unknownFields:Array.from(s)}}function N(e,n){return Array.from(function*p(e,n={}){const{geometryType:t,objectIdField:o}=n;for(const r of e){const{geometry:e,properties:c,id:x}=r;if(e&&u(e.type)!==t)continue;const v=c||{};let C;o&&(C=v[o],null==x||C||(v[o]=C=x));const D=new i(e?h(new s,e,n):null,v,null,C??void 0);yield D}}(l(e),n))}export{E,I,N,u};
