import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <Fragment>
      <MeetupDetail
        image={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        }
        title={"A First Meetup"}
        address={"Some address"}
        description={"Description of meetup"}
      />
    </Fragment>
  );
};

export default MeetupDetails;
