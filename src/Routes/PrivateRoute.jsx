import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location =useLocation()

    if(loading){
    return (<div className='w-full m-auto text-center'>
         <span className="loading loading-ring loading-lg"></span>
    </div>);
    }
    if(user?.email){
        return children;
    }

    return  <Navigate to="/login" replace state={{ from: location }}></Navigate>
};

export default PrivateRoute;