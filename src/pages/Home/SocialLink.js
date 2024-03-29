import React from 'react';
import classNames from 'classnames';
import styles from './socialLink.module.scss';

const SocialLink = () => {
  return (
    <div>
      <a
        href="https://github.com/hash9"
        className={classNames(styles.cLink, styles.cLinkBrand, styles.cTooltip)}
        aria-label="/hash9"
      >
        <svg className={classNames(styles.cIcon)}>
          <use xlinkHref="#icon-github" />
        </svg>
      </a>
      <a
        href="https://stackoverflow.com/users/4369660/hsbp"
        className={classNames(styles.cLink, styles.cLinkBrand, styles.cTooltip)}
        aria-label="/hsbp"
      >
        <svg className={classNames(styles.cIcon)}>
          <use xlinkHref="#icon-stackoverflow" />
        </svg>
      </a>

      <svg style={{ display: 'none' }}>
        <symbol id="icon-github" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </symbol>
      </svg>
      <svg style={{ display: 'none' }}>
        <symbol id="icon-stackoverflow" viewBox="0 0 24 24">
          <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z" />
        </symbol>
      </svg>
    </div>
  );
};

export default SocialLink;
