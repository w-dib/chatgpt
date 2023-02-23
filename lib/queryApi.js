import openai from "./chatgpt";

const query = async (prompt, chatId, model) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      max_tokens: 1000,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => `Error: ${err.message}`);

  return res;
};

export default query;
