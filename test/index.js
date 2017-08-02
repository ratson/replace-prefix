import test from 'ava'

import replacePrefix from '..'

function replace(t, str, prefix, newPrefix, expected) {
  t.is(replacePrefix(str, prefix, newPrefix), expected)
}
replace.title = (providedTitle, str, prefix, newPrefix, expected) =>
  `${providedTitle} "${str}" replace prefix "${prefix}" with "${newPrefix}" = ${expected}`.trim()

test(replace, '[info] log', '[info] ', '', 'log')
test(replace, 'aaa', 'a', '', 'aa')
test(replace, 'aaa', 'a', 'b', 'baa')
test(replace, 'aaa', 'aa', '', 'a')
test(replace, '^aaa$', '^', '', 'aaa$')
test(replace, '^aaa$', '^a', '', 'aa$')
// not match
test(replace, 'aaa', 'b', '', 'aaa')
