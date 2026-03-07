import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
   base: '/JTPortfolio/', //HAHA for Github Pages to idk 
  plugins: [react(), svgr()],
});
