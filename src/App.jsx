import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './scenes/Register';
import Login from './scenes/Login';
import Home from './scenes/Home';
import Profile from './scenes/Profile';
import SearchFeed from './scenes/SearchFeed';
import Upload from './components/Upload';
import HouseDetail from './scenes/HouseDetail';
import ProfileDetail from './scenes/ProfileDetail';
import EditProfile from './components/EditProfile';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        <Route element={<Layout/>}>
          <Route path="/user" element={<Profile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/listing/create" element={<Upload/>}/>
          <Route path="/edit" element={<EditProfile/>}/>
        </Route>
        <Route path="/house/:id" element={<HouseDetail/>}/>
        <Route path="/profile/:id" element={<ProfileDetail/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App