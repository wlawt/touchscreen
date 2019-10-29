import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class Landing extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Container maxWidth="sm">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Use Camera
          </Button>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Landing);
