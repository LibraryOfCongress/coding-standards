# encoding: utf-8
from __future__ import absolute_import, division, print_function

# This is the sort order enforced by isort: stdlib, third-party, first-party:
from functools import partial

from example_utils import hello_world
from requests import session

unused_session = partial(session)

print(hello_world())
print({'a single key': 'and value can be one line'})
print({'but all keys': 'and values',
       'should be indented': 'at the same level'})

print({
    'this key is really long and the value is even worse': 'so it should not be on a single line',
    'plus there is more than one value': 'and we do not want to pack more than one assignment onto a'
                                         ' single line'
})
