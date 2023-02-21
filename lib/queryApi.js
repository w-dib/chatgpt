import openai from "./chatgpt";

const query = async (prompt, model) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      maxTokens: 1000,
      temperature: 0.9,
      topP: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => `chatGPT was unable to respond. Error: ${err.message}`);

  return res;
};

export default query;
