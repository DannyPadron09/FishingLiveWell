import React, { Component } from 'react'

class Checkbox extends React.Component {
    state = { checked: false }

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
    }

    render() {
        return (
            <div>
                <label>
                    <Checkbox checked={this.state.checked} onChange={this.handleCheckboxChange} />
                    <span>Do I own?</span>
                </label>
            </div>
        )
    }
}

