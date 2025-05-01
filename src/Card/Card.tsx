import React from 'react';
import './card.css';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="simple-card">{children}</div>;
};

export default Card;