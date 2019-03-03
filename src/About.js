import React from 'react';
import profile from './assets/images/Woosik.png'

class About extends React.Component {
    render() {
        return(
            <div className="main-background">
                <div className="main-block">
                    <div className="profile-image">
                        <img src={profile} alt="instagram" />
                    </div>
                    <div className="description">
                    Welcome!
                    </div>
                </div>
            </div>
        )
    }
}

export default About;