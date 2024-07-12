const __vite__fileDeps=["assets/geometryEngine-Bp1TD6MM.js","assets/geometryEngineBase-9EI9fooq.js","assets/index-DSIPxOWi.js","assets/index-B_7YxLDX.css","assets/hydrated-DE1HcVsK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{bn as e,mJ as t,mK as r,mL as n,ag as o,e as f,a as y,y as p,g as m,P as h,S as F,h5 as w,n as v,mM as E,mN as x,d8 as _,cD as O,J as A,ae as j,er as N,_ as L,mO as T,d6 as M,d7 as D,z as R}from"./index-DSIPxOWi.js";import{a as S,n as C,b as U}from"./TemporalSceneLayerView-BafFz-f2.js";import{y as q}from"./LayerView-DMoB2q_T.js";const P={setAttribute(){},rollback(){},commit(){}};var V,k;function i$1(t,r){const n=r.attributes[t.objectIdField];if(null==n)return P;const o=t.sessions.get(n);if(o)return o;const f=e(r.attributes),y=new Set,p=t.i3sOverrides.createInteractiveEditSession(n),m=new Map;let h=V.EDITING;const F={setAttribute(e,o){if(h!==V.EDITING)return;const F=t.fieldsIndex.get(e);if(!F)return;const w=t.attributeStorageInfo.findIndex((e=>e.name===F.name));if(w<0)return;if(!(e in f))throw new Error(`Attribute "${e}" is not an attribute of the edited feature.`);p.setAttribute(w,o);const v=t.attributeStorageInfo[w];let E=!1;y.add(e),t.forEachNode(((e,f)=>{const y=((e,t)=>{const r=m.get(e);if(null==r){const r=t.indexOf(n);return m.set(e,r),r}return r})(e,f);if(-1===y)return;const p=t.getAttributeData(e.index);if(p){const n=p[v.name];n&&(n[y]=o,t.setAttributeData(e.index,p,r),E=!0)}})),E&&t.clearMemCache()},rollback(){if(h===V.EDITING){for(const e of y)this.setAttribute(e,f[e]);p.remove(),h=V.ROLLED_BACK,t.sessions.delete(n)}},commit(){h===V.EDITING&&(p.remove(),h=V.COMMITTED,t.sessions.delete(n))}};return t.sessions.set(n,F),F}function s(e,t,r){const{gidToFeatureInfo:n,oidToFeatureInfo:o,fieldsIndex:f,objectIdField:y,globalIdField:p,featureOrIdentifierList:m}=r;if(!r.featuresResolved&&null!=m){for(const e of m){const t={feature:null,oid:-1,gid:null};if("attributes"in e){t.feature=e;const r=e.attributes;if(null!=r)for(const e in r){if(-1!==t.oid&&null!=t.gid)break;const n=f.normalizeFieldName(e);n===y&&(t.oid=r[e]??-1),n===p&&(t.gid=r[e])}}else t.oid=e.objectId??-1,t.gid=e.globalId;null!=t.gid&&n.set(t.gid,t),-1!==t.oid&&o.set(t.oid,t)}r.featuresResolved=!0}return(-1!==e?o.get(e):null)??(null!=t?n.get(t):null)}function l(e,t,r,n,o=null,f=!0){const y=[],p={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:null==r,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:r};for(const m of t){if(null!=m.error)continue;const e=m.objectId??-1,t=m.globalId,r=(-1===e||f?s(e,t,p):null)??{feature:null,oid:e,gid:t},h={oid:-1===e?r.oid:e,gid:t??r.gid,feature:r.feature,result:m};if(y.push(h),-1===h.oid&&null!=h.gid&&null!=o&&(h.oid=o.get(h.gid)??-1),-1===h.oid&&null!=h.gid){let e=n.get(h.gid);null==e&&(e=[],n.set(h.gid,e)),e.push(h)}}return y}async function u(e,n){var o,f,y;const p=new Map,m=l(e,n.addedFeatures,null==(o=n.edits)?void 0:o.addFeatures,p),h=l(e,n.updatedFeatures,null==(f=n.edits)?void 0:f.updateFeatures,p),F=l(e,n.deletedFeatures,null==(y=n.edits)?void 0:y.deleteFeatures,p,n.globalIdToObjectId,!1);return p.size>0&&await async function a$2(e,n){const o=e.i3sOverrides.layer.associatedLayer;if(null==(null==o?void 0:o.globalIdField))return;const f=o.createQuery(),{objectIdField:y,globalIdField:p}=o;f.where=Array.from(n.keys()).map((e=>`${p}='${e}'`)).join(" OR "),f.returnGeometry=!1,f.outFields=[y,p],f.cacheHint=!1;const m=await t(r(o,f));if(!m.ok)return;const h=m.value.features;for(const t of h){const e=t.attributes[p],r=t.attributes[y];if(null==e||null==r||-1===r)continue;const o=n.get(e);if(null!=o)for(const t of o)t.oid=r}}(e,p),{adds:m.filter((e=>-1!==e.oid)),updates:h.filter((e=>-1!==e.oid)),deletes:F.filter((e=>-1!==e.oid))}}function d(e,t){const r=new Map,o2=e=>{for(const{oid:t,feature:n}of e){const e=null==n?void 0:n.geometry;"mesh"===(null==e?void 0:e.type)&&r.set(t,e)}};o2(t.adds),o2(t.updates);for(const n of t.deletes)r.set(n.oid,null);for(const[n,o]of r)e.i3sOverrides.updateGeometry(n,o)}function f$1(e,t){var r;const n=function I(e,t){const r=t.updates;if(!r||0===r.length)return new z;const n=new z,o=new Map;for(let f=0;f<e.attributeStorageInfo.length;f++)o.set(e.attributeStorageInfo[f].name,f);return e.forEachNode(((t,o)=>{for(const f of r){if(null==f.feature)continue;const r=f.feature,y=f.oid,p=o.indexOf(y);for(const o in r.attributes){const f=e.fieldsIndex.normalizeFieldName(o),m=g(n,t.index,f),h=r.attributes[o];m.push({featureIndex:p,featureId:y,value:h})}}})),n}(e,t),o=function c$1(e,t){var r;const n=new Map,o=t.adds;if(!o||0===o.length||null==e.globalIdField)return n;for(const f of o){const e=f.oid,t=f.feature;"mesh"===(null==(r=null==t?void 0:t.geometry)?void 0:r.type)&&n.set(e,t)}return n}(e,t);if(0===n.size&&0===o.size)return;const f=new Map;for(let E=0;E<e.attributeStorageInfo.length;E++)f.set(e.attributeStorageInfo[E].name,E);let y=!1;n.forEach(((t,r)=>{const n=e.getAttributeData(r);let o=!1;t.forEach(((t,r)=>{const p=null!=n?n[r]:null,m=f.get(r);for(const{featureIndex:n,value:f,featureId:h}of t)p&&(p[n]=f,o=!0,y=!0),e.i3sOverrides.updateAttributeValue(h,m,f)})),o&&e.setAttributeData(r,n,null)})),y&&e.clearMemCache();const{fieldsIndex:p,i3sOverrides:m,objectIdField:h,globalIdField:F}=e,w=null==(r=m.layer.associatedLayer)?void 0:r.infoFor3D,v=new Set(w?[...Object.values(w.assetMapFieldRoles),...Object.values(w.transformFieldRoles)]:[]);for(const[E,x]of o){m.featureAdded(E);const{attributes:e}=x;for(const t in e){if(t!==h&&t!==F&&v.has(t))continue;const r=p.normalizeFieldName(t),n=null!=r?f.get(r):null;if(null==n)continue;const o=e[t];m.updateAttributeValue(E,n,o)}}}function g(e,t,r){const n=function b(e,t){const r=e.get(t);if(r)return r;const n=new $;return e.set(t,n),n}(e,t),o=null!=r&&n.get(r);if(o)return o;const f=new Array;return n.set(r,f),f}(k=V||(V={}))[k.EDITING=0]="EDITING",k[k.ROLLED_BACK=1]="ROLLED_BACK",k[k.COMMITTED=2]="COMMITTED";const $=Map,z=Map;function i(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return e.outFields?n(t,[...o(t,e.outFields),...r]):n(t,r)}}}}const c=e=>{let t=class extends e{constructor(){super(...arguments),this._numUpdating=0}get updating(){return this._numUpdating>0}autoUpdateAsync(e,t){const r=w((async t=>{++this._numUpdating;try{const r=await t;this.destroyed||this._set(e,r)}catch(r){v.getLogger(this).warn(`Async update of "${String(e)}" failed. Async update functions should not throw exceptions.`)}--this._numUpdating}));return m(t,r,h)}};return f([p({readOnly:!0})],t.prototype,"updating",null),f([p()],t.prototype,"_numUpdating",void 0),t=f([y("esri.core.AsyncUpdate")],t),t};let G=class a extends(c(F)){};G=f([y("esri.core.AsyncUpdate")],G);let K=class extends(c(F)){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:t},rendererFields:r,labelingFields:o,viewFilterFields:f}=this;return n(e,[...t??[],...r??[],...o??[],...f??[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",(async()=>{const{fieldsIndex:e,renderer:t}=this.layer;return t?this._getFieldsAsync((r=>t.collectRequiredFields(r,e))):null})),this.autoUpdateAsync("labelingFields",(async()=>{const{layer:e}=this;return e.labelsVisible?this._getFieldsAsync((t=>E(t,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,mergedFilter:t}=this.layerView;return this._getFieldsAsync((r=>x(r,e,t)))}))])}async _getFieldsAsync(e){const t=new Set;try{return await e(t),Array.from(t).sort()}catch(r){return v.getLogger(this).error(r),null}}};f([p()],K.prototype,"layerView",void 0),f([p()],K.prototype,"layer",null),f([p()],K.prototype,"requiredFields",null),f([p()],K.prototype,"rendererFields",void 0),f([p()],K.prototype,"labelingFields",void 0),f([p()],K.prototype,"viewFilterFields",void 0),K=f([y("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],K);let B=class extends q{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return S(this._layerFilter)}get _layerFilter(){var e;const t=null==(e=this.layer)?void 0:e.filter;if(null==t||t.geometries.length<1)return null;const r=this._geometryEngine;if(null==r||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return C;const n=t.geometries.at(0).spatialReference,o=t.geometries.toArray().map((e=>{try{e=r.simplify(e)}catch(t){return v.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==e)return null;if(e.spatialReference.equals(n))return e;try{return _(e,n)}catch(t){return v.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}})).filter(O).sort(((e,t)=>e.extent.xmin-t.extent.xmin)),f=new Set,y=new Array,p=new Array;for(let h of o){const e=h.extent.xmin;if(y.length=0,f.forEach((t=>{if(e>=t.extent.xmax)return p.push(t),void f.delete(t);h.extent.ymin<=t.extent.ymax&&h.extent.ymax>=t.extent.ymin&&r.intersects(h,t)&&y.push(t)})),y.length>0){y.push(h);try{h=r.union(y)}catch(m){v.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}y.pop(),y.forEach((e=>f.delete(e)))}f.add(h)}return f.forEach((e=>p.push(e))),p.length>0?{spatialRelationship:t.spatialRelationship,geometries:p}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(null==e||e.geometries.length<=1)return!1;const t=e.geometries.at(0).spatialReference;return e.geometries.some((({spatialReference:e})=>!e.equals(t)&&!A(e,t)))}get layerFilterUpdating(){return U(this._layerFilter)}initialize(){const{signal:e}=this._abortController;j((()=>{var e,t,r;return this.destroyed||!this._geometryEngine&&(null==(r=null==(t=null==(e=this.layer)?void 0:e.filter)?void 0:t.geometries)?void 0:r.length)}),e).then((async()=>{N(e),this._geometryEngine=await L((()=>import("./geometryEngine-Bp1TD6MM.js")),__vite__mapDeps([0,1,2,3,4]))})).catch(T),this._projectionEngineLoaded=M(),j((()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine),e).then((async()=>{N(e),await D(),this._projectionEngineLoaded=!0})).catch(T)}destroy(){this._abortController=R(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}};f([p()],B.prototype,"layer",void 0),f([p()],B.prototype,"availableFields",null),f([p()],B.prototype,"maximumNumberOfFeatures",null),f([p({readOnly:!0})],B.prototype,"maximumNumberOfFeaturesExceeded",null),f([p()],B.prototype,"filter",void 0),f([p({readOnly:!0})],B.prototype,"layerFilter",null),f([p({readOnly:!0})],B.prototype,"_layerFilter",null),f([p()],B.prototype,"_geometryEngine",void 0),f([p()],B.prototype,"_projectionEngineLoaded",void 0),f([p()],B.prototype,"_filterNeedsProjectionEngine",null),f([p()],B.prototype,"layerFilterUpdating",null),B=f([y("esri.views.layers.SceneLayerView")],B);const H=B;export{K as a,i as b,d,f$1 as f,i$1 as i,u,H as w};