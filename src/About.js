import React from 'react';

import Banner from './Banner';

class About extends React.Component {
    render() {
        const { links } = this.props;
        return(
            <main>
                <section className="index-banner">
                    <div className="vertical-center">
                        <h2>Welcome to my website!</h2>
                        <h1>Follow my journey</h1>
                    </div>
                </section>
                <section className="index-links">
                    {links.map(link => {
                        return <Banner key={link} banner={link} />
                    })}
                </section>
            </main>
        )
    }
}

export default About;