import React, { Component } from 'react'
import { Table } from 'element-react'
class BullListing extends Component {
    render() {
        return (
            <Table
                columns={this.props.columns}
                data={this.props.data}
                height={this.props.styles.height}
            />
        )
    }
}

export default BullListing
