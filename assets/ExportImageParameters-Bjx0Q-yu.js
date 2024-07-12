import{e,y as s,a as r,S as i,cJ as a,cK as l}from"./index-DSIPxOWi.js";import{n}from"./floorFilterUtils-2NbRkqHK.js";import{n as o}from"./sublayerUtils-DIUcTD2L.js";const y={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let h=class extends i{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const s=n(this.floors,e);return e.toExportImageJSON(s)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&o(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(y[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const s=!!(null==(e=this.floors)?void 0:e.length),r=this.visibleSublayers.filter((e=>null!=e.definitionExpression||s&&null!=e.floorInfo));return r.length?JSON.stringify(r.reduce(((e,s)=>{const r=n(this.floors,s),i=a(r,s.definitionExpression);return null!=i&&(e[s.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,r=this.scale,t=s=>{s.visible&&(0===r||l(r,s.minScale,s.maxScale))&&(s.sublayers?s.sublayers.forEach(t):e.unshift(s))};s&&s.forEach(t);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((s,r)=>e[r]!==s))?e:i}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};e([s({readOnly:!0})],h.prototype,"dynamicLayers",null),e([s()],h.prototype,"floors",void 0),e([s({readOnly:!0})],h.prototype,"hasDynamicLayers",null),e([s()],h.prototype,"layer",null),e([s({readOnly:!0})],h.prototype,"layers",null),e([s({readOnly:!0})],h.prototype,"layerDefs",null),e([s({type:Number})],h.prototype,"scale",void 0),e([s({readOnly:!0})],h.prototype,"version",null),e([s({readOnly:!0})],h.prototype,"visibleSublayers",null),h=e([r("esri.layers.support.ExportImageParameters")],h);export{h as y};
