import{e,y as i,a as r,n,k4 as s,ab as o,k5 as l,k2 as d}from"./index-DSIPxOWi.js";import{O as p}from"./WhereClause-DYd7Xwn9.js";import{t as f}from"./QueryEngine-DAD9skS_.js";import{i as h}from"./timeSupport-CU-EQyfu.js";const E="updating";function t$1(e){return"updating"===e?null:e}function u$1(e){return"updating"===e}const t=o=>{let l=class extends o{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&n.getLogger(this).error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&n.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var e;if(!(null==(e=this.i3slayer)?void 0:e.definitionExpression))return null;try{const e=p.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return n.getLogger(this).error("definitionExpression is using non standard function"),null;const i=[],r=e.fieldNames;return s(r,this.i3slayer.fields,{missingFields:i}),i.length>0?(n.getLogger(this).error(`definitionExpression references unknown fields: ${i.join(", ")}`),null):(this._definitionExpressionErrors=0,e)}catch(i){return n.getLogger(this).error("Failed to parse definitionExpression: "+i),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(e,i){try{return e.testFeature(i)}catch(r){return this.logError(r),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const i=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where=`(${i}) AND (${r.where})`:r.where=i,r}};return e([i({readOnly:!0})],l.prototype,"parsedDefinitionExpression",null),e([i({readOnly:!0})],l.prototype,"definitionExpressionFields",null),l=e([r("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],l),l},u=n=>{let s=class extends n{get timeExtent(){var e;return h(this.i3slayer,null==(e=this.view)?void 0:e.timeExtent,this._get("timeExtent"))}get mergedFilter(){var e;const{filter:i,timeExtent:r}=this;if(null==r)return i;const n=(null==i?void 0:i.clone())??new o;return null!=r&&(n.timeExtent=(null==(e=n.timeExtent)?void 0:e.intersection(r))??r),n}getTimeFilterDependencies(){const{timeInfo:e}=this.i3slayer;if(null==e)return[];const{startField:i,endField:r}=e;return[i,r]}addTimeFilter(e,i){if(null==i)return;const{timeInfo:r}=this.i3slayer;if(null==r)return;const{startField:n,endField:s,useTime:o}=r;if(!o||null==n&&null==s)return;const d=r.toJSON(),p=i.toJSON();e.push(((e,i)=>function a(e,i,r,n){var s;const o=null==(s=i.attributeInfo)?void 0:s.attributeData;if(null==o)return;const{startTimeField:d,endTimeField:p}=r;if(null!=d&&null==o[d]||null!=p&&null==o[p])return;const h=f(r,n,new m(o));if(null==h)return;const{featureIds:E}=i;l(e,E,h)}(e,i,d,p)))}};return e([i({readOnly:!0})],s.prototype,"timeExtent",null),e([i()],s.prototype,"mergedFilter",null),s=e([r("esri.views.3d.layers.support.TemporalSceneLayerView")],s),s};class m{constructor(e){this.attributeData=e}getAttribute(e,i){return d(this.attributeData[i],e)}getAttributeAsTimestamp(e,i){const r=this.getAttribute(e,i);return"string"==typeof r?new Date(r).getTime():"number"==typeof r||null==r?r:null}}export{t$1 as a,u$1 as b,E as n,t,u};
