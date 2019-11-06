import convertHTML from '../convert_html_entities'
import { expect } from 'chai'

describe('convertHTML', () => {
  test('basic test', () => {
    expect(convertHTML("Dolce & Gabbana")).to.be.equal('Dolce &amp; Gabbana')
    expect(convertHTML("Hamburgers < Pizza < Tacos")).to.be.equal('Hamburgers &lt; Pizza &lt; Tacos')
    expect(convertHTML("Sixty > twelve")).to.be.equal('Sixty &gt; twelve')
    expect(convertHTML('Stuff in "quotation marks"')).to.be.equal('Stuff in &quot;quotation marks&quot;')
    expect(convertHTML("Schindler's List")).to.be.equal('Schindler&apos;s List')
    expect(convertHTML("<>")).to.be.equal('&lt;&gt;')
    expect(convertHTML("abc")).to.be.equal('abc')
  })
})
