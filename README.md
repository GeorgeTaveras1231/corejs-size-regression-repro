Corejs Bundle Size Regression Repro
===

## Summary

In this repo, we simulate 3 scenarios and the code to simulate them are each in their respective folders.


| Scenario | Description |
|----------|-------------|
| babel-runtime | Compile JS using standard configuration for babel-runtime. Thus dependencies resolve to `@babel/runtime` package |
| babel-runtime-corejs2 | Compile JS using `corejs: 2` configuration for babel-runtime. Thus dependencies resolve to `@babel/runtime-corejs2` package |
| babel-runtime-corejs3 | Compile JS using `corejs: 3` configuration for babel-runtime. Thus dependencies resolve to `@babel/runtime-corejs3` package |


## Setup

Install dependencies and build assets

```
yarn install
yarn build
```

# Inspect bundle sizes


Run the following commands (after building) to inspect bundle size after minification.
```
ls -lh out/ | grep min
```

Output (Notice corejs 2 and 3 are significantly larger than the standard babel-runtime usage):
```
-rw-r--r--  1 gtaveras  320754065    14K Apr 12 11:23 babel-runtime-corejs2.min.js
-rw-r--r--  1 gtaveras  320754065    22K Apr 12 11:23 babel-runtime-corejs3.min.js
-rw-r--r--  1 gtaveras  320754065   2.0K Apr 12 11:23 babel-runtime.min.js
```