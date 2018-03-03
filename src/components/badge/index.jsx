import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  alert: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  cssModule: PropTypes.object,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span',
};

const Badge = (props) => {
  const {
    className,
    cssModule,
    color,
    pill,
    alert,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    `badge-${color}`,
    pill ? 'badge-pill' : false,
    alert ? 'badge-alert' : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
