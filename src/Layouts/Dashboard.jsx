import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin =true;
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul
                    className="menu p-4 w-80 h-full text-base-content bg-[#D1A054]"

                >
                    {/* Sidebar content here */}
                    {isAdmin?
                    <>
                        <li><NavLink to='dashboard/menu'>Admin menu</NavLink></li>
                    <li><NavLink to='dashboard/reverstation'>Add Items</NavLink></li>
                    <li><NavLink to='dashboard/reverstation'>Manage Items</NavLink></li>
                         
                    <li><NavLink to='/dashboard/addreview'>Manage Booking</NavLink></li>
                    <li><NavLink to='/dashboard/allusers'>ALL Users</NavLink></li>
                    </>:
                    
                    <>
                    <li><NavLink to='dashboard/menu'>User menu</NavLink></li>
                    <li><NavLink to='dashboard/reverstation'>Reverstation</NavLink></li>
                    <li><NavLink to='dashboard/reverstation'>Payment JIstory</NavLink></li>
                    <div className='flex'>
                        <li><NavLink to='/dashboard/mycart'>My Cart</NavLink></li>
                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary"> {cart?.length || 0}</span>
                            <button className="bg-slate-200 px-3 py-2 rounded-lg">Items</button>
                        </div>
                    </div>
                    <li><NavLink to='/dashboard/addreview'>Add review</NavLink></li>
                    <li><NavLink to='/booking'>My booking</NavLink></li>
                    </>}
                    
                    <div className='divider'></div>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/order/salad'>Order Food</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;