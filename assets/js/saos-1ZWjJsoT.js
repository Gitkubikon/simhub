import{S as n,i as e,s as t,e as o,a as s,b as i,g as a,t as c,c as r,d as l,f as u,h as m,o as _,j as d,u as p,k as b,l as v}from"./svelte-C0agbx6q.js";function create_else_block(n){let e,t,a;const r=n[10].default,m=d(r,n,n[9],null);return{c(){e=o("div"),m&&m.c(),s(e,"style",t="animation: "+n[1]+"; "+n[3])},m(n,t){i(n,e,t),m&&m.m(e,null),a=!0},p(n,o){m&&m.p&&(!a||512&o)&&p(m,r,n,n[9],a?v(r,n[9],o,null):b(n[9]),null),(!a||10&o&&t!==(t="animation: "+n[1]+"; "+n[3]))&&s(e,"style",t)},i(n){a||(l(m,n),a=!0)},o(n){c(m,n),a=!1},d(n){n&&u(e),m&&m.d(n)}}}function create_if_block(n){let e,t,a;const r=n[10].default,m=d(r,n,n[9],null);return{c(){e=o("div"),m&&m.c(),s(e,"style",t="animation: "+n[0]+"; "+n[3])},m(n,t){i(n,e,t),m&&m.m(e,null),a=!0},p(n,o){m&&m.p&&(!a||512&o)&&p(m,r,n,n[9],a?v(r,n[9],o,null):b(n[9]),null),(!a||9&o&&t!==(t="animation: "+n[0]+"; "+n[3]))&&s(e,"style",t)},i(n){a||(l(m,n),a=!0)},o(n){c(m,n),a=!1},d(n){n&&u(e),m&&m.d(n)}}}function create_fragment(n){let e,t,m,_;const d=[create_if_block,create_else_block],p=[];function select_block_type(n,e){return n[4]?0:1}return t=select_block_type(n),m=p[t]=d[t](n),{c(){e=o("div"),m.c(),s(e,"id",n[5]),s(e,"style",n[2])},m(n,o){i(n,e,o),p[t].m(e,null),_=!0},p(n,[o]){let i=t;t=select_block_type(n),t===i?p[t].p(n,o):(a(),c(p[i],1,1,(()=>{p[i]=null})),r(),m=p[t],m?m.p(n,o):(m=p[t]=d[t](n),m.c()),l(m,1),m.m(e,null)),(!_||4&o)&&s(e,"style",n[2])},i(n){_||(l(m),_=!0)},o(n){c(m),_=!1},d(n){n&&u(e),p[t].d()}}}function instance(n,e,t){let{$$slots:o={},$$scope:s}=e,{animation:i="none"}=e,{animation_out:a="none; opacity: 0"}=e,{once:c=!1}=e,{top:r=0}=e,{bottom:l=0}=e,{css_observer:u=""}=e,{css_animation:d=""}=e;const p=m();let b=!0;const v=`__saos-${Math.random()}__`;function bounding_verify(n){const e=n.getBoundingClientRect();return t(4,b=e.top+r<window.innerHeight&&e.bottom-l>0),b&&c&&window.removeEventListener("scroll",verify),window.addEventListener("scroll",bounding_verify),()=>window.removeEventListener("scroll",bounding_verify)}return _((()=>{const n=document.getElementById(v);return IntersectionObserver?function intersection_verify(n){const e=new IntersectionObserver((o=>{t(4,b=o[0].isIntersecting),b&&c&&e.unobserve(n)}),{rootMargin:`${-l}px 0px ${-r}px 0px`});return e.observe(n),()=>e.unobserve(n)}(n):bounding_verify(n)})),n.$$set=n=>{"animation"in n&&t(0,i=n.animation),"animation_out"in n&&t(1,a=n.animation_out),"once"in n&&t(6,c=n.once),"top"in n&&t(7,r=n.top),"bottom"in n&&t(8,l=n.bottom),"css_observer"in n&&t(2,u=n.css_observer),"css_animation"in n&&t(3,d=n.css_animation),"$$scope"in n&&t(9,s=n.$$scope)},n.$$.update=()=>{16&n.$$.dirty&&p("update",{observing:b})},[i,a,u,d,b,v,c,r,l,s,o]}class Saos extends n{constructor(n){super(),e(this,n,instance,create_fragment,t,{animation:0,animation_out:1,once:6,top:7,bottom:8,css_observer:2,css_animation:3})}}export{Saos as S};