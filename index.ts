import express, { Response, Request } from "express";
import TextSummarizer from "./lib/summarize";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default async function handler(req: Request, res: Response) {
  const text = req.body.text;

  if (typeof text !== "string" || text.trim().length === 0)
    return res.status(400).json({ message: "Enter a valid response" });

  try {
    const textSummarizer = new TextSummarizer();
    const summarization = await textSummarizer.generateSummarization(text);

    return res
      .status(200)
      .json({ message: "Generated the summarization", summarization });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

app.get("/", (req, res) => {
  return res.json({ message: "Working fine!" });
});

app.post("/summarize", handler);

app.listen(3000, () => {
  console.log("Listening on 3000!");
});
