import { supabase } from '../../supabase';

export default async function handler(req, res) {
  const { data, error, status } = await supabase
    .from('listings')
    .select('*')
    
  await res.status(200).send(data)
}