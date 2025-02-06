import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Ice0602/formContext'

// import StateExample from "./Ice2612/StateExamp1"
// import StateMerge from './Ice2612/stateMerge'
// import PropExample from './Ice2612/propExamp1'
// import ApiTesting from './Ice1601/useeffectever'
// import Exersice from './Ice1601/exersice'
// import ReqCancel from './Ice2201/Classexample'
// import Carouselexe from './Ice2201/Carouselexe'
// import CarouselApp from './Ice2201/Carouselexe'
// import UserContext from './Ice3001/usecontext1'
// import UserContextFinal from './Ice3001/usecontext3'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <StateExample/>
    <StateMerge/>
    <PropExample/> */}
    {/* <ApiTesting/> */}
    {/* <Exersice/> */}
    {/* <ReqCancel/> */}
    {/* <CarouselApp/> */}
   {/* <UserContextFinal/> */}
   <Form/>

  </StrictMode>,
)
