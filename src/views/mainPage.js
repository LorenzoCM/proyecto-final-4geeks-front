import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BlogArea from '../components/blogArea.js';
import StoreCall from '../components/callToStore';
import { Context } from '../store/appContext.js';

const MainPage = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <StoreCall />
            <BlogArea />
        </>
    )
}

export default MainPage;