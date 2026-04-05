import React from 'react'
import { Route, Routes} from "react-router";

import Discover from "./pages/Discover"
import UserProfileTempTwo from './pages/UserProfileTempTwo'

const App = () => {
  return (

    <div>
      <h1>App is rendering</h1>
      <Routes>
        <Route path="/discover" element={<Discover />} />
        <Route path="/user" element={<UserProfileTempTwo />} />
      </Routes>


    </div>
  )
}

export default App