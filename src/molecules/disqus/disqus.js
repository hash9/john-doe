import React, { PureComponent } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import config from '../../config';
import { LOCAL_HOST } from '../../themes/strings';

class Disqus extends PureComponent {
  static defaultProps = {
    identifier: '',
    title: '',
  };

  render() {
    const disqusConfig = {
      url: `${config.homepage}${window.location.pathname}`,
      identifier: this.props.identifier,
      title: this.props.title,
    };

    return window.location.hostname !== LOCAL_HOST ? (
      <div>
        <DiscussionEmbed
          shortname={config.disqusShortname}
          config={disqusConfig}
        />
      </div>
    ) : null;
  }
}

export default Disqus;
