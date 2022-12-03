import "../Header/header.css";
import { useContext } from "react";
import { CountryContext } from "../../pages/Home";

function Header(){

    const [ activeCountry, setActiveCountry, jobs, setJobs, searchQuery, setSearchQuery ] = useContext(CountryContext)

    function filterJobs(input){ setSearchQuery(input) };

    return(

        <header id="header" className="header">
            <h1>Humanitarian Job Finder</h1>
            <input type="text" placeholder="Quick Search" onChange={(e) => filterJobs(e.target.value)} />
        </header>

    )

}

export default Header;