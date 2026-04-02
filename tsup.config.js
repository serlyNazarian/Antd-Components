import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.js"],
  format: ["cjs", "esm"],
  clean: true,
  external: ["react", "antd"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
