import logo from './logo.svg'
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Home />
      {/* </Router> */}
    </div>
  )
}

export default App
