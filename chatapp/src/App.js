import React from 'react'
import Login from './pages/Login'
import Room from './pages/Room'
import SignUp from './pages/SignUp'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                <Router exact path='/' component={Room} />
                <Router exact path='/login' component={Login} />
                <Router exact path='/signup' component={Signup} />
            </Switch>
        </Router>
    )
}

export default App