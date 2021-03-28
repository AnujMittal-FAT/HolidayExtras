import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const DashboardButton = ({ name, iconName, url }) => {
  return (
    <Col className="dash-item" md="3">
      <Link to={url}>
        <Row>
          <Col md="9">
            <p className="dash-item-title">{name}</p>
          </Col>
          <Col md="3">
            <div className="dash-icon-holder">
              <div className="dash-icon-bumper">
                <FontAwesomeIcon className="dash-icon" icon={iconName} />
              </div>
            </div>
          </Col>
        </Row>
      </Link>
    </Col>
  );
};

export default DashboardButton;
