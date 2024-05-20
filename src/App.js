import './App.css'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Error from './pages/Error'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
