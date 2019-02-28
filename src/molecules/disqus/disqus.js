import React, { PureComponent } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import config from '../../config';

class Disqus extends PureComponent {
  static defaultProps = {
    identifier: '',
    title: '',
  };

  render() {
    const disqusShortname = 'space-h';
    const disqusConfig = {
      url: `${config.homepage}${window.location.pathname}`,
      identifier: this.props.identifier,
      title: this.props.title,
    };
    console.log(disqusConfig, 'disqusConfig');
    return window.location.hostname !== 'localhost' ? (
      <div>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    ) : null;
  }
}

export default Disqus;
