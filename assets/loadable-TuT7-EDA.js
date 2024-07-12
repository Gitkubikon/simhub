import{eB as e}from"./index-DSIPxOWi.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const n=new WeakMap,o=new WeakMap;function setUpLoadableComponent(e){o.set(e,new Promise((o=>n.set(e,o))))}function setComponentLoaded(e){n.get(e)()}async function componentFocusable(n){return await function componentLoaded(e){return o.get(e)}(n),e(n),new Promise((e=>requestAnimationFrame((()=>e()))))}export{setComponentLoaded as a,componentFocusable as c,setUpLoadableComponent as s};
