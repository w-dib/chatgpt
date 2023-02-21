import query from "@/lib/queryApi";

export default async function handler(req, res) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ error: "Missing prompt" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ error: "Missing chatId" });
    return;
  }

  //ChatGPT Query

  const response = await query(prompt, chatId, model);

  const message = {
    text: response || "chatGPT was unable to respond.",
  };
  res.status(200).json({ name: "John Doe" });
}
