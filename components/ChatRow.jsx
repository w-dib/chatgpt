/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { db } from "@/lib/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

function ChatRow({ id }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [isActive, setIsActive] = useState(false);
  const [messages] = useCollection(
    collection(db, "users", session.user.email, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;
    setIsActive(pathname?.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email, "chats", id));
    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow mb-2 md:mb-0 justify-center ${
        isActive && "bg-slate-400/25 text-white"
      }`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 md:inline-flex truncate">
        {messages?.docs[messages.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-300 hover:text-red-500"
      />
    </Link>
  );
}

export default ChatRow;
