---
dg-publish: true
---
>**Best Low-Cost Setup:** DeepSeek in Aider gives you ~90–95% of Claude’s coding reasoning at a tiny fraction of the cost.
>
>The _only_ better alternative is **Claude Code natively**, but heavy use will cost **$100–$200+/month**. DeepSeek + Aider is the absolute sweet spot for cheap power.
>
>This conversation covers how to run and use open-source Large Language Models (LLMs), shifting from local execution to cloud-based coding agents.
>
>- [gemini chat](https://gemini.google.com/app/d11db6e3f0ecf40f)

1. Initial Overview
	- **Local Options:** Free, private tools like **Ollama** (CLI) and **LM Studio** (GUI) for running models offline.
	- **Hardware Requirements:** 8GB to 16GB of VRAM/RAM required for smaller 4B–8B models.

	- **Cloud & Code:** Introduction to **OpenRouter** for cloud APIs and the Hugging Face `transformers` library for development. [[1](https://braca51e.medium.com/local-rag-llm-summarization-mistral-vs-llama3-part-1-8ddce94c502d), [2](https://www.xda-developers.com/i-use-this-local-ai-tool-to-turn-boring-documents-into-cool-narrations/)]

2. Transition to AI Agents

	- **The Goal:** Replicating the agentic capabilities of tools like Cursor, Windsurf, or Claude (reading/writing files and running terminal commands).
	- **Standalone Tools:** **Aider** (terminal-based git agent) and **PearAI** (open-source VS Code fork).
	- **VS Code Extensions:** **Continue** (for sidebar chat and autocomplete) and **Cline / Roo Cline** (for autonomous, multi-step agent workflows).

3. Cloud-Hosted Open-Source Stack (Final Setup)

	- **The Constraint:** Local hardware is skipped due to a lack of GPU compute power for massive models.
	- **The Solution:** Pair a pay-as-you-go cloud API key from **OpenRouter** or the **DeepSeek Platform** with a frontend agent client like **Cline** or **PearAI**.
	- **Top Agent Models:** **DeepSeek-V3** (complex reasoning, low cost), **Qwen-2.5-Coder 32B** (code syntax), and **Llama-3.3-70B** (strong tool-calling). [[1](https://www.wnycstudios.org/podcasts/otm/articles/brooke-talks-ai-with-ed-zitron)]

If you are ready to build, let me know if you want to set up **Cline** or **PearAI** first, or if you need help choosing between **DeepSeek** and **Qwen** models!