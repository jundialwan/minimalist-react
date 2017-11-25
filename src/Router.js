import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

/**
 * Export function that return our router component
 */
export default function() {
  return (    
    <BrowserRouter>
      <div>
        {/* 
          * NavLink provide a navigation link
          * activeStyle will applied to the link when the coresponding path is in use, active
        */}
        <NavLink to="/page1" activeStyle={{ fontWeight: 'bold' }}>Page 1</NavLink>&nbsp;
        <NavLink to="/page2" activeStyle={{ fontWeight: 'bold' }}>Page 2</NavLink>&nbsp;
        <NavLink to="/page3" activeStyle={{ fontWeight: 'bold' }}>Page 3</NavLink>&nbsp;

        <br/><br/>
        <Switch>
          {/* Page1 component will be rendered if the route match /page1, and so on */}
          <Route exact path="/page1" component={Page1}/>
          <Route exact path="/page2" component={Page2}/>
          <Route exact path="/page3" component={Page3}/>
        </Switch>
      </div>
    </BrowserRouter>    
  )
}