import './App.css'
import Dealerpage from './pages/Dealerpage'
import Userlanding from './pages/Userlanding'
import Login from './pages/user/Login'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/user/Dashboard'
import Instantpickup from './pages/user/Instantpickup'
import OtpVerification from './pages/user/OtpVerification'
import PickupLayout from './components/user/PickupLayout'
import ProfileSetup from './pages/user/ProfileSetup'
import MyPickups from './pages/user/MyPickups'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Userlanding />} />
      <Route path="/partners" element={<Dealerpage />} />
      <Route path="/login" element={<Login />} />
      <Route path='/verifyotp' element={<OtpVerification/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/dashboard/pickup' element={<PickupLayout/>} />
      <Route path="/dashboard/instantpickup" element={<Instantpickup/>} />
      <Route path='/dashboard/mypickups' element={<MyPickups/>} />
      <Route path="/profilesetup" element={<ProfileSetup/>} />


    </Routes>
  )
}

export default App