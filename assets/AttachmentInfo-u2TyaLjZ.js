import{e as o,y as e,gw as i,a as r,bk as l}from"./index-DSIPxOWi.js";var a;const d={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let s=a=class extends l{constructor(o){super(o),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:o}=this,e=function n(o){const{exifInfo:e,exifName:i,tagName:r}=o;if(!e||!i||!r)return null;const l=e.find((o=>o.name===i));return l?function t(o){const{tagName:e,tags:i}=o;if(!i||!e)return null;const r=i.find((o=>o.name===e));return(null==r?void 0:r.value)||null}({tagName:r,tags:l.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:o});return d[e]||null}clone(){return new a({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};o([e({type:String})],s.prototype,"contentType",void 0),o([e()],s.prototype,"exifInfo",void 0),o([e({readOnly:!0})],s.prototype,"orientationInfo",null),o([e({type:i})],s.prototype,"id",void 0),o([e({type:String})],s.prototype,"globalId",void 0),o([e({type:String})],s.prototype,"keywords",void 0),o([e({type:String})],s.prototype,"name",void 0),o([e({json:{read:!1}})],s.prototype,"parentGlobalId",void 0),o([e({json:{read:!1}})],s.prototype,"parentObjectId",void 0),o([e({type:i})],s.prototype,"size",void 0),o([e({json:{read:!1}})],s.prototype,"url",void 0),s=a=o([r("esri.rest.query.support.AttachmentInfo")],s);const p=s;export{p as a};
