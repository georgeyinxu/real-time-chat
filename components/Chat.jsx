import InputBar from './InputBar';
import ChatBubbles from './ChatBubbles';

const Chat = () => (
  <div>
    <div className='absolute bottom-20 w-full'>
      <ChatBubbles />
    </div>
    <div className='fixed bottom-2 w-3/4'>
      <div className='flex justify-center'>
        <InputBar />
      </div>
    </div>
  </div>
);

export default Chat;
