import{g1 as nt,bk as at,ku as ot,e as L,y as H,aw as ze,gH as Ce,aO as Ee,hT as Ae,a as ct,br as z,pf as qe,w5 as dt,w6 as lt,dW as se,w8 as Pe,xe as Re,wc as ut,wg as gt,_ as ht,wj as pt,wk as ft,wV as mt,wl as bt,xf as _t,tf as Q,kA as wt,ws as $t,wL as Ot,wy as Tt,kz as It,wf as vt,xI as Ct,wE as Et,wC as At,xg as Pt,dJ as w,dN as Me,hg as Rt,pg as oe,dl as Mt,e3 as l,dC as p,du as M,xJ as Xe,dB as D,L as E,N,dD as m,dt as S,cx as T,mX as Nt,dz as Ye,mZ as X,v7 as St,xK as he,xL as yt,xM as xt,bO as Lt,O as re,oO as _e,ci as Ze,ch as q,oQ as Qe,hP as Ut,dh as Vt,kG as Je,ge as kt,xN as Ht,mQ as Ke,xO as pe,qN as Ne,mV as Dt,ee as Se,v9 as Wt,n as jt,dO as B,g as we,P as $e,ak as A,dQ as U,oN as _,bM as R,oi as Gt,oI as et,ea as Ft,eb as ye,e7 as J,lf as K,Q as ie,qQ as xe,lp as Le,bV as ue,gO as Ue,uy as Ve,xP as ke,oS as He,v4 as Bt}from"./index-DG8rgzil.js";import{e as zt,i as De,u as We,v as qt,C as te,g as Xt,j as Yt,k as Zt,q as Qt,b as Jt,d as je,s as Kt,n as tt,x as fe,U as es,S as Ge,c as ts,l as ss,a as rs}from"./sliceToolConfig-tUkF5JNz.js";import{O as is,e as Oe,i as ns,c as b,k as st}from"./ShadedColorMaterial.glsl-Dfsn2cNM.js";import{g as as}from"./ImageMaterial.glsl-Cx32WWMs.js";import{j as F}from"./persistable-B2eAgy9B.js";import{r as os}from"./projectionUtils-CUtZ76To.js";import{a as cs,f as ds}from"./LineVisualElement-BxsLlRLI.js";let I=class extends nt(at){constructor(t){super(t),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(t){return this.heading===t.heading&&this.tilt===t.tilt&&ot(this.position,t.position)&&this.width===t.width&&this.height===t.height}};L([H({readOnly:!0,json:{read:!1,write:!0}})],I.prototype,"type",void 0),L([H({type:ze}),F()],I.prototype,"position",void 0),L([H({type:Number,nonNullable:!0,range:{min:0,max:360}}),F(),Ce(e=>Ee.normalize(Ae(e),0,!0))],I.prototype,"heading",void 0),L([H({type:Number,nonNullable:!0,range:{min:0,max:360}}),F(),Ce(e=>Ee.normalize(Ae(e),0,!0))],I.prototype,"tilt",void 0),L([H({type:Number,nonNullable:!0}),F()],I.prototype,"width",void 0),L([H({type:Number,nonNullable:!0}),F()],I.prototype,"height",void 0),I=L([ct("esri.analysis.SlicePlane")],I);const ls=I,us=z(0,0,0,.04);function gs({accentColor:e}){return qe(e,.5)}function hs({accentColor:e}){return qe(e,.7)}function rt(e){const t=new dt,{vertex:a,fragment:r,attributes:i,varyings:n}=t;return lt(a,e),i.add(se.POSITION,"vec3"),i.add(se.UV0,"vec2"),n.add("vUV","vec2"),a.code.add(Pe`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),r.uniforms.add(new Re("backgroundColor",s=>s.backgroundColor),new Re("gridColor",s=>s.gridColor),new ut("gridWidth",s=>s.gridWidth)),r.code.add(Pe`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),t}const ps=Object.freeze(Object.defineProperty({__proto__:null,build:rt},Symbol.toStringTag,{value:"Module"}));class fs extends Ot{constructor(){super(...arguments),this.backgroundColor=z(1,0,0,.5),this.gridColor=z(0,1,0,.5),this.gridWidth=4}}class ce extends pt{initializeProgram(t){return new ft(t.rctx,ce.shader.get().build(this.configuration),mt)}initializePipeline(){return bt({blending:_t(Q.ONE,Q.ONE,Q.ONE_MINUS_SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA),depthTest:{func:wt.LESS},colorWrite:$t})}}ce.shader=new gt(ps,()=>ht(()=>Promise.resolve().then(()=>Ms),void 0));let ms=class extends Tt{constructor(t){super(t,new _s),this.produces=new Map([[It.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>a===vt.Color]]),this._configuration=new Ct}createBufferWriter(){return new Et(At)}createGLMaterial(t){return new bs(t)}getConfiguration(){return this._configuration}};class bs extends Pt{constructor(t){super(t),this.ensureTechnique(ce,null)}beginSlot(){return this.technique}}class _s extends fs{constructor(){super(...arguments),this.renderOccluded=w.Occlude,this.isDecoration=!1}}class ws extends cs{constructor(t){super(t),this._material=null,this._renderOccluded=w.OccludeAndTransparent,this._gridWidth=1,this._gridColor=z(1,0,0,1),this._backgroundColor=z(1,0,0,1),this.applyProperties(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(t){this._gridWidth!==t&&(this._gridWidth=t,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(t){Me(this._gridColor,t),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){Me(this._backgroundColor,t),this._updateMaterial()}createExternalResources(){this._material=new ms(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(t){this._material!=null&&t(this._material)}createGeometries(t){if(this._material!=null){const a=Rt(this._material);t.addGeometry(a)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this._material!=null&&this._material.setParameters(this._materialParameters)}}function Ds(e,t,a,r,i,n,s,o){return $s(t,s.worldUpAtPosition(e,l.get()),i,n,o.basis1,o.basis2),p(o.basis1,o.basis1,a),p(o.basis2,o.basis2,r),M(o.origin,e),Xe(o.basis2,o.basis1,o.origin,o.plane),o}function $s(e,t,a,r,i,n){const s=D(e,t),o=l.get(),u=l.get();switch(r===P.HORIZONTAL_OR_VERTICAL?Math.abs(s)>zt?P.HORIZONTAL:P.VERTICAL:r){case P.VERTICAL:{const c=Math.abs(s)<=De?e:a.viewUp;E(o,c,t),M(u,t);break}case P.HORIZONTAL:E(o,a.viewUp,t),E(u,t,o);break;case P.TILTED:{const c=Math.abs(s)<=De?t:a.viewUp;E(o,c,e),E(u,e,o);break}}const d=E(l.get(),o,u);D(d,a.viewForward)>0&&p(u,u,-1),N(i,o),N(n,u)}function Os(e,t,a){const r=t.worldUpAtPosition(e.origin,l.get()),i=e.basis1,n=ve(e,r),s=Math.round(n/W)*W;return pe(e,s-n,i,a)}function Ws(e,t,a,r,i,n){const s=M(l.get(),i.origin);m(s,s,p(l.get(),i.basis1,e.direction[0]<0?1:-1)),m(s,s,p(l.get(),i.basis2,e.direction[1]<0?1:-1));const o=S(i.basis1),u=S(i.basis2),d=T(l.get(),a,s),c=T(l.get(),t,s);let g=0,h=0;if(Ie(e)){const de=me(i),j=me(n);g=o-.5*e.direction[0]*D(i.basis1,c)/o,h=u-.5*e.direction[1]*D(i.basis2,c)/u;const Y=j/de;g*=Y,h*=Y}const f=g+.5*e.direction[0]*D(i.basis1,d)/o,O=h+.5*e.direction[1]*D(i.basis2,d)/u,V=p(l.get(),i.basis1,f/o),y=p(l.get(),i.basis2,O/u);(f<=0||Fe(n.origin,V,r)<=We)&&M(V,n.basis1),(O<=0||Fe(n.origin,y,r)<=We)&&M(y,n.basis2);const $=M(l.get(),s);return m($,$,p(l.get(),V,e.direction[0]<0?-1:1)),m($,$,p(l.get(),y,e.direction[1]<0?-1:1)),Nt($,V,y,n)}function js(e,t){return qt*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function Gs(e,t,a,r){const i=E(l.get(),t,a);return E(i,i,t),Ye(e,i,r)}function Fs(e,t){return is(e.basis1,e.basis2,e.origin,t)}function Bs(e,t,a,r){const i=t.worldUpAtPosition(e.origin,l.get()),n=l.get();switch(a){case ne.HEADING:M(n,i);break;case ne.TILT:M(n,e.basis1)}return Ye(e.origin,n,r)}function zs(e,t,a,r){const i=Te(a,v.NEGATIVE_X),n=X.get();St(n,t,i.edge*Math.PI/2);const s=N(l.get(),i.basis);let o=p(l.get(),s,i.direction*r.computeScreenPixelSizeAt(i.position)*te);m(o,o,i.position);const u=r.projectToRenderScreen(o,he(l.get())),d=Ts(r,u);yt(r,u,ee),N(ee.direction,ee.direction);const c=l.get();!d&&xt(a,ee,c)&&(o=c),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=Lt(o),d?e.state|=ae:e.state&=~ae}function Ts(e,t){const[a,r,i,n]=e.viewport,s=Math.min(i,n)/16;let o=!0;return t[0]<a+s?(t[0]=a+s,o=!1):t[0]>a+i-s&&(t[0]=a+i-s,o=!1),t[1]<r+s?(t[1]=r+s,o=!1):t[1]>r+n-s&&(t[1]=r+n-s,o=!1),o}function qs(e,t,a,r){const i=S(r.basis1),n=S(r.basis2),s=it(r),o=me(r),u=re(l.get(),0,0,0);m(u,p(l.get(),r.basis1,t.direction[0]),p(l.get(),r.basis2,t.direction[1])),m(u,r.origin,u);let d=0,c=1;if(Ie(t))t.direction[0]===1&&t.direction[1]===-1?d=W:t.direction[0]===1&&t.direction[1]===1?d=Math.PI:t.direction[0]===-1&&t.direction[1]===1&&(d=3*Math.PI/2),c=o;else{const h=t.direction[0]!==0?1:2;d=h===1?W:0,c=(h===1?n:i)-s}const g=_e(X.get(),d);Ze(g,g,re(l.get(),c,c,c)),q(g,a,g),g[12]=0,g[13]=0,g[14]=0,e.modelTransform=g,e.renderLocation=u}function Xs(e,t,a,r){const i=r.worldUpAtPosition(a.origin,l.get()),n=Te(a,v.POSITIVE_X),s=_e(X.get(),n.edge*Math.PI/2);Qe(s,s,-ve(a,i)),q(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=n.position}function Ys(e,t,a){const r=Te(a,v.POSITIVE_Y),i=_e(X.get(),r.edge*Math.PI/2);Qe(i,i,W),q(i,t,i),i[12]=0,i[13]=0,i[14]=0,e.modelTransform=i,e.renderLocation=r.position}var v;function Te(e,t){switch(t){case v.POSITIVE_X:return{basis:e.basis1,direction:1,position:m(l.get(),e.origin,e.basis1),edge:t};case v.POSITIVE_Y:return{basis:e.basis2,direction:1,position:m(l.get(),e.origin,e.basis2),edge:t};case v.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:T(l.get(),e.origin,e.basis1),edge:t};case v.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:T(l.get(),e.origin,e.basis2),edge:t}}}function Fe(e,t,a){const r=a.projectToRenderScreen(m(l.get(),e,t),he(l.get())),i=a.projectToRenderScreen(T(l.get(),e,t),he(l.get()));return Ut(T(r,r,i))}function it(e){const t=S(e.basis1),a=S(e.basis2);return Xt*Math.min(t,a)}function me(e){return it(e)}function Ie(e){return e.direction[0]!==0&&e.direction[1]!==0}function Zs(e){const t=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]];return new ds({view:e,attached:!1,color:hs(e.effectiveTheme),width:Yt,renderOccluded:w.OccludeAndTransparent,geometry:[t],isDecoration:!0})}function Qs(e){return new ws({view:e,attached:!1,backgroundColor:us,gridColor:gs(e.effectiveTheme),gridWidth:4,renderOccluded:w.OccludeAndTransparent,isDecoration:!0})}function Js(e,t,a,r=new ls){if(e==null)return null;const{renderCoordsHelper:i}=t,n=i.fromRenderCoords(e.origin,new ze({spatialReference:t.spatialReference}));if(n==null)return null;const s=Vt(n,a);if(s==null)return null;r.position=s;const o=2*S(e.basis1),u=2*S(e.basis2),d=Je.renderUnitScaleFactor(t.spatialReference,a);r.width=o*d,r.height=u*d;const c=i.worldUpAtPosition(e.origin,l.get());return r.tilt=kt(ve(e,c)),r.heading=i.headingAtPosition(e.origin,e.basis1)-90,r}function ve(e,t){return Ht(t,e.basis2,e.basis1)+W}function Is(e,t,a,r,i,n,s=Ke()){return n.toRenderCoords(e,s.origin)?(n.worldBasisAtPosition(s.origin,Ne.X,s.basis1),n.worldBasisAtPosition(s.origin,Ne.Y,s.basis2),Xe(s.basis2,s.basis1,s.origin,s.plane),pe(s,-Se(t),Dt(s),s),pe(s,Se(a),s.basis1,s),p(s.basis1,s.basis1,r/2),p(s.basis2,s.basis2,i/2),Wt(s),s):(jt.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${e.spatialReference.wkid} is not supported`),null)}function Ks(e,t){if((e==null?void 0:e.position)==null)return null;const a=os(e.position,t.spatialReference,t.elevationProvider);if(a==null)return null;const r=Je.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),i=e.width*r,n=e.height*r;return{position:a,heading:e.heading,tilt:e.tilt,renderWidth:i,renderHeight:n}}function er(e,t,a,r=Ke()){if(e==null)return null;const i=Is(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,r);return a.tiltEnabled||i==null||Os(i,t.renderCoordsHelper,i),i}(function(e){e[e.POSITIVE_X=0]="POSITIVE_X",e[e.POSITIVE_Y=1]="POSITIVE_Y",e[e.NEGATIVE_X=2]="NEGATIVE_X",e[e.NEGATIVE_Y=3]="NEGATIVE_Y"})(v||(v={}));const C=oe.Custom1;var ne,P;(function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"})(ne||(ne={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(P||(P={}));const ae=oe.Custom2,ee=Mt(),W=Math.PI/2,ge=oe.Custom1,vs=oe.Custom2;function tr(e){return(e.type==="building-scene-3d"?e:null)!=null}class sr extends Oe{constructor(t,a){const r=Ie(a),i=r?Jt:je,n=i*Kt,s=je,o={renderOccluded:w.OccludeAndTransparent,isDecoration:!0},u=new B({...o,width:i}),d=new B({...o,width:n}),c=new B({...o,width:s});super({view:t,...ns,...Cs({isCorner:r,unfocusedMaterial:u,focusedMaterial:d,outlineMaterial:c})}),this._themeHandle=we(()=>t.effectiveTheme.accentColor,g=>{const h=A.toUnitRGBA(g);u.setParameters({color:h}),d.setParameters({color:h}),c.setParameters({color:h})},$e)}destroy(){this._themeHandle.remove(),super.destroy()}}function Cs({isCorner:e,unfocusedMaterial:t,focusedMaterial:a,outlineMaterial:r}){const i=e?[R(1,0,0),R(0,0,0),R(0,1,0)]:[R(1,0,0),R(-1,0,0)];return{renderObjects:[new b(U(t,i),_.Unfocused|ge),new b(U(a,i),_.Focused|ge),new b(U(r,i),vs)],collisionType:{type:"line",paths:[i]},radius:e?Zt:Qt,state:ge}}class rr extends Oe{constructor(t,a){const r=new as({transparent:!0,writeDepth:!1,renderOccluded:w.Opaque,isDecoration:!0}),i=st.calloutWidth,n=new B({width:i,renderOccluded:w.OccludeAndTransparent,isDecoration:!0});super({view:t,...Es({imageMaterial:r,calloutMaterial:n})}),this._currentTexture=null,this._themeHandle=we(()=>t.effectiveTheme.accentColor,s=>{const o=Gt(s,.5),u=et(s),d=this._currentTexture,c=a(o,u);r.setParameters({textureId:c.texture.id}),n.setParameters({color:A.toUnitRGBA(s)}),this._currentTexture=c,d==null||d.release()},$e)}destroy(){var t;this._themeHandle.remove(),(t=this._currentTexture)==null||t.release(),super.destroy()}}function Es({imageMaterial:e,calloutMaterial:t}){const{focusMultiplier:a,calloutLength:r,discRadius:i}=st,n=i*a,s=(c,g)=>{const h=[0,1,2,2,3,0];return new Ft(g,[[se.POSITION,new ye([r-c,-c,0,r+c,-c,0,r+c,c,0,r-c,c,0],h,3,!0)],[se.UV0,new ye([0,0,1,0,1,1,0,1],h,2,!0)]])},o=U(t,[[0,0,0],[r-i,0,0]]),u=U(t,[[0,0,0],[r-n,0,0]]),d=C;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[r,0,0]},focusMultiplier:a,radius:i,renderObjects:[new b(s(i,e),_.Unfocused|d),new b(o,_.Unfocused|d),new b(s(n,e),_.Focused|d),new b(u,_.Focused|d)],state:d}}var be;(function(e){e[e.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",e[e.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"})(be||(be={}));class ir extends Oe{constructor(t,a){const r=new B({width:1,renderOccluded:w.OccludeAndTransparent,isDecoration:!0}),i=new J({cullFace:K.Back,renderOccluded:w.Opaque,isDecoration:!0}),n=new J({cullFace:K.Back,renderOccluded:w.Opaque,isDecoration:!0}),s=new J({cullFace:K.Back,renderOccluded:w.Opaque,isDecoration:!0}),o=new J({writeDepth:!1,cullFace:K.Front,renderOccluded:w.Transparent,isDecoration:!0});super({view:t,...As({offsetMode:a,tubeMaterial:i,tipMaterial:n,capMaterial:s,outlineMaterial:o,calloutMaterial:r})}),this._themeHandle=we(()=>t.effectiveTheme.accentColor,u=>{const d=et(u),c=A.toUnitRGBA(u),g=A.toUnitRGBA(d),h=A.toUnitRGBA(A.blendColors(d,u,.4)),f=A.toUnitRGBA(A.blendColors(d,u,.14));r.setParameters({color:c}),i.setParameters({color:f}),n.setParameters({color:g}),s.setParameters({color:h}),o.setParameters({color:c})},$e)}destroy(){this._themeHandle.remove(),super.destroy()}}function As({offsetMode:e,tubeMaterial:t,tipMaterial:a,capMaterial:r,outlineMaterial:i,calloutMaterial:n}){const s=e===be.CENTER_ON_CALLOUT?te:0,o=[R(s,0,-Ge/2),R(s,0,Ge/2)],u=Rs(o),d=Be({vertices:o,padding:0,materials:{tube:t,tip:a,cap:r}}),c=Be({vertices:o,padding:es,materials:{tube:i,tip:i,cap:i}}),g=U(n,[[s,0,0],[s-te,0,0]]),h=U(n,[[s,0,0],[s-te,0,0]]);return{renderObjects:[...d.normal.map(f=>new b(f,_.Unfocused|C)),...c.normal.map(f=>new b(f,_.Unfocused|C)),new b(g,_.Unfocused|C|ae),...d.focused.map(f=>new b(f,_.Focused|C)),...c.focused.map(f=>new b(f,_.Focused|C)),new b(h,_.Focused|C|ae)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[u]},collisionPriority:1,radius:tt,state:C}}function Be({vertices:e,padding:t,materials:a}){const r=i=>{const n=e.slice(0),s=T(l.get(),n[0],n[1]);N(s,s);const o=T(l.get(),n[n.length-1],n[n.length-2]);if(N(o,o),t>0){const G=p(ie(),o,-t);n[n.length-1]=m(G,G,n[n.length-1]);const k=p(ie(),s,-t);n[0]=m(k,k,n[0])}const u=i?ts:1,d=fe*u,c=tt*u,g=xe(X.get());if(t>0){const G=d/4,k=re(l.get(),0,G,0),Z=1+t/G;Le(g,g,k),Ze(g,g,re(l.get(),Z,Z,Z)),Le(g,g,p(k,k,-1/Z))}const h=xe(ue()),f=R(0,1,0),O=Ue(ue(),Ve(ke.get(),f,o));O[12]=n[n.length-1][0],O[13]=n[n.length-1][1],O[14]=n[n.length-1][2],q(O,O,g);const V=a.tube,y=Ps(ss*(i?rs:1)+t,n,V);y.transformation=h;const $=[y],de=a.tip,j=He(de,d,c,24,!1,!1,!0);j.transformation=O,$.push(j);const Y=a.cap,le=He(Y,d,c,24,!1,!0,!1);le.transformation=O,$.push(le);const x=Ue(ue(),Ve(ke.get(),f,s));return x[12]=n[0][0],x[13]=n[0][1],x[14]=n[0][2],q(x,x,g),$.push(j.instantiate({transformation:x})),$.push(le.instantiate({transformation:x})),$};return{normal:r(!1),focused:r(!0)}}function Ps(e,t,a){const r=[];for(let n=0;n<12;n++){const s=n/12*2*Math.PI;r.push([Math.cos(s)*e,Math.sin(s)*e])}return Bt(a,r,t,[],[],!1)}function Rs(e,t){const a=T(ie(),e[e.length-1],e[e.length-2]);N(a,a),p(a,a,fe),m(a,a,e[e.length-1]);{const r=T(ie(),e[0],e[1]);return N(r,r),p(r,r,fe),m(r,r,e[0]),[r,...e,a]}}const Ms=Object.freeze(Object.defineProperty({__proto__:null,build:rt},Symbol.toStringTag,{value:"Module"}));export{Zs as A,C,Ie as E,be as H,ir as I,Ks as L,P as M,Js as R,ae as S,vs as U,er as V,ne as _,qs as a,hs as b,Fs as c,Gs as d,Ds as e,gs as f,rr as g,ls as h,me as i,Qs as j,ge as k,Bs as l,Xs as m,Ys as p,Ws as r,js as s,us as t,zs as u,sr as v,tr as x};