import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const FoodCard = ({ item }) => {
  const { image, name, price, recipe,_id } = item;
  const {user}=useContext(AuthContext)

  const navigate=useNavigate();
  const location=useLocation();
  const[cart,refetch]=useCart();

  const handleCart=(item)=>{
    
  const orderItem ={itemId:_id, name, image,price,email:user?.email}
    if(user){
      fetch('http://localhost:5000/cart',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(orderItem)
      })
      .then(res=>res.json())
      .then(data=>{
        if (data.insertedId) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:`${name} added to cart`,
            showConfirmButton: false,
            timer: 1500
          })
        }
       
      })
      
    }
    else{
      Swal.fire({
        title: 'Log in first',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log in!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      })
    }
  }
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure><img src={image} alt="foods" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p className='absolute right-0 bg-slate-600 px-2 rounded-sm text-white'>{price}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleCart(item)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;