import React from 'react';
import PropTypes from 'prop-types';
export function Row(props) {
  return (
    <div className="row" {...props}>
      {props.children}
    </div>
  );
}

Row.defaultProps = {
  children: null,
};

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
};

export function Col(props) {
  const { xs, sm, md, lg, className } = props;

  let classss = '';

  if (xs !== null && xs !== undefined) {
    classss += `col-xs-${props.xs} `;
  }
  if (sm !== null && sm !== undefined) {
    classss += `col-sm-${props.sm} `;
  }
  if (md !== null && md !== undefined) {
    classss += `col-md-${props.md} `;
  }
  if (lg !== null && lg !== undefined) {
    classss += `col-lg-${props.lg} `;
  }

  return (
    <div
      className={`${classss !== null && classss} ${className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

Col.defaultProps = {
  children: null,
  style: {},
  lg: '',
  md: '',
  sm: '',
  xs: '',
  className: '',
};

Col.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.object]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
