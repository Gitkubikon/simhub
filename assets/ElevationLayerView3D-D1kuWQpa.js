import{b as e,t as r,M as t,l as i,c as o,n as s,e as a,y as l,a as n}from"./index-DSIPxOWi.js";import{s as d,a as c}from"./LercDecoder-Bc-3KfiY.js";import{l as h}from"./LayerView3D-ApO6iJqK.js";import{p as y}from"./TiledLayerView3D-BIihePS5.js";import{y as u}from"./LayerView-DMoB2q_T.js";import"./WorkerHandle-Bq2affGI.js";let f=class extends(y(h(u))){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){var r,t,i;const o=this.view,s=null==(r=o.map)?void 0:r.allLayers,a=s&&s.includes(this.layer),l=null==(i=null==(t=o.map)?void 0:t.ground)?void 0:i.layers,n=l&&l.includes(this.layer);if(a&&!n){const r=new e("layerview:elevation-layer-only",`3D elevation layer '${this.layer.id}' can only be added to layers in map.ground`);this.addResolvingPromise(Promise.reject(r))}this._lercDecoder=d(o.resourceController),this._addTilingSchemeMatchPromise()}destroy(){this._lercDecoder=r(this._lercDecoder)}async fetchTile(e,r){const a=this.layer;if(t(a)){const t=await a.fetchTile(e[0],e[1],e[2],{noDataValue:i,signal:r.signal});return o(r)?void s.getLogger(this).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."):t}const l=this.getTileUrl(e),n=await r.requester.request(l,"binary",r),d=await this._lercDecoder.decode(n,{noDataValue:i},r.signal);if(d)return new c(d);throw new Error("LERC decoding failed")}};a([l()],f.prototype,"layer",void 0),a([l()],f.prototype,"tileInfo",null),f=a([n("esri.views.3d.layers.ElevationLayerView3D")],f);const m=f;export{m as default};