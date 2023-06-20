import React from 'react';
import ManuItem from '../../Shared/ManuItem/ManuItem';
import PageCover from '../../Shared/PageCover/PageCover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, imgUrl,title}) => {
    return (
        <div>
            {
                title &&  <PageCover imgUrl={imgUrl} title={title}></PageCover>
            }
            <div className='md:grid grid-cols-2 gap-10 my-16'>
            {
                items.map(item=><ManuItem
                     key={item._id}
                     item={item}                     
                     >
                     </ManuItem>)
            }
            
            </div>
            <div className='text-center mb-12'>
           <Link to={`/order/${title}`}>
           <button className='btn btn-outline bottom-0 border-b-4'>Read More</button>
           </Link>
            </div>
        </div>
    );
};

export default MenuCategory;