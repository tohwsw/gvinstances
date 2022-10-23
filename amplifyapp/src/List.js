import { React, useState } from 'react'
import data from "./gv-data.json"

function List(props) {


    // define the testing function
    const isAMD = (value) => {
        
        // if input value matches any x86 instance in data
        if (props.input === value.x86) {
                return value;
            } 
    }

    if(props.input.length === 0){ //show all Graviton instances if no inputs
        return (
            <div>
                <table class="w3-table w3-striped w3-border"> 
                <tr>
                    <th>Graviton instance type</th>
                    <th>CPU</th>
                    <th>Memory</th>
                    <th>Storage</th>
                    <th>Network bandwidth</th>
                    <th>EBS bandwidth</th>
                </tr>
                {data.map((item) => (
                    <tr> 
                        <th>{item.graviton}</th>
                        <th>{item.cpu}</th>
                        <th>{item.memory}</th>
                        <th>{item.storage}</th>
                        <th>{item.networkw}</th>
                        <th>{item.ebsbw}</th>
                    </tr>
        
                ))}
                </table>
            </div>
        )
    }

    // if it is a valid input
    if (/(nano|micro|small|medium|large|xlarge|metal)$/.test(props.input)){

        const filteredData = data.filter(isAMD)

        if (filteredData.length === 0){
            return (
                <p>Sorry your instance type could not be mapped. It could be malformed or does not have a Graviton equivalent</p>
            )
        } else{
            return (
                <div>
                    <table class="w3-table w3-striped w3-border"> 
                    <tr>
                        <th>Graviton instance type</th>
                        <th>CPU</th>
                        <th>Memory</th>
                        <th>Storage</th>
                        <th>Network bandwidth</th>
                        <th>EBS bandwidth</th>
                    </tr>
                    {filteredData.map((item) => (
                        <tr> 
                            <th>{item.graviton}</th>
                            <th>{item.cpu}</th>
                            <th>{item.memory}</th>
                            <th>{item.storage}</th>
                            <th>{item.networkw}</th>
                            <th>{item.ebsbw}</th>
                        </tr>
            
                    ))}
                    </table>
                </div>
            )
        }

    }



    
}

export default List
