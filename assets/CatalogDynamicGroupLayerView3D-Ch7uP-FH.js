import{e,y as t,a as i,V as r,h5 as a,cU as s,a0 as n,h6 as d,n as o,cJ as l,p}from"./index-DSIPxOWi.js";import{l as h}from"./LayerView3D-ApO6iJqK.js";import{y as c}from"./LayerView-DMoB2q_T.js";const m=Symbol(),u=p=>{let h=class y extends p{constructor(){super(...arguments),this.layerViews=new r,this._debouncedUpdate=a((async()=>{const{layer:e,parent:t}=this,i=null==t?void 0:t.footprintLayerView;let r=[];const a=this._createQuery();if(a&&i){const{features:t}=await i.queryFeatures(a);this.suspended||(r=t.map((t=>e.acquireLayer(t))))}this.removeHandles(m),this.addHandles(r,m)}))}get creatingLayerViews(){var e;return(null==(e=this.view)?void 0:e.layerViewManager.isCreatingLayerViewsForLayer(this.layer))??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some((e=>e.updating))}enableLayerUpdates(){return s([this._updatingHandles.addWhen((()=>{var e,t;return!1===(null==(t=null==(e=this.parent)?void 0:e.footprintLayerView)?void 0:t.dataUpdating)}),(()=>this.updateLayers())),this._updatingHandles.add((()=>{var e,t,i,r,a;return[this.layer.maximumVisibleSublayers,null==(e=this.layer.parent)?void 0:e.orderBy,null==(i=null==(t=this.parent)?void 0:t.footprintLayerView)?void 0:i.filter,null==(a=null==(r=this.parent)?void 0:r.footprintLayerView)?void 0:a.timeExtent,this.suspended]}),(()=>this.updateLayers())),n((()=>this.removeHandles(m)))])}updateLayers(){this.suspended?this.removeHandles(m):this._updatingHandles.addPromise(d(this._debouncedUpdate()).catch((e=>{o.getLogger(this).error(e)})))}_createQuery(){var e,t;const i=null==(e=this.parent)?void 0:e.footprintLayerView,r=null==(t=this.layer)?void 0:t.parent;if(!i||!r||r.destroyed)return null;const{layer:{maximumVisibleSublayers:a},view:{scale:s}}=this;if(!a)return null;const{itemTypeField:n,itemSourceField:d,itemNameField:o,minScaleField:p,maxScaleField:h,objectIdField:c,orderBy:m}=r,v=l(`${p} IS NULL OR ${s} <= ${p} OR ${p} = 0`,`${h} IS NULL OR ${s} >= ${h}`),w=null==m?void 0:m.find((e=>e.field&&!e.valueExpression)),L=i.createQuery();if(L.returnGeometry=!1,L.num=a,L.outFields=[c,d,o],L.where=l(L.where,v),null!=this.unsupportedItemTypes){const e=`${n} NOT IN (${this.unsupportedItemTypes.map((e=>`'${e}'`))})`;L.where=l(L.where,e)}return(null==w?void 0:w.field)&&(L.orderByFields=[`${w.field} ${"descending"===w.order?"DESC":"ASC"}`],L.outFields.push(w.field)),L}};return e([t({readOnly:!0})],h.prototype,"creatingLayerViews",null),e([t()],h.prototype,"layer",void 0),e([t()],h.prototype,"layerViews",void 0),e([t({readOnly:!0})],h.prototype,"unsupportedItemTypes",void 0),e([t()],h.prototype,"parent",void 0),e([t({readOnly:!0})],h.prototype,"isUpdating",null),h=e([i("esri.views.layers.CatalogDynamicGroupLayerView")],h),h};let v=class extends(u(h(c))){constructor(){super(...arguments),this.type="catalog-dynamic-group-3d",this.layerViews=new r}initialize(){this.addHandles([this.enableLayerUpdates(),p((()=>this.view.stationary),(()=>this.updateLayers()))])}};e([t()],v.prototype,"layerViews",void 0),e([t()],v.prototype,"parent",void 0),e([t()],v.prototype,"view",void 0),v=e([i("esri.views.3d.layers.CatalogDynamicGroupLayerView3D")],v);const w=v;export{w as default};
