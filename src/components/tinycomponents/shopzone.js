import React from "react";
import { Row, Col } from "reactstrap";
import { Cardz } from "./card";

function ShopZone() {
  return (
    <React.Fragment>
      <div className="shopzone">
      <h1 className="text-center p-4 mt-3">MeshaFashion Represents</h1>
        <Row>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
          <Col md="3">
            <Cardz image={require("../images/model2.jpg")} title="product1" />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
export default ShopZone;
