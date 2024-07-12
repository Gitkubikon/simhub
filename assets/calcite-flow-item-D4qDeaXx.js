import{eC as x,eD as w,gL as m,eA as t,eE as E}from"./index-DG8rgzil.js";import{s as d,p as X,m as Y,t as S,g as Z}from"./dom-CHkDf_0S.js";import{c as A,u as B,d as F,I as H}from"./interactive-BZ0-Qq_N.js";import{s as z,a as L,c as P}from"./loadable-Wqc462-F.js";import{c as T,a as I,s as M,d as O,b as D,u as $}from"./t9n-Cq4z2yKO.js";import{c as N}from"./observers-DRg9lgCB.js";import{d as R,a as _,S as ee,H as te}from"./action-menu-B71L8pog.js";import{d as W}from"./action-CQ14oPJK.js";import{d as K}from"./icon-_vX46mU4.js";import{d as j}from"./loader-O1WZjVYe.js";import{d as U}from"./scrim-CidSxroj.js";import"./guid-6Y9utpk5.js";import"./key-O8wPdnVC.js";import"./floating-ui-BQRCqqSa.js";import"./debounce-MQc9YFxo.js";import"./focusTrapComponent-BZJyPkgq.js";import"./openCloseComponent-CVtkK1mN.js";import"./component-RjiOe4wK.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const s={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",contentBottom:"content-bottom",contentTop:"content-top",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},v={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},a={actionBar:"action-bar",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerEnd:"footer-end",footerStart:"footer-start",footerActions:"footer-actions"},oe=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]) .content-top,:host([scale=s]) .content-bottom{padding:var(--calcite-spacing-sm)}:host([scale=m]) .content-top,:host([scale=m]) .content-bottom{padding:var(--calcite-spacing-md)}:host([scale=l]) .content-top,:host([scale=l]) .content-bottom{padding:var(--calcite-spacing-xl)}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;padding:var(--calcite-spacing-md);border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-spacing-sm);column-gap:0;row-gap:var(--calcite-spacing-md)}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){display:flex;align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto;gap:var(--calcite-spacing-md)}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){display:flex;align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;gap:var(--calcite-spacing-md)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}",ne=oe,ae=x(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=m(this,"calcitePanelClose",6),this.calcitePanelToggle=m(this,"calcitePanelToggle",6),this.calcitePanelScroll=m(this,"calcitePanelScroll",6),this.resizeObserver=N("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=d(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=d(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=d(e)},this.handleActionBarSlotChange=e=>{const o=X(e).filter(n=>n==null?void 0:n.matches("calcite-action-bar"));o.forEach(n=>n.layout="horizontal"),this.hasActionBar=!!o.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=d(e)},this.handleFabSlotChange=e=>{this.hasFab=d(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=d(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=d(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=d(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=d(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=d(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=d(e)},this.setPanelScrollEl=e=>{var o,n;this.panelScrollEl=e,(o=this.resizeObserver)==null||o.disconnect(),e&&((n=this.resizeObserver)==null||n.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){A(this),T(this),I(this)}async componentWillLoad(){z(this),await M(this)}componentDidLoad(){L(this)}componentDidRender(){B(this)}disconnectedCallback(){var e;F(this),O(this),D(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){$(this,this.effectiveLocale)}async setFocus(){await P(this),Y(this.containerEl)}async scrollContentTo(e){var o;(o=this.panelScrollEl)==null||o.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:o,description:n,hasHeaderContent:i}=this,c=e?t(te,{class:s.heading,level:o},e):null,l=n?t("span",{class:s.description},n):null;return!i&&(c||l)?t("div",{class:s.headerContent,key:"header-content"},c,l):null}renderActionBar(){return t("div",{class:s.actionBarContainer,hidden:!this.hasActionBar},t("slot",{name:a.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return t("div",{class:s.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},t("slot",{name:a.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return t("div",{class:{[s.headerActionsStart]:!0,[s.headerActions]:!0},hidden:!e,key:"header-actions-start"},t("slot",{name:a.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:o,closable:n,collapsed:i,collapseDirection:c,collapsible:l,hasMenuItems:h}=this,{collapse:f,expand:b,close:p}=o,g=[v.expand,v.collapse];c==="up"&&g.reverse();const u=l?t("calcite-action",{"aria-expanded":S(!i),"aria-label":f,"data-test":"collapse",icon:i?g[0]:g[1],onClick:this.collapse,text:f,title:i?b:f}):null,C=n?t("calcite-action",{"aria-label":p,"data-test":"close",icon:v.close,onClick:this.close,text:p,title:p}):null,Q=t("slot",{name:a.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),V=e||u||C||h;return t("div",{class:{[s.headerActionsEnd]:!0,[s.headerActions]:!0},hidden:!V,key:"header-actions-end"},Q,this.renderMenu(),u,C)}renderMenu(){const{hasMenuItems:e,messages:o,menuOpen:n}=this;return t("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:o.options,open:n,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},t("calcite-action",{icon:v.menu,slot:ee.trigger,text:o.options}),t("slot",{name:a.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:o,hasEndActions:n,closable:i,collapsible:c,hasMenuItems:l,hasActionBar:h}=this,f=this.renderHeaderContent(),b=e||!!f||o||n||c||i||l;return this.showHeaderContent=b,t("header",{class:s.header,hidden:!(b||h)},t("div",{class:{[s.headerContainer]:!0,[s.headerContainerBorderEnd]:h},hidden:!b},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),f,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:o,hasFooterContent:n,hasFooterActions:i}=this,c=o||e||n||i;return t("footer",{class:s.footer,hidden:!c},t("slot",{name:a.footer,onSlotchange:this.handleFooterSlotChange},t("slot",{name:a.footerStart,onSlotchange:this.handleFooterStartSlotChange}),t("slot",{name:a.footerEnd,onSlotchange:this.handleFooterEndSlotChange})),t("slot",{key:"footer-actions-slot",name:a.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return t("div",{class:s.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},t("slot",null),this.renderFab())}renderContentBottom(){return t("div",{class:s.contentBottom,hidden:!this.hasContentBottom},t("slot",{name:a.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return t("div",{class:s.contentTop,hidden:!this.hasContentTop},t("slot",{name:a.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return t("div",{class:s.fabContainer,hidden:!this.hasFab},t("slot",{name:a.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:o,panelKeyDownHandler:n,closed:i,closable:c}=this,l=t("article",{key:"a9ec3de60dbfa095ed5c18040738603975f35882","aria-busy":S(o),class:s.container,hidden:i,ref:this.setContainerRef,tabIndex:c?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode());return t(E,{key:"d2dfb299ed634f2e67d3390c5d29386c6faa0373",onKeyDown:n},t(H,{key:"2f139a9fcb0f57682e0e85ba1a6aec5b53a499d7",disabled:e},o?t("calcite-scrim",{loading:o}):null,l))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ne}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFab:[32],hasFooterActions:[32],hasFooterContent:[32],hasFooterEndContent:[32],hasFooterStartContent:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function G(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,ae);break;case"calcite-action":customElements.get(e)||W();break;case"calcite-action-menu":customElements.get(e)||_();break;case"calcite-icon":customElements.get(e)||K();break;case"calcite-loader":customElements.get(e)||j();break;case"calcite-popover":customElements.get(e)||R();break;case"calcite-scrim":customElements.get(e)||U();break}})}G();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const se={backButton:"back-button"},y={backLeft:"chevron-left",backRight:"chevron-right"},r={actionBar:"action-bar",contentTop:"content-top",contentBottom:"content-bottom",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions",footerEnd:"footer-end",footerStart:"footer-start"},ie=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",ce=ie,q=x(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=m(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=m(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=m(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=m(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){A(this),T(this),I(this)}async componentWillLoad(){await M(this),z(this)}componentDidRender(){B(this)}disconnectedCallback(){F(this),O(this),D(this)}componentDidLoad(){L(this)}effectiveLocaleChange(){$(this,this.effectiveLocale)}async setFocus(){await P(this);const{backButtonEl:e,containerEl:o}=this;if(e)return e.setFocus();if(o)return o.setFocus()}async scrollContentTo(e){var o;await((o=this.containerEl)==null?void 0:o.scrollContentTo(e))}renderBackButton(){const{el:e}=this,o=Z(e)==="rtl",{showBackButton:n,backButtonClick:i,messages:c}=this,l=c.back,h=o?y.backRight:y.backLeft;return n?t("calcite-action",{"aria-label":l,class:se.backButton,icon:h,key:"flow-back-button",onClick:i,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:l,title:l}):null}render(){const{collapsed:e,collapseDirection:o,collapsible:n,closable:i,closed:c,description:l,disabled:h,heading:f,headingLevel:b,loading:p,menuOpen:g,messages:u,overlayPositioning:C}=this;return t(E,{key:"386f2c2d780c8b3a1be28a8680b6f99c9ded37e6"},t(H,{key:"6e80e71a06923e966ac75f8b8c172586444e3ccb",disabled:h},t("calcite-panel",{key:"175b4bcfdecb5b4c59d5c76db6fcae7975ee5884",closable:i,closed:c,collapseDirection:o,collapsed:e,collapsible:n,description:l,disabled:h,heading:f,headingLevel:b,loading:p,menuOpen:g,messageOverrides:u,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:C,ref:this.setContainerRef},this.renderBackButton(),t("slot",{key:"6e0ac6b3c3b62a5be7a6a21fbe55e56c1d4ad90a",name:r.actionBar,slot:a.actionBar}),t("slot",{key:"b2036686e62d9b5c8ecc39e8ee025e98798d7dec",name:r.headerActionsStart,slot:a.headerActionsStart}),t("slot",{key:"66c09bbb9cd21327a9cc04b3046c5264b475a77d",name:r.headerActionsEnd,slot:a.headerActionsEnd}),t("slot",{key:"cd02bc580db5ecdd98b0bbbfa99655871c04bda4",name:r.headerContent,slot:a.headerContent}),t("slot",{key:"b855684ce946c66b4c13756abd1865ab420715f0",name:r.headerMenuActions,slot:a.headerMenuActions}),t("slot",{key:"f1d29575abbdb582c04d674dfef7f4a9d385da10",name:r.fab,slot:a.fab}),t("slot",{key:"3033128596131e0f1fd62b28cba07957d1707d0c",name:r.contentTop,slot:a.contentTop}),t("slot",{key:"c8cf03fbacebe288afc909b9c8989242c201df8c",name:r.contentBottom,slot:a.contentBottom}),t("slot",{key:"09e19f66b3a855689539dc511b1b826830a90283",name:r.footer,slot:a.footer},t("slot",{key:"e7519384a44ee5f1f19d9747c44007ca7b95f4c8",name:r.footerStart,slot:a.footerStart}),t("slot",{key:"abd54ab99d62783f603118361bda307c3d108af0",name:r.footerEnd,slot:a.footerEnd})),t("slot",{key:"9319eff4559e39701a1f838c1add5b8f57f01f2b",name:r.footerActions,slot:a.footerActions}),t("slot",{key:"bd1cc6da3068868bfaf3ba8a0e524d0d138db940"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ce}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function J(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,q);break;case"calcite-action":customElements.get(e)||W();break;case"calcite-action-menu":customElements.get(e)||_();break;case"calcite-icon":customElements.get(e)||K();break;case"calcite-loader":customElements.get(e)||j();break;case"calcite-panel":customElements.get(e)||G();break;case"calcite-popover":customElements.get(e)||R();break;case"calcite-scrim":customElements.get(e)||U();break}})}J();const Fe=q,He=J;export{Fe as CalciteFlowItem,He as defineCustomElement};