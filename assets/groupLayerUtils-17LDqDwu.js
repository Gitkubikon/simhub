import{$ as m,j as p}from"./utils-CgMKjdVW.js";import{h4 as o,ey as f,eP as v,eJ as d,eL as n,eN as I}from"./index-_cfZD3Ca.js";const c="Group Layer",g="group-layer-save",P="group-layer-save-as",s=n.GROUP_LAYER_MAP;function i(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function A(e){return{isValid:f(e,s),errorMessage:`Layer.portalItem.typeKeywords should have '${s}'`}}function u(e,r){return{...v(e,"web-map",!0),initiator:r}}function l(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function L(e,r){r.title||(r.title=e.title),d(r,n.METADATA),I(r,s)}async function N(e,r){return m({layer:e,itemType:c,validateLayer:i,validateItem:A,createJSONContext:a=>u(a,e),createItemData:l,errorNamePrefix:g,saveResources:async(a,t)=>(e.sourceIsPortalItem||await a.removeAllResources().catch(()=>{}),o(e.resourceReferences,t))},r)}async function x(e,r,a){return p({layer:e,itemType:c,validateLayer:i,createJSONContext:t=>u(t,e),createItemData:l,errorNamePrefix:P,newItem:r,setItemProperties:L,saveResources:(t,y)=>o(e.resourceReferences,y)},a)}export{N as save,x as saveAs};