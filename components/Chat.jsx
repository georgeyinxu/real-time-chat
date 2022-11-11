import InputBar from "./InputBar";
import ChatBubbles from "./ChatBubbles";

const Chat = () => (
  <div>
    <div className="absolute bottom-20 w-full">
      <ChatBubbles />
    </div>
    <div className="absolute bottom-2 left-1/4 w-1/2">
      <div className="flex justify-center">
        <InputBar />
      </div>
    </div>
  </div>
)

export default Chat;