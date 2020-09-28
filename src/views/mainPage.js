import React, { useContext } from 'react';
import ProductCard from '../components/products.js';
import Jumbotron from '../components/jumbotron';
import BlogArea from '../components/blogArea.js';

const MainPage = props => {
    return (
        <>
            <Jumbotron />
            <ProductCard />
            <BlogArea />
        </>
    )
}

export default MainPage;