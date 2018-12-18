# Python conventions

-   PEP-8, optionally relaxing the line-length slightly to allow for more
    verbose variable names.

    The [Black][black] code formatter has a good discussion about the merits of
    different approaches:

    > You probably noticed the peculiar default line length. Black defaults to
    > 88 characters per line, which happens to be 10% over 80. This number was
    > found to produce significantly shorter files than sticking with 80 (the
    > most popular), or even 79 (used by the standard library). In general,
    > 90-ish seems like the wise choice.
    >
    > …
    >
    > You can also increase it, but remember that people with sight disabilities
    > find it harder to work with line lengths exceeding 100 characters. It also
    > adversely affects side-by-side diff review on typical screen resolutions.
    > Long lines also make it harder to present code neatly in documentation or
    > talk slides.

    http://black.readthedocs.io/en/latest/the_black_code_style.html#line-length

-   Note that PEP-8 changed the rules regarding line breaks around binary
    operators to match the style which several of our projects had already been
    using, which means that it will soon no longer be necessary to disable
    flake8's W503 warning:

    https://github.com/python/peps/commit/c59c4376ad233a62ca4b3a6060c81368bd21e85b
    https://github.com/PyCQA/pycodestyle/pull/502

## Tools

### Code Style

It is strongly recommended that you use [`isort`][isort] and [`black`][black]
for consistency, and [`flake8`][flake8] to catch a variety of errors:

    pip install flake8 isort black

-   [`flake8`][flake8] audits for a number of style and correctness problems using PyFlakes
    and pycodestyle
-   [`isort`][isort] is used to sort imports into three sections (stdlib, third-party,
    first-party) with names sorted alphabetically and is highly reliable. It
    should be run on every file before committing.
-   [`black`][black] will safely apply consistent formatting to your Python code
    and should be run on every file before committing. Note that while Black
    only runs on Python 3, it can format Python 2 code when it does so.

Since all of these tools honor `.editorconfig` we are avoiding duplicating the
indentation and whitespace settings in the other tools.

Additional configuration for tools should be stored in tool-specific files (e.g.
`.isort.cfg` or `.flake8`) or collected in a top-level `setup.cfg` but not both
to avoid needing to synchronize updates.

For convenience, this repository has examples which follow Black's conventions
for formatting and line-length (88 vs. 80 characters). These are intended as a
starting point for other project-level customization — for example,
[`isort`][isort] can be configured to change the default section for unknown
libraries or to add a known first-part namespace following the PEP-8
recommendations:

    [isort]
    default_section=THIRDPARTY
    known_first_party=my_project_name

### Package Management

To meet our security goals, it is recommended that you enable Pip's
[hash-checking mode][pip hash checking mode]. This can be done using a tool such
as [hashin][hashin] which updates requirements files or a tool such as
[pipenv][pipenv] which includes a superset of that functionality. The important
part is ensuring that version numbers are pinned for repeatable builds and
corrupted packages will be quickly detected.

## Upgrading to Python 3

In codebases which must support Python 2, Python 3 compatibility is anticipated
and in many cases allows running on both. Tools such as [future][future] and
[modernize][modernize] make it easy to ensure same-source compatibility so new
code is ready for Python 3.

The `futurize` utility included with `future` can be used to automatically
convert many codebases. It is highly recommended to follow the staged conversion
process described in the documentation to perform the safest bulk updates first
before making changes which may require more review:

http://python-future.org/futurize.html#forwards-conversion-stage1

### Opt-ing In to the future on Python 2

-   Files begin with `# encoding: utf-8`
-   `from __future__ import absolute_import, division, print_function` is used to
    enable the Python 3 behaviours. `unicode_literals` is not used because
    encoding handling can require more preparation but it is important to use the
    `u` literal prefix for text and `b` for bytes so tools know which will require
    encoding.
-   Use of the newer `io` imports (Python 2.6+) avoids needing conditional imports
    or use of different code paths. For example, instead of conditionally using
    `open(…, encoding="utf-8")` on Python 3 and `codecs.open(…, encoding="utf-8")`
    on Python 2, use `io` for both:

    ```python
    from io import open

    open(filename, encoding='utf-8')
    ```

    See http://python-future.org/compatible_idioms.html#file-io-with-open

[black]: https://pypi.python.org/pypi/black
[flake8]: https://pypi.python.org/pypi/flake8
[future]: https://pypi.python.org/pypi/future
[hashin]: https://pypi.python.org/pypi/hashin
[isort]: https://pypi.python.org/pypi/isort
[modernize]: https://pypi.python.org/pypi/modernize
[pipenv]: https://pypi.python.org/pypi/pipenv
[pip hash checking mode]: https://pip.pypa.io/en/stable/reference/pip_install/#hash-checking-mode
[unify]: https://pypi.python.org/pypi/unify
