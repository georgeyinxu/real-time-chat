import InputBar from './InputBar';
import ChatBubbles from './ChatBubbles';
import { useState, useEffect } from 'react';
import supabase from '../supabase';

const Chat = () => {
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
    // const { data: content, error } = await supabase
    //   .from('contents')
    //   .select('*');

    const { data: content, error } = await supabase.from('messages').select(`
    profile_uuid,
    contents (*)
  `);

    if (error) {
      console.log('error', error);
    } else {
      console.log('hello');
      console.log(content);
      setAllMessages(content);
    }
  };

  // const getUser = async () => {
  //   const { data: user } = await supabase.auth.getUser();
  //   console.log(user);

  //   let { data: id, error } = await supabase
  //     .from('messages')
  //     .select('profile_uuid');

  //   console.log(id);

  //   for (let i = 0; i < id.length; i++) {
  //     if (id[i].profile_uuid === user.id) {
  //       setUser(true);
  //       return;
  //     }
  //   }
  // };

  return (
    <div>
      <div className='overflow-y-scroll' style={{ height: '90vh' }}>
        <ChatBubbles msg={allMessages} />
      </div>
      <div className='fixed bottom-2 w-3/4'>
        <div className='flex justify-center'>
          <InputBar msg={allMessages} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
