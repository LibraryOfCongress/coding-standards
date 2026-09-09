# Python conventions

We generally follow PEP-8, optionally relaxing the line-length slightly to allow
for more verbose variable names. In general, what matters most is not which set
of rules you use but that they are followed as consistently as possible,
preferably by a tool (see below) so the project team's time is spent on more
substantial matters than formatting — standards should serve the team, not the
other way around!

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

https://black.readthedocs.io/en/latest/the_black_code_style.html#line-length

## Tools

### Code Style

The two common sets of tools used are either [Ruff][ruff], which combines
linting and formatting in a very fast package, or the combination of
[`isort`][isort], [`black`][black], and [`flake8`][flake8]. While you can run
these tools directly, this project's
[`.pre-commit-config.yaml`](../.pre-commit-config.yaml) file shows how to use
[pre-commit](https://pre-commit.com) or [prek](https://prek.j178.dev) to run
them automatically on every Git commit, which is highly recommended for project
work.

```bash
$ pip install ruff
$ ruff check --fix
```

```bash
$ pip install flake8 isort black
$ isort .
$ black .
$ flake8
```

- [`flake8`][flake8] audits for a number of style and correctness problems using PyFlakes
  and pycodestyle
- [`isort`][isort] is used to sort imports into three sections (stdlib, third-party,
  first-party) with names sorted alphabetically and is highly reliable. It
  should be run on every file before committing.
- [`black`][black] will safely apply consistent formatting to your Python code
  and should be run on every file before committing.

Since all of these tools honor `.editorconfig` we are avoiding duplicating the
indentation and whitespace settings in the other tools.

Additional configuration for tools should be stored in tool-specific files (e.g.
`.isort.cfg` or `.flake8`) or collected in a top-level `setup.cfg` but not both
to avoid needing to synchronize updates. The `.isort.cfg` in this directory is
configured to produce the same output as [`black`][black] to avoid needing to
run both tools in the same order.

For convenience, this repository has examples which follow Black's conventions
for formatting and line-length (88 vs. 80 characters). These are intended as a
starting point for other project-level customization — for example,
[`isort`][isort] can be configured to change the default section for unknown
libraries or to add a known first-part namespace following the PEP-8
recommendations:

```ini
[isort]
default_section=THIRDPARTY
known_first_party=my_project_name
```

### Package Management

To meet our security goals, it is recommended that you enable Pip's
[hash-checking mode][pip hash checking mode] or a tool such as [uv][uv], [Poetry][poetry], [Pipenv][pipenv], etc. which incorporates those integrity checks.

It is also highly recommended that you enable dependency cooldowns for the tool you pick to ensure that the community has time to detect security issues in updates:

- uv: configure <a href="https://docs.astral.sh/uv/reference/settings/#exclude-newer">exclude-newer</a> at the project and user level
- pip: <a href="https://pip.pypa.io/en/stable/cli/pip_index/#cmdoption-uploaded-prior-to">use <code>--uploaded-prior-to=P7D</code>  or set <code>PIP_UPLOADED_PRIOR_TO=P7D</code> </a>
- Poetry: set <code>POETRY_SOLVER_MIN_RELEASE_AGE</code>  or configure <code>solver.min-release-age</code>  in your <code>config.toml</code>  file</li>
- Pipenv: <a href="https://pipenv.pypa.io/en/stable/changelog.html">set Pipfile `[pipenv]` section `cool-down-period = "7d"`

[black]: https://pypi.python.org/pypi/black
[flake8]: https://pypi.python.org/pypi/flake8
[isort]: https://pypi.python.org/pypi/isort
[pip hash checking mode]: https://pip.pypa.io/en/stable/reference/pip_install/#hash-checking-mode
[pipenv]: https://pipenv.pypa.io
[poetry]: https://python-poetry.org
[ruff]: https://pypi.python.org/pypi/ruff
[uv]: https://docs.astral.sh/uv
