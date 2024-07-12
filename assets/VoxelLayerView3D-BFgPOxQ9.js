import{b as m,G as W,B as T,g as l,P as A,D as r,E as V,d as E,r as x,F as L,H as M,I,K as D,L as P,N as F,O as $,n as w,e as b,y as p,a as C,Q as g}from"./index-Cev3ONi_.js";import{l as R}from"./LayerView3D-D8tjuEgh.js";import{i as U}from"./PopupSceneLayerView-B6EfDrBz.js";import{y as H}from"./LayerView-v6HjppTF.js";var i;(function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"})(i||(i={}));const h=g(),S=g();let d=class extends U(R(H)){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){var e;return((e=this.layer.parsedUrl)==null?void 0:e.path)??""}get wasmLayerId(){return this._wasmLayerId}initialize(){var u;if(this._dbgFlags.add(i.Error),this.view.viewingMode!=="local")throw new m("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(!((u=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)!=null&&u.textureFloat))throw new m("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!W(e,this.view.spatialReference))throw new m("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,a=this.layer.getVolume(s),o=this.layer.getVariable(s);if(a!=null&&o!=null){const c=a.dimensions[0],t=a.dimensions[1],y=a.zDimension;if(y>1){const v=a.dimensions[y],f=c.size*t.size*v.size;let _=1;switch(o.renderingFormat.type){case"Int16":case"UInt16":_=2;break;case"Int32":case"UInt32":case"Float32":_=4}this._futureMemory=_*f}}const n=T(this).then(c=>{this._wasmLayerId=c,this._suspendedHandle=l(()=>this.suspended,t=>{const y=r(this.view);y&&y.setEnabled(this,!t)},A),this.addHandles([l(()=>this.layer.renderMode,t=>this._pushRenderModeToWasm(t)),l(()=>this.layer.currentVariableId,t=>this._pushCurrentVariableIdToWasm(t)),l(()=>this.layer.getSections(),t=>this._pushSectionsToWasm(t)),l(()=>this.layer.getVariableStyles(),t=>this._pushVariableStylesToWasm(t)),l(()=>this.layer.getVolumeStyles(),t=>this._pushVolumeStylesToWasm(t)),l(()=>this.layer.enableDynamicSections,t=>this._pushEnableDynamicSectionsToWasm(t)),l(()=>this.layer.enableIsosurfaces,t=>this._pushEnableIsosurfacesToWasm(t)),l(()=>this.layer.enableSections,t=>this._pushEnableSectionsToWasm(t)),l(()=>this.layer.enableSlices,t=>this._pushEnableSlicesToWasm(t)),l(()=>[this.layer.timeOffset,this.layer.timeExtent,this.layer.useViewTime],()=>this._updateLayerTimeProperties()),l(()=>this.slicePlaneEnabled,t=>this._pushAnalysisSliceToWasm(t,this.view.slicePlane)),l(()=>this.view.slicePlane,t=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,t))])}).catch(c=>{if(V(this),this._wasmLayerId=-1,c===-1)throw new m("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(c===-2)throw new m("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(n)}destroy(){V(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=r(this.view);return!(this._wasmLayerId<0||e==null)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return new E(this.usedMemory)}get visibleAtCurrentScale(){return x(this.layer.effectiveScaleRange,this.view.terrainScale)}whenGraphicBounds(e,s){const a=e.attributes["Voxel.WorldPosition"];if(a){const o=L(),n=JSON.parse(a);if(M(n,this.view.renderSpatialReference,S,this.view.spatialReference||I.WGS84))return D(o,S),Promise.resolve({boundingBox:o,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=r(this.view);e==null||e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=r(this.view);e==null||e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){const e=r(this.view);return(e==null?void 0:e.getLayerTimes(this))??[]}getCurrentLayerTimeIndex(){const e=r(this.view);return(e==null?void 0:e.getCurrentLayerTimeIndex(this))??0}_pushRenderModeToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setRenderMode(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setStaticSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setCurrentVariable(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setVariableStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,s){const a=s??this.layer.enableSlices;for(let o=0;o<e.length;++o){const n=e[o];for(const u of n.slices)u.enabled=u.enabled&&a}}_pushVolumeStylesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s&&(this._accountForEnableSlices(e,null),s.setVolumeStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const a=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(a?"have WASM":"don't have WASM!!!"));let o=!1;if(a){if(s){const n=s.origin;P(h,s.basis1,s.basis2),F(h,h),o=a.setAnalysisSlice(this,e,n,h)}else $(h,0,0,1),o=a.setAnalysisSlice(this,!1,h,h);o||this._dbg(i.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_updateLayerTimeProperties(){const e=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._updateLayerTimeProperties() called, "+(e?"have WASM":"don't have WASM!!!")),e&&e.updateLayerTimeProperties(this)}_pushEnableDynamicSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableDynamicSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const s=r(this.view);if(this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s){const a=this.layer.getVolumeStyles();this._accountForEnableSlices(a,e),s.setVolumeStyles(this,a)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableIsosurfaces(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const s=r(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s!=null&&s.setEnableSections(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===i.Error?w.getLogger(this).error(s):w.getLogger(this).warn(s))}};b([p()],d.prototype,"layer",void 0),b([p()],d.prototype,"baseUrl",null),b([p({type:Boolean})],d.prototype,"slicePlaneEnabled",void 0),b([p({readOnly:!0})],d.prototype,"visibleAtCurrentScale",null),d=b([C("esri.views.3d.layers.VoxelLayerView3D")],d);const j=d;export{j as default};
