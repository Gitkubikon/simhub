import{yu as t,yv as i,wc as s,xs as a,wb as r,w8 as l,w5 as o,wP as d,lp as u,wR as g,hD as _,dW as P,c_ as b,bV as w,wg as x,_ as D,wj as L,wk as C,wl as S,wh as A,tf as M,ws as R,xz as T,Q as q,hi as N,O as W,ld as H,x0 as U,r4 as B,t3 as F,t4 as G,cx as $,e as k,wi as X,xI as Y,dx as Q,ee as J,yk as K,xe as Z,N as ee,dt as te,e6 as ie,cy as ne,du as se,yw as ae,iq as re,dY as le,L as oe,dD as ce,dz as he,ql as de,ip as ue,wV as pe,wL as fe,bM as ge,dI as _e,y as Pe,a as me,dH as be,wY as ve,kz as we,yx as xe,yy as Ve,yz as De,t as Ee,m7 as ye,kH as Le,dS as Ce,v5 as Se,dT as Ae,dU as Me,dV as Re,yA as Te,bO as Oe}from"./index-DSIPxOWi.js";import{t as qe}from"./LineVisualElement-EjMrPPob.js";function n$1(o,d){const u=o.fragment;u.include(t),o.include(i),u.uniforms.add(new s("globalAlpha",(t=>t.globalAlpha)),new a("glowColor",(t=>t.glowColor)),new s("glowWidth",((t,i)=>t.glowWidth*i.camera.pixelRatio)),new s("glowFalloff",(t=>t.glowFalloff)),new a("innerColor",(t=>t.innerColor)),new s("innerWidth",((t,i)=>t.innerWidth*i.camera.pixelRatio)),new r("depthMap",((t,i)=>{var s;return null==(s=i.depth)?void 0:s.attachment})),new r("normalMap",(t=>t.normals)),new r("frameColor",((t,i)=>i.mainColor))),u.code.add(l`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),u.code.add(l`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),u.code.add(l`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),u.code.add(l`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),d.contrastControlEnabled?(u.uniforms.add(new s("globalAlphaContrastBoost",(t=>null!=t.globalAlphaContrastBoost?t.globalAlphaContrastBoost:1))),u.code.add(l`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):u.code.add(l`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}function v(t){const i=new o;i.include(n$1,t);const{vertex:a,fragment:r}=i;return a.uniforms.add(new d("modelView",((t,{camera:i})=>u(ze,i.viewMatrix,t.origin))),new d("proj",((t,{camera:i})=>i.projectionMatrix)),new s("glowWidth",((t,{camera:i})=>t.glowWidth*i.pixelRatio)),new g("pixelToNDC",((t,{camera:i})=>_(Ie,2/i.fullViewport[2],2/i.fullViewport[3])))),i.attributes.add(P.START,"vec3"),i.attributes.add(P.END,"vec3"),i.attributes.add(P.UP,"vec3"),i.attributes.add(P.EXTRUDE,"vec2"),i.varyings.add("uv","vec2"),i.varyings.add("vViewStart","vec3"),i.varyings.add("vViewEnd","vec3"),i.varyings.add("vViewPlane","vec4"),a.code.add(l`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),r.uniforms.add(new s("perScreenPixelRatio",((t,i)=>i.camera.perScreenPixelRatio))),r.code.add(l`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewPlane.xyz))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),i}const Ie=b(),ze=w(),je=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));class m extends L{initializeProgram(t){return new C(t.rctx,m.shader.get().build(this.configuration),Ne)}initializePipeline(){return S({blending:A(M.ONE,M.ONE_MINUS_SRC_ALPHA),colorWrite:R})}}m.shader=new x(je,(()=>D((()=>Promise.resolve().then((()=>it))),void 0)));const Ne=new Map([[P.START,0],[P.END,1],[P.UP,2],[P.EXTRUDE,3]]);class h{constructor(t){this._renderCoordsHelper=t,this._buffers=null,this._origin=q(),this._dirty=!1,this._count=0,this._vao=null}set vertices(t){const i=N(3*t.length);let s=0;for(const a of t)i[s++]=a[0],i[s++]=a[1],i[s++]=a[2];this.buffers=[i]}set buffers(t){if(this._buffers=t,this._buffers.length>0){const t=this._buffers[0],i=3*Math.floor(t.length/3/2);W(this._origin,t[i],t[i+1],t[i+2])}else W(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(t){const i=this._ensureVAO(t);null!=i&&(t.bindVAO(i),t.drawArrays(H.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}_ensureVAO(t){return null==this._buffers?null:(null==this._vao&&(this._vao=this._createVAO(t,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(t,i){const s=this._createDataBuffer(i);return this._dirty=!1,new U(t,Ne,{data:B(Ue)},{data:F.createVertex(t,G.STATIC_DRAW,s)})}_ensureVertexData(t,i){var s;if(!this._dirty)return;const a=this._createDataBuffer(i);null==(s=t.vertexBuffers.data)||s.setData(a),this._dirty=!1}_createDataBuffer(t){const i=t.reduce(((t,i)=>t+_$2(i)),0);this._count=i;const s=Ue.createBuffer(i),a=this._origin;let r=0,l=0;for(const o of t){for(let t=0;t<o.length;t+=3){const i=W(He,o[t],o[t+1],o[t+2]);0===t?l=this._renderCoordsHelper.getAltitude(i):this._renderCoordsHelper.setAltitude(i,l);const d=this._renderCoordsHelper.worldUpAtPosition(i,We),u=r+2*t,g=$(He,i,a);if(t<o.length-3){s.up.setVec(u,d),s.up.setVec(u+3,d),s.up.setVec(u+5,d);for(let t=0;t<6;t++)s.start.setVec(u+t,g);s.extrude.setValues(u,0,-1),s.extrude.setValues(u+1,1,-1),s.extrude.setValues(u+2,1,1),s.extrude.setValues(u+3,0,-1),s.extrude.setValues(u+4,1,1),s.extrude.setValues(u+5,0,1)}if(t>0){s.up.setVec(u-2,d),s.up.setVec(u-4,d),s.up.setVec(u-5,d);for(let t=-6;t<0;t++)s.end.setVec(u+t,g)}}r+=_$2(o)}return s.buffer}}function _$2(t){return 2*(t.length/3-1)*3}const We=q(),He=q(),Ue=T().vec3f(P.START).vec3f(P.END).vec3f(P.UP).vec2f(P.EXTRUDE);class e extends Y{constructor(){super(...arguments),this.contrastControlEnabled=!1}}k([X()],e.prototype,"contrastControlEnabled",void 0);const Be=J(6);function j(t){const i=new o;i.include(K),i.include(n$1,t);const r=i.fragment;if(t.lineVerticalPlaneEnabled||t.heightManifoldEnabled)if(r.uniforms.add(new s("maxPixelDistance",((i,s)=>t.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin)))),r.code.add(l`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.spherical){const e3=(t,i,s)=>ne(t,i.heightManifoldTarget,s.camera.viewMatrix),i3=(t,i)=>ne(t,[0,0,0],i.camera.viewMatrix);r.uniforms.add(new Z("heightManifoldOrigin",((t,i)=>(e3(Ge,t,i),i3(Xe,i),$(Xe,Xe,Ge),ee($e,Xe),$e[3]=te(Xe),$e))),new a("globalOrigin",((t,i)=>i3(Ge,i))),new s("cosSphericalAngleThreshold",((t,i)=>1-Math.max(2,ie(i.camera.eye,t.heightManifoldTarget)*i.camera.perRenderPixelRatio)/te(t.heightManifoldTarget)))),r.code.add(l`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else r.code.add(l`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(t.pointDistanceEnabled&&(r.uniforms.add(new s("maxPixelDistance",((t,i)=>2*i.camera.computeScreenPixelSizeAt(t.pointDistanceTarget)))),r.code.add(l`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),t.intersectsLineEnabled&&(r.uniforms.add(new s("perScreenPixelRatio",((t,i)=>i.camera.perScreenPixelRatio))),r.code.add(l`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(t.lineVerticalPlaneEnabled||t.intersectsLineEnabled)&&r.code.add(l`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),r.code.add(l`void main() {
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),t.heightManifoldEnabled){r.uniforms.add(new g("angleCutoff",(t=>V(t))),new Z("heightPlane",((t,i)=>I(t.heightManifoldTarget,t.renderCoordsHelper.worldUpAtPosition(t.heightManifoldTarget,Ge),i.camera.viewMatrix))));const i=t.spherical?l`normalize(globalOrigin - pos)`:l`heightPlane.xyz`;r.code.add(l`
    {
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;

      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i})));

      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return t.pointDistanceEnabled&&(r.uniforms.add(new g("angleCutoff",(t=>V(t))),new Z("pointDistanceSphere",((t,i)=>function y(t,i){return ne(re(Je),t.pointDistanceOrigin,i.camera.viewMatrix),Je[3]=ie(t.pointDistanceOrigin,t.pointDistanceTarget),Je}(t,i)))),r.code.add(l`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),t.lineVerticalPlaneEnabled&&(r.uniforms.add(new g("angleCutoff",(t=>V(t))),new Z("lineVerticalPlane",((t,i)=>function O(t,i){const s=le(t.lineVerticalPlaneSegment,.5,Ge),a=t.renderCoordsHelper.worldUpAtPosition(s,ke),r=ee(Xe,t.lineVerticalPlaneSegment.vector),l=oe(Ge,a,r);return ee(l,l),I(t.lineVerticalPlaneSegment.origin,l,i.camera.viewMatrix)}(t,i))),new a("lineVerticalStart",((t,i)=>function E(t,i){const s=se(Ge,t.lineVerticalPlaneSegment.origin);return t.renderCoordsHelper.setAltitude(s,0),ne(s,s,i.camera.viewMatrix)}(t,i))),new a("lineVerticalEnd",((t,i)=>function z(t,i){const s=ce(Ge,t.lineVerticalPlaneSegment.origin,t.lineVerticalPlaneSegment.vector);return t.renderCoordsHelper.setAltitude(s,0),ne(s,s,i.camera.viewMatrix)}(t,i)))),r.code.add(l`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),t.intersectsLineEnabled&&(r.uniforms.add(new g("angleCutoff",(t=>V(t))),new a("intersectsLineStart",((t,i)=>ne(Ge,t.lineStartWorld,i.camera.viewMatrix))),new a("intersectsLineEnd",((t,i)=>ne(Ge,t.lineEndWorld,i.camera.viewMatrix))),new a("intersectsLineDirection",((t,i)=>(se($e,t.intersectsLineSegment.vector),$e[3]=0,ee(Ge,ae($e,$e,i.camera.viewMatrix))))),new s("intersectsLineRadius",(t=>t.intersectsLineRadius))),r.code.add(l`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),r.code.add(l`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),i}function V(t){return _(Fe,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-J(2))))}function I(t,i,s){return ne(Ye,t,s),se($e,i),$e[3]=0,ae($e,$e,s),he(Ye,$e,Qe)}const Fe=b(),Ge=q(),$e=de(),ke=q(),Xe=q(),Ye=q(),Qe=Q(),Je=ue(),Ke=Object.freeze(Object.defineProperty({__proto__:null,build:j,defaultAngleCutoff:Be},Symbol.toStringTag,{value:"Module"}));class f extends fe{constructor(){super(...arguments),this.innerColor=ge(1,1,1),this.innerWidth=1,this.glowColor=ge(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=J(6),this.pointDistanceOrigin=q(),this.pointDistanceTarget=q(),this.lineVerticalPlaneSegment=_e(),this.intersectsLineSegment=_e(),this.intersectsLineRadius=3,this.heightManifoldTarget=q(),this.lineStartWorld=q(),this.lineEndWorld=q()}}class p extends L{initializeProgram(t){return new C(t.rctx,p.shader.get().build(this.configuration),pe)}initializePipeline(){return S({blending:A(M.ONE,M.ONE_MINUS_SRC_ALPHA),colorWrite:R})}}p.shader=new x(Ke,(()=>D((()=>Promise.resolve().then((()=>nt))),void 0)));class n extends e{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}k([X()],n.prototype,"heightManifoldEnabled",void 0),k([X()],n.prototype,"pointDistanceEnabled",void 0),k([X()],n.prototype,"lineVerticalPlaneEnabled",void 0),k([X()],n.prototype,"intersectsLineEnabled",void 0),k([X()],n.prototype,"spherical",void 0);let Ze=class extends ve{constructor(t){super(t),this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this._passParameters=new f,this.produces=new Map([[we.LASERLINES,()=>!this.contrastControlEnabled],[we.LASERLINES_CONTRAST_CONTROL,()=>this.contrastControlEnabled]])}initialize(){this._passParameters.renderCoordsHelper=this.renderCoordsHelper}consumes(){return xe}get isDecoration(){return this._isDecoration}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(t){this._heightManifoldEnabled!==t&&(this._heightManifoldEnabled=t,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(t){se(this._passParameters.heightManifoldTarget,t),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(t){t!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=t,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(t){se(this._passParameters.pointDistanceTarget,t),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(t){se(this._passParameters.pointDistanceOrigin,t),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(t){t!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=t,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){Ve(t,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(t){t!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=t,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(t){Ve(t,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(t){t!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=t,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){t!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=t,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,null!=this._pathVerticalPlaneData&&this._requestRender())}set pathVerticalPlaneVertices(t){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new h(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=t,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(t){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new h(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=t,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(t){De(this._passParameters,t)&&this._requestRender()}initializeRenderContext(t){this._context=t,this._techniques=t.techniques,this._techniqueConfig=new n;const i=new e;i.contrastControlEnabled=this.contrastControlEnabled,this._pathTechnique=this._techniques.acquire(m,i)}uninitializeRenderContext(){this._technique=Ee(this._technique),this._pathVerticalPlaneData=ye(this._pathVerticalPlaneData),this._pathTechnique=Ee(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this.contrastControlEnabled,this._techniqueConfig.spherical=this.viewingMode===Le.Global,this._technique=this._techniques.releaseAndAcquire(p,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}renderNode(t,i,s){var a;const r=null==(a=null==s?void 0:s.get("normals"))?void 0:a.getTexture();r&&(this._passParameters.normals=r,(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(t,i),this.pathVerticalPlaneEnabled&&this._renderPath(t))}_renderUnified(t,i){const s=t.rctx;this._updatePassParameters(t),s.bindTechnique(i,t.bindParameters,this._passParameters),s.screen.draw()}_renderPath(t){if(null==this._pathVerticalPlaneData||null==this._pathTechnique)return;const i=t.rctx,s=this._pathTechnique;i.bindTechnique(s,t.bindParameters,{...this._passParameters,origin:this._pathVerticalPlaneData.origin}),this._pathVerticalPlaneData.draw(t.rctx)}_updatePassParameters(t){if(!this._intersectsLineEnabled)return;const i=t.bindParameters.camera;if(this._intersectsLineInfinite){if(Ce(Se(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),et),et.c0=-Number.MAX_VALUE,!Ae(i.frustum,et))return;Me(et,this._passParameters.lineStartWorld),Re(et,this._passParameters.lineEndWorld)}else se(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),ce(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}get test(){}};k([Pe({constructOnly:!0})],Ze.prototype,"viewingMode",void 0),k([Pe({constructOnly:!0})],Ze.prototype,"contrastControlEnabled",void 0),k([Pe({constructOnly:!0})],Ze.prototype,"_isDecoration",void 0),k([Pe({constructOnly:!0})],Ze.prototype,"renderCoordsHelper",void 0),Ze=k([me("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],Ze);const et=be();class c extends qe{constructor(t){super(t),this._angleCutoff=Be,this._style={},this._heightManifoldTarget=q(),this._heightManifoldEnabled=!1,this._intersectsLine=_e(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(t)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(t){this._angleCutoff!==t&&(this._angleCutoff=t,this._syncAngleCutoff())}get style(){return this._style}set style(t){this._style=t,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){null!=t?(se(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(t){if(null==t)return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(t,tt);this.intersectsLine=Te(t,i),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){null!=t?(Ve(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){this._intersectsLineInfinite=t,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=null!=t?Ve(t):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(t){this._pathVerticalPlaneBuffers=t,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=null!=t?{origin:Oe(t.origin),target:t.target?Oe(t.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new Ze({renderCoordsHelper:this.view.renderCoordsHelper,contrastControlEnabled:!0,_isDecoration:this.isDecoration,viewingMode:this.view.state.viewingMode}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer))}_syncStyle(){null!=this._renderer&&(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){null!=this._renderer&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const t=this._pointDistanceLine,i=null!=t;this._renderer.pointDistanceEnabled=i&&null!=t.target&&this.visible,i&&(this._renderer.pointDistanceOrigin=t.origin,null!=t.target&&(this._renderer.pointDistanceTarget=t.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const tt=q(),it=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"})),nt=Object.freeze(Object.defineProperty({__proto__:null,build:j,defaultAngleCutoff:Be},Symbol.toStringTag,{value:"Module"}));export{c};
