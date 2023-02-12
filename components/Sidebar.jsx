import { PlusIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <div className="px-2">
      <div className="flex mt-3 py-2 px-16 text-white border rounded-lg border-white cursor-pointer hover:bg-slate-400 hover:border-slate-400 ease-in-out duration-300">
        <PlusIcon className="h-6 w-6 mr-2" />
        <h1 className="">New chat</h1>
      </div>
    </div>
  );
}

export default Sidebar;
