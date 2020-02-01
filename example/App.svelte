<script>
  import CopyToClipboard from "svelte-copy-to-clipboard";

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

  let tryText = "";
</script>

<style>
  main {
    width: 100%;
    max-width: 780px;
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

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .actions .action {
    margin-right: 16px;
    margin-bottom: 8px;
  }

  .example-text {
    color: #525252;
    line-height: 24px;
  }

  .try-input {
    border: 0;
    width: 50%;
    margin: 16px 0;
    padding: 8px 0;
    border-bottom: 1px solid #666;
  }

  .github-buttons {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 780px) {
    .try-input {
      width: 100%;
    }
  }
</style>

<main>
  <div class="title">Svelte Copy to Clipboard</div>
  <p class="description">A flexible copy to clipboard component for Svelte</p>
  <!-- Place this tag where you want the button to render. -->
  <!-- Place this tag where you want the button to render. -->
  <div class="github-buttons">
    <a
      class="github-button"
      href="https://github.com/henriquecaraujo/svelte-copy-to-clipboard"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star henriquecaraujo/svelte-copy-to-clipboard on GitHub">
      Star
    </a>
    <a
      class="github-button"
      href="https://github.com/henriquecaraujo"
      data-size="large"
      data-show-count="true"
      aria-label="Follow @henriquecaraujo on GitHub">
      Follow @henriquecaraujo
    </a>
  </div>
  <hr />
  <h2>Example text for copy</h2>
  <p class="example-text">"{exampleText}"</p>
  <div class="actions">
    <CopyToClipboard
      on:copy={() => alert('successfully copied!')}
      text={exampleText}
      let:copy>
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
  <hr />
  <h3>Try you</h3>
  <input
    type="text"
    class="try-input"
    value={tryText}
    on:change={e => (tryText = e.target.value)}
    placeholder="Type something here then, click in one of actions below" />
  <div class="actions">
    <CopyToClipboard
      on:copy={() => alert('successfully copied!')}
      text={tryText}
      let:copy>
      <div class="action">
        <button id="copy-button" on:click={copy}>
          Click to copy above text to clipboard
        </button>
      </div>
    </CopyToClipboard>
  </div>
</main>
