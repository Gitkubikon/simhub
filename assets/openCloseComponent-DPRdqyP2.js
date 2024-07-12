import{gK as o}from"./index-DSIPxOWi.js";import{w as n}from"./dom-CG95YN3b.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const e=o;function isOpen(o){return"opened"in o?o.opened:o.open}function onToggleOpenCloseComponent(o){e((()=>{o.transitionEl&&n(o.transitionEl,o.openTransitionProp,(()=>{isOpen(o)?o.onBeforeOpen():o.onBeforeClose()}),(()=>{isOpen(o)?o.onOpen():o.onClose()}))}))}export{onToggleOpenCloseComponent as o};
