import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, ListGroupItem } from "shards-react";

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
    </CardHeader>
    <ListGroupItem className="p-4">
      <strong className="text-muted d-block mb-2">
        {userDetails.metaTitle}
      </strong>
      <span>{userDetails.metaValue}</span>
    </ListGroupItem>
  </Card>
);

UserDetails.propTypes = {
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Dr. (Ph.D) Ng Hao Yuan",
    avatar: "https://wesearchbucket.s3-ap-southeast-1.amazonaws.com/0.jpg",
    jobTitle:
      "Ph.D. , Speech and Hearing Bioscience and Technology (Philosophy)",
    performanceReportTitle: "Workload",
    metaTitle: "Description",
    metaValue:
      "Dr Ng graduated from the Massachusetts Institute of Technology in 2010, heavily involded in the Harvard–MIT Division of Health Sciences and Technology. His thesis was on: Impact of human vocal fold vibratory asymmetries on acoustic characteristics of sustained vowel phonation"
  }
};

export default UserDetails;
