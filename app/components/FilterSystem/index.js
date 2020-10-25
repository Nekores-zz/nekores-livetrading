/**
 *
 * FilterSystem
 *
 */
import React from 'react';
import { Row, Col, Select } from 'antd';
import Wrapper from './FilterSystemStyl';

class FilterSystem extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    maxTagCount: 3,
  };
  render() {
    const Option = Select.Option;
    const children = [];
    for (let i = 0; i < 3; i++) {
      children.push(
        <Option key={i.toString(10) + i}> {i.toString(9) + i} </Option>
      );
    }
    return (
      <Wrapper>
        <div className="filtter-container">
          <div className="altr-div">
            <h3 className="heading-three">Reset Filters</h3>
          </div>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 6, offset: 1 }}
            >
              <h3>Showing</h3>
              <div className="keyverd incentr">
                <Select
                  labelInValue
                  defaultValue={{ key: 'lucy' }}
                  style={{ width: 120 }}
                >
                  <Option value="jack">Market</Option>
                  <Option value="lucy">market1</Option>
                </Select>
                <Select
                  labelInValue
                  defaultValue={{ key: 'lucy' }}
                  style={{ width: 120 }}
                >
                  <Option value="jack">Jack (100)</Option>
                  <Option value="lucy">Lucy (101)</Option>
                </Select>
              </div>
            </Col>
            <Col
              xs={{ span: 0 }}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 6, offset: 2 }}
            >
              <h3>Filters</h3>
              <div className="keyverd incentr">
                <Select
                  mode="tags"
                  style={{ width: '100%' }}
                  maxTagCount={this.state.maxTagCount}
                  // onChange={handleChange}
                  // tokenSeparators={[',']}
                  showSearch={false}
                  // optionFilterProp={false}
                  dropdownClassName="drpdwn"
                  placeholder="Enter a keyword.."
                >
                  {children}
                </Select>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 6, offset: 2 }}
            >
              <h3>Sort By</h3>
              <div className="keyverd incentr">
                <Select
                  labelInValue
                  defaultValue={{ key: 'lucy' }}
                  style={{ width: 120 }}
                >
                  <Option value="jack">lucy</Option>
                  <Option value="lucy">Views</Option>
                </Select>
                <Select
                  labelInValue
                  defaultValue={{ key: 'lucy' }}
                  style={{ width: 120 }}
                >
                  <Option value="jack">Views</Option>
                  <Option value="lucy">Last 24 Hours</Option>
                </Select>
              </div>
            </Col>
          </Row>
        </div>
      </Wrapper>
    );
  }
}
export default FilterSystem;
