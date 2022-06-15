import './Bar.css'
import { Link } from 'react-router-dom';

export default function Bar() {
  return (
           
        <nav className='nav'>
          <Link to="/"><h1>In The Loop</h1></Link>
          
          <ul className='link'>
              <Link to="/Articles"><li>Articles</li></Link>
              <Link to="/AboutUs"><li>About Us</li></Link>
              <Link to="/SeiTips"><li >SEI Boot Camp Tips</li></Link>
              <Link to="/"><li>Log In</li></Link>
          </ul>
        </nav>
       
  
  )
}
