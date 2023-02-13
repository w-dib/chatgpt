"use client";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useSession, signOut } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="px-2 flex flex-col h-screen justify-between">
      <div>
        {/* New Chat */}
        <div className="flex justify-center mt-3 py-2 px-16 text-white border rounded-lg border-white cursor-pointer hover:bg-slate-400 hover:border-slate-400 ease-in-out duration-300">
          <PlusIcon className="h-6 w-6 mr-2" />
          <h1 className="">New chat</h1>
        </div>
        {/* Modal selection */}
      </div>

      {/* Log out button */}
      <div
        onClick={() => signOut()}
        className="flex justify-center mx-auto mb-3 py-2 px-16 text-white cursor-pointer"
      >
        <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-2" />
        <h1 className="">Log out</h1>
      </div>
    </div>
  );
}

export default Sidebar;
