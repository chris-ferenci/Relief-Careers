import { Button } from "@blueprintjs/core";
import React, { useContext } from "react";
import './Space.css'
import { CountryContext } from "../../pages/Home";


export default function Space (props) {

    const [activeCountry, setActiveCountry] = useContext(CountryContext);
    const selected = props.country == activeCountry ? "selected" : "not-selected";

    return (
        <Button id={selected} className="country-button" onClick={() => setActiveCountry(props.country)}> 
            <span id="country-text"> {props.country} </span>
        </Button>
    );

}