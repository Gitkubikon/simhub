import{f4 as e,fT as t,fU as n}from"./index-DSIPxOWi.js";import{h as s}from"./WorkerHandle-Bq2affGI.js";import{t as r}from"./workerHelper-CgQLvwGd.js";class a extends s{constructor(e){super("EdgeProcessingWorker","extract",{extract:e=>[e.dataBuffer],extractComponentsEdgeLocations:e=>[e.dataBuffer],extractEdgeLocations:e=>[e.dataBuffer]},e)}async process(t,n,s){return s?e(t):function i(e){return{regular:{instancesData:r(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:r(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}}(await this.invoke(new o(t),n))}async extractEdgeLocations(e,t){const n=await this.invokeMethod("extractEdgeLocations",new o(e),t);return r(n)}async extractComponentsEdgeLocations(e,t){const n=await this.invokeMethod("extractComponentsEdgeLocations",new o(e),t);return r(n)}}class o{constructor(e){this.dataBuffer=e.data.buffer,this.writerSettings=e.writerSettings,this.skipDeduplicate=e.skipDeduplicate,this.indices=t(e.indices)?e.indices:e.indices.buffer,this.indicesType=t(e.indices)?"Array":n(e.indices)?"Uint32Array":"Uint16Array",this.indicesLength=e.indicesLength}}export{a};