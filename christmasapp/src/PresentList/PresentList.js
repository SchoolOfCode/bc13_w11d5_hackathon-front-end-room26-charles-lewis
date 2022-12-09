import React from 'react'
import {PresentItem} from '../PresentItem/PresentItem.js'

export function PresentList(props) {

    if (props.people){

        return(
            <ul>
                {props.people.map((person) => {
                    return <PresentItem key={person.id} person={person}></PresentItem>
                })}
            </ul>           
            
        )
    }else{
        <></>
    }

}

