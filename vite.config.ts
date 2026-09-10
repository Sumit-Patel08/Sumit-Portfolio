// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

/**
 * firebase-admin reaches Firestore through google-gax, which is CommonJS and
 * reads `__dirname` at module scope. Bundling it into an ES module drops that
 * binding, so the first Firestore call dies with "__dirname is not defined in
 * ES module scope" — only in the built server, never in dev. Re-declare the two
 * CommonJS path globals in whichever server chunks still expect them.
 */
function cjsPathGlobalsShim(): Plugin {
  return {
    name: "cjs-path-globals-shim",
    apply: "build",
    enforce: "post",
    applyToEnvironment: (environment) => environment.name !== "client",
    renderChunk(code) {
      const lines: string[] = [];
      const declares = (name: string) =>
        new RegExp(`(?:const|let|var|function)\s+${name}\b`).test(code);

      const needsFilename = /\b__filename\b/.test(code) && !declares("__filename");
      const needsDirname = /\b__dirname\b/.test(code) && !declares("__dirname");
      if (!needsFilename && !needsDirname) return null;

      lines.push('import { fileURLToPath as __cjsFileURLToPath } from "node:url";');
      lines.push('import { dirname as __cjsDirname } from "node:path";');
      if (needsFilename) {
        lines.push("const __filename = __cjsFileURLToPath(import.meta.url);");
      }
      if (needsDirname) {
        lines.push("const __dirname = __cjsDirname(__cjsFileURLToPath(import.meta.url));");
      }
      return { code: `${lines.join("\n")}\n${code}`, map: null };
    },
  };
}

export default defineConfig({
  plugins: [cjsPathGlobalsShim()],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
