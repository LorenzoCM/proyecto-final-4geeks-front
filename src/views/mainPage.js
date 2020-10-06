import React, { useContext } from 'react';
import ProductCard from '../components/products.js';
import Jumbotron from '../components/jumbotron';
import BlogArea from '../components/blogArea.js';
import StoreCall from '../components/callToStore';

const MainPage = props => {
    return (
        <>
            <StoreCall />
            <ProductCard />
            <BlogArea />
        </>
    )
}

export default MainPage;