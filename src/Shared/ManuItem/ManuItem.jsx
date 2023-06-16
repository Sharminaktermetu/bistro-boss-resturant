import React from 'react';

const ManuItem = ({item}) => {
    const {image, name, price,recipe}=item;
    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[104px]' src={image} alt="" />
            <div>
            <p className='uppercase'>{name}------------</p>
            <p className='text-yellow-400'>{price}</p>
            </div>
            <p>{recipe}</p>
        </div>
        
    );
};

export default ManuItem;