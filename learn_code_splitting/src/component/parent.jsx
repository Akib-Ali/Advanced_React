
import React from "react"
import { Suspense } from "react"

const Child = React.lazy(()=> import ("./child"))

export const Parent=()=>{



    return(

        <div>
         <Suspense fallback={<div>...loading</div>}>
         <Child/>
          

         </Suspense>
        
            
            <h1>This Is Parent Component</h1>
        </div>
    )
}