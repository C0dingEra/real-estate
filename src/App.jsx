import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/SignIn';
import { SignOut } from './pages/SignOut';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signout' element={<SignOut/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App