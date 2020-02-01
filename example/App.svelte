<script>
  import CopyToClipboard from "../src/index.svelte";

  let exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et libero in
    metus blandit malesuada vitae in dolor. Praesent mattis neque sapien, ut
    aliquet eros maximus nec. Cras feugiat lectus non elit scelerisque
    dignissim. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Pellentesque tincidunt ante ac neque
    ornare volutpat. Maecenas vel facilisis nunc. Nunc suscipit egestas orci id
    finibus. Suspendisse vitae lectus mattis, congue quam at, molestie nisl. Ut
    ut ultricies ligula. Proin volutpat, nisi id ullamcorper venenatis, nisl
    felis lobortis dolor, id mollis nunc tortor eget metus. Nulla mollis
    hendrerit lacinia. Nunc bibendum, quam non tincidunt lacinia, leo ex luctus
    orci, consectetur auctor ligula neque in ipsum. Duis faucibus lectus quis
    leo imperdiet sagittis. Quisque id vehicula mauris.`;
</script>

<style>
  main {
    width: 780px;
    height: 100%;
  }
  .title {
    font-size: 52px;
  }

  .description {
    color: #666;
  }

  a {
    text-decoration: none;
  }

  .copy-link {
    font-size: 14px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .actions .action {
    margin-right: 16px;
  }

  .example-text {
    color: #525252;
    line-height: 24px;
  }
</style>

<main>
  <div class="title">Svelte Copy to Clipboard</div>
  <p class="description">A flexible copy to clipboard component for Svelte</p>
  <hr />
  <h2>Example text for copy</h2>
  <p class="example-text">"{exampleText}"</p>
  <hr />
  <div class="actions">
    <CopyToClipboard text={exampleText} let:copy>
      <div class="action">
        <a id="copy-anchor" href="#copy" on:click={copy}>
          Click to copy above text to clipboard
        </a>

      </div>

      <div class="action">

        <button id="copy-button" on:click={copy}>
          Click to copy above text to clipboard
        </button>
      </div>
    </CopyToClipboard>
  </div>
</main>
