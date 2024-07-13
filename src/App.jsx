import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment } from './redux/slices/counter'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    
    <>
     <div>
      <p>{count}</p>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
     </div>
    </>
  )
}

export default App
