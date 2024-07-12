import{g as t}from"./guid-DBupVat2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var e=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],n=e.join(","),r="undefined"==typeof Element,o=r?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!r&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return null==t?void 0:t.ownerDocument},a=function isInert2(t,e){var n;void 0===e&&(e=!0);var r=null==t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"inert");return""===r||"true"===r||e&&t&&isInert2(t.parentNode)},s=function getCandidates2(t,e,r){if(a(t))return[];var i=Array.prototype.slice.apply(t.querySelectorAll(n));return e&&o.call(t,n)&&i.unshift(t),i=i.filter(r)},l=function getCandidatesIteratively2(t,e,r){for(var i=[],s=Array.from(t);s.length;){var l=s.shift();if(!a(l,!1))if("SLOT"===l.tagName){var u=l.assignedElements(),d=getCandidatesIteratively2(u.length?u:l.children,!0,r);r.flatten?i.push.apply(i,d):i.push({scopeParent:l,candidates:d})}else{o.call(l,n)&&r.filter(l)&&(e||!t.includes(l))&&i.push(l);var c=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),f=!a(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(c&&f){var m=getCandidatesIteratively2(!0===c?l.children:c.children,!0,r);r.flatten?i.push.apply(i,m):i.push({scopeParent:l,candidates:m})}else s.unshift.apply(s,l.children)}}return i},u=function hasTabIndex2(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},d=function getTabIndex2(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function isContentEditable2(t){var e,n=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n}(t))&&!u(t)?0:t.tabIndex},c=function sortOrderedTabbables2(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},f=function isInput2(t){return"INPUT"===t.tagName},m=function isNonTabbableRadio2(t){return function isRadio2(t){return f(t)&&"radio"===t.type}(t)&&!function isTabbableRadio2(t){if(!t.name)return!0;var e,n=t.form||i(t),r=function queryRadios2(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=r(window.CSS.escape(t.name));else try{e=r(t.name)}catch(a){return!1}var o=function getCheckedRadio2(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!o||o===t}(t)},g=function isZeroArea2(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;return 0===n&&0===r},h=function isHidden2(t,e){var n=e.displayCheck,r=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var a=o.call(t,"details>summary:first-of-type")?t.parentElement:t;if(o.call(a,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return g(t)}else{if("function"==typeof r){for(var s=t;t;){var l=t.parentElement,u=i(t);if(l&&!l.shadowRoot&&!0===r(l))return g(t);t=t.assignedSlot?t.assignedSlot:l||u===t.ownerDocument?l:u.host}t=s}if(function isNodeAttached2(t){var e,n,r,o,a=t&&i(t),s=null===(e=a)||void 0===e?void 0:e.host,l=!1;if(a&&a!==t)for(l=!!(null!==(n=s)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(s)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!l&&s;){var u,d,c;l=!(null===(d=s=null===(u=a=i(s))||void 0===u?void 0:u.host)||void 0===d||null===(c=d.ownerDocument)||void 0===c||!c.contains(s))}return l}(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1},p=function isNodeMatchingSelectorFocusable2(t,e){return!(e.disabled||a(e)||function isHiddenInput2(t){return f(t)&&"hidden"===t.type}(e)||h(e,t)||function isDetailsWithSummary2(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function isDisabledFromFieldset2(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var r=e.children.item(n);if("LEGEND"===r.tagName)return!!o.call(e,"fieldset[disabled] *")||!r.contains(t)}return!0}e=e.parentElement}return!1}(e))},v=function isNodeMatchingSelectorTabbable2(t,e){return!(m(e)||d(e)<0||!p(t,e))},y=function isValidShadowRootTabbable2(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},b=function sortByOrder2(t){var e=[],n=[];return t.forEach((function(t,r){var o=!!t.scopeParent,i=o?t.scopeParent:t,a=function getSortOrderTabIndex2(t,e){var n=d(t);return n<0&&e&&!u(t)?0:n}(i,o),s=o?sortByOrder2(t.candidates):i;0===a?o?e.push.apply(e,s):e.push(i):n.push({documentOrder:r,tabIndex:a,item:t,isScope:o,content:s})})),n.sort(c).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(e)},E=function tabbable2(t,e){var n;return n=(e=e||{}).getShadowRoot?l([t],e.includeContainer,{filter:v.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:y}):s(t,e.includeContainer,v.bind(null,e)),b(n)},S=function focusable2(t,e){return(e=e||{}).getShadowRoot?l([t],e.includeContainer,{filter:p.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):s(t,e.includeContainer,p.bind(null,e))},w=function isTabbable2(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==o.call(t,n)&&v(e,t)},A=e.concat("iframe").join(","),C=function isFocusable2(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==o.call(t,A)&&p(e,t)};const T={getShadowRoot:!0};function ensureId(e){return e?e.id=e.id||`${e.tagName.toLowerCase()}-${t()}`:""}function getElementDir(t){const e=closestElementCrossShadowBoundary(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function getRootNode(t){return t.getRootNode()}function getHost(t){return t.host||null}function queryElementRoots(t,{selector:e,id:n}){return function queryFrom(t){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const r=getRootNode(t),o=n?"getElementById"in r?r.getElementById(n):null:e?r.querySelector(e):null,i=getHost(r);return o||(i?queryFrom(i):null)}(t)}function closestElementCrossShadowBoundary(t,e){return function closestFrom(t){return t?t.closest(e)||closestFrom(getHost(getRootNode(t))):null}(t)}function walkUpAncestry(t,e){return visit(t,e)}function visit(t,e){if(!t)return;const n=e(t);if(void 0!==n)return n;const{parentNode:r}=t;return visit(r instanceof ShadowRoot?r.host:r,e)}function containsCrossShadowBoundary(t,e){return!!walkUpAncestry(e,(e=>e===t||void 0))}async function focusElement(t){if(t)return function isCalciteFocusable(t){return"function"==typeof(null==t?void 0:t.setFocus)}(t)?t.setFocus():t.focus()}function getFirstTabbable(t){if(t)return E(t,T)[0]??t}function focusFirstTabbable(t){var e;null==(e=getFirstTabbable(t))||e.focus()}const N=":not([slot])";function getSlotted(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null);const r=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:N;return(null==n?void 0:n.all)?function queryMultiple(t,e,n){let r=e===N?getDirectChildren(t,N):Array.from(t.querySelectorAll(e));r=n&&!1===n.direct?r:r.filter((e=>e.parentElement===t)),r=(null==n?void 0:n.matches)?r.filter((t=>null==t?void 0:t.matches(n.matches))):r;const o=null==n?void 0:n.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):r}(t,r,n):function querySingle(t,e,n){let r=e===N?getDirectChildren(t,N)[0]||null:t.querySelector(e);r=n&&!1===n.direct||(null==r?void 0:r.parentElement)===t?r:null,r=(null==n?void 0:n.matches)?(null==r?void 0:r.matches(n.matches))?r:null:r;const o=null==n?void 0:n.selector;return o?null==r?void 0:r.querySelector(o):r}(t,r,n)}function getDirectChildren(t,e){return t?Array.from(t.children||[]).filter((t=>null==t?void 0:t.matches(e))):[]}function setRequestedIcon(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function toAriaBoolean(t){return Boolean(t).toString()}function slotChangeHasContent(t){return slotChangeHasAssignedElement(t)||function slotChangeHasTextContent(t){return!!function slotChangeGetTextContent(t){return function slotChangeGetAssignedNodes(t){return t.currentTarget.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function slotChangeHasAssignedElement(t){return!!slotChangeGetAssignedElements(t).length}function slotChangeGetAssignedElements(t){return t.currentTarget.assignedElements({flatten:!0})}function isPrimaryPointerButton(t){return!(!t.isPrimary||0!==t.button)}function isKeyboardTriggeredClick(t){return 0===t.detail}const focusElementInGroup=(t,e,n,r=!0)=>{const o=t.indexOf(e),i=0===o,a=o===t.length-1;let s;return r&&(n="previous"===n&&i?"last":"next"===n&&a?"first":n),s="previous"===n?t[o-1]||t[r?t.length-1:o]:"next"===n?t[o+1]||t[r?0:o]:"last"===n?t[t.length-1]:t[0],focusElement(s),s};function isBefore(t,e){if(t.parentNode!==e.parentNode)return!1;const n=Array.from(t.parentNode.children);return n.indexOf(t)<n.indexOf(e)}async function whenTransitionDone(t,e,n,r){return async function whenTransitionOrAnimationDone(t,e,n,r,o){const i=window.getComputedStyle(t),a=i.transitionDuration,s=i.transitionProperty,l=a.split(","),u=s.split(",").indexOf(e),d=l[u]??l[0];function startEndImmediately(){null==r||r(),null==o||o()}if("0s"===d)return void startEndImmediately();const c="transitionstart",f="transitionend",m="transitioncancel";return new Promise((n=>{const i=window.setTimeout((()=>{t.removeEventListener(c,onTransitionOrAnimationStart),t.removeEventListener(f,onTransitionOrAnimationEndOrCancel),t.removeEventListener(m,onTransitionOrAnimationEndOrCancel),startEndImmediately(),n()}),1e3*parseFloat(d));function onTransitionOrAnimationStart(n){n.target===t&&getTransitionOrAnimationName(n)===e&&(window.clearTimeout(i),t.removeEventListener(c,onTransitionOrAnimationStart),null==r||r())}function onTransitionOrAnimationEndOrCancel(r){r.target===t&&getTransitionOrAnimationName(r)===e&&(t.removeEventListener(f,onTransitionOrAnimationEndOrCancel),t.removeEventListener(m,onTransitionOrAnimationEndOrCancel),null==o||o(),n())}t.addEventListener(c,onTransitionOrAnimationStart),t.addEventListener(f,onTransitionOrAnimationEndOrCancel),t.addEventListener(m,onTransitionOrAnimationEndOrCancel)}))}(t,e,0,n,r)}function getTransitionOrAnimationName(t){return function isTransitionEvent(t){return"propertyName"in t}(t)?t.propertyName:t.animationName}export{T as a,C as b,closestElementCrossShadowBoundary as c,E as d,S as e,focusElement as f,getElementDir as g,w as h,isBefore as i,d as j,slotChangeHasContent as k,getSlotted as l,focusFirstTabbable as m,ensureId as n,containsCrossShadowBoundary as o,slotChangeGetAssignedElements as p,queryElementRoots as q,getFirstTabbable as r,slotChangeHasAssignedElement as s,toAriaBoolean as t,setRequestedIcon as u,focusElementInGroup as v,whenTransitionDone as w,isKeyboardTriggeredClick as x,isPrimaryPointerButton as y};