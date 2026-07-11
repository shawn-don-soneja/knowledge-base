---
dg-publish: true
---
---
### Server-side Component Rendering

*AI Definition*

>Server-Side Rendering (SSR) ==renders web pages on the server==, sending fully formed HTML to the browser for faster initial loads, better SEO, and improved user experience (no blank screens), contrasting with Client-Side Rendering (CSR) where the browser builds the page with JavaScript; SSR involves the server fetching data and generating HTML, which is then "hydrated" on the client by attaching interactive JavaScript, making it a hybrid approach for optimal performance.


---

##### Pros and Cons

|**Feature**|**Server-Side Rendering (SSR)**|**Client-Side Rendering (CSR) / ssr: false**|
|---|---|---|
|**Initial Load Speed (Time to Content)**|**Faster.** The server sends a fully rendered page to the browser.|**Slower.** The server sends an empty shell; the browser must download JS, fetch data, and then render.|
|**User Experience (UX)**|**Better.** The user sees the charts immediately. Less risk of layout shift or empty space.|**Worse.** User may see "loading..." spinners or a blank area until the chart loads.|
|**SEO Indexing**|**Excellent.** All data and content are immediately available to search engine crawlers.|**Poor.** Content is rendered later, potentially missed by some crawlers. (Less important for dashboards, critical for blogs/e-commerce.)|
|**Server Load**|**High.** The server must compute and render the chart's complex HTML/SVG for every request.|**Low.** The server just sends the initial shell. All rendering computation is done by the user's browser.|
|**Hydration Errors**|**High Risk.** If the chart library uses browser-only APIs (`window`, etc.), you **must** use techniques like `ssr: false`.|**No Risk.** The rendering is entirely client-side.|

Reference:
1. [Rendering: Server-side Rendering (SSR) | Next.js](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)