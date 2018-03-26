# Coding Standards

This is a common baseline for coding standards suitable for all LC projects and
is intended to avoid opinionated issus where various projects will reasonably
disagree. Only standards which can be enforced or applied by tools are included
— policies which require human judgement are out of scope for this project.

The top-level `.editorconfig` file is [Editor Config](http://editorconfig.org/)
intended to set basic editor defaults which are intended to be suitable for all
projects in all languages:

* UTF-8 encoding
* Unix line-termination
* Spaces for indentation with a tab size of 4
* Trailing whitespace is automatically trimmed (this will avoid Git highlighting extra whitespace)

Just copy it into your project's root directory and if your editor doesn't have
native support install the plugin: http://editorconfig.org/#download

## Language-Specific Configuration

Each language has a subdirectory which contains a README file with instructions
for the tools and conventions popular in that language. For example, Python
tooling will be built around PEP-8 but Java will reasonably differ.
