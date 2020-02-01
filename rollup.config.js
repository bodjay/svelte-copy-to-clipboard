import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "example/main.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/bundle.js"
    },
    plugins: [
      svelte({
        dev: !production,
        css: css => {
          css.write("public/build/bundle.css");
        }
      }),
      resolve({
        browser: true,
        dedupe: importee =>
          importee === "svelte" || importee.startsWith("svelte/")
      }),
      commonjs(),
      !production && serve(),
      !production && livereload("public"),
      production && terser()
    ],
    watch: {
      clearScreen: false
    }
  },
  {
    input: "src/index.svelte",
    output: { file: pkg.main, format: "umd", name: "Facebook Login" },
    plugins: [svelte(), resolve(), commonjs()]
  },
  {
    input: "src/index.svelte",
    output: { file: pkg.module, format: "es" },
    external: ["svelte/internal"],
    plugins: [svelte(), commonjs()]
  }
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        });
      }
    }
  };
}
