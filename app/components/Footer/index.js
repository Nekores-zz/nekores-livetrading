import React from 'react';
import { Row, Col, Input, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';
import WraperFooter from './footerStyl';

function Footer() {
  const { Content } = Layout;

  const Search = Input.Search;
  return (
    <WraperFooter>
      <div id="mainFooter">
        <Layout>
          <Content style={{ padding: '0 14.5%' }}>
            <Row>
              <Col xs={8} sm={8} md={4} lg={4}>
                <h3>LiveTrading</h3>
                <br />
                <br />
                <p className="copyright">&copy; LiveTrading 2018</p>
              </Col>
              <Col xs={8} sm={8} md={4} lg={4}>
                <ul>
                  <li>
                    <Link to={'/userDetail'}>About us</Link>
                  </li>
                  <li>
                    <Link to={'/userDetail'}>Contact</Link>
                  </li>
                  <li>
                    <Link to={'/userDetail'}>Termns & condition</Link>
                  </li>
                </ul>
              </Col>
              <Col xs={8} sm={8} md={4} lg={4}>
                <ul className="social-media">
                  <li>
                    <a className="social-icon faceb">
                      <Icon type="facebook" theme="outlined" />
                      <span>facebook</span>
                    </a>
                  </li>
                  <li>
                    <a className="social-icon twitt">
                      <Icon type="twitter" theme="outlined" />
                      <span>twitter</span>
                    </a>
                  </li>
                  <li>
                    <a className="social-icon insta">
                      <Icon type="instagram" theme="outlined" />
                      <span>instagram</span>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={24} sm={8} md={7} lg={7}>
                <ul className="social-media margn-t">
                  <li className="newsletter">
                    <a className="social-icon">Subscribe to our newsletter</a>
                  </li>
                  <li>
                    <a className="social-icon insta">
                      <Search
                        placeholder="input search text"
                        enterButton="ok"
                        size="large"
                      />
                    </a>
                  </li>
                </ul>
              </Col>

              <Col xs={24} sm={8} md={5} lg={5}>
                <ul className="social-media adres margn-t">
                  <li>
                    <a className="social-icon faceb">
                      497 Evergreen Rd. Roseville, CA 95673
                    </a>
                  </li>
                  <li>
                    <a className="social-icon faceb"> +44 345 678 903</a>
                  </li>
                  <li>
                    <a className="social-icon faceb"> adobexd@mail.com</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    </WraperFooter>
  );
}
Footer.propTypes = {};

export default Footer;
