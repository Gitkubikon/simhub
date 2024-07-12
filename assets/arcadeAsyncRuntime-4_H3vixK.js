import{C as e,Y as t,M as n,L as r,f as o,a,z as i,b as l,r as s,p as c,e as u,o as f,s as w,c as p,x as d,O as h,R as m,J as g,_ as y,d as v,u as b,G as S,N as x,U as I,Q as C,H as F,B as R,E as A,g as M,h as O,m as k,i as L,j as B,k as E,Z as N,D as j,l as P,n as U,q,t as G}from"./arcadeUtils-CHsZDnQG.js";import{registerFunctions as K}from"./geomasync-CEAkjwG1.js";import{I as T,g_ as Z}from"./index-DSIPxOWi.js";import"./TimeOnly-C5lZbbIX.js";import"./ImmutableArray-BLzlMo4D.js";import"./number-DXNV0RYc.js";import"./hash-BjBdcEEU.js";import"./portalUtils-CJNVYHNM.js";import"./geometryEngineAsync--5NbEF1a.js";const D=100;async function W(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await Y(e,t.arguments[r]));return n}async function V(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await W(e,t))}class _ extends P{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){return(...t)=>{const n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,null);return Pe(this.definition,n,t,null)}}call(e,t){return H(e,t,((n,r,o)=>{const a={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(a.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,t);return Pe(this.definition,a,o,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(o,a,i)=>{const l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!y(t)||t instanceof U?t:q(t,e,r))),q(await Pe(this.definition,l,i,t),n,r)}))}}class z extends G{constructor(e){super(e)}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await Y(this.executingContext,t.node),t.valueset=!0),y(t.value)&&!(t.value instanceof U)){const e=new U;e.fn=t.value,e.parameterEvaluator=H,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if(y(t))throw new l(null,s.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let t=e.spatialReference;null==t&&(t=new T({wkid:102100})),this.moduleScope=Ge({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new w(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??Ue,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await Y(this.executingContext,this.source.syntax)}}async function H(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await W(e,t))}async function Y(e,t,n){if(t.breakpoint&&!0!==n){const n=t.breakpoint();return await n,Y(e,t,!0)}try{switch(null==t?void 0:t.type){case"VariableDeclarator":return await async function xe(e,t){let n=null;if(n=null===t.init?null:await Y(e,t.init),null!==e.localScope){if(n===h&&(n=null),"Identifier"!==t.id.type)throw new l(e,s.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return null!=e.localScope&&(e.localScope[r]={value:n,valueset:!0,node:t.init}),h}if("Identifier"!==t.id.type)throw new l(e,s.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return n===h&&(n=null),e.globalScope[r]={value:n,valueset:!0,node:t.init},h}(e,t);case"ImportDeclaration":return await async function ve(e,t){var n,r;const o=t.specifiers[0].local.name.toLowerCase(),a=e.libraryResolver.loadLibrary(o);let i=null;return(null==(n=e.libraryResolver._moduleSingletons)?void 0:n.has(a.uri))?i=e.libraryResolver._moduleSingletons.get(a.uri):(i=new z(a),await i.loadModule(e),null==(r=e.libraryResolver._moduleSingletons)||r.set(a.uri,i)),e.globalScope[o]={value:i,valueset:!0,node:t},h}(e,t);case"ExportNamedDeclaration":return await async function be(e,t){if(await Y(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return h}(e,t);case"VariableDeclaration":return await Se(e,t,0);case"BlockStatement":case"Program":return await async function he(e,t){return me(e,t,0)}(e,t);case"FunctionDeclaration":return await async function ye(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new _(t,e)},h}(e,t);case"ReturnStatement":return await async function ge(e,t){if(null===t.argument)return new p(h);const n=await Y(e,t.argument);return new p(n)}(e,t);case"IfStatement":return await async function de(e,t){const n=await Y(e,t.test);if(!0===n)return Y(e,t.consequent);if(!1===n)return null!==t.alternate?Y(e,t.alternate):h;throw new l(e,s.BooleanConditionRequired,t)}(e,t);case"ExpressionStatement":return await async function we(e,t){if("AssignmentExpression"===t.expression.type)return Y(e,t.expression);if("CallExpression"===t.expression.type){const n=await Y(e,t.expression);return n===h?h:new d(n)}const n=await Y(e,t.expression);return n===h?h:new d(n)}(e,t);case"UpdateExpression":return await async function ue(e,t){const n=t.argument;if("MemberExpression"===n.type){const r={t:null},o=await Y(e,n.object);let a=null;r.t=o,!0===n.computed?a=await Y(e,n.property):"Identifier"===n.property.type&&(a=n.property.name);const i=r.t;let c;if(I(i)){if(!A(a))throw new l(e,s.ArrayAccessorMustBeNumber,t);if(a<0&&(a=i.length+a),a<0||a>=i.length)throw new l(e,s.OutOfBounds,t);c=M(i[a]),i[a]="++"===t.operator?c+1:c-1}else if(i instanceof x){if(!1===S(a))throw new l(e,s.KeyAccessorMustBeString,t);if(!0!==i.hasField(a))throw new l(e,s.FieldNotFound,t,{key:a});c=M(i.field(a)),i.setField(a,"++"===t.operator?c+1:c-1)}else if(i instanceof z){if(!1===S(a))throw new l(e,s.ModuleAccessorMustBeString,t);if(!0!==i.hasGlobal(a))throw new l(e,s.ModuleExportNotFound,t);c=M(await i.global(a)),i.setGlobal(a,"++"===t.operator?c+1:c-1)}else{if(!F(i))throw C(i)?new l(e,s.Immutable,t):new l(e,s.InvalidParameter,t);if(!1===S(a))throw new l(e,s.KeyAccessorMustBeString,t);if(!0!==i.hasField(a))throw new l(e,s.FieldNotFound,t,{key:a});c=M(i.field(a)),i.setField(a,"++"===t.operator?c+1:c-1)}return!1===t.prefix?c:"++"===t.operator?c+1:c-1}const r="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!r)throw new l(e,s.InvalidIdentifier,t);let o;if(null!=e.localScope&&void 0!==e.localScope[r])return o=M(e.localScope[r].value),e.localScope[r]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},!1===t.prefix?o:"++"===t.operator?o+1:o-1;if(void 0!==e.globalScope[r])return o=M(e.globalScope[r].value),e.globalScope[r]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},!1===t.prefix?o:"++"===t.operator?o+1:o-1;throw new l(e,s.InvalidIdentifier,t)}(e,t);case"AssignmentExpression":return await async function pe(e,t){const n=t.left;if("MemberExpression"===n.type){const r=await Y(e,n.object);let o=null;if(!0===n.computed)o=await Y(e,n.property);else{if("Identifier"!==n.property.type)throw new l(e,s.InvalidIdentifier,t);o=n.property.name}const a=await Y(e,t.right);if(I(r)){if(!A(o))throw new l(e,s.ArrayAccessorMustBeNumber,t);if(o<0&&(o=r.length+o),o<0||o>r.length)throw new l(e,s.OutOfBounds,t);if(o===r.length){if("="!==t.operator)throw new l(e,s.OutOfBounds,t);r[o]=fe(a,t.operator,r[o],t,e)}else r[o]=fe(a,t.operator,r[o],t,e)}else if(r instanceof x){if(!1===S(o))throw new l(e,s.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,fe(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new l(e,s.FieldNotFound,t,{key:o});r.setField(o,fe(a,t.operator,null,t,e))}}else if(r instanceof z){if(!1===S(o))throw new l(e,s.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(o))throw new l(e,s.ModuleExportNotFound,t);r.setGlobal(o,fe(a,t.operator,await r.global(o),t,e))}else{if(!F(r))throw C(r)?new l(e,s.Immutable,t):new l(e,s.InvalidParameter,t);if(!1===S(o))throw new l(e,s.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,fe(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new l(e,s.FieldNotFound,t,{key:o});r.setField(o,fe(a,t.operator,null,t,e))}}return h}const r=n.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[r]){const n=await Y(e,t.right);return e.localScope[r]={value:fe(n,t.operator,e.localScope[r].value,t,e),valueset:!0,node:t.right},h}if(void 0!==e.globalScope[r]){const n=await Y(e,t.right);return e.globalScope[r]={value:fe(n,t.operator,e.globalScope[r].value,t,e),valueset:!0,node:t.right},h}throw new l(e,s.InvalidIdentifier,t)}(e,t);case"ForStatement":return await function ne(e,t){try{return null!==t.init?Y(e,t.init).then((()=>new Promise(((n,r)=>{te(e,t,{testResult:!0,lastAction:h},(e=>{n(e)}),(e=>{r(e)}),0)})))):new Promise(((n,r)=>{te(e,t,{testResult:!0,lastAction:h},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(n){return Promise.reject(n)}}(e,t);case"WhileStatement":return await async function X(e,t){const n={testResult:!0,lastAction:h};if(n.testResult=await Y(e,t.test),!1===n.testResult)return h;if(!0!==n.testResult)throw new l(e,s.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await Y(e,t.body),n.lastAction!==m)&&!(n.lastAction instanceof p);)if(n.testResult=await Y(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new l(e,s.BooleanConditionRequired,t);return n.lastAction instanceof p?n.lastAction:h}(e,t);case"ForInStatement":return await async function ce(e,t){return new Promise(((n,r)=>{Y(e,t.right).then((o=>{try{let a=null;a="VariableDeclaration"===t.left.type?Y(e,t.left):Promise.resolve(),a.then((()=>{try{let a="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(a=e.name)}else"Identifier"===t.left.type&&(a=t.left.name);if(!a)throw new l(e,s.InvalidIdentifier,t);a=a.toLowerCase();let i=null;if(null!=e.localScope&&void 0!==e.localScope[a]&&(i=e.localScope[a]),null===i&&void 0!==e.globalScope[a]&&(i=e.globalScope[a]),null===i)return void r(new l(e,s.InvalidIdentifier,t));I(o)||S(o)?ae(e,t,o,{reject:r,resolve:n},i):C(o)?function ie(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(h);oe(e,t,n,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(i){r.reject(i)}}(e,t,o,{reject:r,resolve:n},i):o instanceof x||F(o)?function le(e,t,n,r,o){try{ae(e,t,n.keys(),r,o,"k")}catch(a){r.reject(a)}}(e,t,o,{reject:r,resolve:n},i):R(o)?se(o.iterator(e.abortSignal),e,t,o,i,(e=>{n(e)}),(e=>{r(e)}),0):ae(e,t,[],{reject:r,resolve:n},i)}catch(a){r(a)}}),r)}catch(a){r(a)}}),r)}))}(e,t);case"BreakStatement":return m;case"EmptyStatement":return h;case"ContinueStatement":return g;case"TemplateElement":return await async function Le(e,t){return t.value?t.value.cooked:""}(0,t);case"TemplateLiteral":return await async function Ee(e,t){const n=[];for(let a=0;a<t.expressions.length;a++){const r=await Y(e,t.expressions[a]);n[a]=k(r)}let r="",o=0;for(const a of t.quasis)r+=a.value?a.value.cooked:"",!1===a.tail&&(r+=n[o]?ke(n[o],e,t):"",o++);return r}(e,t);case"Identifier":return await Me(e,t);case"MemberExpression":return await async function Ie(e,t){const n=await Y(e,t.object);if(null===n)throw new l(e,s.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof x||F(n))return n.field(t.property.name);if(n instanceof Z)return O(n,t.property.name,e,t);if(n instanceof z){if(!n.hasGlobal(t.property.name))throw new l(e,s.InvalidIdentifier,t);return n.global(t.property.name)}throw new l(e,s.InvalidMemberAccessKey,t)}throw new l(e,s.InvalidMemberAccessKey,t)}let r=await Y(e,t.property);if(n instanceof x||F(n)){if(S(r))return n.field(r);throw new l(e,s.InvalidMemberAccessKey,t)}if(n instanceof z){if(S(r))return n.global(r);throw new l(e,s.InvalidMemberAccessKey,t)}if(n instanceof Z){if(S(r))return O(n,r,e,t);throw new l(e,s.InvalidMemberAccessKey,t)}if(I(n)){if(A(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new l(e,s.OutOfBounds,t);return n[r]}throw new l(e,s.InvalidMemberAccessKey,t)}if(C(n)){if(A(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new l(e,s.OutOfBounds,t);return n.get(r)}throw new l(e,s.InvalidMemberAccessKey,t)}if(S(n)){if(A(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new l(e,s.OutOfBounds,t);return n[r]}throw new l(e,s.InvalidMemberAccessKey,t)}throw new l(e,s.InvalidMemberAccessKey,t)}(e,t);case"Literal":return t.value;case"CallExpression":return await async function je(e,t){if("MemberExpression"===t.callee.type){const n=await Y(e,t.callee.object);if(!(n instanceof z))throw new l(e,s.FunctionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await Y(e,t.callee.property);if(!n.hasGlobal(r))throw new l(e,s.FunctionNotFound,t);const o=await n.global(r);if(!y(o))throw new l(e,s.CallNonFunction,t);return o.call(e,t)}if("Identifier"!==t.callee.type)throw new l(e,s.FunctionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if(y(n.value))return n.value.call(e,t);throw new l(e,s.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if(y(n.value))return n.value.call(e,t);throw new l(e,s.CallNonFunction,t)}throw new l(e,s.FunctionNotFound,t)}(e,t);case"UnaryExpression":return await async function Fe(e,t){const n=await Y(e,t.argument);if(i(n)){if("!"===t.operator)return!n;if("-"===t.operator)return-1*M(n);if("+"===t.operator)return 1*M(n);if("~"===t.operator)return~M(n);throw new l(e,s.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*M(n);if("+"===t.operator)return 1*M(n);if("~"===t.operator)return~M(n);throw new l(e,s.UnsupportedUnaryOperator,t)}(e,t);case"BinaryExpression":return await async function Re(e,t){const n=[];n[0]=await Y(e,t.left),n[1]=await Y(e,t.right);const r=n[0],o=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return E(M(r),M(o),t.operator);case"==":return B(r,o);case"!=":return!B(r,o);case"<":case">":case"<=":case">=":return L(r,o,t.operator);case"+":return S(r)||S(o)?k(r)+k(o):M(r)+M(o);case"-":return M(r)-M(o);case"*":return M(r)*M(o);case"/":return M(r)/M(o);case"%":return M(r)%M(o);default:throw new l(e,s.UnsupportedOperator,t)}}(e,t);case"LogicalExpression":return await async function Ae(e,t){const n=await Y(e,t.left);let r=null;if(!i(n))throw new l(e,s.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===n)return n;if(r=await Y(e,t.right),i(r))return r;throw new l(e,s.LogicExpressionOrAnd,t);case"&&":if(!1===n)return n;if(r=await Y(e,t.right),i(r))return r;throw new l(e,s.LogicExpressionOrAnd,t);default:throw new l(e,s.LogicExpressionOrAnd,t)}}(e,t);case"ArrayExpression":return await async function Ce(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await Y(e,t.elements[r]));for(let r=0;r<n.length;r++){if(y(n[r]))throw new l(e,s.NoFunctionInArray,t);n[r]===h&&(n[r]=null)}return n}(e,t);case"ObjectExpression":return await async function J(e,t){const n=[];for(let i=0;i<t.properties.length;i++)n[i]=await Y(e,t.properties[i]);const r={},o=new Map;for(let i=0;i<n.length;i++){const a=n[i];if(y(a.value))throw new l(e,s.NoFunctionInDictionary,t);if(!1===S(a.key))throw new l(e,s.KeyMustBeString,t);let c=a.key.toString();const u=c.toLowerCase();o.has(u)?c=o.get(u):o.set(u,c),a.value===h?r[c]=null:r[c]=a.value}const a=new x(r);return a.immutable=!1,a}(e,t);case"Property":return await async function Q(e,t){const n=await Y(e,t.value);return"Identifier"===t.key.type?{key:t.key.name,value:n}:{key:await Y(e,t.key),value:n}}(e,t);default:throw new l(e,s.Unrecognized,t)}}catch(r){throw b(e,t,r)}}async function $(e,t,n){const r=await Y(e,t.body);return n.lastAction=r,n.lastAction===m||n.lastAction instanceof p?(n.testResult=!1,n):null!==t.update?(await Y(e,t.update),n):n}function te(e,t,n,r,o,a){try{(async function ee(e,t,n){var r;if(null!==t.test){const o=await Y(e,t.test);if(!0===(null==(r=e.abortSignal)?void 0:r.aborted))throw new l(e,s.Cancelled,t);if(n.testResult=o,!1===n.testResult)return n;if(!0!==n.testResult)throw new l(e,s.BooleanConditionRequired,t);return $(e,t,n)}return $(e,t,n)})(e,t,n).then((()=>{try{!0===n.testResult?++a>D?(a=0,setTimeout((()=>{te(e,t,n,r,o,a)}),0)):te(e,t,n,r,o,a):n.lastAction instanceof p?r(n.lastAction):r(h)}catch(i){o(i)}}),(e=>{o(e)}))}catch(i){o(i)}}function re(e,t,n,r,o,a,i,l,s,c){try{if(r<=a)return void l(h);o.value="k"===i?n[a]:a,Y(e,t.body).then((u=>{try{u instanceof p?l(u):u===m?l(h):++c>D?(c=0,setTimeout((()=>{re(e,t,n,r,o,a+1,i,l,s,c)}),0)):re(e,t,n,r,o,a+1,i,l,s,c)}catch(f){s(f)}}),(e=>{s(e)}))}catch(u){s(u)}}function oe(e,t,n,r,o,a,i,l,s){try{if(n.length()<=o)return void i(h);r.value="k"===a?n.get(o):o,Y(e,t.body).then((c=>{c instanceof p?i(c):c===m?i(h):++s>D?(s=0,setTimeout((()=>{oe(e,t,n,r,o+1,a,i,l,s)}),0)):oe(e,t,n,r,o+1,a,i,l,s)}),(e=>{l(e)}))}catch(c){l(c)}}function ae(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(h);re(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(i){r.reject(i)}}function se(e,t,n,r,o,a,i,l){try{e.next().then((s=>{try{if(null===s)a(h);else{const c=j.createFromGraphicLikeObject(s.geometry,s.attributes,r,t.timeZone);c._underlyingGraphic=s,o.value=c,Y(t,n.body).then((s=>{try{s===m?a(h):s instanceof p?a(s):++l>D?(l=0,setTimeout((()=>{se(e,t,n,r,o,a,i,l)}),0)):se(e,t,n,r,o,a,i,l)}catch(c){i(c)}}),(e=>{i(e)}))}}catch(c){i(c)}}),(e=>{i(e)}))}catch(s){i(s)}}function fe(e,t,n,r,o){switch(t){case"=":return e===h?null:e;case"/=":return M(n)/M(e);case"*=":return M(n)*M(e);case"-=":return M(n)-M(e);case"+=":return S(n)||S(e)?k(n)+k(e):M(n)+M(e);case"%=":return M(n)%M(e);default:throw new l(o,s.UnsupportedOperator,r)}}async function me(e,t,n){if(n>=t.body.length)return h;const r=await Y(e,t.body[n]);return r instanceof p||r===m||r===g||n===t.body.length-1?r:me(e,t,n+1)}async function Se(e,t,n){return n>=t.declarations.length||(await Y(e,t.declarations[n]),n===t.declarations.length-1||await Se(e,t,n+1)),h}async function Me(e,t){const n=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=Y(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=Y(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new l(e,s.InvalidIdentifier,t)}function ke(e,t,n){if(y(e))throw new l(t,s.NoFunctionInTemplateLiteral,n);return e}const Ye={};async function Oe(e,t,n,r){const o=await Y(e,t.arguments[n]);if(B(o,r))return Y(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?Y(e,t.arguments[n]):2===a?null:3===a?Y(e,t.arguments[n+2]):Oe(e,t,n+2,r)}async function Be(e,t,n,r){if(!0===r)return Y(e,t.arguments[n+1]);if(3==t.arguments.length-n)return Y(e,t.arguments[n+2]);const o=await Y(e,t.arguments[n+2]);if(!1===i(o))throw new l(e,s.ModuleExportNotFound,t.arguments[n+2]);return Be(e,t,n+2,o)}async function Pe(e,t,n,r){const o=e.body;if(n.length!==e.params.length)throw new l(t,s.WrongNumberOfParameters,null);for(let i=0;i<n.length;i++){const r=e.params[i];"Identifier"===r.type&&null!=t.localScope&&(t.localScope[r.name.toLowerCase()]={d:null,value:n[i],valueset:!0,node:null})}const a=await Y(t,o);if(a instanceof p)return a.value;if(a===m)throw new l(t,s.UnexpectedToken,r);if(a===g)throw new l(t,s.UnexpectedToken,r);return a instanceof d?a.value:a}e(Ye,V),t(Ye,V),n(Ye,V),r(Ye,V),o(Ye,V),K({functions:Ye,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:V,standardFunctionAsync:H}),Ye.iif=async function(e,t){a(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await Y(e,t.arguments[0]);if(!1===i(n))throw new l(e,s.BooleanConditionRequired,t);return Y(e,n?t.arguments[1]:t.arguments[2])},Ye.defaultvalue=async function(e,t){a(null===t.arguments?[]:t.arguments,2,3,e,t);const n=await Y(e,t.arguments[0]);if(3===t.arguments.length){const r=await Y(e,t.arguments[1]),o=c(n,r);return null!=o&&""!==o?o:Y(e,t.arguments[2])}return null==n||""===n?Y(e,t.arguments[1]):n},Ye.decode=async function(e,t){if(t.arguments.length<2)throw new l(e,s.WrongNumberOfParameters,t);if(2===t.arguments.length)return Y(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new l(e,s.WrongNumberOfParameters,t);return Oe(e,t,1,await Y(e,t.arguments[0]))},Ye.when=async function(e,t){if(t.arguments.length<3)throw new l(e,s.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new l(e,s.WrongNumberOfParameters,t);const n=await Y(e,t.arguments[0]);if(!1===i(n))throw new l(e,s.BooleanConditionRequired,t.arguments[0]);return Be(e,t,0,n)};const Ne={fixSpatialReference:N,parseArguments:W,standardFunction:V,standardFunctionAsync:H,evaluateIdentifier:Me};for(const Ve in Ye)Ye[Ve]={value:new u(Ye[Ve]),valueset:!0,node:null};const De=function(){};function Ge(e,t,n){const r=new De;null==e&&(e={}),null==t&&(t={});const o=new x({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const a in t)r[a]={value:new u(t[a]),native:!0,valueset:!0,node:null};for(const a in e)e[a]&&"esri.Graphic"===e[a].declaredClass?r[a]={value:j.createFromGraphic(e[a],n),valueset:!0,node:null}:r[a]={value:e[a],valueset:!0,node:null};return r}function Ue(e){}De.prototype=Ye,De.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},De.prototype.pi={value:Math.PI,valueset:!0,node:null};const Ke=Ne;function qe(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:V,standardFunctionAsync:H,evaluateIdentifier:Me};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)Ye[n]={value:new u(t.functions[n]),valueset:!0,node:null},De.prototype[n]=Ye[n];for(let n=0;n<t.signatures.length;n++)f(t.signatures[n],"async")}async function Te(e,t){let n=t.spatialReference;null==n&&(n=new T({wkid:102100}));let r=null;e.usesModules&&(r=new w(new Map,e.loadedModules));const o=Ge(t.vars,t.customfunctions,t.timeZone),a={spatialReference:n,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:o,console:t.console??Ue,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}};let i=await Y(a,e);if(i instanceof p&&(i=i.value),i instanceof d&&(i=i.value),i===h&&(i=null),i===m)throw new l(a,s.IllegalResult,null);if(i===g)throw new l(a,s.IllegalResult,null);if(y(i))throw new l(a,s.IllegalResult,null);return i}qe([v]);export{Te as executeScript,qe as extend,Ke as functionHelper};