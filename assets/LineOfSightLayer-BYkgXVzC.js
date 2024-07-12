import{V as e,e as t,y as s,f as i,a as n,g as r,A as l,k as o,j6 as a,gz as p,K as y,j7 as u,j8 as h,eo as g,eq as v,Z as c}from"./index-DSIPxOWi.js";import{c as f}from"./Analysis-B4LiSSEe.js";import{f as x,u as m}from"./LineOfSightAnalysisTarget-DgKp4JZr.js";import"./persistable-Bz3xp-b5.js";import"./resourceExtension-BScMZjEL.js";const b=e.ofType(x);let w=class d extends f{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(r((()=>this._computeExtent()),(e=>{null==(null==e?void 0:e.pending)&&this._set("extent",null!=e?e.extent:null)}),l))}get targets(){return this._get("targets")||new b}set targets(e){this._set("targets",o(e,this.targets,b))}get spatialReference(){var e;return null!=(null==(e=this.observer)?void 0:e.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[null==(e=this.observer)?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){var e;const t=this.spatialReference;if(null==(null==(e=this.observer)?void 0:e.position)||null==t)return null;const e2=e=>"absolute-height"===h(e.position,e.elevationInfo),s=this.observer.position,i=a(s.x,s.y,s.z,s.x,s.y,s.z);for(const r of this.targets)if(null!=r.position){const e=p(r.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:s,z:n}=e.geometry;y(i,[t,s,n])}}const n=u(i,t);return e2(this.observer)&&this.targets.every(e2)||(n.zmin=void 0,n.zmax=void 0),{pending:null,extent:n}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],w.prototype,"type",void 0),t([s({type:m,json:{read:!0,write:!0}})],w.prototype,"observer",void 0),t([s({cast:i,type:b,nonNullable:!0,json:{read:!0,write:!0}})],w.prototype,"targets",null),t([s({value:null,readOnly:!0})],w.prototype,"extent",void 0),t([s({readOnly:!0})],w.prototype,"spatialReference",null),t([s({readOnly:!0})],w.prototype,"requiredPropertiesForEditing",null),w=t([n("esri.analysis.LineOfSightAnalysis")],w);const j=w,O=e.ofType(x);let E=class extends(g(v(c))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new j,this.opacity=1}initialize(){this.addHandles(r((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),l))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return null==(e=this.analysis)?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new e}set targets(e){var t;o(e,null==(t=this.analysis)?void 0:t.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new j)}};t([s({json:{read:!1},readOnly:!0})],E.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],E.prototype,"operationalLayerType",void 0),t([s({type:m,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],E.prototype,"observer",null),t([s({type:O,json:{read:!0,write:{ignoreOrigin:!0}}})],E.prototype,"targets",null),t([s({nonNullable:!0,json:{read:!1,write:!1}})],E.prototype,"analysis",void 0),t([s({readOnly:!0})],E.prototype,"fullExtent",null),t([s({readOnly:!0})],E.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],E.prototype,"opacity",void 0),t([s({type:["show","hide"]})],E.prototype,"listMode",void 0),E=t([n("esri.layers.LineOfSightLayer")],E);const L=E;export{L as default};