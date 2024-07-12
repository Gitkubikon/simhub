import{Q as l,dJ as _,br as p,dN as m,e6 as O,N as M,cx as g,du as u,e7 as f,dO as R,dL as z,e8 as D,dP as w,g as y,dQ as v,dD as $,e3 as d,e9 as P,ci as S,dX as j,ea as T,dW as q,eb as G,bV as C,ec as Q}from"./index-_cfZD3Ca.js";import{t as I}from"./EngineVisualElement-CF-4dkle.js";class E extends I{constructor(e){super(e),this._maxSize=0,this._position=l(),this._up=l(),this._right=l(),this._renderOccluded=_.OccludeAndTransparent,this._color=p(1,0,0,1),this._outlineColor=p(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=_.Opaque,this.applyProperties(e)}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:()=>{},cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:N}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){m(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){m(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const t=this._outlineSize===0!=(e===0);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:t,next:r}){this._maxSize=Math.min(O(t,e),O(t,r))/3,M(this._up,g(this._up,e,t)),M(this._right,g(this._right,r,t)),u(this._position,t),this.recreateGeometry()}_createObject3DResources(e){const t=new f(this._quadMaterialParameters),r=this._outlineSize===0?void 0:new R(this._outlineMaterialParameters);return this._createObject3DGeometries(e,t,r),{quadMaterial:t,outlineMaterial:r,forEach:s=>{s(t),r&&s(r)}}}_createObject3DGeometries(e,t,r){if(z(this._up,D)&&z(this._right,D))return;const s=this._createGeometries(t,r);for(const o of s)e.addGeometry(o);this._updateTransformObject3D(e)}_createDrapedResources(){const e=new f(this._quadMaterialParameters),t=this._outlineSize===0?void 0:new R(this._outlineMaterialParameters),r=this._createGeometries(e,t).map(s=>new w(s));return this._setTransformDraped(r),{quadMaterial:e,outlineMaterial:t,geometries:r,pixelRatioHandle:y(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()})}}_createGeometries(e,t){const{up:r,right:s,corner:o}=this._getVertices(),a=V(r,s,o,e);return t?[a,v(t,[r,o,s])]:[a]}_getVertices(){let e=this._up,t=this._right;const r=$(d.get(),e,t);return this.isDraped&&(e=u(d.get(),e),t=u(d.get(),t),e[2]=0,t[2]=0,r[2]=0),{up:e,right:t,corner:r}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(e=this.object3dResources.object){if(!e)return;const t=this.view.state.camera,r=this._size*t.computeScreenPixelSizeAt(this._position),s=Math.min(this._maxSize,r);P(i,this._position),S(i,i,[s,s,s]),e.transformation=i}_setTransformDraped(e){if(e.length===0)return;const{view:{basemapTerrain:{overlayManager:t},state:{contentPixelRatio:r}}}=this,{_position:s,_size:o}=this,a=u(d.get(),s);a[2]=j;const c=A;c.spatialReference=t.renderer.spatialReference,c.x=a[0],c.y=a[1];const b=o*(this.view.overlayPixelSizeInMapUnits(c)*r),h=Math.min(this._maxSize,b);P(i,a),S(i,i,[h,h,1]);for(const x of e)x.transformation=i}get _quadMaterialParameters(){return{color:this._color,forceTransparentMode:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateQuadMaterial(){var e,t;(e=this.object3dResources.resources)==null||e.quadMaterial.setParameters(this._quadMaterialParameters),(t=this.drapedResources.resources)==null||t.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded,isDecoration:this.isDecoration}}_updateOutlineMaterial(){var e,t,r,s;(t=(e=this.object3dResources.resources)==null?void 0:e.outlineMaterial)==null||t.setParameters(this._outlineMaterialParameters),(s=(r=this.drapedResources.resources)==null?void 0:r.outlineMaterial)==null||s.setParameters(this._outlineMaterialParameters)}}function N(n){n.pixelRatioHandle.remove(),n.geometries=[]}function V(n,e,t,r){return new T(r,[[q.POSITION,new G([0,0,0,...e,...n,...t],[0,1,2,1,2,3],3,!0)]])}const i=C(),A=Q(0,0,void 0,null);export{E as D};