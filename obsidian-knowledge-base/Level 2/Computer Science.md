---
dg-publish: true
---
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
		- Module systems for Node
			- CommonJS -> `require(fileName.js)`
			- ES Modules -> `import something from 'somewhere'`
				- What is an `ESM package`?



			![[Pasted image 20260711135731.png]]


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



### Compute

#### Startup Speeds
Node and Python, lightweight built-at-runtime language which don't need to spin up virtual machines lead to `quicker cold starts in serverless Lambda functions`.

`Java`, `C`, and `C++` would take longer to cold start because they build virtual machines, link up dependencies, pull binaries. Buncha shit.

> It comes down to **package size** and **runtime initialization overhead**.
> 
> When a cold start occurs, AWS Lambda has to download your code and prepare the runtime environment before it can execute a single line.
> 
> - **Runtime Initialization:** Python and Node.js are lightweight, interpreted environments. Their runtimes initialize almost instantly. Java, on the other hand, must spin up an entire **Java Virtual Machine (JVM)**, load core system classes, and perform garbage collection initialization before your code even boots.
>     
> - **Compilation & Linking:** C++ requires loading compiled, heavy binary files and resolving dynamic links, which adds latency.
>     
> - **Reflection:** Java frameworks (like Spring) often use runtime reflection to scan packages upon startup, drastically lengthening the boot process.
>     
> 
> Python and Node.js skip all of this virtual machine setup, allowing them to jump straight to execution.
> 
> -- [Gemini](https://gemini.google.com/app/2f6f6a44f930a141)


#### Compute Speeds

*When compared to C*

| **Language**         | **Raw Execution Time** | **Memory Overhead** | **Energy Consumption** |
| -------------------- | ---------------------- | ------------------- | ---------------------- |
| **C++**              | ~1.34x slower          | ~1.34x higher       | ~1.34x more energy     |
| **Java** (JVM)       | ~1.89x slower          | ~6.01x higher       | ~1.98x more energy     |
| **JavaScript** (V8)  | ~6.52x slower          | ~4.59x higher       | ~4.45x more energy     |
| **Python** (CPython) | ~71.90x slower         | ~2.80x higher       | ~75.88x more energy    |
### Test DrivenDevelopment

Reference: https://www.youtube.com/watch?v=oRAA4d19-Og&t=71s

- Enables refactoring
	- You can make changes to the code while ensuring the things that need to continue to work will do so
	- Basically lets you keep things from tragically breaking because you know most of the baseline functions and logics are working

### Timestamping / Time-Series Data:
- Unix Timestamps: `1763082000`
	- Number of seconds that have elapsed since the Unix Epoch, which is defined as January 1, 1970, at 00:00:00 Coordinated Universal Time (UTC)
	- Seems best to treat as a **number** type 
