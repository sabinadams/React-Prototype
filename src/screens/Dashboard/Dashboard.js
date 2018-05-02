import React, { Component } from 'react'
import BreedCounts from '../../components/BreedCounts/BreedCounts'
import './Dashboard.css'
class Dashboard extends Component {
  render() {
    return (
        <div className="dashboard">
            <h2>World Wide Sires</h2>
            <h2><i>"Customer Tools"</i></h2>
            <h3>Industry leading tools for industry leading customers</h3>
            <div className="nav-buttons">
                <button className="nav-button">Check out our Sire Directory</button>
                <button className="nav-button">Go to World Wide Sires, Ltd.</button>
            </div>
            <BreedCounts/>
        </div>
    )
  }
}

export default Dashboard
