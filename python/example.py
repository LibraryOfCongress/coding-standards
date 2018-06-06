# encoding: utf-8
# This is the sort order enforced by isort: future, stdlib, third-party, first-party:
from __future__ import absolute_import, division, print_function

from functools import partial

from requests import session

from example_utils import hello_world

unused_session = partial(session)

print(hello_world())

print({"a single key": "and value can be one line"})

print(
    {
        "but all keys": "and values which do not fit on one line",
        "should be indented": "at the same level",
    }
)

print(
    {
        "this key is even longer and": (
            "the value is a long literal which should be on multiple"
            " lines for clarity with parentheses to clearly denote that"
            " each of the implicit concatenations are at the same level"
        )
    }
)
