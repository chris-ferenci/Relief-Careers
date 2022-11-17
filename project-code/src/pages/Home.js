import React from 'react';
import Header from '../components/Header/Header';
import JobCard from '../components/JobCard/JobCard';
import Sidebar from '../components/Sidebar/Sidebar';

function Main(){

    return(
        <>
            <Header />
            <Sidebar />
            <JobCard />
        </>
    )
}

export default Main;