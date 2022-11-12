import InputBar from "./InputBar";
import ChatBubbles from "./ChatBubbles";
import ChatHeader from './ChatHeader';

const Chat = () => (
  <div>
    <ChatHeader />
    <div className="absolute bottom-20 w-full">
      <ChatBubbles />
    </div>
    <div className="fixed bottom-2 w-3/4">
      <div className="flex justify-center">
        <InputBar />
      </div>
    </div>
  </div>
)

export default Chat;