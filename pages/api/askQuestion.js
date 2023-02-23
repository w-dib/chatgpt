import { adminDb } from "@/lib/firebaseAdmin";
import query from "@/lib/queryApi";
import admin from "firebase-admin";

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
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
