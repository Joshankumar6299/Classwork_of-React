import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import StateExample from "./Ice2612/StateExamp1"
// import StateMerge from './Ice2612/stateMerge'
// import PropExample from './Ice2612/propExamp1'
// import ApiTesting from './Ice1601/useeffectever'
import Exersice from './Ice1601/exersice'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <StateExample/>
    <StateMerge/>
    <PropExample/> */}
    {/* <ApiTesting/> */}
    <Exersice/>

  </StrictMode>,
)
