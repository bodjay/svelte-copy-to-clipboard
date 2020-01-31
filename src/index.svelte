<script>
  import { createEventDispatcher } from "svelte";

  export let text;

  const dispatch = createEventDispatcher();

  const onCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => dispatch("copy", text), e => dispatch("fail"));
  };
</script>

<slot {onCopy} />
