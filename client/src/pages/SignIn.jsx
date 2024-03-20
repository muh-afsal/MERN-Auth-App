import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      setError(false)
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }); 
      const data = await res.json();
      setLoading(false)
      if(data.success===false){
        setError(true)
         return;
      }
      // navigate('/');
    } catch (error) {
       setLoading(false)
       setError(true)
    }
  };

  return (
    <div className="py-36">
      <div className="p-5 max-w-sm mx-auto bg-blue-200 rounded-xl">
        <h1 className="text-3xl text-center font-semibold my-8 mb-10">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-2 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-2 rounded-lg"
            onChange={handleChange}
          />
          <button disabled={loading} className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-9">
            {loading?'Loading...' :'Sign In'}
          </button>
        </form>
        <div className="flex gap-2 mt-5 ">
          <p>Don't have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </div>
        <p className="text-red-600 mt-5">{error && 'something went wrong!'}</p>
      </div>
    </div>
  );
}

export default SignIn;
