import React, { Component } from 'react'

class FishForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                fishSpecies: '',
                fishWeight: '', 
        }

        this.changeHandler = this.changeHandler.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleFishSpeciesChange = this.handleFishSpeciesChange.bind(this)
        // this.handleWeightChange = this.handleWeightChange.bind(this)
    }

    // handleFishSpeciesChange(e) {
    //     this.setState(
    //         {
    //             fishSpecies: e.target.value,
    //         }
    //     )
    // }

    // handleWeightChange(e) {
    //     this.setState(
    //         {
    //             fishWeight: e.target.value,
    //         }
    //     )
    // }
    changeHandler = (e) => {
        let species = e.target.name
        let weight = e.target.value 
        this.setState({[species]: weight})
    }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     alert('New fish added')
    // }

    render() {
        return (
            <div>
                <form>    
                    <label>
                        Fish Caught: 
                        <input type="text" name="fishCaught" placeholder="Fish Species" value={this.state.fishSpecies} />
                    </label>
                    <label>
                        Weight: 
                        <input type="text" name="fishWeight" placeholder="Fish Weight" value={this.state.fishWeight} />
                    </label>
                    <button onClick={this.handleSubmit} className="primary block">Add Fish</button>
                </form>

                <h3>
                    Fish Stats
                </h3>
                <p>
                    {this.state.fishSpecies}
                    {this.state.fishWeight}
                </p>
            </div>

    
        )
    }
}

export default FishForm 