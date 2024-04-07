import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          Event List Section
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          Main Content Section
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default Home;
