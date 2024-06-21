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
const fs_1 = __importDefault(require("fs"));
const openai = new openai_1.default({
    //apiKey: process.env["API_KEY"], // This is the default and can be omitted
    baseURL: "https://cloud.olakrutrim.com/v1",
    apiKey: "pAlGMtmRH1oDYcMpwbF_bpwmWozv",
});
function main(content) {
    return __awaiter(this, void 0, void 0, function* () {
        const chatCompletion = yield openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an domain expert in Law and Judiciary. Your task is to summarize the content in 500 words and Kannada language only.",
                },
                { role: "user", content: `Consider the following content: "${content}"` },
            ],
            model: "Meta-Llama-3-8B-Instruct",
            max_tokens: 2048,
        });
        const res = chatCompletion.choices[0].message.content;
        console.log(res);
        fs_1.default.writeFileSync("summarization.txt", res);
    });
}
const content = `ಕರ್ನಾಟಕ ಉಚ್ಚ ನ್ಯಾಯಾಲಯ
ಸನ್ಮಾನ್ಯ ನ್ಯಾಯಮೂರ್ತಿ ಶ್ರೀ ಕೆ. ಸೋಮಶೇಖರ್‌

ಎಮ್‌. ಮಧುಕುಮಾರ್‌ ಅಲಿಯಾಸ್‌ ಮರಿಬಾ೦ಡ್‌ ವಿರುದ್ಧ ಕರ್ನಾಟಕ ರಾಜ್ಯ, ಕುವೆ೦ಪು ನಗರ ಪೊಲೀಸ್‌
ಠಾಣಿ, ಮೈಸೂರು

ಕ್ರಿಮಿನಲ್‌ ಅರ್ಜಿಸ೦ಖ್ಯೆ: 3374/2020, ದಿನಾ೦ಕ 11 ನೇ ಆಗಸ್ಟ್‌, 2020

ಆಜೆ,

ನ್ಯಾಯಮೂರ್ತಿ ಶ್ರೀ ಕೆ. ಸೋಮಶೇಖರ್‌:

ಭಾರತ ದ೦ಡ ಸಂಹಿತೆಯ 376 (ಡಿ), 307, 397, 120 ಬಿ ಮತ್ತು 201 ನೇ ಪ್ರಕರಣಗಳ ಅಡಿಯಲ್ಲಿನ ದಂಡನೀಯ
ಅಪರಾಧಗಳಿಗಾಗಿ ಮೈಸೂರಿನ ಕುವೆ೦ಪು ನಗರ ಪೊಲೀಸ್‌ ಠಾಣೆಯ ಅಪರಾಧಸಂ೦ಖ್ಯೆ: 38/2019 ರಿಂದ
ಉದ್ಭವಿಸಿದ ಎಸ್‌. ಸಿ.ಸ೦ಖ್ಯೆ: 252 ರಲ್ಲಿನ 5 ನೇ ಆರೋಪಿಯಾಗಿ ದೋಷಾರೋಪಣೆಗೊಳಗಾದ ಅರ್ಜಿದಾರನು
ಈ ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಿದ್ದಾನೆ.ಆರೋಪಿಯನ್ನು ಬಂಧಿಸಿದ ದಿನಾ೦ಕದಿ೦ದ ಅವನು ನ್ಯಾಯಾ೦ಗ
ಬ೦ಧನದಲ್ಲಿದ್ದಾನೆ.ಆದುದರಿ೦ದ, ಆರೋಪಿ ಪರ ನ್ಯಾಯವಾದಿಯು, ಅದರಲ್ಲಿ ಆಗ್ರಹಿಸಿದ ಕಾರಣಗಳಿಗಾಗಿ.
ನಿಯತ ಜಾಮೀನನ್ನು ಮ೦ಜೂರು ಮಾಡಲು ಮನವಿ ಮಾಡಿಕೊ೦ಡಿದ್ದಾರೆ.

2. ಅರ್ಜಿದಾರನ ಪರ ಮಾನ್ಯ ನ್ಯಾಯವಾದಿ ಮತ್ತು ವಿಡಿಯೋ ಕಾನ್ನರೆನ್ಸಿ೦ಗ್‌ ಲಕ ಪ್ರತಿವಾದಿ-ರಾಜ್ಯದ ಪರ
ಹಾಜರಾದ ಉಚ್ಚ ನ್ಯಾಯಾಲಯದ ಸರ್ಕಾರಿ ಚ ಫೀಡರ್‌ ಅವರ ವಾದಗಳನ್ನು ಆಲಿಸಲಾಯಿತು.

3. ಸಿಸಿಸ೦ಖ್ಯೆ: 4507/2019 ರಲ್ಲಿ, ಆರೋಪಿಯ ವಿರುದ್ಧ ತನಿಖಾಧಿಕಾರಿಯು ಮಂಡಿಸಿದ ಆರೋಪ
ಪಟ್ಟಿಯಲ್ಲಿ ತಿಳಿಸಿರುವುದೇನೆ೦ದರೆ, ಆರೋಪಿತ ವ್ಯಕ್ತಿಗಳ ವಿರುದ್ದ ದೂರನ್ನು ದಾಖಲಿಸಿರುವ ಕುಮಾರಿ
ನೇತ್ರಾವತಿ ಎ೦ಬ ಹೆಸರಿನ ಸ೦ತ್ರಸ್ತ ಬಾಲಕಿಯು, ಸರಸ್ವತಿಪುರ೦, 14 ನೇ ಮುಖ್ಯ ರಸ್ತೆ, ಮೈಸೂರು ಇಲ್ಲಿ ಇರುವ
ಪಿ.ಬಿ. ಸಲ್ಯೂಷನ್ಸ್‌ ಹೆಸರಿನ ಸಾಫ್ಟ್ವೇರ್‌ ಕಚೇರಿಯಲ್ಲಿ ಕಾರನಿರ್ವಹಿಸುತ್ತಿದ್ದು, ಆರೋಪ ಪಟ್ಟಿಯಲ್ಲಿ
ಸಾಕ್ಟಿದಾರನೆ೦ದು ತೋರಿಸಲಾಗಿರುವ ಸಿಡಬ್ಲ್ಯು .2-ಶಿವಕುಮಾರ್‌ ಎ೦ಬಾತನನ್ನು ಆಕೆಯು ಪ್ರೀತಿಸುತ್ತಿದ್ದಳು;
ಅವನಿಗೆ ಕಾರ್ತಿಕ್‌ ಗೌಡ ಹೆಸರಿನ ಆರೋಪಿಯ ಸ೦ಪರ್ಕ ಬೆಳೆಯಿತು ಮತ್ತು ಆತನು ಅನುಷಾ ಹೆಸರಿನ
ಮತ್ತೊಬ್ಬ ಹುಡುಗಿಯನ್ನು ತನ್ನ ಭಾವಿ ಪತ್ನಿ ಎಂದು ಪರಿಚಯಿಸಿದ್ದನು; ಅವರು ಆಗಾಗ ಪರಸ್ಪರ
ಸಂದೇಶಗಳನ್ನು (ಚಾಟಿ೦ಗ್‌) ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದರು; ದಿನಾ೦ಕ: 12.04.2019 ರಂದು, ಆಕೆಯು ಗುಪ್ತ
ಲಾಡ್ಜ್ನಲ್ಲಿ ಸ್ವಾಗತಕಾರಿಣಿಯಾಗಿ. ಕೆಲಸಕ್ಕೆ. ಸೇರಿಕೊ೦ಡಿದ್ದಳು; ಆಕೆಯು ಹಣಕಾಸಿನ ಬಿಕ್ಕಟ್ಟು
ಹೊ೦ದಿದ್ದರಿ೦ದ, ಸದರಿ ಕಾರ್ತಿಕ್‌ ಗೌಡನಿಗೆ ಸ್ವಲ್ಪ ಹಣ ಸಾಲ ನೀಡಲು ಕೋರಿದ್ದಳು ಮತ್ತು ವಾಸ್ತವದಲ್ಲಿ
ಸದರಿ ಅನುಷಾಳ ಮೂಲಕ 2,000/- ರೂ.ಗಳ ಮೊತ್ತವನ್ನು ಆಕೆಯು ಸಾಲವಾಗಿ ಪಡೆದುಕೊ೦ಡಿದ್ದಳು; ಸದರಿ
ಕಾರ್ತಿಕ್‌ ಗೌಡನು ಆಗಾಗ್ಗೆ ಸದರಿ ಮೊತ್ತವನ್ನು ವಾಪಸು ನೀಡುವಂ೦ತೆ ಕೇಳಲಾರ೦ಭಿಸಿದನು; ಈ
ಸ೦ದರ್ಭದಲ್ಲಿ,ದಿನಾ೦ಕ: 08.05.2019 ರಂದು, ಕಾರ್ತಿಕ್‌ ಗೌಡ ಮತ್ತು ಕು. ನೇತ್ರಾವತಿ ನಡುವೆ ಸದರಿ ಸಾಲದ
ಮೊತ್ತವನ್ನು ವಾಪಸು ನೀಡುವ ಕುರಿತು ದೂರವಾಣಿ ಸ೦ವಾದ ನಡೆದಿತ್ತು.ಆದಾಗ್ಯೂ, ಸಿಡಬ್ಲ್ಯು .2-
ಶಿವಕುಮಾರನು ಕು. ನೇತ್ರಾವತಿಯೊ೦ದಿಗೆ ಕಾರ್ತಿಕ್‌ ಗೌಡನ ಮನೆಗೆ ಹೋದಾಗ, ಆತನ ಮನೆ ಬೀಗ
ಹಾಕಿರುವುದನ್ನು ಕ೦ಡನು; ನ೦ತರ ಸ೦ತ್ರಸ್ತ ಬಾಲಕಿ ಮತ್ತು ಸಿಬ್ಬು .2 ಇಬ್ಬರೂ ಹಿ೦ತಿರುಗಿ ಬರುವಾಗ,
ದೂರುದಾರಳು ಮೂತ್ರ ವಿಸರ್ಜನೆ ಮಾಡಬೇಕೆ೦ದಿದ್ದರಿ೦ದ ವರ್ತುಲ ರಸ್ತೆಯ ಬಳಿ ಸಿಡಬ್ಲ್ಯು -2 ತನ್ನ
ಮೋಟಾರ್‌ ಸೈಕಲ್ನ್ನು ನಿಲ್ಲಿಸಿದನು; ಆ ಸಮಯದಲ್ಲಿ, 4 ರಿ೦ದ 6 ವ್ಯಕ್ತಿಗಳು ಬ೦ದು ಸ೦ತ್ರಸ್ತೆ-ದೂರುದಾರಳ
ಮೇಲೆ ದಾಳಿ ಮಾಡಿ, ಅತ್ಯಾಚಾರವೆಸಗಿ, ಆಕೆಯ ಮೇಲೆ ದೌರ್ಜನ್ಯವೆಸಗಿದರೆ೦ದು ಆರೋಪಿಸಲಾಗಿದೆ.ಇದನ್ನೇ
ತನಿಖಾಧಿಕಾರಿಯು ಸಲ್ಲಿಸಿದ ಆರೋಪಪಟ್ಟಿಯಲ್ಲಿಯೂ ಹೇಳಲಾಗಿದೆ.ಈ ಎಲ್ಲಾ ಆರೋಪಗಳ ಆಧಾರದ
ಮೇಲೆ, ತನಿಖಾಧಿಕಾರಿಯು ಕೂಲ೦ಕಷವಾಗಿ ಪ್ರಕರಣವನ್ನು ತವಿಖೆ ಮಾಡಿ, ವಶಕ್ಕೆ ಒಪ್ಪಿಸಬೇಕಾದ
ಸಂಬಂಧಪಟ್ಟ ನ್ಯಾಯಾಲಯದ ಮುಂದೆ ಆರೋಪಿತ ವ್ಯಕ್ತಿಗಳ ವಿರುದ್ದ ಆರೋಪ ಪಟ್ಟಿಯನ್ನು
ಮಂಡಿಸಿದ್ದಾರೆ.ಈ ಅರ್ಜಿದಾರನನ್ನು ಆರೋಪಿ ಸ೦ಖ್ಯೆ 5ಎ೦ದು ದೋಷಾರೋಪಣೆ ಮಾಡಲಾಗಿದೆ.
`;
main(content);
