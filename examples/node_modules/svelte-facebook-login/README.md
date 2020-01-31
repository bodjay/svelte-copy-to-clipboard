# Svelte Facebook Login

[![npm version](https://badge.fury.io/js/svelte-facebook-login.svg)](https://www.npmjs.com/package/svelte-facebook-login) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-facebook-login/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-facebook-login.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-facebook-login) &bull; [![Dependencies](https://david-dm.org/andrelmlins/svelte-facebook-login.svg)](https://david-dm.org/andrelmlins/svelte-facebook-login) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/bba67805-d9ab-4609-9027-a86842c5b6bb/deploy-status)](https://app.netlify.com/sites/svelte-github-login/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-facebook-login.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-facebook-login/context:javascript)

Facebook Login Component to Svelte

## Installation

```
npm i svelte-facebook-login
// OR
yarn add svelte-facebook-login
```

## Demo [Link](https://svelte-facebook-login.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-facebook-login.git
cd svelte-facebook-login/example
yarn install && yarn start
```

## Examples

```js
<script>
  import SvelteFacebookLogin from "svelte-facebook-login";
</script>

<SvelteFacebookLogin
  clientId="XXX"
  state="1"
  redirectUri="http://localhost:5000/"
  on:success={params => console.log(params)}
  on:error={error => console.log(error)}
  let:onLogin
>
  <button on:click={onLogin}>Facebook Login</button>
</SvelteFacebookLogin>
```

## Properties

Raw component props (before transform):

| Prop        | Type   | Description                                                                 |
| ----------- | ------ | --------------------------------------------------------------------------- |
| clientId    | string | Client ID for Facebook OAuth application                                    |
| state       | string | Value created by the maintenance state between the request and the callback |
|             |
| redirectUri | string | Registered redirect URI for Facebook OAuth application                      |
| success     | string | Call with success                                                           |
| error       | string | Call with error                                                             |
| request     | string | Call with offset                                                            |

## Slot Properties

| Prop    | Type | Description    |
| ------- | ---- | -------------- |
| onLogin | func | Call for login |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-facebook-login.png)](https://nodei.co/npm/svelte-facebook-login/)

## License

Svelte Facebook Login is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-facebook-login/blob/master/LICENSE).
