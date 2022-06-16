import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Bar from './components/Bar/Bar'
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import Post from './components/Posts/Post';
import Articles from './components/Articles/Articles';
import SeiTips from './components/SeiTips/SeiTips';
import AuthPage  from './pages/AuthPage/AuthPage';





export default class App extends Component {
  
  // state = {
  //   user: null
  // }
  
  // setUserInState = (incomingUserData) => {
  //   this.setState({user: incomingUserData})
  // }
  
  // componentDidMount() {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     const payload = JSON.parse(atob(token.split('.')[1]))
  //     if (payload.exp < Date.now() / 1000)
  //     localStorage.removeItem('token')
  //     token = null
  //   } else {
  //     let userDoc = payload.user;
  //     this.setState({user: userDoc});
     
  //   }
    
  // }
  
  
  render() {
    return (

      <div>
        <Bar/>
          <Routes>
            <Route path="/" element={<Post/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Articles" element={<Articles/>} />
            <Route path="/SeiTips" element={<SeiTips/>} />
            {/* <Route path="*" element={<Navigate to="/home" replace />}/> */}
          </Routes>
      </div>

    // <main> 
    //   <Bar setUserInState={this.setUserInState} user={this.state.user} />
    //   <div className="App">
    //     {this.state.user ? (
    //       <Routes>
    //         <Route path="/AboutUs" element={<AboutUs/>} />
    //         <Route path="/Articles" element={<Articles/>} />
    //         <Route path="/SeiTips" element={<SeiTips/>} />
    //         <Route path="*" element={<Navigate to="/home" replace />}/>
    //       </Routes>

    //     ): (
    //       <Routes>
    //         <Route path="/home" element={<AuthPage setUserInState={this.setUserInState} />}/>
    //         <Route path="/login" element={<AuthPage setUserInState={this.setUserInState} />}/>
    //         <Route path="*" element={<AuthPage setUserInState={this.setUserInState} />}/>
    //       </Routes>

    //     )}

    //   </div>
    // </main>
    
    );
  }
}

