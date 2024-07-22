declare module 'vite-plugin-static-copy';

declare module '*.glb' {
  const src: string;
  export default src;
}