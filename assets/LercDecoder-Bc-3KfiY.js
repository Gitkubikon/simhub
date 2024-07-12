import{h as e}from"./WorkerHandle-Bq2affGI.js";class a{constructor(e,t,i,l){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=l)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let i=1/0,l=-1/0,u=!0;for(const h of t)h===e?this._hasNoDataValues=!0:(i=h<i?h:i,l=h>l?h:l,u=!1);u?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=l>-3e38?l:0)}}class r extends e{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(t.forEach(((e,i)=>{e===this&&t.delete(i)})),this.destroy())}}const t=new Map;function s(e=null){let i=t.get(e);return i||(null!=e?(i=new r((t=>e.immediate.schedule(t))),t.set(e,i)):(i=new r,t.set(null,i))),++i.ref,i}export{a,s};