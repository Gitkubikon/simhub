import{od as t,oe as i,of as n,Q as s,bM as l,dJ as p,dL as _,du as O,N as w,cx as b,dM as C,dN as G,dO as E,g as j,dP as T,dD as I,kg as k,cW as F,dW as $,dn as N,dX as L,dQ as Z,d1 as U,hD as q,cX as Q,c_ as W,dv as B,ec as X,cU as J,lc as K,og as Y,oh as ee,kj as te,ks as ie,ak as ne,oi as re,H as se,hi as ae,oj as oe,ok as le,e2 as ce,O as ue,lf as de,ol as he,a8 as pe,om as fe,on as me,z as _e,hS as ge,h6 as ve,h5 as xe,e as Pe,y as Oe,a as ye,S as we}from"./index-DSIPxOWi.js";import{m as Se,f as De,u as Re,l as ze}from"./geodesicLengthMeasurementUtils-Pq-FipkN.js";import{G as be,M as Ce}from"./ExtendedLineVisualElement-C_fk7Jva.js";import{r as Ge}from"./vec4f32-APunXZaC.js";import{t as Ee}from"./EngineVisualElement-Cxk2Aaf7.js";import{x as Me}from"./PointVisualElement-kTFgcxXB.js";import{D as Ae}from"./RightAngleQuadVisualElement-CPtUkCyd.js";import{o as je,e as Te,h as He,i as Ie,T as Ve,k as ke,E as Fe,m as $e,l as Ne,q as Le}from"./SnappingManagerPool-BslN_FM5.js";import{n as Ze}from"./PointSnappingHint-Ct-FTQTL.js";import{a as Ue}from"./LineVisualElement-EjMrPPob.js";import{b as qe,w as Qe}from"./ShadedColorMaterial.glsl-C-XXTK_B.js";import{a as We}from"./dehydratedFeatureComparison-dI04k89u.js";function c(i){return Se(i)??t(i)}function m$2(t,n){return De(t,n)??i(t,n)}function u(t,i,s){return Be[0]=t[0],Be[1]=t[1],Be[2]=3===t.length?t[2]:0,Xe[0]=i[0],Xe[1]=i[1],Xe[2]=3===i.length?i[2]:0,Re(Be,Xe,s)??n(Be,Xe,s)}const Be=s(),Xe=s();let Je=class v extends Ee{constructor(t){super(t),this._location=s(),this._direction=l(1,0,0),this._width=1,this._offset=1,this._length=18,this._color=Ge(1,0,1,1),this._renderOccluded=p.OccludeAndTransparent,this.applyProperties(t)}createObject3DResourceFactory(t){return{view:t,createResources:t=>this._createObject3DResources(t),destroyResources:A$1,recreateGeometry:(t,i)=>this._recreateObject3DGeometry(t,i),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(t){return{view:t,createResources:()=>this._createDrapedResources(),destroyResources:M,recreateGeometry:t=>this._recreateDrapedGeometry(t)}}get location(){return this._location}set location(t){_(this._location,t)||(O(this._location,t),this._updateGeometry())}get direction(){return this._direction}set direction(t){_(this._direction,t)||(O(this._direction,t),this._updateGeometry())}setDirectionFromPoints(t,i){w(this._direction,b(this._direction,i,t)),this._updateGeometry()}get width(){return this._width}set width(t){t!==this._width&&(this._width=t,this._updateMaterial())}get offset(){return this._offset}set offset(t){t!==this._offset&&(this._offset=t,this._updateGeometry())}get length(){return this._length}set length(t){t!==this._length&&(this._length=t,this._updateGeometry())}get color(){return this._color}set color(t){C(t,this._color)||(G(this._color,t),this._updateMaterial())}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._updateMaterial())}_createObject3DResources(t){const i=new E(this.materialParameters),n=new Array;return this._createObject3DGeometry(i,t,n),{material:i,geometries:n,forEach:t=>{t(i),n.forEach(t)}}}_recreateObject3DGeometry(t,i){t.geometries.length=0,this._createObject3DGeometry(t.material,i,t.geometries)}_createObject3DGeometry(t,i,n){const[s,l]=P$1(t);i.addGeometry(s),i.addGeometry(l),n.push(s),n.push(l),this._updateVerticesObject3D(i)}_createDrapedResources(){const t=new E(this.materialParameters),i=j((()=>this.view.state.contentPixelRatio),(()=>{this.drapedResources.recreateGeometry()}));return{material:t,geometries:this._createDrapedGeometry(t),pixelRatioHandle:i}}_recreateDrapedGeometry(t){t.geometries=this._createDrapedGeometry(t.material)}_createDrapedGeometry(t){const i=P$1(t);return this._updateVerticesDraped(i),i.map((t=>new T(t)))}_updateMaterial(){var t,i;const{materialParameters:n}=this;null==(t=this.object3dResources.resources)||t.material.setParameters(n),null==(i=this.drapedResources.resources)||i.material.setParameters(n)}get materialParameters(){return{width:this._width,color:this._color,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const t=this.object3dResources.object;t&&this._updateVerticesObject3D(t)}}_updateVerticesObject3D(t){const i=this.view.state.camera;i.projectToScreen(this.location,it),I(Ke,this.location,this.direction),i.projectToScreen(Ke,nt),k(nt,F(nt,nt,it)),this._updateVertexAttributesObject3D(i,t,0,it,nt,1),this._updateVertexAttributesObject3D(i,t,1,it,nt,-1)}_updateVertexAttributesObject3D(t,i,n,s,l,p){var _;const O=i.geometries[n],w=null==(_=O.getMutableAttribute($.POSITION))?void 0:_.data;if(!w)return;const{start:b,end:C}=V(l,s,p,this.offset,this.width,this.length);t.unprojectFromScreen(N(b),Ke),w[0]=Ke[0],w[1]=Ke[1],w[2]=Ke[2],t.unprojectFromScreen(N(C),Ke),w[3]=Ke[0],w[4]=Ke[1],w[5]=Ke[2],i.geometryVertexAttributeUpdated(O,$.POSITION)}_updateVerticesDraped(t){const{view:{basemapTerrain:{overlayManager:i},state:{contentPixelRatio:n}}}=this,{location:s,width:l,length:p,offset:_}=this,O=rt;O.spatialReference=i.renderer.spatialReference,O.x=s[0],O.y=s[1];const w=this.view.overlayPixelSizeInMapUnits(O)*n,b=l*w,C=p*w,G=_*w;this._updateVertexAttributesDraped(t[0],b,C,G,-1),this._updateVertexAttributesDraped(t[1],b,C,G,1)}_updateVertexAttributesDraped(t,i,n,s,l){var p;const _=null==(p=t.getMutableAttribute($.POSITION))?void 0:p.data;if(!_)return;const{location:O,direction:w}=this,{start:b,end:C}=V(w,O,l,s,i,n);_[0]=b[0],_[1]=b[1],_[2]=L,_[3]=C[0],_[4]=C[1],_[5]=L,t.invalidateBoundingInfo()}};function P$1(t){return[Z(t,[s(),s()]),Z(t,[s(),s()])]}function V(t,i,n,s,l,p){const _=U(Ye,q(Ye,t[1]*n,t[0]*-n),s+l/2),O=Q(et,Q(et,Q(et,i,U(et,t,p/2)),_),_);return{start:O,end:Q(tt,O,U(tt,t,-p))}}function A$1(t){t.geometries.length=0}function M(t){t.pixelRatioHandle.remove(),t.geometries=[]}const Ke=s(),Ye=W(),et=W(),tt=W(),it=B(),nt=B(),rt=X(0,0,void 0,null);class r{draw(t,i){const n=function a(t){const i=[];for(const n of t){let t=!0;for(const s of i)if(n.equals(s)){t=!1;break}t&&i.push(n)}return i}(t),s=this.sortUniqueHints(n),l=[];for(const p of s)p instanceof je&&l.push(this.visualizeIntersectionPoint(p,i)),p instanceof Te&&l.push(this.visualizeLine(p,i)),p instanceof He&&l.push(this.visualizeParallelSign(p,i)),p instanceof Ie&&l.push(this.visualizeRightAngleQuad(p,i)),p instanceof Ze&&l.push(this.visualizePoint(p,i));return J(l)}sortUniqueHints(t){return t}}class R extends r{sortUniqueHints(t){return t.sort(((t,i)=>(i instanceof Te?i.length:0)-(t instanceof Te?t.length:0)))}visualizeIntersectionPoint(t,i){const{spatialReference:n,view:s}=i,l=D(i);return K(new Me({view:s,primitive:"circle",geometry:Ve(t.intersectionPoint,n),elevationInfo:t.isDraped?Y:ee,size:20,outlineSize:2,color:l.intersectionPointColor,outlineColor:l.intersectionPointOutlineColor,pixelSnappingEnabled:!1,isDecoration:!0,attached:!0}))}visualizePoint(t,i){const{view:n,spatialReference:s}=i,l=D(i),p=x$1(t.point,t.domain,i);return K(new Me({view:n,primitive:"circle",geometry:Ve(p,s),elevationInfo:A(t),size:20,outlineSize:2,color:l.pointColor,outlineColor:l.pointOutlineColor,pixelSnappingEnabled:!1,isDecoration:!0,attached:!0}))}visualizeLine(t,i){const{view:n,spatialReference:s}=i,l=D(i),_=x$1(t.lineStart,t.domain,i),O=x$1(t.lineEnd,t.domain,i);return K(function H(t,i,n,s,l,_,O,w=!1,b=!0,C=!0){const G=z(i,s,l,_,w),E=z(n,s,l,_,w),j=new be({view:_,extensionType:Ce.FADED,start:G,end:E,isDraped:w,color:O.lineColor,renderOccluded:w?p.OccludeAndTransparent:p.Opaque,renderGroup:ie.SnappingHint,isDecoration:!0});switch(t){case Le.TARGET:j.width=ke.lineHintWidthTarget,j.fadedExtensions={start:0,end:ke.lineHintFadedExtensions};break;case Le.REFERENCE_EXTENSION:j.width=ke.lineHintWidthReference,j.fadedExtensions={start:0,end:0};break;case Le.REFERENCE:j.width=ke.lineHintWidthReference,j.fadedExtensions={start:b?ke.lineHintFadedExtensions:0,end:C?ke.lineHintFadedExtensions:0}}return j.attached=!0,j}(t.type,_,O,s,A(t),n,l,t.isDraped,t.fadeLeft,t.fadeRight))}visualizeParallelSign(t,i){const{view:n,spatialReference:s}=i,l=D(i),{isDraped:_}=t,O=A(t),w=x$1(t.lineStart,t.domain,i),b=x$1(t.lineEnd,t.domain,i),C=z(w,s,O,n,_),G=z(b,s,O,n,_),E=te(G,C,G,.5),j=new Je({view:n,attached:!1,offset:ke.parallelLineHintOffset,length:ke.parallelLineHintLength,width:ke.parallelLineHintWidth,color:l.parallelSignColor,location:E,renderOccluded:_?p.OccludeAndTransparent:p.Opaque,isDraped:_,renderGroup:ie.SnappingHint,isDecoration:!0});return j.setDirectionFromPoints(C,E),j.attached=!0,K(j)}visualizeRightAngleQuad(t,i){const{view:n,spatialReference:s}=i,l=D(i),_=A(t),{isDraped:O}=t,w=x$1(t.previousVertex,t.domain,i),b=x$1(t.centerVertex,t.domain,i),C=x$1(t.nextVertex,t.domain,i),G=z(w,s,_,n,O),E=z(b,s,_,n,O),j=z(C,s,_,n,O);return K(new Ae({view:n,attached:!0,color:O?l.rightAngleColorDraped:l.rightAngleColor,renderOccluded:O?p.OccludeAndTransparent:p.Transparent,outlineRenderOccluded:O?p.OccludeAndTransparent:p.Opaque,outlineColor:l.rightAngleOutlineColor,outlineSize:ke.rightAngleHintOutlineSize,size:ke.rightAngleHintSize,isDraped:O,geometry:{previous:G,center:E,next:j},renderGroup:ie.SnappingHint,isDecoration:!0}))}}function D(t){const{effectiveTheme:i}=t.view,n=ne.toUnitRGBA(i.accentColor),s=[0,0,0,0];return{intersectionPointColor:s,intersectionPointOutlineColor:n,pointColor:s,pointOutlineColor:n,lineColor:n,lineOutlineColor:void 0,parallelSignColor:n,rightAngleColor:n,rightAngleColorDraped:ne.toUnitRGBA(re(i.accentColor,.5)),rightAngleOutlineColor:n}}function x$1(t,i,{selfSnappingZ:n,view:s,spatialReference:l}){return i&Fe.SELF&&$e(t)&&null!=n?Ne(t,n,s,l):t}function A(t){return t.isDraped?Y:ee}function z(t,i,n,l,p){const _=s();if(p){const n=l.basemapTerrain.overlayManager.renderer.spatialReference;se(t,i,_,n)}else ze(t,i,n,l,_);return _}let st=class d extends Ue{constructor(t){super(t),this.view=null,this._renderOccluded=p.OccludeAndTransparent,this._vertices=null,this._spatialReference=null,this._color=le([1,127/255,0,1]),this._size=11,this._outlineColor=le([0,0,0,.5]),this._outlineSize=1,this._elevationInfo=null,this.applyProperties(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._updateMaterial(),this._updateOutlineMaterial())}get vertices(){return this._vertices}set vertices(t){this._vertices=t,this.recreateGeometry()}get spatialReference(){return this._spatialReference}set spatialReference(t){this._spatialReference=t,this.recreateGeometry()}get color(){return this._color}set color(t){C(t,this._color)||(G(this._color,t),this._updateMaterial())}get size(){return this._size}set size(t){t!==this._size&&(this._size=t,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(t){C(t,this._outlineColor)||(G(this._outlineColor,t),this._updateOutlineMaterial())}get outlineSize(){return this._outlineSize}set outlineSize(t){t!==this._outlineSize&&(this._outlineSize=t,this._updateOutlineMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(t){this._elevationInfo=t,this.recreateGeometry()}get _vertexMaterialParameters(){return{color:this._color,screenSizeScale:this.size,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}get _vertexOutlineMaterialParameters(){return{color:this._outlineColor,screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this.attached&&this._vertexMaterial.setParameters(this._vertexMaterialParameters)}_updateOutlineMaterial(){this.attached&&this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters)}_createRenderGeometries(){const t=this.vertices;if(null==t||0===t.length)return[];const i=function o(t,i,n,s,l){const p=ae(3*t.length),_=ae(p.length);t.forEach(((t,i)=>{p[3*i]=t[0],p[3*i+1]=t[1],p[3*i+2]=t.length>2?t[2]:0}));const O=oe(p,i,0,_,0,p,0,p.length/3,n,s,l),w=null!=O;return{numVertices:t.length,position:p,mapPositions:_,projectionSuccess:w,sampledElevation:O}}(t,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,ce.fromElevationInfo(this.elevationInfo)),n=[],s=i.numVertices,l=i.position;for(let p=0;p<s;++p){const t=ue(at,l[3*p],l[3*p+1],l[3*p+2]),i=m$1(this._vertexMaterial,.5,t),s=m$1(this._vertexOutlineMaterial,.5,t);n.push({vertexGeometry:i,vertexOutlineGeometry:s})}return n}createGeometries(t){const i=this._createRenderGeometries();for(const{vertexGeometry:n,vertexOutlineGeometry:s}of i)t.addGeometry(n),t.addGeometry(s)}createExternalResources(){this._vertexMaterial=new qe({...this._vertexMaterialParameters,writeDepth:!0,cullFace:de.Back,screenSizeEnabled:!0}),this._vertexOutlineMaterial=new qe({...this._vertexOutlineMaterialParameters,forceTransparentMode:!0,writeDepth:!0,cullFace:de.Front,screenSizeEnabled:!0,shadingEnabled:!1})}destroyExternalResources(){this._vertexMaterial=null,this._vertexOutlineMaterial=null}forEachExternalMaterial(t){t(this._vertexMaterial),t(this._vertexOutlineMaterial)}};const at=s();function m$1(t,i,n){return he(t,i,16,16,{offset:n})}class e{constructor(t){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.drawConstraints=null,this.editGeometryOperations=t.editGeometryOperations,this.elevationInfo=t.elevationInfo,this.pointer=t.pointer,this.vertexHandle=t.vertexHandle,this.excludeFeature=t.excludeFeature,this.feature=t.feature,this.visualizer=t.visualizer,this.selfSnappingZ=t.selfSnappingZ,this.drawConstraints=t.drawConstraints}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}function f({predicate:t=()=>!0,snappingManager:i,snappingContext:n,updatingHandles:s,useZ:l=!0}){const p=new Qe;if(null==i)return{snappingStep:[y,p],cancelSnapping:y};let _,O=null,w=null,b=null;const T2=()=>{O=_e(O),i.doneSnapping(),null==w||w.frameTask.remove(),w=null,_=ge(_),b=null},C=function d2(t,i,n){return xe((async({frameTask:s,point:l,scenePoint:p,context:_,event:O,delta:w,getLastState:b},C)=>{const G=await s.schedule((()=>t.snap({point:l,scenePoint:p,context:_,signal:C})),C);if(G.valid){let p=await s.schedule((()=>G.apply()),C);const E=b();null!=E.point&&l!==E.point&&(p=t.update({point:E.point,scenePoint:E.scenePoint,context:_})),null!=E.updatePoint&&We(p,E.updatePoint)||(h(O.mapEnd,p,w,i),n.execute(O))}}))}(i,l,p);let G=null,E=null,T=null;return{snappingStep:[p=>{if(!t(p))return p;const{action:I}=p;if("start"===I){const{info:t}=p,s=function m(t){return"3d"===t.type?t.resourceController.scheduler.registerTask(pe.SNAPPING):fe}(i.view);if(w=function g(t,i,n){return{context:new e({editGeometryOperations:t.editGeometryOperations,elevationInfo:t.elevationInfo,pointer:t.pointer,vertexHandle:null!=i.info?i.info.handle:null,excludeFeature:t.excludeFeature,feature:t.feature,visualizer:t.visualizer}),originalPos:null!=i.snapOrigin?t.coordinateHelper.vectorToDehydratedPoint(i.snapOrigin):i.mapStart,originalScenePos:null!=i.scenePoints?i.scenePoints.sceneStart:null,frameTask:n}}(n,p,s),w.context.selfSnappingZ=null,!l&&null!=t){const i=function S(t,i){if(!t.hasZ())return null;const n=i.vertices;let s=null;for(const l of n){const i=t.getZ(l.pos);if(null!=s&&null!=i&&Math.abs(i-s)>1e-6)return null;null==s&&(s=i)}return s}(n.coordinateHelper,t.handle.component);null!=i&&(w.context.selfSnappingZ={value:i,elevationInfo:n.elevationInfo??ee})}}if(null!=w){const{context:t,originalScenePos:n,originalPos:k}=w,{mapEnd:F,mapStart:$,scenePoints:N}=p,L=x(k,v2(F,$)),Z=v2($,k),U={...p,action:"update"},q=w.context,Q=function P(t,i){return null==t||null==i?null:x(t,v2(i.sceneEnd,i.sceneStart))}(n,N),W=i.update({point:L,scenePoint:Q,context:t});if(T=W,h(F,W,Z,l),G=L,E=Q,"end"!==I){const{frameTask:t}=w;null==O&&(O=new AbortController),b=i=>{s.addPromise(ve(C({frameTask:t,event:U,context:q,point:L,scenePoint:Q,delta:Z,getLastState:()=>({point:G,scenePoint:E,updatePoint:i.forceUpdate?null:T})},O.signal)))},b({forceUpdate:!1}),null==_&&(_=j((()=>i.options.effectiveEnabled),(()=>null==b?void 0:b({forceUpdate:!0}))))}}return"end"===I&&T2(),p},p],cancelSnapping:t=>(T2(),t)}}function x(t,[i,n,s]){const l=me(t);return l.x+=i,l.y+=n,l.hasZ&&(l.z+=s),l}function v2(t,i){const n=t.hasZ&&i.hasZ?t.z-i.z:0;return[t.x-i.x,t.y-i.y,n]}function h(t,i,[n,s,l],p){t.x=i.x+n,t.y=i.y+s,p&&t.hasZ&&i.hasZ&&(t.z=i.z+l)}function y(t){return t}let ot=class extends we{constructor(t){super(t),this.constrainResult=t=>t,this._snapPoints=null,this._frameTask=null,this._abortController=null,this._stagedPoint=null,this._snap=xe((async(t,i,n,s)=>{const l=this._frameTask;if(null==l)return;const p=await l.schedule((()=>i.snap({...t,context:n,signal:s})),s);p.valid&&await l.schedule((()=>{this.stagedPoint=p.apply(),t!==this._snapPoints&&null!=this._snapPoints&&(this.stagedPoint=i.update({...this._snapPoints,context:n}))}),s)}))}get stagedPoint(){return this._stagedPoint}set stagedPoint(t){this._stagedPoint=this.constrainResult(t)}initialize(){var t,i;const n="3d"===this.view.type?null==(i=null==(t=this.view)?void 0:t.resourceController)?void 0:i.scheduler:null;this._frameTask=null!=n?n.registerTask(pe.SNAPPING):fe}destroy(){this._abortController=_e(this._abortController),this._frameTask=ge(this._frameTask)}update(t,i,n){this._snapPoints=t;const{point:s,scenePoint:l}=t,p=i.update({point:s,scenePoint:l,context:n});return this.stagedPoint=p,p}async snap(t,i,n){const{point:s,scenePoint:l}=t;return this.stagedPoint=i.update({point:s,scenePoint:l,context:n}),this._snapPoints=t,null==this._abortController&&(this._abortController=new AbortController),this._snap(t,i,n,this._abortController.signal)}async snapAgainNearPreviousMapPoint(t,i){null!=this._snapPoints&&await this.snap(this._snapPoints,t,i)}abort(){this._abortController=_e(this._abortController),this._snapPoints=null}};Pe([Oe({constructOnly:!0})],ot.prototype,"view",void 0),Pe([Oe()],ot.prototype,"stagedPoint",null),Pe([Oe()],ot.prototype,"constrainResult",void 0),Pe([Oe()],ot.prototype,"_stagedPoint",void 0),ot=Pe([ye("esri.views.interactive.snapping.SnappingOperation")],ot);export{R,c,st as d,e,f,m$2 as m,ot as p,u};
