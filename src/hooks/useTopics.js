import { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import { BaseClient } from '../apollo-client.js';

export const useTopics = (name, first = 10 ) => {
    const [topic, setTopic] = useState([]);

    useEffect(() => {
        if(name.length === 0) {
            setTopic([]);
            return { topic };
        }

        BaseClient()
        .query({
            query: gql`
                query {
                    topic(name:"${name.toLowerCase()}"){
                        name
                        relatedTopics(first:${first}){
                            id
                            name,
                            stargazerCount
                        }
                    }
                }
            `,
        })
        .then((data) => {
            if(data.data.topic !== null){
                setTopic(data.data.topic.relatedTopics);
            } else {
                setTopic([]);
            }
        });
    }, [name]);
    
    return { topic };
};