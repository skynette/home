import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './scenes/Register';
import Login from './scenes/Login';
import Home from './scenes/Home';
import Profile from './scenes/Profile';
import SearchFeed from './scenes/SearchFeed';
import Upload from './scenes/Upload';
import HouseDetail from './scenes/HouseDetail';
import ProfileDetail from './scenes/ProfileDetail';
import EditProfile from './scenes/EditProfile';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        <Route element={<Layout/>}>
          <Route path="/user/:id" element={<Profile/>}/>
        </Route>
        <Route path="/user/:id/upload" element={<Upload/>}/>
        <Route path="/house/:id" element={<HouseDetail/>}/>
        <Route path="/profile/:id" element={<ProfileDetail/>}/>
        <Route path="/user/:id/edit" element={<EditProfile/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App