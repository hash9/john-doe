import React, { Component } from 'react';
import styles from './credits.module.scss';
import { HeaderXL } from '../../atoms';
import ThemeContext from '../../themes/ThemeContext';
import CreditsComponent from '../../molecules/creditsComponent/CreditsComponent';
import { brands } from './brands';

class Credits extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const { mainTitle } = theme.config;
          return (
            <div className={styles.cont}>
              <HeaderXL
                style={{ color: mainTitle, textAlign: 'center' }}
                text={'Powered By'}
              />
              <CreditsComponent items={brands} />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Credits;
