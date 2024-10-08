const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: "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" });

const result = document.getElementById("results");

async function main() {
  const chatCompletion = await getGroqChatCompletion();
  result.textContent = (chatCompletion.choices[0]?.message?.content || "");
}


const equation = "2x^2 + 4x + 5 = 0"

async function getGroqChatCompletion() {
  return groq.chat.completions.create({ 
    messages: [
      {
        role: "user",
        content: "Solve this equation step by step, give the answer in definite value" + equation,
      },
    ],
    model: "llama3-8b-8192",
  });
}

main();   

process.noDeprecation = true;
