import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  
  let inputref=useRef(null)
  let inputref2=useRef(null)
  
    const handleform=(event)=>{
    event.preventDefault()

    console.log("input field 1 " , inputref.current.value)
    console.log("input field 1 " , inputref2.current.value)
    }

  return (
    <div className="App">
       <form onSubmit={handleform}>
        <input type="text" placeholder='Enter Name' ref={inputref}/> <br></br><br></br>
        <input type="text" placeholder='Enter email' ref={inputref2}/>  <br></br><br></br>
        <button style={{backgroundColor:"black", color:"white"}}>Submit</button>
       </form>
    </div>
  )
}

export default App
