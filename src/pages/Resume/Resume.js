import React, { Component } from 'react';
import styles from './resume.module.scss'

class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}

	render() { 
		return (
			<div className={styles.container}>
				<img src={require("../../assets/resume.png")} alt="" className={styles.resume} />
			</div>
		);
	}
}
 
export default Resume;