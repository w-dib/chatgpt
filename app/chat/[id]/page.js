import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

function ChatPage({ params: { id } }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat */}
      <Chat chatId={id} />
      {/* Chat Input */}
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
