import React from 'react'
import './App.css';
import Routing from './components/Routing';


// import { useSelector } from 'react-redux';


function App() {

// const {cartArray} = useSelector(item=>item.cart)
// let data = cartArray?cartArray:{name:"nothing"}
//   console.log("home")
//   console.log("home.js",data);

  return (
  
   <>
   {/* <ThemeProvider theme={darkTheme}> */}
   
  {/* </Container> */}
   {/* </ThemeProvider> */}

   <Routing/>
   </>
  
  
  )
}

export default App
