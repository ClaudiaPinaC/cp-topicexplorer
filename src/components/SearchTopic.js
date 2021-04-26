import React, { useCallback, useRef, useState } from 'react';
import { useTopics } from '../hooks/useTopics.js';
import { Item } from './ListTopics';
import StyledButton from '../styled-components/styled-button';
import StyledInput from '../styled-components/styled-input';
import StyledDiv from '../styled-components/styled-centerDiv';

export const SearchTopic = () => {
    const [search, setSearch] = useState('');
    const { topic } = useTopics(search);
    const searchInputRef = useRef(null);

    const handleClickSearch = useCallback(() => {
        setSearch(searchInputRef.current.value);
    }, []);

    return (
        <>
        <StyledDiv>
            <StyledInput
                type="text"
                defaultValue=""
                ref={searchInputRef}
                placeholder={'Enter a topic'}
            />
            <StyledButton onClick={handleClickSearch}>Search</StyledButton>
        </StyledDiv>
        <StyledDiv>
            <div>
            {search !== '' && topic.length > 0 ? (
                <p>
                    {`Topics related to `}
                    <b>{search}</b>
                </p>
            ) : <p>
                <b>{`No results`}</b>
            </p>}
            {topic.map((item) => (
                <Item key={item.id} item={item} setSearch={setSearch} />
            ))}
            </div>
        </StyledDiv>
        </>
    );
};