import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './components/user/Signup'
import Signin from './components/user/Signin'
import Navigationbar from './components/core/Navigationbar'
import Home from './components/core/home'
import Menu from './components/core/menu'

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Navigationbar/> */}
      <Switch>
        <Route path='/home' exact component={Home} />

        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
