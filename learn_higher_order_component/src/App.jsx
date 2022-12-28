import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>Main Component</h1>
     <HOCTeal comp={<CounterApp/>}/>
     <HOCBlue comp={<CounterApp/>}/>

    
    </div>
  )
}

export default App

const HOCTeal=(props)=>{

  return(
    <div>
      <h1 style={{color:"red", backgroundColor:"teal"}}> {props.comp}</h1>
    </div>
  )
}


const HOCBlue=(props)=>{
  return(
    <div>
      <h1 style={{color:"purple", backgroundColor:"blue"}}> {props.comp}</h1>
    </div>
  )


}


const CounterApp=()=>{

  const [count,setCount] = useState(0)
  return(
    <div>

      <h3>Counter :{count}</h3>
      <button style={{backgroundColor:"green"}} onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}
