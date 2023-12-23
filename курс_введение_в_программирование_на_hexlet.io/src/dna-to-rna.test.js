const dnaToRna = require('./dna-to-rna')

describe('dnaToRna', () => {
	test('ACGTGGTCTTAA', () => {
		expect(dnaToRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU')
	})
	test('CCGTA', () => {
		expect(dnaToRna('CCGTA')).toBe('GGCAU')
	})
	test('empty string', () => {
		expect(dnaToRna('')).toBe('')
	})
	test('ACNTG', () => {
		expect(dnaToRna('ACNTG')).toBe(null)
	})
})
