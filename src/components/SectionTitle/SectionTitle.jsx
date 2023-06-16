import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-8'>
            <p className='text-yellow-600'>{subHeading}</p>
            <h2 className='text-4xl border-y-4 uppercase py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;