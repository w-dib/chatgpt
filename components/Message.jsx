/* eslint-disable @next/next/no-img-element */
import { DocumentData } from "firebase/firestore";

function Message(message) {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 ${isChatGPT && "bg-slate-200"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p className="">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
