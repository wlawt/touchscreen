import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

// Actions
import { getBackend } from "../../actions/backActions";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  onClick = e => {
    e.preventDefault();

    this.props.getBackend();
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Container maxWidth="sm">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.onClick}
          >
            Use Camera
          </Button>
        </Container>
      </Fragment>
    );
  }
}

Landing.propTypes = {
  getBackend: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getBackend }
)(withStyles(styles)(Landing));
