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
                    Fish Species:
                    <select value={this.state.fishSpecies} onChange={this.handleChange}>
                        <option value="Large Mouth Bass">Large Mouth Bass</option>
                        <option value="Peacock Bass">Peacock Bass</option>
                    </select>
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default FishForm 