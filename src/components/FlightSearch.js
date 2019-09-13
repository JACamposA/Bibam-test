import React from "react"
import DropdownOrigin from "./DropdownOrigin"
import DropdownDestination from "./DropdownDestination"
import DropdownDates from "./DropdownDates"
import DropdownPassengersClass from './DropdownPassengersClass'

function FlightSearch() {
    return (
        <div class="FlightSearch">
        <div class="div1"><DropdownOrigin/></div>
        <div class="div2"><DropdownDestination/></div>
        <div class="div3"><DropdownDates/></div>
        <div class="div4"><DropdownPassengersClass/> </div>
        <div class="div5"> <a><div className="buttonSearch">  </div></a></div>
        </div>
    )
}

export default FlightSearch