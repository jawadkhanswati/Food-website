import  { useState } from 'react'
import Cartcontext from './Createcart'

const Usecontext = (props) => {
    const [addcart,setaddcart]=useState([])
    
  return (
    <Cartcontext.Provider value={{addcart,setaddcart}}>
      {props.children}
    </Cartcontext.Provider>
  )
}

export default Usecontext
