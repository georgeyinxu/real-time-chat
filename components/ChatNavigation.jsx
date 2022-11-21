import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const ChatNavigation = () => {
  const [rooms, setRooms] = useState([]);
  const [userID, setUserID] = useState('');
  const client = useSupabaseClient();
  const user = client.auth.getUser();

  useEffect(() => {
    const fetchUserID = async () => {
      const userDetails = await user;
      setUserID(userDetails.data.user.id);
    }

    fetchUserID();

    client
      .from('room')
      .select()
      .then((res) => {
        setRooms(res.data);
        console.log(rooms)
      });
  }, []);

  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
          {
            rooms.map(room => {
              return (
                <li key={room.id}>
                <a>Room {room.room_id}</a>
              </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ChatNavigation;
