import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import DashboardButton from "../component/molecules/DashboardButton";

const Dashboard = () => {
  const line1 = {
    flickr: [
      {
        name: "Call Flickr API",
        iconName: faLayerGroup,
        url: "/FlickrPhotoStream",
      },
    ],
  };

  const [position, setposition] = useState("flickr");

  useEffect(() => {
    !position ? setposition("flickr") : setposition("flickr");
    return () => {};
  }, []);

  return (
    <Col className="Dashboard">
      <Row className="dash-row d-flex justify-content-between">
        {line1[position].map((dashL1, dsx) => (
          <DashboardButton
            key={dsx}
            name={dashL1.name}
            iconName={dashL1.iconName}
            url={dashL1.url}
          />
        ))}
      </Row>
    </Col>
  );
};

export default Dashboard;
