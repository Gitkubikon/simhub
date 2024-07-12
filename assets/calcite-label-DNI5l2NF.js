import{eC as e,eD as t,gL as a,eA as i,eE as n}from"./index-DSIPxOWi.js";import{a as l,l as s,b as o}from"./label-B0K2ZKoz.js";import"./dom-CG95YN3b.js";import"./guid-DBupVat2.js";import"./component-BaDXbCam.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const c="container",r=e(class Label2 extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=a(this,"calciteInternalLabelClick",2),this.labelClickHandler=e=>{this.calciteInternalLabelClick.emit({sourceEvent:e})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}handleForChange(){l(this.el)}connectedCallback(){document.dispatchEvent(new CustomEvent(s))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(o))}render(){return i(n,{key:"881662c0e2e7008bd94e8e25288ef06fac57269e",onClick:this.labelClickHandler},i("div",{key:"62c28743dc66b4dc926d3a61c496f3d93c109041",class:c},i("slot",{key:"b20f7cefe52688d3f76972f1d4940051baab504a"})))}get el(){return this}static get watchers(){return{for:["handleForChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]},void 0,{for:["handleForChange"]}]);function defineCustomElement$1(){if("undefined"==typeof customElements)return;["calcite-label"].forEach((e=>{if("calcite-label"===e)customElements.get(e)||customElements.define(e,r)}))}defineCustomElement$1();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */
const d=r,h=defineCustomElement$1;export{d as CalciteLabel,h as defineCustomElement};