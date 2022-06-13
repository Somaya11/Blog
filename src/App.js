import { Component } from 'react';
import MainHeader from './components/MainHeader'
import Bar from './components/Bar/Bar'
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import Post from './components/Posts/Post';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader/>
        {/* <Post/> */}
        {/* <Bar/> */}
        <AboutUs/>
        
      </div>
    )
  }
}
