import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Listing = ({ listing }) => {
  const client = useSupabaseClient();
  const user = client.auth.getUser();

  const handleCreateRoom = async (seller_uuid) => {
    console.log('creating...')
    let userID = await user;
    const {error} = await client.from('room').insert({ created_at: ((new Date()).toISOString()).toLocaleString('SG'), seller_uuid, buyer_uuid: userID.data.user.id })
    console.log(error);
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-2">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{listing.name}</h2>
        <p>{listing.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={async () => handleCreateRoom(listing.seller_uuid)}>Chat Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
