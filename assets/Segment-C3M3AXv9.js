import{e as _,y as p,a as N,S as Q,ke as W,ak as I,cX as g,hD as j,d1 as P,kf as $,kg as B,cY as E,g as K,dD as X,Q as u,kh as k,ki as Z,dv as G,kj as J,cx as w,N as D,e3 as tt,dC as et,bO as M,H as S,du as st,ce as it,J as ot,kk as rt,kl as at}from"./index-Cev3ONi_.js";import{t as nt}from"./LineVisualElement-CCErdA10.js";import{a as U}from"./geodesicLengthMeasurementUtils-B3b8WxVq.js";import{t as R,x as ht}from"./TextOverlayItem-DxWbM_KN.js";let l=class extends Q{get startPosition(){return[this.startX,this.startY]}set startPosition(i){this._set("startX",i[0]),this._set("startY",i[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(i){this._set("endX",i[0]),this._set("endY",i[1])}constructor(i){super(i),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const i=this.color;return`rgba(${i[0]}, ${i[1]}, ${i[2]}, ${i[3]})`}get _lineCap(){return"round"}render(){const{height:i,left:t,top:e,width:s,x1:a,x2:r,y1:m,y2:h}=this._calculateCoordinates(z),n=`stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;return R("div",{classes:{"esri-line-overlay-item":!0},styles:{left:t+"px",top:e+"px",width:s+"px",height:i+"px",visibility:this.visible?"visible":"hidden"}},[R("svg",{width:s,height:i},[R("line",{x1:a,y1:m,x2:r,y2:h,style:n})])])}renderCanvas(i){if(!this.visible)return;i.strokeStyle=this._strokeStyle,i.lineWidth=this.width,i.lineCap=this._lineCap;const t=this._calculateCoordinates(z);i.beginPath(),i.moveTo(t.left+t.x1,t.top+t.y1),i.lineTo(t.left+t.x2,t.top+t.y2),i.stroke()}_calculateCoordinates(i){const t=Math.min(this.startX,this.endX),e=Math.max(this.startX,this.endX),s=Math.min(this.startY,this.endY),a=Math.max(this.startY,this.endY),r=this.width;return i.left=t-r,i.top=s-r,i.width=e-t+2*r,i.height=Math.max(20,a-s+2*r),i.x1=this.startX-t+r,i.y1=this.startY-s+r,i.x2=this.endX-t+r,i.y2=this.endY-s+r,i}};_([p()],l.prototype,"startX",void 0),_([p()],l.prototype,"startY",void 0),_([p()],l.prototype,"endX",void 0),_([p()],l.prototype,"endY",void 0),_([p()],l.prototype,"startPosition",null),_([p()],l.prototype,"endPosition",null),_([p()],l.prototype,"width",void 0),_([p()],l.prototype,"color",void 0),_([p()],l.prototype,"visible",void 0),_([p()],l.prototype,"isDecoration",void 0),_([p({readOnly:!0})],l.prototype,"_strokeStyle",null),l=_([N("esri.views.overlay.LineOverlayItem")],l);const z={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},ct=l;class mt extends nt{constructor(t){super(t),this._handles=new W,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new I([0,0,0,.6]),this._calloutColor=new I([0,0,0,.5]),this._textColor=new I([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProperties(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t,this._textItem&&(this._textItem.isDecoration=t),this._calloutItem&&(this._calloutItem.isDecoration=t)}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){var e;return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!!((e=this.view.overlay)!=null&&e.overlaps(this._textItem,t.textItem))}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:s}=this;if(t!=null&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,x))break;if(t.callout){const a=this._camera,r=t.callout.distance;g(C,C,[0,t.callout.offset]),a.renderToScreen(C,x),j(o,0,1),P(o,o,r),g(o,o,C),a.renderToScreen(o,y),this._showCallout=this._updatePosition(x,y)}else this._textItem.position=[x[0],x[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,x,y))break;this._showCallout=this._updatePosition(x,y),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,x,y))break;this._showText=!0;const a=this._updatePosition(x,y);this._showCallout=t.callout!==!1&&a,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(s)}_computeLabelPositionFromPoint(t,e){const s=this._camera;return s.projectToRenderScreen(t,c),!(c[2]<0||c[2]>1)&&(s.renderToScreen(c,e),!0)}_computeLabelPositionFromCorner(t,e,s,a){if(!t)return!1;const r=this._camera;return F(t.left,1,r,b),$(b,b),F(t.right,0,r,V),g(o,b,V),$(o,o),B(o,o),r.projectToRenderScreen(t.left.endRenderSpace,c),!(c[2]<0||c[2]>1)&&(r.renderToScreen(c,s),P(o,o,e),g(o,o,c),r.renderToScreen(o,a),!0)}_computeLabelPositionFromSegment(t,e,s,a,r){if(!t)return!1;const m=t.segment,h=this._camera;U(m.startRenderSpace,m.endRenderSpace,h,b),j(o,-b[1],b[0]);let n=!1;switch(s){case"top":n=o[1]<0;break;case"bottom":n=o[1]>0;break;case"left":n=o[0]>0;break;case"right":n=o[0]<0}if(n&&$(o,o),E(o)===0)switch(s){case"top":o[1]=1;break;case"bottom":o[1]=-1;break;case"left":o[0]=-1;break;case"right":o[0]=1}return m.eval(lt[t.sampleLocation],q),h.projectToRenderScreen(q,c),!(c[2]<0||c[2]>1)&&(h.renderToScreen(c,a),P(o,o,e),g(o,o,c),h.renderToScreen(o,r),!0)}_updatePosition(t,e){if(e){const s=e[0]-t[0],a=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(s)>Math.abs(a)?s>0?"left":"right":a>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){var t;this._textItem=new ht({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration}),this._calloutItem=new ct({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration}),this.updateLabelPosition(),(t=this.view.overlay)==null||t.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add(K(()=>this.view.state.camera,()=>this.updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function F(i,t,e,s){return i.eval(t,T,O),X(A,T,O),U(T,A,e,s)}function xt(i){switch(i){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const T=u(),A=u(),O=u(),b=k(),V=k(),o=k(),q=u(),c=Z(),C=k(),x=G(),y=G(),lt={start:0,center:.5,end:1};class H{constructor(t=u(),e=u()){this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,s){return J(e,this.startRenderSpace,this.endRenderSpace,t),s&&(w(s,this.endRenderSpace,this.startRenderSpace),D(s,s)),e}createRenderGeometry(t,e){const s=[],a=[],r=(h,n)=>{const d=L;w(d,h,t),s.push([d[0],d[1],d[2]]),a.push([n[0],n[1],n[2]])},m=e.worldUpAtPosition(this.eval(.5,f),tt.get());return r(this.startRenderSpace,m),r(this.endRenderSpace,m),{points:s,normals:a}}static fromPositionAndVector(t,e,s=1){return et(f,e,s),X(f,t,f),new H(M(t),M(f))}}class bt{_projectIn(t,e){this._project?S(t,this.renderSpatialReference,e,this._pcpf):st(e,t)}constructor(t,e,s){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=s,this.type="geodesic",this._start=u(),this._end=u(),this._pcpf=it(s),this._project=ot(s,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,s){if(this._project)if(s){const a=L;rt(this._start,this._end,t,e,a),X(v,e,a),S(e,this._pcpf,e,this.renderSpatialReference),S(v,this._pcpf,v,this.renderSpatialReference),w(s,v,e),D(s,s)}else at(this._start,this._end,t,e),S(e,this._pcpf,e,this.renderSpatialReference);else J(e,this._start,this._end,t),s&&(w(s,this._end,this._start),D(s,s));return e}createRenderGeometry(t,e){const s=[],a=[],r=(h,n)=>{const d=v;w(d,h,t),s.push([d[0],d[1],d[2]]),a.push([n[0],n[1],n[2]])};for(let h=0;h<128;++h){const n=h/127,d=f,Y=L;this.eval(n,d),e.worldUpAtPosition(d,Y),r(d,Y)}return{points:s,normals:a}}}const f=u(),L=u(),v=u();export{bt as _,mt as f,H as m,xt as v};
