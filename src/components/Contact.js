import React from "react";
import { useState } from "react";

function Contact() {
    const [name, setName] = useState('');
    const [num, setNum] = useState('')

    const handleChangeNum = (e) => {
        setNum(e.target.value)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <div className="container contact">
            <h1>Contact</h1>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className="catering_test">Catering Service, 42nd Living St, 43043 New York, NY</p>
            <form>
                <input onChange={handleChange} placeholder="name" type="test" />
                {name}
                <br />
                <input onChange={handleChangeNum} placeholder="How many people" />
                {num}
                <br />
                <input placeholder="Date" type="datetime-local" />
                <br />
                <input placeholder="Message \ Special requirements" type="text" />
                <button>SEND MESSAGE</button>
                <button>CLEAR MESSAGE</button>
            </form>
        </div>
    )
}

export default Contact;