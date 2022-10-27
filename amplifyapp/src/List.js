import { React, useState } from 'react'
import data from "./gv-data.json"

function List(props) {


    // define the testing function
    const isAMD = (value) => {
        
        // if input value matches any x86 instance in data
        if (value.amd64.startsWith(props.input)) {
                return value;
            } 
    }

    if(props.input.length === 0){ //show all Graviton instances if no inputs
        return (
            <div>
                <table class="w3-table-all"> 
                <tr class="w3-orange">
                    <th>Graviton Model</th>
                    <th>CPU</th>
                    <th>Memory</th>
                    <th>Storage</th>
                    <th>Network bandwidth</th>
                    <th>EBS bandwidth</th>
                </tr>
                {data.map((item) => (
                    <tr> 
                        <th>{item.arm64}</th>
                        <th>{item.cpu}</th>
                        <th>{item.memory}</th>
                        <th>{item.storage}</th>
                        <th>{item.networkbw}</th>
                        <th>{item.ebsbw}</th>
                    </tr>
        
                ))}
                </table>
            </div>
        )
    } else { // if there are inputs

            const filteredData = data.filter(isAMD)

            return (
                <div>
                    <table class="w3-table-all">
                    <tr class="w3-orange">
                        <th>Graviton Model</th>
                        <th>CPU</th>
                        <th>Memory</th>
                        <th>Storage</th>
                        <th>Network bandwidth</th>
                        <th>EBS bandwidth</th>
                    </tr>
                    {filteredData.map((item) => (
                        <tr> 
                            <th>{item.arm64}</th>
                            <th>{item.cpu}</th>
                            <th>{item.memory}</th>
                            <th>{item.storage}</th>
                            <th>{item.networkbw}</th>
                            <th>{item.ebsbw}</th>
                        </tr>
            
                    ))}
                    </table>
                </div>
            )

    }



    
}

export default List
