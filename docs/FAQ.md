# FAQ

## Configuration Conflict

eslint-config-prettier VS eslint-plugin-react

### VSCode VS. EditorConfig

see `// || .editorconfig` or `// overridden .editorconfig` in the [settings.json](../.vscode/settings.json)

#### trim trailing whitespace

- EditorConfig: `trim_trailing_whitespace` ->editor.action.trimTrailingWhitespace
- VSCode: `files.trimTrailingWhitespace`

- `trim_trailing_whitespace = true`
  editor.action.trimTrailingWhitespace

- `trim_trailing_whitespace = false`
- `"files.trimTrailingWhitespace": true`
  The trimTrailingWhitespace workspace or user setting is overriding the EditorConfig setting for this file.

- `trim_trailing_whitespace = false`
- `"files.trimTrailingWhitespace": false`

#### insert final new line

- EditorConfig: `insert_final_newline`
- VSCode: `files.insertFinalNewline`

#### Indent

EditorConfig override VSCode

- EditorConfig: `indent_style`, `indent_size`
- VSCode: `editor.tabSize` `editor.insertSpaces` `editor.detectIndentation`

### Prettier VS. EditorConfig

```jsonc
// Whether or not to take `.editorconfig` into account when parsing configuration.
"prettier.useEditorConfig": true,
```

Detected local configuration (i.e. .prettierrc or .editorconfig), VS Code configuration will not be used

## prettier

- `npx prettier --check */**.*`
- `npx prettier --write */**.*`
- `npx prettier --check "*/**.{js,ts,jsx,tsx,json,css,md,vue}"`

for user setting

```jsonc
// prettier
"prettier.useEditorConfig": true,
"prettier.endOfLine": "lf",
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
```
