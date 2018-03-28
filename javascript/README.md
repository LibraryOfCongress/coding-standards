# JavaScript Style Guidelines

## Formatting

[Prettier](https://prettier.io) does an admirable job for JavaScript, CSS, and a number of variants (e.g. JSX, TypeScript, SCSS). The easiest way to start using Prettier is to follow the [official installation instructions](https://prettier.io/docs/en/install.html) with a global install using either NPM or Yarn:

    yarn global add prettier
    npm install --global prettier

(By default, either of those commands will install `/usr/local/bin/prettier` on a Mac or Linux system)

Once you have it installed, you can reformat JavaScript, CSS, SCSS/LESS, etc. from the shell:

```bash
$ prettier --write /path/to/my.js
my.js 42ms
```

[Many editors](https://prettier.io/docs/en/editors.html) and build tools have integrated support and it's highly recommended that you enable it as a format-on-save action in your editor or a Git [`pre-commit` hook](https://prettier.io/docs/en/precommit.html).

### Prettier Configuration

Pretter honors the top-level `.editorconfig` so the provided [`.prettierrc`](.prettierrc) sets only two options:

* Favoring [single quotes](https://prettier.io/docs/en/options.html#quotes)
* Not adding [spaces around brackets in object literals](https://prettier.io/docs/en/options.html#bracket-spacing)

# Dialects

(Something TBD about use of vanilla JS, transpiled modern to ES5/6, etc.)
