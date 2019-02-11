import React from 'react';
import classNames from 'classnames';
import styles from './socialLink.module.scss';

const SocialLink = () => {
	return (
		<div>
			<a href="#0" className={classNames(styles.cLink, styles.cLinkBrand, styles.cTooltip)} aria-label="Facebook">
				<svg className={classNames(styles.cIcon)}>
					<use xlinkHref="#icon--facebook"></use>
				</svg>
			</a>
			<a href="#0" className={classNames(styles.cLink, styles.cLinkBrand, styles.cTooltip)} aria-label="Google">
				<svg className={classNames(styles.cIcon)}>
					<use xlinkHref="#icon--google"></use>
				</svg>
			</a>
		
			<svg style={{display: 'none'}}>
				<symbol id="icon--facebook" viewBox="0 0 24 24">
					<path d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
				</symbol>
			</svg>
			<svg style={{display: 'none'}}>
				<symbol id="icon--google" viewBox="0 0 24 24">
				<path d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
				</symbol>
			</svg>
		</div>
	)
}
 
export default SocialLink;