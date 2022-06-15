<<<<<<< HEAD
import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Bar from './components/Bar/Bar'
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import Post from './components/Posts/Post';
import Articles from './components/Articles/Articles';
import SeiTips from './components/SeiTips/SeiTips';
=======
import Post from './components/Posts/Post';
import React, {Component } from 'react';
import './App.css';
import { Route, Routes, Switch, Redirect, Link } from 'react-router-dom';
import AuthPage  from './pages/AuthPage/AuthPage';
import ProtectedRoutes from "./components/ProtectedRoutes";

import Modal from './Modal' 


import MainHeader from './components/MainHeader'
import Bar from './components/Bar/Bar'
import AboutUs from './components/AboutUs/AboutUs';

>>>>>>> 0cbba1e651b69bda04b66e2593d6276fa3db5943

export default class App extends Component {
  
  state = {
    user: null
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({user: incomingUserData})
  }
  
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]))
      if (payload.exp < Date.now() / 1000)
      localStorage.removeItem('token')
      token = null
    } else {
      return
      // this.setState({ user: payload.user})
    }
    
  }
  
  
  
  
  render() {
    // const [isOpen, setIsOpen] = useState(false)
    return (
   
      <div className="App">
<<<<<<< HEAD
        <Bar/>
          <Routes>
            <Route path="/" element={<Post/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Articles" element={<Articles/>} />
            <Route path="/SeiTips" element={<SeiTips/>} />
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
      </div>
    
=======
        <MainHeader/>
        {/* <Post/> */}
        {/* <Bar/> */}
        <AboutUs/>
       
      
        <div>
          <button> open modal/auth</button>
          <Link to="/auth">go to auth</Link>

        {/* <Modal>
          modal test

        </Modal> */}
        </div>
        {/* {this.state.user ?  */}
        <Routes>
          {/* this is where the single public route could go which would be the homepage */}
          <Route path="/auth" element={<AuthPage setUserInState={this.setUserInState} />}/>
          <Route element={<ProtectedRoutes />}>
            {/* where the protect routes should go- about page route, article routes, ect. should only be able to see/make changes to  these if you are logged in (as admin) but log in to just see */ } 
          </Route>
          {/* where the route paths will go  */}
        </Routes>
        {/* : */}
        
        {/* } */}
      </div>

      </div>

>>>>>>> 0cbba1e651b69bda04b66e2593d6276fa3db5943
    )
  }
}
