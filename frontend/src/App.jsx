import React from 'react'
import { Route, Routes} from "react-router";

import Discover from "./pages/Discover"
import UserProfileTempTwo from './pages/UserProfileTempTwo'
import UserProjectTempTwo from './pages/UserProjectTempTwo';


import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (

    <div>
      <Navigation/>
      <Routes>
        <Route path="/discover" element={<Discover />} />
        <Route path="/user" element={<UserProfileTempTwo />} />
        <Route path="user-project" element={<UserProjectTempTwo />} />
      </Routes>

    <Footer/>
    </div>
  )
}

export default App