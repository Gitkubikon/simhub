import{a$ as t,gX as o,az as s}from"./index-DSIPxOWi.js";import{d as i}from"./queryTopFeatures-3UY-886p.js";import"./normalizeUtils-BrH-PrZy.js";import"./normalizeUtilsCommon-BU8xfl77.js";import"./query-C2USZ63O.js";import"./pbfQueryUtils-DUjEbwA9.js";import"./pbf-B53Txr8m.js";async function a(r,e,n){const m=t(r),p=await i(m,o.from(e),{...n}),u=p.data.extent;return!u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:p.data.count,extent:null}:{count:p.data.count,extent:s.fromJSON(u)}}export{a as executeForTopExtents};
