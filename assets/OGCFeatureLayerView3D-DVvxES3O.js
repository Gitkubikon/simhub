import{e as r,y as i,a as o,b as m}from"./index-DG8rgzil.js";import{g as s}from"./FeatureLayerViewBase3D-DXK0yH8d.js";import"./HeatmapDensity.glsl-eDorYgCv.js";import"./timeSupport-C6kq6rEU.js";import"./projectExtentUtils-C-eyILV_.js";import"./dehydratedFeatureComparison-DoWLi4t3.js";import"./queryForSymbologySnapping-Niccynzo.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-Dl3OH_4D.js";import"./optimizedFeatureQueryEngineAdapter-D9ukKZRT.js";import"./PooledRBush-Bh7SFMib.js";import"./quickselect-w420t06w.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-B-dKzNP9.js";import"./normalizeUtils-DoV9c-Nw.js";import"./normalizeUtilsCommon-bFMbMQEd.js";import"./WhereClause-gjmL9wSi.js";import"./TimeOnly-DExJUlxo.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-CcHiI_wO.js";import"./utils-B0rHtJ26.js";import"./utils-BDVWQGJp.js";import"./ClassBreaksDefinition-QpXaaUHc.js";import"./FeatureStore-CfblHXmG.js";import"./BoundsStore-Cuf3CxTg.js";import"./LayerView3D-BhKs0pln.js";import"./query-CiZMCrOi.js";import"./pbfQueryUtils-ChgcqwJz.js";import"./pbf-B68fSJAd.js";import"./WorkerHandle-DwPfsL7_.js";import"./EventedSet-Csle5i9z.js";import"./LayerView-NFstoUIF.js";import"./RefreshableLayerView-BqUw9bH0.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(s){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new m("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const K=t;export{K as default};