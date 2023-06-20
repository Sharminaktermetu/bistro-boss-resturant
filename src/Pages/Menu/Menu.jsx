import React from 'react';
import { Helmet } from 'react-helmet';
import PageCover from '../../Shared/PageCover/PageCover';
import imageUrl from '../../assets/menu/menu-bg.png'
import dessertUrl from '../../assets/menu/dessert-bg.jpeg'
import saladUrl from '../../assets/menu/salad-bg.jpg'
import soupUrl from '../../assets/menu/soup-bg.jpg'
import pizzaUrl from '../../assets/menu/pizza-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
    const [menu]= useMenu()
    const popular =menu.filter(item=>item.category=='popular')
    const dessert =menu.filter(item=> item.category =='dessert')
    const soup =menu.filter(item=> item.category =='soup')
    const pizza =menu.filter(item=> item.category =='pizza')
    const salad =menu.filter(item=> item.category =='salad')

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu </title>
            </Helmet>
           <PageCover imgUrl={imageUrl} title={'Our menu'}></PageCover>
            <SectionTitle subHeading={'---Dont miss---'} heading="TODAY'S OFFER"></SectionTitle>
            
           <MenuCategory items={popular}></MenuCategory>
           <MenuCategory items={pizza} title='pizza' imgUrl={pizzaUrl}></MenuCategory>

           <MenuCategory items={dessert} title='dessert' imgUrl={dessertUrl}></MenuCategory>

           <MenuCategory items={salad} title='salad' imgUrl={saladUrl}></MenuCategory>
           <MenuCategory items={soup} title='soup' imgUrl={soupUrl}></MenuCategory>
        </div>
    );
};

export default Menu;