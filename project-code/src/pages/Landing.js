import React from 'react';
import './landing.css';
import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";

function Landing() {

  return(

    <article className='landing-container'>
        <section>
            <h1>Relief Careers</h1>
            <h4>Find work to help those most in need</h4>
            <IconContext.Provider value={{size: "1rem"}}>
            <a href="/browsejobs" className="btn btn-primary btn-large">
                Browse Careers <FaChevronRight />
            </a>
            </IconContext.Provider>

            <p>
                Browse our collection of worldwide career opportunities in countries who are experiencing humanitarian crises.
            </p>
        </section>


        <section>
        
        </section>
        
    </article>

   )

}


export default Landing;