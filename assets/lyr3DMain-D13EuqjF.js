import{av as e}from"./index-DSIPxOWi.js";var r,t,n,a={exports:{}};r=a,t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,n=function(e={}){var r,n,a=e;a.ready=new Promise(((e,t)=>{r=e,n=t}));var i=Object.assign({},a),o="./this.program",u=!0,s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),t&&(s=t),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",a.print;var c,f,d=a.printErr||void 0;Object.assign(a,i),i=null,a.arguments&&a.arguments,a.thisProgram&&(o=a.thisProgram),a.quit&&a.quit,a.wasmBinary&&(c=a.wasmBinary),"object"!=typeof WebAssembly&&k("no native wasm support detected");var h,p,v,m,g,y,w,_,b=!1;function T(){var e=f.buffer;a.HEAP8=h=new Int8Array(e),a.HEAP16=v=new Int16Array(e),a.HEAPU8=p=new Uint8Array(e),a.HEAPU16=m=new Uint16Array(e),a.HEAP32=g=new Int32Array(e),a.HEAPU32=y=new Uint32Array(e),a.HEAPF32=w=new Float32Array(e),a.HEAPF64=_=new Float64Array(e)}var C=[],F=[],W=[];var j=0,O=null;function k(e){a.onAbort&&a.onAbort(e),d(e="Aborted("+e+")"),b=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw n(r),r}var D,U=e=>e.startsWith("data:application/octet-stream;base64,");function Y(e){if(e==D&&c)return new Uint8Array(c);throw"both async and sync fetching of the wasm failed"}function z(e,r,t){return function V(e){return!c&&u&&"function"==typeof fetch?fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>Y(e))):Promise.resolve().then((()=>Y(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(t,(e=>{d(`failed to asynchronously prepare wasm: ${e}`),k(e)}))}U(D="lyr3DMain.wasm")||(D=function l(e){return a.locateFile?a.locateFile(e,s):s+e}(D));var N=e=>{for(;e.length>0;)e.shift()(a)};function G(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){y[this.ptr+4>>2]=e},this.get_type=function(){return y[this.ptr+4>>2]},this.set_destructor=function(e){y[this.ptr+8>>2]=e},this.get_destructor=function(){return y[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,h[this.ptr+12|0]=e},this.get_caught=function(){return 0!=h[this.ptr+12|0]},this.set_rethrown=function(e){e=e?1:0,h[this.ptr+13|0]=e},this.get_rethrown=function(){return 0!=h[this.ptr+13|0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){y[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return y[this.ptr+16>>2]},this.get_exception_ptr=function(){if(ft(this.get_type()))return y[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}a.noExitRuntime;var M={},X=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function Z(e){return this.fromWireType(g[e>>2])}var I,H,q,J={},K={},Q={},ae=e=>{throw new I(e)},oe=(e,r,t)=>{function n3(r){var n=t(r);n.length!==e.length&&ae("Mismatched type converter count");for(var a=0;a<e.length;++a)pe(e[a],n[a])}e.forEach((function(e){Q[e]=r}));var n=new Array(r.length),a=[],i=0;r.forEach(((e,r)=>{K.hasOwnProperty(e)?n[r]=K[e]:(a.push(e),J.hasOwnProperty(e)||(J[e]=[]),J[e].push((()=>{n[r]=K[e],++i===a.length&&n3(n)})))})),0===a.length&&n3(n)},ee={},fe=e=>{for(var r="",t=e;p[t];)r+=H[p[t++]];return r},de=e=>{throw new q(e)};function pe(e,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function he(e,r,t={}){var n=r.name;if(e||de(`type "${n}" must have a positive integer typeid pointer`),K.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;de(`Cannot register type '${n}' twice`)}if(K[e]=r,delete Q[e],J.hasOwnProperty(e)){var a=J[e];delete J[e],a.forEach((e=>e()))}}(e,r,t)}var re=8;function ye(){this.allocated=[void 0],this.freelist=[]}var te=new ye,_e=e=>{e>=te.reserved&&0==--te.get(e).refcount&&te.free(e)},be=()=>{for(var e=0,r=te.reserved;r<te.allocated.length;++r)void 0!==te.allocated[r]&&++e;return e},Te_toValue=e=>(e||de("Cannot use deleted val. handle = "+e),te.get(e).value),Te_toHandle=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return te.allocate({refcount:1,value:e})}},Fe=(e,r)=>{switch(r){case 4:return function(e){return this.fromWireType(w[e>>2])};case 8:return function(e){return this.fromWireType(_[e>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}};var ne,Oe=(e,r,t)=>{if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||de(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},ie=[],He=e=>{var r=ie[e];return r||(e>=ie.length&&(ie.length=e+1),ie[e]=r=ne.get(e)),r},Ie=(e,r,t)=>e.includes("j")?((e,r,t)=>{var n=a["dynCall_"+e];return t&&t.length?n.apply(null,[r].concat(t)):n.call(null,r)})(e,r,t):He(r).apply(null,t),Ye=(e,r)=>{e=fe(e);var t=function t2(){return e.includes("j")?((e,r)=>{var t=[];return function(){return t.length=0,Object.assign(t,arguments),Ie(e,r,t)}})(e,r):He(r)}();return"function"!=typeof t&&de(`unknown function pointer with signature ${e}: ${r}`),t};var ue,Le=e=>{var r=lt(e),t=fe(r);return xe(r),t},Ge=e=>{const r=(e=e.trim()).indexOf("(");return-1!==r?(function A(e,r){e||k(r)}(")"==e[e.length-1],"Parentheses for argument names should match."),e.substr(0,r)):e},Je=(e,r,t)=>{switch(r){case 1:return t?e=>h[0|e]:e=>p[0|e];case 2:return t?e=>v[e>>1]:e=>m[e>>1];case 4:return t?e=>g[e>>2]:e=>y[e>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}};function Ke(e){return this.fromWireType(y[e>>2])}var Qe=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,i=t+n-1,o=0;o<e.length;++o){var u=e.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++o)),u<=127){if(t>=i)break;r[t++]=u}else if(u<=2047){if(t+1>=i)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=i)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=i)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a},rr=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},se="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,ar=(e,r)=>e?((e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&se)return se.decode(e.subarray(r,a));for(var i="";r<a;){var o=e[r++];if(128&o){var u=63&e[r++];if(192!=(224&o)){var s=63&e[r++];if((o=224==(240&o)?(15&o)<<12|u<<6|s:(7&o)<<18|u<<12|s<<6|63&e[r++])<65536)i+=String.fromCharCode(o);else{var c=o-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&o)<<6|u)}else i+=String.fromCharCode(o)}return i})(p,e,r):"",le="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,ur=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&m[n];)++n;if((t=n<<1)-e>32&&le)return le.decode(p.subarray(e,t));for(var i="",o=0;!(o>=r/2);++o){var u=v[e+2*o>>1];if(0==u)break;i+=String.fromCharCode(u)}return i},sr=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,i=0;i<a;++i){var o=e.charCodeAt(i);v[r>>1]=o,r+=2}return v[r>>1]=0,r-n},lr=e=>2*e.length,cr=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=g[e+4*t>>2];if(0==a)break;if(++t,a>=65536){var i=a-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(a)}return n},fr=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,i=0;i<e.length;++i){var o=e.charCodeAt(i);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++i)),g[r>>2]=o,(r+=4)+4>a)break}return g[r>>2]=0,r-n},dr=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},ce={},xr=e=>{var r=(e-f.buffer.byteLength+65535)/65536;try{return f.grow(r),T(),1}catch(Ee){}},ve={},Rr=()=>{if(!Rr.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:o||"./this.program"};for(var r in ve)void 0===ve[r]?delete e[r]:e[r]=ve[r];var t=[];for(var r in e)t.push(`${r}=${e[r]}`);Rr.strings=t}return Rr.strings},Ir=e=>e%4==0&&(e%100!=0||e%400==0),me=[31,29,31,30,31,30,31,31,30,31,30,31],we=[31,28,31,30,31,30,31,31,30,31,30,31];var Ae,Te,Ce,Ee,Gr=(e,r,t,n)=>{var a=y[n+40>>2],i={tm_sec:g[n>>2],tm_min:g[n+4>>2],tm_hour:g[n+8>>2],tm_mday:g[n+12>>2],tm_mon:g[n+16>>2],tm_year:g[n+20>>2],tm_wday:g[n+24>>2],tm_yday:g[n+28>>2],tm_isdst:g[n+32>>2],tm_gmtoff:g[n+36>>2],tm_zone:a?ar(a):""},o=ar(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)o=o.replace(new RegExp(s,"g"),u[s]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=["January","February","March","April","May","June","July","August","September","October","November","December"];function f2(e,r,t){for(var n="number"==typeof e?e.toString():e||"";n.length<r;)n=t[0]+n;return n}function d2(e,r){return f2(e,r,"0")}function h2(e,r){function t3(e){return e<0?-1:e>0?1:0}var t;return 0===(t=t3(e.getFullYear()-r.getFullYear()))&&0===(t=t3(e.getMonth()-r.getMonth()))&&(t=t3(e.getDate()-r.getDate())),t}function p2(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function m2(e){var r=((e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=Ir(t.getFullYear()),a=t.getMonth(),i=(n?me:we)[a];if(!(r>i-t.getDate()))return t.setDate(t.getDate()+r),t;r-=i-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(e.tm_year+1900,0,1),e.tm_yday),t=new Date(r.getFullYear(),0,4),n=new Date(r.getFullYear()+1,0,4),a=p2(t),i=p2(n);return h2(a,r)<=0?h2(i,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var d={"%a":e=>c[e.tm_wday].substring(0,3),"%A":e=>c[e.tm_wday],"%b":e=>f[e.tm_mon].substring(0,3),"%B":e=>f[e.tm_mon],"%C":e=>d2((e.tm_year+1900)/100|0,2),"%d":e=>d2(e.tm_mday,2),"%e":e=>f2(e.tm_mday,2," "),"%g":e=>m2(e).toString().substring(2),"%G":e=>m2(e),"%H":e=>d2(e.tm_hour,2),"%I":e=>{var r=e.tm_hour;return 0==r?r=12:r>12&&(r-=12),d2(r,2)},"%j":e=>d2(e.tm_mday+((e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t})(Ir(e.tm_year+1900)?me:we,e.tm_mon-1),3),"%m":e=>d2(e.tm_mon+1,2),"%M":e=>d2(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>d2(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var r=e.tm_yday+7-e.tm_wday;return d2(Math.floor(r/7),2)},"%V":e=>{var r=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&r++,r){if(53==r){var t=(e.tm_wday+371-e.tm_yday)%7;4==t||3==t&&Ir(e.tm_year)||(r=1)}}else{r=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(4==n||5==n&&Ir(e.tm_year%400-1))&&r++}return d2(r,2)},"%w":e=>e.tm_wday,"%W":e=>{var r=e.tm_yday+7-(e.tm_wday+6)%7;return d2(Math.floor(r/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var r=e.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var s in o=o.replace(/%%/g,"\0\0"),d)o.includes(s)&&(o=o.replace(new RegExp(s,"g"),d[s](i)));var p=function Br(e,r,t){var n=rr(e)+1,a=new Array(n);return Qe(e,a,0,a.length),a}(o=o.replace(/\0\0/g,"%"));return p.length>r?0:(((e,r)=>{h.set(e,r)})(p,e),p.length-1)},Jr=(e,r)=>{e<128?r.push(e):r.push(e%128|128,e>>7)},Kr=(e,r)=>{if("function"==typeof WebAssembly.Function)return new WebAssembly.Function((e=>{for(var r={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},t={parameters:[],results:"v"==e[0]?[]:[r[e[0]]]},n=1;n<e.length;++n)t.parameters.push(r[e[n]]);return t})(r),e);var t=[1];((e,r)=>{var t=e.slice(0,1),n=e.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};r.push(96),Jr(n.length,r);for(var i=0;i<n.length;++i)r.push(a[n[i]]);"v"==t?r.push(0):r.push(1,a[t])})(r,t);var n=[0,97,115,109,1,0,0,0,1];Jr(t.length,n),n.push.apply(n,t),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(a,{e:{f:e}}).exports.f},et=e=>(Ae||(Ae=new WeakMap,((e,r)=>{if(Ae)for(var t=e;t<e+r;t++){var n=He(t);n&&Ae.set(n,t)}})(0,ne.length)),Ae.get(e)||0),We=[],nt=(e,r)=>{ne.set(e,r),ie[e]=ne.get(e)};I=a.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},(()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);H=e})(),q=a.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},function ge(){Object.assign(ye.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},free(e){this.allocated[e]=void 0,this.freelist.push(e)}})}(),te.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),te.reserved=te.allocated.length,a.count_emval_handles=be,ue=a.UnboundTypeError=(Te=Error,Ee=function Ve(e,r){return e=(e=>{if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?`_${e}`:e})(e),{[e]:function(){return r.apply(this,arguments)}}[e]}(Ce="UnboundTypeError",(function(e){this.name=Ce,this.message=e;var r=new Error(e).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))})),Ee.prototype=Object.create(Te.prototype),Ee.prototype.constructor=Ee,Ee.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},Ee);var Pe={k:(e,r,t)=>{throw new G(e).init(r,t),e},l:e=>{var r=M[e];delete M[e];var t=r.elements,n=t.length,a=t.map((e=>e.getterReturnType)).concat(t.map((e=>e.setterArgumentType))),i=r.rawConstructor,o=r.rawDestructor;oe([e],a,(function(e){return t.forEach(((r,t)=>{var a=e[t],i=r.getter,o=r.getterContext,u=e[t+n],s=r.setter,c=r.setterContext;r.read=e=>a.fromWireType(i(o,e)),r.write=(e,r)=>{var t=[];s(c,e,u.toWireType(t,r)),X(t)}})),[{name:r.name,fromWireType:e=>{for(var r=new Array(n),a=0;a<n;++a)r[a]=t[a].read(e);return o(e),r},toWireType:(e,a)=>{if(n!==a.length)throw new TypeError(`Incorrect number of tuple elements for ${r.name}: expected=${n}, actual=${a.length}`);for(var u=i(),s=0;s<n;++s)t[s].write(u,a[s]);return null!==e&&e.push(o,u),u},argPackAdvance:re,readValueFromPointer:Z,destructorFunction:o}]}))},s:e=>{var r=ee[e];delete ee[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,i=a.map((e=>e.getterReturnType)).concat(a.map((e=>e.setterArgumentType)));oe([e],i,(e=>{var i={};return a.forEach(((r,t)=>{var n=r.fieldName,o=e[t],u=r.getter,s=r.getterContext,c=e[t+a.length],f=r.setter,d=r.setterContext;i[n]={read:e=>o.fromWireType(u(s,e)),write:(e,r)=>{var t=[];f(d,e,c.toWireType(t,r)),X(t)}}})),[{name:r.name,fromWireType:e=>{var r={};for(var t in i)r[t]=i[t].read(e);return n(e),r},toWireType:(e,r)=>{for(var a in i)if(!(a in r))throw new TypeError(`Missing field: "${a}"`);var o=t();for(a in i)i[a].write(o,r[a]);return null!==e&&e.push(n,o),o},argPackAdvance:re,readValueFromPointer:Z,destructorFunction:n}]}))},u:(e,r,t,n,a)=>{},B:(e,r,t,n)=>{pe(e,{name:r=fe(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?t:n},argPackAdvance:re,readValueFromPointer:function(e){return this.fromWireType(p[e])},destructorFunction:null})},A:(e,r)=>{pe(e,{name:r=fe(r),fromWireType:e=>{var r=Te_toValue(e);return _e(e),r},toWireType:(e,r)=>Te_toHandle(r),argPackAdvance:re,readValueFromPointer:Z,destructorFunction:null})},r:(e,r,t)=>{pe(e,{name:r=fe(r),fromWireType:e=>e,toWireType:(e,r)=>r,argPackAdvance:re,readValueFromPointer:Fe(r,t),destructorFunction:null})},c:(e,r,t,n,i,o,u)=>{var s=((e,r)=>{for(var t=[],n=0;n<e;n++)t.push(y[r+4*n>>2]);return t})(r,t);e=fe(e),e=Ge(e),i=Ye(n,i),((e,r,t)=>{a.hasOwnProperty(e)?((void 0===t||void 0!==a[e].overloadTable&&void 0!==a[e].overloadTable[t])&&de(`Cannot register public name '${e}' twice`),Oe(a,e,e),a.hasOwnProperty(t)&&de(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),a[e].overloadTable[t]=r):(a[e]=r,void 0!==t&&(a[e].numArguments=t))})(e,(function(){((e,r)=>{var t=[],n={};throw r.forEach((function a3(e){n[e]||K[e]||(Q[e]?Q[e].forEach(a3):(t.push(e),n[e]=!0))})),new ue(`${e}: `+t.map(Le).join([", "]))})(`Cannot call ${e} due to unbound types`,s)}),r-1),oe([],s,(function(t){var n=[t[0],null].concat(t.slice(1));return((e,r,t)=>{a.hasOwnProperty(e)||ae("Replacing nonexistant public symbol"),void 0!==a[e].overloadTable&&void 0!==t?a[e].overloadTable[t]=r:(a[e]=r,a[e].argCount=t)})(e,function je(e,r,t,n,a,i){var o=r.length;o<2&&de("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&null!==t,s=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){s=!0;break}var f="void"!==r[0].name,d=o-2,h=new Array(d),p=[],v=[];return function(){var t;arguments.length!==d&&de(`function ${e} called with ${arguments.length} arguments, expected ${d}`),v.length=0,p.length=u?2:1,p[0]=a,u&&(t=r[1].toWireType(v,this),p[1]=t);for(var i=0;i<d;++i)h[i]=r[i+2].toWireType(v,arguments[i]),p.push(h[i]);return function i4(e){if(s)X(v);else for(var n=u?1:2;n<r.length;n++){var a=1===n?t:h[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(a)}if(f)return r[0].fromWireType(e)}(n.apply(null,p))}}(e,n,null,i,o),r-1),[]}))},f:(e,r,t,n,a)=>{r=fe(r);var o3=e=>e;if(0===n){var i=32-8*t;o3=e=>e<<i>>>i}var o=r.includes("unsigned");pe(e,{name:r,fromWireType:o3,toWireType:o?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:re,readValueFromPointer:Je(r,t,0!==n),destructorFunction:null})},b:(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a3(e){var r=y[e>>2],t=y[e+4>>2];return new n(h.buffer,t,r)}pe(e,{name:t=fe(t),fromWireType:a3,argPackAdvance:re,readValueFromPointer:a3},{ignoreDuplicateRegistrations:!0})},q:(e,r)=>{var t="std::string"===(r=fe(r));pe(e,{name:r,fromWireType(e){var r,n=y[e>>2],a=e+4;if(t)for(var i=a,o=0;o<=n;++o){var u=a+o;if(o==n||0==p[u]){var s=ar(i,u-i);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),i=u+1}}else{var c=new Array(n);for(o=0;o<n;++o)c[o]=String.fromCharCode(p[a+o]);r=c.join("")}return xe(e),r},toWireType(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||de("Cannot pass non-string to std::string"),n=t&&a?rr(r):r.length;var i=Re(4+n+1),o=i+4;if(y[i>>2]=n,t&&a)((e,r,t)=>{Qe(e,p,r,t)})(r,o,n+1);else if(a)for(var u=0;u<n;++u){var s=r.charCodeAt(u);s>255&&(xe(o),de("String has UTF-16 code units that do not fit in 8 bits")),p[o+u]=s}else for(u=0;u<n;++u)p[o+u]=r[u];return null!==e&&e.push(xe,i),i},argPackAdvance:re,readValueFromPointer:Ke,destructorFunction(e){xe(e)}})},o:(e,r,t)=>{var n,a,i,o,u;t=fe(t),2===r?(n=ur,a=sr,o=lr,i=()=>m,u=1):4===r&&(n=cr,a=fr,o=dr,i=()=>y,u=2),pe(e,{name:t,fromWireType:e=>{for(var t,a=y[e>>2],o=i(),s=e+4,c=0;c<=a;++c){var f=e+4+c*r;if(c==a||0==o[f>>u]){var d=n(s,f-s);void 0===t?t=d:(t+=String.fromCharCode(0),t+=d),s=f+r}}return xe(e),t},toWireType:(e,n)=>{"string"!=typeof n&&de(`Cannot pass non-string to C++ string type ${t}`);var i=o(n),s=Re(4+i+r);return y[s>>2]=i>>u,a(n,s+4,i+r),null!==e&&e.push(xe,s),s},argPackAdvance:re,readValueFromPointer:Z,destructorFunction(e){xe(e)}})},m:(e,r,t,n,a,i)=>{M[e]={name:fe(r),rawConstructor:Ye(t,n),rawDestructor:Ye(a,i),elements:[]}},d:(e,r,t,n,a,i,o,u,s)=>{M[e].elements.push({getterReturnType:r,getter:Ye(t,n),getterContext:a,setterArgumentType:i,setter:Ye(o,u),setterContext:s})},t:(e,r,t,n,a,i)=>{ee[e]={name:fe(r),rawConstructor:Ye(t,n),rawDestructor:Ye(a,i),fields:[]}},i:(e,r,t,n,a,i,o,u,s,c)=>{ee[e].fields.push({fieldName:fe(r),getterReturnType:t,getter:Ye(n,a),getterContext:i,setterArgumentType:o,setter:Ye(u,s),setterContext:c})},C:(e,r)=>{pe(e,{isVoid:!0,name:r=fe(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,r)=>{}})},a:_e,n:e=>{e>4&&(te.get(e).refcount+=1)},D:()=>Te_toHandle([]),h:e=>Te_toHandle((e=>{var r=ce[e];return void 0===r?fe(e):r})(e)),j:()=>Te_toHandle({}),e:(e,r,t)=>{e=Te_toValue(e),r=Te_toValue(r),t=Te_toValue(t),e[r]=t},g:(e,r)=>{var t=(e=((e,r)=>{var t=K[e];return void 0===t&&de(r+" has unknown type "+Le(e)),t})(e,"_emval_take_value")).readValueFromPointer(r);return Te_toHandle(t)},p:()=>{k("")},z:(e,r,t)=>p.copyWithin(e,r,r+t),y:e=>{var r,t,n=p.length,a=2147483648;if((e>>>=0)>a)return!1;for(var i=1;i<=4;i*=2){var o=n*(1+.2/i);o=Math.min(o,e+100663296);var u=Math.min(a,(r=Math.max(e,o))+((t=65536)-r%t)%t);if(xr(u))return!0}return!1},w:(e,r)=>{var t=0;return Rr().forEach(((n,a)=>{var i=r+t;y[e+4*a>>2]=i,((e,r)=>{for(var t=0;t<e.length;++t)h[0|r++]=e.charCodeAt(t);h[0|r]=0})(n,i),t+=n.length+1})),0},x:(e,r)=>{var t=Rr();y[e>>2]=t.length;var n=0;return t.forEach((e=>n+=e.length+1)),y[r>>2]=n,0},v:(e,r,t,n,a)=>Gr(e,r,t,n)},Se=function L(){var e={a:Pe};function r3(e,r){return Se=e.exports,f=Se.E,T(),ne=Se.G,function x(e){F.unshift(e)}(Se.F),function $(e){if(j--,a.monitorRunDependencies&&a.monitorRunDependencies(j),0==j&&O){var r=O;O=null,r()}}(),Se}if(function R(e){j++,a.monitorRunDependencies&&a.monitorRunDependencies(j)}(),a.instantiateWasm)try{return a.instantiateWasm(e,r3)}catch(r){d(`Module.instantiateWasm callback failed with error: ${r}`),n(r)}return function B(e,r,t,n){return e||"function"!=typeof WebAssembly.instantiateStreaming||U(r)||"function"!=typeof fetch?z(r,t,n):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,t).then(n,(function(e){return d(`wasm streaming compile failed: ${e}`),d("falling back to ArrayBuffer instantiation"),z(r,t,n)}))))}(c,D,e,(function t2(e){r3(e.instance)})).catch(n),{}}(),xe=a._free=e=>(xe=a._free=Se.H)(e),Re=a._malloc=e=>(Re=a._malloc=Se.I)(e),lt=e=>(lt=Se.J)(e);a.__embind_initialize_bindings=()=>(a.__embind_initialize_bindings=Se.K)();var De,ft=e=>(ft=Se.L)(e);function dt(){function e2(){De||(De=!0,a.calledRun=!0,b||(function P(){N(F)}(),r(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function S(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)e=a.postRun.shift(),W.unshift(e);var e;N(W)}()))}j>0||(function E(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)e=a.preRun.shift(),C.unshift(e);var e;N(C)}(),j>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),e2()}),1)):e2()))}if(a.dynCall_viji=(e,r,t,n,i)=>(a.dynCall_viji=Se.M)(e,r,t,n,i),a.dynCall_ji=(e,r)=>(a.dynCall_ji=Se.N)(e,r),a.dynCall_viijii=(e,r,t,n,i,o,u)=>(a.dynCall_viijii=Se.O)(e,r,t,n,i,o,u),a.dynCall_iiiiij=(e,r,t,n,i,o,u)=>(a.dynCall_iiiiij=Se.P)(e,r,t,n,i,o,u),a.dynCall_iiiiijj=(e,r,t,n,i,o,u,s,c)=>(a.dynCall_iiiiijj=Se.Q)(e,r,t,n,i,o,u,s,c),a.dynCall_iiiiiijj=(e,r,t,n,i,o,u,s,c,f)=>(a.dynCall_iiiiiijj=Se.R)(e,r,t,n,i,o,u,s,c,f),a.addFunction=(e,r)=>{var t=et(e);if(t)return t;var n=(()=>{if(We.length)return We.pop();try{ne.grow(1)}catch(e){if(!(e instanceof RangeError))throw e;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return ne.length-1})();try{nt(n,e)}catch(i){if(!(i instanceof TypeError))throw i;var a=Kr(e,r);nt(n,a)}return Ae.set(e,n),n},a.UTF8ToString=ar,O=function e2(){De||dt(),De||(O=e2)},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return dt(),e.ready},r.exports=n;const i=e(a.exports),o=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));export{o as l};