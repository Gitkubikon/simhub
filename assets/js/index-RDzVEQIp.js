import{S as e,i as t,s as n,m as a,e as s,n as r,p as c,a as i,q as l,b as o,r as d,v as f,w as u,x as m,f as g,y as p,d as h,o as b,z as v,A as $,B as _,C as k,D as x,E as w,t as y,F as I,G as q,H,I as C,J as S}from"./svelte-C0agbx6q.js";import{S as T}from"./saos-1ZWjJsoT.js";function get_each_context$4(e,t,n){const a=e.slice();return a[4]=t[n],a}function create_each_block$4(e){let t,n,a,l,f,m=e[4][0]+"";return{c(){t=s("li"),n=s("a"),a=r(m),f=c(),i(n,"class","nav-link svelte-m94b5x"),i(n,"href",l=e[4][1]),i(t,"class","nav-item svelte-m94b5x")},m(e,s){o(e,t,s),d(t,n),d(n,a),d(t,f)},p(e,t){2&t&&m!==(m=e[4][0]+"")&&u(a,m),2&t&&l!==(l=e[4][1])&&i(n,"href",l)},d(e){e&&g(t)}}}function create_fragment$6(e){let t,n,h,b,v,$,_,k,x,w,y,I,q,H,C,S,T,R,L,j,E,M,P=a(e[1]),A=[];for(let a=0;a<P.length;a+=1)A[a]=create_each_block$4(get_each_context$4(e,P,a));return{c(){t=s("div"),n=s("nav"),h=s("div"),b=s("a"),v=s("span"),$=r(e[0]),_=c(),k=s("button"),k.innerHTML='<i class="fas fa-bars"></i>',x=c(),w=s("div"),y=s("ul");for(let e=0;e<A.length;e+=1)A[e].c();I=c(),q=s("li"),q.innerHTML='<a class="nav-link svelte-m94b5x" href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>',H=c(),C=s("li"),C.innerHTML='<a class="nav-link svelte-m94b5x" href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>',S=c(),T=s("li"),T.innerHTML='<a class="nav-link svelte-m94b5x" href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>',R=c(),L=s("li"),L.innerHTML='<a class="nav-link svelte-m94b5x" href="/profile"><i class="fas fa-user"></i></a>',i(v,"class","text-shadows"),i(v,"data-text",e[0]),i(b,"class","navbar-brand text-primary svelte-m94b5x"),i(b,"href","/"),i(k,"class","navbar-toggler svelte-m94b5x"),i(k,"type","button"),i(k,"aria-label","Toggle navigation"),i(q,"class","nav-item svelte-m94b5x"),i(C,"class","nav-item svelte-m94b5x"),i(T,"class","nav-item svelte-m94b5x"),i(L,"class","nav-item svelte-m94b5x"),i(y,"class","navbar-nav ms-auto mb-2 mb-lg-0"),i(w,"class",j=l("collapse navbar-collapse "+(e[2]?"show":""))+" svelte-m94b5x"),i(w,"id","navbarSupportedContent"),i(h,"class","container-fluid"),i(n,"class","navbar navbar-expand-lg shadow-0 fixed-top px-3 py-3 svelte-m94b5x"),i(t,"class","container")},m(a,s){o(a,t,s),d(t,n),d(n,h),d(h,b),d(b,v),d(v,$),d(h,_),d(h,k),d(h,x),d(h,w),d(w,y);for(let e=0;e<A.length;e+=1)A[e]&&A[e].m(y,null);d(y,I),d(y,q),d(y,H),d(y,C),d(y,S),d(y,T),d(y,R),d(y,L),E||(M=f(k,"click",e[3]),E=!0)},p(e,[t]){if(1&t&&u($,e[0]),1&t&&i(v,"data-text",e[0]),2&t){let n;for(P=a(e[1]),n=0;n<P.length;n+=1){const a=get_each_context$4(e,P,n);A[n]?A[n].p(a,t):(A[n]=create_each_block$4(a),A[n].c(),A[n].m(y,I))}for(;n<A.length;n+=1)A[n].d(1);A.length=P.length}4&t&&j!==(j=l("collapse navbar-collapse "+(e[2]?"show":""))+" svelte-m94b5x")&&i(w,"class",j)},i:m,o:m,d(e){e&&g(t),p(A,e),E=!1,M()}}}function instance$6(e,t,n){let{brand:a}=t,{nav_items:s}=t,r=!1;return e.$$set=e=>{"brand"in e&&n(0,a=e.brand),"nav_items"in e&&n(1,s=e.nav_items)},[a,s,r,function toggleMenu(){n(2,r=!r)}]}!function polyfill(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))processPreload(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&processPreload(e)})).observe(document,{childList:!0,subtree:!0})}function processPreload(e){if(e.ep)return;e.ep=!0;const t=function getFetchOpts(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class Navbar extends e{constructor(e){super(),t(this,e,instance$6,create_fragment$6,n,{brand:0,nav_items:1})}}function create_if_block$3(e){let t,n,a,r,l;return{c(){t=s("h1"),t.textContent="Dein Fahrerlebnis in Ingolstadt",a=c(),r=s("p"),r.textContent="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor.",i(t,"class","main-title svelte-6fi01b"),i(r,"class","subtitle svelte-6fi01b")},m(e,n){o(e,t,n),o(e,a,n),o(e,r,n)},i(e){e&&(n||v((()=>{n=$(t,_,{duration:1e3}),n.start()}))),e&&(l||v((()=>{l=$(r,_,{duration:1e3,delay:500}),l.start()})))},o:m,d(e){e&&(g(t),g(a),g(r))}}}function create_fragment$5(e){let t,n,a,r,l,f=e[0]&&create_if_block$3();return{c(){t=s("section"),n=s("div"),a=s("div"),f&&f.c(),r=c(),l=s("div"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',i(a,"class","container svelte-6fi01b"),i(n,"class","overlay svelte-6fi01b"),i(l,"class","scroll-indicator svelte-6fi01b"),i(t,"id","home"),i(t,"class","home-section svelte-6fi01b")},m(e,s){o(e,t,s),d(t,n),d(n,a),f&&f.m(a,null),d(t,r),d(t,l)},p(e,[t]){e[0]?f?1&t&&h(f,1):(f=create_if_block$3(),f.c(),h(f,1),f.m(a,null)):f&&(f.d(1),f=null)},i(e){h(f)},o:m,d(e){e&&g(t),f&&f.d()}}}function instance$5(e,t,n){let a=!1;return b((()=>{n(0,a=!0)})),[a]}class Header extends e{constructor(e){super(),t(this,e,instance$5,create_fragment$5,n,{})}}function get_each_context$3(e,t,n){const a=e.slice();return a[5]=t[n],a}function create_if_block$2(e){let t,n,l,f,b,k,x,w,y,I,q,H,C,S,T,R,L,j=a(e[3]),E=[];for(let a=0;a<j.length;a+=1)E[a]=create_each_block$3(get_each_context$3(e,j,a));return{c(){t=s("div"),n=s("div"),l=s("div"),f=s("h1"),b=r(e[1]),k=c(),x=s("hr"),w=c(),y=s("p"),I=r(e[2]),H=c(),C=s("div");for(let e=0;e<E.length;e+=1)E[e].c();S=c(),T=s("div"),T.innerHTML='<button class="cta-button svelte-10gpq3r">Book Your Experience</button>',i(f,"class","content-header fw-bold text-primary mb-5 svelte-10gpq3r"),i(x,"class","mb-5"),i(y,"class","description-text svelte-10gpq3r"),i(C,"class","features mt-5 svelte-10gpq3r"),i(T,"class","button-group mt-5 svelte-10gpq3r"),i(l,"class","col-12 mb-3"),i(n,"class","row"),i(t,"class","container text-center transition-container svelte-10gpq3r")},m(e,a){o(e,t,a),d(t,n),d(n,l),d(l,f),d(f,b),d(l,k),d(l,x),d(l,w),d(l,y),d(y,I),d(l,H),d(l,C);for(let t=0;t<E.length;t+=1)E[t]&&E[t].m(C,null);d(l,S),d(l,T)},p(e,t){if(2&t&&u(b,e[1]),4&t&&u(I,e[2]),8&t){let n;for(j=a(e[3]),n=0;n<j.length;n+=1){const a=get_each_context$3(e,j,n);E[n]?(E[n].p(a,t),h(E[n],1)):(E[n]=create_each_block$3(a),E[n].c(),h(E[n],1),E[n].m(C,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=j.length}},i(e){e&&(q||v((()=>{q=$(y,_,{delay:500,duration:1e3}),q.start()})));for(let t=0;t<j.length;t+=1)h(E[t]);e&&(R||v((()=>{R=$(T,_,{delay:1e3,duration:1e3}),R.start()}))),e&&(L||v((()=>{L=$(l,_,{duration:1e3}),L.start()})))},o:m,d(e){e&&g(t),p(E,e)}}}function create_each_block$3(e){let t,n,a,l,f,p,h,b=e[5]+"";return{c(){t=s("div"),n=s("i"),a=c(),l=s("span"),f=r(b),p=c(),i(n,"class","fas fa-check-circle feature-icon svelte-10gpq3r"),i(l,"class","feature-text"),i(t,"class","feature-item svelte-10gpq3r")},m(e,s){o(e,t,s),d(t,n),d(t,a),d(t,l),d(l,f),d(t,p)},p(e,t){8&t&&b!==(b=e[5]+"")&&u(f,b)},i(e){e&&(h||v((()=>{h=$(t,_,{delay:700,duration:1e3}),h.start()})))},o:m,d(e){e&&g(t)}}}function create_fragment$4(e){let t,n=e[4]&&create_if_block$2(e);return{c(){t=s("div"),n&&n.c(),i(t,"class","about-section bg-dark text-light d-flex justify-content-center align-items-center min-vh-100 svelte-10gpq3r"),i(t,"id",e[0])},m(e,a){o(e,t,a),n&&n.m(t,null)},p(e,[a]){e[4]?n?(n.p(e,a),16&a&&h(n,1)):(n=create_if_block$2(e),n.c(),h(n,1),n.m(t,null)):n&&(n.d(1),n=null),1&a&&i(t,"id",e[0])},i(e){h(n)},o:m,d(e){e&&g(t),n&&n.d()}}}function instance$4(e,t,n){let a=!1;b((()=>n(4,a=!0)));let{Id:s}=t,{about_title:r="Welcome to RacingHub!"}=t,{description:c="Experience the thrill of high-speed racing with our state-of-the-art simulators. Whether you're a professional racer or just looking for some fun, RacingHub has something for everyone."}=t,{features:i=["Realistic Racing Simulators","Multiple Tracks and Cars","Professional Coaching","Competitive Tournaments","Corporate Events and Parties"]}=t;return e.$$set=e=>{"Id"in e&&n(0,s=e.Id),"about_title"in e&&n(1,r=e.about_title),"description"in e&&n(2,c=e.description),"features"in e&&n(3,i=e.features)},[s,r,c,i,a]}class About extends e{constructor(e){super(),t(this,e,instance$4,create_fragment$4,n,{Id:0,about_title:1,description:2,features:3})}}function get_each_context$2(e,t,n){const a=e.slice();return a[4]=t[n],a}function create_if_block$1(e){let t,n,l,f,b,_,k,x,w,y=a(e[2]),I=[];for(let a=0;a<y.length;a+=1)I[a]=create_each_block$2(get_each_context$2(e,y,a));return{c(){t=s("div"),n=s("div"),l=s("h1"),f=r(e[1]),_=c(),k=s("hr"),x=c(),w=s("div");for(let e=0;e<I.length;e+=1)I[e].c();i(l,"class","fw-bold text-primary"),i(n,"class","mb-5"),i(k,"class","mb-5"),i(w,"class","flex-container svelte-lal039"),i(t,"class","container text-center")},m(e,a){o(e,t,a),d(t,n),d(n,l),d(l,f),d(t,_),d(t,k),d(t,x),d(t,w);for(let t=0;t<I.length;t+=1)I[t]&&I[t].m(w,null)},p(e,t){if(2&t&&u(f,e[1]),4&t){let n;for(y=a(e[2]),n=0;n<y.length;n+=1){const a=get_each_context$2(e,y,n);I[n]?(I[n].p(a,t),h(I[n],1)):(I[n]=create_each_block$2(a),I[n].c(),h(I[n],1),I[n].m(w,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=y.length}},i(e){e&&(b||v((()=>{b=$(n,H,{duration:1e3}),b.start()})));for(let t=0;t<y.length;t+=1)h(I[t])},o:m,d(e){e&&g(t),p(I,e)}}}function create_each_block$2(e){let t,n,a,l,f,p,h,b,k,x,w,y,I,q,H,S,T=e[4].title+"",R=e[4].description+"";return{c(){t=s("div"),n=s("a"),a=s("div"),l=s("img"),h=c(),b=s("div"),k=s("h5"),x=r(T),w=c(),y=s("p"),I=r(R),H=c(),i(l,"class","card-img-top service-image svelte-lal039"),C(l.src,f=e[4].image)||i(l,"src",f),i(l,"alt",p=e[4].title),i(k,"class","card-title text-primary fw-bold"),i(y,"class","card-text"),i(b,"class","card-body"),i(a,"class","card svelte-lal039"),i(n,"class",""),i(n,"href",q=e[4].link),i(n,"target","_blank"),i(t,"class","service-card svelte-lal039")},m(e,s){o(e,t,s),d(t,n),d(n,a),d(a,l),d(a,h),d(a,b),d(b,k),d(k,x),d(b,w),d(b,y),d(y,I),d(t,H)},p(e,t){4&t&&!C(l.src,f=e[4].image)&&i(l,"src",f),4&t&&p!==(p=e[4].title)&&i(l,"alt",p),4&t&&T!==(T=e[4].title+"")&&u(x,T),4&t&&R!==(R=e[4].description+"")&&u(I,R),4&t&&q!==(q=e[4].link)&&i(n,"href",q)},i(e){e&&(S||v((()=>{S=$(t,_,{delay:500,duration:1500}),S.start()})))},o:m,d(e){e&&g(t)}}}function create_default_slot$1(e){let t,n=e[3]&&create_if_block$1(e);return{c(){n&&n.c(),t=q()},m(e,a){n&&n.m(e,a),o(e,t,a)},p(e,a){e[3]?n?(n.p(e,a),8&a&&h(n,1)):(n=create_if_block$1(e),n.c(),h(n,1),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&g(t),n&&n.d(e)}}}function create_fragment$3(e){let t,n,a;return n=new T({props:{animation:"",$$slots:{default:[create_default_slot$1]},$$scope:{ctx:e}}}),{c(){t=s("div"),k(n.$$.fragment),i(t,"class","d-flex justify-content-center align-items-center min-vh-100"),i(t,"id",e[0]),x(t,"padding-top","58px"),x(t,"background-color","transparent",1)},m(e,s){o(e,t,s),w(n,t,null),a=!0},p(e,[s]){const r={};142&s&&(r.$$scope={dirty:s,ctx:e}),n.$set(r),(!a||1&s)&&i(t,"id",e[0])},i(e){a||(h(n.$$.fragment,e),a=!0)},o(e){y(n.$$.fragment,e),a=!1},d(e){e&&g(t),I(n)}}}function instance$3(e,t,n){let a=!1;b((()=>n(3,a=!0)));let{Id:s}=t,{services_title:r="Our Services"}=t,{services:c=[{title:"Realistic Racing Simulators",description:"Experience the thrill of racing with our state-of-the-art simulators that provide a realistic driving experience.",image:"../assets/background.png",link:"#"},{title:"Multiple Tracks and Cars",description:"Choose from a variety of tracks and cars to race on, providing endless possibilities and challenges.",image:"../assets/background.png",link:"#"},{title:"Professional Coaching",description:"Get tips and training from professional racers to improve your skills and performance.",image:"../assets/background.png",link:"#"},{title:"Competitive Tournaments",description:"Participate in our regular tournaments and compete against others to win exciting prizes.",image:"../assets/background.png",link:"#"},{title:"Corporate Events and Parties",description:"Book our venue for corporate events, team-building activities, and private parties.",image:"../assets/background.png",link:"#"}]}=t;return e.$$set=e=>{"Id"in e&&n(0,s=e.Id),"services_title"in e&&n(1,r=e.services_title),"services"in e&&n(2,c=e.services)},[s,r,c,a]}class Services extends e{constructor(e){super(),t(this,e,instance$3,create_fragment$3,n,{Id:0,services_title:1,services:2})}}function get_each_context$1(e,t,n){const a=e.slice();return a[4]=t[n],a}function create_if_block(e){let t,n,l,f,h,b,k,x,w,y,I,q,C,S,T,R=a(e[2]),L=[];for(let a=0;a<R.length;a+=1)L[a]=create_each_block$1(get_each_context$1(e,R,a));return{c(){t=s("div"),n=s("div"),l=s("h1"),f=r(e[1]),b=c(),k=s("hr"),x=c(),w=s("div"),w.innerHTML='<p class="contact-info svelte-1hqcpaq">Visit us at: <strong>123 Racing Street, Ingolstadt, Germany</strong><br/>\n            Call us: <strong>+49 123 456 789</strong><br/>\n            Email: <strong><a href="mailto:info@racinghub.com" class="contact-email svelte-1hqcpaq">info@racinghub.com</a></strong></p>',I=c(),q=s("div");for(let e=0;e<L.length;e+=1)L[e].c();S=c(),T=s("div"),i(l,"class","fw-bold text-primary"),i(n,"class","text-center mb-3"),i(q,"class","social-media mt-4 svelte-1hqcpaq"),i(T,"class","col-md-12"),i(t,"class","container text-center transition-container svelte-1hqcpaq")},m(e,a){o(e,t,a),d(t,n),d(n,l),d(l,f),d(t,b),d(t,k),d(t,x),d(t,w),d(t,I),d(t,q);for(let t=0;t<L.length;t+=1)L[t]&&L[t].m(q,null);d(t,S),d(t,T)},p(e,t){if(2&t&&u(f,e[1]),4&t){let n;for(R=a(e[2]),n=0;n<R.length;n+=1){const a=get_each_context$1(e,R,n);L[n]?L[n].p(a,t):(L[n]=create_each_block$1(a),L[n].c(),L[n].m(q,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=R.length}},i(e){e&&(h||v((()=>{h=$(n,H,{duration:1e3}),h.start()}))),e&&(y||v((()=>{y=$(w,_,{delay:500,duration:1e3}),y.start()}))),e&&(C||v((()=>{C=$(q,_,{delay:700,duration:1e3}),C.start()})))},o:m,d(e){e&&g(t),p(L,e)}}}function create_each_block$1(e){let t,n,a,r,l,f;return{c(){t=s("a"),n=s("i"),r=c(),i(n,"class",a="h3 "+e[4][1]+" svelte-1hqcpaq"),i(t,"class","btn shadow-sm mx-1 social-icon svelte-1hqcpaq"),i(t,"href",l=e[4][2]),i(t,"target","_blank"),i(t,"rel","noopener noreferrer"),i(t,"aria-label",f=e[4][0])},m(e,a){o(e,t,a),d(t,n),d(t,r)},p(e,s){4&s&&a!==(a="h3 "+e[4][1]+" svelte-1hqcpaq")&&i(n,"class",a),4&s&&l!==(l=e[4][2])&&i(t,"href",l),4&s&&f!==(f=e[4][0])&&i(t,"aria-label",f)},d(e){e&&g(t)}}}function create_default_slot(e){let t,n=e[3]&&create_if_block(e);return{c(){n&&n.c(),t=q()},m(e,a){n&&n.m(e,a),o(e,t,a)},p(e,a){e[3]?n?(n.p(e,a),8&a&&h(n,1)):(n=create_if_block(e),n.c(),h(n,1),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&g(t),n&&n.d(e)}}}function create_fragment$2(e){let t,n,a;return n=new T({props:{animation:"",$$slots:{default:[create_default_slot]},$$scope:{ctx:e}}}),{c(){t=s("div"),k(n.$$.fragment),i(t,"class","d-flex justify-content-center align-items-center min-vh-100 flex-column"),i(t,"id",e[0]),x(t,"padding-top","58px"),x(t,"background-color","transparent",1)},m(e,s){o(e,t,s),w(n,t,null),a=!0},p(e,[s]){const r={};142&s&&(r.$$scope={dirty:s,ctx:e}),n.$set(r),(!a||1&s)&&i(t,"id",e[0])},i(e){a||(h(n.$$.fragment,e),a=!0)},o(e){y(n.$$.fragment,e),a=!1},d(e){e&&g(t),I(n)}}}function instance$2(e,t,n){let a=!1;b((()=>n(3,a=!0)));let{Id:s}=t,{contact_title:r="Get in Touch with RacingHub!"}=t,{social:c=[["Facebook","fab fa-facebook-f","https://www.facebook.com/RacingHub"],["Twitter","fab fa-twitter","https://twitter.com/RacingHub"],["Instagram","fab fa-instagram","https://instagram.com/RacingHub"],["LinkedIn","fab fa-linkedin-in","https://www.linkedin.com/company/RacingHub"]]}=t;return e.$$set=e=>{"Id"in e&&n(0,s=e.Id),"contact_title"in e&&n(1,r=e.contact_title),"social"in e&&n(2,c=e.social)},[s,r,c,a]}class Contact extends e{constructor(e){super(),t(this,e,instance$2,create_fragment$2,n,{Id:0,contact_title:1,social:2})}}function get_each_context(e,t,n){const a=e.slice();return a[3]=t[n],a}function create_each_block(e){let t,n,a,l,m,p,h,b,v=e[3].name+"";function click_handler(){return e[2](e[3])}return{c(){t=s("li"),n=s("span"),a=r(v),l=c(),m=s("span"),p=c(),i(n,"class","section-name svelte-1ojti3i"),i(m,"class","indicator svelte-1ojti3i"),i(t,"class","svelte-1ojti3i"),S(t,"selected",e[3].id===e[1]),S(t,"hovered",e[3].id!==e[1])},m(e,s){o(e,t,s),d(t,n),d(n,a),d(t,l),d(t,m),d(t,p),h||(b=f(t,"click",click_handler),h=!0)},p(n,s){e=n,1&s&&v!==(v=e[3].name+"")&&u(a,v),3&s&&S(t,"selected",e[3].id===e[1]),3&s&&S(t,"hovered",e[3].id!==e[1])},d(e){e&&g(t),h=!1,b()}}}function create_fragment$1(e){let t,n,r=a(e[0]),c=[];for(let a=0;a<r.length;a+=1)c[a]=create_each_block(get_each_context(e,r,a));return{c(){t=s("aside"),n=s("ul");for(let e=0;e<c.length;e+=1)c[e].c();i(n,"class","svelte-1ojti3i"),i(t,"class","sidebar svelte-1ojti3i")},m(e,a){o(e,t,a),d(t,n);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(n,null)},p(e,[t]){if(3&t){let s;for(r=a(e[0]),s=0;s<r.length;s+=1){const a=get_each_context(e,r,s);c[s]?c[s].p(a,t):(c[s]=create_each_block(a),c[s].c(),c[s].m(n,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=r.length}},i:m,o:m,d(e){e&&g(t),p(c,e)}}}function instance$1(e,t,n){let{sections:a=[]}=t,{activeSection:s=""}=t;return e.$$set=e=>{"sections"in e&&n(0,a=e.sections),"activeSection"in e&&n(1,s=e.activeSection)},[a,s,e=>function handleClick(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}(e.id)]}class Sidebar extends e{constructor(e){super(),t(this,e,instance$1,create_fragment$1,n,{sections:0,activeSection:1})}}function create_fragment(e){let t,n,a,r,l,f,u,m,p,b,v,$,_,x,q,H;return a=new Navbar({props:{brand:R,nav_items:e[1]}}),l=new Sidebar({props:{sections:e[2],activeSection:e[0]}}),u=new Header({}),p=new About({props:{Id:"about"}}),v=new Services({props:{Id:"services"}}),_=new Contact({props:{Id:"contact",contact_title:L,social:e[3]}}),{c(){t=s("main"),n=s("div"),k(a.$$.fragment),r=c(),k(l.$$.fragment),f=c(),k(u.$$.fragment),m=c(),k(p.$$.fragment),b=c(),k(v.$$.fragment),$=c(),k(_.$$.fragment),x=c(),q=s("button"),q.textContent="Jetzt Termin buchen",i(n,"class","bg-pattern"),i(q,"class","cta-button svelte-1cu4yr4"),i(t,"class","min-vh-100")},m(e,s){o(e,t,s),d(t,n),w(a,n,null),d(n,r),w(l,n,null),d(n,f),w(u,n,null),d(n,m),w(p,n,null),d(n,b),w(v,n,null),d(n,$),w(_,n,null),d(t,x),d(t,q),H=!0},p(e,[t]){const n={};1&t&&(n.activeSection=e[0]),l.$set(n)},i(e){H||(h(a.$$.fragment,e),h(l.$$.fragment,e),h(u.$$.fragment,e),h(p.$$.fragment,e),h(v.$$.fragment,e),h(_.$$.fragment,e),H=!0)},o(e){y(a.$$.fragment,e),y(l.$$.fragment,e),y(u.$$.fragment,e),y(p.$$.fragment,e),y(v.$$.fragment,e),y(_.$$.fragment,e),H=!1},d(e){e&&g(t),I(a),I(l),I(u),I(p),I(v),I(_)}}}let R="Racing Hub",L="Get in Touch with RacingHub!";function instance(e,t,n){let a=[{id:"home",name:"Home"},{id:"about",name:"About"},{id:"services",name:"Services"},{id:"contact",name:"Contact"}],s="home";return b((()=>{const e=a.map((e=>document.getElementById(e.id))),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&n(0,s=e.target.id)}))}),{threshold:.5});e.forEach((e=>t.observe(e)))})),[s,[["Home","#"],["About","#about"],["Services","#services"],["Contact","#contact"]],a,[["Facebook","fab fa-facebook-f","https://www.facebook.com/RacingHub"],["Twitter","fab fa-twitter","https://twitter.com/RacingHub"],["Instagram","fab fa-instagram","https://instagram.com/RacingHub"],["LinkedIn","fab fa-linkedin-in","https://www.linkedin.com/senary"]]]}new class App extends e{constructor(e){super(),t(this,e,instance,create_fragment,n,{})}}({target:document.body});