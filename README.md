# Overview
Randy Quote/Advice delivers a daily dose of inspiration by providing users with thought-provoking Quote/Advices from various authors, thinkers, and leaders. Powered by the <a href="https://api.adviceslip.com/" target="_blank">Advice Slip API</a>, this generator offers an endless stream of insightful content to brighten your day.

# Features
- Randy Quote/Advice Generation: Click the "Change Quote" button to receive a new Quote/Advice from the <a href="https://api.adviceslip.com/" target="_blank">Advice Slip API</a>.
- Twitter Integration: Share your favorite Quote/Advices directly to Twitter with the click of a button.
- Responsive Design: Enjoy a seamless user experience across devices, whether on desktop, tablet, or mobile.

# Credits
This project is part of the Front End Development Libraries course on freeCodeCamp.
Special thanks to the developers behind Advice Slip API for providing access to a vast database of Quote/Advices.

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

# License
This project is licensed under the MIT License.
