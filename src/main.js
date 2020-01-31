import App from "./index.svelte";

const app = new App({
  target: document.body,
  props: {
    text: "world"
  }
});

export default app;
