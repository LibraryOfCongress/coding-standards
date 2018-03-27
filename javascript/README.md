# JavaScript Style Guidelines

## Formatting & Linting

[Prettier](https://prettier.io) does an admirable job for JavaScript, CSS, and a
number of variants (e.g. JSX, TypeScript, SCSS). [Many editors](https://prettier.io/docs/en/editors.html)
and build tools have integrated support and it's highly recommended that you
enable it as a format-on-save action in your editor or a Git
[`pre-commit` hook](https://prettier.io/docs/en/precommit.html).

It honors the main editor configuration so the provided
[`.prettierrc`](.prettierrc) sets only two options:

* Favoring [single quotes](https://prettier.io/docs/en/options.html#quotes)
* Not adding [spaces around brackets in object literals](https://prettier.io/docs/en/options.html#bracket-spacing)

## Dialects

(Something TBD about use of vanilla JS, transpiled modern to ES5/6, etc.)
