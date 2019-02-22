import React, { Component } from 'react';
import styles from './resume.module.scss';

const resumeImage = require('../../assets/resume.png');

class Resume extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={resumeImage} alt="" className={styles.resume} />
      </div>
    );
  }
}

export default Resume;
