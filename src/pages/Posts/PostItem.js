import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import DefaultPostlayout from '../../molecules/defaultPostLayout/DefaultPostLayout';
import styles from './commonPostStyles.module.scss';
import ThemeContext from '../../context/ThemeContext';

class PostItem extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			content: null,
		}
	}

	componentDidMount(){
		this.content()
	}

	handleBlogName = () => {
		this.props.history.push("/")
	}

	content = () => {
		const codeString = 
`let domContainer = document.getElementById('container'); 
// Clear the tree domContainer.innerHTML = ''; 
// Create the new host instance tree 
let domNode = document.createElement('button'); 
domNode.className = 'red'; 
domContainer.appendChild(domNode);`;

		const mainContent = (
			<ThemeContext.Consumer>
				{theme => (
					<div>
						<p style={{ color: theme.config.fontColor }} className={styles.commonPStyle}>Most tutorials introduce React as a UI library. This makes sense because React is a UI library. That’s literally what the tagline says!</p>
						<hr />
						<p style={{ color: theme.config.fontColor }} className={styles.commonPStyle}><strong>This post won’t teach you anything about creating user interfaces.</strong>But it might help you understand the React programming model in more depth.</p>
						<hr />
						<p style={{ color: theme.config.fontColor }} className={styles.commonPStyle}>Maybe giving talks is a part of your current job. Maybe you want to gain more recognition in the industry so you can land a better job or get a raise. Maybe you’re out there to bring more attention to your hobby or work project.

		We’ll call these motivations external. They are about what other people think of you and your work. But if you already had all the respect and money that you wanted, would you still choose to give a talk? Why?

		Maybe you find it rewarding to teach people. Maybe you enjoy learning, and giving a talk is a nice excuse to dig deeper. Maybe you want to start or change the conversation about a topic. Maybe you want to amplify or critique an idea.

		Such internal motivations aren’t a proxy for another desire like professional recognition. These are the things that have intrinsic value to you. Different people are driven by different internal motivations. It’s helpful to be aware of yours. You can sometimes trace them all the way back to your childhood.

		For example, here’s mine:

		I enjoy sharing ideas that inspire me. Sometimes, an idea transforms the way I think. It opens many doors that I didn’t even know existed. But it’s lonely behind those doors. I want others to join me so that they can show me even more interesting doors inside. For me, a talk is a way to collect, curate, and amplify ideas that I find tasteful. (As a teenager I made mixtapes for crushes with no interest in my music taste. Now I do talks! Life, uh, finds a way.)

		I enjoy re-explaining things in a simpler way. When I understand an idea, I get a very pleasant feeling — better than eating sweets. But learning doesn’t come easy to me. So when I finally “get” something, I want to share that feeling with the people who are still struggling. I try to remember what it was like before the a-ha moment to help others “make the jump” while watching my talks. (I was also insufferable as a child because I insisted that everyone asks me questions. A talk is a more productive way to channel that energy.)</p>
						<SyntaxHighlighter language='javascript' style={atomDark}>{codeString}</SyntaxHighlighter>
					</div>
					)}
					</ThemeContext.Consumer>
		)
		this.setState({
			content: mainContent
		})
	}
	
	render() { 
		const { content } = this.state;

		return ( 
				<DefaultPostlayout
					postTitle={'Preparing for a Tech Talk, Part 1: Motivation'}
					postDate={'December 26, 2018'}
					content={content}
					handleBlogName={this.handleBlogName}
				/>
		);
	}
}

export default PostItem;