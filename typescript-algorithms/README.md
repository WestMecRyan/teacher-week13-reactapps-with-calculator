Steps to build Typescript algorithms
mkdir typescript-algorithms
cd typescript-algorithms
npm init -y
npm install --save-dev typescript ts-node
npx tsc --init
npm install --save-dev @types/node

run programs with
npx ts-node
{
  "compilerOptions": {
    /* Base configuration for Node.js scripts */
    "module": "commonjs",
    "target": "es2020",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Definitions (Requires npm install -D @types/node) */
    "lib": ["es2020"],
    "types": ["node"],

    /* Other Outputs (Often not needed for algorithms, but harmless) */
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    /* Stricter Typechecking Options */
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    /* Recommended Options */
    "strict": true,
    "skipLibCheck": true,

    /* Modern/Strict Options to Disable for Simple Scripts */
    // "jsx": "react-jsx",
    // "verbatimModuleSyntax": true,
    // "isolatedModules": true,
    // "noUncheckedSideEffectImports": true,
    // "moduleDetection": "force",
  }
}
Original Setting	Recommended Change	Reason
"module": "nodenext"	"module": "commonjs"	Simplifies Execution: ts-node works best by default with CommonJS for simple scripts, avoiding complex ES Module setup (like adding "type": "module" to package.json and dealing with .js vs. .ts imports).
"target": "esnext"	"target": "es2020"	Clarity/Stability: While esnext is fine, es2020 (or a recent year) is a specific, stable target that ensures modern features are available while avoiding potential bleeding-edge issues.
"verbatimModuleSyntax": true	Remove or comment out	Avoids Errors: This feature is excellent for library developers but will often require you to specify file extensions on all local imports (e.g., import { a } from './b.js') which is tedious for small algorithm files.
"isolatedModules": true	Remove or comment out	Avoids Errors with ts-node: This can sometimes cause issues when running single files, especially if you have an empty file that only exports a type. Since you're not bundling, it's safer to disable it.
"types": []	Uncomment the relevant lines: "types": ["node"]	Enables Global Types: You need the Node.js types (@types/node) for global objects like console and Buffer. You must run npm install --save-dev @types/node in your terminal.