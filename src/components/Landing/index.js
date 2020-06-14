import React from 'react';
import { LandingContainer } from './styles';
import { LongArrowDown } from '../icons';

function Landing() {
  return (
    <LandingContainer>
      <div className="title-container">
        <div className="top-line">STEVEN</div>
        <div className="bottom-line">
          JUKS<span className="point">.</span>
        </div>
      </div>
      <button className="next-page-btn">
        <LongArrowDown />
      </button>
    </LandingContainer>
  );
}

export default Landing;
