/**
*
* Live
*
*/

import React, { Component } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, Button, Input, Col, Form } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Wrapper from './LIveStyle';
export class Live extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { changetitle, submiton, oncopy, url, changeurl, showModal, visible, onOk, editTitle, handleCancel, streamId, secondurl, urlpath } = nextProps;
    if (prevState.changetitle !== changetitle) {
      return {
        changetitle,
        submiton,
        oncopy,
        url,
        changeurl,
        showModal,
        visible,
        onOk,
        editTitle,
        handleCancel,
        streamId,
        secondurl,
        urlpath,
      };
    }
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { changetitle, submiton, oncopy, url, changeurl, showModal, visible, onOk, editTitle, handleCancel, streamId, secondurl, urlpath } = this.state;
    return (
      <Wrapper>
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
                repudiandae doloremque mollitia et id explicabo. Repudiandae dicta
                officia veniam, aliquam quisquam minus inventore similique minima!
                Fugit praesentium quas labore. sit amet consectetur adipisicing
                elit. A in repudiandae doloremque mollitia et id explicabo.
                Repudiandae dicta officia veniam, aliquam quisquam minus inventore
                similique minima! Fugit praesentium quas labore.
                <br /> <br /> sit amet consectetur adipisicing elit. A in
                repudiandae doloremque mollitia et id explicabo. Repudiandae dicta
                officia veniam, aliquam quisquam minus inventore similique minima!
                Fugit praesentium quas labore.
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
                <Form.Item>
                  {/* {getFieldDecorator('email', { initialValue: editTitle }, {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })( */}
                  <Input
                    placeholder="Stream Title Here"
                    size="large"
                    value={editTitle}
                    onChange={changetitle}
                  />
                  {/* )} */}
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    size="default"
                    onClick={submiton}
                  >
                    UPDATE TITLE
                  </Button>
                </Form.Item>
              </div>
            </div>

            {/* stream inputs ends here */}
            <div className="stream-mychannel-button">
              <div className="button">
                <button onClick={showModal} type="primary" className="btn-block" size="large">
                  Stream Preview
                </button>
                <Modal
                  title="Stream Key and Title Preview"
                  visible={visible}
                  closable={false}
                  footer={
                    <span>
                      <Button onClick={onOk} type="primary">Close</Button>
                    </span>
                  }
                  // onCancel={handleCancel}
                  bodyStyle={{ background: '#fff' }}
                  footerStyle={{ background: '#fff !important' }}
                  wrapClassName="modeltltte"
                >
                  <div style={{ padding: '15px' }}>
                    <b>Title : </b>
                    <span>{editTitle}</span><br />
                    <b>Broadcast URL: </b>
                    <span>{secondurl}</span><br />
                    <b>Stream Key: </b>
                    <span>{urlpath}</span>
                  </div>
                </Modal>
              </div>
            </div>

            {/* stream-mychannel-button inputs ends here */}

            <div className="stream-inputs">
              <div className="title">
                <h3>Broadcast URL</h3>
              </div>
              <div className="input">
                <Input
                  placeholder="random number here"
                  value={

                    secondurl
                  }
                  size="large"
                />
              </div>
              <div className="title">
                <h3>Stream Key</h3>
              </div>
              {/* My Stream Key ends here */}
              <div className="input">
                <Input
                  placeholder="random number here"
                  defaultValue={
                    urlpath
                  }
                  value={
                    urlpath
                  }
                  onChange={changeurl}
                  size="large"
                />
                <CopyToClipboard
                  onCopy={oncopy}
                  text={url}
                >
                  <Button type="primary" size="large">
                    GENERATE ANOTHER
                  </Button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </Col>
      </Wrapper>
    );
  }
}

Live.propTypes = {
  editTitle: PropTypes.string,
  showModal: PropTypes.oneOfType([PropTypes.func]),
  changetitle: PropTypes.func,
  submiton: PropTypes.func.isRequired,
  oncopy: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  changeurl: PropTypes.func,
};

export default Live;
