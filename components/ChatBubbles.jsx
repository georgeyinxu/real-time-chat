const messages = [
  { id: 1, userid: 123, message: 'Hi' },
  { id: 2, userid: 123, message: 'I am interested in the item.' },
  {
    id: 3,
    userid: 123,
    message: 'Could we negotiate on the cost of the items?',
  },
  {
    id: 4,
    userid: 456,
    message:
      'Hello! What price point would you be comfortable with paying? If a good price is offered, we can deal.',
  },
  { id: 5, userid: 123, message: 'Is SGD10,000 ok?' },
];

const ChatBubbles = () => (
  <div>
    <div className='bg-slate-50 w-[700px] items-center overflow-y-auto h-5/6 xs:h-screen'>
      {messages.map((msg) => (
        // msg.userid === 123 to change to id of logged in user
        <div
          className={
            msg.userid === 123
              ? 'flex justify-end mx-5'
              : 'flex justify-start mx-5'
          }
          key={msg}
        >
          <div
            className={
              msg.userid === 123
                ? 'bg-info rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl w-auto my-3'
                : 'bg-base-300 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl w-auto my-3'
            }
          >
            <div className='card-body py-4 px-6'>
              <p className='min-w-fit max-w-xs'>{msg.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ChatBubbles;
