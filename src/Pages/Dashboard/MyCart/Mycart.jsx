import React from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const Mycart = () => {
    const [cart,refetch]=useCart()
    console.log(cart);
    const total =cart.reduce((sum,item)=>item.price+sum, 0)
    const handleDelete=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/cart/${item._id}`,{
                method:'DELETE',
                
             })
             .then(res=>res.json())
             .then(data=>{
                refetch()
                if (data.detetedCount>0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }
    return (
        <div>
          
            <div className='flex tems-center space-x-10'>
                <h3 className='text-3xl font-bold'>Total items :{cart.length}</h3>
                <h3 className='text-3xl font-bold'>Total price :{total}</h3>
                <button className='btn btn-sm bg-[#D1A054]'>pay</button>
            </div>
            {/*table starts here  */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Food</th>
        <th>Favorite Color</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {cart.map((item,index)=><tr
        key={item._id}
        >
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
          
              <div className="text-sm opacity-50">{item.name}</div>
            </div>
          </div>
        </td>
        <td>
       
      
          <span className="badge badge-ghost badge-sm">{item.email}</span>
        </td>
        <td>{item.price}</td>
        <th>
          <button onClick={()=>handleDelete(item)} className="btn bg-red-300 btn-xs">DELETE</button>
        </th>
      </tr>)}
 
    </tbody>

    
  </table>
</div>

        </div>
    );
};

export default Mycart;