class t{constructor(e=[]){this._elements=e}length(){return this._elements.length}get(e){return this._elements[e]}toArray(){return this.slice()}slice(e=0,s=this.length()){const r=[];for(let n=e;n<s;n++)r.push(this.get(n));return r}}export{t};