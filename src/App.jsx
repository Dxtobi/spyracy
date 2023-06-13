// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Header from './components/layouts/Header.layout';
import Footer from './components/layouts/Footer.layout';
import Signup from './pages/auth/Signup';
import AdminHome from './pages/home/AdminHome.page';
import AdminUpload from './pages/upload/AdminUpload.page';
import AdminCommunity from './pages/community/AdminCommunity.page';
import AdminBigVid from './pages/community/AdminBigVideo';
function App() {
 // const [count, setCount] = useState(0)

  return (
    <Router >
      <div className='bg-black min-h-screen'>
      <Header />
       <Routes >
      

       <Route exact path='/' element={<AdminHome />} />
          <Route exact path='/home' element={<AdminHome />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/community' element={<AdminCommunity />} />
          <Route path='/communitybig' element={<AdminBigVid />} />
          <Route path='/uploads' element={<AdminUpload />} />
          <Route path='*-' element={<AdminHome />} />
    
      </Routes>
      <Footer/>
      </div>
     
      </Router>
  )
}

export default App
