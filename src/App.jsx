import './App.css'
import Dealerpage from './pages/Dealerpage'
import Userlanding from './pages/Userlanding'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Userlanding />} />
      <Route path="/partners" element={<Dealerpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App