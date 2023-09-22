import { useEffect, useState } from 'react';
import './Stars.scss';

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numberOfStars = 50; // Adjust as needed
    const tempStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const xPos = Math.random() * window.innerWidth;
      const yPos = Math.random() * window.innerHeight;

      tempStars.push({
        id: i,
        top: yPos,
        left: xPos,
      });
    }

    setStars(tempStars);
  }, []);

  return (
    <div>
      {stars.map(star => (
        <div 
          key={star.id}
          className="star"
          style={{ top: star.top, left: star.left }}
        ></div>
      ))}
    </div>
  );
}

export default Stars;
