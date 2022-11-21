import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import Listing from '../../components/Listing';

const Main = () => {
  const client = useSupabaseClient()
  const [listings, setListings] = useState([])
  useEffect(() => {
    client.from('listings').select().then((res) => { setListings(res.data) })
  }, [])
  
  return (
    <div>
      <h2 className="text-center font-bold text-xl mb-2">Marketplace Mock Up</h2>
      <div className="flex justify-center">
        {listings.map(listing =>
          <Listing key={listing.id} listing={listing} />
        )}
      </div>
    </div>
  )
}

export default Main;