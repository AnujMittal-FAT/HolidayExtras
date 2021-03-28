import React from "react";
import { CHeader } from "@coreui/react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <CHeader fixed={false}>
      <Col className="header-bullet shadow-sm">
        <Row>
          <Col md="10" className="header-left">
            <Row>
              <h1>Holiday Extra Assignment</h1>
            </Row>
          </Col>
          <Col md="2">
            <div className="user-halo">
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
          </Col>
        </Row>
      </Col>
    </CHeader>
  );
};

export default Header;
