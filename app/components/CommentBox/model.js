import React from 'react';

import {
  Modal,
  Input,
  Popover,
  Menu,
  Dropdown,
  message,
  Form,
  Button,
  Upload,
  Icon,
  Select,
  Divider,
} from 'antd';

const ReportModel = ({ }) => {
  const uploadButton = (
  <div>
  <Icon type={this.state.loading ? 'loading' : 'plus'} />
  <div className="ant-upload-text">Upload</div>
      <p>(optional)</p>
    </div>
  );
  const imageUrl = this.state.imageUrlss;
  const Option = Select.Option;
  const { TextArea } = Input;

  return (
    <div>
      <Modal
  title="Report User"
        visible={this.state.dialog}
        style={{ zIndex: '11111' }}
        onCancel={() => this.setState({ dialog: false })}
        onOk={this.reportSubmition}
        okText="Submit"
        wrapClassName="modeltltte"
        bodyStyle={{ background: '#fff', padding: '0 20px' }}
      >
        <p>{"We look into every report that's submitted. Please note that abusing the report system itself isn't nice and runs the risk of account suspension!"}</p>

        {/* <Select
					defaultValue="Nudity"
					style={{ width: '100%', marginBottom: '15px' }}
					onChange={(e) => this.handlerreason(e)}
					dropdownRender={(menu) => (
						<div>
							{menu}
		<Divider style={{ margin: '4px 0' }} />
							<div style={{ padding: '8px', cursor: 'pointer' }}>
		<Icon type="plus" /> Add item
							</div>
						</div>
					)}
				>
					<Option value="Nudity">Nudity</Option>
					<Option value="Under 13 y/o">Under 13 y/o</Option>
					<Option value="Spam">Spam</Option>
					<Option value="Harassment">Harassment</Option>
		<Option value="Other">Other</Option>
				</Select>
				<TextArea
					rows={4}
					type="text"
					placeholder="Note: additional info if you needs (optional)"
					style={{ marginBottom: '15px' }}
		onChange={(e) => this.handlernote(e)}
				/>
				<Upload
					name="avatar"
					listType="picture-card"
					className="avatar-uploader"
					showUploadList={false}
					action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
					beforeUpload={this.beforeUpload}
					onChange={this.handleChange}
				>
					{imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}

				</Upload> */}

      </Modal>
    </div>
  );
};

export default ReportModel;
