import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
  Grid,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const IndividualAppointment = ({
  appointmentId,
  upcoming,
  attendeeName,
  attendeeEmail,
  attendeeTimezone,
  time,
  duration,
}) => {
  const classes = useStyles();
  return (
    <Accordion
      TransitionProps={{
        timeout: 0, //allows animation to look smoother
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography variant="body1">{time}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">{attendeeName}</Typography>
            <Typography variant="body1">Event type {duration}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={3}>
          <Grid item xs={8} container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="body1">Email: {attendeeEmail}</Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1">
                Attendee timezone: {attendeeTimezone}
              </Typography>
            </Grid>
          </Grid>
          {upcoming && ( //render the reschedule and cancel button if the appointment is coming up
            <>
              <Divider orientation="vertical" flexItem={true} />
              <Grid
                item
                xs={4}
                container
                direction="column"
                alignItems="flex-end"
                spacing={3}
              >
                <Grid item>
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="secondary"
                  >
                    Reschedule
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="secondary"
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles((theme) => ({
  button: { width: theme.spacing(15) },
}));

export default IndividualAppointment;
