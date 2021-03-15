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

    handleSubmit(e) {
        e.preventDefault()
        alert('New fish added')
        this.setState(
            {
                fishCaught: {
                    fishSpecies: e.target.value,
                    fishWeight: e.target.value,
                }
            }
        )
    }

    render() {
        return (
            <div>
                <form>    
                    <label>
                        Fish Caught: 
                        <input type="text" placeholder="Fish Species" value={this.state.fishSpecies} />
                    </label>
                    <label>
                        Weight: 
                        <input type="text" placeholder="Fish Weight" value={this.state.fishWeight} />
                    </label>
                    <button onClick={this.handleSubmit} className="primary block">Add Fish</button>
                </form>

                <h3>
                    Fish Stats
                </h3>
                <p>
                    {this.state.fishCaught.map((fish) => {
                        <li>
                            Fish Species: {fish.fishSpecies}
                            Fish Weight: {fish.fishWeight}
                        </li>
                    })}
                </p>
            </div>

    
        )
    }
}

export default FishForm 