import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ProtectedRoute } from './components/protectedRoute';
import { About } from './pages/About';
import { Home } from './pages/Home';
import {SignIn} from './pages/SignIn'
import { Profile } from './pages/Profile';
import { SignOut } from './pages/SignOut';
import { Signup } from './pages/Signup';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signout' element={<SignOut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App