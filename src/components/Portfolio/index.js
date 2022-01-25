
import React from 'react';
import photo1 from '../../assets/img/employeetracker.png';
import photo2 from '../../assets/img/learningporch.png';
import photo3 from '../../assets/img/notetaker.png';
import photo4 from '../../assets/img/wellnesshub.png';

const PhotoList = () => {

  return (

      <div className="flex-row">
          <a href="https://github.com/mnijjar24/employeetracker">
            <p>Employee Tracker</p>
            <img
            src={photo1}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          </a>
          <a href="https://the-learning-porch.herokuapp.com/">
            <p>Learning Porch</p>
          <img
            src={photo2}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          </a>
          <a href="https://mnijjar24.github.io/note-taker/">
            <p>Note Taker</p>
          <img
            src={photo3}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          </a>
          <a href="https://nnikhil84.github.io/wellnesshub.github.io">
            <p>Wellness Hub</p>
          <img
            src={photo4}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          </a>
          
  
      </div>
  );
};

export default PhotoList;