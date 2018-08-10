import convertHTML from '../convert_html_entities'
import test from 'ava'

test('convertHTML', async t => {
  t.is(convertHTML("Dolce & Gabbana"), 'Dolce &​amp; Gabbana')
  t.is(convertHTML("Hamburgers < Pizza < Tacos"), 'Hamburgers &​lt; Pizza &​lt; Tacos')
  t.is(convertHTML("Sixty > twelve"), 'Sixty &​gt; twelve')
  t.is(convertHTML('Stuff in "quotation marks"'), 'Stuff in &​quot;quotation marks&​quot;')
  t.is(convertHTML("Schindler's List"), 'Schindler&​apos;s List')
  t.is(convertHTML("<>"), '&​lt;&​gt;')
  t.is(convertHTML("abc"), 'abc')
})
