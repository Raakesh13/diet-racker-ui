import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../../styles.css'

const isActive = (history, path) =>{
    if(history.location.pathname === path){
        return {color:'grey'}
        // return {disabled}                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
}

const Navigationbar = ({history}) => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light justify-content-between' style={isActive(history, '/')}>
        <Link className='navbar-brand' to='/'>
          Home
        </Link>
        <div className="user-links justify-content-end">
        <Link  className="navbar-link" to='/signin' style={isActive(history, '/signin')}>
          Signin
        </Link>
        <Link className='navbar-link' to='/signup' style={isActive(history, '/signup')}>
          Signup
        </Link>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Navigationbar)
