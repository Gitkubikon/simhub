import{aE as e,aF as t}from"./index-DSIPxOWi.js";class s{constructor(t){this._observable=new e,this._set=new Set(t)}get size(){return t(this._observable),this._set.size}add(e){const t=this._set.size;return this._set.add(e),this._set.size!==t&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(e){const t=this._set.delete(e);return t&&this._observable.notify(),t}entries(){return t(this._observable),this._set.entries()}forEach(e,r){t(this._observable),this._set.forEach(((t,i)=>e.call(r,t,i,this)),r)}has(e){return t(this._observable),this._set.has(e)}keys(){return t(this._observable),this._set.keys()}values(){return t(this._observable),this._set.values()}[Symbol.iterator](){return t(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{s};
