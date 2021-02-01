import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import IndividualAppointment from "./IndividualAppointment";
import YourAppointments from "./YourAppointments";

const ScheduledAppointmentsTab = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  useEffect(() => {
    axios.get("/api/all-appointments").then(({ data }) => {
      // data: [{_id, email, eventId, hostUserId, name, time, timezone},...]

      const upcomingAppointments = [];
      const pastAppointments = [];

      data.forEach((appointment) => {
        // appointment: {_id, email, eventId, hostUserId, name, time, timezone}
        if (appointmentIsUpcoming(appointment.time)) {
          upcomingAppointments.push(appointment);
        } else {
          pastAppointments.push(appointment);
        }
      });

      setUpcomingAppointments(upcomingAppointments);
      setPastAppointments(pastAppointments);
    });
  }, []);
  return (
    <Grid container direction="column">
      <YourAppointments
        upcoming={true}
        empty={upcomingAppointments.length === 0}
      />

      {upcomingAppointments.length !== 0 &&
        upcomingAppointments.map((appointment) => (
          <IndividualAppointment
            key={appointment._id}
            appointmentId={appointment._id} //this is for child access
            upcoming={true}
            attendeeName={appointment.name}
            time={appointment.time}
            duration={appointment.duration}
            attendeeEmail={appointment.email}
            attendeeTimezone={appointment.timezone}
            eventId={appointment.eventId}
          />
        ))}

      <YourAppointments
        upcoming={false}
        empty={pastAppointments.length === 0}
      />

      {pastAppointments.length !== 0 &&
        pastAppointments.map((appointment) => (
          <IndividualAppointment
            key={appointment._id}
            appointmentId={appointment._id} //this is for child access
            upcoming={false}
            attendeeName={appointment.name}
            time={appointment.time}
            duration={appointment.duration}
            attendeeEmail={appointment.email}
            attendeeTimezone={appointment.timezone}
            eventId={appointment.eventId}
          />
        ))}
    </Grid>
  );
};

const appointmentIsUpcoming = (appointmentDateInISOString) => {
  // upcoming === true indicate that the appointment has not occurred
  const today = Date.now();
  const appointmentDate = Date.parse(appointmentDateInISOString);
  return today < appointmentDate;
};

export default ScheduledAppointmentsTab;
