import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import Page from '../../molecules/pageComponent/PageComponent';
import styles from './home.module.scss';
import SocialLink from './SocialLink';
import ListItemComponent from '../../molecules/listItemComponent/ListItemComponent';
import { Avatar, HeaderM, HeaderXL, Toggle } from '../../atoms';
import { postItems } from './posts';
import ThemeContext from '../../themes/ThemeContext';
import { DARK, ROUTES } from '../../themes/strings';
import * as colors from '../../themes/colors';
import { SHORT_BLOG_DESCRITION } from '../../themes/strings';

const displayPicture = require('../../assets/me.jpg');

const mobileQuery = window.matchMedia('(max-width: 768px)');
const tabletQuery = window.matchMedia('(max-width: 1280px)');

class Home extends PureComponent {
  onPostSelect = val => {
    switch (val) {
      case 0:
        this.props.history.push('/itemone');
        break;
      case 1:
        break;

      default:
        break;
    }
  };

  mediaSize = () => {
    mobileQuery.addListener(this.screenTestMobile);
    tabletQuery.addListener(this.screenTestTablet);

    let size = '';
    if (mobileQuery.matches) {
      size = '70px';
    } else if (tabletQuery.matches) {
      size = '60px';
    } else {
      size = '100px';
    }
    return size;
  };

  onCredits = () => {};

  onNavigateToInfo = () => {
    this.props.history.push('/resume');
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const { body, link, mainTitle } = theme.config;
          return (
            <Page>
              <Page.Body className={styles.pageHeader}>
                <Toggle
                  checked={theme.type === DARK}
                  toggleTheme={this.props.toggleTheme}
                />

                <div>
                  <HeaderXL style={{ color: mainTitle }} text={'SpaceH'} />
                </div>

                <div>
                  <Avatar
                    className={styles.avatar}
                    image={displayPicture}
                    onClickImage={this.onNavigateToInfo}
                    size={'125px'}
                  />
                </div>

                <div className={styles.title}>
                  <HeaderM
                    text={'Harshit Prajapati'}
                    color={colors.lightRed}
                    onClick={this.onNavigateToInfo}
                  />
                </div>

                <div className={styles.subTitle}>
                  <h3>{SHORT_BLOG_DESCRITION}</h3>
                </div>

                <div className={styles.links}>
                  <SocialLink />
                </div>

                <div className={styles.navContainer}>
                  <h2
                    className={styles.navItems}
                    style={{ color: link }}
                    onClick={this.onCredits}
                  >
                    {ROUTES.CREDITS}
                  </h2>
                  <h2
                    className={styles.navItems}
                    style={{ color: link }}
                    onClick={this.onNavigateToInfo}
                  >
                    {ROUTES.RESUME}
                  </h2>
                </div>

                <div
                  className={styles.footer}
                  style={{ backgroundColor: body }}
                >
                  <div className={styles.button} />

                  <div
                    style={{ backgroundColor: body }}
                    className={styles.container}
                  >
                    <div className={styles.cont}>
                      <ListItemComponent
                        items={postItems}
                        onClickItem={this.onPostSelect}
                        size={this.mediaSize}
                      />
                    </div>
                  </div>
                </div>
              </Page.Body>
            </Page>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default withRouter(Home);
