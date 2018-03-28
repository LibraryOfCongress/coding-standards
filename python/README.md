# Python conventions

* PEP-8 with the following customizations:
    * Max line length 110 to avoid penalizing explanatory variable names

## Tools

It is strongly recommended that you use `isort` and some combination of `flake8`
and `autopep8` for consistency:

    pip install flake8 isort autopep8

* `flake8`: audits for a number of style and correctness problems using PyFlakes
  and pycodestyle
* `isort` is used to sort imports into three sections (stdlib, third-party,
  first-party) with names sorted alphabetically and is highly reliable. It
  should be run on every file before commiting it.
* `autopep8` is used to apply many PEP-8 changes automatically. Since some
  changes may have multiple acceptable options human review is recommended.

We are intentionally leaving both with their default configuration —
`.editorconfig` will be honored for indentation and whitespace — but if your
project has local deviations from PEP-8 you can create a top-level `setup.cfg`
file with local configuration. For example, if you wanted to relax the maximum
line length requirement this value would affect both `flake8`'s reports and
`autopep8`'s formatting:

    [pycodestyle]
    max-line-length=110

Similarly, `isort` can also be configured using `setup.cfg` — in this example,
to change the default section for unknown libraries or to add a known first-part
namespace:

    [isort]
    default_section=THIRDPARTY
    known_first_party=my_project_name

## Upgrading to Python 3

In codebases which must support Python 2, Python 3 compatibility is anticipated
and in many cases allows running on both. Tools such as
[future](https://pypi.python.org/pypi/future) and
[modernize](https://pypi.python.org/pypi/modernize) make it easy to ensure
same-source compatibility so new code is ready for Python 3.

The `futurize` utility included with `future` can be used to automatically
convert many codebases. It is highly recommended to follow the staged conversion
process described in the documentation to perform the safest bulk updates first
before making changes which may require more review:

http://python-future.org/futurize.html#forwards-conversion-stage1

### Opt-ing In to the future

* Files begin with `# encoding: utf-8`
* `from __future__ import absolute_import, division, print_function` is used to
  enable the Python 3 behaviours. `unicode_literals` is not used because
  encoding handling can require more preparation but it is important to use the
  `u` literal prefix for text and `b` for bytes so tools know which will require
  encoding.
* Use of the newer `io` imports (Python 2.6+) avoids needing conditional imports
  or use of different code paths. For example, instead of conditionally using
  `open(…, encoding="utf-8")` on Python 3 and `codecs.open(…, encoding="utf-8")`
  on Python 2, use `io` for both:

    ```python
    from io import open

    open(filename, encoding='utf-8')
    ```

    See http://python-future.org/compatible_idioms.html#file-io-with-open
