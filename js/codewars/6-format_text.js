const format = function(text, width) {
  const stringArray = []
  let i = 0
  debugger
  while (i < text.length) {
    let slice = text.slice(i, i + width)
    if (slice.length == width) {
      slice = slice.slice(0, slice.lastIndexOf(' '))
    }

    stringArray.push(slice)
    i += slice.length
  }

  return stringArray.join('\n')
}


const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectet' +
    'ur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Ph' +
    'asellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Pra' +
    'esent laoreet in enim ut placerat. Praesent a facilisis turpis.'

const text81 = 'Whmwpyeoa, fszpfaan aoaco. Aiye qi feiouo dfjv efa. Cn. Waa efoaascu ocpj ydvbgtiy ' +
                'bchga aa. Aoiiexa axfb uysors, oajocce fiji rrraab olu, utasv aav dhyuso ae eaea ' +
                'ahojeaeta. Ugb vtnisoaico nege. Slnyaitox. Tupnsa cwhzcp. Sifniop imocpi fcecjac ' +
                'aaeo. Fbbegcjyo iui cnrhft fieocaty izmhceyunn ceimlev. Catefof. Lci yie eoacyzmw ' +
                'zuisraoia.'

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

const result81 = 'Whmwpyeoa, fszpfaan aoaco. Aiye qi feiouo dfjv efa. Cn. Waa efoaascu ocpj' +
                'ydvbgtiy bchga aa. Aoiiexa axfb uysors, oajocce fiji rrraab olu, utasv aav dhyuso' +
                'ae eaea ahojeaeta. Ugb vtnisoaico nege. Slnyaitox. Tupnsa cwhzcp. Sifniop imocpi' +
                'fcecjac aaeo. Fbbegcjyo iui cnrhft fieocaty izmhceyunn ceimlev. Catefof. Lci yie' +
                'eoacyzmw zuisraoia.'
