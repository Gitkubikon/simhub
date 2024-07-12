import{cC as e,bc as t,cD as s,cE as r,n as o,b as i,cF as n,cG as a}from"./index-DSIPxOWi.js";import{o as d}from"./BoundsStore-BQ0MOdb7.js";import{h as u}from"./QueryEngine-DAD9skS_.js";import{o as h}from"./optimizedFeatureQueryEngineAdapter--U1rvwBV.js";const l=e();class m{constructor(e){this.geometryInfo=e,this._boundsStore=new d,this._featuresById=new Map,this._markedIds=new Set,this.events=new t,this.featureAdapter=h}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,s,r,o]=this.fullBounds;return{xmin:t,ymin:s,xmax:r,ymax:o,spatialReference:u(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(s)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(r(l,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,s)=>{this._markedIds.has(s)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){var t,s;if(!e)return;const r=e.objectId;if(null==r)return void o.getLogger("esri.layers.graphics.data.FeatureStore").error(new i("featurestore:invalid-feature","feature id is missing",{feature:e}));const d=this._featuresById.get(r);let u;if(this._markedIds.add(r),d?(e.displayId=d.displayId,u=this._boundsStore.get(r),this._boundsStore.delete(r)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),!(null==(s=null==(t=e.geometry)?void 0:t.coords)?void 0:s.length))return this._boundsStore.set(r,null),void this._featuresById.set(r,e);u=n(null!=u?u:a(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=u&&this._boundsStore.set(r,u),this._featuresById.set(r,e)}_upsert(e){const t=null==e?void 0:e.objectId;if(null==t)return o.getLogger("esri.layers.graphics.data.FeatureStore").error(new i("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const s=this._featuresById.get(t);if(!s)return this._add(e),e;this._markedIds.add(t);const{geometry:r,attributes:d}=e;for(const o in d)s.attributes[o]=d[o];return r&&(s.geometry=r,this._boundsStore.set(t,n(a(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),s}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}export{m};
