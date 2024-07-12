import{as as t,at as i,au as n}from"./index-DSIPxOWi.js";import{f as e}from"./quickselect-D9ta8ndX.js";class h{constructor(t=9,i){this._compareMinX=m,this._compareMinY=u,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),X.prune(),Y.prune(),B.prune(),w.prune()}all(t){a(this._data,t)}search(t,i){let n=this._data;const e=this._toBBox;if(g(t,n))for(X.clear();n;){for(let Y=0,B=n.children.length;Y<B;Y++){const B=n.children[Y],w=n.leaf?e(B):B;g(t,w)&&(n.leaf?i(B):p(t,w)?a(B,i):X.push(B))}n=X.pop()}}collides(t){let i=this._data;const n=this._toBBox;if(!g(t,i))return!1;for(X.clear();i;){for(let e=0,Y=i.children.length;e<Y;e++){const Y=i.children[e],B=i.leaf?n(Y):Y;if(g(t,B)){if(i.leaf||p(t,B))return!0;X.push(Y)}}i=X.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const t=this._data;this._data=i,i=t}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new j([]),this}remove(t){if(!t)return this;let n,e=this._data,X=null,Y=0,F=!1;const y=this._toBBox(t);for(B.clear(),w.clear();e||B.length>0;){if(e||(e=B.pop(),X=B.data[B.length-1],Y=w.pop()??0,F=!0),e.leaf&&(n=i(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),B.push(e),this._condense(B),this;F||e.leaf||!p(e,y)?X?(Y++,e=X.children[Y],F=!1):e=null:(B.push(e),w.push(Y),Y=0,X=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,i,n,e){const X=n-i+1;let Y=this._maxEntries;if(X<=Y){const e=new j(t.slice(i,n+1));return o(e,this._toBBox),e}e||(e=Math.ceil(Math.log(X)/Math.log(Y)),Y=Math.ceil(X/Y**(e-1)));const B=new S([]);B.height=e;const w=Math.ceil(X/Y),F=w*Math.ceil(Math.sqrt(Y));M(t,i,n,F,this._compareMinX);for(let y=i;y<=n;y+=F){const i=Math.min(y+F-1,n);M(t,y,i,w,this._compareMinY);for(let n=y;n<=i;n+=w){const X=Math.min(n+w-1,i);B.children.push(this._build(t,n,X,e-1))}}return o(B,this._toBBox),B}_insert(t,i,n){const e=this._toBBox,X=n?t:e(t);B.clear();const Y=function s(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,X=1/0;for(let Y=0,B=i.children.length;Y<B;Y++){const B=i.children[Y],w=d(B),F=x(t,B)-w;F<X?(X=F,e=w<e?w:e,n=B):F===X&&w<e&&(e=w,n=B)}i=n||i.children[0]}return i}(X,this._data,i,B);for(Y.children.push(t),c(Y,X);i>=0&&B.data[i].children.length>this._maxEntries;)this._split(B,i),i--;!function r(t,i,n){for(let e=n;e>=0;e--)c(i.data[e],t)}(X,B,i)}_split(t,i){const n=t.data[i],e=n.children.length,X=this._minEntries;this._chooseSplitAxis(n,X,e);const Y=this._chooseSplitIndex(n,X,e);if(!Y)return;const B=n.children.splice(Y,n.children.length-Y),w=n.leaf?new j(B):new S(B);w.height=n.height,o(n,this._toBBox),o(w,this._toBBox),i?t.data[i-1].children.push(w):this._splitRoot(n,w)}_splitRoot(t,i){this._data=new S([t,i]),this._data.height=t.height+1,o(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let e,X,Y;e=X=1/0;for(let B=i;B<=n-i;B++){const i=l(t,0,B,this._toBBox),w=l(t,B,n,this._toBBox),F=_(i,w),y=d(i)+d(w);F<e?(e=F,Y=B,X=y<X?y:X):F===e&&y<X&&(X=y,Y=B)}return Y}_chooseSplitAxis(t,i,n){const e=t.leaf?this._compareMinX:m,X=t.leaf?this._compareMinY:u;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,X)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const X=this._toBBox,Y=l(t,0,i,X),B=l(t,n-i,n,X);let w=f(Y)+f(B);for(let F=i;F<n-i;F++){const i=t.children[F];c(Y,t.leaf?X(i):i),w+=f(Y)}for(let F=n-i-1;F>=i;F--){const i=t.children[F];c(B,t.leaf?X(i):i),w+=f(B)}return w}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const X=t.data[n-1],Y=X.children;Y.splice(i(Y,e,Y.length,X.indexHint),1)}else this.clear();else o(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i){let n=t;for(Y.clear();n;){if(!0===n.leaf)for(const t of n.children)i(t);else Y.pushArray(n.children);n=Y.pop()??null}}function o(t,i){l(t,0,t.children.length,i,t)}function l(t,i,n,e,X){X||(X=new j([])),X.minX=1/0,X.minY=1/0,X.maxX=-1/0,X.maxY=-1/0;for(let Y,B=i;B<n;B++)Y=t.children[B],c(X,t.leaf?e(Y):Y);return X}function c(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function m(t,i){return t.minX-i.minX}function u(t,i){return t.minY-i.minY}function d(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function _(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),X=Math.min(t.maxX,i.maxX),Y=Math.min(t.maxY,i.maxY);return Math.max(0,X-n)*Math.max(0,Y-e)}function p(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function g(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function M(t,i,n,X,Y){const B=[i,n];for(;B.length;){const i=B.pop(),n=B.pop();if(i-n<=X)continue;const w=n+Math.ceil((i-n)/X/2)*X;e(t,w,n,i,Y),B.push(n,w,w,i)}}const X=new t,Y=new t,B=new t,w=new t({deallocator:void 0});class E{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class b extends E{constructor(){super(...arguments),this.height=1,this.indexHint=new n}}class j extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class S extends b{constructor(t){super(),this.children=t,this.leaf=!1}}export{h};
