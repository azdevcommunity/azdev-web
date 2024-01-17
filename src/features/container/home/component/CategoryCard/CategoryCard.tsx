import React, { useState, useEffect, useRef } from 'react';
import ColorThief from 'colorthief';
import style from './categoryCard.module.css';

type CategoryCardProps = {
  title: string;
  imageUrl: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
  const [boxShadowColor, setBoxShadowColor] = useState('#9AA6D3');
  const [rotateStyle, setRotateStyle] = useState({});
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = 'Anonymous'; // Needed for ColorThief to work on external images
    img.onload = () => {
      const colorThief = new ColorThief();
      const [r, g, b] = colorThief.getColor(img);
      setBoxShadowColor(`rgb(${r}, ${g}, ${b})`);
    };
  }, [imageUrl]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      // Increase the tilt intensity here by increasing the multiplier
      const rotateX = (y / rect.height) * 20// Increased sensitivity
      const rotateY = (-x / rect.width) * 20; // Increased sensitivity
      setRotateStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` // Added perspective
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateStyle({});
  };

  const combinedStyle = {
    ...rotateStyle,
    boxShadow: `0 10px 10px -8px ${boxShadowColor}`,
  };

  return (
    <div
      className={style.card}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={combinedStyle}
    >
      <div className={style.cardImage} style={{ backgroundImage: `url(${imageUrl})` }} />
      <span className={style.cardTitle}>{title}</span>
      <span> </span>
    </div>
  );
};

export default CategoryCard;
