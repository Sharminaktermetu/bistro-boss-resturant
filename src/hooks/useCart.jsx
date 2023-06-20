import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
    const {user}=useContext(AuthContext)
    const { refetch, data:cart=[], error } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            return res.json()
        }
       
      })
      return [cart,refetch]
};

export default useCart;