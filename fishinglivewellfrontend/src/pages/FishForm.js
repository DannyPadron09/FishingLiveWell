import React, { Component } from 'react'

class FishForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fishCaught:[
                {
                    fishSpecies: [''],
                    fishWeight: [''],
                }
            ] 
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFishSpeciesChange = this.handleFishSpeciesChange.bind(this)
        this.handleWeightChange = this.handleWeightChange.bind(this)
    }

    handleChange(event) {
        this.setState({fishSpecies: event.target.value})
    }

    handleFishSpeciesChange(e) {
        this.setState(
            {
                fishSpecies: e.target.value,
            }
        )
    }

    handleWeightChange(e) {
        this.setState(
            {
                fishWeight: e.target.value,
            }
        )
    }

    handleSubmit(event) {
        alert('New fish added')
    }

    render() {
        return (
            <div>
                <form>    
                    <label>
                        Fish Caught: 
                        <input type="text" placeholder="Fish Species" value={this.state.fishSpecies} onChange={this.handleFishSpeciesChange} />
                    </label>
                    <label>
                        Weight: 
                        <input type="text" placeholder="Fish Weight" value={this.state.fishWeight} onChange={this.handleWeightChange} />
                    </label>
                    <button onClick={this.handleSubmit} className="primary block">Add Fish</button>
                </form>

                <h3>
                    Fish Stats
                    <li>
                        Fish Species: {this.fishSpecies}
                    </li>
                    <li>
                        Fish Weight: {this.fishWeight}
                    </li>
                </h3>
            </div>

    
        )
    }
}

export default FishForm 