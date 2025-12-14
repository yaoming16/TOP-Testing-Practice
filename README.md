# TOP-Testing-Practice

A small JavaScript practice repo for The Odin Project, focused on writing unit tests with Jest.

Project lesson: https://www.theodinproject.com/lessons/node-path-javascript-testing-practice

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Install

```fish
npm install
```

## Run tests

```fish
npm run test
```

If you need to clear Jest's cache:

```fish
npx jest --clearCache
```

## Project structure

- `capitalize.js`, `reverseString.js`, `calculator.js`, `analyzeArray.js`, `caesarCipher.js` — implementations
- `*.test.js` — Jest test files

## Caesar cipher notes

- Preserves letter case
- Leaves non-alphabetical characters unchanged (punctuation, spaces)
