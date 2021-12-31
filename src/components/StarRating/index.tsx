import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import styles from './StarRating.module.css';

interface IStarRating {
  rating: string;
}
const StarRating: React.FC<IStarRating>  = ({ rating }) => {
  return (
    <div className={styles.fs}>
      <FontAwesomeIcon icon={faStar}/>
      <span className="ms-1">{rating}</span>
    </div>
  )
}

export default StarRating;
