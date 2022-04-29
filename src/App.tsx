/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import './App.css';
import InfoBody from './components/Infobody';

const Home = () => {
    return (
        <div className="">
            <div className="bg-color-alt w-100 py-3 d-flex align-items-center justify-content-center">
                <Header />
            </div>
            <InfoBody />
        </div>
    );
};

export default Home;
