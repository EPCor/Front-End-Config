# Front-End Engineering Configuration

![Front-End Engineering Configuration][feec]

| Branch Name                | Feature                |       Stage        |
| :------------------------- | :--------------------- | :----------------: |
| [master][b-master]         | Base Configuration     | :white_check_mark: |
| [type][b-type]             | TypeScript             | :white_check_mark: |
| [react][b-react]           | React                  | :white_check_mark: |
| [react app][b-react-app]   | React + Router + Redux | :white_check_mark: |
| [react+type][b-react+type] | React + TypeScript     |   :construction:   |
| [vue][b-vue]               | Vue                    | :white_check_mark: |
| [vue app][b-vue-app]       | Vue + Router + Vuex    | :white_check_mark: |
| [vue+type][b-vue+type]     | Vue + TypeScript       |     :question:     |

## Usage

<a class="btn btn-sm btn-primary ml-2" href="https://github.com/zhilidali/Front-End-Config/generate">Use this template</a> or clone this repository

### Install

**VS Code Extensions**

```json
[
  "EditorConfig.EditorConfig",
  "esbenp.prettier-vscode",
  "dbaeumer.vscode-eslint",
  "csstools.postcss",
  "stylelint.vscode-stylelint"
]
```

**npm Packages**: `$ npm i`

### Run

#### development

- `$ npm run start`
- `Cmd + Shift B`

#### build deploy

`$ npm run build`

### Code Lint

#### Lint with VS Code

**Show VS Code Problems**: `Cmd + Shift + M`

**VS Code**

- Format Document: `Opt + Shift + F`
- Format Selection: `Cmd + K Cmd + F`
- Save without Formatting: `Cmd + K S`
- Quick fix: `Cmd + .`
- Auto fix: `Cmd + Opt + .`

#### Lint with CLI

**Check**

```sh
npm run stylelint
npm run eslint
npm run lint
```

**Fix**

```sh
npm run fix
```

## License

[MIT License](/LICENSE)

[feec]: https://repository-images.githubusercontent.com/253847428/3bfc4100-7930-11ea-8d90-fe63d4fb2054
[b-master]: https://github.com/zhilidali/Front-End-Config
[b-type]: https://github.com/zhilidali/Front-End-Config/tree/type
[b-react]: https://github.com/zhilidali/Front-End-Config/tree/react
[b-react-app]: https://github.com/zhilidali/Front-End-Config/tree/react-app
[b-react+type]: https://github.com/zhilidali/Front-End-Config/tree/react+type
[b-vue]: https://github.com/zhilidali/Front-End-Config/tree/vue
[b-vue-app]: https://github.com/zhilidali/Front-End-Config/tree/vue-app
[b-vue+type]: https://github.com/zhilidali/Front-End-Config/tree/vue+type
