import { React, useState } from 'react'
import data from "./gv-data.json"

function List(props) {

    const isAMD = (value) => {
        
        const regex = new RegExp('foo*');

        if (props.input.toLowerCase().startsWith(value.x86.concat("."))) {
            return value;
        }
    }

    const filteredData = data.filter(isAMD)

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.x86}>{item.graviton.concat(props.input.substring((props.input.indexOf('.'))))}</li>
            ))}
        </ul>
    )
}

export default List
