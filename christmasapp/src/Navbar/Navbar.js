import React from 'react'
import {useState,useEffect} from 'react'
import {AddPresent} from '../AddPresent/AddPresent.js'


export function Navbar(props) {

    const [formVis, setVis] = useState(false)
    const [value, setValue] = useState()

    // useEffect(()=>{
    //     const response = await fetch("localhost:3000/value")
    //     const data = await response.json()
    //     return data
    // },[value])

    return (
        <>
        <div style={{visibility: formVis ? "visible" : "hidden"}}>
            <AddPresent></AddPresent>
        </div>

        <button onClick={()=>{setVis(current=>!current)}}>Add present</button>

        <select onChange={(e)=>{setValue(e.target.value)}} value={value}>

            {props.people.map((person) => {
                return <option value={person.name}>{person.name}</option>
            })}

        </select>
        </>
    )
}