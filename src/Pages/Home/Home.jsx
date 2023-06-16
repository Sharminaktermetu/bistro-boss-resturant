import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
        </div>
    );
};

export default Home;