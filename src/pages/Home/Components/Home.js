import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Page from '../../../molecules/pageComponent/PageComponent';
import { NavLink} from 'react-router-dom';
import styles from './Home.module.scss';
import Avatar from '../../../atoms/avatar';
import SocialLink from './SocialLink';
import ListItemComponent from '../../../molecules/listItemComponent/ListItemComponent';
import HeaderL from '../../../atoms/headerL';
import HeaderM from '../../../atoms/headerM';
import HeaderXL from '../../../atoms/headerXL';
import { postItems } from './posts';

const mobileQuery = window.matchMedia( "(max-width: 768px)" );
const tabletQuery = window.matchMedia( "(max-width: 1280px)" );

export default class Home extends PureComponent {

  onPostSelect = (val) => {
    switch(val){
      case 0:
        this.props.history.push("/itemone")
        break;
      case 1: 
        console.log(val)
        break;

      default:
      break;
    }
  }

  mediaSize = () => {
    mobileQuery.addListener(this.screenTestMobile)
    tabletQuery.addListener(this.screenTestTablet)
    
    let size = '';
    if (mobileQuery.matches) {
      size = '70px'
    } else if(tabletQuery.matches) {
      size = '60px'
    } else {
      size = '100px'
    }
    return size;
  }

  onCredits = () => {}

  onNavigateToInfo = () => {
    this.props.history.push("/resume")
  }

  render() {

    return (
      <Page>
        <Page.Body className={styles.pageHeader}>
          <div>
            <HeaderXL text={'SpaceH'} />
          </div>
          
          <div>
            <Avatar className={styles.avatar} image={require('../../../assets/me.jpg')} onClickImage={this.onNavigateToInfo} size={'125px'}/>
          </div>

          <div className={styles.title}>
            <HeaderM text={'Harshit Prajapati'} color={'#ffa7c4'} onClick={this.onNavigateToInfo}/>
          </div>

          <div className={styles.subTitle}>
            <h3>Blog in Progress</h3>
          </div>

          <div className={styles.links}>
            <SocialLink />
          </div>

          <div className={styles.navContainer}>
              <h2 className={styles.navItems} onClick={this.onCredits}>Credits</h2>
              <h2 className={styles.navItems} onClick={this.onNavigateToInfo}>Resume</h2>
          </div>

          <div className={styles.footer}>

            <div className={styles.button}></div>

            <div className={styles.container}>
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
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};
