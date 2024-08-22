import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AddCreator from './pages/AddCreator.jsx'
import SingleCreator from './pages/SingleCreator.jsx'
import ViewCreators from './pages/ViewCreators.jsx'
import EditCreator from './pages/EditCreator.jsx'
// import ShowCreator from './pages/ShowCreators.jsx'
function App() {

  return (
    <Router>
    <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/new">Create Creator</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ViewCreators />} />
        {/*id passed into params*/}
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/new" element={<AddCreator />} />
        <Route path="/SingleCreator/:id" element={<SingleCreator />} />

      </Routes>
    </Router>
  )
}

export default App