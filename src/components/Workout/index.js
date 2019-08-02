import React from 'react';

import WorkoutCard from './WorkoutCard';

class Workout extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      "bodyType": 'Back',
      "workoutType": '',
      "sets": 0,
      "reps": 0
    }
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  onSubmit = () => {
    this.setState({

    })
  }

  render() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
      <div className="main-background">
        <div className="main-block">
          <h1>Welcome to workout logs</h1>
          <form>
            <div>{`Current Date: ${months[new Date().getMonth() - 1]} ${new Date().getDate()}th`}</div>
            <div>
              Workout Body Type: 
              {/* <input type="text" name="bodyType" value={this.state.bodyType} onChange={this.handleInputChange} /> */}
              <select name="bodyType" value={this.state.bodyType} onChange={this.handleInputChange} onBlur={this.handleInputChange}>
                <option value="Back">Back</option>
                <option value="Chest">Chest</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Legs">Legs</option>
                <option value="Core">Core</option> 
              </select>
            </div>
            <div>
              Workout Type:
              <input type="text" name="workoutType" value={this.state.workoutType} onChange={this.handleInputChange} />
              {/* <select value={this.state.bodyType}>
                <option value="Back">Back</option>
                <option value="Chest">Chest</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Legs">Legs</option>
                <option value="Core">Core</option> 
              </select> */}
            </div>
            <div>
              Sets: 
              <input type="number" name="sets" min="1" value={this.state.sets} onChange={this.handleInputChange} />
            </div>
            <div>
              Reps: 
              <input type="number" name="reps" min="1" value={this.state.reps} onChange={this.handleInputChange} />
            </div>
          </form>
          <input type="submit" value="Submit" />
          <WorkoutCard bodyType={this.state.bodyType} />
        </div>
      </div>
    )
  }
}

export default Workout;