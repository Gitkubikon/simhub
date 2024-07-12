/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */
const guid=()=>function gen(t){return t.map((t=>{let n="";for(let r=0;r<t;r++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}([2,1,1,1,3]);export{guid as g};
