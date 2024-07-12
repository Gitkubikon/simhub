const __vite__fileDeps=["assets/groupLayerUtils-CZ8fF8Mi.js","assets/utils-CNFe6p3t.js","assets/index-DSIPxOWi.js","assets/index-B_7YxLDX.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g2 as e,g4 as i,eo as t,ep as s,iV as r,iW as a,eq as l,R as o,iX as n,h5 as d,g as y,be as h,iY as p,eO as u,iZ as b,er as v,gt as c,i_ as m,i$ as f,e as _,y as g,bj as w,et as I,A as L,bd as O,i as S,a as V,Z as A,_ as E,n as M}from"./index-DSIPxOWi.js";import{b as P}from"./fetchService-CJQ8-6Ub.js";const x=Symbol("WebScene");let T=class extends(e(i(t(s(r(a(l(A)))))))){constructor(e){super(e),this.allLayers=new o({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=n(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=d((async(e,i,t)=>{const{save:s,saveAs:r}=await E((()=>import("./groupLayerUtils-CZ8fF8Mi.js")),__vite__mapDeps([0,1,2,3]));switch(e){case m.SAVE:return s(this,i);case m.SAVE_AS:return r(this,t,i)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([y((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&x in e}),(e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(O((()=>this.tables),"before-add",(e=>{e.preventDefault(),M.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),i))}),L),y((()=>this.visible),this._onVisibilityChange.bind(this),S)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===h.USER}_writeLayers(e,i,t,s){const r=[];if(!e)return r;e.forEach((e=>{const i=p(e,s.webmap?s.webmap.getLayerJSONFromResourceInfo(e):null,s);(null==i?void 0:i.layerType)&&r.push(i)})),i.layers=r}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:s,layerType:r}=i;if("GroupLayer"===r&&s)return new u({id:s,portal:null==t?void 0:t.portal})}writePortalItem(e,i){(null==e?void 0:e.id)&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return b(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:P},e).catch((e=>{if(v(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return c(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(m.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(m.SAVE_AS,i,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)||this.addHandles(y((()=>e.visible),(i=>this._onChildVisibilityChange(e,i)),S),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((i=>{i!==e&&(i.visible=!1)}))}_enforceVisibility(e,i){if(!f(this).initialized)return;const t=this.layers;let s=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!s&&(s=t.at(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((e=>{e.visible=i}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((i=>{i.visible=e}))}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};_([g({readOnly:!0,dependsOn:[]})],T.prototype,"allLayers",void 0),_([g({readOnly:!0})],T.prototype,"allTables",void 0),_([g({json:{read:!0,write:!0}})],T.prototype,"blendMode",void 0),_([g()],T.prototype,"fullExtent",void 0),_([g({readOnly:!0})],T.prototype,"sourceIsPortalItem",null),_([g({json:{read:!1,write:{ignoreOrigin:!0}}})],T.prototype,"layers",void 0),_([w("layers")],T.prototype,"_writeLayers",null),_([g({type:["GroupLayer"]})],T.prototype,"operationalLayerType",void 0),_([g({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:"Group Layer"===(null==e?void 0:e.type)&&(null==t?void 0:t.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],T.prototype,"portalItem",null),_([I("web-map","portalItem",["itemId"])],T.prototype,"readPortalItem",null),_([w("web-map","portalItem",{itemId:{type:String}})],T.prototype,"writePortalItem",null),_([g()],T.prototype,"spatialReference",void 0),_([g({json:{read:!1},readOnly:!0,value:"group"})],T.prototype,"type",void 0),_([g({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{"inherited"!==e&&(i[t]=e)}}}}})],T.prototype,"visibilityMode",null),T=_([V("esri.layers.GroupLayer")],T);const j=T;export{j as default};