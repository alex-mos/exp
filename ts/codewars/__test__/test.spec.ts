import mazeRunner from '../6_mazeRunner'
import menFromBoys from '../7_menFromBoys'
import mexicanWave from '../6_mexicanWave'
import removeChar from '../removeChar'
import getSize from '../getSize'
import reversedStrings from '../reversedStrings'
import sumTriangularNumbers from '../sumTriangularNumbers'
import {assert, expect} from 'chai'

describe('removeChar', () => {
  it('basic tests', () => {
    assert.equal(removeChar('eloquent'), 'loquen')
    assert.equal(removeChar('country'), 'ountr')
    assert.equal(removeChar('person'), 'erso')
    assert.equal(removeChar('place'), 'lac')
  })
})

describe('getSize', () => {
  it('basic tests', () => {
    assert.equal(getSize(4, 2, 6)[1], 48)
    assert.equal(getSize(4, 2, 6)[0], 88)
  })
})

describe('reversedStrings', function () {
  it('basic tests', function () {
    assert.equal(reversedStrings('world'), 'dlrow')
    assert.equal(reversedStrings('hello'), 'olleh')
    assert.equal(reversedStrings(''), '')
    assert.equal(reversedStrings('h'), 'h')
  })
})

describe('sumTriangularNumbers', function () {
  it('basic tests', function () {
    assert.equal(sumTriangularNumbers(6), 56)
    assert.equal(sumTriangularNumbers(34), 7140)
    assert.equal(sumTriangularNumbers(-291), 0)
    assert.equal(sumTriangularNumbers(943), 140205240)
    assert.equal(sumTriangularNumbers(-971), 0)
  })
})

describe('menFromBoys', function () {
  it('basic tests', function () {
    assert.deepEqual(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3])
    assert.deepEqual(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37])
    assert.deepEqual(menFromBoys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33])
    assert.deepEqual(menFromBoys([82, 91, 72, 76, 76, 100, 85]), [72, 76, 82, 100, 91, 85])
    assert.deepEqual(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]), [2, 10, 17, 15, 1])
    assert.deepEqual(menFromBoys([-32, -39, -35, -41]), [-32, -35, -39, -41])
    assert.deepEqual(menFromBoys([-64, -71, -63, -66, -65]), [-66, -64, -63, -65, -71])
    assert.deepEqual(menFromBoys([-94, -99, -100, -99, -96, -99]), [-100, -96, -94, -99])
    assert.deepEqual(menFromBoys([-53, -26, -53, -27, -49, -51, -14]), [-26, -14, -27, -49, -51, -53])
    assert.deepEqual(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]), [-86, -56, -30, -15, -17, -33, -45, -85])
    assert.deepEqual(menFromBoys([12, 89, -38, -78]), [-78, -38, 12, 89])
    assert.deepEqual(menFromBoys([2, -43, 95, -90, 37]), [-90, 2, 95, 37, -43])
    assert.deepEqual(menFromBoys([82, -61, -87, -12, 21, 1]), [-12, 82, 21, 1, -61, -87])
    assert.deepEqual(menFromBoys([63, -57, 76, -85, 88, 2, -28]), [-28, 2, 76, 88, 63, -57, -85])
    assert.deepEqual(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1]), [-282, 818, 900, 928, 281, 49, -1])
  })
})

describe('mexicanWave', function () {
  it('basic tests', function () {
    let result: string[]
    result = ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
    assert.deepEqual(mexicanWave('hello'), result, 'Should return: \'' + result + '\'')
    result = ['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS']
    assert.deepEqual(mexicanWave('codewars'), result, 'Should return: \'' + result + '\'')
    result = []
    assert.deepEqual(mexicanWave(''), result, 'Should return: \'' + result + '\'')
    result = ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']
    assert.deepEqual(mexicanWave('two words'), result, 'Should return: \'' + result + '\'')
    result = [' Gap ', ' gAp ', ' gaP ']
    assert.deepEqual(mexicanWave(' gap '), result, 'Should return: \'' + result + '\'')
  })
})

describe('mazeRunner', function () {
  it('basic tests', function () {
    const maze = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1]
    ]

    expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'])).to.equal('Finish')
    expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E'])).to.equal('Finish')
    expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W'])).to.equal('Finish')
    expect(mazeRunner(maze, ['N', 'N', 'N', 'W', 'W'])).to.equal('Dead')
    expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S'])).to.equal('Dead')
    expect(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E'])).to.equal('Lost')
    expect(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E', 'S'])).to.equal('Lost')
    expect(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E', 'S', 'W'])).to.equal('Dead')
  })

  it('second tests', function () {
    const maze = [
      [2, 0, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 3],
      [0, 0, 0, 0],
    ]

    expect(mazeRunner(maze, ['E', 'S', 'S', 'S', 'E', 'E', 'N'])).to.equal('Finish')
    expect(mazeRunner(maze, ['E', 'S', 'E', 'E', 'S'])).to.equal('Finish')
    expect(mazeRunner(maze, ['E', 'S', 'W'])).to.equal('Dead')
    expect(mazeRunner(maze, ['E', 'S', 'S', 'S', 'S'])).to.equal('Dead')
    expect(mazeRunner(maze, ['E', 'S', 'E', 'E'])).to.equal('Lost')
  })
})
