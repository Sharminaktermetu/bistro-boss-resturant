import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import featured from '../../assets/home/featured.jpg'

const Featured = () => {
    const bgImage = {
        backgroundImage: `url(${featured})`,
      };
    return (
        <div style={bgImage} className='text-white pt-8 bg-fixed'>
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className='md:flex justify-center items-center p-24 bg-slate-500 bg-opacity-30'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md: ml-10'>
                    <span>March 20, 2023</span>
                    <p className='uppercase my-4'>WHERE CAN I GET SOME?</p>
                       <p className='my-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline bottom-0 border-b-4'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;