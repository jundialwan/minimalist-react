import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

/**
 * Export function that return our router component
 */
export default function() {
  return (    
    <BrowserRouter>
      <Switch>
        {/* Page1 component wil be rendered if the route match /page1, and so on */}
        <Route exact path="/page1" component={Page1}/>
        <Route exact path="/page2" component={Page2}/>
        <Route exact path="/page3" component={Page3}/>
      </Switch>
    </BrowserRouter>    
  )
}