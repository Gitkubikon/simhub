const __vite__fileDeps=["assets/lclayout-C_Q7wjDk.js","assets/index-DSIPxOWi.js","assets/index-B_7YxLDX.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e,fS as t,g2 as a,g4 as i,V as o,az as r,b as h,n as u,fr as d,fi as p,b3 as c,bJ as y,aw as g,ax as m,e as f,y as L,a as C,Z as k}from"./index-DSIPxOWi.js";import{M,h as E,a as b,w,b as v,c as T,D,I as x}from"./KnowledgeGraphSublayer-CYm-y7ET.js";import{R as N}from"./knowledgeGraphService-qQQwd7TJ.js";import"./FeatureStore-Dpo5Syxq.js";import"./BoundsStore-BQ0MOdb7.js";import"./PooledRBush-DOZnXWx2.js";import"./quickselect-D9ta8ndX.js";import"./QueryEngine-DAD9skS_.js";import"./normalizeUtils-BrH-PrZy.js";import"./normalizeUtilsCommon-BU8xfl77.js";import"./WhereClause-DYd7Xwn9.js";import"./TimeOnly-C5lZbbIX.js";import"./json-omtrO2vq.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-B-uQJqPz.js";import"./utils-DEUXBrCj.js";import"./utils-1_4Re7um.js";import"./ClassBreaksDefinition-Dt1HCCB7.js";import"./optimizedFeatureQueryEngineAdapter--U1rvwBV.js";import"./clientSideDefaults-Cn_svm8L.js";import"./GraphQueryStreaming-DGarY5EH.js";var R,A;(A=R||(R={})).MULTIPLIER="multiplier",A.ABSOLUTE="absoluteValue";let I,_=null;function n(){return I||(I=e((()=>import("./lclayout-C_Q7wjDk.js")),__vite__mapDeps([0,1,2])).then((e=>e.l)).then((({default:e})=>e({locateFile:e=>t(`esri/libs/linkchartlayout/${e}`)}))).then((e=>{!function s(e){_=e}(e)})),I)}var P,G,S;function l(e,t,a,i,o,r){const h=a.length,u=o.length,d=Float64Array.BYTES_PER_ELEMENT,p=Uint32Array.BYTES_PER_ELEMENT,c=Uint8Array.BYTES_PER_ELEMENT,y=16+h*(c+2*d)+u*(2*p),g=_._malloc(y);try{const c=g+16-g%16,y=c+h*d,m=y+h*d,f=m+u*p,L=f+u*p,b2=()=>[_.HEAPF64.subarray(c>>3,(c>>3)+h),_.HEAPF64.subarray(y>>3,(y>>3)+h),_.HEAPU32.subarray(m>>2,(m>>2)+u),_.HEAPU32.subarray(f>>2,(f>>2)+u),_.HEAPU8.subarray(L,L+h)],[C,k,M,E,b]=b2();C.set(a),k.set(i),M.set(o),E.set(r),b.set(t);let w=e(h,L,c,y,u,m,f),v=null,T=null;if(w){const e=_.getLayoutLinksTypes(),t=_.getLayoutLinksVerticesEndIndices(),a=_.getLayoutLinksVertices(),i=_.countLayoutLinksVertices();!u||e&&t?i&&!a?w=!1:(v={types:new Uint8Array(_.HEAPU8.subarray(e,e+u)),vertexEndIndex:new Uint32Array(_.HEAPU32.subarray(t>>2,(t>>2)+u)),vertices:new Float64Array(_.HEAPF64.subarray(a>>3,(a>>3)+2*i))},T=_.getAuxiliaryGraphicElements()):w=!1}const[D,x,N,R,A]=b2();return a.set(D),i.set(x),o.set(N),r.set(R),t.set(A),{success:w,links:v,graphics:T}}finally{_._free(g),_.cleanupLayout()}}(S=P||(P={}))[S.None=0]="None",S[S.IsMovable=1]="IsMovable",S[S.IsGeographic=2]="IsGeographic",S[S.IsRoot=4]="IsRoot",function(e){e[e.Regular=0]="Regular",e[e.Orthogonal=1]="Orthogonal",e[e.Curved=2]="Curved",e[e.Recursive=3]="Recursive"}(G||(G={}));var j,O,B,H,F,U,z,Q,V;!function(e){e.getMinIdealEdgeLength=function e2(){return _.getMinIdealEdgeLength()},e.apply=function a2(e,t,a,i,o,r=2,h=1,u=-1){return l(((e,t,a,i,o,d,p)=>_.applyForceDirectedLayout(e,t,a,i,o,d,p,r,h,u)),e,t,a,i,o)}}(j||(j={})),(O||(O={})).apply=function A(e,t,a,i,o,r=2,h=1,u=-1){return l(((e,t,a,i,o,d,p)=>_.applyCommunityLayout(e,t,a,i,o,d,p,r,h,u)),e,t,a,i,o)},(B||(B={})).apply=function A(e,t,a,i,o){return l(_.applySimpleLayout,e,t,a,i,o)},(H||(H={})).apply=function A(e,t,a,i,o){return l(_.applyHierarchicalLayout,e,t,a,i,o)},(F||(F={})).apply=function A(e,t,a,i,o){return l(_.applyRadialTreeLayout,e,t,a,i,o)},(U||(U={})).apply=function A(e,t,a,i,o){return l(_.applySmartTreeLayout,e,t,a,i,o)},(z||(z={})).apply=function A(e,t,a,i,o,r,h,u,d){return l(((e,t,a,r,h,p,c)=>{if(i.length!==e)return!1;if(o.length!==e)return!1;if(u.length!==h)return!1;if(d.length!==h)return!1;const y=Float64Array.BYTES_PER_ELEMENT,g=16,m=_._malloc(g+e*y),f=_._malloc(g+e*y),L=_._malloc(g+h*y),C=_._malloc(g+h*y),k=m+g-m%g,M=f+g-f%g,E=L+g-L%g,b=C+g-C%g;try{return _.HEAPF64.subarray(k>>3,(k>>3)+e).set(i),_.HEAPF64.subarray(M>>3,(M>>3)+e).set(o),_.HEAPF64.subarray(E>>3,(E>>3)+h).set(u),_.HEAPF64.subarray(b>>3,(b>>3)+h).set(d),_.applyChronologicalLayout(e,t,a,r,k,M,h,p,c,E,b)}finally{_._free(m),_._free(f),_._free(L),_._free(C)}}),e,t,a,r,h)},function(e){e[e.Undirected=0]="Undirected",e[e.Directed=1]="Directed",e[e.Reversed=2]="Reversed"}(Q||(Q={})),function(e){e[e.ByCC_Raw=0]="ByCC_Raw",e[e.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",e[e.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"}(V||(V={}));let Y=class extends(a(i(k))){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new o,this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new r({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.sublayerIdsCache=new Map,this.tables=new o,this.type="link-chart",this._originalInclusionList=e.inclusionModeDefinition,e.dataPreloadedInLocalCache&&!e.inclusionModeDefinition)throw new h("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it")}normalizeCtorArgs(e){return{url:e.url,title:e.title,dataPreloadedInLocalCache:e.dataPreloadedInLocalCache,defaultLinkChartConfig:e.defaultLinkChartConfig}}_initializeLayerProperties(e){var t,a,i,o,r,d;if(!this.title&&this.url){const e=this.url.split("/");this.title=e[e.length-2]}const p=new Set;let c=[],y=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new h("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");null==(t=e.knowledgeGraph.dataModel.entityTypes)||t.forEach((e=>{e.name&&this._graphTypeLookup.set(e.name,e)})),null==(a=e.knowledgeGraph.dataModel.relationshipTypes)||a.forEach((e=>{e.name&&this._graphTypeLookup.set(e.name,e)})),(null==(i=e.inclusionModeDefinition)?void 0:i.generateAllSublayers)?(c=e.knowledgeGraph.dataModel.entityTypes??[],y=e.knowledgeGraph.dataModel.relationshipTypes??[]):(null==(o=e.inclusionModeDefinition)?void 0:o.namedTypeDefinitions)&&(null==(r=e.inclusionModeDefinition)?void 0:r.namedTypeDefinitions.size)>0?null==(d=e.inclusionModeDefinition)||d.namedTypeDefinitions.forEach(((t,a)=>{var i,o;const r=this._graphTypeLookup.get(a);if(!r)return u.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void(null==(i=e.inclusionModeDefinition)||i.namedTypeDefinitions.delete(a));"relationship"===r.type?p.has(a)||(p.add(a),y.push(r)):"entity"===r.type?p.has(a)||(p.add(a),c.push(r)):(u.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),null==(o=e.inclusionModeDefinition)||o.namedTypeDefinitions.delete(a))})):(c=e.knowledgeGraph.dataModel.entityTypes??[],y=e.knowledgeGraph.dataModel.relationshipTypes??[]);const g=new M({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=c,this.memberRelationshipTypes=y,this.dataManager=g}load(e){return this.addResolvingPromise(new Promise((t=>{N(this.url).then((a=>{var i,o,r,h,u,y;if(this._initializeLayerProperties({knowledgeGraph:a,inclusionModeDefinition:this._originalInclusionList}),(null==(o=null==(i=this.dataManager.inclusionModeDefinition)?void 0:i.namedTypeDefinitions)?void 0:o.size)||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},null==(r=this.dataManager.knowledgeGraph.dataModel.entityTypes)||r.forEach((e=>{var t;e.name&&(null==(t=this.dataManager.inclusionModeDefinition)||t.namedTypeDefinitions.set(e.name,{useAllData:!0}))})),null==(h=this.dataManager.knowledgeGraph.dataModel.relationshipTypes)||h.forEach((e=>{var t;e.name&&(null==(t=this.dataManager.inclusionModeDefinition)||t.namedTypeDefinitions.set(e.name,{useAllData:!0}))}))),this.dataPreloadedInLocalCache)this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),null==(u=this.dataManager.inclusionModeDefinition)||u.namedTypeDefinitions.forEach((e=>{var t;e.useAllData=!1,null==(t=e.members)||t.forEach((e=>{let t;t=e.linkChartLocation instanceof d?e.linkChartLocation:e.linkChartLocation?p(e.linkChartLocation):null,t&&2===t.coords.length&&0===t.lengths.length?this.entityLinkChartDiagramLookup.set(e.id,t):this.relationshipLinkChartDiagramLookup.set(e.id,t)})),this.addResolvingPromise(this._initializeDiagram().then((async()=>{this.layers.forEach((async e=>{await e.refreshCachedQueryEngine()})),this.tables.forEach((async e=>{await e.refreshCachedQueryEngine()}))})))}));else{const t="GEOGRAPHIC"===(null==(y=this.defaultLinkChartConfig)?void 0:y.layoutMode);this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,t,!0).then((async()=>{c(e);const t=[],a=[];this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1,this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach((e=>{e.useAllData=!1}))),await this._initializeDiagram(),this.layers.forEach((e=>{a.push(e.refreshCachedQueryEngine()),t.push(new Promise((t=>{e.on("layerview-create",(()=>{t(null)}))})))})),this.tables.forEach((e=>{a.push(e.refreshCachedQueryEngine())})),await Promise.all(a)})))}t(null)}))}))),Promise.resolve(this)}async addRecords(e,t){let a=[];(null==t?void 0:t.cascadeAddRelationshipEndNodes)&&this.dataManager.knowledgeGraph.dataModel&&(a=await E(e,this.dataManager.knowledgeGraph));const i=e.concat(a).filter((e=>{var t;return!(null==(t=this.sublayerIdsCache.get(e.typeName))?void 0:t.has(e.id))}));await this._handleNewRecords(i)}async removeRecords(e,{cascadeRemoveRelationships:t=!0,recalculateLayout:a=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){var i,o,r,h,u,d,p,c;let y=[];for(const m of e)!1===(null==(r=null==(o=null==(i=this.dataManager.inclusionModeDefinition)?void 0:i.namedTypeDefinitions)?void 0:o.get(m.typeName))?void 0:r.useAllData)&&(null==(p=null==(d=null==(u=null==(h=this.dataManager.inclusionModeDefinition)?void 0:h.namedTypeDefinitions)?void 0:u.get(m.typeName))?void 0:d.members)?void 0:p.has(m.id))&&y.push(m);if(t){const e=new Set,t=[];for(const a of y)if(this.dataManager.nodeConnectionsLookup.has(a.id))for(const t of this.dataManager.nodeConnectionsLookup.get(a.id))e.add(t);for(const a of e)if(this.dataManager.memberIdTypeLookup.has(a))for(const e of this.dataManager.memberIdTypeLookup.get(a))this.dataManager.relationshipTypeNames.has(e)&&t.push({id:a,typeName:e});y=y.concat(t)}this.dataManager.removeFromLayer(y);for(const m of y)null==(c=this.sublayerIdsCache.get(m.typeName))||c.delete(m.id),this.dataManager.relationshipTypeNames.has(m.typeName)?this.relationshipLinkChartDiagramLookup.delete(m.id):this.entityLinkChartDiagramLookup.delete(m.id);a&&await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const g=[];return this.layers.forEach((e=>{g.push(e.refreshCachedQueryEngine())})),await Promise.all(g),this._refreshNamedTypes(),y}async expand(e,t){const a=await this.dataManager.getConnectedRecordIds(e,t),i=a.filter((e=>{var t;return!(null==(t=this.sublayerIdsCache.get(e.typeName))?void 0:t.has(e.id))}));return await this._handleNewRecords(a),{records:i}}loadLayerAssumingLocalCache(){var e,t;this.memberRelationshipTypes.forEach((e=>{const t=new b({objectType:e,parentCompositeLayer:this,graphType:"relationship",title:e.name});t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)})),this.memberEntityTypes.forEach((e=>{const t=new b({objectType:e,parentCompositeLayer:this,graphType:"entity",title:e.name});t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)})),(null==(e=this.dataManager.inclusionModeDefinition)?void 0:e.namedTypeDefinitions)&&(null==(t=this.dataManager.inclusionModeDefinition)||t.namedTypeDefinitions.forEach(((e,t)=>{var a;const i=y(this.sublayerIdsCache,t,(()=>new Set));null==(a=e.members)||a.forEach((e=>{if(i.add(e.id),e.linkChartLocation)if(e.linkChartLocation instanceof d)this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(e.id,e.linkChartLocation):this.entityLinkChartDiagramLookup.set(e.id,e.linkChartLocation);else{const a=p(e.linkChartLocation);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(e.id,e.linkChartLocation?a:null):this.entityLinkChartDiagramLookup.set(e.id,e.linkChartLocation?a:null)}}))})))}async calculateLinkChartLayout(e="RADIAL_TREE",t){var a,i,o;const d=[],c=[],y=[];this.dataManager.sublayerCaches.forEach(((e,t)=>{this.dataManager.entityTypeNames.has(t)?e.forEach((e=>{d.push({typeName:t,feature:e})})):this.dataManager.relationshipTypeNames.has(t)&&e.forEach((e=>{c.push({typeName:t,feature:e})}))})),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const f=new Map,L=new Map,C=new Map,k=new Map,M=new Uint8Array(d.length),E=new Float64Array(d.length),b=new Float64Array(d.length),N=new Uint32Array(c.length),R=new Uint32Array(c.length),A=[],I=new r({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let _,S="FORCE_DIRECTED",z=0,Q=0;switch(S="GEOGRAPHIC"===e?"FORCE_DIRECTED":e,S){case"FORCE_DIRECTED":_=j.apply;break;case"COMMUNITY":_=O.apply;break;case"HIERARCHICAL":_=H.apply;break;case"RADIAL_TREE":_=F.apply;break;case"SMART_TREE":_=U.apply;break;default:_=B.apply}d.forEach((({typeName:a,feature:i})=>{var o,r,h;if(null==(o=null==t?void 0:t.lockedNodeLocations)?void 0:o.has(i.attributes[w])){"GEOGRAPHIC"===e&&this.dataManager.geographicLookup.has(a)?M[z]=P.IsGeographic:M[z]=P.None;const o=t.lockedNodeLocations.get(i.attributes[w]);E[z]=o.x,b[z]=o.y}else if("GEOGRAPHIC"===e&&this.dataManager.geographicLookup.has(a)){M[z]=P.IsGeographic;let e=null;const t=i.attributes[this.dataManager.geographicLookup.get(a).name];switch(null==(r=this.dataManager.geographicLookup.get(a))?void 0:r.geometryType){case"esriGeometryPoint":E[z]=null==t?void 0:t.x,b[z]=null==t?void 0:t.y;break;case"esriGeometryPolygon":e=null==t?void 0:t.centroid,null!=(null==e?void 0:e.x)&&null!=(null==e?void 0:e.y)?(E[z]=e.x,b[z]=e.y):M[z]=P.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":e=null==(h=null==t?void 0:t.extent)?void 0:h.center,null!=(null==e?void 0:e.x)&&null!=(null==e?void 0:e.y)?(E[z]=e.x,b[z]=e.y):M[z]=P.IsMovable;break;default:M[z]=P.IsMovable}(null==E[z]||null==b[z]||Number.isNaN(E[z])||Number.isNaN(b[z]))&&(M[z]=P.IsMovable,E[z]=0,b[z]=0)}else M[z]=P.IsMovable,E[z]=0,b[z]=0;k.set(i.attributes[w],z),A[z]={feature:i,typeName:a},z++}));let V=!1;const Y=new Map;c.forEach((e=>{const t=e.feature.attributes[v],a=e.feature.attributes[T],i=k.get(t),o=k.get(a);if(void 0!==i&&void 0!==o){const r=t+"-"+a,h=Y.get(r);(null==h?void 0:h.has(e.typeName))||(N[Q]=i,R[Q]=o,void 0===h?Y.set(r,new Map([[e.typeName,Q]])):h.set(e.typeName,Q),Q++),y.push(e)}else V=!0,this.relationshipLinkChartDiagramLookup.set(t,null)})),V&&u.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const W=this._validateLayoutSettings(e,t),$=this._convertLayoutSettingsToCalculationSettings(W);await n();const{success:J,links:K}=_(M,E,b,N.subarray(0,Q),R.subarray(0,Q),$.computationBudgetTime,$.idealEdgeLengthMultiplier,$.repulsionRadiusMultiplier);if(!J)throw new h("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let r=0;r<A.length;r++){if(b[r]>84.9999?b[r]=84.9999:b[r]<-84.9999&&(b[r]=-84.9999),E[r]>179.9999?E[r]=179.9999:E[r]<-179.9999&&(E[r]=-179.9999),A[r].feature.attributes[D]=new g(E[r],b[r]),f.has(A[r].typeName)){const e=f.get(A[r].typeName);null==e||e.set(A[r].feature.attributes[w],A[r].feature)}else{const e=new Map;e.set(A[r].feature.attributes[w],A[r].feature),f.set(A[r].typeName,e)}C.set(A[r].feature.attributes[w],A[r].feature);const e=p(A[r].feature.attributes[D]);this.entityLinkChartDiagramLookup.set(A[r].feature.attributes[w],A[r].feature.attributes[D]?e:null),A[r].feature.attributes[D].x<I.xmin&&(I.xmin=A[r].feature.attributes[D].x),A[r].feature.attributes[D].x>I.xmax&&(I.xmax=A[r].feature.attributes[D].x),A[r].feature.attributes[D].y<I.ymin&&(I.ymin=A[r].feature.attributes[D].y),A[r].feature.attributes[D].y>I.ymax&&(I.ymax=A[r].feature.attributes[D].y)}if(this.linkChartExtent.xmin=I.xmin,this.linkChartExtent.xmax=I.xmax,this.linkChartExtent.ymin=I.ymin,this.linkChartExtent.ymax=I.ymax,!K)throw new h("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const q=new Map,X=new Map,Z=new Map,ee=new Set;for(let r=0;r<y.length;r++){const e=[],t=y[r],o=t.feature.attributes[v],h=t.feature.attributes[T],d=o+"-"+h,c=Y.get(d).get(t.typeName),g=0===c?0:null==K?void 0:K.vertexEndIndex[c-1];if(!ee.has(c)){if(ee.add(c),K.types[c]===G.Recursive){const t=[K.vertices[2*g],K.vertices[2*g+1]],a=[K.vertices[2*(g+1)],K.vertices[2*(g+1)+1]],i=[.5*(t[0]+a[0]),.5*(t[1]+a[1])],o=[i[0]-t[0],i[1]-t[1]],r=[i[0]+o[1],i[1]-o[0]],h=[i[0]-o[1],i[1]+o[0]];e.push(t),e.push(r),e.push(a),e.push(h),e.push(t)}else{if(K.types[c]!==G.Regular){u.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let t=g;t<K.vertexEndIndex[c];t++)e.push([K.vertices[2*t],K.vertices[2*t+1]])}const t=null==(a=A[k.get(o)])?void 0:a.feature.attributes[D],r=null==(i=A[k.get(h)])?void 0:i.feature.attributes[D];e[0][0]===t.x&&e[0][1]===t.y||(e[0]=[t.x,t.y]),e[e.length-1][0]===r.x&&e[e.length-1][1]===r.y||(e[e.length-1]=[r.x,r.y]);for(let a=1;a<e.length-1;a++)e[a][1]>85.5?e[a][1]=85.5:e[a][1]<-85.5&&(e[a][1]=-85.5),e[a][0]>179.9999?e[a][0]=179.9999:e[a][0]<-179.9999&&(e[a][0]=-179.9999);q.has(d)?q.get(d).push(e):q.set(d,[e])}const f=q.get(d);X.has(d)||(X.set(d,new Map),Z.set(d,new Map));const M=X.get(d),E=Z.get(d);M.has(t.typeName)||(M.set(t.typeName,f.shift()),E.set(t.typeName,0));const b=M.get(t.typeName);E.set(t.typeName,E.get(t.typeName)+1);const x=new m({paths:b});if(t.feature.attributes[D]=x,L.has(t.typeName)){const e=L.get(t.typeName);null==e||e.set(t.feature.attributes[w],t.feature)}else{const e=new Map;e.set(t.feature.attributes[w],t.feature),L.set(t.typeName,e)}C.set(t.feature.attributes[w],t.feature);const N=p(t.feature.attributes[D]);this.relationshipLinkChartDiagramLookup.set(t.feature.attributes[w],t.feature.attributes[D]?N:null)}for(const r of y)r.feature.attributes[x]=(null==(o=Z.get(r.feature.attributes[v]+"-"+r.feature.attributes[T]))?void 0:o.get(r.typeName))??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:W},{nodes:f,links:L,idMap:C}}async applyNewLinkChartLayout(e="RADIAL_TREE",t){const a=[];await this.calculateLinkChartLayout(e,t),this.layers.forEach((e=>{a.push(e.refreshCachedQueryEngine())})),await Promise.all(a),this._refreshNamedTypes()}getCurrentNodeLocations(){var e,t;const a=new Map;return null==(t=null==(e=this.dataManager.inclusionModeDefinition)?void 0:e.namedTypeDefinitions)||t.forEach((e=>{var t;null==(t=null==e?void 0:e.members)||t.forEach((e=>{const t=e.linkChartLocation;let i;const o=e.id;t&&(i="x"in t?{x:t.x,y:t.y}:{x:t.coords[0],y:t.coords[1]},a.set(o,new g({x:i.x,y:i.y})))}))})),a}async synchronizeInclusionListWithCache(){return new Promise((e=>{var t;null==(t=this.dataManager.inclusionModeDefinition)||t.namedTypeDefinitions.forEach(((e,t)=>{if(e.useAllData=!1,e.members&&e.members.size>0){if(!this.dataManager.sublayerCaches.get(t))return;const a=new Set(Array.from(this.dataManager.sublayerCaches.get(t).keys()));Array.from(e.members.keys()).filter((e=>!a.has(e))).forEach((t=>{var a;null==(a=e.members)||a.delete(t)}))}})),e()}))}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const t=[];this.layers.forEach((e=>{t.push(e.refreshCachedQueryEngine())})),await Promise.all(t),this._refreshNamedTypes()}async connectEntities(e){let t=[];for(const i of this.dataManager.relationshipTypeNames){const e=this.sublayerIdsCache.get(i);e&&(t=t.concat(Array.from(e.keys())))}const a=await this.dataManager.getAttachedRelationships(e,t);return await this._handleNewRecords(a),{records:a}}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const e=this._graphTypeLookup.get(i);if(e){const t=new b({objectType:e,parentCompositeLayer:this,graphType:e.type,title:i});"entity"===e.type?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.set(i,new Map)}}await this.dataManager.refreshCacheContent(e.map((e=>e.id)));const a=Object.assign({},this._currentLinkChartConfig.layoutOptions);a.lockedNodeLocations=this.getCurrentNodeLocations(),await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,a)}async _initializeDiagram(){var e,t;this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(null==(t=null==(e=this.dataManager.inclusionModeDefinition)?void 0:e.namedTypeDefinitions)||t.forEach(((e,t)=>{var a;null==(a=null==e?void 0:e.members)||a.forEach((e=>{const a=e.linkChartLocation;let i;const o=e.id;if(!a)return;i="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]};const r=p(i);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(o,r):this.entityLinkChartDiagramLookup.set(o,r),this.linkChartExtent.xmin>i.x&&(this.linkChartExtent.xmin=i.x),this.linkChartExtent.xmax<i.x&&(this.linkChartExtent.xmax=i.x),this.linkChartExtent.ymin>i.y&&(this.linkChartExtent.ymin=i.y),this.linkChartExtent.ymax<i.y&&(this.linkChartExtent.ymax=i.y)}))})),this.memberRelationshipTypes.forEach((e=>{var t;e.name&&(null==(t=this.dataManager.sublayerCaches.get(e.name))||t.forEach((e=>{const t=this.relationshipLinkChartDiagramLookup.get(e.attributes[v]),a=this.relationshipLinkChartDiagramLookup.get(e.attributes[T]);if(t&&a){const i=p(new m({paths:[[t.coords[0],t.coords[1]],[a.coords[0],a.coords[1]]]}));this.relationshipLinkChartDiagramLookup.set(e.attributes[w],i)}else this.relationshipLinkChartDiagramLookup.set(e.attributes[w],null)})))}))):await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this.calculateLinkChartLayout("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,t){const a2=e=>"number"==typeof e&&!isNaN(e),a=new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC"]),i={};if(!a.has(e)||!t)return!a.has(e)&&t&&u.getLogger(this).warn("Layout mode options were given for a layout mode that does not utilize them, settings will be ignored"),i;const{computationBudgetTime:o,repulsionRadiusMultiplier:r,idealEdgeLength:h,idealEdgeLengthType:d}=t;var p;a2(p=o)&&p>=1?i.computationBudgetTime=o:void 0!==o&&u.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),(e=>a2(e)&&e>=1)(r)?i.repulsionRadiusMultiplier=r:void 0!==r&&u.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting");const c=void 0!==h||void 0!==d;return"GEOGRAPHIC"!==e&&c?u.getLogger(this).warn("Ideal edge length settings were specified for an incompatible layout mode, and will be ignored"):"GEOGRAPHIC"===e&&c&&((e=>Object.values(R).includes(e))(d)?i.idealEdgeLengthType=d:void 0!==d&&u.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),(e=>a2(e)&&e>=0)(h)?i.idealEdgeLength=h:void 0!==h&&u.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),i}_convertLayoutSettingsToCalculationSettings(e){let t=e.idealEdgeLength;return e.idealEdgeLengthType===R.ABSOLUTE&&(void 0===t?t=-1:t*=-1),{computationBudgetTime:e.computationBudgetTime,repulsionRadiusMultiplier:e.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:t}}};f([L()],Y.prototype,"dataPreloadedInLocalCache",void 0),f([L()],Y.prototype,"defaultLinkChartConfig",void 0),f([L()],Y.prototype,"dataManager",void 0),f([L()],Y.prototype,"knowledgeGraph",void 0),f([L()],Y.prototype,"layers",void 0),f([L()],Y.prototype,"entityLinkChartDiagramLookup",void 0),f([L()],Y.prototype,"relationshipLinkChartDiagramLookup",void 0),f([L()],Y.prototype,"linkChartExtent",void 0),f([L()],Y.prototype,"memberEntityTypes",void 0),f([L()],Y.prototype,"memberRelationshipTypes",void 0),f([L()],Y.prototype,"sublayerIdsCache",void 0),f([L()],Y.prototype,"tables",void 0),f([L({json:{read:!1}})],Y.prototype,"type",void 0),Y=f([C("esri.layers.LinkChartLayer")],Y);const W=Y;export{W as default};
