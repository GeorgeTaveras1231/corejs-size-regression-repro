mkdir -p out
babel babel-runtime-corejs3/input.js --out-file out/babel-runtime-corejs3.lib.js
babel babel-runtime-corejs2/input.js --out-file out/babel-runtime-corejs2.lib.js
babel babel-runtime/input.js --out-file out/babel-runtime.lib.js
webpack
