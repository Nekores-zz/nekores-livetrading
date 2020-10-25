import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import MyDetail from '../../components/MyDetail';
import AboutSideBr from '../../components/AboutSideBr';

function AboutTab({ aboutme, totalViews }) {
  return (
    <Row>
      <Col xs={24} sm={24} md={8} className="first-tab">
        <AboutSideBr aboutme={aboutme} totalViews={totalViews} />
      </Col>
      <Col xs={24} sm={24} md={16}>
        <MyDetail aboutme={aboutme} />
      </Col>
    </Row>
  );
}
AboutTab.propTypes = {
  aboutme: PropTypes.object,
};
export default AboutTab;
