import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'; // Make sure the path to Navbar is correct
import VideoSection from './video';
import Main1 from './main1';
import Loading from './logo';

const App = () => {
    return (
        <Router>
                            <Loading/>
            <div>

                <Navbar /> 
    <VideoSection/>
    <Main1/>

            </div>
        </Router>
    );
};

export default App;
