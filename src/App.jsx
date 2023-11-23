
import React from 'react'
import './App.css'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import Update from './components/Update'

function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<Create />}/>
      <Route path="/edit/:id" element={<Update />}/>

      </Routes>
    </Router>
  )
}

export default App
