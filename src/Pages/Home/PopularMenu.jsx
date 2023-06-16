import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ManuItem from '../../Shared/ManuItem/ManuItem';

const PopularMenu = () => {
    const [menu, setMenu] =useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems =data.filter(item=> item.category=='popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <div className='py-10'>
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'} 
            >     
            </SectionTitle>
            <div className='md:grid grid-cols-2 gap-10'>
            {
                menu.map(item=><ManuItem item={item}></ManuItem>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;