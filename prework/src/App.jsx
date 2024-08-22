import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AddCreator from './pages/AddCreator.jsx'
// import ViewCreators from './pages/ViewCreators.jsx'
// import EditCreator from './pages/EditCreator.jsx'
// import ShowCreator from './pages/ShowCreators.jsx'
function App() {

  return (
    <Router>
    <nav>
        {/* <Link to="/">Home</Link><br/> */}
        <Link to="/new">Create Creator</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<ReadPosts />} /> */}
        {/*id passed into params*/}
        {/* <Route path="/edit/:id" element={<EditCreator />} /> */}
        <Route path="/new" element={<AddCreator />} />
        {/* <Route path="/detailedInfoCreator/:id" element={<DetailedInfoCreator />} /> */}

      </Routes>
    </Router>
  )
}

export default App