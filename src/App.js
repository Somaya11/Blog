import { Component } from 'react';
import { Route, Routes, Navigate,Link } from 'react-router-dom';
import Bar from './components/Bar/Bar'
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import Post from './components/Posts/Post';
import Articles from './components/Articles/Articles';
import SeiTips from './components/SeiTips/SeiTips';
import AuthPage  from './pages/AuthPage/AuthPage';
import ProtectedRoutes from "./components/ProtectedRoutes";
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
     
    }
    
  }
  
  
  render() {
   
    return (
   
      <div className="App">

       <div>
          <button> open modal/auth</button>
          <Link to="/auth">go to auth</Link>

        {/* <Modal>
          modal test

        </Modal> */}
        </div>
        {/* {this.state.user ?  */}
        
        <Bar/> 
        <Routes>
          {/* this is where the single public route could go which would be the homepage */}
          <Route path="/auth" element={<AuthPage setUserInState={this.setUserInState} />}/>
          <Route element={<ProtectedRoutes />}>
            
       
          <Route path="/" element={<Post/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Articles" element={<Articles/>} />
            <Route path="/SeiTips" element={<SeiTips/>} />
            <Route path="*" element={<Navigate to="/" replace />}/>
            
            
            
          </Route>
        
        </Routes>
        {/* : */}
        
        {/* } */}

      </div>
    
    )
  }
}
