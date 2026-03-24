import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Favorites from "./Favorites"
import Home from "./Home"
import Details from "./Details"

const App = () => {
  return (
    <Routes>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/recipe/:id" element = {<Details/>}/>

</Routes>
  )
}



export default App