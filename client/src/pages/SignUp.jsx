
import {Link} from 'react-router-dom'


function SignUp() {
  return (
    <div className='py-36'>
    <div className='p-5 max-w-sm mx-auto bg-slate-50 rounded-xl'>
      <h1 className='text-3xl text-center font-semibold my-8 mb-10'>Sign Up</h1>
      <form className='flex flex-col gap-4' >
        <input type="text" placeholder='Username' id='Username' className='bg-slate-100 p-2 rounded-lg'/>
        <input type="text" placeholder='Email' id='email' className='bg-slate-100 p-2 rounded-lg'/>
        <input type="text" placeholder='Password' id='password' className='bg-slate-100 p-2 rounded-lg'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-9'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5 '>
          <p>Already have an account?</p>
          <Link to='/sign-in'>
          <span className='text-blue-500'>Sign In</span>
          </Link>
      </div>
    </div>
    </div>
  )
}

export default SignUp
