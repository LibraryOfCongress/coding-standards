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
* Trailing whitespace is automatically trimmed (this will avoid Git highlighting
  extra whitespace)

Just copy it into your project's root directory and if your editor doesn't have
native support install the plugin: http://editorconfig.org/#download

# Language-Specific Configuration

Each language has a subdirectory which contains a README file with instructions
for the tools and conventions popular in that language. For example, Python
tooling will be built around PEP-8 but Java will reasonably differ.

# General Policies

## Licensing and Third-Party Code

The Library has a long history of using and
[releasing open-source software](https://github.com/LibraryOfCongress)
and usage continues to expand. If you intend to release your project as open
source please see the official release process:

https://staff.loc.gov/sites/webproduction/library-of-congress-web-policies/distribution-of-open-source-software/

All projects — whether internal and open-source — should make it easy to tell
which license(s) apply to their code. The best way to do this is to avoid
committing code which is not owned by the Library and instead using a package
manager to download it as part of the build process. This keeps our repositories
small, affirms that we are not modifying the code in question, and avoids having
to document which third-part code is being redistributed and that we are legally
allowed to do so.

If there is a good reason why this cannot be done, such as an upstream project
which does not cleanly package its code, third-party code should be stored in a
`vendor` or `external` directory in a directory which contains both the code and
a README or LICENSE file providing context and making it clear that the Library
is not claiming ownership of the code in question.
