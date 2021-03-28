import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


const DashboardPanel = ({ quantity, urgent, name, url }) => {

  return (
    <Col className="dash-item" md="3">
      <Link to={url}>
        <Row>
          <Col sm="9">
            <h3>{quantity}</h3>
            <p className="dash-item-title align-bottom">{name}</p>
          </Col>
          <Col sm="3">
            <div className="dash-urgent">
              <div className="dash-urgent-percentage">
                <div className="dash-urgent-colour"></div>
                <div className="dash-urgent-bumper">
                  {urgent}/{quantity}
                </div>
              </div>
              <p>Urgent</p>
            </div>
          </Col>
        </Row>
      </Link>
    </Col>
  );
};

export default DashboardPanel;
