/* global describe, it, before */

import chai from 'chai'

import {
	getLuminance,
	getContrastRatio,
} from '../src'

chai.expect()

const expect = chai.expect

describe('loominance()', () => {

	it('returns correct luminance for #000000', () => {
		expect(getLuminance('#000000')).to.be.equal(0)
		expect(getLuminance('000000')).to.be.equal(0)
	})

	it('returns correct luminance for #FFFFFF', () => {
		expect(getLuminance('#FFFFFF')).to.be.equal(1)
		expect(getLuminance('FFFFFF')).to.be.equal(1)
	})

	it('returns correct luminance for #FFFF00', () => {
		const res = Math.round(getLuminance('#FFFF00') * 100) / 100
		expect(res).to.be.equal(0.93)
	})

	it('returns correct luminance for #F77219', () => {
		const res = Math.round(getLuminance('#F77219') * 100) / 100
		expect(res).to.be.equal(0.32)
	})
})

describe('getContrastRatio()', () => {

	it('returns correct ratio for #000000|#FFFFFF', () => {
		expect(getContrastRatio('#000000', '#FFFFFF')).to.be.equal(21)
	})

	it('returns correct ratio for #FFFFFF|#000000', () => {
		expect(getContrastRatio('FFFFFF', '#000000')).to.be.equal(21)
	})

	it('returns correct ratio for #000000|#000000', () => {
		expect(getContrastRatio('#000000', '#000000')).to.be.equal(1)
	})

	it('returns correct ratio for #F77219|#8A1C8A', () => {
		const res = Math.round(getContrastRatio('#F77219', '#8A1C8A') * 100) / 100
		expect(res).to.be.equal(2.82)
	})
})
