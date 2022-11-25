import LoginForm from "../components/LoginForm";

const SignInPage = () => (
<div className='flex justify-center items-center h-screen'>
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Login</h2>
        <LoginForm />
      </div>
    </div>
  </div>
)

export default SignInPage;