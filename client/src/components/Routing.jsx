import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Jobsection from './Jobsection'
import Home from './Home'
import Header from './Header'
import Something from './Something'
import Jobdetail from './Jobdetail'
import Cart from './Cart'
import SearcherDetails from './SearcherDetails'
import Notification from './Notification'

const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
<Routes>
    <Route path="/" element={<Home/>} />

    {/* <Route path="/jobsection"  element={<Jobsection/>} /> */}
    <Route path="/">
          <Route path="jobsection" element={<Jobsection />} />
          <Route path="jobsection/:title" element={<Jobsection />} />
        </Route>


    <Route path = "/jobdetail/:id"
     element={<Jobdetail/>} />
     <Route path="/cart" element={<Cart/> } />
     <Route path="/SeracherDet" element={<SearcherDetails/>} />
     <Route path='/notification' element={<Notification/>} />
</Routes>
</BrowserRouter>
  )
}

export default Routing