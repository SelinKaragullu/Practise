import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Favorites from "./Favorites"
import Home from "./Home"
import Details from "./Details"
import Navbar from './components/Navbar'

const App = () => {
  return (<>
<Navbar/>
    <Routes>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/" element ={<Home/>}/>
        <Route path="/recipe/:id" element = {<Details/>}/>
</Routes>
</>
  )
}



export default App