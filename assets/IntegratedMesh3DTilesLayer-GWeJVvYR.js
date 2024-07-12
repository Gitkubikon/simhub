import{en as j,eo as U,ep as V,g4 as X,eq as k,gc as W,gd as q,I as b,az as w,ge as $,bM as g,cx as F,dD as p,cy as _,du as S,fE as E,gf as I,gg as T,gh as D,gi as d,b as G,er as R,bZ as K,gj as z,gk as P,n as N,gl as Z,e as m,y as u,gm as O,ev as Q,a as B,Z as C,Q as v}from"./index-_cfZD3Ca.js";let y=class extends j(U(V(X(k(W(q(C))))))){constructor(a){super(a),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(a){this._set("elevationInfo",a),this._validateElevationInfo()}_verifyArray(a,i){if(!Array.isArray(a)||a.length<i)return!1;for(const o of a)if(typeof o!="number")return!1;return!0}_initFullExtent(a){var L,M;const i=(L=a.root)==null?void 0:L.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const o=(M=a.root)==null?void 0:M.transform,c=v();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=$(t[0]),n=$(t[1]),s=t[4],r=$(t[2]),e=$(t[3]),h=t[5];this.fullExtent=new w({xmin:l,ymin:n,zmin:s,xmax:r,ymax:e,zmax:h,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=g(t[0],t[1],t[2]),n=t[3]/Math.sqrt(3),s=v();F(s,l,g(n,n,n));const r=v();if(p(r,l,g(n,n,n)),o&&this._verifyArray(o,16)){const x=o;_(c,s,x),S(s,c),_(c,r,x),S(r,c)}E(s,I,0,s,b.WGS84,0,1),E(r,I,0,r,b.WGS84,0,1);const e=v(),h=v();T(e,s,r),D(h,s,r),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:h[0],ymax:h[1],zmax:h[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=g(t[0],t[1],t[2]),n=g(t[3],t[4],t[5]),s=g(t[6],t[7],t[8]),r=g(t[9],t[10],t[11]),e=[];for(let f=0;f<8;++f)e.push(v());if(p(e[0],l,n),p(e[0],e[0],s),p(e[0],e[0],r),d(e[1],l,n),p(e[1],e[1],s),p(e[1],e[1],r),p(e[2],l,n),d(e[2],e[2],s),p(e[2],e[2],r),d(e[3],l,n),d(e[3],e[3],s),p(e[3],e[3],r),p(e[4],l,n),p(e[4],e[4],s),d(e[4],e[4],r),d(e[5],l,n),p(e[5],e[5],s),d(e[5],e[5],r),p(e[6],l,n),d(e[6],e[6],s),d(e[6],e[6],r),d(e[7],l,n),d(e[7],e[7],s),d(e[7],e[7],r),o&&this._verifyArray(o,16)){const f=o;for(let A=0;A<8;++A)_(e[A],e[A],f)}const h=g(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),x=g(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let f=0;f<8;++f)E(e[f],I,0,e[f],b.WGS84,0,1),T(x,x,e[f]),D(h,h,e[f]);this.fullExtent=new w({xmin:x[0],ymin:x[1],zmin:x[2],xmax:h[0],ymax:h[1],zmax:h[2],spatialReference:this.spatialReference})}}async load(a){return this.addResolvingPromise(this._doLoad(a)),this}async _doLoad(a){const i=a!=null?a.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:o=>{var c;if((c=o.typeKeywords)!=null&&c.includes("IntegratedMesh"))return!0;throw new G("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},a)}catch(o){R(o)}this.url&&await K(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(c=>{this._initFullExtent(c.data)},c=>{R(c)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const a=this.elevationInfo,i="Integrated mesh 3d tiles layers";z(N.getLogger(this),P(i,"absolute-height",a)),z(N.getLogger(this),Z(i,a))}};m([u({type:["IntegratedMesh3DTilesLayer"]})],y.prototype,"operationalLayerType",void 0),m([u({type:b})],y.prototype,"spatialReference",void 0),m([u({type:w})],y.prototype,"fullExtent",void 0),m([u(O)],y.prototype,"elevationInfo",null),m([u({type:["show","hide"]})],y.prototype,"listMode",void 0),m([u(Q)],y.prototype,"url",void 0),m([u({readOnly:!0})],y.prototype,"type",void 0),m([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],y.prototype,"path",void 0),m([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],y.prototype,"minScale",void 0),m([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],y.prototype,"maxScale",void 0),y=m([B("esri.layers.IntegratedMesh3DTilesLayer")],y);const J=y;export{J as default};