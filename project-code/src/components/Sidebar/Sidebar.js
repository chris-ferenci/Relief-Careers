import { Button } from '@blueprintjs/core';
import { useContext } from 'react';
import { CountryContext } from '../../pages/Home';
import '../Sidebar/sidebar.css'
import Space from '../Space/Space';


function Sidebar(){

    // const [activeCountry, setActiveCountry] = useContext(CountryContext);

    return(
        <nav id="sidebar-container" className='sidebar'>
            
            <ul>
                <h2>Find Job By Country</h2>

                <div>

                    <div className="country-space">
                        <Space country="United States"/>
                    </div>

                    <div className="country-space">
                        <Space country="Canada"/>
                    </div>

                    <div className="country-space">
                        <Space country="Mexico"/>
                    </div>

                    <div className="country-space">
                        <Space country="United Kingdom"/>
                    </div>

                    <div className="country-space">
                        <Space country="Brazil"/>
                    </div>
                </div>
                

                {/* <Button className="country-button" onClick={() => updateCountry('United States', setActiveCountry)}>
                    <li className="country-text">United States</li>
                 </Button>

                 <Button className="country-button" onClick={() => updateCountry('Canada', setActiveCountry)}> 
                    <li className="country-text">Canada</li>
                 </Button>

                 <Button className="country-button" onClick={() => updateCountry('Mexico', setActiveCountry)}> 
                    <li className="country-text">Mexico</li>
                 </Button>

                 <Button className="country-button" onClick={() => updateCountry('United Kingdom', setActiveCountry)}> 
                    <li className="country-text">United Kingdom</li>
                 </Button>

                 <Button className="country-button" onClick={() => updateCountry('Brazil', setActiveCountry)}> 
                    <li className="country-text">Brazil</li>
                 </Button> */}
                
            </ul>
        </nav>

    )
}

function updateCountry (country, setActiveCountry) {
    setActiveCountry(country);
}

export default Sidebar;