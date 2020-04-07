# Front-End Engineering Configuration

## TOC

- **[Authoring Configuration](#authoring-configuration)**
  - [License](#license)
  - [Initiator](#initiator)
  - [Bundler](#bundler)
- **[Building Configuration](#building-configuration)**
  - [Compiler](#compiler)
  - [Bundler](#bundler)
- **[Coding Configuration](#coding-configuration)**
  - [stylelint](#stylelint)
  - [ESLint](#eslint)
- **[Deploying Configuration](#deploying-configuration)**

## Authoring Configuration

> Initializer

### Initialize Git

`$ git init`

- _[.gitattributes][gitattributes]_: [Defining attributes per path][gitattributes]
- _[.gitignore][gitignore]_: [Specifies intentionally untracked files to ignore][gitignore]

### Initialize Editor

#### EditorConfig

_[.editorconfig][editorconfig]_: helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

#### VS Code

- _[.vscode/settings.json][settings.json]_
- _[.vscode/extensions.json][extensions.json]_
- _[.vscode/tasks.json][tasks.json]_
- _[.vscode/launch.json][launch.json]_
- _[jsconfig.json][jsconfig.json]_: define a JS root project

**VS Code && EditorConfig**

- [x] `EditorConfig.EditorConfig` attempts to override user/workspace settings with settings found in .editorconfig files
- [x] `msjsdiag.debugger-for-chrome`
- [x] `esbenp.prettier-vscode`
- [x] `dbaeumer.vscode-eslint`
- [x] `stylelint.vscode-stylelint`
- [x] `csstools.postcss`
- [ ] `CoenraadS.bracket-pair-colorizer-2`
- [ ] `aaron-bond.better-comments`

### Initialize Node

#### nvm (Node)

_[.nvmrc][nvmrc]_ file to make nvm default to the latest LTS version

```sh
$ echo "lts/*" > .nvmrc
```

#### npm

_[.npmrc][npmrc]_: [npm config file][npmrc]

```sh
$ echo "package-lock = false" > .npmrc
```

_[package.json][package.json]_ manage and install packages

```sh
$ npm init -y
```

common configuration options:

- Information Fields: `name` `version` `description` `keywords` `author` `repository` `homepage` `bugs` `license`
- Config/Dependencies Fields: `scripts` `config` `dependencies` `peerDependencies` `optionalDependencies` `bundledDependencies`
- Directory Structure Fields: `main` `bin` `directories`
- Publish Fields: `private` `engines` `os` `cpu`

### Initialize Project

```sh
├── LICENSE
├── README.md
├── jsconfig.json|tsconfig.json # define a JS|TS root project
├── package.json # npm
├── src/ # source code
│   ├── @types/ # TypeScript Declaration Files
│   ├── components/
│   ├── pages/
│   ├── utils/ # entry file
│   ├── routes/ # pages/view
│   ├── styles/
│   ├── i18n/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── index.html
│   └── index.js
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── docs/
│   ├── FAQ.md
│   └── README.md
├── test/ # test case
├── build/
└── config/a
```

## Building Configuration

### Bundler

#### webpack

```sh
# webpack
npm i -D webpack webpack-cli webpack-dev-server webpack-merge

# webapck loaders
## css
npm i -D style-loader css-loader
## image && font
npm i -D file-loader url-loader

# webpack plugins
npm i -D clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin hard-source-webpack-plugin 
```

- _[webpack.config.js][webpack.config.js]_
- _[build/webpack.common.js][webpack.common.js]_
- _[build/webpack.dev.js][webpack.dev.js]_
- _[build/webpack.prod.js][webpack.prod.js]_

**webpack + VS Code** >> `jsconfig.json`

```diff
{
+ "paths": {
+   "@/*": ["src/*"]
+ }
}
```

update `src/index.js`

```diff
- import Example from './components/examples';
- import "./styles/index.css";
+ import Example from '@/components/examples';
+ import "@/styles/index.css";
```

**webpack + npm** >> `package.json`

```json
{
  "scripts": {
    "build": "webpack -p --progress",
    "start": "webpack-dev-server --mode=development --progress"
  }
}
```

update `vscode/tasks.json`

```diff
[
+ {
+   "label": "gacne",
+   "type": "shell",
+   "dependsOn": ["start"],
+   "group": {
+     "kind": "build",
+     "isDefault": true,
+   },
+ },
+ {
+   "type": "npm",
+   "label": "start",
+   "script": "start",
+   "presentation": {
+     "reveal": "always",
+     "panel": "dedicated",
+     "showReuseMessage": false,
+     "group": "start",
+   },
+ },
]
```

#### PostCSS

PostCSS is a tool for transforming styles with JS plugins.

**PostCSS + webpack** >> `webpack.config.js`

```sh
## webpack + PostCSS
npm i -D postcss-loader
```

```diff
{
  test: /\.css$/,
-  use: ['style-loader', 'css-loader'],
+  use: ['style-loader', 'css-loader', 'postcss-loader'],
}
```

**PostCss Plugin**

- _[postcss.config.js][postcss.config.js]_

```sh
## PostCSS Plugins
npm i -D postcss-preset-env precss
```

### Compiler

#### Babel

```sh
# Babel
npm i -D @babel/core
# Polyfills
npm i -S core-js @babel/runtime
# Presets
npm i -D @babel/preset-env @babel/plugin-transform-runtime
# Plugins
npm i -D @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/plugin-proposal-decorators @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-nullish-coalescing-operator
```

- _[babel.config.js][babel.config.js]_: Babel is a JavaScript compiler
- _[.browserslistrc][browserslistrc]_: Browserslist Share target browsers between different front-end tools, like babel-preset-env, Autoprefixer, Stylelint

**Babel + webpack**

```sh
npm i -D babel-loader
```

update [webpack.common.js][webpack.common.js]

```diff
rules: [
  {
+    test: /\.jsx?$/,
+    exclude: /node_modules/,
+    use: 'babel-loader',
  },
]
```

#### TypeScript

```sh
npm i -D typescript
npx tsc --init # > tsconfig.json
```

[tsconfig.json]()

**TypeScript + VS Code**

update [.vscode/setting.json][setting.json]

```json
{
  "eslint.options": { "extensions": [".js", ".ts"] },
  "eslint.validate": [
    { "language": "javascript", "autoFix": true },
    { "language": "typescript", "autoFix": true }
  ]
}
```

**TypeScript + Babel**
npm i -D @babel/preset-typescript

update [babel.config.js][babel.config.js]

```js
{
  ['@babel/preset-typescript'];
}
```

update [tsconfig.json]

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node"
  }
}
```

**TypeScript + ESLint**
\$ npm i -D @typescript-eslint/parser

update [.eslintrc.js][.eslintrc.js]

```js
{
  ('babel-eslint');
}
```

\$ npm i -D @typescript-eslint/eslint-plugin
update [.eslintrc.js][.eslintrc.js]

```js
({
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
});
```

## Coding Configuration

### Linter

#### Prettier

```sh
npm i -D prettier @types/prettier
```

- _[.prettierrc.js][prettierrc.js]_: Prettier is an opinionated code formatter.
- _[.prettierignore][prettierignore]_

**Prettier + VS Code**
Install Prettier for VS Code: `ext install esbenp.prettier-vscode`

update `.vscode/setting.json`

```diff
{
+ "editor.defaultFormatter": "esbenp.prettier-vscode",
+ "prettier.useEditorConfig": true,
}
```

#### stylelint

```sh
# stylelint
npm i -D stylelint @types/stylelint
# stylelint + Prettier >> .stylelintrc.js
## { extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'] }
npm i -D stylelint-config-recommended # turns on possible error rules
npm i -D stylelint-prettier stylelint-config-prettier # turns on stylistic rules
```

- _[.stylelintrc.js][stylelintrc.js]_
- _[.stylelintignore][stylelintignore]_

**postcss + stylelint** >> `postcss.config.js`

```diff
{
  plugins: [
+   require('stylelint')
  ]
}
```

**stylelint + Prettier** >> `.stylelintrc.js`

```diff

```

**stylelint + npm** >> `package.json`

```diff
{
  "scripts": {
+   "stylelint": "stylelint 'src'",
+   "stylelint:fix": "npm run stylelint -- --fix",
  }
}
```

#### ESLint

- _[.eslintrc.js][eslintrc.js]_
- _[.eslintignore][eslintignore]_

```sh
# ESLint
npm i -D eslint @types/eslint
npm i -D babel-eslint
```

**ESLint + Prettier** >> `.eslintrc.js`
npm i -D eslint-plugin-prettier eslint-config-prettier

```diff
{
  extends: [
+    'plugin:prettier/recommended'
  ]
}
```

**ESLint + npm** >> `package.json`

```diff
{
  "scripts": {
+   "eslint": "eslint 'src' --ext .jsx,.js",
+   "eslint:fix": "npm run eslint -- --fix",
+   "fix": "npm run eslint:fix && npm run stylelint:fix",
+   "lint": "npm run eslint && npm run stylelint",
+   "test": "npm run lint"
  }
}
```

**ESLint + webpack** >> `webpack.config.js`

```sh
npm i -D eslint-loader
```

```diff
{
  rules: [
+   {
+     enforce: 'pre',
+     test: /\.[jt]sx?$/,
+     exclude: /node_modules/,
+     loader: 'eslint-loader',
+   }
  ]
}
```

#### Lint

- _[.huskyrc.js][huskyrc.js]_: Husky can prevent bad git commit, git push and more.

```sh
npm i -D husky
```

### FrameWork

#### React

npm i -S react react-dom

**React + TypeScript**

```
{
+  "jsx": "preserve",
}
```

**React + Babel**: npm i -D @babel/preset-react

[babel.config.js][babel.config.js]

```js
{
  ['@babel/preset-react'];
}
```

**React + ESLint**
npm i -D eslint-plugin-react
[.eslintrc.js][.eslintrc.js]

```diff
{
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
+	  ecmaFeatures: { jsx: true },
  },
  settings: {
+	  react: {
+	    version: 'detect',
+	    pragma: 'React',
+	  },
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
+	  'plugin:react/recommended',
  ],
  rules: {
+   'react/prop-types': ['off'],
+   'react/no-find-dom-node': ['off'],
+   'react/jsx-closing-tag-location': ['warn'],
+   'react/display-name': ['off'],
  }
}
```

npm i -D eslint-plugin-react-hooks
[.eslintrc.js][.eslintrc.js]

```js
({
  plugins: ['react-hooks'],
  rules: {
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': ['error'],
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': ['warn'],
  },
});
```

#### Vue

npm i -S Vue
npm i -D vue-template-compiler

**Vue + Babel**
npm i -D vue-loader

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
```

## Deploying Configuration

_[.travis.yml][.travis.yml]_

## End

[nvmrc]: ../.nvmrc
[npmrc]: ../.npmrc
[package.json]: ../package.json
[gitattributes]: ../.gitattributes
[gitignore]: ../.gitignore
[editorconfig]: ../.editorconfig
[settings.json]: ../.vscode/settings.json
[extensions.json]: ../.vscode/extensions.json
[tasks.json]: ../.vscode/tasks.json
[launch.json]: ../.vscode/launch.json
[jsconfig.json]: ../jsconfig.json
[webpack.config.js]: ../webpack.config.js
[webpack.common.js]: ../build/webpack.common.js
[webpack.dev.js]: ../build/webpack.dev.js
[webpack.prod.js]: ../build/webpack.prod.js
[babel.config.js]: ../babel.config.js
[postcss.config.js]: ../postcss.config.js
[prettierrc.js]: ../.prettierrc.js
[prettierignore]: ../.prettierignore
[browserslistrc]: ../.browserslistrc
[stylelintrc.js]: ../.stylelintrc.js
[stylelintignore]: ../.stylelintignore
[eslintrc.js]: ../.eslintrc.js
[eslintignore]: ../.eslintignore
[huskyrc.js]: ../.huskyrc.js
[.travis.yml]: ../.travis.yml
[npmrc-url]: https://docs.npmjs.com/files/npmrc
[gitattributes-url]: https://git-scm.com/docs/gitattributes
[gitignore-url]: https://git-scm.com/docs/gitignore
