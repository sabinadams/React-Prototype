import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './SideNav.css'

class SideNav extends Component {
  render() {
    return (
        <div className="SideNavContainer">
            <NavLink exact className="NavOption" to="/">Dashboard</NavLink>
            <NavLink className="NavOption" to="/siredirectory">Sire Directory</NavLink>
            <NavLink className="NavOption" to="/search">Advanced Search</NavLink>
            <NavLink className="NavOption" to="/indexes">WWS Indexes</NavLink>
            <NavLink className="NavOption" to="/cataloggenerator">Catalog Generator</NavLink>
            <NavLink className="NavOption" to="/bullpagegenerator">Bull Page Generator</NavLink>
            <NavLink className="NavOption" to="/lineargenerator">Linear Generator</NavLink>
            <NavLink className="NavOption" to="/photogallery">Photo Gallery</NavLink>
            <NavLink className="NavOption" to="/pedigreesearch">Pedigree Search</NavLink>
            <NavLink className="NavOption" to="/dnasearch">DNA Search</NavLink>
            <NavLink className="NavOption" to="/admin">Administration</NavLink>
        </div>
    )
  }
}

export default SideNav
