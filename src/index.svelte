<script>
  import { onDestroy } from "svelte";

  export let text;
  export let onCopy;
  export let onFail;

  let element;
  let component;

  $: {
    if (component) {
      element = component.firstChild ? component.firstChild : component;

      element.addEventListener("click", handleClick);
    }
  }

  const handleClick = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (onCopy) {
          onCopy();
        }
      },
      e => {
        if (onFail) {
          onFail(e);
        }
      }
    );
  };

  onDestroy(() => {
    element.removeEventListener("click", null);
  });
</script>

<div bind:this={component}>
  <slot />
</div>
