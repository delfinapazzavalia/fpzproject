import React from 'react';

const CoursesCard = ({ id, titulo, contenido }) => {
  return (
    <div className="coursesCard">
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
};

export default CoursesCard;