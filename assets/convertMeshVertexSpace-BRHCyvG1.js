import{b3 as a,b as c,gU as i,bn as s}from"./index-Cev3ONi_.js";import{M as v}from"./vertexSpaceConversion-txnqXCyb.js";async function u(e,t,n){await Promise.resolve(),a(n);const r=v(e,t);if(!r)throw new c("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const o=e.cloneAndModifyVertexAttributes(new i({...r,uv:s(e.vertexAttributes.uv),color:s(e.vertexAttributes.color)}),t);return o.transform=null,o}export{u as convertMeshVertexSpace};
