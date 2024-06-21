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
exports.default = handler;
const express_1 = __importDefault(require("express"));
const summarize_1 = __importDefault(require("./lib/summarize"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = req.body.text;
        if (typeof text !== "string" || text.trim().length === 0)
            return res.status(400).json({ message: "Enter a valid response" });
        try {
            const textSummarizer = new summarize_1.default();
            const summarization = yield textSummarizer.generateSummarization(text);
            return res
                .status(200)
                .json({ message: "Generated the summarization", summarization });
        }
        catch (err) {
            return res.status(500).json({ message: "Internal server error" });
        }
    });
}
app.get("/", (req, res) => {
    return res.json({ message: "Working fine!" });
});
app.post("/summarize", handler);
app.listen(3000, () => {
    console.log("Listening on 3000!");
});
