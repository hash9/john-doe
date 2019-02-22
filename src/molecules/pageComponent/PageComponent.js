import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './pageComponent.module.scss';

const NOOP = () => {};

const Page = ({ children, forwardRef }) => (
  <div ref={forwardRef} className="relative">
    {children}
  </div>
);

const Header = ({ children, className, style, hasSeparator }) => {
  return [
    <div className={cx(styles.headerContainer, className)} style={style}>
      <div className={cx(styles.headerContent)}>{children}</div>
    </div>,
    hasSeparator && <hr className={cx(styles.separator)} />,
  ];
};

Page.Header = withRouter(Header);

Page.Body = ({ children, className, style }) => (
  <div className={cx(styles.pageBody, className)} style={style}>
    {children}
  </div>
);

Page.Footer = ({ children, className, style }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.array,
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Page.defaultProps = {
  children: null,
  forwardRef: NOOP,
};

Page.Header.propTypes = {
  children: PropTypes.array,
  className: PropTypes.object,
  style: PropTypes.object,
};

Page.Header.defaultProps = {
  children: null,
  className: null,
  style: null,
};

Page.Body.propTypes = {
  children: PropTypes.array,
  className: PropTypes.object,
  style: PropTypes.object,
};

Page.Body.defaultProps = {
  children: null,
  className: null,
  style: null,
};

Page.Footer.propTypes = {
  children: PropTypes.array,
  className: PropTypes.object,
  style: PropTypes.object,
};

Page.Footer.defaultProps = {
  children: null,
  className: null,
  style: null,
};

export default Page;
