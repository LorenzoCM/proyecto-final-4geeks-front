import React from 'react';
import ProductCard from './products.js';
import Jumbotron from './jumbotron';
import BlogArea from './blogArea.js';

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