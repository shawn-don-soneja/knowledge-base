---
dg-publish: true
---

### Key Projects

| Project Name                  | Descripton                                                                                                       | Notes                                                    | Site                                                                         |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Algo Trader                   | Houses agents for securities Trading<br>- Value Agent: trades bond ETFs<br>- Options Agent (WIP): trades options | [SS 7/1] Next milestone I think is backtesting module... | https://python-trade-and-predict.vercel.app/                                 |
| Python Server Apps            | Contains some `Net Worth Modeling Tools` and a Django App (uses my Lightsail VPS)                                | ...                                                      | [python-server-apps](https://github.com/shawn-don-soneja/python-server-apps) |
| Shawn Home - Monorepo of Apps | Contains a CLI, right now. Intended to support `Python` and `TypeScript` projects                                |                                                          | [shawn-home](https://github.com/shawn-don-soneja/shawn-home)                 |



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


