import React from 'react'
import {Link} from 'react-router-dom'
import OAuth from './OAuth'

class Header extends React.Component{
    render(){
        return <nav>
        <div className="nav-wrapper orange">
          <Link to="/" className="brand-logo">Streamer</Link>
          <ul id="nav-mobile" className="right hide-on-small-only">
            <li><Link to="/">All Streams</Link></li>
            <li><OAuth/></li>
          </ul>
        </div>
      </nav>
    }
}
export default Header