/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import './App.css';


function InfoBody() {
    return (<div className="body w-100 d-flex justify-content-center">
                <div className="container mw-1100 mx-3 mx-lg-5 bg-color-secondary">
                    text
                </div>
            </div>);
}


const Home = () => {
    return (
        <div className="">
            <div className="bg-danger w-100 py-3 d-flex align-items-center justify-content-center">
                <Header />
            </div>
           <InfoBody />
        </div>
    );
};

export default Home;
