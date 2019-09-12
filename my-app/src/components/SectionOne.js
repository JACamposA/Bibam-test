import React from "react"
import Title from './Title';
import '../styles/Title.css';
import TravelType from './TravelType';
import '../styles/TravelType.css';
import FlightSearch from './FlightSearch';
import '../styles/FlightSearch.css';
function SectionOne() {
    return (
            <section className="Section1">
                <Title/>
                <TravelType/>
                <FlightSearch/>
            </section>
    )
}

export default SectionOne