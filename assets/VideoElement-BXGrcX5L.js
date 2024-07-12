import{e as s,a as L,hU as at,gz as A,n as B,y as c,aw as h,g0 as ft,I as ct,nW as mt,hD as S,b as Y,lZ as v,ln as gt,cv as F,et as Q,bj as tt,nX as z,nY as ot,j as et,c_ as x,bk as Pt,nZ as k,az as ut,ge as vt,n_ as rt,n$ as xt,by as wt,be as Rt,o0 as bt,eq as $t,i1 as It,iw as Ot,go as jt,bv as it,bA as Lt,bw as Tt,bz as Ht,o1 as pt,bB as Mt,o2 as _t,bZ as Nt,bE as St,bF as Wt,o3 as Et}from"./index-Cz76sqxV.js";import{p as Ct}from"./resourceExtension-B1X9jbnP.js";import{p as R,j as ht}from"./MediaElementView-Cgqyrzfk.js";let X=class extends at{projectOrWarn(t,e){if(t==null)return t;const{geometry:n,pending:o}=A(t,e);return o?null:o||n?n:(B.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:e}),null)}};X=s([L("esri.layers.support.GeoreferenceBase")],X);const J=X,q=F(),p=x();let U=class extends Pt{};s([c({type:Number,json:{write:!0}})],U.prototype,"x",void 0),s([c({type:Number,json:{write:!0}})],U.prototype,"y",void 0),U=s([L("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],U);let V=class extends at{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([c()],V.prototype,"sourcePoint",void 0),s([c({type:h})],V.prototype,"mapPoint",void 0),V=s([L("esri.layers.support.ControlPointsGeoreference.ControlPoint")],V);let g=class extends ft(J){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,e){const n=ct.fromJSON(e.spatialReference),o=mt(...e.coefficients,1);return t.map(r=>(S(p,r.x,r.y),R(p,p,o),{sourcePoint:r,mapPoint:new h({x:p[0],y:p[1],spatialReference:n})}))}writeControlPoints(t,e,n,o){if(this.transform!=null)t!=null&&d(t[0])&&(e.controlPoints=t.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),e.spatialReference=t[0].mapPoint.spatialReference.toJSON(),e.coefficients=this.transform.slice(0,8));else{const r=new Y("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:o==null?void 0:o.layer,georeference:this});o!=null&&o.messages?o.messages.push(r):B.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const t=this._updateTransform(q);if(t==null||!d(this.controlPoints[0]))return null;const e=this.controlPoints[0].mapPoint.spatialReference;return At(t,this.width,this.height,e)}set coords(t){if(this.controlPoints==null||!d(this.controlPoints[0]))return;const e=this.controlPoints[0].mapPoint.spatialReference;if((t=this.projectOrWarn(t,e))==null)return;const{width:n,height:o}=this,{rings:[[r,i,a,l]]}=t,u={sourcePoint:v(0,o),mapPoint:new h({x:r[0],y:r[1],spatialReference:e})},y={sourcePoint:v(0,0),mapPoint:new h({x:i[0],y:i[1],spatialReference:e})},f={sourcePoint:v(n,0),mapPoint:new h({x:a[0],y:a[1],spatialReference:e})},m={sourcePoint:v(n,o),mapPoint:new h({x:l[0],y:l[1],spatialReference:e})};d(u)&&d(y)&&d(f)&&d(m)&&(st(q,u,y,f,m),this.controlPoints=this.controlPoints.map(({sourcePoint:w})=>(S(p,w.x,w.y),R(p,p,q),{sourcePoint:w,mapPoint:new h({x:p[0],y:p[1],spatialReference:e})})))}get inverseTransform(){return this.transform==null?null:gt(F(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(t==null||this.transform==null||this.controlPoints==null||!d(this.controlPoints[0]))return null;S(p,t.x,t.y);const e=this.controlPoints[0].mapPoint.spatialReference;return R(p,p,this.transform),new h({x:p[0],y:p[1],spatialReference:e})}toSource(t){if(t==null||this.inverseTransform==null||this.controlPoints==null||!d(this.controlPoints[0]))return null;const e=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),(t=A(t,e).geometry)==null?null:(S(p,t.x,t.y),R(p,p,this.inverseTransform),v(p[0],p[1]))}toSourceNormalized(t){const e=this.toSource(t);return e!=null&&(e.x/=this.width,e.y/=this.height),e}_updateTransform(t){const{controlPoints:e,width:n,height:o}=this;if(!(e!=null&&n>0&&o>0))return null;const[r,i,a,l]=e;if(!d(r))return null;const u=r.mapPoint.spatialReference,y=this._projectControlPoint(i,u),f=this._projectControlPoint(a,u),m=this._projectControlPoint(l,u);if(!y.valid||!f.valid||!m.valid||!d(y.controlPoint))return null;t==null&&(t=F());let w=null;return w=d(f.controlPoint)&&d(m.controlPoint)?st(t,r,y.controlPoint,f.controlPoint,m.controlPoint):d(f.controlPoint)?Gt(t,r,y.controlPoint,f.controlPoint):zt(t,r,y.controlPoint),w.every(dt=>dt===0)?null:w}_projectControlPoint(t,e){if(!d(t))return{valid:!0,controlPoint:t};const{sourcePoint:n,mapPoint:o}=t,{geometry:r,pending:i}=A(o,e);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:r}}:(B.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:o.spatialReference,targetSpatialReference:e}),{valid:!1,controlPoint:null})}};function d(t){return(t==null?void 0:t.sourcePoint)!=null&&t.mapPoint!=null}s([c({type:[V],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[U]},coefficients:{type:[Number]},spatialReference:{type:ct}}}}})],g.prototype,"controlPoints",void 0),s([Q("controlPoints")],g.prototype,"readControlPoints",null),s([tt("controlPoints")],g.prototype,"writeControlPoints",null),s([c({clonable:!1})],g.prototype,"coords",null),s([c({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"height",void 0),s([c({readOnly:!0})],g.prototype,"inverseTransform",null),s([c({readOnly:!0})],g.prototype,"transform",null),s([c({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"width",void 0),g=s([L("esri.layers.support.ControlPointsGeoreference")],g);const b=x(),$=x(),W=x(),M=x(),I=x(),O=x(),E=x(),_=x(),D=Math.PI/2;function j(t,e,n){S(t,n.sourcePoint.x,n.sourcePoint.y),S(e,n.mapPoint.x,n.mapPoint.y)}function zt(t,e,n){return j(b,I,e),j($,O,n),z(W,$,b,D),z(M,b,$,D),z(E,O,I,-D),z(_,I,O,-D),nt(t,b,$,W,M,I,O,E,_)}function Gt(t,e,n,o){return j(b,I,e),j($,O,n),j(W,E,o),ot(M,b,$,.5),z(M,W,M,Math.PI),ot(_,I,O,.5),z(_,E,_,Math.PI),nt(t,b,$,W,M,I,O,E,_)}function st(t,e,n,o,r){return j(b,I,e),j($,O,n),j(W,E,o),j(M,_,r),nt(t,b,$,W,M,I,O,E,_)}const Ut=new Array(8).fill(0),Vt=new Array(8).fill(0);function lt(t,e,n,o,r){return t[0]=e[0],t[1]=e[1],t[2]=n[0],t[3]=n[1],t[4]=o[0],t[5]=o[1],t[6]=r[0],t[7]=r[1],t}function nt(t,e,n,o,r,i,a,l,u){return ht(t,lt(Ut,e,n,o,r),lt(Vt,i,a,l,u))}function At(t,e,n,o){const r=k(0,n),i=k(0,0),a=k(e,0),l=k(e,n);return R(r,r,t),R(i,i,t),R(a,a,t),R(l,l,t),new et({rings:[[r,i,a,l,r]],spatialReference:o})}const Z=g,G=x();let T=class extends J{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:n,bottomLeft:o,bottomRight:r}=this;if(e==null||n==null||o==null||r==null)return null;const i=e.spatialReference;return n=this.projectOrWarn(n,i),o=this.projectOrWarn(o,i),r=this.projectOrWarn(r,i),n==null||o==null||r==null?null:new et({rings:[[[o.x,o.y],[e.x,e.y],[n.x,n.y],[r.x,r.y],[o.x,o.y]]],spatialReference:i})}set coords(e){const{topLeft:n}=this;if(n==null)return;const o=n.spatialReference;if((e=this.projectOrWarn(e,o))==null)return;const{rings:[[r,i,a,l]]}=e;this.bottomLeft=new h({x:r[0],y:r[1],spatialReference:o}),this.topLeft=new h({x:i[0],y:i[1],spatialReference:o}),this.topRight=new h({x:a[0],y:a[1],spatialReference:o}),this.bottomRight=new h({x:l[0],y:l[1],spatialReference:o})}toSourceNormalized(e){const{topLeft:n,topRight:o,bottomRight:r,bottomLeft:i}=this;if(e==null||n==null||o==null||r==null||i==null)return null;const a=n.spatialReference;e=e.normalize();const l=A(e,a).geometry;if(l==null)return null;S(G,l.x,l.y);const u=ht(F(),[n.x,n.y,i.x,i.y,o.x,o.y,r.x,r.y],[0,0,0,1,1,0,1,1]);return R(G,G,u),v(G[0],G[1])}};s([c({clonable:!1})],T.prototype,"coords",null),s([c({type:h})],T.prototype,"bottomLeft",void 0),s([c({type:h})],T.prototype,"bottomRight",void 0),s([c({type:h})],T.prototype,"topLeft",void 0),s([c({type:h})],T.prototype,"topRight",void 0),T=s([L("esri.layers.support.CornersGeoreference")],T);const Bt=T;let C=class extends J{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:t,ymin:e,xmax:n,ymax:o,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:a,y:l}=this.extent.center,u=K(a,l,this.rotation);i=[u(t,e),u(t,o),u(n,o),u(n,e)],i.push(i[0])}else i=[[t,e],[t,o],[n,o],[n,e],[t,e]];return new et({rings:[i],spatialReference:r})}set coords(t){if(t==null||this.extent==null)return;const e=this.extent.spatialReference;if(t=this.projectOrWarn(t,e),(t==null?void 0:t.extent)==null)return;const{rings:[[n,o,r]],extent:{center:{x:i,y:a}}}=t,l=vt(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),u=K(i,a,-l),[y,f]=u(n[0],n[1]),[m,w]=u(r[0],r[1]);this.extent=new ut({xmin:y,ymin:f,xmax:m,ymax:w,spatialReference:e}),this.rotation=l}toSourceNormalized(t){const{extent:e,rotation:n}=this;if(t==null||e==null)return null;const{xmin:o,ymin:r,xmax:i,ymax:a,center:l,spatialReference:u}=e;t=t.normalize();const y=A(t,u).geometry;if(y==null)return null;let f=y.x,m=y.y;return n&&([f,m]=K(l.x,l.y,-n)(f,m)),v(rt(f,o,i,0,1),rt(m,a,r,0,1))}};function K(t,e,n){const o=xt(n),r=Math.cos(o),i=Math.sin(o);return(a,l)=>[r*(a-t)+i*(l-e)+t,r*(l-e)-i*(a-t)+e]}s([c({clonable:!1})],C.prototype,"coords",null),s([c({type:ut})],C.prototype,"extent",void 0),s([c({type:Number})],C.prototype,"rotation",void 0),C=s([L("esri.layers.support.ExtentAndRotationGeoreference")],C);const Jt=C;function kt(t){return(t==null?void 0:t.type)==="media"}function Dt(t,e){const n=wt(e);return kt(t)&&!!t.portalItem&&n!=null&&n>Rt.PORTAL_ITEM}function Ft(t,e,n){var y;if(!t||t.type==="control-points")return t;const{coords:o}=t;if(((y=o==null?void 0:o.rings[0])==null?void 0:y.length)!==5)return null;const[r,i,a,l]=o.rings[0],{spatialReference:u}=o;return new Z({controlPoints:[{mapPoint:new h({x:r[0],y:r[1],spatialReference:u}),sourcePoint:v(0,n)},{mapPoint:new h({x:i[0],y:i[1],spatialReference:u}),sourcePoint:v(0,0)},{mapPoint:new h({x:a[0],y:a[1],spatialReference:u}),sourcePoint:v(e,0)},{mapPoint:new h({x:l[0],y:l[1],spatialReference:u}),sourcePoint:v(e,n)}],width:e,height:n})}const Zt={key:"type",base:J,typeMap:{"control-points":Z,corners:Bt,"extent-and-rotation":Jt}},qt={key:"type",base:J,typeMap:{"control-points":Z}};let N=class extends bt($t(It)){constructor(t){super(t),this.georeference=null,this.opacity=1}readGeoreference(t){return Z.fromJSON(t)}writeGeoreference(t,e,n,o){var a;const r=(a=o==null?void 0:o.resources)==null?void 0:a.pendingOperations,i=()=>{const l=Ft(this.georeference,this.contentWidth,this.contentHeight);l&&(t.type!=="control-points"&&B.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${t.type}' has been automatically converted.`),e[n]=l.write({},o))};if(t.type!=="control-points"&&!this.loaded&&r)return e[n]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(t){const{georeference:e,contentWidth:n,contentHeight:o}=this;if(t==null||e==null||n===0||o===0)return null;const r=e.toSourceNormalized(t);return r==null?null:(r.x*=n,r.y*=o,r)}};s([c({types:Zt,json:{write:!0,types:qt}})],N.prototype,"georeference",void 0),s([Q("georeference")],N.prototype,"readGeoreference",null),s([tt("georeference")],N.prototype,"writeGeoreference",null),s([c({json:{read:!1,write:!1}})],N.prototype,"opacity",void 0),N=s([L("esri.layers.support.MediaElementBase")],N);const yt=N;let P=class extends yt{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const e=Ot(t).then(n=>{this._set("content",n)});this.addResolvingPromise(e)}else if(t instanceof HTMLImageElement){const e=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(e)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new Y("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,e,n){return jt(e.url,n)}writeImage(t,e,n,o){if(t==null)return;const r=o==null?void 0:o.portalItem,i=o==null?void 0:o.resources;if(!r||!i)return void(typeof t=="string"&&(e[n]=it(t,o)));const a=Kt(t)?t:null;if(a){if(Lt(a)==null)return void(e[n]=a);const l=it(a,{...o,verifyItemRelativeUrls:o!=null&&o.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Tt.NO);if(r&&l&&!Ht(l))return i.toKeep.push({resource:r.resourceFromPath(l),compress:!1}),void(e[n]=l)}e[n]="<pending>",i.pendingOperations.push(Xt(t).then(l=>{const u=Qt(l,r);e[n]=u.itemRelativeUrl,i.toAdd.push({resource:u,content:{type:"blob",blob:l},compress:!1,finish:y=>{this.image=y.url}})}))}write(t,e){const n=super.write(t,e);return"mediaType"in n&&!n.url&&delete n.mediaType,n}};s([c()],P.prototype,"animationOptions",void 0),s([c({readOnly:!0})],P.prototype,"content",void 0),s([c({readOnly:!0})],P.prototype,"contentWidth",null),s([c({readOnly:!0})],P.prototype,"contentHeight",null),s([c({json:{name:"url",type:String,write:{overridePolicy:(t,e,n)=>({enabled:!Dt(n==null?void 0:n.layer,n==null?void 0:n.origin)})}}})],P.prototype,"image",void 0),s([Q("image",["url"])],P.prototype,"readImage",null),s([tt("image")],P.prototype,"writeImage",null),s([c({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],P.prototype,"type",void 0),P=s([L("esri.layers.support.ImageElement")],P);const ie=P;function Kt(t){return typeof t=="string"&&!pt(t)&&!Mt(t)}async function Xt(t){return typeof t=="string"?pt(t)?_t(t):(await Nt(t,{responseType:"blob"})).data:new Promise(e=>Yt(t).toBlob(e))}function Yt(t){if(t instanceof HTMLCanvasElement)return t;const e=t instanceof HTMLImageElement?t.naturalWidth:t.width,n=t instanceof HTMLImageElement?t.naturalHeight:t.height,o=document.createElement("canvas"),r=o.getContext("2d");return o.width=e,o.height=n,t instanceof HTMLImageElement?r.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&r.putImageData(t,0,0),o}function Qt(t,e){const n=St(),o=`${Wt("media",n)}.${Ct({type:"blob",blob:t})}`;return e.resourceFromPath(o)}let H=class extends yt{constructor(t){super(t),this.autoplay=!0,this.content=null,this.type="video"}load(){const t=this.video;if(typeof t=="string"){const e=document.createElement("video");e.src=t,e.crossOrigin="anonymous",e.autoplay=!0,e.muted=!0,e.loop=!0,e.playsInline=!0,this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)}))}else t instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)})):this.addResolvingPromise(Promise.reject(new Y("video-element:invalid-video-type","Invalid video type",{video:t})));return Promise.resolve(this)}get contentWidth(){var t;return((t=this.content)==null?void 0:t.videoWidth)??0}get contentHeight(){var t;return((t=this.content)==null?void 0:t.videoHeight)??0}set video(t){this.loadStatus==="not-loaded"?this._set("video",t):B.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(t){return new Promise((e,n)=>{var r;const o=Et(t,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?t.play().then(e,n):e()});this.addHandles(o,"canplay"),t.crossOrigin!=="anonymous"&&(t.crossOrigin="anonymous",(r=t.src)!=null&&r.includes("blob:")||(t.src=t.src))})}};s([c()],H.prototype,"autoplay",void 0),s([c({readOnly:!0})],H.prototype,"content",void 0),s([c({readOnly:!0})],H.prototype,"contentWidth",null),s([c({readOnly:!0})],H.prototype,"contentHeight",null),s([c()],H.prototype,"video",null),H=s([L("esri.layers.support.VideoElement")],H);const se=H;export{Z as X,se as a,ie as b,Dt as f,yt as g};