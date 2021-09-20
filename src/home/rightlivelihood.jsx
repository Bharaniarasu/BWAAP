import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";
import TargetCircle from "../assets/images/target-circle.png";

const Rightlivelihood = () => {
  return (
    <Row className="p-2 alt-section">
      <Col
        span={16}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2>Right livelihood</h2>
        <p>
          The 'Right livelihood' embodies the principle that each person should
          follow an honest occupation which fully respects other people and the
          natural world and live an ethically positive life. It also
          emphasized being responsible for the consequences of our actions and
          taking only a fair share of the earth's resources. Broadly, If the way
          of living, conduct, and behavior is carried out in the right
          manner, it is Right Livelihood. 'Right Livelihood' encapsulates in
          'Right View, Right Effort, Right Focus, Right Outcome'. 
        </p>
        <Button>Experinece Right livelihood</Button>
      </Col>
      <Col span={6} offset={2} className="img-an">
        <img src={TargetCircle} width="100%" height="100%" />
      </Col>
    </Row>
  );
};
export default withRouter(Rightlivelihood);
