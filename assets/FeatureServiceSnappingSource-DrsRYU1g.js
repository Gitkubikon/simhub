const __vite__fileDeps=["assets/WhereClause-DYd7Xwn9.js","assets/TimeOnly-C5lZbbIX.js","assets/index-DSIPxOWi.js","assets/index-B_7YxLDX.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{mQ as e,nQ as t,nR as i,O as n,Q as s,e as a,y as l,a as o,S as d,nS as h,g as f,i as v,hY as w,P as _,nT as m,a0 as S,j as I,ef as b,h as H,h5 as O,z as k,ec as T,gQ as F,cD as C,fQ as P,lK as E,gE as M,aw as j,gF as x,nU as z,b3 as R,gP as V,h6 as N,bd as U,lc as A,A as $,nV as D,x as W,_ as L}from"./index-DSIPxOWi.js";import{t as J}from"./memoize-Dzy0sPL8.js";import{v as q}from"./SnappingManagerPool-BslN_FM5.js";import{o as Q,i as Z}from"./queryEngineUtils-Dj40YZwO.js";import{d as G}from"./TileTreeDebugger-CDFY3SV7.js";import{h as B}from"./WorkerHandle-Bq2affGI.js";import"./geodesicLengthMeasurementUtils-Pq-FipkN.js";import"./geometryEngine-Bp1TD6MM.js";import"./geometryEngineBase-9EI9fooq.js";import"./hydrated-DE1HcVsK.js";import"./geometry2dUtils-4c9qUvJ6.js";import"./floorFilterUtils-2NbRkqHK.js";import"./keybindings-DkkJsHdp.js";import"./VertexSnappingCandidate-D8VJ-XhT.js";import"./PointSnappingHint-Ct-FTQTL.js";function a$2(e,s){return t(s.extent,K),i(K,n(Y,e.x,e.y,0))}const K=e(),Y=s();let X=class p extends d{get tiles(){const e=this.tilesCoveringView,t=null!=this.pointOfInterest?this.pointOfInterest:this.view.center;return e.sort(((e,i)=>a$2(t,e)-a$2(t,i))),e}_scaleEnabled(){return h(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||null==this.tileInfo)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,n=[];for(const{row:s,colFrom:a,colTo:l}of e)for(let e=a;e<=l;e++){const a=t.normalizeCol(e),l=new w(null,i,s,a);this.tileInfo.updateTileInfo(l),n.push(l)}return n}get tileInfo(){var e;return(null==(e=this.view.featuresTilingScheme)?void 0:e.tileInfo)??null}get tileSize(){return null!=this.tileInfo?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(f((()=>{var e,t;return null==(t=null==(e=this.view)?void 0:e.state)?void 0:t.viewpoint}),(()=>this.notifyChange("tilesCoveringView")),v))}};a([l({readOnly:!0})],X.prototype,"tiles",null),a([l({readOnly:!0})],X.prototype,"_scaleEnabled",null),a([l({readOnly:!0})],X.prototype,"tilesCoveringView",null),a([l({readOnly:!0})],X.prototype,"tileInfo",null),a([l({readOnly:!0})],X.prototype,"tileSize",null),a([l({constructOnly:!0})],X.prototype,"view",void 0),a([l({constructOnly:!0})],X.prototype,"layer",void 0),a([l()],X.prototype,"pointOfInterest",void 0),X=a([o("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],X);let ee=class extends d{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(null!=t){const i=e.map((e=>a$2(t,e)));for(let n=1;n<i.length;n++)if(i[n-1]>i[n])return e.sort(((e,i)=>a$2(t,e)-a$2(t,i))),e.slice()}return e}get tilesCoveringView(){var e,t;return this._filterTiles(null==(t=null==(e=this.view.featureTiles)?void 0:e.tiles)?void 0:t.toArray()).map(u)}get tileInfo(){var e,t;return(null==(t=null==(e=this.view.featureTiles)?void 0:e.tilingScheme)?void 0:t.toTileInfo())??null}get tileSize(){var e;return(null==(e=this.view.featureTiles)?void 0:e.tileSize)??256}get _effectivePointOfInterest(){var e;const t=this.pointOfInterest;return null!=t?t:null==(e=this.view.pointsOfInterest)?void 0:e.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(f((()=>this.view.featureTiles),(e=>{this.removeHandles(ie),e&&this.addHandles(e.addClient(),ie)}),_))}_filterTiles(e){return null==e?[]:e.filter((e=>{const t=e.measures;if(t.visibility===m.VISIBLE_ON_SURFACE){const e=t.screenRect;return Math.abs(e[3]-e[1])>te}return!1}))}};function u({lij:[e,t,i],extent:n}){return new w(`${e}/${t}/${i}`,e,t,i,n)}a([l({readOnly:!0})],ee.prototype,"tiles",null),a([l({readOnly:!0})],ee.prototype,"tilesCoveringView",null),a([l({readOnly:!0})],ee.prototype,"tileInfo",null),a([l({readOnly:!0})],ee.prototype,"tileSize",null),a([l({constructOnly:!0})],ee.prototype,"view",void 0),a([l()],ee.prototype,"pointOfInterest",void 0),a([l()],ee.prototype,"_effectivePointOfInterest",null),ee=a([o("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],ee);const te=50,ie="feature-tiles";let ne=class extends G{constructor(e){super(e)}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.addHandles(S((()=>clearInterval(e))))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)}));const r=i=>{const n=t.get(i),s=e.get(i)??"?";return n?`${n}:${s}\n${i}`:`store:${s}\n${i}`},i=new Map;return this._debugInfo.storedTiles.forEach((e=>{i.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{i.set(e.data.id,e.data)})),Array.from(i.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:I.fromExtent(b(e.extent,this.view.spatialReference)),label:r(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};a([l({constructOnly:!0})],ne.prototype,"handle",void 0),ne=a([o("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],ne);let se=class extends d{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new H,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:i}of e.pointsInFeatures)for(const{z:e}of i)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=O((async(e,t)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...e],t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}))}destroy(){this._suspendController=k(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new g(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",(({updating:e})=>this._workerHandleUpdating=e)),this._workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){var i;const n=function y(e){var t,i;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:(null==(t=e.parsedUrl)?void 0:t.path)??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:P.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null==(i=e.timeInfo)?void 0:i.toJSON()}}(e.layer);if(null==n)return;const s={configuration:c(e.configuration),serviceInfo:n,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:null==(i=e.layer.elevationInfo)?void 0:i.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",s,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=c(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:n,coordinateHelper:s}=e,a={...e,point:T(i[0],i[1],i[2],s.spatialReference.toJSON()),filter:null==n?void 0:n.toJSON()};return this._workerHandle.invoke(a,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:null!=e.tileInfo?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var i,n,s;const a=this._editId++,l={id:a};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",l,t));const o=await this._updatingHandles.addPromise(F(e.result,t)),d={id:a,edits:{addedFeatures:(null==(i=o.addedFeatures)?void 0:i.map((({objectId:e})=>e)).filter(C))??[],deletedFeatures:(null==(n=o.deletedFeatures)?void 0:n.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t}))))??[],updatedFeatures:(null==(s=o.updatedFeatures)?void 0:s.map((({objectId:e})=>e)).filter(C))??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",d,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){var t;null==(t=this._suspendController)||t.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function c(e){return{filter:null!=e.filter?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}a([l({constructOnly:!0})],se.prototype,"schedule",void 0),a([l({constructOnly:!0})],se.prototype,"hasZ",void 0),a([l({constructOnly:!0})],se.prototype,"elevationAlignPointsInFeatures",void 0),a([l({constructOnly:!0})],se.prototype,"queryForSymbologySnapping",void 0),a([l({readOnly:!0})],se.prototype,"updating",null),a([l({readOnly:!0})],se.prototype,"availability",void 0),a([l()],se.prototype,"_workerHandleUpdating",void 0),se=a([o("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],se);class g extends B{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}let re=class extends d{get tiles(){return[new w("0/0/0",0,0,0,E(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new M({origin:new j({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new x({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};a([l({readOnly:!0})],re.prototype,"tiles",null),a([l({readOnly:!0})],re.prototype,"tileInfo",null),a([l({readOnly:!0})],re.prototype,"tileSize",null),a([l({constructOnly:!0})],re.prototype,"layer",void 0),a([l()],re.prototype,"pointOfInterest",void 0),re=a([o("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],re);let ae=class extends d{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){var e;return null==(e=this.view)?void 0:e.allLayerViews.find((e=>e.layer===this._layer))}get _isSuspended(){var e;return!(!z(this._layer)||this.layerSource.sublayerSources.some((e=>e.enabled&&e.layer.visible)))||!(!this.view||!1===(null==(e=this._layerView)?void 0:e.suspended)&&this.layerSource.enabled)}get updating(){var e;return(null==(e=this._workerHandle)?void 0:e.updating)||this._updatingHandles.updating}get _outFields(){var e,t,i,n,s,a,l,o;const{view:d,_layerView:h,layerSource:f}=this,{layer:v}=f,{fieldsIndex:w,timeInfo:_,floorInfo:m,subtypeField:S}=v,I=h&&"filter"in h?h.filter:null,b=(null==I?void 0:I.where)&&"1=1"!==I.where?this._getOrLoadWhereFields(I.where,w):[];if((null==I?void 0:I.timeExtent)&&_){const{startField:i,endField:n}=_,s=(null==(e=w.get(i))?void 0:e.name)??i,a=(null==(t=w.get(n))?void 0:t.name)??n;s&&b.push(s),a&&b.push(a)}if((null==d?void 0:d.map)&&q(d.map)&&(null==(i=d.map.utilityNetworks)?void 0:i.find((e=>e.isUtilityLayer(v))))){const e=null==(n=v.fieldsIndex.get("assetGroup"))?void 0:n.name,t=null==(s=v.fieldsIndex.get("assetType"))?void 0:s.name;e&&t&&(b.push(e),b.push(t))}if(v&&(null==m?void 0:m.floorField)&&(null==(a=null==d?void 0:d.floors)?void 0:a.length)){const e=(null==(l=w.get(m.floorField))?void 0:l.name)??m.floorField;e&&b.push(e)}if(S){const e=(null==(o=w.get(S))?void 0:o.name)??S;e&&b.push(e)}return new Set(b)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:i}=this._layer,n=null!=e?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:t?{...i,token:t}:i,viewType:n}}get availability(){var e;return(null==(e=this._workerHandle)?void 0:e.availability)??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new H,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=J(Z)}initialize(){let e;const t=this.view;if(null==t||t.destroyed)this._tilesOfInterest=new re({layer:this._layer}),e=this._workerHandle=new se;else switch(t.type){case"2d":this._tilesOfInterest=new X({view:t,layer:this._layer}),e=this._workerHandle=new se;break;case"3d":{const{resourceController:i}=t,n=this._layer;this._tilesOfInterest=new ee({view:t}),e=this._workerHandle=new se({schedule:e=>i.immediate.schedule(e),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(e,i)=>{const s=await t.whenLayerView(n);return R(i),s.elevationAlignPointsInFeatures(e,i)},queryForSymbologySnapping:async(e,i)=>{const s=await t.whenLayerView(n);return R(i),s.queryForSymbologySnapping(e,i)}}),this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{const{elevationInfo:i}=n;V(t,i)&&N(e.notifyElevationSourceChange())})),f((()=>n.elevationInfo),(()=>N(e.notifyElevationSourceChange())),_),f((()=>{var e,t;return null==(t=null==(e=this._layerView)?void 0:e.layer)?void 0:t.renderer}),(()=>N(e.notifySymbologyChange())),_),f((()=>{var e;return(null==(e=this._layerView)?void 0:e.symbologySnappingSupported)??!1}),(t=>N(e.setSymbologySnappingSupported(t))),_),U((()=>{var e;return null==(e=this._layerView)?void 0:e.layer}),["edits","apply-edits","graphic-update"],(()=>e.notifySymbologyChange()))]);break}}this.addHandles([A(e)]),N(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add((()=>this._updateTilesParameters),(()=>N(e.updateTiles(this._updateTilesParameters,null))),_),this.addHandles([f((()=>this.configuration),(t=>N(e.configure(t,null))),v),f((()=>this._outFields),(t=>N(e.updateOutFields(t))),_),f((()=>this._isSuspended),(t=>N(e.setSuspended(t))),$)]),null!=t&&this.addHandles(f((()=>D.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(i=>{i&&!this._debug?(this._debug=new ne({view:t,handle:e}),this.addHandles(A(this._debug),"debug")):!i&&this._debug&&this.removeHandles("debug")}),_)),this.addHandles(this.layerSource.layer.on("apply-edits",(t=>{N(e.applyEdits(t,null))})))}destroy(){this._updatingHandles.destroy()}refresh(){var e;null==(e=this._workerHandle)||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:n}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(n);const s=this._memoizedMakeGetGroundElevation(this.view,i.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>Q(e,s)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:i}=this;if(!this._loadWhereModuleTask&&!i){const e=W((async()=>{const e=await L((()=>import("./WhereClause-DYd7Xwn9.js").then((e=>e.W))),__vite__mapDeps([0,1,2,3]));return this._whereModule=e.WhereClause,this._whereModule}));return this._loadWhereModuleTask=e,this._updatingHandles.addPromise(e.promise),[]}if(!i)return[];try{return i.create(e,t).fieldNames}catch(n){return[]}}};a([l({constructOnly:!0})],ae.prototype,"spatialReference",void 0),a([l({constructOnly:!0})],ae.prototype,"layerSource",void 0),a([l({constructOnly:!0})],ae.prototype,"view",void 0),a([l()],ae.prototype,"_tilesOfInterest",void 0),a([l({readOnly:!0})],ae.prototype,"_updateTilesParameters",null),a([l()],ae.prototype,"_layerView",null),a([l()],ae.prototype,"_isSuspended",null),a([l({readOnly:!0})],ae.prototype,"updating",null),a([l()],ae.prototype,"_outFields",null),a([l({readOnly:!0})],ae.prototype,"configuration",null),a([l({readOnly:!0})],ae.prototype,"availability",null),a([l()],ae.prototype,"_loadWhereModuleTask",void 0),a([l()],ae.prototype,"_whereModule",void 0),ae=a([o("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],ae);export{ae as FeatureServiceSnappingSource};
