### Languages & their Frameworks

- **Python**
	- Django
		- [Top 10 Django Apps Examples](https://www.netguru.com/blog/django-apps-examples)
	- Syntax
		```
		for item in my_array:
			do_something()
		```

- **JavaScript... TypeScript**
	- [[React]]
	- [[NextJS]]
	- Importing
		- CommonJS -> `require(fileName.js)`
		  ES Modules -> `import something from 'somewhere'`
	- Back-end
		- Express -> establishes ports, and api routes and verbs
		- Vite -> use function `exports`
		- NodeJS
			- https://www.youtube.com/watch?v=lqLSNG_79lI
	- Syntax
		```
		for (const item of myArray){
			doSomething();
		}
		
		for (const itemIndex in myArray){
			doSomething();
		}
		```

		```
		// Maps
		const myMap = new Map();
		myMap.set(key, value);
		myMy.get(key);
		
		
		// Arrays
		// add to beginning of array
		myArray.unshift('apple');
		
		// Sets
		```
	- Sorting
		- ...
	- Math
		- Rounding 
			- `Math.round()` , rounds to nearest integer
			- `Math.ceil()`, rounds to nearest high integer, or `Math.floor()` for the opposite
	- JavaScript can only process via one single thread at all times
		- You can do things concurrently; kind of lets things go on at the same time behind the scenes, but still processes the results at different times
		- **When functions are called, they're added to call stack**
			- Top-most item is finished first, and continue down the stack
		- Cannot do parallel processing like `C` or `C++`
	- Resources
		- https://eloquentjavascript.net/

- **Java**
	- Spring Boot


**Compiled Languages**
**Uncompiled Languages**


### Test Drive Development

Reference: https://www.youtube.com/watch?v=oRAA4d19-Og&t=71s

- Enables refactoring
	- You can make changes to the code while ensuring the things that need to continue to work will do so
	- Basically lets you keep things from tragically breaking because you know most of the baseline functions and logics are working

### Timestamping / Time-Series Data:
- Unix Timestamps: `1763082000`
	- Number of seconds that have elapsed since the Unix Epoch, which is defined as January 1, 1970, at 00:00:00 Coordinated Universal Time (UTC)
	- Seems best to treat as a **number** type 
