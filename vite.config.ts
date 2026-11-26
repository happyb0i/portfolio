import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { deploymentRunUrl } from "./src/lib/build-info.ts";

export default defineConfig({
  plugins: [react()],
  define: {
    __DEPLOYMENT_RUN_URL__: JSON.stringify(deploymentRunUrl(process.env)),
  },
});
