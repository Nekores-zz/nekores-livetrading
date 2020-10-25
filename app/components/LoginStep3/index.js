/**
 *
 * LoginStep3
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal } from 'antd';

function LoginStep3(props) {
  const { previewVisible, previewImage, fileList } = props.state;
  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div className="clearfix">
      <Upload
        action="//jsonplaceholder.typicode.com/posts/"
        listType="picture-card"
        fileList={fileList}
        onPreview={props.handleUploadPreview}
        onChange={props.handleChange}
      >
        {fileList.length >= 3 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={props.handleUploadCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
}

LoginStep3.defaultProps = {
  state: {},
  handleChange: () => {},
  handleUploadPreview: () => {},
  handleUploadCancel: () => {},
};

LoginStep3.propTypes = {
  state: PropTypes.oneOfType([PropTypes.object]),
  handleChange: PropTypes.func,
  handleUploadPreview: PropTypes.func,
  handleUploadCancel: PropTypes.func,
};

export default LoginStep3;
