"use client";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { PlusIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";

function Sidebar() {
  const { data: session } = useSession();
  const router = useRouter();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session.user.email, "chats"),
      {
        userId: session.user.email,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };

  const [chats] = useCollection(
    session &&
      query(
        collection(db, "users", session.user.email, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="px-2 flex flex-col md:h-screen max-w-md">
      <div className="md:flex-1">
        {/* START TOP DIV */}
        {/* New Chat */}

        {/* Mobile View */}
        <div className="flex h-12 items-center justify-between md:hidden">
          <Bars3Icon
            className="h-6 w-6 mr-2 text-white hover:text-gray-300"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
          />
          <PlusIcon
            onClick={createNewChat}
            className="h-6 w-6 mr-2 text-white hover:text-gray-300"
          />
        </div>

        {/* Desktop View */}
        <div
          onClick={createNewChat}
          className="hidden md:flex justify-center my-3 py-2 px-16 text-white border rounded-lg border-white cursor-pointer hover:bg-slate-400 hover:border-slate-400 ease-in-out duration-300"
        >
          <PlusIcon className="h-6 w-6 mr-2" />
          <h1 className="">New chat</h1>
        </div>
        {/* Model selection */}

        {/* Map through chat rows */}
        {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} users={chat.data().users} />
        ))}
      </div>
      {/* END TOP DIV */}

      {/* START BOTTOM DIV */}

      {/* Mobile View */}

      {/* Desktop View */}
      {/* Log out button */}
      <div
        onClick={() => signOut()}
        className="hidden md:flex justify-center mx-auto mb-9 py-2 px-16 text-white cursor-pointer"
      >
        <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-2" />
        <h1 className="">Log out</h1>
      </div>
      {/* END BOTTOM DIV */}
    </div>
  );
}

export default Sidebar;
