import{$ as m,j as o}from"./utils-CogUDZdo.js";import{eI as c,eJ as p,eL as i,eN as u}from"./index-DG8rgzil.js";const s="Image Service",g="imagery-layer-save",v="imagery-layer-save-as",f="imagery-tile-layer-save",d="imagery-tile-layer-save-as";function y(a){var t;if(a.type==="imagery")return{isValid:!0};const{raster:e}=a,r=(e==null?void 0:e.datasetFormat)==="Function"?(t=e.primaryRasters)==null?void 0:t.rasters[0]:e;return{isValid:(r==null?void 0:r.datasetFormat)==="RasterTileServer"&&(r.tileType==="Raster"||r.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function l(a){const e=a.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function I(a,e){const{parsedUrl:r,title:t,fullExtent:n}=a;e.url=r.path,e.title||(e.title=t);try{e.extent=await c(n)}catch{e.extent=void 0}p(e,i.METADATA),a.type==="imagery-tile"&&u(e,i.TILED_IMAGERY)}async function A(a,e){const r=a.type==="imagery"?g:f;return m({layer:a,itemType:s,validateLayer:y,createItemData:l,errorNamePrefix:r},e)}async function h(a,e,r){const t=a.type==="imagery"?v:d;return o({layer:a,itemType:s,validateLayer:y,createItemData:l,errorNamePrefix:t,newItem:e,setItemProperties:I},r)}export{A as save,h as saveAs};