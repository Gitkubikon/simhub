import{M as i,c,n as m,b9 as f,ba as h}from"./index-Cev3ONi_.js";async function u(t,r,s){const e=t.layer;if(i(e)){const n=await e.fetchTile(r[0],r[1],r[2],s);if(c(s))throw m.getLogger(t).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."),f();return n}let o=t.getTileUrl(r);h(e)&&e.refreshTimestamp&&(o+=`${o.includes("?")?"&":"?"}_ts=${e.refreshTimestamp}`);const a=t.hasMixedImageFormats?"image+type":"image";return s.requester.request(o,a,s)}export{u as i};
