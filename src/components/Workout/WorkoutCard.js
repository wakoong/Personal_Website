import React from 'react';

class WorkoutCard extends React.Component {
  render() {
    const { bodyType, workoutType, sets, reps } = this.props
    console.log("card: ", bodyType)
    return(
      <div className="workout-card-layout">
        {bodyType}
      </div>
    )
  }
}

export default WorkoutCard;