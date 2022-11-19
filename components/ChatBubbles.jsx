import supabase from '../supabase';
import { useEffect, useState, useRef, use } from 'react';

const ChatBubbles = (messages) => {
  const [user, setUser] = useState('');
  const bottomRef = useRef(null);
  const allMessages = messages.msg;

  useEffect(() => {
    getUser();
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user.id)
  };


  return (
    <div>
      <div className='bg-slate-700 items-center'>
        {allMessages.map((msg) => (
          // msg.userid === 123 to change to id of logged in user
          <div
            className={
              msg.profile_uuid === user
                ? 'flex justify-end mx-5'
                : 'flex justify-start mx-5'
            }
            key={msg.contents.content_id}
          >
            <div
              className={
                msg.profile_uuid === user
                  ? 'bg-info rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl w-auto my-3'
                  : 'bg-base-300 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl w-auto my-3'
              }
            >
              <div className='card-body py-4 px-6'>
                <p className='min-w-fit max-w-xs'>{msg.contents.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatBubbles;
