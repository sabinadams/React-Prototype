import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import routes from '../../config/routes'
import SideNav from '../../components/SideNav/SideNav'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="SiteContainer">
          <SideNav/>
          <div className="ContentContainer">
          {
            routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact || false}
                component={route.component}
              />
            ))
          }
          </div>
          </div>
      </Router>
    )
  }
}

export default App
