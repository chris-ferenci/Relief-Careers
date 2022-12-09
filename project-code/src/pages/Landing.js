import React, { useState, useEffect } from 'react';
import './landing.css';
// import '../components/Loader/loader.css'
import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import Loader from '../components/Loader/Loader';

function Landing() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return(
        <article className='landing-container'>
        { loading ? ( <Loader /> ) : 
        ( <><section className='hero'>
                    <h1>Relief Careers</h1>
                    <h4>Find work to help those most in need</h4>



                    <a href="/browsejobs" className="btn btn-primary btn-large">
                        Browse Careers
                        <IconContext.Provider value={{ size: "1.2rem" }}><FaChevronRight />
                        </IconContext.Provider>
                    </a>

                    <article className="description">
                        <p>Browse our collection of worldwide career opportunities in countries experiencing humanitarian crises.
                        </p>
                    </article>
                </section><section>

                    </section></> )}
            
        </article>

   )

}


export default Landing;