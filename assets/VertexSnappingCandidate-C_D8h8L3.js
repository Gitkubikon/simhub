import{n as r,g as n}from"./SnappingManagerPool-DZAYLPJV.js";import{n as s}from"./PointSnappingHint-C3ol3Cwd.js";class a extends r{constructor(t){super({...t,constraint:new n(t.targetPoint)})}get hints(){return[new s(this.targetPoint,this.isDraped,this.domain)]}}export{a as r};