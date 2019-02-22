import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/avatar';
import HeaderM from '../../atoms/headerM';
import styles from './listItemComponent.module.scss';
import ThemeContext from '../../themes/ThemeContext';

const jsLogo = require('../../assets/javascript_logo.png');
const EMPTY_ARRAY = [];
const NOOP = () => {};
const EMPTY_STRING = '';

const ListItemComponent = ({ items, onClickItem, size }) => {
  return (
    items.length &&
    items.map((item, index) => (
      <ThemeContext.Consumer>
        {theme => {
          const { content, mainTitle } = theme.config;
          return (
            <div
              className={styles.mainContainer}
              onClick={() => onClickItem(item.value)}
            >
              <div className={styles.leftContainer}>
                <Avatar image={jsLogo} size={size} />
              </div>

              <div className={styles.rightContainer}>
                <div className={styles.titleContainer}>
                  <HeaderM style={{ color: mainTitle }} text={item.title} />
                </div>

                <div className={styles.dateContainer}>
                  <small style={{ color: content }}>{item.date}</small>
                </div>

                <div className={styles.bottomHalfContainer}>
                  <p style={{ color: content }}>{item.subTitle}</p>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    ))
  );
};

ListItemComponent.propTypes = {
  items: PropTypes.arrayOf([
    {
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
    },
  ]),
  onClickItem: PropTypes.func,
  size: PropTypes.func,
};

ListItemComponent.defaultProps = {
  items: EMPTY_ARRAY,
  title: EMPTY_STRING,
  date: EMPTY_STRING,
  subTitle: EMPTY_STRING,
  onClickItem: NOOP,
  size: NOOP,
};

export default ListItemComponent;
