

import React from 'react';
import { Card } from 'react-bootstrap';
import { TweetModel } from '../types';
import moment from 'moment';
import styled from "styled-components";
import config from '../config';

export const Container = styled.div`
    margin: 0 0 10px 0
`;

const Tweet: React.FC<TweetModel> = (props) => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>
                        <a href={`https://twitter.com/${config.profile}/status/${props.id}`}>
                            {moment(props.created_at).format("YYYY-MM-DD HH:mm")}
                        </a>
                    </Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Tweet;