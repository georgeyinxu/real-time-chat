import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Listing = ({ listing }) => {
  const client = useSupabaseClient();
  const user = client.auth.getUser();

  const handleCreateRoom = async (roomID) => {
    console.log(await user)
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
          <button className="btn btn-primary" onClick={async () => handleCreateRoom(listing.id)}>Chat Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
