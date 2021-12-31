import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import styles from './ForkCount.module.css';

interface IForkCount {
  counts: string;
}
const ForkCount: React.FC<IForkCount>  = ({ counts }) => {
  return (
    <div className={styles.fs}>
      <FontAwesomeIcon icon={faCodeBranch}/>
      <span className="ms-1">{counts}</span>
    </div>
  )
}

export default ForkCount;
