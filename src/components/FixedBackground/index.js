import React from 'react';
import { FixedBackgroundContainer } from './styles';

const Lines = () => {
  const lineAmount = 7;
  const lines = [];

  for (let i = 0; i < lineAmount; i++) {
    lines.push(<div key={i} className="bg-line" />);
  }

  return <div className="lines-container">{lines}</div>;
};

function FixedBackground() {
  return (
    <FixedBackgroundContainer>
      <Lines />
    </FixedBackgroundContainer>
  );
}

export default FixedBackground;
