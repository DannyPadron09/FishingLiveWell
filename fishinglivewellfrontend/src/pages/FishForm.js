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
    // changeHandler = () => {
    //     this.props.history.push(`/livewell/${lureId}?fishCaught=${fishCaught}`)
    // }

    

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
                        <input type="text" name="fishCaught" placeholder="Fish Species"  />
                    </label>
                    <label>
                        Weight: 
                        <input type="text" name="fishWeight" placeholder="Fish Weight" />
                    </label>
                    <button onClick={this.changeHandler} className="primary block">Add Fish</button>
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