import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Start from './Start/Start'

export default ()=>{
    return(
        <Router>
            <Route exact path="/" component={Start} />
        </Router>
    )
}