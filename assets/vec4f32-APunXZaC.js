function n(){return new Float32Array(4)}function t(l){const _=new Float32Array(4);return _[0]=l[0],_[1]=l[1],_[2]=l[2],_[3]=l[3],_}function r(l,_,s,y){const w=new Float32Array(4);return w[0]=l,w[1]=_,w[2]=s,w[3]=y,w}function o(){return n()}function u(){return r(1,1,1,1)}function c(){return r(1,0,0,0)}function i(){return r(0,1,0,0)}function a(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const l=o(),_=u(),s=c(),y=i(),w=a(),N=f();Object.freeze(Object.defineProperty({__proto__:null,ONES:_,UNIT_W:N,UNIT_X:s,UNIT_Y:y,UNIT_Z:w,ZEROS:l,clone:t,create:n,createView:function e(l,_){return new Float32Array(l,_,4)},fromValues:r,ones:u,unitW:f,unitX:c,unitY:i,unitZ:a,zeros:o},Symbol.toStringTag,{value:"Module"}));export{r,t};
