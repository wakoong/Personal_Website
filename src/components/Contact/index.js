import React from "react";
import { connect } from "react-redux";

import * as contact from "../../actions/contact";

class Contact extends React.Component {
  render() {
    return (
      <div className="body-wrapper">
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <h1>Contact me</h1>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="standard-input"
                onChange={this.props.handleNameChange}
                value={this.props.name}
              />
            </label>
            <label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="standard-input"
                onChange={this.props.handleEmailChange}
                value={this.props.email}
              />
            </label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              className="standard-textarea"
            />
            <input
              type="submit"
              value="SEND IT!"
              className="standard-submit-btn"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.contact.name,
    email: state.contact.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleNameChange(event) {
      dispatch(contact.onTypeSenderName(event.target.value));
    },
    handleEmailChange(event) {
      dispatch(contact.onTypeSenderEmail(event.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
