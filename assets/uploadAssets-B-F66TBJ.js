import{m as s,bJ as e,a0 as t,mB as o,fV as r,mC as i,bF as l,bZ as c,b3 as u,gG as p,e_ as d,i8 as f,er as g,i0 as w,n as y}from"./index-DSIPxOWi.js";import{h as P,N as b,i as T,o as A,A as j}from"./External-Djr0rIk9.js";import{r as F,n as E,a as S,d as x,c as N,l as D,t as U,u as es,p as ts}from"./uploadAssetErrors-DaJmSTaj.js";import{s as os,u as rs,i as ns}from"./infoFor3D-BTCPmnmy.js";const as={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function i$1(s,e=s=>{},t){return new is(s,e,t)}let is=class n{constructor(s,e=s=>{},t){if(this.onProgress=e,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof s){this._weights={};for(let e=0;e<s;e++){const t=e,o=1/s;this._weights[t]=o,this._progressMap.set(t,0)}}else this._weights=s;this.emitProgress()}emitProgress(){let e=0;for(const[s,t]of this._progressMap.entries())e+=t*this._weights[s];if(1===e&&s("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;for(const[e,t]of this._timingsMap){const e=Math.round(t.end-t.start)/1e3;Math.round(e/s*100)}}this.onProgress(e)}setProgress(t,o){if(this._progressMap.set(t,o),s("enable-feature:esri-3dofl-upload-timings")){const s=performance.now();this._startTime??(this._startTime=s);const r=e(this._timingsMap,t,(()=>({start:s,end:0})));1===o&&(r.end=s)}this.emitProgress()}simulate(s,e){return a((e=>this.setProgress(s,e)),e)}makeOnProgress(s){return e=>this.setProgress(s,e)}};function a(s=s=>{},e=ms){const o=performance.now();s(0);const r=setInterval((()=>{const t=performance.now()-o,r=1-Math.exp(-t/e);s(r)}),ps);return t((()=>{clearInterval(r),s(1)}))}function h(s,e=ls){return o(i(s*us/e))}const ls=10,cs=10,us=8e-6,ps=r(50),ms=r(1e3),ds=1e6,fs=20*ds,hs=2e9,gs=3;async function O(s,e,t){var r;const l=s.length;if(!l)return null==(r=null==t?void 0:t.onProgress)||r.call(t,1),[];const c=i$1(l,null==t?void 0:t.onProgress,"uploadAssets");return Promise.all(s.map(((s,r)=>async function v(s,{layer:e,ongoingUploads:t},r){var l;const c=t.get(s);if(c)return c;if(!function Z(s){return!!s.infoFor3D&&!!s.url}(e))throw new F;if(function I(s,e){const{parsedUrl:t}=e;return null!=t&&s.metadata.externalSources.some((s=>P(s,t)))}(s,e))return null==(l=null==r?void 0:r.onProgress)||l.call(r,1),s;const p=async function k(s,e,t){const{metadata:r}=s,{displaySource:l}=r,c=H(null==l?void 0:l.source,e),p=!!c,f=r.externalSources.length>0,g=p?async function B(s,e,t){return{source:await G(s,e,t),original:!0}}(c,e,t):f?async function R(s,e,t){const r=_(e),{externalSources:l}=s.metadata,c=function q(s,e){for(const t of s){const s=H(t.source,e);if(s)return s}return null}(l,e);if(!c)throw new E;const u=i$1(as.uploadConvertibleSource,null==t?void 0:t.onProgress,"uploadConvertibleSource"),p=await G(c,e,{onProgress:u.makeOnProgress("uploadEditSource")});s.addExternalSources([{source:p,original:!0}]);const d=c.reduce(((s,{asset:e})=>e instanceof File?s+e.size:s),0),f=u.simulate("serviceAssetsToGlb",function m$1(s,e=cs){return o(i(s*us/e))}(d));try{return{source:await V(p,e,r)}}finally{f.remove()}}(s,e,t):async function C(s,e,t){const o=i$1(as.uploadLocalMesh,null==t?void 0:t.onProgress,"uploadLocalMesh"),r=async function L(s,e,t){const o=_(e),r=await s.load(t),i=await r.toBinaryGLTF({origin:r.origin,signal:null==t?void 0:t.signal,ignoreLocalTransform:!0});return u(t),{blob:new Blob([i],{type:"model/gltf-binary"}),assetName:`${d()}.glb`,assetType:o}}(s,e,{...t,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await J([r],e,{...t,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:s.extent.clone(),original:!0}}(s,e,t),w=await g;return u(t),s.addExternalSources([w]),s}(s,e,r);t.set(s,p);try{await p}finally{t.delete(s)}return s}(s,e,{...t,onProgress:c.makeOnProgress(r)}))))}function H(s,e){if(!s)return null;const{infoFor3D:{supportedFormats:t,editFormats:o}}=e,r=j(s),i=new Array;let l=!1;for(let c=0;c<r.length;++c){const s=$(r[c],t);if(!s)return null;o.includes(s.assetType)&&(l=!0),i.push(s)}return l?i:null}function $(s,e){const t=b(s,e);return t?{asset:s,assetType:t}:null}async function G(s,e,t){return J(s.map((s=>async function M(s,e){const{asset:t,assetType:o}=s;if(t instanceof File)return{blob:t,assetName:t.name,assetType:o};const r=await t.toBlob(e);return u(e),{blob:r,assetName:t.assetName,assetType:o}}(s,t))),e,t)}async function J(s,e,t){const o=i$1(as.uploadAssetBlobs,null==t?void 0:t.onProgress,"uploadAssetBlobs"),r=await function z(s,e,t){const o=i$1(s.length,null==t?void 0:t.onProgress,"prepareAssetItems");return Promise.all(s.map((async(s,r)=>{const i=async function W(s,e,t){const{blob:o,assetType:r,assetName:i}=s;let d=null;try{const s=await async function m({data:s,name:e,description:t},o,r){let i=null;try{const f=l(o,"uploads"),g=l(f,"info"),{data:w}=await c(g,{query:{f:"json"},responseType:"json"});u(r);const y=p(o),P=w.maxUploadFileSize*ds,b=y?hs:P,T=y?Math.min(fs,P):fs;if(s.size>b)throw new Error("Data too large");const A=l(f,"register"),{data:j}=await c(A,{query:{f:"json",itemName:(d=e,d.replaceAll("/","_").replaceAll("\\","_")),description:t},responseType:"json",method:"post"});if(u(r),!j.success)throw new Error("Registration failed");const{itemID:F}=j.item;i=l(f,F);const E=l(i,"uploadPart"),S=Math.ceil(s.size/T),x=new Array;for(let e=0;e<S;++e)x.push(s.slice(e*T,Math.min((e+1)*T,s.size)));const N=x.slice().reverse(),D=new Array,U=i$1(S,null==r?void 0:r.onProgress,"uploadItem"),_2=async()=>{for(;0!==N.length;){const s=x.length-N.length,e=N.pop(),t=new FormData,o=U.simulate(s,h(e.size));try{t.append("f","json"),t.append("file",e),t.append("partId",`${s}`);const{data:o}=await c(E,{timeout:0,body:t,responseType:"json",method:"post"});if(u(r),!o.success)throw new Error("Part upload failed")}finally{o.remove()}}};for(let s=0;s<gs&&0!==N.length;++s)D.push(_2());await Promise.all(D);const es=l(i,"commit"),{data:ts}=await c(es,{query:{f:"json",parts:x.map(((s,e)=>e)).join(",")},responseType:"json",method:"post"});if(u(r),!ts.success)throw new Error("Commit failed");return ts.item}catch(f){if(null!=i){const s=l(i,"delete");await c(s,{query:{f:"json"},responseType:"json",method:"post"})}throw f}var d}({data:o,name:i},e.url,t);u(t),d={assetType:r,assetUploadId:s.itemID}}catch(f){g(f),function ss(){return y.getLogger("esri.layers.graphics.sources.support.uploadAssets")}().warnOnce(`Service ${e.url} does not support the REST Uploads API.`)}if(!d){const s=await w(o);if(u(t),!s.isBase64)throw new es;d={assetType:r,assetData:s.data}}if(!d)throw new ts;return{item:d,assetName:i}}(await s,e,{...t,onProgress:o.makeOnProgress(r)});return u(t),i})))}(s,e,{...t,onProgress:o.makeOnProgress("prepareAssetItems")});u(t);const i=r.map((({item:s})=>s)),{uploadResults:d}=await async function K(s,e,t){const o=a(null==t?void 0:t.onProgress);try{const o=await c(l(e.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(s)},method:"post",responseType:"json"});if(u(t),o.data.uploadResults.length!==s.length)throw new S(s.length,o.data.uploadResults.length);return o.data}finally{o.remove()}}(i,e,{...t,onProgress:o.makeOnProgress("uploadAssetItems")});return u(t),s.map(((s,t)=>function Q(s,e,t){const{success:o}=e;if(!o){const{error:t}=e;throw new x(s.assetName,t)}const{assetHash:r}=e,{assetName:i,item:{assetType:l}}=s,{infoFor3D:{supportedFormats:c}}=t,u=os(l,c);if(!u)throw new N(l);return new T(i,u,[new A(`${t.parsedUrl.path}/assets/${r}`,r)])}(r[t],d[t],e)))}async function V(s,e,t){var o;const r=s.map((({assetName:s,parts:e})=>({assetName:s,assetHash:e[0].partHash}))),i=null==(o=e.capabilities)?void 0:o.operations.supportsAsyncConvert3D,c={f:"json",assets:JSON.stringify(r),transportType:"esriTransportTypeUrl",targetFormat:t,async:i},u=l(e.parsedUrl.path,"convert3D");let p;try{p=(await(i?Y:X)(u,{query:c,responseType:"json",timeout:0})).data}catch(f){throw new D}const{supportedFormats:d}=e.infoFor3D;return p.assets.map((s=>{const e=rs(s.contentType,d);if(!e)throw new N(e);return new T(s.assetName,s.contentType,[new A(s.assetURL,s.assetHash)])}))}function X(s,e){return c(s,e)}async function Y(s,e){const t=(await c(s,e)).data.statusUrl;for(;;){const s=(await c(t,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return c(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(s.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await f(ws)}}function _(s){const{infoFor3D:e}=s,t=rs("model/gltf-binary",e.supportedFormats)??ns("glb",e.supportedFormats);if(!t)throw new U;return t}const ws=r(1e3);export{O as uploadAssets};
