"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
class TextSummarizer {
    constructor() {
        this.model = null;
        this.model = new openai_1.default({
            //apiKey: process.env["API_KEY"], // This is the default and can be omitted
            baseURL: "https://cloud.olakrutrim.com/v1",
            apiKey: "pAlGMtmRH1oDYcMpwbF_bpwmWozv",
        });
    }
    generateCompletions(content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.model === null)
                return "";
            const chatCompletion = yield this.model.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: "You are an domain expert in Law and Judiciary. Your task is to summarize the content in 500 words and Kannada language only.",
                    },
                    {
                        role: "user",
                        content: `Consider the following content: "${content}"`,
                    },
                ],
                model: "Meta-Llama-3-8B-Instruct",
                max_tokens: 2048,
            });
            const res = chatCompletion.choices[0].message.content;
            return res;
        });
    }
    generateSummarization(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (text.length === 0)
                throw new Error("Cannot accept empty text");
            const summarization = yield this.generateCompletions(text);
            return summarization;
        });
    }
}
exports.default = TextSummarizer;
