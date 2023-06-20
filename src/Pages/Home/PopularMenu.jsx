import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ManuItem from '../../Shared/ManuItem/ManuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular =menu.filter(item=> item.category =='popular')
    return (
        <div className='py-10'>
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'} 
            >     
            </SectionTitle>
            <div className='md:grid grid-cols-2 gap-10'>
            {
                popular.map(item=><ManuItem key={item._id} item={item}></ManuItem>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;