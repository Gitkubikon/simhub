import{e,y as t,a,b as i,af as r,b3 as s,a2 as n,aw as o,h5 as l,p as d}from"./index-DSIPxOWi.js";import{N as u}from"./DynamicLayerView3D-C51-uYFg.js";import{i as h}from"./timeSupport-CU-EQyfu.js";import"./LayerView3D-ApO6iJqK.js";import"./projectExtentUtils-KG39_WUt.js";import"./ImageMaterial.glsl-V3C9c4TG.js";import"./LayerView-DMoB2q_T.js";import"./RefreshableLayerView-MYyyoaX8.js";const m=l=>{let d=class extends l{constructor(){super(...arguments),this.view=null}get timeExtent(){var e;return h(this.layer,null==(e=this.view)?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,t){const{layer:a}=this;if(!e)throw new i("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:l}=a,d=r(a,t);if(!l||null==d)return[];const u=await d.getRequiredFields();s(t);const h=new n;h.timeExtent=this.timeExtent,h.geometry=e,h.outFields=u,h.outSpatialReference=e.spatialReference;const{resolution:p,spatialReference:c}=this.view,w="2d"===this.view.type?new o(p,p,c):new o(.5*p,.5*p,c),{returnTopmostRaster:y,showNoDataRecords:g}=d.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},v={returnDomainValues:!0,returnTopmostRaster:y,pixelSize:w,showNoDataRecords:g,signal:null==t?void 0:t.signal};return a.queryVisibleRasters(h,v).then((e=>e))}canResume(){var e;return!!super.canResume()&&!(null==(e=this.timeExtent)?void 0:e.isEmpty)}};return e([t()],d.prototype,"layer",void 0),e([t()],d.prototype,"suspended",void 0),e([t({readOnly:!0})],d.prototype,"timeExtent",null),e([t()],d.prototype,"view",void 0),d=e([a("esri.views.layers.ImageryLayerView")],d),d};let p=class extends(m(u)){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=l((async e=>{this.redraw(((e,t)=>this._redrawImage(e,t)),e)}),2e3)}initialize(){this.addHandles([d((()=>this.view.basemapTerrain.ready),(()=>this._initializeMaximumDataResolution()),{once:!0,initial:!0}),this.layer.on("redraw",(()=>this._updatingHandles.addPromise(this.redrawDebounced())))]),this._updatingHandles.add((()=>{var e,t;return null==(t=null==(e=this.layer)?void 0:e.exportImageServiceParameters)?void 0:t.version}),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())})),this._updatingHandles.add((()=>{var e;return null==(e=this.layer)?void 0:e.renderer}),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())})),this._updatingHandles.add((()=>this.timeExtent),(()=>this._updatingHandles.addPromise(this.refreshDebounced())))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||null==e.pixelData)throw new Error;const a=e.image,i=a.getContext("2d"),r=await this.layer.applyRenderer(e.pixelData,{signal:t}),s=this.layer.applyFilter(r).pixelBlock;if(null==s)throw new Error;a.width=s.width,a.height=s.height;const n=i.createImageData(s.width,s.height);n.data.set(s.getAsRGBA()),i.putImageData(n,0,0)}};p=e([a("esri.views.3d.layers.ImageryLayerView3D")],p);const c=p;export{c as default};
