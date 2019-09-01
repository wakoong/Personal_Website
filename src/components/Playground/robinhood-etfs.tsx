import React from 'react';
import { connect } from 'react-redux';

class ETFs extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        {authenticated ? (
          <React.Fragment>
            <h1 className="tab-body-title">ETFs Overview</h1>
          </React.Fragment>
        ) : (
          <div>no</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.robinhoodAccount.logged_in,
});

export default connect(
  mapStateToProps,
  null
)(ETFs);
