# Svelte Copy to Clipboard

A flexible copy to clipboard component for Svelte

## Installation

```
npm i svelte-copy-to-clipboard
// OR
yarn add svelte-copy-to-clipboard
```

## Demo [Link](https://svelte-copy-to-clipboard.netlify.com/)

Local demo:

```
git clone https://github.com/henriquecaraujo/svelte-copy-to-clipboard.git
cd svelte-copy-to-clipboard/example
yarn && yarn start
```

## Examples

```js
<script>
  import CopyToClipboard from "svelte-copy-to-clipboard";
  let exampleText = 'Copy me!';

  const handleSuccessfullyCopied = () => {
      alert('successfully copied to clipboard!');
  }

  const handleFailedCopy = () => {
      alert('failed to copy :(');
  }
</script>

<CopyToClipboard text={exampleText} onCopy={handleSuccessfullyCopied} onFail={handleFailedCopy}>
    <button>An element to trigger the copy</button>
</CopyToClipboard>
```

## Properties

Component props:

| Prop   | Type   | Description             |
| ------ | ------ | ----------------------- |
| text   | string | Value to copy           |
| onCopy | func   | Call when text's copied |
| onFail | func   | Call when copy fails    |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-copy-to-clipboard.png)](https://nodei.co/npm/svelte-copy-to-clipboard/)

## License

Svelte Infinite Scroll is open source software [licensed as MIT](https://github.com/henriquecaraujo/svelte-copy-to-clipboard/blob/master/LICENSE).
