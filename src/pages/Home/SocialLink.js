import React from 'react';
import classNames from 'classnames';
import styles from './socialLink.module.scss';

const SocialLink = () => {
	return (
		<div>
			<a href="#0" className={classNames(styles.cLink, styles.cLinkBrand, styles.cTooltip)} aria-label="Github">
				<svg className={classNames(styles.cIcon)}>
					<use xlinkHref="#icon-github"></use>
				</svg>
			</a>
			<a href="#0" className={classNames(styles.cLink, styles.cLinkBrand, styles.cTooltip)} aria-label="StackOverflow">
				<svg className={classNames(styles.cIcon)}>
					<use xlinkHref="#icon-stackoverflow"></use>
				</svg>
			</a>
			<a href="#0" className={classNames(styles.cLink, styles.cLinkBrand, styles.cTooltip)} aria-label="Instagram">
				<svg className={classNames(styles.cIcon)}>
					<use xlinkHref="#icon-instagram"></use>
				</svg>
			</a>
			<a href="#0" className={classNames(styles.cLink, styles.cLinkBrand, styles.cTooltip)} aria-label="LinkedIn">
				<svg className={classNames(styles.cIcon)}>
					<use xlinkHref="#icon-linkedin"></use>
				</svg>
			</a>

			<svg style={{display: 'none'}}>
				<symbol id="icon-github" viewBox="0 0 24 24">
					<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
				</symbol>
			</svg>
			<svg style={{display: 'none'}}>
				<symbol id="icon-stackoverflow" viewBox="0 0 24 24">
					<path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"/>
				</symbol>
			</svg>
			<svg style={{display: 'none'}}>
				<symbol id="icon-instagram" viewBox="0 0 24 24">
				<path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
				</symbol>
			</svg>
			<svg style={{display: 'none'}}>
				<symbol id="icon-linkedin" viewBox="0 0 24 24">
					<path d="M19,19H16V13.7A1.5,1.5 0 0,0 14.5,12.2A1.5,1.5 0 0,0 13,13.7V19H10V10H13V11.2C13.5,10.36 14.59,9.8 15.5,9.8A3.5,3.5 0 0,1 19,13.3M6.5,8.31C5.5,8.31 4.69,7.5 4.69,6.5A1.81,1.81 0 0,1 6.5,4.69C7.5,4.69 8.31,5.5 8.31,6.5A1.81,1.81 0 0,1 6.5,8.31M8,19H5V10H8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
				</symbol>
			</svg>
			
		</div>
	)
}
 
export default SocialLink;