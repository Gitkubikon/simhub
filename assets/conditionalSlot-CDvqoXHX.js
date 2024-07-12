import{eB as o}from"./index-DSIPxOWi.js";import{c as n}from"./observers-4D3dvPBC.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */let t;const e={childList:!0};function connectConditionalSlotComponent(o){t||(t=n("mutation",processMutations)),t.observe(o.el,e)}function disconnectConditionalSlotComponent(o){t.unobserve(o.el)}function processMutations(n){n.forEach((({target:n})=>{o(n)}))}export{connectConditionalSlotComponent as c,disconnectConditionalSlotComponent as d};
