import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import MyDetail from '../../components/MyDetail';
import AboutSideBr from '../../components/AboutSideBr';

function AboutTab({ aboutme, socialLinks, totalViews }) {
  return (
    <Row>
      <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6} className="first-tab">
        <AboutSideBr aboutme={aboutme} socialLinks={socialLinks} totalViews={totalViews} />
      </Col>
      <Col xs={24} sm={24} md={18}>
        <MyDetail aboutme={aboutme} />
      </Col>
    </Row>
  );
}
AboutTab.propTypes = {
  aboutme: PropTypes.oneOfType([PropTypes.object]),
  socialLinks: PropTypes.oneOfType([PropTypes.object]),
};
export default AboutTab;
