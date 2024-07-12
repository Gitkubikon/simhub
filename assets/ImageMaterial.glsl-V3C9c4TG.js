import{w5 as e,w6 as t,w7 as s,dW as a,w8 as r,w9 as i,wa as o,wb as n,wc as l,wd as p,we as c,qf as u,wf as d,wg as h,_ as f,wh as w,tf as _,e as m,wi as y,lf as T,wj as O,wk as A,wl as S,wm as x,wn as D,wo as N,wp as R,wq as V,wr as L,ws as F,wt as M,wu as j,wv as z,ww as U,wx as B,wy as G,kz as W,wz as $,wA as k,wB as q,wC as H,wD as Q,wE as J,pU as K,wF as X,wG as Y,lu as Z,wH as ee}from"./index-DSIPxOWi.js";function v(h){const f=new e,{vertex:w,fragment:_}=f;return t(w,h),f.include(s,h),f.attributes.add(a.POSITION,"vec3"),f.attributes.add(a.UV0,"vec2"),h.perspectiveInterpolation&&f.attributes.add(a.PERSPECTIVEDIVIDE,"float"),f.varyings.add("vpos","vec3"),h.multipassEnabled&&f.varyings.add("depth","float"),w.code.add(r`
    void main(void) {
      vpos = position;
      ${h.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${h.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),f.include(i,h),f.include(o,h),_.uniforms.add(new n("tex",(e=>e.texture)),new l("opacity",(e=>e.opacity))),f.varyings.add("vTexCoord","vec2"),h.transparencyPassType===p.ColorAlpha&&(f.outputs.add("fragColor","vec4",0),f.outputs.add("fragAlpha","float",1)),_.include(c),_.code.add(r`
    void main() {
      discardBySlice(vpos);
      ${h.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${r.float(u)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${h.transparencyPassType===p.ColorAlpha?r`
              fragColor = premultiplyAlpha(fragColor);
              fragAlpha = fragColor.a;`:""}
      ${h.output===d.ObjectAndLayerIdColor?r`
              fragColor = vec4(0,0,0,1);`:""}
    }
    `),f}const te=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));class E extends O{initializeProgram(e){return new A(e.rctx,E.shader.get().build(this.configuration),ae)}_setPipelineState(e,t){const s=this.configuration,a=e===p.NONE,r=e===p.FrontFace;return S({blending:s.output===d.Color&&s.transparent?a?se:x(e):null,culling:D(s.cullFace),depthTest:{func:N(e)},depthWrite:a?s.writeDepth?R:null:V(e),drawBuffers:L(e),colorWrite:F,stencilWrite:s.hasOccludees?M:null,stencilTest:s.hasOccludees?t?j:z:null,polygonOffset:a||r?null:U(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}E.shader=new h(te,(()=>f((()=>Promise.resolve().then((()=>ie))),void 0)));const se=w(_.ONE,_.ONE_MINUS_SRC_ALPHA);class C extends B{constructor(){super(...arguments),this.output=d.Color,this.cullFace=T.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}m([y({count:d.COUNT})],C.prototype,"output",void 0),m([y({count:T.COUNT})],C.prototype,"cullFace",void 0),m([y()],C.prototype,"hasSlicePlane",void 0),m([y()],C.prototype,"transparent",void 0),m([y()],C.prototype,"enableOffset",void 0),m([y()],C.prototype,"writeDepth",void 0),m([y()],C.prototype,"hasOccludees",void 0),m([y({count:p.COUNT})],C.prototype,"transparencyPassType",void 0),m([y()],C.prototype,"multipassEnabled",void 0),m([y()],C.prototype,"cullAboveGround",void 0),m([y()],C.prototype,"perspectiveInterpolation",void 0),m([y({constValue:!1})],C.prototype,"occlusionPass",void 0);const ae=new Map([[a.POSITION,0],[a.UV0,2],[a.PERSPECTIVEDIVIDE,3]]);let re=class g extends G{constructor(e){super(e,new P),this.supportsEdges=!0,this.produces=new Map([[W.OPAQUE_MATERIAL,e=>$(e)||k(e)&&!this.parameters.transparent],[W.TRANSPARENT_MATERIAL,e=>k(e)&&this.parameters.transparent&&this.parameters.writeDepth],[W.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>k(e)&&this.parameters.transparent&&!this.parameters.writeDepth],[W.DRAPED_MATERIAL,e=>k(e)||$(e)]]),this._vertexAttributeLocations=ae,this._configuration=new C}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<q,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new I(e)}createBufferWriter(){const e=H.clone();return this.parameters.perspectiveInterpolation&&e.f32(a.PERSPECTIVEDIVIDE),new b(e)}};class I extends Q{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(E,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output===d.Color&&this._updateOccludeeState(e),this._updateParameters(e)}}class b extends J{write(e,t,s,r,i){for(const o of this.vertexBufferLayout.fields.keys()){const n=s.attributes.get(o);if(n)if(o===a.PERSPECTIVEDIVIDE){K(1===n.size);const e=r.getField(o,X);e&&Y(n,e,i)}else Z(o,n,e,t,r,i)}}}class P extends ee{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=T.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ie=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));export{re as g};
