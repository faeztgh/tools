import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function startQuestioning() {
    rl.question("Input Text (or press 'qq' to exit): ", (answer: string) => {
        if (answer === "qq") {
            rl.close();
            console.log("Goodbye!");
        } else {
            let result: string = "";
            for (let i = 0; i < answer.length; i++) {
                const currentCharacter = answer[i];

                // Check if character is in English or Farsi map and translate accordingly
                if (engToFarsiMap[currentCharacter]) {
                    result += engToFarsiMap[currentCharacter];
                } else if (farsiToEngMap[currentCharacter]) {
                    result += farsiToEngMap[currentCharacter];
                } else {
                    result += currentCharacter;
                }
            }

            console.log(`Output Text: ${result}`);
            startQuestioning(); // ask again after providing output
        }
    });
}

startQuestioning();

// English to Farsi mapping
const engToFarsiMap: { [key: string]: string } = {
    q: "ض",
    w: "ص",
    e: "ث",
    r: "ق",
    t: "ف",
    y: "غ",
    u: "ع",
    i: "ه",
    o: "خ",
    p: "ح",
    "[": "ج",
    "]": "چ",
    a: "ش",
    s: "س",
    d: "ی",
    f: "ب",
    g: "ل",
    h: "ا",
    j: "ت",
    k: "ن",
    l: "م",
    ";": "ک",
    "'": "گ",
    z: "ظ",
    x: "ط",
    c: "ز",
    v: "ر",
    b: "ذ",
    n: "د",
    m: "پ",
    ",": "و",
    ".": "،",
    "/": "؟",
    "`": "÷",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
    "0": "۰",
    "-": "-",
    "=": "×",
};

// Farsi to English mapping
const farsiToEngMap: { [key: string]: string } = Object.entries(
    engToFarsiMap
).reduce((accumulator: { [key: string]: string }, [key, value]) => {
    accumulator[value] = key;
    return accumulator;
}, {} as { [key: string]: string });
