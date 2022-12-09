import React from 'react'

export function PresentItem({person}) {
    console.log(person.presents.split(','))
    
    return(
        <>
            <h3>{person.name}</h3>
            {person.presents.split(',').map((present) => {
                return <h4 key={Math.random()*100}>{present}</h4>
            })}
            <button>done</button>
        </>
    )
}