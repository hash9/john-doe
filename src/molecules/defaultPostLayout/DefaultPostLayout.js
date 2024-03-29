import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Disqus from 'disqus-react';
import Page from '../pageComponent/PageComponent';
import Avatar from '../../atoms/avatar';
import HeaderR from '../../atoms/headerR';
import HeaderXL from '../../atoms/headerXL';
import Anchor from '../../atoms/anchor';
import styles from './defaultPostLayout.module.scss';
import ThemeContext from '../../themes/ThemeContext';
import { SHORT_BLOG_DESCRIPTION } from '../../themes/strings';
import Disqus from '../disqus/disqus';

const displayPicture = require('../../assets/me.jpg');
const EMPTY_OBJECT = {};
// const disqusShortname = 'space-h';

const mobileQuery = window.matchMedia('(max-width: 768px)');
const tabletQuery = window.matchMedia('(max-width: 1280px)');

class DefaultPostLayout extends Component {
  mediaSize = () => {
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

  render() {
    const { postTitle, postDate, mainContent, handleBlogName } = this.props;
    const { state, pathname } = this.props.location;
    // const disqusConfig = {
    //   url: pathname,
    //   identifier: state.id,
    //   title: state.title,
    // };
    return (
      <ThemeContext.Consumer>
        {theme => {
          const { link, mainTitle, hXl, content } = theme.config;
          return (
            <Page>
              <Page.Header className={styles.dPageHeader}>
                <header>
                  <HeaderR text={'SpaceH'} onClick={handleBlogName} />
                </header>
              </Page.Header>
              <Page.Body className={styles.dPageBody}>
                <main>
                  <article>
                    <header>
                      <div className={styles.mainContainer}>
                        <div className={styles.titleContainer}>
                          <HeaderXL
                            style={{ color: mainTitle, margin: 1 }}
                            text={postTitle}
                          />
                        </div>

                        <div className={styles.dateContainer}>
                          <small style={{ color: hXl }}>{postDate}</small>
                        </div>
                      </div>
                    </header>

                    <div className={styles.content}>{mainContent}</div>
                  </article>
                </main>
              </Page.Body>
              <Page.Footer className={styles.dPageFooter}>
                <footer>
                  <HeaderR text={'SpaceH'} onClick={handleBlogName} />

                  <div className={styles.footerMainContainer}>
                    <div className={styles.footerLeftContainer}>
                      <Avatar image={displayPicture} size={'60px'} />
                    </div>

                    <div className={styles.footerRightContainer}>
                      <div className={styles.footerTopTextStyle}>
                        <p style={{ color: content }}>
                          Personal Blog by{' '}
                          <Anchor
                            href={'https://github.com/hash9'}
                            style={{ color: link }}
                            text={'Harshit Prajapati'}
                          />
                        </p>
                        <p style={{ color: content }}>
                          {SHORT_BLOG_DESCRIPTION}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                  /> */}
                  <Disqus identifier={pathname} title={state.title} />
                </footer>
              </Page.Footer>
            </Page>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

DefaultPostLayout.propTypes = {
  postTitle: PropTypes.string,
  postDate: PropTypes.string,
  size: PropTypes.string,
  mainContent: PropTypes.object,
};

DefaultPostLayout.defaultProps = {
  postTitle: 'Oh ***!, Something`s wrong, you shouldn`t be seeing this',
  postDate: '9th April, 1995',
  size: '70px',
  mainContent: EMPTY_OBJECT,
};

export default DefaultPostLayout;
