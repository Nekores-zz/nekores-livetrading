import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
} from 'antd';
  
const Reportuser = () => (
  <div>
    <Modal
      title="Update Title"
    //   visible={this.state.editDialog}
    //   onCancel={() => this.setState({ editDialog: false })}
      style={{ zIndex: '11111' }}
    //   onOk={(e) => this.handlerSubmit(e)}
      okText="update"
      wrapClassName="modeltltte"
      bodyStyle={{ background: '#fff' }}
    >
      <input
        type="text"
        placeholder="title"
        // defaultValue={this.state.editTitle || Videotittle}
        // onChange={(e) => this.tittleChange(e)}
      />
    </Modal>
  </div>
);
Reportuser.propTypes = {

};
export default Reportuser;
