import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

function HeaderContent() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm>
            <div className="titleText">
              <h4 className="headerTitle">
                Top-rated, <br /> Competent and Reliable
                <span className="attorney"> attorneys.</span>
              </h4>
            </div>
            <div className="searchHeader">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  placeholder="Try “consultaion service” "
                  className="mr-sm-2"
                />
              </InputGroup>
              <Button
                variant="outline-success"
                className="searchBtnHeader mt-3"
              >
                Search
              </Button>
            </div>
          </Col>
          <Col sm>
            <div className="bda"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderContent;
