import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Download from '../components/Download';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <HowItWorks />
            <Download />
        </>
    );
};

export default Home;
