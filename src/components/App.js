import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Start from './Start/Start'
import Second from './Second/Second'
import Third from './Third/Third'

export default ()=>{
    return(
        <Router>
            <Route exact path="/" component={Start} />
            <Route exact path="/second" component={Second} />
            <Route exact path="/final" component={Third} />
        </Router>
    )
}