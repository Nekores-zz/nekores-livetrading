/**
 *
 * SocialProfile
 *
 */

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Input, Radio, Icon, Button } from 'antd';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { fromJS } from 'immutable';
import {
  makeSelectCurrentUser,
  loginUser,
  appAccessToken,
} from '../../containers/App/selectors';
import {
  loginUserAction,
  UpdateUserAction,
} from '../../containers/App/actions';
import Http from '../../utils/axios';
import deleteSocialProfileLinks from './DeleteLink.gql';
import { makeSelectGoLive } from '../../containers/GoLive/selectors';

import SocialProfileStyl from './SocialProfileStyl';

// const fireBase = fire.fire;
// // const google = fire.googleProvider;
// // const facebook = fire.facebookProvider;
// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }
class SocialProfile extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  static getDerivedStateFromProps(nextProps, prevState) {
    const loginU = nextProps.loginUser || null;
    if (loginU) {
      return {
        loginInfo: loginU,
      };
    }
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sociallinks: null,
      getUserInfo: '',
      loginInfo: null,
      appAccessToken: props.appAccess
        ? fromJS(props.appAccess).toJS()
        : 'empty',
      social: [{}],
      youtube: '',
      plus: true,
      twitterplus: true,
      minus: true,
      isUpdate: null,
    };
  }

  handlerChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  // facebookFun = () => {
  //   const token = this.state.appAccessToken.appAccessToken;
  //   const config = {
  //     headers: { Authorization: `bearer ${token}` },
  //   };
  //   const facebook = this.state.facebook;
  //   this.props.facebookAction({ facebook, config });
  // }

  // twitterFunc = () => {
  //   const twitter = this.state.twitter;
  //   const token = this.state.appAccessToken.appAccessToken;
  //   const config = {
  //     headers: { Authorization: `bearer ${token}` },
  //   };
  //   this.props.twitterAction({ twitter, config });
  //   // if (this.state.twitterplus === true) {
  //   //   this.setState({
  //   //     twitterplus: false,
  //   //   });
  //   // } else {
  //   //   this.setState({
  //   //     twitterplus: true,
  //   //   });
  //   // }
  // }

  handleLinks = (name, value) => {
    const twitter = this.state.twitter;
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    const { golive } = this.props;
    const links = golive && golive.userinfo && golive.userinfo.socialLinks;
    const changeLinks = () => {
      const sociallinks = { ...this.state.sociallinks };
      if (sociallinks[name]) {
        Http.post(
          '',
          {
            query: deleteSocialProfileLinks,
            variables: { social: name },
          },
          config
        );
        delete sociallinks[name];
        this.setState({ sociallinks });
      } else {
        sociallinks[name] = value;
        this.setState({ sociallinks });
      }
    };

    if (this.state.sociallinks === null) {
      this.setState({ sociallinks: links }, changeLinks);
    } else {
      changeLinks();
    }
  }

  handlerUpdateslink = () => {
    const token = this.state.appAccessToken.appAccessToken;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    const socialprofilelinks = this.state.sociallinks;
    this.props.socilaprofileAction({ socialprofilelinks, config });
  }


  handleLinksChange = (name, value) => {
    const { golive } = this.props;
    const links = golive && golive.userinfo && golive.userinfo.socialLinks;

    const updateLinks = () => {
      this.setState(() => {
        const sociallinks = { ...this.state.sociallinks };
        sociallinks[name] = value;
        return {
          sociallinks,
        };
      });
    };

    if (this.state.sociallinks === null) {
      this.setState({ sociallinks: links }, updateLinks);
    } else {
      updateLinks();
    }
  }

  render() {
    const { golive } = this.props;
    const links = golive && golive.userinfo && golive.userinfo.socialLinks;
    const sociallinks = this.state.sociallinks || links;
    const facebook = sociallinks && sociallinks.facebook;
    const instagram = sociallinks && sociallinks.instagram;
    const snapchat = sociallinks && sociallinks.snapchat;
    const telegram = sociallinks && sociallinks.telegram;
    const twitter = sociallinks && sociallinks.twitter;
    const youtube = sociallinks && sociallinks.youtube;
    // const { loginInfo } = this.state;
    return (
      <SocialProfileStyl>
        <div className="social-box">
          <div className="items">
            <h3>Social Profile</h3>
            <br />
          </div>
          <div className="item addsocial">
            <h4>Instagram</h4>
            <div className="input-icn-bx">
              <div className="input-icn">
                <Input
                  type="url"
                  disabled={instagram === undefined || instagram === null}
                  value={instagram || 'https://instagram.com/'}
                  onChange={(e) => this.handleLinksChange('instagram', e.target.value)}
                />
                <Icon type="instagram" />
              </div>
              <Button className={instagram === undefined || instagram === null ? 'siz red' : 'siz'} onClick={() => this.handleLinks('instagram', 'https://instagram.com/')} shape="circle" icon={instagram === undefined || instagram === null ? 'plus' : 'minus'} />
            </div>
            <h4>Twitter</h4>
            <div className="input-icn-bx">
              <div className="input-icn">
                <Input
                  type="url"
                  disabled={twitter === undefined || twitter === null}
                  value={twitter || 'https://twitter.com/'}
                  onChange={(e) => this.handleLinksChange('twitter', e.target.value)}
                />
                <Icon type="twitter" />
              </div>
              <Button className={twitter === undefined || twitter === null ? 'siz red' : 'siz'} onClick={() => this.handleLinks('twitter', 'https://twitter.com/')} shape="circle" icon={twitter === undefined || twitter === null ? 'plus' : 'minus'} />
            </div>
            <h4>Facebook</h4>
            <div className="input-icn-bx">
              <div className="input-icn">
                <Input
                  type="url"
                  disabled={facebook === undefined || facebook === null}
                  value={facebook || 'https://facebook.com/'}
                  onChange={(e) => this.handleLinksChange('facebook', e.target.value)}
                />
                <Icon type="facebook" />
              </div>
              <Button className={facebook === undefined || facebook === null ? 'siz red' : 'siz'} onClick={() => this.handleLinks('facebook', 'https://facebook.com/')} shape="circle" icon={facebook === undefined || facebook === null ? 'plus' : 'minus'} />
            </div>
            <h4>Youtube</h4>
            <div className="input-icn-bx">
              <div className="input-icn">
                <Input
                  type="url"
                  disabled={youtube === undefined || youtube === null}
                  value={youtube || 'https://youtube.com/'}
                  onChange={(e) => this.handleLinksChange('youtube', e.target.value)}
                />
                <Icon type="youtube" />
              </div>
              <Button className={youtube === undefined || youtube === null ? 'siz red' : 'siz'} onClick={() => this.handleLinks('youtube', 'https://youtube.com/')} shape="circle" icon={youtube === undefined || youtube === null ? 'plus' : 'minus'} />
            </div>
            <h4>Teleram</h4>
            <div className="input-icn-bx">
              <div className="input-icn">
                <Input
                  type="url"
                  disabled={telegram === undefined || telegram === null}
                  value={telegram || 'https://telegram.com/'}
                  onChange={(e) => this.handleLinksChange('telegram', e.target.value)}
                />
                <Icon type="telegram" />
              </div>
              <Button className={telegram === undefined || telegram === null ? 'siz red' : 'siz'} onClick={() => this.handleLinks('telegram', 'https://telegram.com/')} shape="circle" icon={telegram === undefined || telegram === null ? 'plus' : 'minus'} />
            </div>
            <h4>Snapchat</h4>
            <div className="input-icn-bx">
              <div className="input-icn">
                <Input
                  type="url"
                  disabled={snapchat === undefined || snapchat === null}
                  value={snapchat || 'https://snapchat.com/'}
                  onChange={(e) => this.handleLinksChange('snapchat', e.target.value)}
                />
                <Icon type="snapchat" />
              </div>
              <Button className={snapchat === undefined || snapchat === null ? 'siz red' : 'siz'} onClick={() => this.handleLinks('snapchat', 'https://snapchat.com/')} shape="circle" icon={snapchat === undefined || snapchat === null ? 'plus' : 'minus'} />
            </div>
            <br />
          </div>
          <div className="item">
            <Radio.Button
              value="small"
              onClick={this.handlerUpdateslink}
              className="Save"
            >
              SAVE
            </Radio.Button>
          </div>
        </div>
      </SocialProfileStyl>
    );
  }
}

SocialProfile.defaultProps = {
  loginUser: () => { },
  updateUser: () => { },
  homePage: {},
  authenticated: false,
};
SocialProfile.propTypes = {
  // authenticated: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // loginUser: PropTypes.oneOfType([PropTypes.object]),
  appAccess: PropTypes.oneOfType([PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectCurrentUser(),
  golive: makeSelectGoLive(),
  loginUser: loginUser(),
  appAccess: appAccessToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loginUserAction: (payload) => dispatch(loginUserAction(payload)),
    updateUser: (payload) => dispatch(UpdateUserAction(payload)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(SocialProfile);
