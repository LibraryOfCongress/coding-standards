# Code Style Guide

This is a common baseline for coding standards suitable for all LC projects and
is intended to avoid policies where many projects will reasonably disagree based
on different needs and environments.

## Philosophy

### Goals

1. Reduce noise in commits, code-review, etc.
1. Make it easier for unfamiliar developers to participate
1. Provide immediate feedback to avoid extending the development cycle

### Anti-goals

1. Creating second jobs: we will rely on automation rather than asking humans to
   behave like robots
1. Picking sides in industry-wide debates without a strong consensus position

All of the recommendations in this project have been focused on providing a high
benefit-to-argument ratio. When in doubt, the most important guideline is to
follow the spirit of the goals rather than any particular suggestion — for
example, if a particular project uses an open-source framework which has an
existing style guide it is almost certainly better to follow the community
practice where it conflicts with our generic guidance since that will be the
most familiar to developers proficient with that tool.

In the spirit of the first anti-goal we strongly recommend relying on automation
where possible. It matters far less whether you use 2 or 4 spaces to indent if
your editor and other tools consistently follow that setting because the cost of
following it is effectively nil if it happens automatically every time you hit
save.

# How this project is organized

The top-level `.editorconfig` file is [Editor Config](https://editorconfig.org/)
intended to set basic editor defaults which are intended to be suitable for all
projects in all languages:

-   UTF-8 encoding
-   Unix line-termination
-   Spaces for indentation with a tab size of 4
-   Trailing whitespace is automatically trimmed (this will avoid Git
    highlighting extra whitespace and extra merge conflicts)

Just copy it into your project's root directory and, if your editor doesn't have
native support, [check for a plugin](https://editorconfig.org/#download).

Where possible, configure tools to use `.editorconfig` rather than duplicating
configuration in other files to avoid needing to synchronize customizations or
exceptions.

# General Practices

-   We strongly recommend the use of version control hooks and continuous
    integration tests for any change which can be made or tested automatically.
    This repository uses [`pre-commit`](https://pre-commit.com/) to manage Git
    pre-commit hooks for several languages. This makes it simple to setup a new
    copy of the repository by running `pre-commit install` after the first
    checkout to ensure that all subsequent commits will be reformatted and
    validated automatically, and CI tools can use `pre-commit run` to run all of
    the configured hooks during the build process as well.

    There are a number of similar tools which provide equivalent functionality.
    In accordance with the [philosophy](#Philosophy) above, consistency is more
    important than any particular tool: the part which matters most is that it's
    run regularly by everyone on a team with identical results.

# Language-Specific Configuration

Each language has a subdirectory which contains a README file with instructions
for the tools and conventions popular in that language. For example, Python
tooling will assume PEP-8 but Java will reasonably differ — as always, the most
important thing is consistency.

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
`vendor` directory in a directory which contains both the code and a README or
LICENSE file providing context and making it clear that the Library is not
claiming ownership of the code in question.
