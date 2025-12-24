import express from "express";
import cors from "cors";
export const message = "Hello from backend!";
const app = express();
app.use(cors());
app.get("/hello", (req, res) => {
    res.json({ message });
});
app.listen(3000);
console.log('I am alive!');
//# sourceMappingURL=index.js.map