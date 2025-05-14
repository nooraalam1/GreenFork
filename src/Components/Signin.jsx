import React, { useContext, useEffect } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from 'react-simple-captcha';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './firebase/AuthProvider';



const Signin = () => {

const {googleSignin,emailPassSignin} = useContext(AuthContext)
  useEffect(() => {
    loadCaptchaEnginge(7);
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const captcha = e.target.captcha.value;

    if (!validateCaptcha(captcha)) {
      alert('Invalid captcha');
      return;
    }

    emailPassSignin(email,password)
    .then((userCredential) => {
      console.log(userCredential.user.displayName)
      alert("Success")
    })
    .catch((error) => {
    alert(error)
    });
  }

  function GoogleLogin(){
    googleSignin()
    .then((userCredential) => {
      console.log(userCredential.user.displayName)
      alert("Welcome")
    })
    .catch((error) => {
    alert(error)
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-indigo-200 to-pink-200 flex items-center justify-center px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-xl w-full max-w-5xl p-8 grid md:grid-cols-2 gap-10">
        
        {/* Left: Form Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="input input-bordered w-full"
            />

            <div className="mt-2">
              <LoadCanvasTemplateNoReload />
              <input
                type="text"
                name="captcha"
                placeholder="Enter the captcha above"
                required
                className="input input-bordered w-full mt-2"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">Login</button>
          </form>

          <div className="divider">OR</div>

          <button onClick={GoogleLogin} className="btn w-full bg-white border border-gray-300 text-black hover:bg-gray-100">
            <svg aria-label="Google logo" width="20" height="20" className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"/>
              <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"/>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"/>
              <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"/>
            </svg>
            Login with Google
          </button>

          <p className="mt-4 text-center text-sm">
            Don’t have an account?{' '}
            <NavLink to="/register" className="text-indigo-600 hover:underline">Register</NavLink>
          </p>
        </div>

        {/* Right: Illustration */}
        <div className="flex items-center justify-center">
          <img
            src="/Img/authentication2.png"
            alt="Login Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
