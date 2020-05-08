import React from 'react';
import styled from 'styled-components';
import 'focus-visible';

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';

function reducer(state, action) {
  switch (action.type) {
    case 'toggle-like': {
      const wasAlreadyLiked = state.isLiked;
      return {
        ...state,
        isLiked: !wasAlreadyLiked,
        numOfLikes: wasAlreadyLiked
          ? state.numOfLikes - 1
          : state.numOfLikes + 1,
      }
    }
    case 'toggle-retweet': {
      const wasAlreadyRetweeted = state.isRetweeted;

      return {
        ...state,
        isRetweeted: !wasAlreadyRetweeted,
        numOfRetweets: wasAlreadyRetweeted
          ? state.numOfRetweets - 1
          : state.numOfRetweets + 1,
      }
    }

    default:
      throw new Error('Unrecognized action');
  }
}

const App = () => {

  const [state, dispatch] = React.useReducer(reducer, {
    numOfLikes: 100,
    numOfRetweets: 100,
    isLiked: false,
    isRetweeted: false,
  });

  const toggleLike = () => dispatch({ type: 'toggle-like' });
  const toggleRetweet = () => dispatch({ type: 'toggle-retweet' });

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        // The following 4 values are driven by React state hooks:
        numOfLikes={state.numOfLikes}
        numOfRetweets={state.numOfRetweets}
        isLiked={state.isLiked}
        isRetweeted={state.isRetweeted}
        // The following 2 values should dispatch an action to change the state:
        handleToggleLike={toggleLike}
        handleToggleRetweet={toggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
