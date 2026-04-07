import React from 'react'
import { Route, Routes} from "react-router";

import Discover from "./pages/Discover"
import UserProfileTempTwo from './pages/UserProfileTempTwo'
import UserProjectTempTwo from './pages/UserProjectTempTwo';
import Index from './pages';
import Login from './pages/login';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Templates from './pages/Templates';


import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (

    <div>
    <Navigation/>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/user" element={<UserProfileTempTwo />} />
        <Route path="/user-project" element={<UserProjectTempTwo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>

    <Footer/>
    </div>
  )
}

export default App