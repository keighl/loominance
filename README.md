#  Loominance

🔦 Small library for color accessibility based on WCAG 2.0 specs.

### Relative luminance of a color

As defined by: [https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef)

```js
import { getLuminance } from 'loominance'

getLuminance('#000000')
	// => 1

getLuminance('#FFFFFF')
	// => 0

getLuminance('#F77219')
	// => 0.31878971539680306
```

### Contrast ratio between colors

As defined by: [https://www.w3.org/TR/WCAG20/#contrast-ratiodef](https://www.w3.org/TR/WCAG20/#contrast-ratiodef)

```js
import { getContrastRatio } from 'loominance'

getContrastRatio('#000000', '#FFFFFF')
	// => 21

getContrastRatio('#000000', '#FFFFFF')
	// => 21

getContrastRatio('#F77219', '#8A1C8A')
 	// => 2.8219183129326195
```
