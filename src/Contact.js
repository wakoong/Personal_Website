import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div className="body-wrapper">
                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <h1>Contact me</h1>
                        <label>
                            <input type="text" name="name" placeholder="Name" className="standard-input"/>
                        </label>
                        <label>
                            <input type="text" name="email" placeholder="Email" className="standard-input" /> 
                        </label>
                        <textarea type="text" name="message" placeholder="Message" className="standard-textarea" />
                        <input type="submit" value="SEND IT!" className="standard-submit-btn" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;