import React, { createContext, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import JobBoard from '../components/JobBoard/JobBoard';


export const CountryContext = createContext();



function Main() {

        
    const [activeCountry, setActiveCountry] = useState('United States');
    const [jobs, setJobs] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function hitAPI () {

        let jobs_data = [];
        fetch('https://api.reliefweb.int/v1/jobs?appname=apidoc&profile=list&preset=latest&filter[field]=country&filter[value]=' + activeCountry).then((response) => response.json()).then((json_item) => {
            json_item['data'].forEach((item) => {
                console.log(item);
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
    }, []);

    return(
        <>
            <CountryContext.Provider value={[activeCountry, setActiveCountry, jobs, setJobs, searchQuery, setSearchQuery]}>
                <Header />
                <Sidebar />
                <JobBoard />
            </CountryContext.Provider>
        </>
    )
}

export default Main;


