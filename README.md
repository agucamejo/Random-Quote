# Overview
Random Quote delivers a daily dose of inspiration by providing users with thought-provoking quotes from various authors, thinkers, and leaders. Powered by the <a href="https://github.com/lukePeavey/quotable" target="_blank">QUOTABLE API</a>, this generator offers an endless stream of insightful content to brighten your day.

# Features
- Random Quote Generation: Click the "Generate Quote" button to receive a new quote from the <a href="https://github.com/lukePeavey/quotable" target="_blank">QUOTABLE API</a>.
- Twitter Integration: Share your favorite quotes directly to Twitter with the click of a button.
- Responsive Design: Enjoy a seamless user experience across devices, whether on desktop, tablet, or mobile.

# Credits
This project is part of the Front End Development Libraries course on freeCodeCamp.
Special thanks to the developers behind QUOTABLE API for providing access to a vast database of quotes.

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
