import React, { useContext } from 'react';
import BlogArea from '../components/blogArea.js';
import StoreCall from '../components/callToStore';

const MainPage = props => {
    return (
        <>
            <StoreCall />
            <BlogArea />
        </>
    )
}

export default MainPage;