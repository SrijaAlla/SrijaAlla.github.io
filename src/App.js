import './App.css'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Art from './Art.js'
import About from './About.jsx'
import Gallery from './gallery.jsx'
import Profile from './Profile.jsx'
import Work from './Work.jsx'

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/gallery" element={<Art />} />
        <Route path="/life" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App
