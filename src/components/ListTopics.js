import React, { useCallback, useRef } from 'react';
import StyledItems from '../styled-components/styled-item';

export const Item = ({ item, setSearch }) => {
  const topicRef = useRef('');

  const handleClickDiv = useCallback(() => {
    setSearch(topicRef.current.innerHTML)
  }, [setSearch]);

  return (
    <StyledItems>
      <p ref={topicRef} onClick={handleClickDiv} >{item.name}</p>
      <span>{item.stargazerCount} {`⭐`}</span>
    </StyledItems>
  );
};