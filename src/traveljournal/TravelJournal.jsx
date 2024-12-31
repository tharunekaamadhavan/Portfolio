import React from "react";
import Header from "./Header"
import Entry from "./Entry";
import './TravelJournal.css'
function TravelJournal(){
    return(<div className="traveljournal"><Header/>
        <Entry/></div>
    )
}
export default TravelJournal;