import{g as e,P as r,j as i,ef as s,e as a,a as t}from"./index-DSIPxOWi.js";import{d as n}from"./TileTreeDebugger-CDFY3SV7.js";let l=class extends n{constructor(e){super(e),this.enablePolygons=!1}initialize(){e((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),r)}getTiles(){const e=null!=this.view.basemapTerrain.spatialReference?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((r=>({...r,lij:r.lij,geometry:i.fromExtent(s(r.extent,e))})))}};l=a([t("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],l);export{l as TerrainTileTree3DDebugger};
