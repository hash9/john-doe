import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import DefaultPostlayout from '../../../molecules/defaultPostLayout/DefaultPostLayout';
import styles from '../layoutPost.module.scss';
import ThemeContext from '../../../themes/ThemeContext';

class ChecqDisqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
  }

  componentDidMount() {
    this.content();
  }

  handleBlogName = () => {
    this.props.history.push('/');
  };

  content = () => {
    const codeString = `let domContainer = document.getElementById('container'); 
// Clear the tree domContainer.innerHTML = ''; 
// Create the new host instance tree 
let domNode = document.createElement('button'); 
domNode.className = 'red'; 
domContainer.appendChild(domNode);`;

    const mainContent = (
      <ThemeContext.Consumer>
        {theme => {
          const { content } = theme.config;
          return (
            <div>
              <p style={{ color: content }} className={styles.commonPStyle}>
                Most tutorials introduce React as a UI library. This makes sense
                because React is a UI library. That’s literally what the tagline
                says!
              </p>
              <hr />
              <p style={{ color: content }} className={styles.commonPStyle}>
                <strong>
                  This post won’t teach you anything about creating user
                  interfaces.
                </strong>
                But it might help you understand the React programming model in
                more depth.
              </p>
              <hr />
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );

    this.setState({
      content: mainContent,
    });
  };

  render() {
    const { content } = this.state;
    const { state, pathname } = this.props.location;

    return (
      <DefaultPostlayout
        {...this.props}
        postTitle={state.title}
        postDate={state.date}
        mainContent={content}
        handleBlogName={this.handleBlogName}
      />
    );
  }
}

export default ChecqDisqus;
