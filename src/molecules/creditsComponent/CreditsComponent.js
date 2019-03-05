import React from 'react';
import PropTypes from 'prop-types';
import HeaderR from '../../atoms/headerR';
import styles from './creditsComponent.module.scss';
import ThemeContext from '../../themes/ThemeContext';
import classNames from 'classnames';

const EMPTY_ARRAY = [];
const EMPTY_STRING = '';

const CreditsComponent = ({ items }) => {
  return (
    <ThemeContext.Consumer>
      {theme => {
        const { mainDesc, mainTitle } = theme.config;
        return (
          <div className={styles.mainContainer}>
            {items.length &&
              items.map((item, index) => (
                <div className={styles.brandContainer}>
                  <HeaderR
                    style={{ color: mainTitle, textAlign: 'center' }}
                    text={item.title}
                  />

                  {item.content.map((c, i) => (
                    <div className={styles.svgContainer}>
                      {c.name !== 'React' ? (
                        <div>
                          <a
                            href=""
                            className={classNames(
                              styles.cLink,
                              styles.cLinkBrand
                            )}
                          >
                            <svg className={classNames(styles.cIcon)}>
                              <use xlinkHref={c.useId} />
                            </svg>
                          </a>
                          <svg style={{ display: 'none' }}>
                            <symbol id={c.symbolId} viewBox="0 0 24 24">
                              <path d={c.path} />
                            </symbol>
                          </svg>
                        </div>
                      ) : (
                        <div>
                          <a
                            href=""
                            className={classNames(
                              styles.cLink,
                              styles.cLinkBrand
                            )}
                          >
                            <svg className={classNames(styles.cIcon)}>
                              <use xlinkHref={c.useId} />
                            </svg>
                          </a>
                          <svg style={{ display: 'none' }}>
                            <symbol id={c.symbolId} viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="2.139" />
                              <path d={c.path1} />
                              <path d={c.path2} />
                              <path d={c.path3} />
                              <path d={c.path4} />
                            </symbol>
                          </svg>
                        </div>
                      )}

                      <HeaderR
                        style={{ color: mainDesc, paddingLeft: 20 }}
                        text={c.name}
                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

CreditsComponent.propTypes = {
  items: PropTypes.arrayOf([
    {
      value: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.arrayOf([
        {
          useId: PropTypes.string,
          symbolId: PropTypes.string,
          path: PropTypes.string,
        },
      ]),
    },
  ]),
};

CreditsComponent.defaultProps = {
  items: EMPTY_ARRAY,
  value: EMPTY_STRING,
  title: EMPTY_STRING,
  content: EMPTY_ARRAY,
  useId: EMPTY_STRING,
  symbolId: EMPTY_STRING,
  path: EMPTY_STRING,
};

export default CreditsComponent;
