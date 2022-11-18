import InputBar from './InputBar';
import ChatBubbles from './ChatBubbles';

const Chat = () => {

  return (
    <div>
      <div className='overflow-y-scroll' style={{ height: '90vh' }}>
        <ChatBubbles />
      </div>
      <div className='fixed bottom-2 w-3/4'>
        <div className='flex justify-center'>
          <InputBar />
        </div>
      </div>
    </div>
  );
};

export default Chat;
