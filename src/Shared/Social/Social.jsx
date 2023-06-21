import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const {googleSign}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()  

     let from = location.state?.from?.pathname || "/";

    const handleGoogle=()=>{
        googleSign()
        .then((result)=>{
            const loggedUser =result.user;
            console.log(loggedUser);
            const savedUser= {name:loggedUser.displayName, email:loggedUser.email}
            fetch('http://localhost:5000/user',{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(savedUser)
            })

              .then(res => res.json())
              .then(() => {
                 navigate(from, { replace: true });
                
              })
           
        })
        .catch((error)=>{console.log(error)})
    }
    return (
        <button onClick={handleGoogle} className="btn btn-circle btn-outline">
        G
      </button>
    );
};

export default Social;