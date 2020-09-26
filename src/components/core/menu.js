import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) =>{
    if(history.location.pathname === path){
        return {color: 'yellow'}
    }else{
        return {color: 'white'}
    }
}

const Menu = ({ history }) =>{
    return(
        <div>
            <ul className="nav nav-tabs bg-secondary">
                <li className="nav-items">
                    <Link className="nav-link" style={isActive(history, '/home')} to="home">Home</Link>
                </li>

                <li className="nav-items">
                    <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Signin</Link>
                </li>

                <li className="nav-items">
                    <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu)