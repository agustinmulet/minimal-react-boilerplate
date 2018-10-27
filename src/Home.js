import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import { Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";
import logo from "./logo.png";
import home from "./home.jpg";

class Home extends React.Component {
  state = {
    redirectDonar: false,
    redirectRecibir: false
  };
  handleDonarClick = () => {
    this.setState({ redirectDonar: true });
  };
  handleRecibirClick = () => {
    this.setState({ redirectRecibir: true });
  };
  render() {
    if (this.state.redirectDonar) {
      return <Redirect push to="/donar/" />;
    }
    if (this.state.redirectRecibir) {
      return <Redirect push to="/recibir/" />;
    }
    return (
      <Grid container style={{ display: "flex" }}>
        <Grid
          item
          xs={6}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "32px"
          }}
        >
          <img src={logo} />
          <Typography variant="title">¡Bienvenido!</Typography>
          <p>
            Nos ocupamos de ser el nexo entre los comercios que tienen sobrantes
            y los puntos de distribución para los que menos tienen. Vos, ¿qué
            querés hacer?
          </p>
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={this.handleDonarClick}
              style={{ marginRight: "24px" }}
            >
              Dono
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={this.handleRecibirClick}
            >
              Recibo
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              background: `url(${home})`,
              width: "50vw",
              height: "calc(100vh - 69px)",
              backgroundSize: "cover",
              backgroundPosition: "center center"
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
