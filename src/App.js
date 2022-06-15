import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Bar from './components/Bar/Bar'
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import Post from './components/Posts/Post';
import Articles from './components/Articles/Articles';
import SeiTips from './components/SeiTips/SeiTips';

export default class App extends Component {
  render() {
    return (
   
      <div className="App">
        <Bar/>
          <Routes>
            <Route path="/" element={<Post/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Articles" element={<Articles/>} />
            <Route path="/SeiTips" element={<SeiTips/>} />
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
      </div>
    
    )
  }
}
