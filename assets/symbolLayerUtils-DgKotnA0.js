const __vite__fileDeps=["assets/index-DSIPxOWi.js","assets/index-B_7YxLDX.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{fZ as e,b as r,bZ as o,_ as i,f_ as n,cC as t,f$ as s,Q as c}from"./index-DSIPxOWi.js";let h=a();function a(){return new e(50)}function u(){h=a()}async function l(e,i){var n,t;if(null==(n=e.resource)?void 0:n.href)return function m(e){return o(e,{responseType:"image"}).then((e=>e.data))}(e.resource.href).then((e=>[e.width,e.height]));if(null==(t=e.resource)?void 0:t.primitive)return null!=i?[i,i]:[256,256];throw new r("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}async function f(e,o=null){var d,v;if(!e.isPrimitive){const o=null==(d=e.resource)?void 0:d.href;if(!o)throw new r("symbol:invalid-resource","The symbol does not have a valid resource");const t=h.get(o);if(void 0!==t)return t;const{fetch:s}=await i((()=>import("./index-DSIPxOWi.js").then((e=>e.yF))),__vite__mapDeps([0,1])),v=await s(o,{disableTextures:!0}),y=n(v.referenceBoundingBox,c());return h.put(o,y),y}if(!(null==(v=e.resource)?void 0:v.primitive))throw new r("symbol:invalid-resource","The symbol does not have a valid resource");const y=t(s(e.resource.primitive));if(null!=o)for(let r=0;r<y.length;r++)y[r]*=o;return n(y,c())}export{u as clearBoundingBoxCache,l as computeIconLayerResourceSize,f as computeObjectLayerResourceSize};
