import { useState } from "react";
import supabase from "../supabase";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    })

    console.log(user)
  }

  return (
    <form>
      <div className='form-control w-full max-w-xs mb-4'>
        <label className='label'>
          <span className='label-text'>Email</span>
        </label>
        <input
          type='email'
          placeholder='abc@gmail.com'
          className='input input-bordered w-full max-w-xs'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-control w-full max-w-xs'>
        <label className='label'>
          <span className='label-text'>Password</span>
        </label>
        <input
          type='password'
          placeholder=''
          className='input input-bordered w-full max-w-xs'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='btn btn-active btn-primary float-right mt-4' onClick={event => handleSubmit(event)}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
