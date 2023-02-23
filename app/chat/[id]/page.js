"use client";
import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import { db } from "@/lib/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

function ChatPage({ params: { id } }) {
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      {/* Chat */}
      <Chat chatId={id} />
      {/* Chat Input */}
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
