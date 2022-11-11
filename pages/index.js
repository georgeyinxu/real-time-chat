import ChatNavigation from '../components/ChatNavigation';
import Chat from '../components/Chat';

const HomePage = () => (
<div className='h-screen bg-slate-700 grid grid-cols-4'>
  <ChatNavigation />

  <div class="col-span-3 relative">
    <Chat />
  </div>
</div>
);

export default HomePage;
