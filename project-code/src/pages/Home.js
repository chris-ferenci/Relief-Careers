import React, { createContext, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import JobBoard from '../components/JobBoard/JobBoard';


import './home.css';


export const CountryContext = createContext();



function Main() {

        
    const [activeCountry, setActiveCountry] = useState('United States');
    const [jobs, setJobs] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [favorites, setFavorites] = useState([]);

    function hitAPI () {

        let jobs_data = [];
        fetch('https://api.reliefweb.int/v1/jobs?appname=apidoc&profile=list&preset=latest&filter[field]=country&filter[value]=' + activeCountry).then((response) => response.json()).then((json_item) => {
            json_item['data'].forEach((item) => {
                jobs_data.push({
                    id: item['id'],
                    created_date: item['fields']['date']['created'],
                    closed_date: item['fields']['date']['closing'],
                    job_title: item['fields']['title'],
                    countries: item['fields']['country'],
                    sources: item['fields']['source'],
                    url: item['fields']['url'],
                    href: item['href']
                });
            });

            setJobs(jobs_data);
            return jobs;
        });

        
    }

    useEffect(() => {
        hitAPI();
    }, [activeCountry]);


    return(
        <React.StrictMode>
            <div id='grid-container'>
                <CountryContext.Provider value={[activeCountry, setActiveCountry, jobs, setJobs, searchQuery, setSearchQuery, favorites, setFavorites]}>
                    <Header />
                    <Sidebar />
                    <JobBoard/>
                </CountryContext.Provider>
            </div>
        </React.StrictMode>
    )
}

export default Main;


