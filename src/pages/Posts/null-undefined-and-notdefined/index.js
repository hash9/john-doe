import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import DefaultPostlayout from '../../../molecules/defaultPostLayout/DefaultPostLayout';
import ThemeContext from '../../../themes/ThemeContext';
import { Emoji } from 'emoji-mart';
import { Blockquote, Para } from '../../../atoms';

class NullUndefinedNotdefined extends Component {
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
          const themeColor = theme.type === 'dark' ? 'dark' : 'light';
          return (
            <div>
              <Para themeColor={themeColor}>
                Most tutorials introduce React as a UI library. This makes sense
                because React is a UI library. That’s literally what the tagline
                says! Most tutorials introduce React as a UI library. This makes
                sense because React is a UI library. That’s literally what the
                tagline says!
              </Para>
              <Para themeColor={themeColor}>
                Most tutorials introduce React as a UI library. This makes sense
                because React is a UI library. That’s literally what the tagline
                says! Most tutorials introduce React as a UI library. This makes
                sense because React is a UI library. That’s literally what the
                tagline says!
              </Para>

              <Para themeColor={themeColor}>
                this is para
                <strong> This is parastrong </strong>
                <Emoji emoji="santa" set="apple" size={20} />
              </Para>
              <Emoji emoji="santa" set="apple" size={25} />
              <hr />
              <Blockquote
                text={'Creativity is just connecting things. When you ask '}
                themeColor={themeColor}
              />
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

export default NullUndefinedNotdefined;
