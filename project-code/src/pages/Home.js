import React, { createContext, useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import JobBoard from '../components/JobBoard/JobBoard';


export const CountryContext = createContext();

function Main(){
    
    const [activeCountry, setActiveCountry] = useState('United States');

    return(
        <>
            <CountryContext.Provider value={[activeCountry, setActiveCountry]}>
                <Header />
                <Sidebar />
                <JobBoard />
            </CountryContext.Provider>
        </>
    )
}

export default Main;