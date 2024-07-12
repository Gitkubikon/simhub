import{g4 as e,g2 as t,eq as r,fZ as i,kN as o,V as n,g as a,kO as s,jR as l,a0 as d,bJ as p,e as u,y,gw as h,iN as c,a as m,cz as g,Z as f,iG as v,iH as b,iJ as w,bn as F,gm as O,jo as j,iL as I,iM as _,iK as T,g7 as S,jj as E,jk as C,iO as P,iP as q,iQ as Q,iR as U,be as D,aj as N,jm as Z,jv as k,jw as A,iE as G,gp as z,g3 as J,en as K,eo as H,ep as $,gc as W,gd as X,er as Y,b as ee,i2 as te,ej as re,bF as ie,jB as oe,a2 as ne,kP as ae,jK as se,gu as le,bZ as de,ez as pe,eO as ue,g6 as ye,jb as he,iU as ce}from"./index-DSIPxOWi.js";import{T as me}from"./utils-1_4Re7um.js";import ge from"./FeatureLayerSource-CSPBNDDE.js";import{b as fe}from"./fetchService-CJQ8-6Ub.js";import"./ClassBreaksDefinition-Dt1HCCB7.js";import"./External-Djr0rIk9.js";import"./infoFor3D-BTCPmnmy.js";import"./MeshTransform-Y0ppddED.js";import"./editingSupport-BNx5CWnq.js";import"./normalizeUtils-BrH-PrZy.js";import"./normalizeUtilsCommon-BU8xfl77.js";import"./clientSideDefaults-Cn_svm8L.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./QueryTask-D61WShEy.js";import"./executeForIds-vkxYbvNq.js";import"./query-C2USZ63O.js";import"./pbfQueryUtils-DUjEbwA9.js";import"./pbf-B53Txr8m.js";import"./executeQueryJSON-DDi8KdIf.js";import"./executeQueryPBF-71YCUWAF.js";let ve=class extends(e(t(r(f)))){constructor(e){super(e),this._layerCache=new i(20,(e=>e.destroy())),this._oidToReference=new o,this._layerToReference=new Map,this.layers=new n,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",(({item:e})=>{e.parent=this})),this.layers.on("after-remove",(({item:e})=>{e.parent=null})),a((()=>this._orderBy),(()=>{this._updateLayerSortValues(),this._sortAllLayers()}))])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){var e;return this.parent?(null==(e=this.parent.orderBy)?void 0:e.find((e=>!e.valueExpression&&e.field)))??new s({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const t=this.parent.fieldsIndex.get(e.field),r=me(null==t?void 0:t.toJSON().type,"descending"===e.order),i=me("esriFieldTypeOID","descending"===e.order);return(e,t)=>r(t.sortValue,e.sortValue)||i(t.objectId,e.objectId)}get fullExtent(){var e;return(null==(e=this.parent)?void 0:e.fullExtent)??null}get updating(){return l(this._oidToReference,(e=>null!=e.pending))}acquireLayer(e){if(this.destroyed)return d();const t=this._getLayerReference(e);return t.count++,d((()=>{t.count--,t.count||this._destroyLayerReference(t)}))}_getLayerReference(e){const t=e.getObjectId();return p(this._oidToReference,t,(()=>{const t=e.getObjectId(),r=`${t}`,i=e.getAttribute(this.parent.itemSourceField),o=new L(e,t,i),n=this._layerCache.pop(r);return n?(this._addLayer(o,n),o):(o.pending=this.parent.createLayerFromFootprint(e).then((e=>{o.count?this._addLayer(o,e):(this.destroyed||this._layerCache.get(r)||this._layerCache.put(r,e),o.layer=null)})).catch((()=>{})).finally((()=>{o.pending=null})),o)}))}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put(`${e.objectId}`,e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,t){e.layer=t,t.persistenceEnabled=!1,this._layerToReference.set(t,e),this._updateLayerSortValue(e),this.layers.add(t),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort(((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t))))}};u([y()],ve.prototype,"_orderBy",null),u([y({readOnly:!0})],ve.prototype,"_referenceComparator",null),u([y({type:["show","hide","hide-children"],json:{write:!0}})],ve.prototype,"listMode",void 0),u([y({readOnly:!0})],ve.prototype,"fullExtent",null),u([y({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],ve.prototype,"id",void 0),u([y({readOnly:!0})],ve.prototype,"layers",void 0),u([y({type:h,range:{min:0,max:50},json:{write:!0,default:10}})],ve.prototype,"maximumVisibleSublayers",void 0),u([y(c)],ve.prototype,"opacity",void 0),u([y({clonable:!1})],ve.prototype,"parent",void 0),u([y({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],ve.prototype,"title",void 0),u([y({json:{read:!1}})],ve.prototype,"type",void 0),u([y({readOnly:!0})],ve.prototype,"updating",null),u([y({type:Boolean,json:{name:"visibility",write:!0}})],ve.prototype,"visible",void 0),ve=u([m("esri.layers.catalog.CatalogDynamicGroupLayer")],ve);const be=ve;class L{constructor(e,t,r){this.footprint=e,this.objectId=t,this.itemSource=r,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=g(null)}get pending(){return this._pending.value}set pending(e){this._pending.value=e}}let we=class extends(e(v(t(r(f))))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),b(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",(e=>this.emit("apply-edits",e))),this.parent.on("edits",(e=>this.emit("edits",e))),this.parent.on("refresh",(e=>this.emit("refresh",e)))])}get apiKey(){var e;return null==(e=this.parent)?void 0:e.apiKey}get capabilities(){var e;return null==(e=this.parent)?void 0:e.capabilities}get customParameters(){var e;return null==(e=this.parent)?void 0:e.customParameters}get dateFieldsTimeZone(){var e;return(null==(e=this.parent)?void 0:e.dateFieldsTimeZone)??null}get datesInUnknownTimezone(){var e;return(null==(e=this.parent)?void 0:e.datesInUnknownTimezone)??!1}get definitionExpression(){var e;return null==(e=this.parent)?void 0:e.definitionExpression}get editingInfo(){var e;return null==(e=this.parent)?void 0:e.editingInfo}get effectiveCapabilities(){var e;return null==(e=this.parent)?void 0:e.effectiveCapabilities}get createQueryVersion(){var e;return null==(e=this.parent)?void 0:e.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){var e;return null==(e=this.parent)?void 0:e.displayField}get effectiveEditingEnabled(){return!1}get fields(){var e;return null==(e=this.parent)?void 0:e.fields}get fieldsIndex(){var e;return null==(e=this.parent)?void 0:e.fieldsIndex}get fullExtent(){var e;return null==(e=this.parent)?void 0:e.fullExtent}get geometryFieldsInfo(){var e;return null==(e=this.parent)?void 0:e.geometryFieldsInfo}get geometryType(){var e;return null==(e=this.parent)?void 0:e.geometryType}get globalIdField(){var e;return null==(e=this.parent)?void 0:e.globalIdField}get hasM(){var e;return(null==(e=this.parent)?void 0:e.hasM)??!1}get hasZ(){var e;return(null==(e=this.parent)?void 0:e.hasZ)??!1}get objectIdField(){var e;return null==(e=this.parent)?void 0:e.objectIdField}get orderBy(){var e;return(null==(e=this.parent)?void 0:e.orderBy)??null}get outFields(){var e;return null==(e=this.parent)?void 0:e.outFields}get parsedUrl(){var e;return(null==(e=this.parent)?void 0:e.parsedUrl)??null}get preferredTimeZone(){var e;return(null==(e=this.parent)?void 0:e.preferredTimeZone)??null}set renderer(e){b(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):function x(){const e=new N({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new Z({symbol:e})}()}get returnM(){var e;return null==(e=this.parent)?void 0:e.returnM}get returnZ(){var e;return null==(e=this.parent)?void 0:e.returnZ}get source(){var e;return null==(e=this.parent)?void 0:e.source}get timeExtent(){var e;return null==(e=this.parent)?void 0:e.timeExtent}get timeInfo(){var e;return null==(e=this.parent)?void 0:e.timeInfo}get timeOffset(){var e;return null==(e=this.parent)?void 0:e.timeOffset}get typeIdField(){var e;return null==(e=this.parent)?void 0:e.typeIdField}get types(){var e;return null==(e=this.parent)?void 0:e.types}get useViewTime(){var e;return(null==(e=this.parent)?void 0:e.useViewTime)??!0}get version(){var e;return null==(e=this.parent)?void 0:e.version}async applyEdits(e,t){return await this.load(),this.parent.applyEdits(e,t)}createPopupTemplate(e){const t={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return w(t,e)}createQuery(){var e;return null==(e=this.parent)?void 0:e.createQuery()}getField(e){var t;return null==(t=this.parent)?void 0:t.getField(e)}getFieldDomain(e,t){var r;return null==(r=this.parent)?void 0:r.getFieldDomain(e,t)}async queryExtent(e,t){return await this.load(),this.parent.queryExtent(e,t)}async queryFeatures(e,t){return await this.load(),this.parent.queryFeatures(e,t)}async queryFeatureCount(e,t){return await this.load(),this.parent.queryFeatureCount(e,t)}async queryObjectIds(e,t){return await this.load(),this.parent.queryObjectIds(e,t)}};u([y({readOnly:!0})],we.prototype,"apiKey",null),u([y({readOnly:!0})],we.prototype,"capabilities",null),u([y({readOnly:!0})],we.prototype,"customParameters",null),u([y()],we.prototype,"dateFieldsTimeZone",null),u([y({readOnly:!0})],we.prototype,"datesInUnknownTimezone",null),u([y({readOnly:!0})],we.prototype,"definitionExpression",null),u([y({readOnly:!0})],we.prototype,"editingInfo",null),u([y({readOnly:!0})],we.prototype,"effectiveCapabilities",null),u([y({json:{origins:{"web-scene":{write:!1}},write:!0}})],we.prototype,"charts",void 0),u([y({readOnly:!0})],we.prototype,"createQueryVersion",null),u([y({readOnly:!0})],we.prototype,"defaultPopupTemplate",null),u([y()],we.prototype,"displayField",null),u([y({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],we.prototype,"editingEnabled",void 0),u([y({readOnly:!0})],we.prototype,"effectiveEditingEnabled",null),u([y((()=>{const e=F(O);return e.json.origins["web-map"]={read:!1,write:!1},e})())],we.prototype,"elevationInfo",void 0),u([y({readOnly:!0})],we.prototype,"fields",null),u([y({readOnly:!0})],we.prototype,"fieldsIndex",null),u([y({type:j,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],we.prototype,"formTemplate",void 0),u([y({readOnly:!0})],we.prototype,"fullExtent",null),u([y({readOnly:!0})],we.prototype,"geometryFieldsInfo",null),u([y({readOnly:!0})],we.prototype,"geometryType",null),u([y({readOnly:!0})],we.prototype,"globalIdField",null),u([y({readOnly:!0})],we.prototype,"hasM",null),u([y({readOnly:!0})],we.prototype,"hasZ",null),u([y({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],we.prototype,"id",void 0),u([y({type:[I],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:_,write:!0}})],we.prototype,"labelingInfo",void 0),u([y(T)],we.prototype,"labelsVisible",void 0),u([y(S)],we.prototype,"legendEnabled",void 0),u([y({type:["show","hide"],json:{write:!0}})],we.prototype,"listMode",void 0),u([y((()=>{const e=F(E);return e.json.origins.service.read=!1,e})())],we.prototype,"maxScale",void 0),u([y((()=>{const e=F(C);return e.json.origins.service.read=!1,e})())],we.prototype,"minScale",void 0),u([y({readOnly:!0})],we.prototype,"objectIdField",null),u([y(c)],we.prototype,"opacity",void 0),u([y({readOnly:!0})],we.prototype,"orderBy",null),u([y({readOnly:!0})],we.prototype,"outFields",null),u([y({clonable:!1})],we.prototype,"parent",void 0),u([y({readOnly:!0})],we.prototype,"parsedUrl",null),u([y(P)],we.prototype,"popupEnabled",void 0),u([y({type:q,json:{name:"popupInfo",write:!0}})],we.prototype,"popupTemplate",void 0),u([y({readOnly:!0})],we.prototype,"preferredTimeZone",null),u([y({types:Q,json:{origins:{"web-scene":{types:U}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,t){return{ignoreOrigin:this.originIdOf(t)<D.PORTAL_ITEM}}}}})],we.prototype,"renderer",null),u([y({readOnly:!0})],we.prototype,"returnM",null),u([y({readOnly:!0})],we.prototype,"returnZ",null),u([y({readOnly:!0})],we.prototype,"source",null),u([y({readOnly:!0})],we.prototype,"timeExtent",null),u([y({readOnly:!0})],we.prototype,"timeInfo",null),u([y({readOnly:!0})],we.prototype,"timeOffset",null),u([y({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],we.prototype,"title",void 0),u([y({json:{read:!1}})],we.prototype,"type",void 0),u([y({readOnly:!0})],we.prototype,"typeIdField",null),u([y({readOnly:!0})],we.prototype,"types",null),u([y({readOnly:!0})],we.prototype,"useViewTime",null),u([y({type:Boolean,json:{name:"visibility",write:!0}})],we.prototype,"visible",void 0),we=u([m("esri.layers.catalog.CatalogFootprintLayer")],we);const Fe=we,Oe=ce();function V(e,t,r,i){const o=e.write({},i);(function B(e){if(null==e)return!0;const t=Object.keys(e);return!t.length||1===t.length&&"id"===t[0]})(o)||(t[r]=o)}let je=class extends(k(A(t(G(z(e(J(K(H($(r(W(X(f)))))))))))))){constructor(e){super(e),this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new be({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new Fe({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new n([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new ge({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Y).then((async()=>{const{url:e,source:r,portalItem:i}=this;if(!e)throw new ee("catalog-layer:missing-url","Catalog layer must be created with a url");if(null==this.layerId){const r=await this._fetchFirstValidLayerId(t);if(null==r)throw new ee("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:e});this.layerId=r}await r.load({signal:t});const{sourceJSON:o}=r;o&&(this.sourceJSON=o,this.read(o,{origin:"service",portalItem:i,portal:null==i?void 0:i.portal,url:this.parsedUrl}))})).then((()=>{const e=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],t=e.filter((e=>!this.fieldsIndex.has(e)));if(t.length)throw new ee("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:e,missingFields:t})})).then((()=>te(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=re(this.url);return null!=e&&null!=this.layerId&&(e.path=ie(e.path,this.layerId.toString())),e}async applyEdits(e,t){return oe(this,e,t)}on(e,t){return super.on(e,t)}async createLayerFromFootprint(e){const t=await this._createLayer(e);return this._configureLayer(t,e),this._layerToFootprint.set(t,e),t}createFootprintFromLayer(e){var t;return null==(t=this._layerToFootprint.get(e))?void 0:t.clone()}createQuery(){var e;const t=new ne,r=null==(e=this.capabilities)?void 0:e.query;t.returnGeometry=!0,r&&(t.compactGeometryEnabled=r.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),t.outFields=["*"];const{timeOffset:i,timeExtent:o}=this;return t.timeExtent=null!=i&&null!=o?o.offset(-i.value,i.unit):o||null,t.where=this.definitionExpression||"1=1",t}getFeatureType(e){return ae(this.types,this.typeIdField,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r;const i=null==t?void 0:t.feature,o=this.getFeatureType(i);if(o){const t=o.domains&&o.domains[e];if(t&&"inherited"!==t.type)return t}return null==(r=this.getField(e))?void 0:r.domain}async hasDataChanged(){return se(this)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(ne.from(e)??r.createQuery(),t);if(null==i?void 0:i.features)for(const o of i.features)o.layer=o.sourceLayer=r.footprintLayer;return i}async queryObjectIds(e,t){return(await this.load()).source.queryObjectIds(ne.from(e)??this.createQuery(),t)}async queryFeatureCount(e,t){return(await this.load()).source.queryFeatureCount(ne.from(e)??this.createQuery(),t)}async queryExtent(e,t){return(await this.load()).source.queryExtent(ne.from(e)??this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&le(this,e)}read(e,t){if(super.read(e,t),e){const{footprintLayer:r,dynamicGroupLayer:i}=e;r&&this.footprintLayer.read(r,t),i&&this.dynamicGroupLayer.read(i,t)}}async _fetchFirstValidLayerId(e){var t;const{data:r}=await de(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(Array.isArray(null==r?void 0:r.layers))return null==(t=r.layers.find((({type:e})=>this.supportedSourceTypes.has(e))))?void 0:t.id}async _createLayer(e){const t=e.getAttribute(this.itemSourceField);if(!t)throw new ee("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const r=JSON.parse(t);if(function M(e){return"object"==typeof e&&null!=e&&"itemId"in e&&"portalUrl"in e}(r)){const{itemId:e,portalUrl:t}=r,i=p(this._portals,t,(()=>new pe({url:t})));return f.fromPortalItem(new ue({id:e,portal:i}))}return function R(e){return"object"==typeof e&&null!=e&&"url"in e}(r)?f.fromArcGISServerUrl({url:r.url}):new(await fe.UnsupportedLayer())}_configureLayer(e,t){const r=t.getAttribute(this.itemNameField);r&&(e.title=r);const i=t.getAttribute(this.maxScaleField);null!=i&&"maxScale"in e&&(e.maxScale=i);const o=t.getAttribute(this.minScaleField);null!=o&&"minScale"in e&&(e.minScale=o)}};u([y({readOnly:!0})],je.prototype,"createQueryVersion",null),u([y({readOnly:!0})],je.prototype,"drawOrderField",void 0),u([y({type:be,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:V}}})],je.prototype,"dynamicGroupLayer",void 0),u([y({readOnly:!0})],je.prototype,"editingEnabled",null),u([y({readOnly:!0})],je.prototype,"effectiveEditingEnabled",null),u([y({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],je.prototype,"elevationInfo",void 0),u([y({...Oe.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],je.prototype,"fields",void 0),u([y(Oe.fieldsIndex)],je.prototype,"fieldsIndex",void 0),u([y({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],je.prototype,"floorInfo",void 0),u([y({type:Fe,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:V}}})],je.prototype,"footprintLayer",void 0),u([y(ye)],je.prototype,"id",void 0),u([y({readOnly:!0})],je.prototype,"itemNameField",void 0),u([y({readOnly:!0})],je.prototype,"itemSourceField",void 0),u([y({readOnly:!0})],je.prototype,"itemTypeField",void 0),u([y({readOnly:!0})],je.prototype,"layers",void 0),u([y({type:["show","hide","hide-children"]})],je.prototype,"listMode",void 0),u([y({readOnly:!0})],je.prototype,"maxScaleField",void 0),u([y({readOnly:!0})],je.prototype,"minScaleField",void 0),u([y({value:"CatalogLayer",type:["CatalogLayer"]})],je.prototype,"operationalLayerType",void 0),u([y({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],je.prototype,"orderBy",void 0),u([y(Oe.outFields)],je.prototype,"outFields",void 0),u([y({readOnly:!0})],je.prototype,"parsedUrl",null),u([y({readOnly:!0})],je.prototype,"source",void 0),u([y({json:{read:!1}})],je.prototype,"type",void 0),u([y({type:String})],je.prototype,"typeIdField",void 0),u([y({type:[he]})],je.prototype,"types",void 0),je=u([m("esri.layers.CatalogLayer")],je);const Ie=je;export{Ie as default};