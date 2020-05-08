import React from 'react';
import styled from 'styled-components';

import PoppingCircle from '../PoppingCircle';
import ScaleIn from '../ScaleIn';

import Heart from './Heart';

const PARTICLE_COLORS = ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00'];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;
  const heart = <Heart width={heartSize} isToggled={isLiked} />
  return (
    <Wrapper style={{ width: size, height: size }}>
      <Foreground>
        {isLiked ? <ScaleIn>{heart}</ScaleIn> : heart}
      </Foreground>

      <Background>
        {isLiked && <PoppingCircle size={size} color='#E790F7' />}
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  z-index:0;
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

export default LikeButton;
