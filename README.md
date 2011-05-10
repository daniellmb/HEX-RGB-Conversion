HEX <=> RGB Conversion
=========

A two way color conversion micro-library for Hexadecimal and RGB integer colors, weighing in at only **138 bytes** gzipped. This micro-library is completely self contained with no external dependencies.

### Features

- Supports
	- toRGB
	- toHex

- Tested Environments
	- ES5
	- Node.js
	- Rhino
	- Development (console, etc.) 
	- Safari 4
	- Google Chrome 5
	- Internet Explorer 5 - 9
	- iPhone Safari
	- iPad Safari
	- Firefox 3 - 4
	- Opera 10.61

### How to use

```javascript
	//convert hexadecimal color to RGB
	var rgb = toRGB("FF0000");
	//convert RGB to hexadecimal
	var hex = toHex(255, 0, 0);
```

### Documentation 

##### Options:

If you don't want these methods added to the window object simply modify the immediate function to pass in the JavaScript object of your choosing.

##### Methods:

- **toRGB** *(`String` color)*

	- summary: 
		- Converts a 6 digit Hexadecimal string value to an RGB integer array. Important! input must be a 6 digit Hexadecimal string "bad" will not convert correctly but "bbaadd" will. To keep the function as light as possible there is no idiot-proofing, if you pass in bad data I'm not fixing it for you :-)
	
	- color: `String`
		- 6 digit Hexadecimal string value
	
	- returns: `Array`
		- An array containing the RGB integers in the following format [red, green, blue]
	
	- example:
		- Convert the Hexadecimal value "FF0000" (red color) to RGB integers. The variable rgb value will be equal to [255, 0, 0]

		  ```javascript
		  var rgb = toRGB("FF0000");
		  ```

- **toHex** *(`Number` red, `Number` green, `Number` blue)*

	- summary:
		- Register a callback on a named topic.

	- red: `Number`
		- number ranging from 0 to 255 indicating the amount of red

	- green: `Number`
		- number ranging from 0 to 255 indicating the amount of green

	- blue: `Number`
		- number ranging from 0 to 255 indicating the amount of blue

	- returns: `String`
		- 6 digit Hexadecimal string value

	- example:

		  ```javascript
		  var hex = toHex(255, 0, 0);
		  ```

### License 

(The MIT License)

Copyright (c) 2011 Daniel Lamb <daniellmb.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.