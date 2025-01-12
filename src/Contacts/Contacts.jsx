import React from "react";
import Contact from "./Contact";
import "./Contacts.css"
function Contacts(){
    return(
        <div className="groupcontacts">
            <Contact img="/src/assets/mr-whiskerson.avif"
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
            />
            <Contact img="/src/assets/beluga.webp"
            
            name="Beluga"
            phone="(212) 555-2345"
            email="beluga@catnap.meow"/>
            <Contact
                img="/src/assets/ginger.jpg"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="/src/assets/black-cat.jpg"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"/>
        </div>
    )
}
export default Contacts;