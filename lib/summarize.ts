import OpenAI from "openai";

class TextSummarizer {
  model: OpenAI | null = null;

  constructor() {
    this.model = new OpenAI({
      //apiKey: process.env["API_KEY"], // This is the default and can be omitted
      baseURL: "https://cloud.olakrutrim.com/v1",
      apiKey: "pAlGMtmRH1oDYcMpwbF_bpwmWozv",
    });
  }

  private async generateCompletions(content: string) {
    if (this.model === null) return "";

    const chatCompletion = await this.model.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an domain expert in Law and Judiciary. Your task is to summarize the content in 500 words and Kannada language only.",
        },
        {
          role: "user",
          content: `Consider the following content: "${content}"`,
        },
      ],
      model: "Meta-Llama-3-8B-Instruct",
      max_tokens: 2048,
    });

    console.log(chatCompletion);
    if (chatCompletion?.choices === undefined) {
      return "";
    }

    const res = chatCompletion.choices[0].message.content as string;
    return res;
  }
  async generateSummarization(text: string) {
    if (text.length === 0) throw new Error("Cannot accept empty text");

    const summarization = await this.generateCompletions(text);
    return summarization;
  }
}

export default TextSummarizer;
