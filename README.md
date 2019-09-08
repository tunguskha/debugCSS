# debugCSS

A tiny script that helps you debug your CSS.


## Installation

#### Via NPM
```cli
npm i --save-dev debug-css
```

#### Via CDN
```html
<script src="https://cdn.jsdelivr.net/gh/tunguskha/debugCSS@latest/src/debugcss.min.js"></script>
```

#### Locally
```cli
git clone https://github.com/tunguskha/debugCSS
```
or
```cli
curl https://git.io/JeeGO -o "debugcss.min.js"
```

## Usage

#### Via module
```js
import { debugCSS } from  'debug-css';

debugCSS({})
```

### Locally or via CDN

```js
debugCSS({});
```

## Options

|Name 	   | Description                        |Required      |Default     | Type      |
|----------|------------------------------------|--------------|------------| ----------|
| selector | Select what you want to debug.     |false         |`"*"`       |`string`   |
| not      | Select what you want to not debug  |false         |*N/A*       |`string`   |


### Example

```js
debugCSS({
  selector: "nav",
  not: ".logo"
});
```