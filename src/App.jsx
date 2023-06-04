import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/Sign-up" element={<SignUp/>}/>
        <Route path="/Home/:id" element={<Home/>}/>
        <Route path="/Search/:searchTerm" element={<SearchFeed/>}/>
        <Route path="/User/:id" element={<UserProfile/>}/>
        <Route path="/User/:id/upload" element={<Upload/>}/>
        <Route path="/House/:id" element={<HouseDetail/>}/>
        <Route path="/Profile/:id" element={<ProfileDetail/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App