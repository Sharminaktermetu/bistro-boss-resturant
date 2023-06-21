import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: user = [], refetch } = useQuery(['user'], async () => {
        const response = await fetch('http://localhost:5000/user')
        return response.json()
    })

    const handleAdminRole = (single) => {
        fetch(`http://localhost:5000/user/admin/${single._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${single.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })

    }

    return (
        <div>
            <h3 className='font-bold text-3xl uppercase'>all users: {user.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((single, index) => <tr className="bg-base-200" key={single._id}>
                            <th>{index + 1}</th>
                            <td>{single.name}</td>
                            <td>{single.email}</td>
                            <td>{single.role === 'admin' ? 'admin' :
                                <button className="btn" onClick={() => handleAdminRole(single)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            }</td>
                            <td><button className="btn btn-circle btn-outline btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;