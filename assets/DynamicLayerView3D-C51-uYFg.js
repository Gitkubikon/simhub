import{he as e,hf as t,hg as a,hh as i,hi as r,hj as n,ea as h,dW as d,eb as c,T as g,C as m,h5 as p,W as f,n as w,r as y,a0 as x,gA as _,cG as v,az as R,hk as E,hl as S,z as b,hm as A,c as I,b9 as M,hn as D,b3 as P,ho as C,hp as L,hq as O,hr as T,hs as G,dP as j,ht as H,ae as N,e as V,y as z,a as U}from"./index-DSIPxOWi.js";import{l as W}from"./LayerView3D-ApO6iJqK.js";import{l as q}from"./projectExtentUtils-KG39_WUt.js";import{g as F}from"./ImageMaterial.glsl-V3C9c4TG.js";import{y as k}from"./LayerView-DMoB2q_T.js";import{i as B}from"./RefreshableLayerView-MYyyoaX8.js";function l(e,t){return a(e,[[t[0],t[1],-1],[t[2],t[1],-1],[t[2],t[3],-1],[t[0],t[3],-1]])}const Y=[0,0,1];let Z=class extends(B(W(k))){constructor(){super(...arguments),this.drapeSourceType=g.RasterImage,this.updatePolicy=m.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=p((async e=>{this.destroyed||await this._doRefresh(e).catch((e=>{f(e)||w.getLogger(this).error(e)}))}),2e3)}get visibleAtCurrentScale(){const e=this.layer,t="effectiveScaleRange"in e?e.effectiveScaleRange:null;return y(t,this.view.terrainScale)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(x((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)))),this.addResolvingPromise(q(this).then((e=>this._set("fullExtentInLocalViewSpatialReference",e)))),this._updatingHandles.add((()=>this.suspended),(()=>this._suspendedChangeHandler()))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(((e,t)=>{this._overlays[t]=e,this._updateImageExtent(e,t)}))}_updateImageExtent(a,i){const r=this._clippedExtent(a.extent,K);if(null==r)return;const n=function u(a,i,r){const n=e(a)/t(a),h={width:r,height:r};return n>1.0001?h.height=r/n:n<.9999&&(h.width=r*n),h.width=Math.round(h.width/(e(a)/e(i))),h.height=Math.round(h.height/(t(a)/t(i))),h}(a.extent,r,a.resolution);let h=a.pixelRatio*this.view.state.pixelRatio;const{layer:d}=this;if("imageMaxWidth"in d&&null!=d.imageMaxWidth||"imageMaxHeight"in d&&null!=d.imageMaxHeight){const e=d.imageMaxWidth,t=d.imageMaxHeight;if(n.width>e){const t=e/n.width;n.height=Math.floor(n.height*t),n.width=e,h*=t}if(n.height>t){const e=t/n.height;n.width=Math.floor(n.width*e),n.height=t,h*=e}}const c=this._extents[i];c&&_(c.extent,r)&&this._imageSizeEquals(r,c.imageSize,n)||(this._extents[i]={extent:v(r),imageSize:n,pixelRatio:h},this.suspended||this._fetch(i).catch((e=>{f(e)||w.getLogger(this).error(e)})))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let a=0;a<this._extents.length;a++)this._extents[a]&&t.push(this._fetch(a,e));await Promise.allSettled(t)}async processResult(e,t,a){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const a=t.extent;if(new R(a[0],a[1],a[2],a[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await E(this._images,(async(a,i)=>{a&&(await e(a,t),await this._createStageObjects(i,a.image,t))}))}_imageSizeEquals(a,i,r){if(!this.maximumDataResolution)return!1;const n=e(a)/this.maximumDataResolution.x,h=t(a)/this.maximumDataResolution.y,d=n/i.width,c=h/i.height,g=n/r.width,m=h/r.height,p=Math.abs(d-g),f=Math.abs(c-m),w=S.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return p<=w&&f<=w}async _fetch(e,t){if(this.suspended)return;const a=this._extents[e],i=a.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:v(i)});const r=this._images[e];r.loadingAbortController=b(r.loadingAbortController);const n=new R(i[0],i[1],i[2],i[3],this._spatialReference);if(0===n.width||0===n.height)return void this._clearImage(e);const h=new AbortController;r.loadingAbortController=h,A(t,(()=>h.abort()));const d=h.signal,c=this._waitFetchReady(d).then((async()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:d},{height:i,width:r}=a.imageSize;return this.layer.fetchImage(n,r,i,t)})).then((e=>{if(I(d))throw w.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),M();return this.processResult(r,e)})).then((()=>{D(r.renderExtent,i)}));r.loadingPromise=c,await this._updatingHandles.addPromise(c.then((async()=>{P(d),await this._createStageObjects(e,r.image,d)})).catch((e=>{throw e&&!f(e)&&w.getLogger(this).error(e),e})).finally((()=>{c===r.loadingPromise&&(r.loadingPromise=null,r.loadingAbortController=null)})))}_clearImage(e){const t=this._images[e];if(t){null!=t.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],C.UPDATE),t.renderGeometry=null);const e=this.view._stage,a=t.texture;null==a||a.unload(),e.remove(a),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController=b(t.loadingAbortController),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,a){const g=this.view._stage,m=this._images[e],o=()=>{var e;null==(e=m.texture)||e.unload(),g.remove(m.texture),m.texture=null,m.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([m.renderGeometry],C.UPDATE),m.renderGeometry=null)};if(t){const p=new L(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:O.CLAMP_TO_EDGE,t:O.CLAMP_TO_EDGE}});let f;if(await T(this._images[e===G.INNER?G.OUTER:G.INNER].loadingPromise),P(a),o(),await g.schedule((()=>p.load(g.renderView.renderingContext)),a),g.add(p),m.texture=p,null==m.material?(m.material=new F({transparent:!0,textureId:p.id}),g.add(m.material)):m.material.setParameters({textureId:p.id}),e===G.INNER)f=l(m.material,m.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void o();f=function s(e,t,a){if(!i(t,a))return l(e,a);const g=[t[1]-a[1],Math.min(t[3],a[3])-Math.max(t[1],a[1]),a[3]-t[3],123456],m=[t[0]-a[0],Math.min(t[2],a[2])-Math.max(t[0],a[0]),a[2]-t[2],123456],p=a[2]-a[0],f=a[3]-a[1],w=m[0]>0&&m[2]>0?3:2,y=g[0]>0&&g[2]>0?3:2,x=(y+1)*(w+1),_=r(3*x),v=n(2*x),R=new Array(6*(y*w-1));let E=0,S=0,b=0,A=0,I=0;for(let i=0;i<4;i++){const e=g[i];if(e<=0)continue;let t=0;for(let r=0;r<4;r++){const e=m[r];e<=0||(_[S++]=a[0]+t,_[S++]=a[1]+E,_[S++]=-1,v[b++]=t/p,v[b++]=E/f,r<3&&i<3&&(1!==r||1!==i)&&(R[I++]=A,R[I++]=A+1,R[I++]=A+w+1,R[I++]=A+1,R[I++]=A+w+2,R[I++]=A+w+1),A++,t+=e)}E+=e}const M=new Array(R.length);return new h(e,[[d.POSITION,new c(_,R,3,!0)],[d.NORMAL,new c(Y,M,3,!0)],[d.UV0,new c(v,R,2,!0)]])}(m.material,e,m.renderExtent)}m.renderGeometry=new j(f),m.renderGeometry.localOrigin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([m.renderGeometry],C.UPDATE)}else o(),g.remove(m.material),m.material=null}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return D(t,e);const a=this.view.basemapTerrain;return a.ready?H(e,a.extent,t):D(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await N((()=>this.view.stationary),e),P(e)}};V([z()],Z.prototype,"layer",void 0),V([z()],Z.prototype,"suspended",void 0),V([z({readOnly:!0})],Z.prototype,"fullExtentInLocalViewSpatialReference",void 0),V([z({readOnly:!0})],Z.prototype,"visibleAtCurrentScale",null),V([z()],Z.prototype,"updating",void 0),Z=V([U("esri.views.3d.layers.DynamicLayerView3D")],Z);const J=Z,K=v();export{J as N};