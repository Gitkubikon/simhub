const __vite__fileDeps=["assets/arcgis-knowledge-client-core-simd-C6ULKluv.js","assets/index-DSIPxOWi.js","assets/index-B_7YxLDX.css","assets/arcgis-knowledge-client-core-Blk6w7UL.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as r,y as o,a as d,S as f,bk as G,I as S,m as k,_ as N,fS as $,b as Y,g_ as B,ay as V,aw as Z,ax as J,j as X,n as ee,bZ as te,jP as re}from"./index-DSIPxOWi.js";import{m as ne,p as oe,t as ie,c as ae}from"./GraphQueryStreaming-DGarY5EH.js";let se=class t extends f{constructor(r){super(r),this.headerKeys=[],this.outSpatialReference=null,this.exceededTransferLimit=!1}};r([o()],se.prototype,"headerKeys",void 0),r([o()],se.prototype,"outSpatialReference",void 0),r([o()],se.prototype,"exceededTransferLimit",void 0),se=r([d("esri.rest.knowledgeGraph.GraphQueryResultHeader")],se);const le=se;let de=class p extends f{constructor(r){super(r),this.resultRows=[],this.resultHeader=new le}};r([o()],de.prototype,"resultRows",void 0),r([o()],de.prototype,"resultHeader",void 0),de=r([d("esri.rest.knowledgeGraph.GraphQueryResult")],de);const pe=de;let ue=class a extends f{constructor(r){super(r),this.resultRowsStream=new ReadableStream,this.resultHeader=new le}};r([o()],ue.prototype,"resultRowsStream",void 0),r([o()],ue.prototype,"resultHeader",void 0),ue=r([d("esri.rest.knowledgeGraph.GraphQueryStreamingResult")],ue);const ce=ue;let ye=class s extends G{constructor(r){super(r),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};r([o({type:String,json:{write:!0}})],ye.prototype,"name",void 0),r([o({type:Boolean,json:{write:!0}})],ye.prototype,"unique",void 0),r([o({type:Boolean,json:{write:!0}})],ye.prototype,"ascending",void 0),r([o({type:String,json:{write:!0}})],ye.prototype,"description",void 0),r([o({type:[String],json:{write:!0}})],ye.prototype,"fieldNames",void 0),ye=r([d("esri.rest.knowledgeGraph.FieldIndex")],ye);const he=ye;let fe=class i extends G{constructor(r){super(r),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};r([o({type:String,json:{write:!0}})],fe.prototype,"name",void 0),r([o({type:String,json:{write:!0}})],fe.prototype,"alias",void 0),r([o({type:String,json:{write:!0}})],fe.prototype,"fieldType",void 0),r([o({type:String,json:{write:!0}})],fe.prototype,"geometryType",void 0),r([o({type:Boolean,json:{write:!0}})],fe.prototype,"hasM",void 0),r([o({type:Boolean,json:{write:!0}})],fe.prototype,"hasZ",void 0),r([o({type:Boolean,json:{write:!0}})],fe.prototype,"nullable",void 0),r([o({type:Boolean,json:{write:!0}})],fe.prototype,"editable",void 0),r([o({type:Boolean,json:{write:!0}})],fe.prototype,"required",void 0),r([o({type:Boolean,json:{write:!0}})],fe.prototype,"defaultVisibility",void 0),r([o({type:Boolean,json:{write:!0}})],fe.prototype,"systemMaintained",void 0),r([o()],fe.prototype,"role",void 0),r([o({json:{write:!0}})],fe.prototype,"defaultValue",void 0),fe=r([d("esri.rest.knowledgeGraph.GraphProperty")],fe);const ge=fe;let me=class i2 extends G{constructor(r){super(r),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null,this.type=null}};r([o({type:String,json:{write:!0}})],me.prototype,"name",void 0),r([o({type:String,json:{write:!0}})],me.prototype,"alias",void 0),r([o({type:String,json:{write:!0}})],me.prototype,"role",void 0),r([o({type:Boolean,json:{write:!0}})],me.prototype,"strict",void 0),r([o({type:[ge],json:{write:!0}})],me.prototype,"properties",void 0),r([o({type:[he],json:{write:!0}})],me.prototype,"fieldIndexes",void 0),me=r([d("esri.rest.knowledgeGraph.GraphObjectType")],me);const _e=me;let we=class t2 extends _e{constructor(r){super(r),this.type="entity"}};we=r([d("esri.rest.knowledgeGraph.EntityType")],we);const ve=we;let Te=class t3 extends _e{constructor(r){super(r),this.endPoints=[],this.type="relationship"}};r([o()],Te.prototype,"endPoints",void 0),Te=r([d("esri.rest.knowledgeGraph.RelationshipType")],Te);const Ee=Te;let Ge=class n extends G{constructor(r){super(r),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null,this.metaEntityTypes=null}};r([o({type:Date,json:{type:Number,write:{writer:(r,o)=>{o.timestamp=null==r?void 0:r.getTime()}}}})],Ge.prototype,"timestamp",void 0),r([o({type:S,json:{write:!0}})],Ge.prototype,"spatialReference",void 0),r([o({type:Boolean,json:{write:!0}})],Ge.prototype,"strict",void 0),r([o({type:String,json:{write:!0}})],Ge.prototype,"objectIdField",void 0),r([o({type:String,json:{write:!0}})],Ge.prototype,"globalIdField",void 0),r([o()],Ge.prototype,"arcgisManaged",void 0),r([o()],Ge.prototype,"identifierInfo",void 0),r([o()],Ge.prototype,"searchIndexes",void 0),r([o({type:[ve],json:{write:!0}})],Ge.prototype,"entityTypes",void 0),r([o({type:[Ee],json:{write:!0}})],Ge.prototype,"relationshipTypes",void 0),r([o({type:[ve],json:{write:!0}})],Ge.prototype,"metaEntityTypes",void 0),Ge=r([d("esri.rest.knowledgeGraph.DataModel")],Ge);const Ie=Ge;let Re=class p2 extends G{constructor(r){super(r),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1,this.supportsProvenance=!1}};r([o({type:[String],json:{write:!0}})],Re.prototype,"capabilities",void 0),r([o({type:Boolean,json:{write:!0}})],Re.prototype,"supportsSearch",void 0),r([o({type:[String],json:{write:!0}})],Re.prototype,"supportedQueryFormats",void 0),r([o({type:Boolean,json:{write:!0}})],Re.prototype,"allowGeometryUpdates",void 0),r([o({type:Number,json:{write:!0}})],Re.prototype,"searchMaxRecordCount",void 0),r([o({type:Object,json:{write:!0}})],Re.prototype,"serviceCapabilities",void 0),r([o({type:Number,json:{write:!0}})],Re.prototype,"maxRecordCount",void 0),r([o({type:String,json:{write:!0}})],Re.prototype,"description",void 0),r([o({type:String,json:{write:!0}})],Re.prototype,"copyrightText",void 0),r([o({type:String,json:{write:!0}})],Re.prototype,"units",void 0),r([o({type:S,json:{write:!0}})],Re.prototype,"spatialReference",void 0),r([o({type:Number,json:{write:!0}})],Re.prototype,"currentVersion",void 0),r([o({type:Object,json:{write:!0}})],Re.prototype,"dateFieldsTimeReference",void 0),r([o({type:String,json:{write:!0}})],Re.prototype,"serviceItemId",void 0),r([o({type:Boolean,json:{write:!0}})],Re.prototype,"supportsDocuments",void 0),r([o({type:Boolean,json:{write:!0}})],Re.prototype,"dataEditingNotSupported",void 0),r([o({type:Boolean,json:{write:!0}})],Re.prototype,"schemaEditingNotSupported",void 0),r([o({type:Boolean,json:{write:!0}})],Re.prototype,"supportsProvenance",void 0),Re=r([d("esri.rest.knowledgeGraph.ServiceDefinition")],Re);const Se=Re;let Pe=class p3 extends G{constructor(r){super(r),this.dataModel=null,this.serviceDefinition=null}};r([o({type:String,json:{write:!0}})],Pe.prototype,"url",void 0),r([o({type:Ie,json:{write:!0}})],Pe.prototype,"dataModel",void 0),r([o({type:Se,json:{write:!0}})],Pe.prototype,"serviceDefinition",void 0),Pe=r([d("esri.rest.knowledgeGraph.KnowledgeGraph")],Pe);const be=Pe,xe="esri/rest/knowledgeGraph/wasmInterface/";let Me;async function r$2(){if(Me)return Me;const r=k("wasm-simd");return Me=async function o$1(r){if(r){const{default:r}=await N((()=>import("./arcgis-knowledge-client-core-simd-C6ULKluv.js")),__vite__mapDeps([0,1,2])).then((r=>r.a));return r({locateFile:r=>$(xe+r)})}const{default:o}=await N((()=>import("./arcgis-knowledge-client-core-Blk6w7UL.js")),__vite__mapDeps([3,1,2])).then((r=>r.a));return o({locateFile:r=>$(xe+r)})}(r),Me}var Oe,ke,je,De;function s$1(r,o){const d=new o.ArrayValue;return d.deleteLater(),r.forEach((r=>{d.add_value(f$2(r,o))})),d}function l$1(r,o){const d=new o.ObjectValue;d.deleteLater();for(const[f,G]of Object.entries(r))d.set_key_value(f,f$2(G,o));return d}function u(r,o){if(r instanceof V)return function g$2(r,o){const d=new o.GeometryValue;d.deleteLater(),d.geometry_type=d.geometry_type=o.esriGeometryType.esriGeometryMultipoint,d.has_z=r.hasZ,d.has_m=r.hasM;const f=[],G=[];G[0]=r.points.length;let S=0;return r.points.forEach((r=>{r.forEach((r=>{f[S]=r,S++}))})),d.coords=new Float64Array(f),d.lengths=new Uint32Array(G),d}(r,o);if(r instanceof Z)return function h$1(r,o){const d=new o.GeometryValue;d.deleteLater(),d.geometry_type=o.esriGeometryType.esriGeometryPoint,d.has_z=r.hasZ,d.has_m=r.hasM;const f=[],G=[];G[0]=1,f[0]=r.x,f[1]=r.y;let S=2;return r.hasZ&&(f[S]=r.z,S++),r.hasM&&(f[S]=r.m,S++),d.coords=new Float64Array(f),d.lengths=new Uint32Array(G),d}(r,o);if(r instanceof J||r instanceof X)return function p$3(r,o){const d=new o.GeometryValue;d.deleteLater(),d.has_z=r.hasZ,d.has_m=r.hasM;const f=[],G=[];let S=[];r instanceof J?(d.geometry_type=o.esriGeometryType.esriGeometryPolyline,S=r.paths):r instanceof X&&(d.geometry_type=o.esriGeometryType.esriGeometryPolygon,S=r.rings);let k=0,N=0;return S.forEach((r=>{let o=0;r.forEach((r=>{o++,r.forEach((r=>{f[N]=r,N++}))})),G[k]=o,k++})),d.coords=new Float64Array(f),d.lengths=new Uint32Array(G),d}(r,o);throw new Y("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:r})}function f$2(r,o){if(null==r)return"";if("object"!=typeof r)return r;if(r instanceof Date)return r;if(r instanceof B)return u(r,o);if(Array.isArray(r)){const d=new o.ArrayValue;return d.deleteLater(),r.forEach((r=>{d.add_value(f$2(r,o))})),d}return l$1(r,o)}function r$1(r,o){if(!r.typeName)throw new Y("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(r instanceof ne){const d=new o.EntityValue;d.deleteLater(),d.type_name=r.typeName;for(const[f,G]of Object.entries(r.properties))d.set_key_value(f,a$1(G,o));return r.id&&d.set_id(r.id),d}if(r instanceof oe){const d=new o.RelationshipValue;d.deleteLater(),d.type_name=r.typeName;for(const[f,G]of Object.entries(r.properties))d.set_key_value(f,a$1(G,o));return r.id&&d.set_id(r.id),r.originId&&r.destinationId&&d.set_related_entity_ids(r.originId,r.destinationId),d}throw new Y("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function a$1(r,o){return null==r?null:"object"!=typeof r||r instanceof Date?r:r instanceof B?u(r,o):null}(De=Oe||(Oe={}))[De.OBJECT=0]="OBJECT",De[De.ENTITY=1]="ENTITY",De[De.RELATIONSHIP=2]="RELATIONSHIP",De[De.PATH=3]="PATH",De[De.ARRAY=4]="ARRAY",function(r){r[r.view=0]="view",r[r.edit=1]="edit"}(ke||(ke={})),function(r){r[r.exclude=0]="exclude",r[r.include=1]="include"}(je||(je={}));let Fe=class t4 extends f{constructor(r){super(r),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};r([o()],Fe.prototype,"name",void 0),r([o()],Fe.prototype,"supportedCategory",void 0),r([o()],Fe.prototype,"analyzers",void 0),r([o()],Fe.prototype,"searchProperties",void 0),Fe=r([d("esri.rest.knowledgeGraph.SearchIndex")],Fe);const Ne=Fe;var $e,Ae,Le,ze,Ce,Ue,qe,Ye,He;function c$1(r){return r.deleteLater(),new ve(z$1(r))}function g$1(r){return r.deleteLater(),new he({name:r.name,unique:r.unique,ascending:r.ascending,description:r.description,fieldNames:I$1(r.fields)})}function z$1(r){return{name:r.name,alias:r.alias,role:$e[r.role.value]?$e[r.role.value]:null,strict:r.strict,properties:T$2(r.properties),fieldIndexes:w$1(r.field_indexes)}}function b(r){return r.deleteLater(),new ge({alias:r.alias,name:r.name,fieldType:Ae[r.field_type.value]?Ae[r.field_type.value]:null,geometryType:Le[r.geometry_type.value]?Le[r.geometry_type.value]:null,hasM:r.has_m,hasZ:r.has_z,nullable:r.nullable,editable:r.editable,required:r.required,defaultVisibility:r.default_visibility,systemMaintained:r.system_maintained,role:Ue[r.role.value],defaultValue:r.default_value})}function v(r){r.deleteLater();const o=z$1(r),d=[];for(let f=0;f<r.end_points.size();f++){const o=r.end_points.get(f);d.push({originEntityType:o.origin_entity_type,destinationEntityType:o.dest_entity_type})}return r.end_points.delete(),new Ee(Object.assign({endPoints:d},o))}function j$2(r){const o=[];for(let d=0;d<r.size();d++)o.push(c$1(r.get(d)));return r.delete(),o}function I$1(r){const o=[];for(let d=0;d<r.size();d++)o.push(r.get(d));return r.delete(),o}function T$2(r){const o=[];for(let d=0;d<r.size();d++)o.push(b(r.get(d)));return r.delete(),o}function w$1(r){const o=[];for(let d=0;d<r.size();d++)o.push(g$1(r.get(d)));return r.delete(),o}function x$1(r){const o=[];for(let d=0;d<r.size();d++)o.push(v(r.get(d)));return r.delete(),o}function M$1(r){const o=[];for(let d=0;d<r.size();d++){const d=new Ne,f=r.get(0);d.name=f.name,d.supportedCategory=Ce[f.supported_category.value];const G=f.analyzers.size();for(let r=0;r<G;r++)d.analyzers.push({name:f.analyzers.get(r).name});f.analyzers.delete();for(let r=0;r<f.search_properties.keys().size();r++){const o=f.search_properties.keys().get(r),G=f.search_properties.get(o),S=[];for(let r=0;r<G.property_names.size();r++)S.push(G.property_names.get(r));d.searchProperties.set(o,{propertyNames:S})}o.push(d)}return r.delete(),o}function f$1(r,o){const d={spatialReference:o},f=c(r,d),G=r.lengths,S=r.coords;let k="";if(r.geometry_type.value===Ye.ESRI_GEOMETRY_POLYGON)k="rings";else{if(r.geometry_type.value!==Ye.ESRI_GEOMETRY_POLYLINE)throw new Y("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");k="paths"}d[k]=[];let N=0;return G.forEach((r=>{const o=[];for(let d=0;d<r;d++){const r=[];for(let o=0;o<f;o++)r[o]=S[N],N++;o.push(r)}d[k].push(o)})),d}function c(r,o){let d=2;return r.has_z?(o.hasZ=r.has_z,d++):o.hasZ=!1,r.has_m?(o.hasM=r.has_m,d++):o.hasM=!1,d}!function(r){r[r.Regular=0]="Regular",r[r.Provenance=1]="Provenance",r[r.Document=2]="Document"}($e||($e={})),function(r){r[r.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",r[r.esriFieldTypeInteger=1]="esriFieldTypeInteger",r[r.esriFieldTypeSingle=2]="esriFieldTypeSingle",r[r.esriFieldTypeDouble=3]="esriFieldTypeDouble",r[r.esriFieldTypeString=4]="esriFieldTypeString",r[r.esriFieldTypeDate=5]="esriFieldTypeDate",r[r.esriFieldTypeOID=6]="esriFieldTypeOID",r[r.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",r[r.esriFieldTypeBlob=8]="esriFieldTypeBlob",r[r.esriFieldTypeRaster=9]="esriFieldTypeRaster",r[r.esriFieldTypeGUID=10]="esriFieldTypeGUID",r[r.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",r[r.esriFieldTypeXML=12]="esriFieldTypeXML",r[r.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",r[r.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",r[r.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",r[r.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(Ae||(Ae={})),function(r){r[r.esriGeometryNull=0]="esriGeometryNull",r[r.esriGeometryPoint=1]="esriGeometryPoint",r[r.esriGeometryMultipoint=2]="esriGeometryMultipoint",r[r.esriGeometryPolyline=3]="esriGeometryPolyline",r[r.esriGeometryPolygon=4]="esriGeometryPolygon",r[r.esriGeometryEnvelope=5]="esriGeometryEnvelope",r[r.esriGeometryAny=6]="esriGeometryAny",r[r.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}(Le||(Le={})),function(r){r[r.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",r[r.esriUUIDESRI=1]="esriUUIDESRI",r[r.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(ze||(ze={})),function(r){r[r.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",r[r.esriTypeEntity=1]="esriTypeEntity",r[r.esriTypeRelationship=2]="esriTypeRelationship",r[r.esriTypeBoth=4]="esriTypeBoth"}(Ce||(Ce={})),function(r){r[r.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",r[r.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",r[r.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",r[r.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",r[r.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",r[r.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",r[r.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",r[r.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",r[r.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",r[r.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension",r[r.esriGraphPropertyProvenanceInstanceId=10]="esriGraphPropertyProvenanceInstanceId",r[r.esriGraphPropertyProvenanceSourceType=11]="esriGraphPropertyProvenanceSourceType",r[r.esriGraphPropertyProvenanceSourceName=12]="esriGraphPropertyProvenanceSourceName",r[r.esriGraphPropertyProvenanceSource=13]="esriGraphPropertyProvenanceSource",r[r.esriGraphPropertyProvenanceComment=14]="esriGraphPropertyProvenanceComment",r[r.esriGraphPropertyProvenanceTypeName=15]="esriGraphPropertyProvenanceTypeName",r[r.esriGraphPropertyProvenancePropertyName=16]="esriGraphPropertyProvenancePropertyName"}(Ue||(Ue={})),function(r){r[r.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",r[r.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",r[r.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(qe||(qe={})),(He=Ye||(Ye={}))[He.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",He[He.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",He[He.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",He[He.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",He[He.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",He[He.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",He[He.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",He[He.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH";const m=()=>ee.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),Qe={decodedWasmObjToQueryResponseObj:(r,o,d)=>{if(null==r)return null;if("object"!=typeof r)return r;if("getDate"in r)return r;if("geometry_type"in r)switch(r.geometry_type.value){case null:return null;case Ye.ESRI_GEOMETRY_POINT:return function i3(r,o){const d={spatialReference:o};let f=2;c(r,d);const G=r.coords;return d.x=G[0],d.y=G[1],r.has_z&&(d.z=G[f],f++),r.has_m&&(d.m=G[f]),new Z(d)}(r,d);case Ye.ESRI_GEOMETRY_MULTIPOINT:return function l(r,o){const d={spatialReference:o},f=c(r,d),G=r.lengths,S=r.coords,k=G[0];d.points=[];let N=0;for(let $=0;$<k;$++){const r=[];for(let o=0;o<f;o++)r[o]=S[N],N++;d.points.push(r)}return new V(d)}(r,d);case Ye.ESRI_GEOMETRY_POLYLINE:return function a2(r,o){return new J(f$1(r,o))}(r,d);case Ye.ESRI_GEOMETRY_POLYGON:return function m$1(r,o){return new X(f$1(r,o))}(r,d);case Ye.ESRI_GEOMETRY_ENVELOPE:case Ye.ESRI_GEOMETRY_MULTI_PATCH:return m().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case Ye.ESRI_GEOMETRY_NULL:case Ye.ESRI_GEOMETRY_ANY:default:return m().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in r))return m().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(r.object_value_type.value){case Oe.OBJECT:return function j$1(r,o,d){return new ie(O(r,o,d))}(r,o,d);case Oe.ENTITY:return E$1(r,o,d);case Oe.RELATIONSHIP:return h(r,o,d);case Oe.PATH:return function T$1(r,o,d){const f=r.entity_count(),G=r.relationship_count(),S=[];for(let k=0;k<f;k++)S.push(E$1(r.get_entity_at(k),o,d)),k<G&&S.push(h(r.get_relationship_at(k),o,d));return new ae({path:S})}(r,o,d);case Oe.ARRAY:return function y(r,o,d){const f=[],G=r.count();for(let S=0;S<G;S++){const G=r.get_value_at(S);f.push(g(G,o,d))}return f}(r,o,d);default:return m().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function g(r,o,d){return Qe.decodedWasmObjToQueryResponseObj(r,o,d)}function E$1(r,o,d){const f=r.type_name,G=O(r,o,d),S=r.get_id();return new ne(Object.assign({typeName:f,id:S},G))}function O(r,o,d){const f={},G=r.key_count();for(let S=0;S<G;S++)f[r.get_key_at(S)]=g(r.get_value_at(S),o,d);return{properties:f}}function h(r,o,d){const f=r.type_name,G=O(r,o,d);return new oe(Object.assign({typeName:f,id:r.get_id(),originId:r.get_origin_entity_id(),destinationId:r.get_destination_entity_id()},G))}function w(r){const o=[];for(let f=0;f<r.get_header_keys().size();f++)o.push(r.get_header_keys().get(f));const d=new S(r.get_out_sr());return new le({headerKeys:o,outSpatialReference:d,exceededTransferLimit:r.exceeded_transfer_limit()})}let Be=class e extends f{constructor(r){super(r),this.hasError=null,this.error=null,this.editResults=[]}};r([o()],Be.prototype,"hasError",void 0),r([o()],Be.prototype,"error",void 0),r([o()],Be.prototype,"editResults",void 0),Be=r([d("esri.rest.knowledgeGraph.GraphApplyEditsResult")],Be);const Ve=Be;const Ke={fetchKnowledgeGraph:async r=>{const o=new be({url:r}),d=[];return d.push(A(o)),d.push(M(o)),await Promise.all(d),o},refreshDataModel:async r=>{r.dataModel=await K(r)},refreshServiceDefinition:async r=>{var o,d;const f=(await te(r.url,{query:{f:"json"}})).data;return f.capabilities=null==(o=null==f?void 0:f.capabilities)?void 0:o.split(","),f.supportedQueryFormats=null==(d=null==f?void 0:f.supportedQueryFormats)?void 0:d.split(","),r.serviceDefinition=new Se(f),r.serviceDefinition},executeQueryStreaming:async(r,o,d)=>{var f;const G=`${r.url}/graph/query`;await C(r);const S=await L(G,d);if(!(null==(f=r.serviceDefinition)?void 0:f.supportsProvenance)&&"include"===o.provenanceBehavior)throw new Y("knowledge-graph:provenance-not-supported","The Knowledge Graph Service definition indicated that provenance is not supported");S.data.body=await async function P(r,o){var d,f;const G=await r$2(),S=new G.GraphQueryRequestEncoder;if(S.deleteLater(),r.outputSpatialReference?S.output_spatial_reference={wkid:r.outputSpatialReference.wkid,latestWkid:r.outputSpatialReference.latestWkid,vcsWkid:r.outputSpatialReference.vcsWkid,latestVcsWkid:r.outputSpatialReference.latestVcsWkid,wkt:r.outputSpatialReference.wkt??""}:S.output_spatial_reference=G.SpatialReferenceUtil.WGS84(),S.open_cypher_query=r.openCypherQuery,r.bindParameters)for(const[$,Y]of Object.entries(r.bindParameters))H($,Y,S,G);if(r.bindGeometryQuantizationParameters)!function y$1(r,o){o.input_quantization_parameters={xy_resolution:r.xyResolution,x_false_origin:r.xFalseOrigin,y_false_origin:r.yFalseOrigin,z_resolution:r.zResolution,z_false_origin:r.zFalseOrigin,m_resolution:r.mResolution,m_false_origin:r.mFalseOrigin}}(r.bindGeometryQuantizationParameters,S);else{if(o.dataModel||await A(o),4326!==(null==(f=null==(d=o.dataModel)?void 0:d.spatialReference)?void 0:f.wkid))throw new Y("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");S.input_quantization_parameters=G.InputQuantizationUtil.WGS84_lossless()}r.outputQuantizationParameters&&function m$2(r,o,d){if(!r.extent)throw new Y("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",r.extent);if(!r.quantizeMode)throw new Y("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",r.quantizeMode);if(!r.tolerance)throw new Y("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",r.quantizeMode);o.output_quantization_parameters={extent:{xmax:r.extent.xmax,ymax:r.extent.ymax,xmin:r.extent.xmin,ymin:r.extent.ymin},quantize_mode:d.esriQuantizeMode[r.quantizeMode],tolerance:r.tolerance}}(r.outputQuantizationParameters,S,G),r.provenanceBehavior&&function c$2(r,o){o.provenance_behavior={value:je[r]}}(r.provenanceBehavior,S);try{S.encode()}catch(N){throw new Y("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:N})}const k=S.get_encoding_result();if(0!==k.error.error_code)throw new Y("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:k.error.error_code,errorMessage:k.error.error_message});return structuredClone(k.get_byte_buffer())}(o,r);const k=await j(S.data.url,S.data);if(r.dataModel){const o=await U(k,r.dataModel);return new ce({resultRowsStream:o.readableStream,resultHeader:o.resultHeader})}throw new Y("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(r,o,d)=>{var f;if(null==(f=r.serviceDefinition)?void 0:f.dataEditingNotSupported)throw new Y("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const G=`${r.url}/graph/applyEdits`;await C(r);const S=await L(G,d);return S.data.body=await async function W(r,o){var d,f,G,S,k,N,$,B,V;if(o.dataModel||await A(o),!o.dataModel)throw new Y("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const Z=await r$2(),J=!!(null==(d=r.options)?void 0:d.cascadeDelete),X=new Z.GraphApplyEditsEncoder(Z.SpatialReferenceUtil.WGS84(),(null==(f=r.options)?void 0:f.inputQuantizationParameters)?function s2(r){return{xy_resolution:r.xyResolution,x_false_origin:r.xFalseOrigin,y_false_origin:r.yFalseOrigin,z_resolution:r.zResolution,z_false_origin:r.zFalseOrigin,m_resolution:r.mResolution,m_false_origin:r.mFalseOrigin}}(null==(G=r.options)?void 0:G.inputQuantizationParameters):Z.InputQuantizationUtil.WGS84_lossless());X.deleteLater(),X.cascade_delete=J;try{let o;null==(S=r.entityAdds)||S.forEach((r=>{o=X.add_entity(r$1(r,Z)),D(o,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),null==(k=r.relationshipAdds)||k.forEach((r=>{if(!r.originId||!r.destinationId)throw new Y("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");o=X.add_relationship(r$1(r,Z)),D(o,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),null==(N=r.entityUpdates)||N.forEach((r=>{if(!r.id)throw new Y("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");o=X.update_entity(r$1(r,Z)),D(o,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),null==($=r.relationshipUpdates)||$.forEach((r=>{if(!r.id)throw new Y("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");o=X.update_relationship(r$1(r,Z)),D(o,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),null==(B=r.entityDeletes)||B.forEach((r=>{var o;if(!r.typeName)throw new Y("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const d=X.make_delete_helper(r.typeName,!0);d.deleteLater(),null==(o=r.ids)||o.forEach((r=>{d.delete_by_id(r)}))})),null==(V=r.relationshipDeletes)||V.forEach((r=>{var o;if(!r.typeName)throw new Y("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const d=X.make_delete_helper(r.typeName,!1);null==(o=r.ids)||o.forEach((r=>{d.delete_by_id(r)}))})),X.encode()}catch(te){throw new Y("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:te})}const ee=X.get_encoding_result();return D(ee.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(ee.get_byte_buffer())}(o,r),async function I(r){const o=r.headers.get("content-type");if(null==o?void 0:o.includes("application/x-protobuf")){const o=await r.arrayBuffer(),d=new((await r$2()).GraphApplyEditsDecoder);return d.deleteLater(),d.decode(new Uint8Array(o)),function e2(r){const o=r.has_error(),d=new Ve({hasError:o,error:o?{errorCode:r.error.error_code,errorMessage:r.error.error_message}:null}),f=r.get_edit_results_count();for(let G=0;G<f;G++){const o=r.get_edit_results_at(G),f=r.get_edit_results_type_name_at(G),S=[],k=[],N=[],$=o.get_add_results_count(),Y=o.get_update_results_count(),B=o.get_delete_results_count();for(let r=0;r<$;r++){const d=o.get_add_result_at(r);S.push({id:d.id,error:{errorCode:d.error.error_code,errorMessage:d.error.error_message}})}for(let r=0;r<Y;r++){const d=o.get_update_result_at(r);k.push({id:d.id,error:{errorCode:d.error.error_code,errorMessage:d.error.error_message}})}for(let r=0;r<B;r++){const d=o.get_delete_result_at(r);N.push({id:d.id,error:{errorCode:d.error.error_code,errorMessage:d.error.error_message}})}d.editResults.push({typeName:f,adds:S,updates:k,deletes:N})}return d}(d)}throw new Y("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:o,data:r.text()})}(await j(S.data.url,S.data))},executeQuery:async(r,o,d)=>{var f;const G=`${r.url}/graph/query`,S=await te(G,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:o.openCypherQuery,...null==d?void 0:d.query},signal:null==d?void 0:d.signal,timeout:null==d?void 0:d.timeout}),k=null==(f=S.getHeader)?void 0:f.call(S,"content-type"),N=S.data;if(null==k?void 0:k.includes("application/x-protobuf")){const o=new((await r$2()).GraphQueryDecoder);if(o.deleteLater(),r.dataModel){const d=z(o,N,r.dataModel);return new pe({resultRows:d.resultRows,resultHeader:d.resultHeader})}throw new Y("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new Y("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:k,data:S.data})},executeSearch:async(r,o,d)=>{var f;const G=o.typeCategoryFilter,S=`${r.url}/graph/search`,k=await te(S,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${o.searchQuery}"`,typeCategoryFilter:G,...null==d?void 0:d.query},signal:null==d?void 0:d.signal,timeout:null==d?void 0:d.timeout}),N=null==(f=k.getHeader)?void 0:f.call(k,"content-type"),$=k.data;if(null==N?void 0:N.includes("application/x-protobuf")){const o=new((await r$2()).GraphQueryDecoder);if(o.deleteLater(),r.dataModel){const d=z(o,$,r.dataModel);return new pe({resultRows:d.resultRows,resultHeader:d.resultHeader})}throw new Y("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new Y("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:N,data:k.data})},executeSearchStreaming:async(r,o,d)=>{const f=`${r.url}/graph/search`;await C(r);const G=await L(f,d);G.data.body=await async function F(r){var o;const d=await r$2(),f=new d.GraphSearchRequestEncoder;if(f.deleteLater(),f.search_query=r.searchQuery,f.type_category_filter=d.esriNamedTypeCategory[r.typeCategoryFilter],!0===r.returnSearchContext&&(f.return_search_context=r.returnSearchContext),null!=r.start&&r.start>0&&(f.start_index=r.start),null!=r.num&&(f.max_num_results=r.num),null!=r.idsFilter&&Array.isArray(r.idsFilter)&&r.idsFilter.length>0)try{f.set_ids_filter(s$1(r.idsFilter,d))}catch(G){throw new Y("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:G})}null==(o=r.namedTypesFilter)||o.forEach((r=>{f.add_named_type_filter(r)}));try{f.encode()}catch(G){throw new Y("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:G})}const S=f.get_encoding_result();if(0!==S.error.error_code)throw new Y("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:S.error.error_code,errorMessage:S.error.error_message});return structuredClone(S.get_byte_buffer())}(o);const S=await j(G.data.url,G.data);if(r.dataModel){const o=await U(S,r.dataModel);return new ce({resultRowsStream:o.readableStream,resultHeader:o.resultHeader})}throw new Y("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},_fetchWrapper:async(r,o)=>fetch(r,o)};async function T(r,o,d){return Ke.executeQueryStreaming(r,o,d)}async function R(r){return Ke.fetchKnowledgeGraph(r)}async function A(r){return Ke.refreshDataModel(r)}async function M(r){return Ke.refreshServiceDefinition(r)}async function j(r,o){return Ke._fetchWrapper(r,o)}async function C(r){var o;(null==(o=re)?void 0:o.findCredential(r.url))||(r.dataModel?await K(r):await A(r))}function D(r,o,d){if(0!==r.error_code)throw new Y(o,d,{errorCode:r.error_code,errorMessage:r.error_message})}function H(r,o,d,f){null==o?d.set_param_key_value(r,""):"object"!=typeof o||o instanceof Date?d.set_param_key_value(r,o):o instanceof B?d.set_param_key_value(r,u(o,f)):Array.isArray(o)?d.set_param_key_value(r,s$1(o,f)):d.set_param_key_value(r,l$1(o,f))}async function L(r,o){return te(r,{responseType:"native-request-init",method:"post",query:{f:"pbf",...null==o?void 0:o.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:null==o?void 0:o.signal,timeout:null==o?void 0:o.timeout})}function z(r,o,d,f){r.push_buffer(new Uint8Array(o));const G=[];let k,N,$=0;for(;r.next_row();){k&&N||(k=f??w(r),N=k.outSpatialReference??new S({wkid:4326})),$||($=r.get_header_keys().size());const o=new Array($);for(let f=0;f<$;f++){const G=r.get_value(f);o[f]=g(G,d,N)}G.push(o)}if(r.has_error())throw new Y("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - inner row decoding",{errorCode:r.error.error_code,errorMessage:r.error.error_message});return{resultHeader:k,resultRows:G}}async function U(r,o){var d;const f=r.headers.get("content-type");if(r.headers.get("content-length")&&ee.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),null==f?void 0:f.includes("application/x-protobuf")){const f=null==(d=r.body)?void 0:d.getReader(),G=new((await r$2()).GraphQueryDecoder);let S,k,N;G.deleteLater();const $=new Promise(((r,o)=>{k=r,N=o}));let B=!1;return{readableStream:new ReadableStream({async start(r){try{return function p5(){return null==f?void 0:f.read().then((({done:d,value:$})=>{try{if(d){let o;if(G.has_error()?o=new Y("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - query stream done",{errorCode:G.error.error_code,errorMessage:G.error.error_message}):B||k(new le),f.releaseLock(),o)throw r.error(o),N(o),o;return void r.close()}const V=z(G,$,o,S),Z=V.resultRows;return Z.length>0&&r.enqueue(Z),!S&&V.resultHeader&&(S=V.resultHeader,k(V.resultHeader),B=!0),p5()}catch(V){throw ee.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(V),N(V),new Y("knowledge-graph:unexpected-server-response","Error inside streaming data return parsing",{error:V})}}))}()}catch(d){null==f||f.releaseLock(),r.error(new Y("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:d})),r.close()}}}),resultHeader:await $}}throw new Y("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:f,data:r.text()})}async function K(r){var o;const d=`${r.url}/dataModel/queryDataModel`,f=await te(d,{responseType:"array-buffer",query:{f:"pbf"}}),G=null==(o=f.getHeader)?void 0:o.call(f,"content-type"),k=f.data;if(null==G?void 0:G.includes("application/x-protobuf")){const r=(await r$2()).decode_data_model_from_protocol_buffer(new Uint8Array(k));if(!r)throw new Y("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return function _(r){var o,d,f,G,k,N,$,Y,B,V,Z;return r.deleteLater(),new Ie({timestamp:r.timestamp,spatialReference:new S(r.spatial_reference),strict:r.strict,objectIdField:r.objectid_property,globalIdField:r.globalid_property,arcgisManaged:r.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:qe[null==(f=null==(d=null==(o=r.identifier_info)?void 0:o.identifier_mapping_info)?void 0:d.identifier_info_type)?void 0:f.value],databaseNativeIdentifier:null==(k=null==(G=r.identifier_info)?void 0:G.identifier_mapping_info)?void 0:k.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:null==(Y=null==($=null==(N=r.identifier_info)?void 0:N.identifier_mapping_info)?void 0:$.uniform_property_identifier)?void 0:Y.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:ze[null==(Z=null==(V=null==(B=r.identifier_info)?void 0:B.identifier_generation_info)?void 0:V.uuid_method_hint)?void 0:Z.value]}},searchIndexes:M$1(r.search_indexes),entityTypes:j$2(r.entity_types),relationshipTypes:x$1(r.relationship_types),metaEntityTypes:j$2(r.meta_entity_types)})}(r)}throw new Y("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:G,data:f.data})}const We=Object.freeze(Object.defineProperty({__proto__:null,_fetchWrapper:j,executeApplyEdits:async function x(r,o,d){return Ke.executeApplyEdits(r,o,d)},executeQuery:async function E(r,o,d){return Ke.executeQuery(r,o,d)},executeQueryStreaming:T,executeSearch:async function q(r,o,d){return Ke.executeSearch(r,o,d)},executeSearchStreaming:async function Q(r,o,d){return Ke.executeSearchStreaming(r,o,d)},fetchKnowledgeGraph:R,kgRestServices:Ke,refreshDataModel:A,refreshServiceDefinition:M},Symbol.toStringTag,{value:"Module"}));export{R,T,We as k,r$2 as r};
