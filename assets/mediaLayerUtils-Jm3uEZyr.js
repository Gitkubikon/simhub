import{$ as p,j as y}from"./utils-CogUDZdo.js";import{h4 as s,eP as f,eI as d,eJ as v,eL as x}from"./index-DG8rgzil.js";const n="Media Layer",I="media-layer-save",E="media-layer-save-as",o=["media-layer:unsupported-source"];function i(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function u(e){return f(e,"portal-item",!0)}function l(e){return e.layerJSON}async function c(e,t){t.extent=e.fullExtent?await d(e.fullExtent):null}async function L(e,t){t.title||(t.title=e.title),await c(e,t),v(t,x.METADATA)}async function A(e,t){return p({layer:e,itemType:n,validateLayer:i,createJSONContext:a=>u(a),createItemData:l,errorNamePrefix:I,supplementalUnsupportedErrors:o,setItemProperties:c,saveResources:(a,r)=>s(e.resourceReferences,r)},t)}async function J(e,t,a){return y({layer:e,itemType:n,validateLayer:i,createJSONContext:r=>u(r),createItemData:l,errorNamePrefix:E,supplementalUnsupportedErrors:o,newItem:t,setItemProperties:L,saveResources:(r,m)=>s(e.resourceReferences,m)},a)}export{A as save,J as saveAs};