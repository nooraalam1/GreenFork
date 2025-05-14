import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './firebase/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  function Logout(){
    logOut().then(() => {
      alert("LoggedOut")
}).catch((error) => {
  console.log(error)
});
  }

  return (
<div className="md:flex justify-around items-center ">
  <div className="sm:text-center md:font-bold text-3xl">
    <p className=''>GreenFork</p>
  </div>
  <div className="flex justify-center items-center gap-4">
<div><NavLink to='/'>Home</NavLink></div>
<div><NavLink to='/menu'>Menu</NavLink></div>
<div>
{
  user?<div><button onClick={Logout}>Logout</button></div>:
  <div className='flex justify-center items-center gap-4'>
      <div><NavLink to='/signin'>Login</NavLink></div>
      <div><NavLink to='/register'>Register</NavLink></div>
  </div>
  
}
</div>
<div><NavLink to='/contact'>Contact</NavLink></div>
<div>
  {
    user?<div className='flex justify-center items-center'><button className="btn btn-ghost">Cart</button> <p>{user.displayName}</p> </div>:<></>
  }
</div>
  </div>
</div>
  );
};

export default Navbar;
