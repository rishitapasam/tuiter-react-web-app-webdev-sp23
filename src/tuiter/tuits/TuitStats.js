//import React from 'react';
//import PropTypes from 'prop-types';
//import {  faComment, faRectangleTimes, faVcard, faHeart} from '@fortawesome/free-regular-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
//const TuitStats = ({ replies, retuits, likes, liked, onLike, onUnlike, onShare }) => {
//  const handleLikeClick = (e) => {
//    e.preventDefault();
//    if (liked) {
//      onUnlike();
//    } else {
//      onLike();
//    }
//  };
//
//  return (
//    <div className="tuit-stats">
//      <div className="tuit-stats-item">
//        <FontAwesomeIcon icon={faComment} /> {comments}
//      </div>
//      <div className="tuit-stats-item" onClick={handleLikeClick}>
//      <FontAwesomeIcon icon={`faHeart${liked ? ' red-heart' : ''}`} />
//         {likes}
//      </div>
//      <div className="tuit-stats-item">
//        <FontAwesomeIcon icon={faRectangleTimes} /> {retuits}
//      </div>
//      <div className="tuit-stats-item" onClick={onShare}>
//        <FontAwesomeIcon icon={faVcard} />
//      </div>
//    </div>
//  );
//};
//
//TuitStats.propTypes = {
//  replies: PropTypes.number.isRequired,
//  retuits: PropTypes.number.isRequired,
//  likes: PropTypes.number.isRequired,
//  liked: PropTypes.bool.isRequired,
//  onLike: PropTypes.func.isRequired,
//  onUnlike: PropTypes.func.isRequired,
//  onShare: PropTypes.func.isRequired,
//};
//
//export default TuitStats;

import React, { useState } from 'react';

const TuitStats = ({ tuitData }) => {
  const [liked, setLiked] = useState(false);
  const { replies, retuits, likes, handle } = tuitData;

  const toggleLike = () => {
    setLiked(!liked);
    tuitData.likes += (liked ? -1 : 1);
  };

  return (
    <div className="tuit-stats">
      <div className="tuit-stat">
        <i className="fas fa-comment"></i>
        <span>{replies}</span>
      </div>
      <div className="tuit-stat">
        <i className="fas fa-retweet"></i>
        <span>{retuits}</span>
      </div>
      <div className="tuit-stat" onClick={toggleLike}>
        <i className={`fas fa-heart ${liked ? 'red' : ''}`}></i>
        <span>{likes}</span>
      </div>
      <div className="tuit-stat">
        <i className="fas fa-share-alt"></i>
        <span>Share</span>
      </div>
      <div className="tuit-handle">
        {handle}
      </div>
    </div>
  );
};

export default TuitStats;
