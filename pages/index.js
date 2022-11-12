import ChatNavigation from '../components/ChatNavigation';
import Chat from '../components/Chat';
import Header from '../components/Header';
import ImageModal from '../components/ImageModal';
import FileModal from '../components/FileModal';
import OfferModal from '../components/OfferModal';

const HomePage = () => (
  <div>
    <Header />
    <div className='h-screen bg-slate-700 grid grid-cols-4'>
      <ChatNavigation />

      <div class='col-span-3 relative'>
        <Chat />
      </div>
      <ImageModal />
      <FileModal />
      <OfferModal />
    </div>
  </div>
);

export default HomePage;
