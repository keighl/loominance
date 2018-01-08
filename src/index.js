const getLuminance = color => calculateLuminance(convertHexToRGB(color))

const getContrastRatio = (color1, color2) => {
	// https://www.w3.org/TR/WCAG20/#contrast-ratiodef

	const L1 = calculateLuminance(convertHexToRGB(color1))
	const L2 = calculateLuminance(convertHexToRGB(color2))

	// Divide brighter/darker
	if (L1 > L2) {
		return (L1 + 0.05) / (L2 + 0.05)
	}

	return (L2 + 0.05) / (L1 + 0.05)
}

const convertHexToRGB = (hex) => {
	const HEX_REGEX = /^#{0,1}([a-fA-F0-9]{6})$/
	const HEX_BASE = 16

	let hexString

	const regMatch = hex.match(HEX_REGEX)
	if (regMatch) {
		hexString = regMatch[1]
	}

	if (!hexString) {
		throw new Error(`Invalid hex value: ${hex}`)
	}

	return {
		r: parseInt(hexString.slice(0, 2), HEX_BASE),
		g: parseInt(hexString.slice(2, 4), HEX_BASE),
		b: parseInt(hexString.slice(4, 6), HEX_BASE),
	}
}

const adjustedLRGBValue = (val) => {
	// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	if (val <= 0.03928) {
		return val / 12.92
	}

	return ((val + 0.055) / 1.055) ** 2.4
}

const calculateLuminance = (rgb) => {
	// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef

	const R = adjustedLRGBValue(rgb.r / 255.0)
	const G = adjustedLRGBValue(rgb.g / 255.0)
	const B = adjustedLRGBValue(rgb.b / 255.0)

	return (0.2126 * R) + (0.7152 * G) + (0.0722 * B)
}

export {
	getLuminance,
	getContrastRatio,
}
