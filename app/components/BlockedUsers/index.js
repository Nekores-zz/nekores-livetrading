/**
 *
 * BlockedUsers
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Avatar from 'react-avatar';
// import styled from 'styled-components';

class BlockedUsers extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
  }
  handlerUnblock = (item) => {
    this.props.unblockAction({ uid: item.uid, config: this.props.config });
    this.props.userinfoAction({ uid: item.uid, config: this.props.config });
  }
  render() {
    const { golive } = this.props;
    const publics = golive && golive.userinfo && golive.userinfo.publicInfo;
    const blockusers = publics && publics.blockedUsers;

    return (
      <div className="stream-title">
        <div className="block-padding">
          <h2 className="block-heading">Blocked Users</h2>
          <p>{blockusers && blockusers.length > 0 ? 'These user not able to enter you broadcaster' : 'There are no blocked users'}</p>
          <Row>
            {Array.isArray(blockusers) && blockusers.map((item) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={6}
                xxl={4}
                style={{
                  paddingLeft: '10px',
                  paddingRight: '10px',
                }}
              >
                <div className="following-box">
                  <div className="sub-following-box">
                    <Avatar src={item && item.image} name={item && item.name} size="99px" alt="#" />
                  </div>
                  <div className="following-text">
                    <h3 className="boex-heading textHide"><b className="truncated-text" >{item && item.name}</b></h3>
                    <div className="boex-heading" style={{ marginTop: '20px' }}>
                      <button className="truncat" onClick={() => this.handlerUnblock(item)} >{'UNBLOCK'}</button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

BlockedUsers.propTypes = {
  unblockAction: PropTypes.oneOfType([PropTypes.func]),
  userinfoAction: PropTypes.oneOfType([PropTypes.func]),
  golive: PropTypes.oneOfType([PropTypes.object]),
  config: PropTypes.oneOfType([PropTypes.object]),
};

export default BlockedUsers;
