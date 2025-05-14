import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './firebase/AuthProvider';


const Register = () => {
  
  const {userCreate,googleSignup} = useContext(AuthContext)
  function handleRegi(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    
    userCreate(email,password)
    .then((userCredential) => {
      console.log(userCredential)
      alert("Success")
    })
    .catch((error) => {
    alert(error)
    });



  }

  function SignupWithGoogle(){
    googleSignup()
    .then((userCredential) => {
      alert("Success")
    })
    .catch((error) => {
    alert(error)
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-purple-200 to-pink-200 flex items-center justify-center px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-xl w-full max-w-5xl p-8 grid md:grid-cols-2 gap-10">
        
        {/* Left: Form Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Your Account</h2>

          <form onSubmit={handleRegi} className="space-y-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-full">Register</button>
          </form>

          <div className="divider">OR</div>

          <button onClick={SignupWithGoogle} className="btn w-full bg-white border border-gray-300 text-black hover:bg-gray-100">
            <svg aria-label="Google logo" width="20" height="20" className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"/>
              <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"/>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"/>
              <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"/>
            </svg>
            Register with Google
          </button>

          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <NavLink to="/signin" className="text-cyan-600 hover:underline">Sign In</NavLink>
          </p>
        </div>

        {/* Right: Illustration */}
        <div className="flex items-center justify-center">
          <img
            src="/Img/authentication2.png"
            alt="Register Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
