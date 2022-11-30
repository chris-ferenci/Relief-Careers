import '../JobCard/jobcard.css';
import { CountryContext } from '../../pages/Home';
import { useContext } from 'react';

function JobCard (props) {

    const [activeCountry, setActiveCountry, jobs, setJobs] = useContext(CountryContext);
    

    return (

        <article className='job-card'>
            <h1> {props.title} </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
            </p>
            <button className='btn btn-primary'>Apply</button>
        </article>

    )
}


export default JobCard;