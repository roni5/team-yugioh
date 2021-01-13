import React, { useState } from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import AvailableHours from "./smallComponents/AvailableHoursButton";
import AvailableDays from "./smallComponents/AvailableDays";

const SetAvailability = () => {
  const classes = useStyles();

  const [startHour, setStartHour] = useState("");
  const [finishHour, setFinishHour] = useState("");
  const [days, setDays] = useState({});

  return (
    <div className={classes.root}>
      <Grid container direction="column" className={classes.entry}>
        <Typography className={classes.entryText} variant="subtitle1">
          Available hours
        </Typography>

        <Grid container item>
          <AvailableHours hour={startHour} setHour={setStartHour} />
          <div>--</div>
          <AvailableHours hour={finishHour} setHour={setFinishHour} />
        </Grid>
      </Grid>

      <Grid container direction="column" className={classes.entry}>
        <Typography className={classes.entryText} variant="subtitle1">
          Available days
        </Typography>
        <Grid container item>
          <AvailableDays days={days} setDays={setDays} />
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Button
          color="primary"
          variant="contained"
          className={classes.finishButton}
        >
          <Link to="/onboarding/3" className={classes.link}>
            Finish
          </Link>
        </Button>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    height: "20em",
  },
  entryText: {
    margin: "0.05em 0",
  },
  entry: {
    margin: "1.5em 2em",
  },
  pageThreeMain: {
    margin: "1em 0",
  },
  daysGrid: {
    padding: "0",
    margin: "0",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  finishButton: {
    background: theme.palette.primary.button,
    color: "white",
    padding: "15px 50px 15px 50px",
    position: "absolute",
    bottom: "2em",
    width: "3em",
  },
}));

export default SetAvailability;
