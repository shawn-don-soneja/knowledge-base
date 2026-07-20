---
dg-publish: true
---

### Key Projects

| #   | Project Name                  | Descripton                                                                                                                      | Notes                                                                                                 | Site                                                                                                                                                   |     |
| --- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| 1   | Algo Trader                   | Houses **agents** for securities Trading:<br>- Value Agent which trades bond ETFs<br>- Options Agent (WIP) which trades options | [SS 7/1] Next milestone I think is backtesting module...                                              | https://python-trade-and-predict.vercel.app/                                                                                                           |     |
| 2   | Python Server Apps            | Contains some `Net Worth Modeling Tools` and a Django App (uses my Lightsail VPS)                                               | ...                                                                                                   | [python-server-apps](https://github.com/shawn-don-soneja/python-server-apps)                                                                           |     |
| 3   | Shawn Home - Monorepo of Apps | Contains a CLI, right now. Intended to support `Python` and `TypeScript` projects                                               |                                                                                                       | [shawn-home](https://github.com/shawn-don-soneja/shawn-home)                                                                                           |     |
| 4   | Knowledge Base                | **Obsidian** Knowledge base                                                                                                     |                                                                                                       | https://my-knowledge-base-taupe.vercel.app/<br><br>[knowledge-base](https://github.com/shawn-don-soneja/knowledge-base)                                |     |
| 5   | NextJS Apps                   | 1. public<br>2. private                                                                                                         | - macro-dashboard<br>- health-tracker<br><br>--------<br><br>- algo-trader<br>- fun (notes and links) | [next-js-practice](https://github.com/shawn-don-soneja/next-js-practice)<br><br>[next-js-private](https://github.com/shawn-don-soneja/next-js-private) |     |





`#1 Algo Trader & #2 Python Server Apps`
```mermaid
graph TD
	subgraph External Systems
		E["`Alpaca`"<br/><code></code>]:::other
	end
	subgraph "`AWS`"
		A["`Lambdas`"<br/><code>Algo Trader</code>]
		B[Event Bridge]:::other -- Scheduled Invocations --> A
		C["`Lightsail VPS ⛵️`"<br/><code>Mercury & Django Apps</code>]:::lightsail
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
	classDef lightsail fill:orange
```

`#5 NextJS Apps - private and public`
```mermaid
graph TD
	subgraph "public"
		A[Frontend Multiple Pages]
		A -- "`health-tracker<br>macro-dashboard`" --> B
		B[Application APIs]
		B --> C[("`DyanmoDB
		<code>Financial_Data_Macro</code>`")]:::hasCode
		B --> D[("`Supabase
		<code>health_tracker</code>`")]:::hasCode
	end
	subgraph "private"
		E[Frontend Multiple Pages]
		F[Application APIs]
		E -- "`algo-trader<br>fun`" --> F
		F --> G[("`DyanmoDB
		<code>Financial_Data_Orders
		Notes</code>`")]:::hasCode
		F --> H[("`Supabase
		<code>Financial_Agents</code>`")]:::hasCode
		F --> I[Alpaca]:::other
	end
	
	classDef other fill:lightblue
	classDef hasCode fill:darkgreen
```