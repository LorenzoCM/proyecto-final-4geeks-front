import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyFavourites = props => {
    return (
        <div>
            <h5 className="mt-5 mb-3">Mis productos favoritos</h5 >
            <div className="card-deck mt-5 w-100 d-flex flex-row flex-nowrap overflow-auto">
                <div className="card card-thumbnail">
                    <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card card-thumbnail">
                    <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card card-thumbnail">
                    <img src="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyFavourites;