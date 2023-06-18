const { format } = require("../src/6-format_text")

describe("6-format_text", () => {
  it("with 32", () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectet' +
      'ur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Ph' +
      'asellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Pra' +
      'esent laoreet in enim ut placerat. Praesent a facilisis turpis.'

    const result = 'Lorem ipsum dolor sit amet,' + '\n' +
      'consectetur adipiscing elit.' + '\n' +
      'Aliquam nec consectetur risus.' + '\n' +
      'Cras vel urna a tellus dapibus' + '\n' +
      'consequat. Duis bibendum' + '\n' +
      'tincidunt viverra. Phasellus' + '\n' +
      'dictum efficitur sem quis' + '\n' +
      'porttitor. Mauris luctus' + '\n' +
      'auctor diam id ultrices.' + '\n' +
      'Praesent laoreet in enim ut' + '\n' +
      'placerat. Praesent a facilisis' + '\n' +
      'turpis.'
    expect(format(text, 32)).toBe(result)
  })

  // it ("width 80", () => {
  //   const text = 'Whmwpyeoa, fszpfaan aoaco. Aiye qi feiouo dfjv efa. Cn. Waa efoaascu ocpj ydvbgtiy ' +
  //     'bchga aa. Aoiiexa axfb uysors, oajocce fiji rrraab olu, utasv aav dhyuso ae eaea ' +
  //     'ahojeaeta. Ugb vtnisoaico nege. Slnyaitox. Tupnsa cwhzcp. Sifniop imocpi fcecjac ' +
  //     'aaeo. Fbbegcjyo iui cnrhft fieocaty izmhceyunn ceimlev. Catefof. Lci yie eoacyzmw ' +
  //     'zuisraoia.'

  //   const result60 = 'Whmwpyeoa, fszpfaan aoaco. Aiye qi feiouo dfjv efa. Cn. Waa efoaascu ocpj' +
  //     'ydvbgtiy bchga aa. Aoiiexa axfb uysors, oajocce fiji rrraab olu, utasv aav dhyuso' +
  //     'ae eaea ahojeaeta. Ugb vtnisoaico nege. Slnyaitox. Tupnsa cwhzcp. Sifniop imocpi' +
  //     'fcecjac aaeo. Fbbegcjyo iui cnrhft fieocaty izmhceyunn ceimlev. Catefof. Lci yie' +
  //     'eoacyzmw zuisraoia.'
  // })
})
