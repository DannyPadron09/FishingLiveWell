import React, { Component } from 'react'

class FishForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {fishSpecies: 'Large Mouth Bass'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({fishSpecies: event.target.value})
    }

    handleSubmit(event) {
        alert('New fish added')
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>    
                <label>
                    Fish Caught: 
                    <input type="text" fishSpecies="fishSpecies" />
                </label>
                <label>
                    Weight: 
                    <input type="text" fishWeight="fishWeight" />
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default FishForm 