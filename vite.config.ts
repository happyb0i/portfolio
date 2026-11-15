import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { getBuildInfo } from "./src/lib/build-info.ts";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    __BUILD_INFO__: JSON.stringify(
      getBuildInfo({
        PORTFOLIO_REPOSITORY: "happyb0i/portfolio",
        ...loadEnv(mode, process.cwd(), "PORTFOLIO_"),
        ...process.env,
      }),
    ),
  },
}));
