import React, { useState } from 'react';
import PageCover from '../../Shared/PageCover/PageCover';
import coverImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const categorys=['salad', 'pizza','soup','dessert','drinks']
    const {category}=useParams()
    console.log(category);
    const initialIndex =categorys.indexOf(category)
    const [tabIndex, setTabindex] = useState(initialIndex)
    const [menu] = useMenu()
    
    const dessert = menu.filter(item => item.category == 'dessert')
    const soup = menu.filter(item => item.category == 'soup')
    const pizza = menu.filter(item => item.category == 'pizza')
    const salad = menu.filter(item => item.category == 'salad')
    const drinks = menu.filter(item => item.category == 'drinks')
    return (
        <div>
            <PageCover imgUrl={coverImg} title={'Order food'}></PageCover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                   
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
             
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;