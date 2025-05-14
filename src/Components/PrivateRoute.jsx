import React, { useContext } from 'react';
import { AuthContext } from './firebase/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    
    if(user){
        return children;
    }
    if(loading){
        return <div><span className="loading loading-spinner loading-xl"></span></div>
    }

    return (
        <Navigate to='/signin'></Navigate>
    );
};

export default PrivateRoute;