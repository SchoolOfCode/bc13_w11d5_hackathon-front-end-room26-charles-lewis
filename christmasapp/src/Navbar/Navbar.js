import React from 'react'
import './Navbar.css'
import {useState} from 'react'
import {AddPresent} from '../AddPresent/AddPresent.js'


export function Navbar({people, setName, name, addPresent}) {

    const [formVis, setVis] = useState(false)

    const visibility = e => {
        setVis(current => !current)
    }



    return (
        <>
        <div className="addPresentForm" style={{visibility: formVis ? "visible" : "hidden"}}>
            <AddPresent addPresent={addPresent} visibility={visibility}></AddPresent>
        </div>

        <button onClick={visibility}>Add present</button>

        <select onChange={(e)=>{setName(e.target.value)}} value={name}>

            {people.map((person) => {
               
                return <option key={Math.random()*1000}value={person.name}>{person.name}</option>
              
            })}

        </select>
        </>
    )
}