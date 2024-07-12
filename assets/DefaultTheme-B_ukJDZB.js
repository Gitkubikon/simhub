import{ap as e,a5 as t,aq as o,ar as a,r as i,J as n,as as r}from"./Theme-BWSWhkMY.js";function l(e,t,o,a){e.set(t,o.get(a)),o.on(a,(o=>{e.set(t,o)}))}class s extends e{setupDefaultRules(){super.setupDefaultRules();const e=this._root.language,d=this._root.interfaceColors,c=this._root.horizontalLayout,u=this._root.verticalLayout,g=this.rule.bind(this);g("InterfaceColors").setAll({stroke:t.fromHex(15066597),fill:t.fromHex(15987699),primaryButton:t.fromHex(6788316),primaryButtonHover:t.fromHex(6779356),primaryButtonDown:t.fromHex(6872182),primaryButtonActive:t.fromHex(6872182),primaryButtonText:t.fromHex(16777215),primaryButtonStroke:t.fromHex(16777215),secondaryButton:t.fromHex(14277081),secondaryButtonHover:t.fromHex(10724259),secondaryButtonDown:t.fromHex(9276813),secondaryButtonActive:t.fromHex(15132390),secondaryButtonText:t.fromHex(0),secondaryButtonStroke:t.fromHex(16777215),grid:t.fromHex(0),background:t.fromHex(16777215),alternativeBackground:t.fromHex(0),text:t.fromHex(0),alternativeText:t.fromHex(16777215),disabled:t.fromHex(11382189),positive:t.fromHex(5288704),negative:t.fromHex(11730944)});{const e=g("ColorSet");e.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[t.fromHex(6797276)],step:1,reuse:!1,startIndex:0}),e.setPrivate("currentStep",0),e.setPrivate("currentPass",0)}g("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:o(r)}),g("Component").setAll({interpolationDuration:0,interpolationEasing:o(r)}),g("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:a,tooltipY:a,tooltipPosition:"fixed",isMeasured:!0}),g("Sprite").states.create("default",{visible:!0,opacity:1}),g("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1}),g("Graphics").setAll({strokeWidth:1}),g("Chart").setAll({width:i,height:i,interactiveChildren:!1}),g("ZoomableContainer").setAll({width:i,height:i,wheelable:!0,pinchZoom:!0,maxZoomLevel:32,minZoomLevel:1,zoomStep:2,animationEasing:o(r),animationDuration:600}),g("Sprite",["horizontal","center"]).setAll({centerX:a,x:a}),g("Sprite",["vertical","center"]).setAll({centerY:a,y:a}),g("Container",["horizontal","layout"]).setAll({layout:c}),g("Container",["vertical","layout"]).setAll({layout:u}),g("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1}),g("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49}),g("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0}),g("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,strokeWidth:0,width:45,height:45}),g("GrainPattern").setAll({width:200,height:200,colors:[t.fromHex(0)],size:1,horizontalGap:0,verticalGap:0,density:1,minOpacity:0,maxOpacity:.2}),g("LinearGradient").setAll({rotation:90}),g("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:n.new(this._root,{}),layer:30,clickTarget:"itemContainer"}),g("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:c,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:e.translate("Press ENTER to toggle"),role:"checkbox"});{const e=g("Rectangle",["legend","item","background"]);e.setAll({fillOpacity:0}),l(e,"fill",d,"background")}g("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:a,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18}),g("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:i,height:i,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});{const e=g("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});l(e,"fill",d,"disabled"),l(e,"stroke",d,"disabled")}g("Label",["legend","label"]).setAll({centerY:a,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0}),l(g("Label",["legend","label"]).states.create("disabled",{}),"fill",d,"disabled"),g("Label",["legend","value","label"]).setAll({centerY:a,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:i,populateText:!0}),l(g("Label",["legend","value","label"]).states.create("disabled",{}),"fill",d,"disabled"),g("HeatLegend").setAll({stepCount:1}),g("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0}),g("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:i,width:15}),g("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:i,height:15}),g("HeatLegend",["vertical"]).setAll({height:i}),g("HeatLegend",["horizontal"]).setAll({width:i}),g("Label",["heatlegend","start"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}),g("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});{const e=g("Label");e.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1}),l(e,"fill",d,"text")}g("RadialLabel").setAll({textType:"regular",centerY:a,centerX:a,inside:!1,radius:0,baseRadius:i,orientation:"auto",textAlign:"center"}),g("EditableLabel").setAll({editOn:"click",themeTags:["editablelabel"],multiLine:!0}),g("RoundedRectangle",["editablelabel","background"]).setAll({fillOpacity:0,fill:t.fromHex(0),cornerRadiusBL:3,cornerRadiusBR:3,cornerRadiusTL:3,cornerRadiusTR:3,strokeOpacity:0,stroke:t.fromHex(0)}),g("RoundedRectangle",["editablelabel","background"]).states.create("active",{strokeOpacity:.2}),g("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8}),g("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8}),g("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});{const e=g("Tick");e.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0}),l(e,"stroke",d,"grid")}g("Bullet").setAll({locationX:.5,locationY:.5}),g("Tooltip").setAll({position:"absolute",getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:a,centerY:a,animationEasing:o(r),exportable:!1}),g("Polygon").setAll({animationEasing:o(r)}),g("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:t.fromHex(16777215)});{const e=g("Label",["tooltip"]);e.setAll({role:"tooltip",populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0}),l(e,"fill",d,"alternativeText")}g("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:c,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0}),g("Button").states.create("hover",{}),g("Button").states.create("down",{stateAnimationDuration:0}),g("Button").states.create("active",{});{const e=g("RoundedRectangle",["button","background"]);l(e,"fill",d,"primaryButton"),l(e,"stroke",d,"primaryButtonStroke")}l(g("RoundedRectangle",["button","background"]).states.create("hover",{}),"fill",d,"primaryButtonHover"),l(g("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0}),"fill",d,"primaryButtonDown"),l(g("RoundedRectangle",["button","background"]).states.create("active",{}),"fill",d,"primaryButtonActive"),l(g("Graphics",["button","icon"]),"stroke",d,"primaryButtonText"),l(g("Label",["button"]),"fill",d,"primaryButtonText"),g("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:i,role:"button",ariaLabel:e.translate("Zoom Out"),layer:30});{const e=g("RoundedRectangle",["background","button","zoom"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),l(e,"fill",d,"primaryButton")}l(g("RoundedRectangle",["background","button","zoom"]).states.create("hover",{}),"fill",d,"primaryButtonHover"),l(g("RoundedRectangle",["background","button","zoom"]).states.create("down",{stateAnimationDuration:0}),"fill",d,"primaryButtonDown");{const e=g("Graphics",["icon","button","zoom"]);e.setAll({crisp:!0,strokeOpacity:.7,draw:e=>{e.moveTo(0,0),e.lineTo(12,0)}}),l(e,"stroke",d,"primaryButtonText")}g("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:a,centerY:a,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:e.translate("Use up and down arrows to move selection")});{const e=g("RoundedRectangle",["background","resize","button"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),l(e,"fill",d,"secondaryButton"),l(e,"stroke",d,"secondaryButtonStroke")}l(g("RoundedRectangle",["background","resize","button"]).states.create("hover",{}),"fill",d,"secondaryButtonHover"),l(g("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0}),"fill",d,"secondaryButtonDown");{const e=g("Graphics",["resize","button","icon"]);e.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:e=>{e.moveTo(0,.5),e.lineTo(0,12.5),e.moveTo(4,.5),e.lineTo(4,12.5)}}),l(e,"stroke",d,"secondaryButtonText")}g("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"}),g("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"}),g("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:e.translate("Play"),toggleKey:"active"});{const e=g("RoundedRectangle",["play","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),l(e,"fill",d,"primaryButton")}{const e=g("Graphics",["play","icon"]);e.setAll({stateAnimationDuration:0,dx:1,draw:e=>{e.moveTo(0,-5),e.lineTo(8,0),e.lineTo(0,5),e.lineTo(0,-5)}}),l(e,"fill",d,"primaryButtonText")}g("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0}),g("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:e=>{e.moveTo(-4,-5),e.lineTo(-1,-5),e.lineTo(-1,5),e.lineTo(-4,5),e.lineTo(-4,-5),e.moveTo(4,-5),e.lineTo(1,-5),e.lineTo(1,5),e.lineTo(4,5),e.lineTo(4,-5)}}),g("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:e.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});{const e=g("RoundedRectangle",["switch","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),l(e,"fill",d,"primaryButton")}{const e=g("Circle",["switch","icon"]);e.setAll({radius:8,centerY:0,centerX:0,dx:0}),l(e,"fill",d,"primaryButtonText")}g("Graphics",["switch","icon"]).states.create("active",{dx:16}),g("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:o(r)}),g("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:i}),g("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:i}),this.rule("Button",["scrollbar"]).setAll({exportable:!1});{const e=g("RoundedRectangle",["scrollbar","main","background"]);e.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8}),l(e,"fill",d,"fill")}{const e=g("RoundedRectangle",["scrollbar","thumb"]);e.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0}),l(e,"fill",d,"secondaryButton")}l(g("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{}),"fill",d,"secondaryButtonHover"),l(g("RoundedRectangle",["scrollbar","thumb"]).states.create("down",{stateAnimationDuration:0}),"fill",d,"secondaryButtonDown"),g("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:a,width:i,centerX:a,ariaLabel:e.translate("Use up and down arrows to move selection")}),g("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:a,centerY:a,height:i,ariaLabel:e.translate("Use left and right arrows to move selection")});{const e=g("PointedRectangle",["axis","tooltip","background"]);e.setAll({cornerRadius:0}),l(e,"fill",d,"alternativeBackground")}g("Label",["axis","tooltip"]).setAll({role:void 0}),g("Label",["axis","tooltip","y"]).setAll({textAlign:"right"}),g("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"}),g("Label",["axis","tooltip","x"]).setAll({textAlign:"center"}),g("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"}),g("Star").setAll({spikes:5,innerRadius:5,radius:10}),g("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7}),g("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,pointerBaseWidth:0,cornerRadius:3}),g("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"}),g("SpriteResizer").setAll({rotationStep:10,isMeasured:!1}),g("Container",["resizer","grip"]).states.create("hover",{});{const e=g("RoundedRectangle",["resizer","grip"]);e.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12}),l(e,"fill",d,"background"),l(e,"stroke",d,"alternativeBackground")}{const e=g("RoundedRectangle",["resizer","grip","outline"]);e.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20}),e.states.create("hover",{fillOpacity:.3}),l(e,"fill",d,"alternativeBackground")}g("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0}),g("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});{const e=g("Rectangle",["resizer","rectangle"]);e.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1}),l(e,"stroke",d,"alternativeBackground")}g("Graphics",["button","plus","icon"]).setAll({x:a,y:a,draw:e=>{e.moveTo(-4,0),e.lineTo(4,0),e.moveTo(0,-4),e.lineTo(0,4)}}),g("Graphics",["button","minus","icon"]).setAll({x:a,y:a,draw:e=>{e.moveTo(-4,0),e.lineTo(4,0)}}),g("Graphics",["button","home","icon"]).setAll({x:a,y:a,svgPath:"M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"}),g("Button",["zoomtools"]).setAll({marginTop:1,marginBottom:2}),g("ZoomTools").setAll({x:i,centerX:i,y:i,centerY:i,paddingRight:10,paddingBottom:10})}}export{l,s};
