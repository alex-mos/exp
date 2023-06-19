import assert from 'assert'

/**
 * Принимает высоту орбиты тела, вращающегося вокруг Земли, относительно поверхности Земли (км),
 * возвращает период полного обращения этого тела вокруг Земли.
 * Вычисляет по формуле, взятой из википедии: https://en.wikipedia.org/wiki/Orbital_period
 * @param alt
 * @returns {number}
 */
function getOrbitalPeriodByAlt (alt) {
  const GM = 398600.4418 // гравитационный параметр — https://ru.wikipedia.org/wiki/Гравитационный_параметр
  const earthRadius = 6367.4447 // радиус Земли, км
  let orbitalPeriod = 2 * Math.PI * Math.sqrt( Math.pow((earthRadius + alt), 3) / GM )
  return Math.round(orbitalPeriod)
}

/**
 * Принимает массив объектов, вращающихся вокруг Земли, заменяет у каждого высоту на период обращения вокруг Земли.
 * @param {array} arr
 * [
 *   {string} name — название объекта на орбите
 *   {number} avgAlt — средняя высота объекта, км
 * ]
 * @returns {array}
 */
function orbitalPeriod(arr) {
  return arr.map(item => {
    item.orbitalPeriod = getOrbitalPeriodByAlt(item.avgAlt)
    delete item.avgAlt
    return item
  })
}


assert.equal(getOrbitalPeriodByAlt(35873.5553), 86400)

assert.deepEqual(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]), [{name: "sputnik", orbitalPeriod: 86400}])
assert.deepEqual(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]), [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}])