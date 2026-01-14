import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), devtoolsJson()],
});
