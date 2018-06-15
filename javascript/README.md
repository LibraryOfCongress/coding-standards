# JavaScript Style Guidelines

## Formatting

[Prettier](https://prettier.io) does an admirable job for JavaScript, CSS, and a
number of variants (e.g. JSX, TypeScript, SCSS). The easiest way to start using
Prettier is to follow the [official installation
instructions](https://prettier.io/docs/en/install.html) with a global install
using either NPM or Yarn:

    yarn global add prettier
    npm install --global prettier

(By default, either of those commands will install `/usr/local/bin/prettier` on
a Mac or Linux system)

Once you have it installed, you can reformat JavaScript, CSS, SCSS/LESS, etc.
from the shell using e.g. `yarn run prettier`, `npm run prettier`, or simply
`prettier` if your PATH includes the install directory:

```bash
$ prettier --write /path/to/my.js
my.js 42ms
```

[Many editors](https://prettier.io/docs/en/editors.html) and build tools have
integrated support and it's highly recommended that you enable it as a
format-on-save action in your editor or a Git [`pre-commit`
hook](https://prettier.io/docs/en/precommit.html).

### Prettier Configuration

Pretter honors the top-level `.editorconfig` so the provided
[`.prettierrc`](.prettierrc) sets only two options:

-   Favoring [single quotes](https://prettier.io/docs/en/options.html#quotes)
-   Not adding [spaces around brackets in object literals](https://prettier.io/docs/en/options.html#bracket-spacing)

## Linting

The provided [`.eslintrc.yaml`](.eslintrc.yaml) configures ESLint using the
Prettier plugin for consistency. You can enable this for your projects or
globally using either NPM or yarn:

    npm add --only=dev prettier eslint eslint-plugin-prettier
    yarn add --dev prettier eslint eslint-plugin-prettier

The provided configuration is intentionally limited to the most basic ESLint
recommended defaults. Please consider the long-term maintenance cost of any
changes.

# Dialects

(Something TBD about use of vanilla JS, transpiled modern to ES5/6, etc.)
