import './App.css'
import Dealerpage from './pages/Dealerpage'
import Userlanding from './pages/Userlanding'
import Login from './pages/user/Login'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/user/Dashboard'
import Instantpickup from './pages/user/Instantpickup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Userlanding />} />
      <Route path="/partners" element={<Dealerpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/dashboard/instantpickup" element={<Instantpickup/>} />
    </Routes>
  )
}

export default App