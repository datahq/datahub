[![Build Status](https://travis-ci.org/datahq/datahub.svg?branch=master)](https://travis-ci.org/datahq/datahub)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Issues](https://img.shields.io/badge/issue-tracker-orange.svg)](https://github.com/datahq/datahub/issues)

APIs for interacting with DataHub.

# For developers

*You need to have Node.js version >7.6*

## Install

```
$ npm install
```

## Running tests

We use Ava for our tests. For running tests use:

```
$ [sudo] npm test
```

To run tests in watch mode:

```
$ [sudo] npm run watch:test
```

## Lint

We use XO for checking our code for JS standard/convention/style:

```bash
# When you run tests, it first runs lint:
$ npm test

# To run lint separately:
$ npm run lint # shows errors only

# Fixing erros automatically:
$ xo --fix
```
