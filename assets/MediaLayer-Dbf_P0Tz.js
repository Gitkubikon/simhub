const __vite__fileDeps=["assets/mediaLayerUtils-DRto4MYI.js","assets/utils-CNFe6p3t.js","assets/index-DSIPxOWi.js","assets/index-B_7YxLDX.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{V as e,i1 as t,bb as s,bc as r,g as n,b3 as i,I as a,k as o,az as l,n as d,fO as c,G as u,d8 as h,hH as p,j9 as m,e as f,y,a as g,g2 as _,g4 as w,eo as v,ep as S,eq as x,h5 as E,b as R,i_ as I,be as O,et as M,gH as A,bj as j,Z as V,_ as T}from"./index-DSIPxOWi.js";import{g as P,b as C,a as H,X as B,f as z}from"./VideoElement-BA4EzDol.js";import{o as q}from"./BoundsStore-BQ0MOdb7.js";import{m as N}from"./MediaElementView-DU1VM6lV.js";import"./resourceExtension-BScMZjEL.js";import"./PooledRBush-DOZnXWx2.js";import"./quickselect-D9ta8ndX.js";import"./normalizeUtilsSync-B5F66Zka.js";import"./normalizeUtilsCommon-BU8xfl77.js";const k={key:"type",defaultKeyValue:"image",base:P,typeMap:{image:C,video:H}},F=e.ofType(k);let G=class extends(t.LoadableMixin(s(r.EventedAccessor))){constructor(e){super(e),this._index=new q,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent")}const{spatialReference:t}=this;for(const s of e.added){if(this._elementViewsMap.get(s))continue;const e=new N({spatialReference:t,element:s});this._elementViewsMap.set(s,e);const r=n((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(r,e)}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh")},this.elements=new F}async load(e){if(i(e),!this.spatialReference){const e=this.elements.find((e=>{var t;return null!=(null==(t=e.georeference)?void 0:t.coords)}));this._set("spatialReference",e?e.georeference.coords.spatialReference:a.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",o(e,this._get("elements"),F))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new l({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):d.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await c(e.spatialReference,this.spatialReference,null,t);const s=u(e.spatialReference,this.spatialReference)?e:h(e,this.spatialReference);if(!s)return[];const r=s.normalize(),n=[];for(const i of r)this._index.forEachInBounds(p(i),(({normalizedCoords:e,element:t})=>{null!=e&&m(i,e)&&n.push(t)}));return n.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),n}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const s=e.normalizedBounds,r=this._index.has(e),n=null!=s;this._index.delete(e),n&&this._index.set(e,s),this.notifyChange("fullExtent"),t||(r!==n?this.emit("refresh"):this.emit("change",{element:e.element}))}};f([y()],G.prototype,"elements",null),f([y({readOnly:!0})],G.prototype,"fullExtent",null),f([y()],G.prototype,"spatialReference",null),G=f([g("esri.layers.support.LocalMediaElementSource")],G);const U=G;function b(e){return"object"==typeof e&&null!=e&&"type"in e}function L(e){return b(e)&&"image"===e.type}let W=class extends(_(w(v(S(x(V)))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=E((async(e,t,s)=>{const{save:r,saveAs:n}=await T((()=>import("./mediaLayerUtils-DRto4MYI.js")),__vite__mapDeps([0,1,2,3]));switch(e){case I.SAVE:return r(this,t);case I.SAVE_AS:return n(this,s,t)}})),this.source=new U}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(t){await this.loadFromPortal({supportedTypes:["Media Layer"]},t);let s=this.source;if(!s)throw new R("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const r=this._getSourceOverride(s,this.georeference);r&&(this.setAtOrigin("source",r,"web-map"),this.setAtOrigin("source",r,"web-scene"),s=r);const n=b(s)?new U({elements:new e([s])}):s;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference),await n.load(t),this.spatialReference=n.spatialReference}destroy(){var e,t;null==(e=this.effectiveSource)||e.destroy(),this.effectiveSource!==this.source&&(null==(t=this.source)||t.destroy())}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):d.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(t){return t?Array.isArray(t)?new U({elements:new e(t)}):t instanceof e?new U({elements:t}):t:null}readSource(e,t,s){if("itemId"in t&&t.itemId)return;const r=this._createSource(t);return null==r||r.read(t,s),r}writeSource(e,t,s,r){if(e&&e instanceof U){const t=e.elements.length;if(1!==t)return void((null==r?void 0:r.messages)&&r.messages.push(new R("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${t}.`)));e=e.elements.at(0)}L(e)?e.write(t,r):(null==r?void 0:r.messages)&&(e?r.messages.push(new R("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):r.messages.push(new R("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(I.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(I.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new C;case"video":return new H}return null}_getSourceOverride(e,t){if(b(e)&&this.originIdOf("source")===O.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===O.WEB_MAP||this.originIdOf("georeference")===O.WEB_SCENE)){const s=e.toJSON(),r=this._createSource(s);return r.read({...s},{origin:"portal-item"}),r.read({georeference:t},{origin:"web-map"}),r.read({georeference:t},{origin:"web-scene"}),r}return null}};f([y({readOnly:!0})],W.prototype,"effectiveSource",void 0),f([y({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],W.prototype,"georeference",void 0),f([M("web-document","georeference")],W.prototype,"readGeoreference",null),f([y({type:String})],W.prototype,"copyright",void 0),f([y({readOnly:!0})],W.prototype,"fullExtent",null),f([y({type:["MediaLayer"]})],W.prototype,"operationalLayerType",void 0),f([y({type:["show","hide"]})],W.prototype,"listMode",void 0),f([y({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:B}},overridePolicy(e,t,s){return{enabled:!0,allowNull:!1,ignoreOrigin:z(this,null==s?void 0:s.origin)&&L(e)&&!!e.georeference&&e.originIdOf("georeference")>O.PORTAL_ITEM}}}}})],W.prototype,"source",null),f([A("source")],W.prototype,"castSource",null),f([M("source",["url"])],W.prototype,"readSource",null),f([j("source")],W.prototype,"writeSource",null),f([y()],W.prototype,"spatialReference",void 0),f([y({readOnly:!0})],W.prototype,"type",void 0),W=f([g("esri.layers.MediaLayer")],W);const K=W;export{K as default};
