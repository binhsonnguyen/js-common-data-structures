
### Type checking and transpiling

Using Babel’s preset-typescript to generate JS files,
and then using TypeScript to do type checking and .d.ts file generation.

```
// packages.json
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/preset-typescript": "^7.24.7",
```

```tsconfig.json
  "compilerOptions": {
    ...,
    // Ensure that .d.ts files are created by tsc
    "declaration": true,
    // not generate .js files
    "emitDeclarationOnly": true,
    // Ensure that Babel can safely transpile files in the TypeScript project
    "isolatedModules": true,
  },
```