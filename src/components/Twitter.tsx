
import React, { Fragment } from 'react';
import config from '../config';
import { useGetTweetsByUsernameQuery } from '../services/twitter';
import { TweetModel } from '../types';
import Tweet from './Tweet';
import styled from "styled-components";

export const Container = styled.div`
    padding: 10px 5px 5px 5px
`;

const Twitter: React.FC = () => {
    const { data, isLoading } = useGetTweetsByUsernameQuery(config.profile);

    if (isLoading === true || data === undefined) return null;

    const tweets = data as TweetModel[];

    return (
        <Container>
            {tweets.map((tweet, index) => (
                <Fragment key={`tweet-` + index} >
                    <Tweet {...tweet} />
                </Fragment>
            ))}
        </Container>
    );
}

export default Twitter;
