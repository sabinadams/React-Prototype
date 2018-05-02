import React, { Component } from 'react'
import './BreedCounts.css'
import http from '../../config/httpClient'

class BreedCounts extends Component {

constructor(props){
    super(props)
    this.state = { counts: [] }
}

componentWillMount() {
    http.get('/bulls/count/').then( res => {
        this.setState({
            counts: [
                { groupName: 'active', count: res.active, breeds: res.breeds.active},
                { groupName: 'proven', count: res.proven, breeds: res.breeds.proven},
                { groupName: 'gforce', count: res.gforce, breeds: res.breeds.gforce}
            ]
        })
    })
}

render() {
    return (
        <div className="countContainer">
            {
                this.state.counts.map( (group, index) => {
                    return (
                        <div className="group" key={index}>
                            <div className="groupHead">
                                {group.groupName} | {group.count}
                            </div>
                            {
                                group.breeds.map( (breed, index) => {
                                    return (
                                        <div className="subCat" key={index}>
                                            {breed.breedName} | {breed.count}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
  }
}

export default BreedCounts
