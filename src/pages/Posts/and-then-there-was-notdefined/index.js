import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import DefaultPostlayout from '../../../molecules/defaultPostLayout/DefaultPostLayout';
import ThemeContext from '../../../themes/ThemeContext';
import { Emoji } from 'emoji-mart';
import {
  Blockquote,
  Para,
  ParaHeader,
  Anchor,
  Highlight,
} from '../../../atoms';

class AndThenThereWasNotDefined extends Component {
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
    const code1 = `console.log(typeof null)  // object`;

    const code2 = `let a = null  
console.log(a)  // null `;
    const code3 = `let a = null, res
res = a ? console.log('truthy') : console.log('falsy')  // falsy`;

    const code4 = `console.log(typeof undefined)  // undefined`;
    const code5 = `let a = undefined, b
console.log(a)  // undefined
console.log(b)  // undefined`;
    const code6 = `let a = undefined, res
res = a ? console.log('truthy') : console.log('falsy')  // falsy`;

    const code7 = `console.log(surelysomething) // surelysomething is not defined`;

    const mainContent = (
      <ThemeContext.Consumer>
        {theme => {
          const { link } = theme.config;
          const themeColor = theme.type === 'dark' ? 'dark' : 'light';
          return (
            <div>
              <Para themeColor={themeColor}>
                At first introduction to javascript, we came across 2 primitive
                datatypes which seemed very dangerous on handling first hand,
                i.e (Null and Undefined), atleast to me.&nbsp;
                <Emoji emoji="face_with_rolling_eyes" set="apple" size={19} />
              </Para>

              <Para themeColor={themeColor}>
                These built-in datatypes had its own purpose and usage in
                javascript or or was it a&nbsp;
                <Anchor href={''} style={{ color: link }} text={'mistake'} />
                &nbsp;?&nbsp;
                <Emoji emoji="thinking_face" set="apple" size={19} />
                &nbsp; Moving on, some brief descriptions for the following 2
                datatypes, so we can finally discuss for the case Not-defined.
              </Para>

              {/* Null ----------- */}
              <ParaHeader text={'Null'} themeColor={themeColor} />
              <Para themeColor={themeColor}>
                Null is an empty, non-existent, assigned, falsy, nothing value.
                Typically,&nbsp;
                <strong>
                  variable which is declared and is an empty value.
                </strong>
                &nbsp; It does not contain any string or number neither true nor
                false but has specific representation of 0 and 1 bits in
                memory.&nbsp; Hhm.. crazy,
                <Emoji emoji="speak_no_evil" set="apple" size={20} />
                &nbsp; coz it consumes memory space to define nothingness!
              </Para>
              <Para themeColor={themeColor}>
                <ul>
                  <li>Null is a type object.</li>
                </ul>
              </Para>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {code1}
              </SyntaxHighlighter>

              <Para themeColor={themeColor}>
                <ul>
                  <li>Null is an assigned value.</li>
                </ul>
              </Para>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {code2}
              </SyntaxHighlighter>

              <Para themeColor={themeColor}>
                <ul>
                  <li>Null is a falsy value.</li>
                </ul>
              </Para>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {code3}
              </SyntaxHighlighter>

              {/* Undefined ----------- */}
              <ParaHeader text={'Undefined'} themeColor={themeColor} />
              <Para themeColor={themeColor}>
                Undefined typically means a &nbsp;
                <strong>variable which is declared but not defined.</strong>
                &nbsp; Few examples below. But if checking,&nbsp;
                <Highlight
                  themeColor={themeColor}
                  text={'typeof(undeclared_var)'}
                />
                &nbsp; will return string&nbsp;
                <Highlight themeColor={themeColor} text={'`undefined`'} />.
              </Para>
              <Para themeColor={themeColor}>
                <ul>
                  <li>Well, Undefined is a type undefined.</li>
                </ul>
              </Para>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {code4}
              </SyntaxHighlighter>

              <Para themeColor={themeColor}>
                <ul>
                  <li>
                    Undefined can also be assigned to a variable but can also be
                    not assigned and still return undefined.
                  </li>
                </ul>
              </Para>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {code5}
              </SyntaxHighlighter>

              <Para themeColor={themeColor}>
                <ul>
                  <li>Undefined is also a falsy value.</li>
                </ul>
              </Para>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {code6}
              </SyntaxHighlighter>
              <Para themeColor={themeColor}>
                And so as i was saying, also with respect to the title, the
                above two types were clearly etched but only after a long time
                &nbsp;
                <Emoji emoji="face_with_monocle" set="apple" size={20} />
                &nbsp; i came across this new case.
              </Para>

              {/* Not-defined ----------- */}
              <ParaHeader text={'Not-Defined'} themeColor={themeColor} />
              <Para themeColor={themeColor}>
                So Not-defined is typically a case where the&nbsp;
                <strong>
                  <Highlight themeColor={themeColor} text={'thing'} />
                  &nbsp;is neither declared nor assigned or is of any datatype
                </strong>
                &nbsp; but if we try to access the&nbsp;
                <Highlight themeColor={themeColor} text={'thing'} />
                &nbsp; we will get a not defined reference error.
              </Para>
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {code7}
              </SyntaxHighlighter>

              <Para themeColor={themeColor}>
                Hope!&nbsp;
                <Emoji emoji="crossed_fingers" set="apple" size={19} />
              </Para>
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

export default AndThenThereWasNotDefined;
