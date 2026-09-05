import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // Relative base works on GitHub project pages and custom domains
  base: "./",
});
