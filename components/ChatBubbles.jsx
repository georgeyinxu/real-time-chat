import supabase from '../supabase';
import { useEffect, useState } from 'react';

const ChatBubbles = () => {
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    fetchMessages();

    supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'contents' },
        (payload) => {
          console.log('Change received!', payload);
          setAllMessages((current) => [...current, payload.new]);
        }
      )
      .subscribe();
  }, []);

  const fetchMessages = async () => {
    const { data: content, error } = await supabase
      .from('contents')
      .select('*');

    if (error) {
      console.log('error', error);
    } else {
      console.log('hello');
      console.log(content);
      setAllMessages(content);
    }
  };

  return (
    <div>
      <div className='bg-slate-700 items-center overflow-y-auto xs:h-screen'>
        {allMessages.map((msg) => (
          // msg.userid === 123 to change to id of logged in user
          <div
            className={
              msg.userid === 123
                ? 'flex justify-end mx-5'
                : 'flex justify-start mx-5'
            }
            key={msg.content_id}
          >
            <div
              className={
                msg.userid === 123
                  ? 'bg-info rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl w-auto my-3'
                  : 'bg-base-300 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl w-auto my-3'
              }
            >
              <div className='card-body py-4 px-6'>
                <p className='min-w-fit max-w-xs'>{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBubbles;
