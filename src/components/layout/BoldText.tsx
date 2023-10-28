import React from 'react';

interface BoldStringProps {
  text: string;
}

export const BoldString = ({ text }: BoldStringProps) => {
  // Split the original string into an array of parts
  const parts = text.split('**');

  // Initialize an array to store the rendered elements
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      // Even-indexed parts are not bold
      elements.push(parts[i]);
    } else {
      // Odd-indexed parts (i.e., containing "string") should be bold
      elements.push(<strong key={i}>{parts[i]}</strong>);
    }
  }

  return <>{elements}</>;
};