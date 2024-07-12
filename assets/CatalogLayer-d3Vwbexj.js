import{g4 as v,g2 as b,eq as w,fZ as $,kN as R,V as T,g as V,kO as C,jR as P,a0 as O,bJ as S,e as r,y as i,gw as q,iN as L,a as F,cz as B,Z as c,iG as M,iH as I,iJ as N,bn as g,gm as U,jo as Z,iL as Q,iM as A,iK as D,g7 as k,jj as G,jk as z,iO as J,iP as K,iQ as H,iR as W,be as X,aj as Y,jm as ee,jv as te,jw as re,iE as ie,gp as oe,g3 as ne,en as se,eo as ae,ep as le,gc as pe,gd as de,er as ye,b as m,i2 as ue,ej as he,bF as ce,jB as me,a2 as h,kP as ge,jK as fe,gu as ve,bZ as be,ez as we,eO as Fe,g6 as Oe,jb as Ie,iU as _e}from"./index-DG8rgzil.js";import{T as _}from"./utils-BDVWQGJp.js";import je from"./FeatureLayerSource-PpxQBibj.js";import{b as Te}from"./fetchService-DZLVx0jC.js";import"./ClassBreaksDefinition-QpXaaUHc.js";import"./External-pRp0UK9q.js";import"./infoFor3D-DsOdlPuA.js";import"./MeshTransform-Bu7nKMFA.js";import"./editingSupport-w96eFCTE.js";import"./normalizeUtils-DoV9c-Nw.js";import"./normalizeUtilsCommon-bFMbMQEd.js";import"./clientSideDefaults-xp5yDqN3.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./QueryTask-C5eiw5JG.js";import"./executeForIds-BXpOIJdM.js";import"./query-CiZMCrOi.js";import"./pbfQueryUtils-ChgcqwJz.js";import"./pbf-B68fSJAd.js";import"./executeQueryJSON-BPLFlG0P.js";import"./executeQueryPBF-D8VosYsh.js";let d=class extends v(b(w(c))){constructor(e){super(e),this._layerCache=new $(20,t=>t.destroy()),this._oidToReference=new R,this._layerToReference=new Map,this.layers=new T,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",({item:e})=>{e.parent=this}),this.layers.on("after-remove",({item:e})=>{e.parent=null}),V(()=>this._orderBy,()=>{this._updateLayerSortValues(),this._sortAllLayers()})])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){var e;return this.parent?((e=this.parent.orderBy)==null?void 0:e.find(t=>!t.valueExpression&&t.field))??new C({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const t=this.parent.fieldsIndex.get(e.field),s=_(t==null?void 0:t.toJSON().type,e.order==="descending"),n=_("esriFieldTypeOID",e.order==="descending");return(l,p)=>s(p.sortValue,l.sortValue)||n(p.objectId,l.objectId)}get fullExtent(){var e;return((e=this.parent)==null?void 0:e.fullExtent)??null}get updating(){return P(this._oidToReference,e=>e.pending!=null)}acquireLayer(e){if(this.destroyed)return O();const t=this._getLayerReference(e);return t.count++,O(()=>{t.count--,t.count||this._destroyLayerReference(t)})}_getLayerReference(e){const t=e.getObjectId();return S(this._oidToReference,t,()=>{const s=e.getObjectId(),n=`${s}`,l=e.getAttribute(this.parent.itemSourceField),p=new Se(e,s,l),y=this._layerCache.pop(n);return y?(this._addLayer(p,y),p):(p.pending=this.parent.createLayerFromFootprint(e).then(u=>{p.count?this._addLayer(p,u):(this.destroyed||this._layerCache.get(n)||this._layerCache.put(n,u),p.layer=null)}).catch(()=>{}).finally(()=>{p.pending=null}),p)})}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put(`${e.objectId}`,e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,t){e.layer=t,t.persistenceEnabled=!1,this._layerToReference.set(t,e),this._updateLayerSortValue(e),this.layers.add(t),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t)))}};r([i()],d.prototype,"_orderBy",null),r([i({readOnly:!0})],d.prototype,"_referenceComparator",null),r([i({type:["show","hide","hide-children"],json:{write:!0}})],d.prototype,"listMode",void 0),r([i({readOnly:!0})],d.prototype,"fullExtent",null),r([i({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0),r([i({readOnly:!0})],d.prototype,"layers",void 0),r([i({type:q,range:{min:0,max:50},json:{write:!0,default:10}})],d.prototype,"maximumVisibleSublayers",void 0),r([i(L)],d.prototype,"opacity",void 0),r([i({clonable:!1})],d.prototype,"parent",void 0),r([i({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"title",void 0),r([i({json:{read:!1}})],d.prototype,"type",void 0),r([i({readOnly:!0})],d.prototype,"updating",null),r([i({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0),d=r([F("esri.layers.catalog.CatalogDynamicGroupLayer")],d);const E=d;class Se{constructor(t,s,n){this.footprint=t,this.objectId=s,this.itemSource=n,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=B(null)}get pending(){return this._pending.value}set pending(t){this._pending.value=t}}function Le(){const e=new Y({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new ee({symbol:e})}let o=class extends v(M(b(w(c)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),I(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",t=>this.emit("apply-edits",t)),this.parent.on("edits",t=>this.emit("edits",t)),this.parent.on("refresh",t=>this.emit("refresh",t))])}get apiKey(){var e;return(e=this.parent)==null?void 0:e.apiKey}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get customParameters(){var e;return(e=this.parent)==null?void 0:e.customParameters}get dateFieldsTimeZone(){var e;return((e=this.parent)==null?void 0:e.dateFieldsTimeZone)??null}get datesInUnknownTimezone(){var e;return((e=this.parent)==null?void 0:e.datesInUnknownTimezone)??!1}get definitionExpression(){var e;return(e=this.parent)==null?void 0:e.definitionExpression}get editingInfo(){var e;return(e=this.parent)==null?void 0:e.editingInfo}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get createQueryVersion(){var e;return(e=this.parent)==null?void 0:e.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){var e;return(e=this.parent)==null?void 0:e.displayField}get effectiveEditingEnabled(){return!1}get fields(){var e;return(e=this.parent)==null?void 0:e.fields}get fieldsIndex(){var e;return(e=this.parent)==null?void 0:e.fieldsIndex}get fullExtent(){var e;return(e=this.parent)==null?void 0:e.fullExtent}get geometryFieldsInfo(){var e;return(e=this.parent)==null?void 0:e.geometryFieldsInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get globalIdField(){var e;return(e=this.parent)==null?void 0:e.globalIdField}get hasM(){var e;return((e=this.parent)==null?void 0:e.hasM)??!1}get hasZ(){var e;return((e=this.parent)==null?void 0:e.hasZ)??!1}get objectIdField(){var e;return(e=this.parent)==null?void 0:e.objectIdField}get orderBy(){var e;return((e=this.parent)==null?void 0:e.orderBy)??null}get outFields(){var e;return(e=this.parent)==null?void 0:e.outFields}get parsedUrl(){var e;return((e=this.parent)==null?void 0:e.parsedUrl)??null}get preferredTimeZone(){var e;return((e=this.parent)==null?void 0:e.preferredTimeZone)??null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):Le()}get returnM(){var e;return(e=this.parent)==null?void 0:e.returnM}get returnZ(){var e;return(e=this.parent)==null?void 0:e.returnZ}get source(){var e;return(e=this.parent)==null?void 0:e.source}get timeExtent(){var e;return(e=this.parent)==null?void 0:e.timeExtent}get timeInfo(){var e;return(e=this.parent)==null?void 0:e.timeInfo}get timeOffset(){var e;return(e=this.parent)==null?void 0:e.timeOffset}get typeIdField(){var e;return(e=this.parent)==null?void 0:e.typeIdField}get types(){var e;return(e=this.parent)==null?void 0:e.types}get useViewTime(){var e;return((e=this.parent)==null?void 0:e.useViewTime)??!0}get version(){var e;return(e=this.parent)==null?void 0:e.version}async applyEdits(e,t){return await this.load(),this.parent.applyEdits(e,t)}createPopupTemplate(e){const t={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return N(t,e)}createQuery(){var e;return(e=this.parent)==null?void 0:e.createQuery()}getField(e){var t;return(t=this.parent)==null?void 0:t.getField(e)}getFieldDomain(e,t){var s;return(s=this.parent)==null?void 0:s.getFieldDomain(e,t)}async queryExtent(e,t){return await this.load(),this.parent.queryExtent(e,t)}async queryFeatures(e,t){return await this.load(),this.parent.queryFeatures(e,t)}async queryFeatureCount(e,t){return await this.load(),this.parent.queryFeatureCount(e,t)}async queryObjectIds(e,t){return await this.load(),this.parent.queryObjectIds(e,t)}};r([i({readOnly:!0})],o.prototype,"apiKey",null),r([i({readOnly:!0})],o.prototype,"capabilities",null),r([i({readOnly:!0})],o.prototype,"customParameters",null),r([i()],o.prototype,"dateFieldsTimeZone",null),r([i({readOnly:!0})],o.prototype,"datesInUnknownTimezone",null),r([i({readOnly:!0})],o.prototype,"definitionExpression",null),r([i({readOnly:!0})],o.prototype,"editingInfo",null),r([i({readOnly:!0})],o.prototype,"effectiveCapabilities",null),r([i({json:{origins:{"web-scene":{write:!1}},write:!0}})],o.prototype,"charts",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i()],o.prototype,"displayField",null),r([i({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),r([i({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),r([i((()=>{const e=g(U);return e.json.origins["web-map"]={read:!1,write:!1},e})())],o.prototype,"elevationInfo",void 0),r([i({readOnly:!0})],o.prototype,"fields",null),r([i({readOnly:!0})],o.prototype,"fieldsIndex",null),r([i({type:Z,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"formTemplate",void 0),r([i({readOnly:!0})],o.prototype,"fullExtent",null),r([i({readOnly:!0})],o.prototype,"geometryFieldsInfo",null),r([i({readOnly:!0})],o.prototype,"geometryType",null),r([i({readOnly:!0})],o.prototype,"globalIdField",null),r([i({readOnly:!0})],o.prototype,"hasM",null),r([i({readOnly:!0})],o.prototype,"hasZ",null),r([i({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),r([i({type:[Q],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:A,write:!0}})],o.prototype,"labelingInfo",void 0),r([i(D)],o.prototype,"labelsVisible",void 0),r([i(k)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"],json:{write:!0}})],o.prototype,"listMode",void 0),r([i((()=>{const e=g(G);return e.json.origins.service.read=!1,e})())],o.prototype,"maxScale",void 0),r([i((()=>{const e=g(z);return e.json.origins.service.read=!1,e})())],o.prototype,"minScale",void 0),r([i({readOnly:!0})],o.prototype,"objectIdField",null),r([i(L)],o.prototype,"opacity",void 0),r([i({readOnly:!0})],o.prototype,"orderBy",null),r([i({readOnly:!0})],o.prototype,"outFields",null),r([i({clonable:!1})],o.prototype,"parent",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(J)],o.prototype,"popupEnabled",void 0),r([i({type:K,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0})],o.prototype,"preferredTimeZone",null),r([i({types:H,json:{origins:{"web-scene":{types:W}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,t){return{ignoreOrigin:this.originIdOf(t)<X.PORTAL_ITEM}}}}})],o.prototype,"renderer",null),r([i({readOnly:!0})],o.prototype,"returnM",null),r([i({readOnly:!0})],o.prototype,"returnZ",null),r([i({readOnly:!0})],o.prototype,"source",null),r([i({readOnly:!0})],o.prototype,"timeExtent",null),r([i({readOnly:!0})],o.prototype,"timeInfo",null),r([i({readOnly:!0})],o.prototype,"timeOffset",null),r([i({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"title",void 0),r([i({json:{read:!1}})],o.prototype,"type",void 0),r([i({readOnly:!0})],o.prototype,"typeIdField",null),r([i({readOnly:!0})],o.prototype,"types",null),r([i({readOnly:!0})],o.prototype,"useViewTime",null),r([i({type:Boolean,json:{name:"visibility",write:!0}})],o.prototype,"visible",void 0),o=r([F("esri.layers.catalog.CatalogFootprintLayer")],o);const x=o,f=_e();function Ee(e){return typeof e=="object"&&e!=null&&"itemId"in e&&"portalUrl"in e}function xe(e){return typeof e=="object"&&e!=null&&"url"in e}function $e(e){if(e==null)return!0;const t=Object.keys(e);return!t.length||t.length===1&&t[0]==="id"}function j(e,t,s,n){const l=e.write({},n);$e(l)||(t[s]=l)}let a=class extends te(re(b(ie(oe(v(ne(se(ae(le(w(pe(de(c))))))))))))){constructor(e){super(e),this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new E({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new x({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new T([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new je({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const t=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(ye).then(async()=>{const{url:n,source:l,portalItem:p}=this;if(!n)throw new m("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.layerId==null){const u=await this._fetchFirstValidLayerId(t);if(u==null)throw new m("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:n});this.layerId=u}await l.load({signal:t});const{sourceJSON:y}=l;y&&(this.sourceJSON=y,this.read(y,{origin:"service",portalItem:p,portal:p==null?void 0:p.portal,url:this.parsedUrl}))}).then(()=>{const n=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],l=n.filter(p=>!this.fieldsIndex.has(p));if(l.length)throw new m("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:n,missingFields:l})}).then(()=>ue(this,"load",e));return this.addResolvingPromise(s),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=he(this.url);return e!=null&&this.layerId!=null&&(e.path=ce(e.path,this.layerId.toString())),e}async applyEdits(e,t){return me(this,e,t)}on(e,t){return super.on(e,t)}async createLayerFromFootprint(e){const t=await this._createLayer(e);return this._configureLayer(t,e),this._layerToFootprint.set(t,e),t}createFootprintFromLayer(e){var t;return(t=this._layerToFootprint.get(e))==null?void 0:t.clone()}createQuery(){var l;const e=new h,t=(l=this.capabilities)==null?void 0:l.query;e.returnGeometry=!0,t&&(e.compactGeometryEnabled=t.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=t.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e.where=this.definitionExpression||"1=1",e}getFeatureType(e){return ge(this.types,this.typeIdField,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var l;const s=t==null?void 0:t.feature,n=this.getFeatureType(s);if(n){const p=n.domains&&n.domains[e];if(p&&p.type!=="inherited")return p}return(l=this.getField(e))==null?void 0:l.domain}async hasDataChanged(){return fe(this)}async queryFeatures(e,t){const s=await this.load(),n=await s.source.queryFeatures(h.from(e)??s.createQuery(),t);if(n!=null&&n.features)for(const l of n.features)l.layer=l.sourceLayer=s.footprintLayer;return n}async queryObjectIds(e,t){return(await this.load()).source.queryObjectIds(h.from(e)??this.createQuery(),t)}async queryFeatureCount(e,t){return(await this.load()).source.queryFeatureCount(h.from(e)??this.createQuery(),t)}async queryExtent(e,t){return(await this.load()).source.queryExtent(h.from(e)??this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&ve(this,e)}read(e,t){if(super.read(e,t),e){const{footprintLayer:s,dynamicGroupLayer:n}=e;s&&this.footprintLayer.read(s,t),n&&this.dynamicGroupLayer.read(n,t)}}async _fetchFirstValidLayerId(e){var s;const{data:t}=await be(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(Array.isArray(t==null?void 0:t.layers))return(s=t.layers.find(({type:n})=>this.supportedSourceTypes.has(n)))==null?void 0:s.id}async _createLayer(e){const t=e.getAttribute(this.itemSourceField);if(!t)throw new m("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const s=JSON.parse(t);if(Ee(s)){const{itemId:n,portalUrl:l}=s,p=S(this._portals,l,()=>new we({url:l}));return c.fromPortalItem(new Fe({id:n,portal:p}))}return xe(s)?c.fromArcGISServerUrl({url:s.url}):new(await Te.UnsupportedLayer())}_configureLayer(e,t){const s=t.getAttribute(this.itemNameField);s&&(e.title=s);const n=t.getAttribute(this.maxScaleField);n!=null&&"maxScale"in e&&(e.maxScale=n);const l=t.getAttribute(this.minScaleField);l!=null&&"minScale"in e&&(e.minScale=l)}};r([i({readOnly:!0})],a.prototype,"createQueryVersion",null),r([i({readOnly:!0})],a.prototype,"drawOrderField",void 0),r([i({type:E,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:j}}})],a.prototype,"dynamicGroupLayer",void 0),r([i({readOnly:!0})],a.prototype,"editingEnabled",null),r([i({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),r([i({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],a.prototype,"elevationInfo",void 0),r([i({...f.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],a.prototype,"fields",void 0),r([i(f.fieldsIndex)],a.prototype,"fieldsIndex",void 0),r([i({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],a.prototype,"floorInfo",void 0),r([i({type:x,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:j}}})],a.prototype,"footprintLayer",void 0),r([i(Oe)],a.prototype,"id",void 0),r([i({readOnly:!0})],a.prototype,"itemNameField",void 0),r([i({readOnly:!0})],a.prototype,"itemSourceField",void 0),r([i({readOnly:!0})],a.prototype,"itemTypeField",void 0),r([i({readOnly:!0})],a.prototype,"layers",void 0),r([i({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),r([i({readOnly:!0})],a.prototype,"maxScaleField",void 0),r([i({readOnly:!0})],a.prototype,"minScaleField",void 0),r([i({value:"CatalogLayer",type:["CatalogLayer"]})],a.prototype,"operationalLayerType",void 0),r([i({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],a.prototype,"orderBy",void 0),r([i(f.outFields)],a.prototype,"outFields",void 0),r([i({readOnly:!0})],a.prototype,"parsedUrl",null),r([i({readOnly:!0})],a.prototype,"source",void 0),r([i({json:{read:!1}})],a.prototype,"type",void 0),r([i({type:String})],a.prototype,"typeIdField",void 0),r([i({type:[Ie]})],a.prototype,"types",void 0),a=r([F("esri.layers.CatalogLayer")],a);const Xe=a;export{Xe as default};