import React from "react"
import Title from './Title';
import '../styles/Title.css';
import TravelType from './TravelType';
import '../styles/TravelType.css';
function SectionOne() {
    return (
            <section className="Section1">
                <Title/>
                <TravelType/>
            </section>
    )
}

export default SectionOne