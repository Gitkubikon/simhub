import{d as Re,ld as be,le as $,lf as A,hq as x,dG as Fe,dk as Ve,lg as De,kL as Le,v as je,lh as Be,q as ke,b as K,li as Ge,g as fe,P as Ne,lj as L,lk as ye,u as _e,gI as $e,iv as we,r as ze,kH as We,bo as qe,bK as Je,cf as Xe,ll as Ke,lm as Qe,cv as ve,ln as Ye,lo as Q,lp as Ze,lq as et,Q as Y,fD as tt,lr as st,m as it,ls as xe,lt as rt,jW as at,dD as nt,hB as ot,dW as j,lu as lt,H as ct,br as dt,lv as ht,lw as ut,lx as Ce,hp as mt,ly as pt,lz as gt,lA as bt,lB as Z,lC as ft,lD as yt,eb as B,lE as _t,lF as wt,lG as vt,lH as Te,lI as Me,n as Pe,e as S,y as k,a as xt,bV as Ee}from"./index-Cev3ONi_.js";import{x as Ct,f as Tt,t as Mt,i as Pt}from"./Transform-B60PDQxd.js";import{r as E,a as ee,S as G,N as U,e as p,m as Et,d as Ot,g as Oe,t as P,n as te,i as H}from"./ILyr3DWasmPerSceneView-vPx4somd.js";import{l as Ut}from"./LayerView3D-D8tjuEgh.js";import{s as At}from"./RenderTexture-Cf4onlnW.js";import{y as It}from"./LayerView-v6HjppTF.js";class St extends Re{constructor(e,d,a,c,o,r,h){super(e,0,0,0,d),this.nodesCached=a,this.vboMB=c,this.textureMB=o,this.vboMBCached=r,this.textureMBCached=h}}const Ht={[E.Points]:null,[E.Lines]:null,[E.LineStrip]:null,[E.Triangles]:be.TRIANGLES,[E.TriangleStrip]:be.TRIANGLE_STRIP,[E.NotSet]:null},Ue={[ee.Opaque]:$.Opaque,[ee.Mask]:$.Mask,[ee.Blend]:$.Blend},Rt={[G.Back]:A.Back,[G.Front]:A.Front,[G.None]:A.None,[G.NotSet]:A.Back},Ft={[U.WrapYBit]:{s:x.CLAMP_TO_EDGE,t:x.REPEAT},[U.WrapXBit]:{s:x.REPEAT,t:x.CLAMP_TO_EDGE},[U.WrapXy]:{s:x.REPEAT,t:x.REPEAT},[U.None]:{s:x.CLAMP_TO_EDGE,t:x.CLAMP_TO_EDGE},[U.NotSet]:{s:x.CLAMP_TO_EDGE,t:x.CLAMP_TO_EDGE}},Vt={[p.U8]:1,[p.I8]:1,[p.U16]:2,[p.I16]:2,[p.U32]:4,[p.I32]:4,[p.F32]:4,[p.F64]:8,[p.Utf8String]:1,[p.NotSet]:1};class Dt{constructor(e){this.layerUid=[],this.type=Fe.TILES3D,this.slicePlaneEnabled=!1,this.isGround=!0,this.layerView=e,this.layerUid.push(e.layer.uid)}intersect(e,d,a,c,o,r){const h=e.results,_=e.options.store===Ve.ALL;if(e.options.filteredLayerUids.includes(this.layerView.layer.uid))return;const w=this.layerView.view._stage.renderView.componentObjectCollection,g=new De(r??!1,e.options.normalRequired);this.layerView.objects.forEach(m=>{m.visible&&m.intersectionGeometry&&w.intersect(m,a,c,e.tolerance,null,g,(u,n,s,b)=>{if(n>=0){if(d!=null&&!d(a,c,n))return;const l=T=>{const C=new Be(this.layerView.layer.uid,()=>this._createTiles3DGraphic(this.layerView.layer,{}));T.set(this.type,C,n,s)};if(this.isGround&&(h.ground.dist==null||n<h.ground.dist)&&l(h.ground),e.options.isFiltered)return;if((h.min.dist==null||n<h.min.dist)&&l(h.min),(h.max.dist==null||n>h.max.dist)&&l(h.max),_){const T=Le(e.ray);l(T),e.results.all.push(T)}}})})}_createTiles3DGraphic(e,d){return new je({layer:e,sourceLayer:e,attributes:d})}}var f;(function(t){t[t.API=1]="API",t[t.VerboseAPI=2]="VerboseAPI",t[t.Error=3]="Error"})(f||(f={}));class Lt{constructor(){this.handle=0,this.isVisible=!1,this.components=[],this.texMemoryUsage=0,this.vboMemoryUsage=0,this.cpuMemoryUsage=0,this.textures=[]}totalMemory(){return this.texMemoryUsage+this.vboMemoryUsage+this.cpuMemoryUsage}}function N(t){return Math.round(t/1048.576)/1e3}let O=class extends Ut(It){constructor(){super(...arguments),this.type="integrated-mesh-3dtiles",this._visibleGeometryChangedSchedulerHandle=null,this._wasmLayerId=-1,this.ignoresMemoryFactor=!1,this.drapeTargetType=ke.WithoutRasterImage,this._lyrHandleToObjects=new Map,this._initialCullFace=new Map,this._suspendedHandle=null,this._dbgFlags=new Set}initialize(){if(this._dbgFlags.add(f.Error),this._dbg(f.VerboseAPI,"Tiles3DLayerView3D initialize() called"),!this._canProjectWithoutEngine())throw new K("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const t=Ge(this).then(e=>{this._intersectionHandler=new Dt(this),this.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler),this._updatingHandles.add(()=>this.slicePlaneEnabled,a=>this._slicePlaneEnabledChange(a)),this._elevationProvider=new Ct({view:this.view,layerElevationSource:this,intersectionHandler:this._intersectionHandler}),this.view.elevationProvider.register("im",this._elevationProvider),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this),this._wasmLayerId=e;const d=this.view.resourceController.memoryController.newCache(`t3d-${this.uid}`,a=>this._onRemoveFromCache(a));this._memCache=d,this.addHandles([fe(()=>this.layer.elevationInfo,a=>this._elevationInfoChanged(a))]),this._suspendedHandle=fe(()=>this.suspended,a=>{const c=L(this.view);c&&c.setEnabled(this,!a)},Ne)}).catch(e=>{if(ye(this),this._wasmLayerId=-1,e===Et)throw new K("tiles3d:addLayer-failure","The 3d tiles layer description was invalid.",{});if(e===Ot)throw new K("tiles3d:addLayer-failure","The 3d tiles layer web assembly module failed to download.",{})});this.addResolvingPromise(t)}destroy(){this._dbg(f.VerboseAPI,"Tiles3DLayerView3D destroy() called"),ye(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._intersectionHandler&&(this.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler),this._intersectionHandler=null),this._elevationProvider&&(this._elevationProvider.objectsChanged(this._obbs),this.view.elevationProvider.unregister(this._elevationProvider),this._elevationProvider=null),this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this),this._lyrHandleToObjects.forEach(t=>this.freeObject(t)),this._lyrHandleToObjects.clear(),this._initialCullFace.clear(),this._memCache=_e(this._memCache),this._updatingHandles=_e(this._updatingHandles),this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle.remove(),this._visibleGeometryChangedSchedulerHandle=null)}_visibleGeometryChanged(){this._visibleGeometryChangedSchedulerHandle==null&&(this._visibleGeometryChangedSchedulerHandle=$e(()=>{this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle=null}))}_slicePlaneEnabledChange(t){this._intersectionHandler&&(this._intersectionHandler.slicePlaneEnabled=t),this.objects.forEach(e=>{const d=this._collection.getMaterial(e);d.commonMaterialParameters.hasSlicePlane=t,d.commonMaterialParameters.cullFace=t?A.None:this._initialCullFace.get(e)})}_elevationInfoChanged(t){const e=L(this.view);e&&e.setLayerOffset(this,we(t))}get _obbs(){return this.objects.map(t=>this._collection.getComponentObb(t))}get wasmLayerId(){return this._wasmLayerId}get usedMemory(){let t=0;return this._lyrHandleToObjects.forEach(e=>{e.isVisible&&(t+=e.totalMemory())}),t}get unloadedMemory(){let t=0;return this._lyrHandleToObjects.forEach(e=>{e.isVisible||(t+=e.totalMemory())}),t}get visibleAtCurrentScale(){return ze(this.layer.effectiveScaleRange,this.view.terrainScale)}get performanceInfo(){let t=0,e=0,d=0,a=0,c=0,o=0;return this._lyrHandleToObjects.forEach(r=>{r.isVisible?(t+=r.texMemoryUsage,e+=r.vboMemoryUsage,c++):(d+=r.texMemoryUsage,a+=r.vboMemoryUsage,o++)}),new St(this.usedMemory,c,o,N(e),N(t),N(a),N(d))}_canProjectWithoutEngine(){var t,e;if(this.view.state.viewingMode===We.Local){const d=(t=this.view.renderSpatialReference)!=null&&t.isWebMercator?3857:((e=this.view.renderSpatialReference)==null?void 0:e.wkid)??-1;if(d!==3857&&d!==32662)return!1}return!0}get _stage(){return this.view._stage}get _collection(){return this._stage.renderView.componentObjectCollection}get elevationOffset(){return we(this.layer.elevationInfo)}get elevationRange(){const t=this.fullExtent;return t!=null&&t.zmin&&(t!=null&&t.zmax)?new qe(t.zmin,t.zmax):null}getElevationRange(t){return null}get fullExtent(){return this.layer.fullExtent}get objects(){return Array.from(this._lyrHandleToObjects.values()).reduce((t,e)=>t.concat(e.components),new Array)}isUpdating(){const t=L(this.view);return!(this._wasmLayerId<0||t==null)&&t.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}async createRenderable(t){var n;const e=t.meshData;if(e.data==null)throw new Error("meshData.data undefined");if(e.desc=JSON.parse(e.desc),e.desc==null)throw new Error("meshData.desc undefined");const d=Je(e.desc.origin),a=new Array,c=new Map,o=new Lt;o.handle=t.handle,this._lyrHandleToObjects.set(t.handle,o);const r=this.view.basemapTerrain.spatialReference;let h,_;if(this.view.viewingMode==="global"){const s=Ee();Xe(Ke,d,s,r),h=Qe(ve(),s),_=Ye(ve(),h)}else h=Q,_=Q;const w=Ee();Ze(w,w,d);const g=et(Y(),w);let m=null;const u=Y();if(e.desc.obb){const s=e.desc.obb.quaternion;m=new tt(e.desc.obb.center,e.desc.obb.halfSize,st(s[0],s[1],s[2],s[3]))}for(let s=0;s<e.desc.prims.length;s++){const b=e.desc.prims[s];if(this._dbg(f.VerboseAPI,JSON.stringify(b)),b.ptype===E.Lines)continue;if(Ht[b.ptype]==null||e.data==null){this._dbg(f.VerboseAPI,"[Unsupported Feature] Unsupported primitive mode ("+b.ptype+"). Skipping primitive.");continue}const l=(n=e.desc)!=null&&n.materials&&b.materialId!=null?e.desc.materials[b.materialId]:null,T=l!=null?l.lightingModel:Oe.Unlit,C=!it("disable-feature:im-shading"),{positionView:y,positionAttr:M,normalsView:Ae,normalsAttr:z,colorAttr:R,texCoord0Attr:F,indicesView:I}=this.getBufferViews(b,e.data.buffer,h,C);if(M==null||y==null||I==null)continue;const se={colors:R!=null,textureCoordinates:F!=null?xe.Default:xe.None,hasNormals:Ae!=null,needsNormals:C},Ie=M.data.length/M.size,W=(i,v)=>!i||i.data.length/i.size===Ie||(this._dbg(f.Error,`${v} !== numPos. Skipping primitive.`),!1);if(!W(F,"numTexcoord")||!W(R,"numColors")||!W(z,"normals"))continue;const ie=rt(se);if(m!=null?m=m.clone():(m=at(M),nt(u,m.center,d),m.center=u),h!==Q)for(let i=0;i<y.count;i++)y.getVec(i,u),ot(u,u,h),y.setVec(i,u);const q=ie.createBuffer(M.data.length),V=new Map([[j.POSITION,M]]);F!=null&&V.set(j.UV0,F),R!=null&&V.set(j.COLOR,R),z!=null&&V.set(j.NORMALCOMPRESSED,z),V.forEach((i,v)=>{i!=null&&lt(v,i,null,null,q,0)});const Se=new Uint32Array([0,I.typedBuffer.length]),He={vertices:{data:q.buffer,count:q.byteLength/ie.stride,layoutParameters:se},positionData:{positions:y.typedBuffer,indices:I.typedBuffer},indices:I.typedBuffer,componentOffsets:Se};o.cpuMemoryUsage+=y.count,o.cpuMemoryUsage+=I.count;const re=this.view.renderSpatialReference,J=Y(),X=[1,1,1];Tt(g,re,X,r)||this._dbg(f.Error,"Unsupported coordinate system for IM overlay"),ct(g,re,J,r);const D=this._collection.createObject(new Mt(dt(J[0],J[1],X[0],X[1]),new Pt(g,_),m,He));l&&this._collection.updateMaterial(D,i=>{i.baseColor=l.baseColorFactor,i.usePBR=T===Oe.Pbr,i.hasParametersFromSource=!1,i.baseColorTexture=this._getTexture(l.baseColorTex,e,c),i.usePBR&&(i.mrrFactors=[l.metallicFactor,l.roughnessFactor,0],i.emissiveFactor=l.emissiveFactor??[0,0,0],i.metallicRoughnessTexture=this._getTexture(l.metalTex,e,c),i.emissionTexture=this._getTexture(l.emissiveTex,e,c),i.occlusionTexture=this._getTexture(l.occlusionTex,e,c),i.normalTexture=this._getTexture(l.normalTex,e,c)),i.objectOpacity=0,i.alphaDiscardMode=$.Mask;const v=[];i.baseColorTexture&&v.push(i.baseColorTexture.loadPromise),i.usePBR&&i.metallicRoughnessTexture&&v.push(i.metallicRoughnessTexture.loadPromise),i.usePBR&&i.emissionTexture&&v.push(i.emissionTexture.loadPromise),i.usePBR&&i.occlusionTexture&&v.push(i.occlusionTexture.loadPromise),i.usePBR&&i.normalTexture&&v.push(i.normalTexture.loadPromise);const ae=Promise.all(v);a.push(ae),ae.then(()=>{var ne,oe,le,ce,de,he,ue,me,pe,ge;i.alphaDiscardMode=Ue[l.alphaMode],i.objectOpacity=1,o.texMemoryUsage+=((oe=(ne=i.baseColorTexture)==null?void 0:ne.glTexture)==null?void 0:oe.usedMemory)||0,i.usePBR&&(o.texMemoryUsage+=((ce=(le=i.metallicRoughnessTexture)==null?void 0:le.glTexture)==null?void 0:ce.usedMemory)||0,o.texMemoryUsage+=((he=(de=i.emissionTexture)==null?void 0:de.glTexture)==null?void 0:he.usedMemory)||0,o.texMemoryUsage+=((me=(ue=i.occlusionTexture)==null?void 0:ue.glTexture)==null?void 0:me.usedMemory)||0,o.texMemoryUsage+=((ge=(pe=i.normalTexture)==null?void 0:pe.glTexture)==null?void 0:ge.usedMemory)||0)}),i.commonMaterialParameters.doubleSided=l.isDoubleSided,i.commonMaterialParameters.cullFace=l.faceCulling?Rt[l.faceCulling]:A.Back,this._initialCullFace.set(D,i.commonMaterialParameters.cullFace),i.commonMaterialParameters.hasSlicePlane=this.slicePlaneEnabled,i.componentParameters.castShadows=ht.All,i.textureAlphaCutoff=l.alphaCutoff??.1,i.alphaDiscardMode=Ue[l.alphaMode],i.isIntegratedMesh=!0,i.polygonOffsetEnabled=!1,i.hasOccludees=!1,i.ellipsoidMode=ut(this.view.spatialReference)}),o.components.push(D),o.vboMemoryUsage+=this._collection.getObjectGPUMemoryUsage(D)}if(await Promise.all(a),c.forEach(s=>{o.textures.push(s)}),!this._memCache)throw new Error("no memCache");return this._memCache.put(`${o.handle}`,o,o.totalMemory()),{memUsageBytes:o.totalMemory()}}freeRenderable(t){const e=this._lyrHandleToObjects.get(t);e&&(this.freeObject(e),this._lyrHandleToObjects.delete(t))}freeObject(t){this._memCache&&this._memCache.pop(`${t.handle}`),t.components.forEach(e=>{t.textures.forEach(d=>{this._stage.remove(d)}),this._collection.destroyObject(e),this._initialCullFace.delete(e)})}setRenderableVisibility(t,e,d){if(this._memCache){for(let a=0;a<d;++a){const c=t[a],o=e[a];if(!o)continue;const r=this._lyrHandleToObjects.get(c);r&&(this._visibleGeometryChanged(),r.isVisible=o,r.components.forEach(h=>{this._collection.setObjectVisibility(h,o),this._elevationProvider.objectChanged(this._collection.getComponentObb(h))}),this._memCache.pop(`${c}`))}for(let a=0;a<d;++a){const c=t[a],o=e[a];if(o)continue;const r=this._lyrHandleToObjects.get(c);r&&(this._visibleGeometryChanged(),r.isVisible=o,r.components.forEach(h=>{this._collection.setObjectVisibility(h,o),this._elevationProvider.objectChanged(this._collection.getComponentObb(h))}),this._memCache.put(`${c}`,r,r.totalMemory()))}}}_getTexture(t,e,d){var c,o;let a=null;if(t&&((c=e.desc)!=null&&c.images)&&((o=e.data)!=null&&o.buffer)){const r=e.desc.images[t==null?void 0:t.imageId];if(a=d.get(r),!a&&r){const h=this._stage.renderView.renderingContext.parameters.maxMaxAnisotropy,_=h>1,w=Ft[t.wrapMode??U.None];let g=r.alpha?4:3;const m=new Uint8Array(e.data.buffer,r.data.byteOffset,r.data.byteCount);let u=null,n=null,s=null;switch(r.format){case P.Raw:r.pixelFormat===te.R8?(u=m.buffer,g=1,n=""):r.pixelFormat===te.Rgb8?(u=m.buffer,g=3,n=""):r.pixelFormat===te.Rgba8&&(u=m.buffer,g=4,n="");break;case P.Dxt1:u=m.buffer,g=3,n=Ce.DDS_ENCODING;break;case P.Dxt5:u=m.buffer,g=4,n=Ce.DDS_ENCODING;break;case P.Png:n="image/png",s=document.createElement("img");break;case P.Jpeg:n="image/jpeg",s=document.createElement("img");break;case P.Etc2:n="image/ktx",s=document.createElement("img");break;case P.Astc:this._dbg(f.Error,"Astc texture not supported");break;case P.Pvrtc:this._dbg(f.Error,"Pvrtc texture not supported")}if(s&&n){const b=new Blob([m],{type:n});s.src=URL.createObjectURL(b),u=s}u&&n!=null&&(a=new mt(u,{mipmap:_,maxAnisotropy:h,encoding:n,wrap:w,components:g,noUnpackFlip:!0,width:r.mip0Width,height:r.mip0Height}),this._stage.add(a),d.set(r,a))}}return a?new At(this.view._stage.renderView.textures,a.id):null}getBufferViews(t,e,d,a){let c,o,r,h,_,w,g,m=null;for(let u=0;u<t.atrbs.length;u++){const n=t.atrbs[u],s=n.view,b=void 0,l=s.byteOffset+s.byteCount,T=s.byteCount/Vt[s.type],C=[...Array(T).keys()].map(y=>y);try{switch(n.sem){case H.Position:s.ncomp!==3||s.type!==p.F32?this._dbg(f.Error,"[Unsupported Feature] Unsupported view for Position ("+s+")"):(c=new Z(e,s.byteOffset,b,l),o=new B(c.typedBuffer,C,3));break;case H.Normal:if(s.ncomp!==3||s.type!==p.F32)this._dbg(f.Error,"[Unsupported Feature] Unsupported view for Normal ("+s+")");else if(a){const y=new Z(e,s.byteOffset,b,l),M=wt(y.typedBuffer,d);_=new vt(M),w=new B(_.typedBuffer,C,2)}break;case H.TexCoord:s.ncomp!==2||s.type!==p.F32?this._dbg(f.Error,"[Unsupported Feature] Unsupported view for Texcoord ("+s+")"):h===void 0&&(h=new B(new _t(e,s.byteOffset,b,l).typedBuffer,C,2));break;case H.Color:s.ncomp===4?(s.type===p.F32&&(m=new pt(e,s.byteOffset,b,l)),s.type===p.U8&&(m=new gt(e,s.byteOffset,b,l)),s.type===p.U16&&(m=new bt(e,s.byteOffset,b,l))):s.ncomp===3&&(s.type===p.F32&&(m=new Z(e,s.byteOffset,b,l)),s.type===p.U8&&(m=new ft(e,s.byteOffset,b,l)),s.type===p.U16&&(m=new yt(e,s.byteOffset,b,l))),m==null?this._dbg(f.VerboseAPI,"[Unsupported Feature] Unsupported view for Color ("+s+")"):r=new B(m.typedBuffer,C,s.ncomp);break;case H.FeatureIndex:break;default:this._dbg(f.VerboseAPI,"[Unsupported Feature] Unsupported semantic ("+n.sem+"). Skipping vertex attribute.")}}catch(y){this._dbg(f.VerboseAPI,"Error Creating buffer ("+y+"). Skipping vertex attribute.")}}if(t.index){const u=t.index.view,n=void 0,s=u.byteOffset+u.byteCount;switch(t.index.view.type){case p.U16:g=new Me(e,u.byteOffset,n,s);break;case p.U32:g=new Te(e,u.byteOffset,n,s);break;case p.U8:default:this._dbg(f.Error,"[Unsupported Feature] index type not supported ("+u.type+").")}}if(g==null&&c!=null){const u=c.count;if(u<65535){const n=new Uint16Array(u);g=new Me(n)}else{const n=new Uint32Array(u);g=new Te(n)}for(let n=0;n<u;n++)g.set(n,n)}return{positionView:c,positionAttr:o,colorAttr:r,texCoord0Attr:h,indicesView:g,normalsView:_,normalsAttr:w}}_onRemoveFromCache(t){const e=L(this.view);e&&e.onRenderableEvicted(this,t.handle,t.totalMemory()),this.freeRenderable(t.handle)}_dbg(t,e){this._dbgFlags.has(t)&&(t===f.Error?Pe.getLogger(this).error(e):Pe.getLogger(this).warn(e))}};S([k()],O.prototype,"_visibleGeometryChangedSchedulerHandle",void 0),S([k()],O.prototype,"layer",void 0),S([k({readOnly:!0})],O.prototype,"visibleAtCurrentScale",null),S([k()],O.prototype,"elevationOffset",null),O=S([xt("esri.views.3d.layers.IntegratedMesh3DTilesLayerView3D")],O);const zt=O;export{zt as default};
