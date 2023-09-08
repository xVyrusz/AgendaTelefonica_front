import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/register' element={<h1>Register</h1>} />
        <Route path='/phoneNumbers' element={<h1>Phone Numbers</h1>} />
        <Route path='/phoneNumbers/:id' element={<h1>Update Phone Number</h1>} />
        <Route path='/add-phoneNumbers' element={<h1>Add Phone Number</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App