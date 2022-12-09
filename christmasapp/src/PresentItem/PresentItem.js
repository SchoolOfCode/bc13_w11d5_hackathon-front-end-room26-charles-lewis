import React from 'react'

export function PresentItem({person}) {
   
    if (person.presents.length > 1){
    return(
        <>
            <h3>{person.name}</h3>
            {person.presents.map((present) => {
                return <div className>
                          <h4 key={Math.random()*100}>{present}</h4>
                          <button>Done</button>
                       </div>
            })}
            
        </>
    )
    }else{
        return(
            <div>
                
                <h4>{person.present}</h4>
                <button>Done</button>
            </div>
        )
    }
}