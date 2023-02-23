"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "react-hot-toast";

function ChatInput({ chatId }) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const model = "text-davinci-003";

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");
    const message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user.email,
        name: session?.user.name,
        avatar: `https://ui-avatars.com/api/?name=${session?.user.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("ChatGPT has responded!", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-inherit sticky bottom-2 md:bottom-3 text-gray-600 rounded-lg text-sm outline-none mx-2 z-40">
      <form
        onSubmit={sendMessage}
        className="p-5 space-x-5 flex bg-white rounded-lg shadow-sm"
      >
        <input
          className="flex-1 focus:outline-none border-none bg-transparent disabled:cursor-not-allowed disabled:text-gray-200"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="type your message here..."
          disabled={!session}
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#11A37F] hover:opacity-75 text-white font-bold px-4 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Model selection */}</div>
    </div>
  );
}

export default ChatInput;
