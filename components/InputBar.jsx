import { AiOutlineSend, AiOutlinePaperClip } from 'react-icons/ai';
import { useState } from 'react';
import supabase from '../supabase';

const InputBar = () => {
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(messages);

    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);

    // INSERT a row to content table from column 'text'
    // doing this first cos file and images are complicated
    const { data, error: insert_err } = await supabase
      .from('contents')
      .insert([{ text: messages }]);
    if (insert_err) {
      console.log('error', insert_err);
    } else {
      console.log('no error');
    }

    // GET all content_id
    let { data: content_id, error: select_err } = await supabase
      .from('contents')
      .select('content_id');
    if (select_err) {
      console.log('error', select_err);
    } else {
      console.log('no error');
    }

    // INSERT content_id into 'messages' table
    const { msg, error: insertMsg_err } = await supabase
      .from('messages')
      .insert([
        {
          content: content_id[content_id.length - 1].content_id,
          profile_uuid: user.id,
        },
      ]);

    if (insertMsg_err) {
      console.log('error', insertMsg_err);
    } else {
      console.log('no error');
      setMessages('');
    }
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex'>
        <input
          value={messages}
          type='text'
          placeholder='Type here'
          className='input input-bordered input-primary w-max max-w-sm'
          onChange={(e) => {
            setMessages(e.target.value);
          }}
        />
        <div className='dropdown dropdown-top mx-4'>
          <label tabIndex={0} className='btn btn-active btn-ghost'>
            <AiOutlinePaperClip size={24} />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a href='#image-modal' className='btn'>
                Upload Image
              </a>
            </li>
            <li className='my-1'>
              <a href='#file-modal' className='btn'>
                Upload File
              </a>
            </li>
            <li>
              <a href='#offer-modal' className='btn'>
                Make an offer
              </a>
            </li>
          </ul>
        </div>
        <button className='btn btn-active btn-ghost'>
          <AiOutlineSend size={24} />
        </button>
      </div>
    </form>
  );
};

export default InputBar;
