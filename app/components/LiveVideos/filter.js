import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Row, Input, Affix } from 'antd';
import FilterSystem from 'components/FilterSystem';

const Search = Input.Search;
const Filter = ({ filter, top, handleClick }) => (
  <Affix offsetTop={top}>
    <Row>
      <div
        className="filtering"
        style={{
          top: filter ? '-20px' : '30px',
          right: filter ? '0px' : '10px',
          transition: '0.4s all',
        }}
      >
        <div className="searchbox displayNone">
          <Search placeholder="Search..." style={{ width: 200 }} />
        </div>
        <Button
          className="filtr-btn"
          onClick={(e) => handleClick(e)}
          icon="filter"
        >
          {' ALL FILTER'}
        </Button>
      </div>
      <div className={filter ? 'filterDiv' : 'noneDisplay'}>
        <Button onClick={(e) => handleClick(e)} className="fltrClos">
          <Icon type="close" />
        </Button>
        <FilterSystem />
      </div>
    </Row>
  </Affix>
);
Filter.propTypes = {
  handleClick: PropTypes.oneOfType([PropTypes.func]),
  top: PropTypes.oneOfType([PropTypes.bool]),
  filter: PropTypes.oneOfType([PropTypes.object]),
};
export default Filter;
