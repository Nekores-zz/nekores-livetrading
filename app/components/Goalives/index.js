/**
 *
 * Goalives
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Button, Input, Col } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Goalives extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={7}
          className="small-scrn"
          style={{ padding: '0 15px 0 0' }}
        >
          <div className="stream-title">
            <div className="title">
              <h3>{'Instructions'}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A in
                repudiandae doloremque mollitia et id explicabo. Repudiandae
                dicta officia veniam, aliquam quisquam minus inventore similique
                minima! Fugit praesentium quas labore. sit amet consectetur
                adipisicing elit. A in repudiandae doloremque mollitia et id
                explicabo. Repudiandae dicta officia veniam, aliquam quisquam
                minus inventore similique minima! Fugit praesentium quas labore.
                <br /> <br /> sit amet consectetur adipisicing elit. A in
                repudiandae doloremque mollitia et id explicabo. Repudiandae
                dicta officia veniam, aliquam quisquam minus inventore similique
                minima! Fugit praesentium quas labore.
              </p>
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={9}
          xxl={9}
          className="small-scrn"
          style={{ padding: '0 0 0 15px' }}
        >
          <div className="stream-title">
            <div className="title">
              <h3>{'Stream Title'}</h3>
            </div>
            {/* title ends here */}

            <div className="stream-inputs">
              <div className="input">
                <Input
                  placeholder="Stream Title Here"
                  size="large"
                  value={this.props.editTitles}
                  onChange={(e) => this.tittleChange(e)}
                />
                <Button
                  type="primary"
                  size="default"
                  onClick={(e) => this.handlerSubmit(e)}
                >
                  UPDATE TITLE
                </Button>
              </div>
            </div>

            {/* stream inputs ends here */}
            <div className="stream-mychannel-button">
              <div className="button">
                <button type="primary" className="btn-block" size="large">
                  Stream Preview
                </button>
              </div>
            </div>

            {/* stream-mychannel-button inputs ends here */}

            <div className="stream-inputs">
              <div className="title">
                <h3>My Stream Key</h3>
              </div>
              {/* My Stream Key ends here */}
              <div className="input">
                <Input
                  placeholder="random number here"
                  value={
                    this.props.ulrllink &&
                    this.props.ulrllink.liveStreamPublishedURL &&
                    this.props.ulrllink.liveStreamPublishedURL.url
                  }
                  onChange={this.onChange}
                  size="large"
                />
                <CopyToClipboard
                  onCopy={this.onCopy}
                  text={this.props.publishRTMPURL.url}
                >
                  <Button type="primary" size="large">
                    GENERATE ANOTHER
                  </Button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

Goalives.propTypes = {};

export default Goalives;
