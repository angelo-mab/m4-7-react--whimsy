import React from 'react';
import styled, { keyframes } from 'styled-components';

import Particle from '../Particle';

const ConfettiPieces = ({ angle, distance, color }) => {
 const size = 10;

 return (
  <CenteredWithinParent>
   <Particle angle={angle} startDistance={distance * .55} endDistance={distance} >

    <Circle style={{ width: size, height: size, background: color, }} />

   </Particle>
  </CenteredWithinParent>
 );
};

// const warmKeyframe= keyframes`
// `;
// const midKeyframe = keyframes`
// `;
// const coolKeyframe = keyframes`
// `;
// const getKeyframeforId = id => {
//  switch (id) {
//   case 'warm':
//    return warmKeyframe;

//   case 'mid':
//    return midKeyframe;

//   case 'cool':
//    return coolKeyframe;

//   default:
//   //do nothing
//  }
// }

const CenteredWithinParent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate()(-50%, -50%);
`;

const Circle = styled.div`
border-radius: 50%;
/* animation: ${props => getKeyframeforId(props.keyframeId)} 1000ms infinite; */
`;

export default ConfettiPieces;