import SignUpForm from '../components/SignUpForm';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Sign Up</h2>
          <SignUpForm />
          <div className='divider'>OR</div>
          <h5>Have an account? <Link className='text-cyan-400 underline' href="/signIn">Sign in here</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
