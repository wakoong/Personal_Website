import React from 'react';

import Banner from './Banner';

class About extends React.Component {
    render() {
        const banners = ["Projects", "Programming", "Basketball"]
        return(
            // <div className="main-background">
            //     <div className="main-block">
            //         <div className="profile-image">
            //             <img src={profile} alt="instagram" />
            //         </div>
            //         <div className="description">
            //         Welcome!
            //         </div>
            //     </div>
            // </div>
            <main>
                <section className="index-banner">
                    <div className="vertical-center">
                        <h2>Welcome to my website!</h2>
                        <h1>Follow my journey</h1>
                    </div>
                </section>
                <section className="index-links">
                    {banners.map(banner => {
                        return <Banner key={banner} banner={banner} />
                    })}
                </section>
            </main>
        )
    }
}

export default About;