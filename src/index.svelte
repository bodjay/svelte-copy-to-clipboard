<script>
  import { onDestroy } from "svelte";

  export let text;
  export let onCopy;
  export let onFail;

  const copy = () => {
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
</script>

<slot {copy} />
