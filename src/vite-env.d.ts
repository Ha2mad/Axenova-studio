/// <reference types="vite/client" />

declare module 'virtual:verified-apk' {
  const apk: { url: string; sha256: string } | null;
  export default apk;
}
