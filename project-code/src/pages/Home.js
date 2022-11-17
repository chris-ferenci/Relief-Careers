import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import JobBoard from '../components/JobBoard/JobBoard';


function Main(){

    return(
        <>
            <Header />
            <Sidebar />
            <JobBoard />
        </>
    )
}

export default Main;