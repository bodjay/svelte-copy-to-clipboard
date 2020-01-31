<script>
  import CopyToClipboard from "svelte-copy-to-clipboard";

  let exampleText = "";
</script>

<style>
  main {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>

<main>
  <h1>Svelte Copy to Clipboard</h1>
  <div class="input-form">
    <input
      id="exampleText"
      type="text"
      value={exampleText}
      placeholder="Redirect URI"
      on:change={e => (exampleText = e.target.value)} />
    <br />
    <CopyToClipboard text={exampleText} let:copy>
      <button on:click={copy}>Click to copy to clipboard</button>
    </CopyToClipboard>
  </div>
  <textarea placeholder="Paste your awesome text here" />
</main>
