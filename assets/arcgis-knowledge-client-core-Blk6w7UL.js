import{av as n,gZ as e}from"./index-DSIPxOWi.js";var r,a,o,i={exports:{}};r=i,a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,o=function(n){var r,o,i;n=n||{},r||(r=void 0!==n?n:{}),r.ready=new Promise((function(n,e){o=n,i=e}));var u=Object.assign({},r),c="./this.program",f="";"undefined"!=typeof document&&document.currentScript&&(f=document.currentScript.src),a&&(f=a),f=0!==f.indexOf("blob:")?f.substr(0,f.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var s,l=r.print||void 0,h=r.printErr||void 0;Object.assign(r,u),u=null,r.thisProgram&&(c=r.thisProgram),r.wasmBinary&&(s=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&R("no native wasm support detected");var p,d,v,g,y,m,b,w,A,T,P,_,C=!1,F="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function $(n,e,r){var a=e+r;for(r=e;n[r]&&!(r>=a);)++r;if(16<r-e&&n.buffer&&F)return F.decode(n.subarray(e,r));for(a="";e<r;){var o=n[e++];if(128&o){var i=63&n[e++];if(192==(224&o))a+=String.fromCharCode((31&o)<<6|i);else{var u=63&n[e++];65536>(o=224==(240&o)?(15&o)<<12|i<<6|u:(7&o)<<18|i<<12|u<<6|63&n[e++])?a+=String.fromCharCode(o):(o-=65536,a+=String.fromCharCode(55296|o>>10,56320|1023&o))}}else a+=String.fromCharCode(o)}return a}function k(n,e,r,a){if(0<a){a=r+a-1;for(var o=0;o<n.length;++o){var i=n.charCodeAt(o);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++o)),127>=i){if(r>=a)break;e[r++]=i}else{if(2047>=i){if(r+1>=a)break;e[r++]=192|i>>6}else{if(65535>=i){if(r+2>=a)break;e[r++]=224|i>>12}else{if(r+3>=a)break;e[r++]=240|i>>18,e[r++]=128|i>>12&63}e[r++]=128|i>>6&63}e[r++]=128|63&i}}e[r]=0}}function W(n){for(var e=0,r=0;r<n.length;++r){var a=n.charCodeAt(r);127>=a?e++:2047>=a?e+=2:55296<=a&&57343>=a?(e+=4,++r):e+=3}return e}function E(){var n=p.buffer;d=n,r.HEAP8=v=new Int8Array(n),r.HEAP16=y=new Int16Array(n),r.HEAP32=b=new Int32Array(n),r.HEAPU8=g=new Uint8Array(n),r.HEAPU16=m=new Uint16Array(n),r.HEAPU32=w=new Uint32Array(n),r.HEAPF32=A=new Float32Array(n),r.HEAPF64=_=new Float64Array(n),r.HEAP64=T=new BigInt64Array(n),r.HEAPU64=P=new BigUint64Array(n)}var j,O=[],S=[],U=[];function D(){var n=r.preRun.shift();O.unshift(n)}var M,I=0,H=null;function R(n){throw r.onAbort&&r.onAbort(n),h(n="Aborted("+n+")"),C=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),i(n),n}function x(){return M.startsWith("data:application/octet-stream;base64,")}if(M="arcgis-knowledge-client-core.wasm",!x()){var q=M;M=r.locateFile?r.locateFile(q,f):f+q}function Y(){var n=M;try{if(n==M&&s)return new Uint8Array(s);throw"both async and sync fetching of the wasm failed"}catch(e){R(e)}}function B(n){for(;0<n.length;)n.shift()(r)}function z(n){this.ga=n-24,this.Za=function(n){w[this.ga+4>>2]=n},this.Ua=function(n){w[this.ga+8>>2]=n},this.Va=function(){b[this.ga>>2]=0},this.Oa=function(){v[this.ga+12|0]=0},this.Ya=function(){v[this.ga+13|0]=0},this.La=function(n,e){this.Ma(),this.Za(n),this.Ua(e),this.Va(),this.Oa(),this.Ya()},this.Ma=function(){w[this.ga+16>>2]=0}}var J={};function N(n){for(;n.length;){var e=n.pop();n.pop()(e)}}function L(n){return this.fromWireType(b[n>>2])}var G={},Z={},nn={};function X(n){if(void 0===n)return"_unknown";var e=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=e&&57>=e?"_"+n:n}function K(n,e){return n=X(n),function(){return e.apply(this,arguments)}}function Q(n){var e=Error,r=K(n,(function(e){this.name=n,this.message=e,void 0!==(e=Error(e).stack)&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var an=void 0;function tn(n){throw new an(n)}function en(n,e,r){function r2(e){(e=r(e)).length!==n.length&&tn("Mismatched type converter count");for(var a=0;a<n.length;++a)fn(n[a],e[a])}n.forEach((function(n){nn[n]=e}));var a=Array(e.length),o=[],i=0;e.forEach(((n,e)=>{Z.hasOwnProperty(n)?a[e]=Z[n]:(o.push(n),G.hasOwnProperty(n)||(G[n]=[]),G[n].push((()=>{a[e]=Z[n],++i===o.length&&r2(a)})))})),0===o.length&&r2(a)}function rn(n){if(null===n)return"null";var e=typeof n;return"object"===e||"array"===e||"function"===e?n.toString():""+n}var un=void 0;function on(n){for(var e="";g[n];)e+=un[g[n++]];return e}var pn=void 0;function cn(n){throw new pn(n)}function fn(n,e,r={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var a=e.name;if(n||cn('type "'+a+'" must have a positive integer typeid pointer'),Z.hasOwnProperty(n)){if(r.Wa)return;cn("Cannot register type '"+a+"' twice")}Z[n]=e,delete nn[n],G.hasOwnProperty(n)&&(e=G[n],delete G[n],e.forEach((n=>n())))}function sn(n,e,r){switch(e){case 0:return r?function(n){return v[n]}:function(n){return g[n]};case 1:return r?function(n){return y[n>>1]}:function(n){return m[n>>1]};case 2:return r?function(n){return b[n>>2]}:function(n){return w[n>>2]};case 3:return r?function(n){return T[n>>3]}:function(n){return P[n>>3]};default:throw new TypeError("Unknown integer type: "+n)}}function ln(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function hn(n){cn(n.ea.ha.fa.name+" instance already deleted")}var yn=!1;function vn(){}function dn(n){--n.count.value,0===n.count.value&&(n.ja?n.la.oa(n.ja):n.ha.fa.oa(n.ga))}function gn(n,e,r){return e===r?n:void 0===r.ma||null===(n=gn(n,e,r.ma))?null:r.Ka(n)}var mn={},wn=[];function bn(){for(;wn.length;){var n=wn.pop();n.ea.ua=!1,n.delete()}}var An=void 0,Mn={};function _n(n,e){return e.ha&&e.ga||tn("makeClassHandle requires ptr and ptrType"),!!e.la!=!!e.ja&&tn("Both smartPtrType and smartPtr must be specified"),e.count={value:1},Cn(Object.create(n,{ea:{value:e}}))}function Cn(n){return"undefined"==typeof FinalizationRegistry?(Cn=n=>n,n):(yn=new FinalizationRegistry((n=>{dn(n.ea)})),vn=n=>{yn.unregister(n)},(Cn=n=>{var e=n.ea;return e.ja&&yn.register(n,{ea:e},n),n})(n))}function Pn(){}function $n(n,e,r){if(void 0===n[e].ia){var a=n[e];n[e]=function(){return n[e].ia.hasOwnProperty(arguments.length)||cn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[e].ia+")!"),n[e].ia[arguments.length].apply(this,arguments)},n[e].ia=[],n[e].ia[a.ta]=a}}function kn(n,e,a){r.hasOwnProperty(n)?((void 0===a||void 0!==r[n].ia&&void 0!==r[n].ia[a])&&cn("Cannot register public name '"+n+"' twice"),$n(r,n,n),r.hasOwnProperty(a)&&cn("Cannot register multiple overloads of a function with the same number of arguments ("+a+")!"),r[n].ia[a]=e):(r[n]=e,void 0!==a&&(r[n].lb=a))}function Wn(n,e,r,a,o,i,u,c){this.name=n,this.constructor=e,this.pa=r,this.oa=a,this.ma=o,this.Pa=i,this.wa=u,this.Ka=c,this.ab=[]}function En(n,e,r){for(;e!==r;)e.wa||cn("Expected null or instance of "+r.name+", got an instance of "+e.name),n=e.wa(n),e=e.ma;return n}function jn(n,e){return null===e?(this.Ba&&cn("null is not a valid "+this.name),0):(e.ea||cn('Cannot pass "'+rn(e)+'" as a '+this.name),e.ea.ga||cn("Cannot pass deleted object as a pointer of type "+this.name),En(e.ea.ga,e.ea.ha.fa,this.fa))}function On(n,e){if(null===e){if(this.Ba&&cn("null is not a valid "+this.name),this.ya){var r=this.Ca();return null!==n&&n.push(this.oa,r),r}return 0}if(e.ea||cn('Cannot pass "'+rn(e)+'" as a '+this.name),e.ea.ga||cn("Cannot pass deleted object as a pointer of type "+this.name),!this.xa&&e.ea.ha.xa&&cn("Cannot convert argument of type "+(e.ea.la?e.ea.la.name:e.ea.ha.name)+" to parameter type "+this.name),r=En(e.ea.ga,e.ea.ha.fa,this.fa),this.ya)switch(void 0===e.ea.ja&&cn("Passing raw pointer to smart pointer is illegal"),this.gb){case 0:e.ea.la===this?r=e.ea.ja:cn("Cannot convert argument of type "+(e.ea.la?e.ea.la.name:e.ea.ha.name)+" to parameter type "+this.name);break;case 1:r=e.ea.ja;break;case 2:if(e.ea.la===this)r=e.ea.ja;else{var a=e.clone();r=this.bb(r,Ln((function(){a.delete()}))),null!==n&&n.push(this.oa,r)}break;default:cn("Unsupporting sharing policy")}return r}function Sn(n,e){return null===e?(this.Ba&&cn("null is not a valid "+this.name),0):(e.ea||cn('Cannot pass "'+rn(e)+'" as a '+this.name),e.ea.ga||cn("Cannot pass deleted object as a pointer of type "+this.name),e.ea.ha.xa&&cn("Cannot convert argument of type "+e.ea.ha.name+" to parameter type "+this.name),En(e.ea.ga,e.ea.ha.fa,this.fa))}function Fn(n,e,r,a,o,i,u,c,f,s,l){this.name=n,this.fa=e,this.Ba=r,this.xa=a,this.ya=o,this.$a=i,this.gb=u,this.Ha=c,this.Ca=f,this.bb=s,this.oa=l,o||void 0!==e.ma?this.toWireType=On:(this.toWireType=a?jn:Sn,this.ka=null)}function Dn(n,e,a){r.hasOwnProperty(n)||tn("Replacing nonexistant public symbol"),void 0!==r[n].ia&&void 0!==a?r[n].ia[a]=e:(r[n]=e,r[n].ta=a)}var In=[];function Un(n,e){n=on(n);var r=In[e];return r||(e>=In.length&&(In.length=e+1),In[e]=r=j.get(e)),"function"!=typeof r&&cn("unknown function pointer with signature "+n+": "+e),r}var Bn=void 0;function Rn(n){var e=on(n=Et(n));return $t(n),e}function xn(n,e){var r=[],a={};throw e.forEach((function e3(n){a[n]||Z[n]||(nn[n]?nn[n].forEach(e3):(r.push(n),a[n]=!0))})),new Bn(n+": "+r.map(Rn).join([", "]))}function Hn(n,e,r,a,o){var i=e.length;2>i&&cn("argTypes array size mismatch! Must at least get return value and 'this' types!");var u=null!==e[1]&&null!==r,c=!1;for(r=1;r<e.length;++r)if(null!==e[r]&&void 0===e[r].ka){c=!0;break}var f="void"!==e[0].name,s=i-2,l=Array(s),h=[],p=[];return function(){if(arguments.length!==s&&cn("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),p.length=0,h.length=u?2:1,h[0]=o,u){var r=e[1].toWireType(p,this);h[1]=r}for(var i=0;i<s;++i)l[i]=e[i+2].toWireType(p,arguments[i]),h.push(l[i]);if(i=a.apply(null,h),c)N(p);else for(var d=u?1:2;d<e.length;d++){var v=1===d?r:l[d-2];null!==e[d].ka&&e[d].ka(v)}return f?e[0].fromWireType(i):void 0}}function Yn(n,e){for(var r=[],a=0;a<n;a++)r.push(w[e+4*a>>2]);return r}function Vn(n,e,r){return n instanceof Object||cn(r+' with invalid "this": '+n),n instanceof e.fa.constructor||cn(r+' incompatible with "this" of type '+n.constructor.name),n.ea.ga||cn("cannot call emscripten binding method "+r+" on deleted object"),En(n.ea.ga,n.ea.ha.fa,e.fa)}var zn=[],Xn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function qn(n){4<n&&0==--Xn[n].Da&&(Xn[n]=void 0,zn.push(n))}var Nn=n=>(n||cn("Cannot use deleted val. handle = "+n),Xn[n].value),Ln=n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=zn.length?zn.pop():Xn.length;return Xn[e]={Da:1,value:n},e}};function Gn(n,e,r){switch(e){case 0:return function(n){return this.fromWireType((r?v:g)[n])};case 1:return function(n){return this.fromWireType((r?y:m)[n>>1])};case 2:return function(n){return this.fromWireType((r?b:w)[n>>2])};default:throw new TypeError("Unknown integer type: "+n)}}function Jn(n,e){var r=Z[n];return void 0===r&&cn(e+" has unknown type "+Rn(n)),r}function Zn(n,e){switch(e){case 2:return function(n){return this.fromWireType(A[n>>2])};case 3:return function(n){return this.fromWireType(_[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}var it="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Kn(n,e){for(var r=n>>1,a=r+e/2;!(r>=a)&&m[r];)++r;if(32<(r<<=1)-n&&it)return it.decode(g.subarray(n,r));for(r="",a=0;!(a>=e/2);++a){var o=y[n+2*a>>1];if(0==o)break;r+=String.fromCharCode(o)}return r}function Qn(n,e,r){if(void 0===r&&(r=2147483647),2>r)return 0;var a=e;r=(r-=2)<2*n.length?r/2:n.length;for(var o=0;o<r;++o)y[e>>1]=n.charCodeAt(o),e+=2;return y[e>>1]=0,e-a}function nt(n){return 2*n.length}function tt(n,e){for(var r=0,a="";!(r>=e/4);){var o=b[n+4*r>>2];if(0==o)break;++r,65536<=o?(o-=65536,a+=String.fromCharCode(55296|o>>10,56320|1023&o)):a+=String.fromCharCode(o)}return a}function et(n,e,r){if(void 0===r&&(r=2147483647),4>r)return 0;var a=e;r=a+r-4;for(var o=0;o<n.length;++o){var i=n.charCodeAt(o);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++o)),b[e>>2]=i,(e+=4)+4>r)break}return b[e>>2]=0,e-a}function rt(n){for(var e=0,r=0;r<n.length;++r){var a=n.charCodeAt(r);55296<=a&&57343>=a&&++r,e+=4}return e}function at(n,e){for(var r=Array(n),a=0;a<n;++a)r[a]=Jn(w[e+4*a>>2],"parameter "+a);return r}var ut={};function ot(n){var e=ut[n];return void 0===e?on(n):e}var st=[];function ct(){function n2(n){n.$$$embind_global$$$=n;var e="object"==typeof $$$embind_global$$$&&n.$$$embind_global$$$==n;return e||delete n.$$$embind_global$$$,e}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof e&&n2(e)?$$$embind_global$$$=e:"object"==typeof self&&n2(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var lt=[],pt={};function ht(){if(!vt){var n,e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:c||"./this.program"};for(n in pt)void 0===pt[n]?delete e[n]:e[n]=pt[n];var r=[];for(n in e)r.push(n+"="+e[n]);vt=r}return vt}var vt,gt=[null,[],[]];function dt(n){return 0==n%4&&(0!=n%100||0==n%400)}var mt=[31,29,31,30,31,30,31,31,30,31,30,31],wt=[31,28,31,30,31,30,31,31,30,31,30,31];function bt(n,e,r,a){function a3(n,e,r){for(n="number"==typeof n?n.toString():n||"";n.length<e;)n=r[0]+n;return n}function i3(n,e){return a3(n,e,"0")}function o3(n,e){function e4(n){return 0>n?-1:0<n?1:0}var r;return 0===(r=e4(n.getFullYear()-e.getFullYear()))&&0===(r=e4(n.getMonth()-e.getMonth()))&&(r=e4(n.getDate()-e.getDate())),r}function u3(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function c2(n){var e=n.ra;for(n=new Date(new Date(n.sa+1900,0,1).getTime());0<e;){var r=n.getMonth(),a=(dt(n.getFullYear())?mt:wt)[r];if(!(e>a-n.getDate())){n.setDate(n.getDate()+e);break}e-=a-n.getDate()+1,n.setDate(1),11>r?n.setMonth(r+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1))}return r=new Date(n.getFullYear()+1,0,4),e=u3(new Date(n.getFullYear(),0,4)),r=u3(r),0>=o3(e,n)?0>=o3(r,n)?n.getFullYear()+1:n.getFullYear():n.getFullYear()-1}var o=b[a+40>>2];for(var i in a={jb:b[a>>2],ib:b[a+4>>2],za:b[a+8>>2],Ea:b[a+12>>2],Aa:b[a+16>>2],sa:b[a+20>>2],na:b[a+24>>2],ra:b[a+28>>2],mb:b[a+32>>2],hb:b[a+36>>2],kb:o&&o?$(g,o):""},r=r?$(g,r):"",o={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})r=r.replace(new RegExp(i,"g"),o[i]);var u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),c="January February March April May June July August September October November December".split(" ");for(i in o={"%a":function(n){return u[n.na].substring(0,3)},"%A":function(n){return u[n.na]},"%b":function(n){return c[n.Aa].substring(0,3)},"%B":function(n){return c[n.Aa]},"%C":function(n){return i3((n.sa+1900)/100|0,2)},"%d":function(n){return i3(n.Ea,2)},"%e":function(n){return a3(n.Ea,2," ")},"%g":function(n){return c2(n).toString().substring(2)},"%G":function(n){return c2(n)},"%H":function(n){return i3(n.za,2)},"%I":function(n){return 0==(n=n.za)?n=12:12<n&&(n-=12),i3(n,2)},"%j":function(n){for(var e=0,r=0;r<=n.Aa-1;e+=(dt(n.sa+1900)?mt:wt)[r++]);return i3(n.Ea+e,3)},"%m":function(n){return i3(n.Aa+1,2)},"%M":function(n){return i3(n.ib,2)},"%n":function(){return"\n"},"%p":function(n){return 0<=n.za&&12>n.za?"AM":"PM"},"%S":function(n){return i3(n.jb,2)},"%t":function(){return"\t"},"%u":function(n){return n.na||7},"%U":function(n){return i3(Math.floor((n.ra+7-n.na)/7),2)},"%V":function(n){var e=Math.floor((n.ra+7-(n.na+6)%7)/7);if(2>=(n.na+371-n.ra-2)%7&&e++,e)53==e&&(4==(r=(n.na+371-n.ra)%7)||3==r&&dt(n.sa)||(e=1));else{e=52;var r=(n.na+7-n.ra-1)%7;(4==r||5==r&&dt(n.sa%400-1))&&e++}return i3(e,2)},"%w":function(n){return n.na},"%W":function(n){return i3(Math.floor((n.ra+7-(n.na+6)%7)/7),2)},"%y":function(n){return(n.sa+1900).toString().substring(2)},"%Y":function(n){return n.sa+1900},"%z":function(n){var e=0<=(n=n.hb);return n=Math.abs(n)/60,(e?"+":"-")+String("0000"+(n/60*100+n%60)).slice(-4)},"%Z":function(n){return n.kb},"%%":function(){return"%"}},r=r.replace(/%%/g,"\0\0"),o)r.includes(i)&&(r=r.replace(new RegExp(i,"g"),o[i](a)));return(i=function yt(n){var e=Array(W(n)+1);return k(n,e,0,e.length),e}(r=r.replace(/\0\0/g,"%"))).length>e?0:(v.set(i,n),i.length-1)}an=r.InternalError=Q("InternalError");for(var At=Array(256),Tt=0;256>Tt;++Tt)At[Tt]=String.fromCharCode(Tt);un=At,pn=r.BindingError=Q("BindingError"),Pn.prototype.isAliasOf=function(n){if(!(this instanceof Pn&&n instanceof Pn))return!1;var e=this.ea.ha.fa,r=this.ea.ga,a=n.ea.ha.fa;for(n=n.ea.ga;e.ma;)r=e.wa(r),e=e.ma;for(;a.ma;)n=a.wa(n),a=a.ma;return e===a&&r===n},Pn.prototype.clone=function(){if(this.ea.ga||hn(this),this.ea.va)return this.ea.count.value+=1,this;var n=Cn,e=Object,r=e.create,a=Object.getPrototypeOf(this),o=this.ea;return(n=n(r.call(e,a,{ea:{value:{count:o.count,ua:o.ua,va:o.va,ga:o.ga,ha:o.ha,ja:o.ja,la:o.la}}}))).ea.count.value+=1,n.ea.ua=!1,n},Pn.prototype.delete=function(){this.ea.ga||hn(this),this.ea.ua&&!this.ea.va&&cn("Object already scheduled for deletion"),vn(this),dn(this.ea),this.ea.va||(this.ea.ja=void 0,this.ea.ga=void 0)},Pn.prototype.isDeleted=function(){return!this.ea.ga},Pn.prototype.deleteLater=function(){return this.ea.ga||hn(this),this.ea.ua&&!this.ea.va&&cn("Object already scheduled for deletion"),wn.push(this),1===wn.length&&An&&An(bn),this.ea.ua=!0,this},r.getInheritedInstanceCount=function(){return Object.keys(Mn).length},r.getLiveInheritedInstances=function(){var n,e=[];for(n in Mn)Mn.hasOwnProperty(n)&&e.push(Mn[n]);return e},r.flushPendingDeletes=bn,r.setDelayFunction=function(n){An=n,wn.length&&An&&An(bn)},Fn.prototype.Qa=function(n){return this.Ha&&(n=this.Ha(n)),n},Fn.prototype.Fa=function(n){this.oa&&this.oa(n)},Fn.prototype.argPackAdvance=8,Fn.prototype.readValueFromPointer=L,Fn.prototype.deleteObject=function(n){null!==n&&n.delete()},Fn.prototype.fromWireType=function(n){function t(){return this.ya?_n(this.fa.pa,{ha:this.$a,ga:e,la:this,ja:n}):_n(this.fa.pa,{ha:this,ga:n})}var e=this.Qa(n);if(!e)return this.Fa(n),null;var r=function Tn(n,e){for(void 0===e&&cn("ptr should not be undefined");n.ma;)e=n.wa(e),n=n.ma;return Mn[e]}(this.fa,e);if(void 0!==r)return 0===r.ea.count.value?(r.ea.ga=e,r.ea.ja=n,r.clone()):(r=r.clone(),this.Fa(n),r);if(r=this.fa.Pa(e),!(r=mn[r]))return t.call(this);r=this.xa?r.Ia:r.pointerType;var a=gn(e,this.fa,r.fa);return null===a?t.call(this):this.ya?_n(r.fa.pa,{ha:r,ga:a,la:this,ja:n}):_n(r.fa.pa,{ha:r,ga:a})},Bn=r.UnboundTypeError=Q("UnboundTypeError"),r.count_emval_handles=function(){for(var n=0,e=5;e<Xn.length;++e)void 0!==Xn[e]&&++n;return n},r.get_first_emval=function(){for(var n=5;n<Xn.length;++n)if(void 0!==Xn[n])return Xn[n];return null};var Pt={n:function(n){return Ct(n+24)+24},m:function(n,e,r){throw new z(n).La(e,r),n},s:function(n){var e=J[n];delete J[n];var r=e.Ca,a=e.oa,o=e.Ga;en([n],o.map((n=>n.Ta)).concat(o.map((n=>n.eb))),(n=>{var i={};return o.forEach(((e,r)=>{var a=n[r],u=e.Ra,c=e.Sa,f=n[r+o.length],s=e.cb,l=e.fb;i[e.Na]={read:n=>a.fromWireType(u(c,n)),write:(n,e)=>{var r=[];s(l,n,f.toWireType(r,e)),N(r)}}})),[{name:e.name,fromWireType:function(n){var e,r={};for(e in i)r[e]=i[e].read(n);return a(n),r},toWireType:function(n,e){for(var o in i)if(!(o in e))throw new TypeError('Missing field:  "'+o+'"');var u=r();for(o in i)i[o].write(u,e[o]);return null!==n&&n.push(a,u),u},argPackAdvance:8,readValueFromPointer:L,ka:a}]}))},F:function(n,e,r,a,o){e=on(e),r=ln(r);var i=-1!=e.indexOf("u");i&&(o=(1n<<64n)-1n),fn(n,{name:e,fromWireType:function(n){return n},toWireType:function(n,r){if("bigint"!=typeof r&&"number"!=typeof r)throw new TypeError('Cannot convert "'+rn(r)+'" to '+this.name);if(r<a||r>o)throw new TypeError('Passing a number "'+rn(r)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+a+", "+o+"]!");return r},argPackAdvance:8,readValueFromPointer:sn(e,r,!i),ka:null})},S:function(n,e,r,a,o){var i=ln(r);fn(n,{name:e=on(e),fromWireType:function(n){return!!n},toWireType:function(n,e){return e?a:o},argPackAdvance:8,readValueFromPointer:function(n){if(1===r)var a=v;else if(2===r)a=y;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);a=b}return this.fromWireType(a[n>>i])},ka:null})},f:function(n,e,r,a,o,i,u,c,f,s,l,h,p){l=on(l),i=Un(o,i),c&&(c=Un(u,c)),s&&(s=Un(f,s)),p=Un(h,p);var d=X(l);kn(d,(function(){xn("Cannot construct "+l+" due to unbound types",[a])})),en([n,e,r],a?[a]:[],(function(e){if(e=e[0],a)var r=e.fa,o=r.pa;else o=Pn.prototype;e=K(d,(function(){if(Object.getPrototypeOf(this)!==u)throw new pn("Use 'new' to construct "+l);if(void 0===f.qa)throw new pn(l+" has no accessible constructor");var n=f.qa[arguments.length];if(void 0===n)throw new pn("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.qa).toString()+") parameters instead!");return n.apply(this,arguments)}));var u=Object.create(o,{constructor:{value:e}});e.prototype=u;var f=new Wn(l,e,u,p,r,i,c,s);r=new Fn(l,f,!0,!1,!1),o=new Fn(l+"*",f,!1,!1,!1);var h=new Fn(l+" const*",f,!1,!0,!1);return mn[n]={pointerType:o,Ia:h},Dn(d,e),[r,o,h]}))},v:function(n,e,r,a,o,i,u){var c=Yn(r,a);e=on(e),i=Un(o,i),en([],[n],(function(n){function r3(){xn("Cannot call "+a+" due to unbound types",c)}var a=(n=n[0]).name+"."+e;e.startsWith("@@")&&(e=Symbol[e.substring(2)]);var o=n.fa.constructor;return void 0===o[e]?(r3.ta=r-1,o[e]=r3):($n(o,e,a),o[e].ia[r-1]=r3),en([],c,(function(n){return n=Hn(a,[n[0],null].concat(n.slice(1)),null,i,u),void 0===o[e].ia?(n.ta=r-1,o[e]=n):o[e].ia[r-1]=n,[]})),[]}))},i:function(n,e,r,a,o,i){0<e||R();var u=Yn(e,r);o=Un(a,o),en([],[n],(function(n){var r="constructor "+(n=n[0]).name;if(void 0===n.fa.qa&&(n.fa.qa=[]),void 0!==n.fa.qa[e-1])throw new pn("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.fa.qa[e-1]=()=>{xn("Cannot construct "+n.name+" due to unbound types",u)},en([],u,(function(a){return a.splice(1,0,null),n.fa.qa[e-1]=Hn(r,a,null,o,i),[]})),[]}))},b:function(n,e,r,a,o,i,u,c){var f=Yn(r,a);e=on(e),i=Un(o,i),en([],[n],(function(n){function r3(){xn("Cannot call "+a+" due to unbound types",f)}var a=(n=n[0]).name+"."+e;e.startsWith("@@")&&(e=Symbol[e.substring(2)]),c&&n.fa.ab.push(e);var o=n.fa.pa,s=o[e];return void 0===s||void 0===s.ia&&s.className!==n.name&&s.ta===r-2?(r3.ta=r-2,r3.className=n.name,o[e]=r3):($n(o,e,a),o[e].ia[r-2]=r3),en([],f,(function(c){return c=Hn(a,c,n,i,u),void 0===o[e].ia?(c.ta=r-2,o[e]=c):o[e].ia[r-2]=c,[]})),[]}))},c:function(n,e,r,a,o,i,u,c,f,s){e=on(e),o=Un(a,o),en([],[n],(function(n){var a=(n=n[0]).name+"."+e,l={get:function(){xn("Cannot access "+a+" due to unbound types",[r,u])},enumerable:!0,configurable:!0};return l.set=f?()=>{xn("Cannot access "+a+" due to unbound types",[r,u])}:()=>{cn(a+" is a read-only property")},Object.defineProperty(n.fa.pa,e,l),en([],f?[r,u]:[r],(function(r){var u=r[0],l={get:function(){var e=Vn(this,n,a+" getter");return u.fromWireType(o(i,e))},enumerable:!0};if(f){f=Un(c,f);var h=r[1];l.set=function(e){var r=Vn(this,n,a+" setter"),o=[];f(s,r,h.toWireType(o,e)),N(o)}}return Object.defineProperty(n.fa.pa,e,l),[]})),[]}))},R:function(n,e){fn(n,{name:e=on(e),fromWireType:function(n){var e=Nn(n);return qn(n),e},toWireType:function(n,e){return Ln(e)},argPackAdvance:8,readValueFromPointer:L,ka:null})},o:function(n,e,r,a){function a3(){}r=ln(r),e=on(e),a3.values={},fn(n,{name:e,constructor:a3,fromWireType:function(n){return this.constructor.values[n]},toWireType:function(n,e){return e.value},argPackAdvance:8,readValueFromPointer:Gn(e,r,a),ka:null}),kn(e,a3)},e:function(n,e,r){var a=Jn(n,"enum");e=on(e),n=a.constructor,a=Object.create(a.constructor.prototype,{value:{value:r},constructor:{value:K(a.name+"_"+e,(function(){}))}}),n.values[r]=a,n[e]=a},E:function(n,e,r){r=ln(r),fn(n,{name:e=on(e),fromWireType:function(n){return n},toWireType:function(n,e){return e},argPackAdvance:8,readValueFromPointer:Zn(e,r),ka:null})},W:function(n,e,r,a,o,i){var u=Yn(e,r);n=on(n),o=Un(a,o),kn(n,(function(){xn("Cannot call "+n+" due to unbound types",u)}),e-1),en([],u,(function(r){return Dn(n,Hn(n,[r[0],null].concat(r.slice(1)),null,o,i),e-1),[]}))},w:function(n,e,r,a,o){e=on(e),-1===o&&(o=4294967295),o=ln(r);var i3=n=>n;if(0===a){var i=32-8*r;i3=n=>n<<i>>>i}r=e.includes("unsigned")?function(n,e){return e>>>0}:function(n,e){return e},fn(n,{name:e,fromWireType:i3,toWireType:r,argPackAdvance:8,readValueFromPointer:sn(e,o,0!==a),ka:null})},r:function(n,e,r){function r2(n){var e=w;return new a(d,e[1+(n>>=2)],e[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][e];fn(n,{name:r=on(r),fromWireType:r2,argPackAdvance:8,readValueFromPointer:r2},{Wa:!0})},h:function(n,e,r,a,o,i,u,c,f,s,l,h){r=on(r),i=Un(o,i),c=Un(u,c),s=Un(f,s),h=Un(l,h),en([n],[e],(function(n){return n=n[0],[new Fn(r,n.fa,!1,!1,!0,n,a,i,c,s,h)]}))},G:function(n,e){var r="std::string"===(e=on(e));fn(n,{name:e,fromWireType:function(n){var e=w[n>>2],a=n+4;if(r)for(var o=a,i=0;i<=e;++i){var u=a+i;if(i==e||0==g[u]){if(o=o?$(g,o,u-o):"",void 0===c)var c=o;else c+=String.fromCharCode(0),c+=o;o=u+1}}else{for(c=Array(e),i=0;i<e;++i)c[i]=String.fromCharCode(g[a+i]);c=c.join("")}return $t(n),c},toWireType:function(n,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var a="string"==typeof e;a||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||cn("Cannot pass non-string to std::string");var o=r&&a?W(e):e.length,i=Ct(4+o+1),u=i+4;if(w[i>>2]=o,r&&a)k(e,g,u,o+1);else if(a)for(a=0;a<o;++a){var c=e.charCodeAt(a);255<c&&($t(u),cn("String has UTF-16 code units that do not fit in 8 bits")),g[u+a]=c}else for(a=0;a<o;++a)g[u+a]=e[a];return null!==n&&n.push($t,i),i},argPackAdvance:8,readValueFromPointer:L,ka:function(n){$t(n)}})},B:function(n,e,r){if(r=on(r),2===e)var a=Kn,o=Qn,i=nt,o3=()=>m,u=1;else 4===e&&(a=tt,o=et,i=rt,o3=()=>w,u=2);fn(n,{name:r,fromWireType:function(n){for(var r,o=w[n>>2],i=o3(),c=n+4,f=0;f<=o;++f){var s=n+4+f*e;f!=o&&0!=i[s>>u]||(c=a(c,s-c),void 0===r?r=c:(r+=String.fromCharCode(0),r+=c),c=s+e)}return $t(n),r},toWireType:function(n,a){"string"!=typeof a&&cn("Cannot pass non-string to C++ string type "+r);var c=i(a),f=Ct(4+c+e);return w[f>>2]=c>>u,o(a,f+4,c+e),null!==n&&n.push($t,f),f},argPackAdvance:8,readValueFromPointer:L,ka:function(n){$t(n)}})},t:function(n,e,r,a,o,i){J[n]={name:on(e),Ca:Un(r,a),oa:Un(o,i),Ga:[]}},j:function(n,e,r,a,o,i,u,c,f,s){J[n].Ga.push({Na:on(e),Ta:r,Ra:Un(a,o),Sa:i,eb:u,cb:Un(c,f),fb:s})},T:function(n,e){fn(n,{Xa:!0,name:e=on(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},l:function(n,e,r){n=Nn(n),e=Jn(e,"emval::as");var a=[],o=Ln(a);return w[r>>2]=o,e.toWireType(a,n)},z:function(n,e){return n=Nn(n),(e=Jn(e,"emval::as")).toWireType(null,n)},X:function(n,e,r,a){n=Nn(n),r=at(e,r);for(var o=Array(e),i=0;i<e;++i){var u=r[i];o[i]=u.readValueFromPointer(a),a+=u.argPackAdvance}return n=n.apply(void 0,o),Ln(n)},U:function(n,e,r,a,o){n=st[n],e=Nn(e),r=ot(r);var i=[];return w[a>>2]=Ln(i),n(e,r,i,o)},C:function(n,e,r,a){(n=st[n])(e=Nn(e),r=ot(r),null,a)},a:qn,H:function(n){return 0===n?Ln(ct()):(n=ot(n),Ln(ct()[n]))},A:function(n,e){var r=at(n,e),a=r[0];e=a.name+"_$"+r.slice(1).map((function(n){return n.name})).join("_")+"$";var o=lt[e];if(void 0!==o)return o;var i=Array(n-1);return o=function ft(n){var e=st.length;return st.push(n),e}(((e,o,u,c)=>{for(var f=0,s=0;s<n-1;++s)i[s]=r[s+1].readValueFromPointer(c+f),f+=r[s+1].argPackAdvance;for(e=e[o].apply(e,i),s=0;s<n-1;++s)r[s+1].Ja&&r[s+1].Ja(i[s]);if(!a.Xa)return a.toWireType(u,e)})),lt[e]=o},q:function(n,e){return n=Nn(n),e=Nn(e),Ln(n[e])},g:function(n){4<n&&(Xn[n].Da+=1)},I:function(n,e){return(n=Nn(n))instanceof Nn(e)},u:function(n){return"number"==typeof(n=Nn(n))},x:function(n){return"string"==typeof(n=Nn(n))},V:function(){return Ln([])},p:function(n){return Ln(ot(n))},k:function(n){N(Nn(n)),qn(n)},d:function(n,e){return n=(n=Jn(n,"_emval_take_value")).readValueFromPointer(e),Ln(n)},y:function(n){return n=Nn(n),Ln(typeof n)},D:function(){R("")},N:function(n,e,r){g.copyWithin(n,e,e+r)},M:function(n){var e=g.length;if(2147483648<(n>>>=0))return!1;for(var r=1;4>=r;r*=2){var a=e*(1+.2/r);a=Math.min(a,n+100663296);var o=Math;a=Math.max(n,a),o=o.min.call(o,2147483648,a+(65536-a%65536)%65536);n:{try{p.grow(o-d.byteLength+65535>>>16),E();var i=1;break n}catch(u){}i=void 0}if(i)return!0}return!1},K:function(n,e){var r=0;return ht().forEach((function(a,o){var i=e+r;for(o=w[n+4*o>>2]=i,i=0;i<a.length;++i)v[0|o++]=a.charCodeAt(i);v[0|o]=0,r+=a.length+1})),0},L:function(n,e){var r=ht();w[n>>2]=r.length;var a=0;return r.forEach((function(n){a+=n.length+1})),w[e>>2]=a,0},Q:function(){return 52},P:function(){return 70},O:function(n,e,r,a){for(var o=0,i=0;i<r;i++){var u=w[e>>2],c=w[e+4>>2];e+=8;for(var f=0;f<c;f++){var s=g[u+f],p=gt[n];0===s||10===s?((1===n?l:h)($(p,0)),p.length=0):p.push(s)}o+=c}return w[a>>2]=o,0},J:function(n,e,r,a){return bt(n,e,r,a)}};!function(){function n2(n){r.asm=n.exports,p=r.asm.Y,E(),j=r.asm.ca,S.unshift(r.asm.Z),I--,r.monitorRunDependencies&&r.monitorRunDependencies(I),0==I&&H&&(n=H,H=null,n())}function t(n){n2(n.instance)}function r2(e){return function V(){return s||"function"!=typeof fetch?Promise.resolve().then((function(){return Y()})):fetch(M,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+M+"'";return n.arrayBuffer()})).catch((function(){return Y()}))}().then((function(e){return WebAssembly.instantiate(e,n)})).then((function(n){return n})).then(e,(function(n){h("failed to asynchronously prepare wasm: "+n),R(n)}))}var n={a:Pt};if(I++,r.monitorRunDependencies&&r.monitorRunDependencies(I),r.instantiateWasm)try{return r.instantiateWasm(n,n2)}catch(e){h("Module.instantiateWasm callback failed with error: "+e),i(e)}(s||"function"!=typeof WebAssembly.instantiateStreaming||x()||"function"!=typeof fetch?r2(t):fetch(M,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,n).then(t,(function(n){return h("wasm streaming compile failed: "+n),h("falling back to ArrayBuffer instantiation"),r2(t)}))}))).catch(i)}(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.Z).apply(null,arguments)};var _t,Ct=r._malloc=function(){return(Ct=r._malloc=r.asm._).apply(null,arguments)},$t=r._free=function(){return($t=r._free=r.asm.$).apply(null,arguments)},Et=r.___getTypeName=function(){return(Et=r.___getTypeName=r.asm.aa).apply(null,arguments)};function kt(){function n2(){if(!_t&&(_t=!0,r.calledRun=!0,!C)){if(B(S),o(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var n=r.postRun.shift();U.unshift(n)}B(U)}}if(!(0<I)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)D();B(O),0<I||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),n2()}),1)):n2())}}if(r.__embind_initialize_bindings=function(){return(r.__embind_initialize_bindings=r.asm.ba).apply(null,arguments)},r.___cxa_is_pointer_type=function(){return(r.___cxa_is_pointer_type=r.asm.da).apply(null,arguments)},H=function n2(){_t||kt(),_t||(H=n2)},r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return kt(),n.ready},r.exports=o;const u=n(i.exports),c=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"}));export{c as a};
