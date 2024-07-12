import{p as e,u as r,b as s,C as i,d as t,e as o,y as n,a}from"./index-DSIPxOWi.js";import{l}from"./LayerView3D-ApO6iJqK.js";import{m as p,r as d}from"./queryForSymbologySnapping-CEKgwdf_.js";import{O as c}from"./GraphicsProcessor-B-W2SKph.js";import{l as h}from"./projectExtentUtils-KG39_WUt.js";import{y as u}from"./LayerView-DMoB2q_T.js";import"./Graphics3DObjectStates-B77mD6jz.js";import"./optimizedFeatureQueryEngineAdapter--U1rvwBV.js";import"./PooledRBush-DOZnXWx2.js";import"./quickselect-D9ta8ndX.js";let y=class extends(l(u)){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new c({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.addResolvingPromise(h(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.layer.internal?this.notifyChange("updating"):this.addHandles(e((()=>{var e,r;return null==(r=null==(e=this.view)?void 0:e.basemapTerrain)?void 0:r.ready}),(()=>()=>this.notifyChange("updating")),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",r(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!(null==(e=this.processor)?void 0:e.frustumVisibilitySuspended)}get visibleAtCurrentScale(){var e;return!(null==(e=this.processor)?void 0:e.scaleVisibilitySuspended)}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){var e;const r=super.getSuspendInfo();return r.outsideOfView=(null==(e=this.processor)?void 0:e.frustumVisibilitySuspended)??!1,r}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,r){return this.processor.whenGraphicBounds(e,r)}computeAttachmentOrigin(e,r){var s;return null==(s=this.processor)?void 0:s.computeAttachmentOrigin(e,r)}getSymbolLayerSize(e,r){return this.processor.getSymbolLayerSize(e,r)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,r){const{processor:i}=this;if(null==(null==i?void 0:i.graphics3DGraphics))throw new s("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:t}=i;return p(this.view,this.layer,(e=>"number"==typeof e?t.get(e):void 0),e,r)}async queryForSymbologySnapping(e,r){return d(this.processor,e,r)}get updatePolicy(){var e;return(null==(e=this.processor)?void 0:e.graphicsCore.effectiveUpdatePolicy)||i.SYNC}isUpdating(){var e,r;return this.view&&this.layer&&!(!(null==(e=this.processor)?void 0:e.updating)&&(this.layer.internal||(null==(r=this.view.basemapTerrain)?void 0:r.ready)))}get performanceInfo(){return new t(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){var e,r;return(null==(r=null==(e=this.processor)?void 0:e.graphicsCore)?void 0:r.usedMemory)??0}get unloadedMemory(){var e,r;return null==(r=null==(e=this.processor)?void 0:e.graphicsCore)?void 0:r.unprocessedMemoryEstimate}get test(){return{graphics3DProcessor:this.processor,loadedGraphics:this.loadedGraphics}}};o([n()],y.prototype,"loadedGraphics",null),o([n({readOnly:!0})],y.prototype,"legendEnabled",null),o([n()],y.prototype,"layer",void 0),o([n({readOnly:!0})],y.prototype,"processor",void 0),o([n({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),o([n()],y.prototype,"_slicePlaneEnabled",void 0),o([n({type:Boolean})],y.prototype,"slicePlaneEnabled",null),y=o([a("esri.views.3d.layers.GraphicsLayerView3D")],y);const g=y;export{g as default};