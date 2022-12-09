import React from 'react'
import './PresentItem.css'

export function PresentItem({person}) {
   
    if (person.presents.length > 0){
    return(
        <div className="presentItem">
            <h3>{person.name}</h3>
            {person.presents.map((present) => {
                return <div className>
                          <h4 key={Math.random()*100}>{present}</h4>
                          <button>Done</button>
                       </div>
            })}
            
        </div>
    )
    }else{
        return(
            <div className="presentItem">
                
                <h4>{person.present}</h4>
                <button>Done</button>
            </div>
        )
    }
}