# file-tree-generator
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂ActionBtn
 ┃ ┃ ┣ 📂DropDownForm
 ┃ ┃ ┃ ┣ 📜DropDownForm.css.ts
 ┃ ┃ ┃ ┗ 📜DropDownForm.tsx
 ┃ ┃ ┣ 📜ActionBtn.css.ts
 ┃ ┃ ┗ 📜ActionBtn.tsx
 ┃ ┣ 📂BoardList
 ┃ ┃ ┣ 📂SideForm
 ┃ ┃ ┃ ┣ 📜SideForm.css.ts
 ┃ ┃ ┃ ┗ 📜SideForm.tsx
 ┃ ┃ ┣ 📜BoardList.css.ts
 ┃ ┃ ┗ 📜BoardList.tsx
 ┃ ┣ 📂EditModal
 ┃ ┃ ┣ 📜EditModal.css.ts
 ┃ ┃ ┗ 📜EditModal.tsx
 ┃ ┣ 📂List
 ┃ ┃ ┣ 📜List.css.ts
 ┃ ┃ ┗ 📜List.tsx
 ┃ ┣ 📂ListContainer
 ┃ ┃ ┣ 📜ListContainer.css.ts
 ┃ ┃ ┗ 📜ListsContainer.tsx
 ┃ ┣ 📂LoggerModal
 ┃ ┃ ┣ 📂LogItem
 ┃ ┃ ┃ ┣ 📜LogItem.css.ts
 ┃ ┃ ┃ ┗ 📜LogItem.tsx
 ┃ ┃ ┣ 📜LoggerModal.css.ts
 ┃ ┃ ┗ 📜LoggerModal.tsx
 ┃ ┗ 📂Task
 ┃ ┃ ┣ 📜Task.css.ts
 ┃ ┃ ┗ 📜Task.tsx
 ┣ 📂hooks
 ┃ ┗ 📜redux.ts
 ┣ 📂store
 ┃ ┣ 📂reducer
 ┃ ┃ ┗ 📜reducer.ts
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜boardsSlice.ts
 ┃ ┃ ┣ 📜loggerSlice.ts
 ┃ ┃ ┗ 📜modalSlice.ts
 ┃ ┗ 📜index.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📜App.css.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
