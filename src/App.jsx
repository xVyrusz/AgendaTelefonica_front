import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/phoneNumbers' element={<h1>Phone Numbers</h1>} />
        <Route path='/phoneNumbers/:id' element={<h1>Update Phone Number</h1>} />
        <Route path='/add-phoneNumbers' element={<h1>Add Phone Number</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App