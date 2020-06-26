import React from 'react';
import './Cell.css'
import plc1 from '../actuals/images/plc1.jpg'


function Cell(props) {
    return (
        <div className="tileCenter">
            <img src={plc1} alt="plc1" width="150" height="200" />
            <br />
            <h1>Name: {props.contact.name}</h1>
            <br />
            <p>Phone:{props.contact.phone}</p>
            <p>Address:{props.contact.address}</p>
        </div>
    );

}

export default Cell
