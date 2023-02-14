"use client";
import { db } from "@/lib/firebase";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
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
    query(
      collection(db, "users", session.user.email, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );

  useEffect(() => {
    console.log("pathname", pathname);
    console.log("id", id);
    console.log("isActive", pathname.includes(id));
    if (!pathname) return;
    setIsActive(pathname?.includes(id));
  }, [pathname]);

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${isActive && "bg-slate-400/75"}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon className="h-5 w-5 text-gray-300 hover:text-red-700" />
    </Link>
  );
}

export default ChatRow;
