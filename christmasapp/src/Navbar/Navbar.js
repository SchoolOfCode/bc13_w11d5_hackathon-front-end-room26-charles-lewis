import React from 'react'
import {useState,useEffect} from 'react'
import {AddPresent} from '../AddPresent/AddPresent.js'


export function Navbar({people, setName, name}) {

    const [formVis, setVis] = useState(false)
    //const [value, setValue] = useState()




    return (
        <>
        <div style={{visibility: formVis ? "visible" : "hidden"}}>
            <AddPresent></AddPresent>
        </div>

        <button onClick={()=>{setVis(current=>!current)}}>Add present</button>

        <select onChange={(e)=>{setName(e.target.value)}} value={name}>

            {people.map((person) => {
               
                return <option key={Math.random()*1000}value={person.name}>{person.name}</option>
              
            })}

        </select>
        </>
    )
}