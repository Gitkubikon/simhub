import{P as c,p as u,u as y,R as m,V as d,g as h,C as g,d as f,e as i,y as o,a as b}from"./index-Cev3ONi_.js";import{c as w,y as I,C as _,T as v,j as C,S,w as O}from"./Stop-Dafnth6H.js";import{l as V}from"./LayerView3D-D8tjuEgh.js";import{O as G}from"./GraphicsProcessor-8QTXNYS4.js";import{l as $}from"./projectExtentUtils-DGBfUoRy.js";import{h as P}from"./EventedSet-DOv2uz4q.js";import{y as E}from"./LayerView-v6HjppTF.js";import"./Graphics3DObjectStates-C8EeJhFr.js";import"./optimizedFeatureQueryEngineAdapter-BOvi_XGM.js";import"./PooledRBush-BWMWnZYT.js";import"./quickselect-CJbyIEGj.js";function H(e){return e instanceof w||e instanceof I||e instanceof _||e instanceof v||e instanceof C||e instanceof S||e instanceof O}let s=class extends V(E){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new P,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new G({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this._updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),c),this.addResolvingPromise($(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.addHandles(u(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var e;this._updatingHandles.removeAll(),this._set("processor",y(this.processor)),(e=this._get("_routeItems"))==null||e.destroy()}get _routeItems(){return new m({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,this.layer.routeInfo!=null?new d([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const r=this._byObjectID.get(t);return this._byObjectID.delete(t),r}));for(const t of e.removed)this.removeHandles(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const r=t.toGraphic();return this._byObjectID.set(t,r),r}));for(const t of e.added)this.addHandles([h(()=>t.geometry,(r,n)=>{this._updateGraphic(t,"geometry",r,n)}),h(()=>t.symbol,(r,n)=>{this._updateGraphic(t,"symbol",r,n)})],t)}}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}get visibleAtCurrentScale(){var e;return!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}getSuspendInfo(){var t;const e=super.getSuspendInfo();return e.outsideOfView=((t=this.processor)==null?void 0:t.frustumVisibilitySuspended)??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var r;return(r=this.processor)==null?void 0:r.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new d(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return H(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||g.SYNC}isUpdating(){var e,t,r;return!(!((e=this.processor)!=null&&e.updating)&&((r=(t=this.view)==null?void 0:t.basemapTerrain)!=null&&r.ready))}get performanceInfo(){var e,t;return new f(((e=this.processor)==null?void 0:e.graphicsCore.usedMemory)??0,this.loadedGraphics.length,-1,-1,0,((t=this.processor)==null?void 0:t.graphicsCore.performanceInfo)??null)}_updateGraphic(e,t,r,n){var p;const l=this._byObjectID.get(e);l[t]=r,a.graphic=l,a.property=t,a.oldValue=n,a.newValue=r,(p=this.processor)==null||p.graphicsCore.graphicUpdateHandler(a)}};i([o()],s.prototype,"_routeItems",null),i([o()],s.prototype,"loadedGraphics",void 0),i([o({readOnly:!0})],s.prototype,"legendEnabled",null),i([o({readOnly:!0})],s.prototype,"visibleAtCurrentScale",null),i([o()],s.prototype,"layer",void 0),i([o({readOnly:!0})],s.prototype,"processor",void 0),i([o({type:Boolean})],s.prototype,"slicePlaneEnabled",void 0),s=i([b("esri.views.3d.layers.RouteLayerView3D")],s);const a={graphic:null,property:null,oldValue:null,newValue:null},k=s;export{k as default};
