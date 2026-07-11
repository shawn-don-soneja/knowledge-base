---
dg-publish: true
---

### Key Projects

| #   | Project Name                  | Descripton                                                                                                                      | Notes                                                    | Site                                                                                                                    |
| --- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1   | Algo Trader                   | Houses **agents** for securities Trading:<br>- Value Agent which trades bond ETFs<br>- Options Agent (WIP) which trades options | [SS 7/1] Next milestone I think is backtesting module... | https://python-trade-and-predict.vercel.app/                                                                            |
| 2   | Python Server Apps            | Contains some `Net Worth Modeling Tools` and a Django App (uses my Lightsail VPS)                                               | ...                                                      | [python-server-apps](https://github.com/shawn-don-soneja/python-server-apps)                                            |
| 3   | Shawn Home - Monorepo of Apps | Contains a CLI, right now. Intended to support `Python` and `TypeScript` projects                                               |                                                          | [shawn-home](https://github.com/shawn-don-soneja/shawn-home)                                                            |
| 4   | Knowledge Base                | **Obsidian** Knowledge base                                                                                                     |                                                          | https://my-knowledge-base-taupe.vercel.app/<br><br>[knowledge-base](https://github.com/shawn-don-soneja/knowledge-base) |





```mermaid
graph TD
	subgraph External Systems
		E["`Alpaca`"<br/><code></code>]:::other
	end
	subgraph "`AWS`"
		A["`Lambdas`"<br/><code>Algo Trader</code>]
		B[Event Bridge]:::other -- Scheduled Invocations --> A
		C["`Lightsail VPS`"<br/><code>Mercury & Django Apps</code>]
		D[(DynamoDB)]
		A -- "`
		Financial_Agents
		Financial_Macro_Data
		Financial_Macro_Orders
		Financial_Trading_Strategies
		`" --> D
	end
	A -- Trades --> E
	classDef other fill:lightblue
```


