import{gN as e}from"./index-DSIPxOWi.js";import{R as t,D as i,U as s,V as a,k as r}from"./Tick-DYjp9NXF.js";import{n as l,an as n,a as o,ar as h,ak as c,af as d,au as g,at as p,av as y,aw as b,am as m,w as f,ax as _,ay as x,az as v,ag as w,s as k,aA as D,r as R,E as A,ap as P,i as T}from"./Theme-BWSWhkMY.js";import{s as L}from"./ColorSet-Dk-MXJxU.js";import{l as j}from"./DefaultTheme-B_ukJDZB.js";class N extends l{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)})}_afterNew(){super._afterNew()}_beforeChanged(){super._beforeChanged(),this._display.clear(),this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds()),this.isDirty("radius")&&(this._display.radius=this.get("radius"),this.markDirtyBounds()),this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*v,this.markDirtyBounds()),this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds()),this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds()),this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds())}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialText"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:l.classNames.concat([N.className])});class C extends n{constructor(){super(...arguments),Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._textKeys.push("textType","kerning"),super._afterNew()}_makeText(){this._text=this.children.push(N.new(this._root,{}))}baseRadius(){const e=this.getPrivate("radius",0),t=this.getPrivate("innerRadius",0),i=this.get("baseRadius",0);return t+p(i,e-t)}radius(){const e=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(e?-1:1)}_updateChildren(){if(super._updateChildren(),this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){const e=this.get("textType","adjusted"),t=this.get("inside",!1),i=this.get("orientation");let s=w(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0)),this._text.set("inside",t);const a=x(s),r=_(s);let l=this.baseRadius(),n=this.radius();if(this._display.angle=0,"circular"==e)this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this.setRaw("x",void 0),this.setRaw("y",void 0),this._text.set("orientation",i),this._text.set("radius",n);else{0==l&&(s=0,n=0);let t=n*r,o=n*a;"radial"==e?(this.setRaw("x",t),this.setRaw("y",o),s<90||s>270||"auto"!=i?(this._display.angle=s,this._flipped=!1):(this._display.angle=s+180,this._flipped=!0),this._dirty.rotation=!1):"adjusted"==e?(this.setRaw("centerX",h),this.setRaw("centerY",h),this.setRaw("x",t),this.setRaw("y",o)):"regular"==e&&(this.setRaw("x",t),this.setRaw("y",o))}this.markDirtyPosition(),this.markDirtyBounds()}}_updatePosition(){const e=this.get("textType","regular"),t=this.get("inside",!1);let i=0,s=0,a=this.get("labelAngle",0),r=this.localBounds(),l=r.right-r.left,n=r.bottom-r.top;if("radial"==e){if(this._flipped){let e=this.get("centerX");e instanceof d&&(l*=1-2*e.value),i=l*_(a),s=l*x(a)}}else t||"adjusted"!=e||(i=l/2*_(a),s=n/2*x(a));this.setRaw("dx",i),this.setRaw("dy",s),super._updatePosition()}get text(){return this._text}}Object.defineProperty(C,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"}),Object.defineProperty(C,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:n.classNames.concat([C.className])});const S=Math.abs,O=Math.atan2,I=Math.cos,M=Math.max,B=Math.min,F=Math.sin,H=Math.sqrt,X=1e-12,Y=Math.PI,z=Y/2,re=2*Y;function W(e){return e>=1?z:e<=-1?-z:Math.asin(e)}function U(e){return e.innerRadius}function K(e){return e.outerRadius}function q(e){return e.startAngle}function E(e){return e.endAngle}function G(e){return e&&e.padAngle}function Q(e,t,i,s,a,r,l){var n=e-i,o=t-s,h=(l?r:-r)/H(n*n+o*o),c=h*o,d=-h*n,g=e+c,p=t+d,y=i+c,b=s+d,m=(g+y)/2,f=(p+b)/2,_=y-g,x=b-p,v=_*_+x*x,w=a-r,k=g*b-y*p,D=(x<0?-1:1)*H(M(0,w*w*v-k*k)),R=(k*x-_*D)/v,A=(-k*_-x*D)/v,P=(k*x+_*D)/v,T=(-k*_+x*D)/v,L=R-m,j=A-f,S=P-m,O=T-f;return L*L+j*j>S*S+O*O&&(R=P,A=T),{cx:R,cy:A,x01:-c,y01:-d,x11:R*(a/w-1),y11:A*(a/w-1)}}function Z(){var e=U,t=K,i=r(0),s=null,l=q,n=E,o=G,h=null,c=a(u);function u(){var a,r,d=+e.apply(this,arguments),g=+t.apply(this,arguments),p=l.apply(this,arguments)-z,y=n.apply(this,arguments)-z,b=S(y-p),m=y>p;if(h||(h=a=c()),g<d&&(r=g,g=d,d=r),g>X)if(b>re-X)h.moveTo(g*I(p),g*F(p)),h.arc(0,0,g,p,y,!m),d>X&&(h.moveTo(d*I(y),d*F(y)),h.arc(0,0,d,y,p,m));else{var f,_,x=p,v=y,w=p,k=y,D=b,R=b,A=o.apply(this,arguments)/2,P=A>X&&(s?+s.apply(this,arguments):H(d*d+g*g)),T=B(S(g-d)/2,+i.apply(this,arguments)),L=T,j=T;if(P>X){var M=W(P/d*F(A)),le=W(P/g*F(A));(D-=2*M)>X?(w+=M*=m?1:-1,k-=M):(D=0,w=k=(p+y)/2),(R-=2*le)>X?(x+=le*=m?1:-1,v-=le):(R=0,x=v=(p+y)/2)}var ne=g*I(x),oe=g*F(x),ue=d*I(k),he=d*F(k);if(T>X){var ce,de=g*I(v),ge=g*F(v),pe=d*I(w),ye=d*F(w);if(b<Y)if(ce=function J(e,t,i,s,a,r,l,n){var o=i-e,h=s-t,c=l-a,d=n-r,g=d*o-c*h;if(!(g*g<X))return[e+(g=(c*(t-r)-d*(e-a))/g)*o,t+g*h]}(ne,oe,pe,ye,de,ge,ue,he)){var be=ne-ce[0],me=oe-ce[1],fe=de-ce[0],_e=ge-ce[1],xe=1/F(function V(e){return e>1?0:e<-1?Y:Math.acos(e)}((be*fe+me*_e)/(H(be*be+me*me)*H(fe*fe+_e*_e)))/2),ve=H(ce[0]*ce[0]+ce[1]*ce[1]);L=B(T,(d-ve)/(xe-1)),j=B(T,(g-ve)/(xe+1))}else L=j=0}R>X?j>X?(f=Q(pe,ye,ne,oe,g,j,m),_=Q(de,ge,ue,he,g,j,m),h.moveTo(f.cx+f.x01,f.cy+f.y01),j<T?h.arc(f.cx,f.cy,j,O(f.y01,f.x01),O(_.y01,_.x01),!m):(h.arc(f.cx,f.cy,j,O(f.y01,f.x01),O(f.y11,f.x11),!m),h.arc(0,0,g,O(f.cy+f.y11,f.cx+f.x11),O(_.cy+_.y11,_.cx+_.x11),!m),h.arc(_.cx,_.cy,j,O(_.y11,_.x11),O(_.y01,_.x01),!m))):(h.moveTo(ne,oe),h.arc(0,0,g,x,v,!m)):h.moveTo(ne,oe),d>X&&D>X?L>X?(f=Q(ue,he,de,ge,d,-L,m),_=Q(ne,oe,pe,ye,d,-L,m),h.lineTo(f.cx+f.x01,f.cy+f.y01),L<T?h.arc(f.cx,f.cy,L,O(f.y01,f.x01),O(_.y01,_.x01),!m):(h.arc(f.cx,f.cy,L,O(f.y01,f.x01),O(f.y11,f.x11),!m),h.arc(0,0,d,O(f.cy+f.y11,f.cx+f.x11),O(_.cy+_.y11,_.cx+_.x11),m),h.arc(_.cx,_.cy,L,O(_.y11,_.x11),O(_.y01,_.x01),!m))):h.arc(0,0,d,k,w,m):h.lineTo(ue,he)}else h.moveTo(0,0);if(h.closePath(),a)return h=null,a+""||null}return u.centroid=function(){var i=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,s=(+l.apply(this,arguments)+ +n.apply(this,arguments))/2-Y/2;return[I(s)*i,F(s)*i]},u.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:r(+t),u):e},u.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:r(+e),u):t},u.cornerRadius=function(e){return arguments.length?(i="function"==typeof e?e:r(+e),u):i},u.padRadius=function(e){return arguments.length?(s=null==e?null:"function"==typeof e?e:r(+e),u):s},u.startAngle=function(e){return arguments.length?(l="function"==typeof e?e:r(+e),u):l},u.endAngle=function(e){return arguments.length?(n="function"==typeof e?e:r(+e),u):n},u.padAngle=function(e){return arguments.length?(o="function"==typeof e?e:r(+e),u):o},u.context=function(e){return arguments.length?(h=e??null,u):h},u}class $ extends o{constructor(){super(...arguments),Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:Z()})}_getTooltipPoint(){let e=this.get("tooltipX"),t=this.get("tooltipY"),i=0,s=0;A(e)&&(i=e),A(t)&&(s=t);let a=this.get("radius",0),r=this.get("innerRadius",0);return a+=this.get("dRadius",0),r+=this.get("dInnerRadius",0),r<0&&(r=a+r),e instanceof d&&(i=this.ix*(r+(a-r)*e.value)),t instanceof d&&(s=this.iy*(r+(a-r)*t.value)),this.get("arc")>=360&&0==r&&(i=0,s=0),{x:i,y:s}}_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||this.isDirty("cornerRadius")||this.isDirty("shiftRadius"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){let e=this.get("startAngle",0),t=this.get("arc",0);const i=this._generator;t<0&&(e+=t,t*=-1),t>.1&&i.cornerRadius(this.get("cornerRadius",0)),i.context(this._display);let s=this.get("radius",0),a=this.get("innerRadius",0);s+=this.get("dRadius",0),a+=this.get("dInnerRadius",0),a<0&&(a=s+a),i({innerRadius:a,outerRadius:s,startAngle:(e+90)*v,endAngle:(e+t+90)*v});let r=e+t/2;this.ix=_(r),this.iy=x(r);const l=this.get("shiftRadius",0);this.setRaw("dx",this.ix*l),this.setRaw("dy",this.iy*l),this.markDirtyPosition()}}}Object.defineProperty($,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"}),Object.defineProperty($,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:o.classNames.concat([$.className])});class ee extends P{setupDefaultRules(){super.setupDefaultRules();const e=this._root.interfaceColors,t=this.rule.bind(this);t("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:L.new(this._root,{}),width:R,height:R}),t("PieChart").setAll({radius:T(80),startAngle:-90,endAngle:270}),t("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),t("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),t("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),t("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),t("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),t("Slice",["pie"]).states.create("hover",{scale:1.04}),t("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),t("Tick",["pie"]).setAll({location:1}),t("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),t("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),t("FunnelSlice").setAll({interactive:!0,expandDistance:0}),t("FunnelSlice").states.create("hover",{expandDistance:.15}),t("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:h}),t("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:h,rotation:-90}),t("Label",["funnel","vertical"]).setAll({centerY:h,centerX:0}),t("Tick",["funnel"]).setAll({location:1}),t("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),t("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),t("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),t("PyramidSeries").setAll({valueIs:"area"}),t("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),t("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),t("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),t("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),t("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),t("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:h}),t("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:h,rotation:-90}),t("Label",["pyramid","vertical"]).setAll({centerY:h,centerX:0}),t("Tick",["pyramid"]).setAll({location:1}),t("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),t("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:h}),t("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:h,rotation:-90}),t("Label",["pictorial","vertical"]).setAll({centerY:h,centerX:0}),t("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),t("Tick",["pictorial"]).setAll({location:.5});{const i=t("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),j(i,"fill",e,"alternativeBackground")}}}class te extends t{_afterNew(){this._defaultThemes.push(ee.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer)}_processSeries(e){super._processSeries(e),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1)}}Object.defineProperty(te,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty(te,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:t.classNames.concat([te.className])});class ie extends i{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(k.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(k.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(k.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this._makeTicks()})}makeSlice(e){const t=this.slicesContainer.children.push(this.slices.make());return t.on("fill",(()=>{this.updateLegendMarker(e)})),t.on("stroke",(()=>{this.updateLegendMarker(e)})),t._setDataItem(e),e.set("slice",t),this.slices.push(t),t}makeLabel(e){const t=this.labelsContainer.children.push(this.labels.make());return t._setDataItem(e),e.set("label",t),this.labels.push(t),t}_shouldMakeBullet(e){return null!=e.get("value")}makeTick(e){const t=this.ticksContainer.children.push(this.ticks.make());return t._setDataItem(e),e.set("tick",t),this.ticks.push(t),t}_afterNew(){this.fields.push("category","fill"),super._afterNew()}_onDataClear(){const e=this.get("colors");e&&e.reset()}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let e=0,t=0,i=0,s=1/0,a=0;f(this._dataItems,(i=>{let s=i.get("valueWorking",0);e+=s,t+=Math.abs(s)})),f(this._dataItems,(e=>{let r=e.get("valueWorking",0);r>i&&(i=r),r<s&&(s=r),a++;let l=r/t;0==t&&(l=0),e.setRaw("valuePercentTotal",100*l)})),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",e),this.setPrivateRaw("valueAverage",e/a),this.setPrivateRaw("valueAbsoluteSum",t)}}show(t){const i=Object.create(null,{show:{get:()=>super.show}});return e(this,void 0,void 0,(function*(){let e=[];e.push(i.show.call(this,t)),e.push(this._sequencedShowHide(!0,t)),yield Promise.all(e)}))}hide(t){const i=Object.create(null,{hide:{get:()=>super.hide}});return e(this,void 0,void 0,(function*(){let e=[];e.push(i.hide.call(this,t)),e.push(this._sequencedShowHide(!1,t)),yield Promise.all(e)}))}_updateChildren(){super._updateChildren(),this._valuesDirty&&f(this._dataItems,(e=>{e.get("label").text.markDirtyText()})),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&f(this._dataItems,(e=>{this.updateLegendValue(e)})),this._arrange()}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),f(this.dataItems,(e=>{this._updateTick(e)}))}_afterChanged(){super._afterChanged(),this._arrange()}processDataItem(e){if(super.processDataItem(e),null==e.get("fill")){let t=this.get("colors");t&&e.setRaw("fill",t.next())}}showDataItem(t,i){const s=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return e(this,void 0,void 0,(function*(){const e=[s.showDataItem.call(this,t,i)];A(i)||(i=this.get("stateAnimationDuration",0));const a=this.get("stateAnimationEasing");let r=t.get("value");const l=t.animate({key:"valueWorking",to:r,duration:i,easing:a});l&&e.push(l.waitForStop());const n=t.get("tick");n&&e.push(n.show(i));const o=t.get("label");o&&e.push(o.show(i));const h=t.get("slice");h&&e.push(h.show(i)),h.get("active")&&h.states.applyAnimate("active"),yield Promise.all(e)}))}hideDataItem(t,i){const s=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return e(this,void 0,void 0,(function*(){const e=[s.hideDataItem.call(this,t,i)],a=this.states.create("hidden",{});A(i)||(i=a.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const r=a.get("stateAnimationEasing",this.get("stateAnimationEasing")),l=t.animate({key:"valueWorking",to:0,duration:i,easing:r});l&&e.push(l.waitForStop());const n=t.get("tick");n&&e.push(n.hide(i));const o=t.get("label");o&&e.push(o.hide(i));const h=t.get("slice");h.hideTooltip(),h&&e.push(h.hide(i)),yield Promise.all(e)}))}disposeDataItem(e){super.disposeDataItem(e);let t=e.get("label");t&&(this.labels.removeValue(t),t.dispose());let i=e.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=e.get("slice");s&&(this.slices.removeValue(s),s.dispose())}hoverDataItem(e){const t=e.get("slice");t&&!t.isHidden()&&t.hover()}unhoverDataItem(e){const t=e.get("slice");t&&t.unhover()}updateLegendMarker(e){if(e){const t=e.get("slice");if(t){const i=e.get("legendDataItem");if(i){const e=i.get("markerRectangle");f(D,(i=>{null!=t.get(i)&&e.set(i,t.get(i))}))}}}}_arrangeDown(e){if(e){let t=this._getNextDown();e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),f(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.top;e.y+s<t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.bottom}))}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(e){if(e){let t=this._getNextUp();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),f(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.bottom;e.y+s>t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.top}))}}_arrangeRight(e){if(e){let t=0;e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),f(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.left;e.y+s<t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.right}))}}_arrangeLeft(e){if(e){let t=this.labelsContainer.maxWidth();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),f(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.right;e.y+s>t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.left}))}}_updateSize(){super._updateSize(),this.markDirty()}_updateTick(e){}_dispose(){super._dispose();const e=this.chart;e&&e.series.removeValue(this)}}Object.defineProperty(ie,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(ie,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:i.classNames.concat([ie.className])});class se extends te{constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1})}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x:h,y:h})}_prepareChildren(){super._prepareChildren();const e=this.chartContainer,t=e.innerWidth(),i=e.innerHeight(),s=this.get("startAngle",0),a=this.get("endAngle",0),r=this.get("innerRadius");let l=c(0,0,s,a,1);const n=t/(l.right-l.left),o=i/(l.bottom-l.top);let h={left:0,right:0,top:0,bottom:0};if(r instanceof d){let e=r.value,l=Math.min(n,o);e=Math.max(l*e,l-Math.min(i,t))/l,h=c(0,0,s,a,e),this.setPrivateRaw("irModifyer",e/r.value)}l=g([l,h]);const y=this._maxRadius;this._maxRadius=Math.min(n,o);const b=p(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-b*(l.bottom+l.top)/2,dx:-b*(l.right+l.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||y!=this._maxRadius)&&this.series.each((e=>{e._markDirtyKey("startAngle")})),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each((e=>{e._markDirtyKey("innerRadius")}))}radius(e){let t=p(this.get("radius",0),this._maxRadius),i=p(this.get("innerRadius",0),t);if(e){let s=this.series.indexOf(e),a=this.series.length,r=e.get("radius");return null!=r?i+p(r,t-i):i+(t-i)/a*(s+1)}return t}innerRadius(e){const t=this.radius();let i=p(this.get("innerRadius",0),t);if(i<0&&(i=t+i),e){let s=this.series.indexOf(e),a=this.series.length,r=e.get("innerRadius");return null!=r?i+p(r,t-i):i+(t-i)/a*s}return i}_updateSize(){super._updateSize(),this.markDirtyKey("radius")}}Object.defineProperty(se,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(se,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:te.classNames.concat([se.className])});class ae extends ie{_makeSlices(){return new y(b.new({}),(()=>$._new(this._root,{themeTags:m(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template])))}_makeLabels(){return new y(b.new({}),(()=>C._new(this._root,{themeTags:m(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template])))}_makeTicks(){return new y(b.new({}),(()=>s._new(this._root,{themeTags:m(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template])))}processDataItem(e){super.processDataItem(e);const t=this.makeSlice(e);t.on("scale",(()=>{this._updateTick(e)})),t.on("shiftRadius",(()=>{this._updateTick(e)})),t.events.on("positionchanged",(()=>{this._updateTick(e)}));const i=this.makeLabel(e);i.events.on("positionchanged",(()=>{this._updateTick(e)})),this.makeTick(e),t.events.on("positionchanged",(()=>{i.markDirty()}))}_getNextUp(){const e=this.chart;return e?e._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const e=this.chart;return e?-e._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const e=this.chart;if(e){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else{let t=e.get("textType");null!=t&&"aligned"!=t||e.set("textType","adjusted")}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();const t=this.get("startAngle",e.get("startAngle",-90)),i=this.get("endAngle",e.get("endAngle",270))-t;let s=t;const a=e.radius(this);this.setPrivateRaw("radius",a);let r=e.innerRadius(this)*e.getPrivate("irModifyer",1);r<0&&(r=a+r),f(this._dataItems,(e=>{this.updateLegendValue(e);let t=i*e.get("valuePercentTotal")/100;const l=e.get("slice");if(l){l.set("radius",a),l.set("innerRadius",r),l.set("startAngle",s),l.set("arc",t);const i=e.get("fill");l._setDefault("fill",i),l._setDefault("stroke",i)}let n=w(s+t/2);const o=e.get("label");if(o&&(o.setPrivate("radius",a),o.setPrivate("innerRadius",r),o.set("labelAngle",n),"aligned"==o.get("textType"))){let e=a+o.get("radius",0),t=a*x(n);n>90&&n<=270?(o.isHidden()||o.isHiding()||this._lLabels.push({label:o,y:t}),e*=-1,e-=this.labelsContainer.get("paddingLeft",0),o.set("centerX",R),o.setPrivateRaw("left",!0)):(o.isHidden()||o.isHiding()||this._rLabels.push({label:o,y:t}),e+=this.labelsContainer.get("paddingRight",0),o.set("centerX",0),o.setPrivateRaw("left",!1)),o.set("x",e),o.set("y",a*x(n))}s+=t,this._updateTick(e)}))}}}_updateTick(e){const t=e.get("tick"),i=e.get("label"),s=e.get("slice"),a=t.get("location",1);if(t&&i&&s){const e=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*a,r=i.get("labelAngle",0),l=_(r),n=x(r),o=this.labelsContainer,h=o.get("paddingLeft",0),c=o.get("paddingRight",0);let d=0,g=0;d=i.x(),g=i.y();let p=[];if(0!=d&&0!=g){if("circular"==i.get("textType")){const e=i.radius()-i.get("paddingBottom",0),t=i.get("labelAngle",0);d=e*_(t),g=e*x(t)}let t=-c;i.getPrivate("left")&&(t=h),p=[{x:s.x()+e*l,y:s.y()+e*n},{x:d+t,y:g},{x:d,y:g}]}t.set("points",p)}}_positionBullet(e){const t=e.get("sprite");if(t){const i=t.dataItem.get("slice");if(i){const s=i.get("innerRadius",0),a=i.get("radius",0),r=i.get("startAngle",0)+i.get("arc",0)*e.get("locationX",.5),l=s+(a-s)*e.get("locationY",.5);t.setAll({x:_(r)*l,y:x(r)*l})}}}}Object.defineProperty(ae,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(ae,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ie.classNames.concat([ae.className])});export{se as PieChartAm5,ae as PieSeriesAm5};
