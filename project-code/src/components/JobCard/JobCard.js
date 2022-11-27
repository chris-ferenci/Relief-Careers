import '../JobCard/jobcard.css';
import { CountryContext } from '../../pages/Home';
import { useContext } from 'react';

function JobCard (props) {

    const [activeCountry, setActiveCountry] = useContext(CountryContext);

    return(

        <article className='job-card'>
            <h1> {fetchJobTitle(activeCountry, props.job_number)} </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
                {}
            </p>
            {fetchJobTitle(activeCountry, props.job_num)} 
            <button className='btn btn-primary'>Apply</button>
        </article>

    )
}

function fetchJobTitle (country, job_number) {

    const fetch_url = 'https://api.reliefweb.int/v1/jobs?appname=apidoc&filter[field]=country&filter[value]=' + country;
    let ret = "hello";

    fetch(fetch_url).then(item => item.json().then((json_item) => {
        console.log(json_item['data'][0]['fields']['title'].toString());
        // return json_item['data'][0]['fields']['title']['5'].toString();
    }));
    

    console.log(ret, "rohan");
}

export default JobCard;