
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import Twitter from '../components/Twitter';
import Image from 'react-bootstrap/Image'
import styled from 'styled-components';
import { useGetProfileQuery, useGetProfileRequestsQuery } from '../services/profile';
import config from '../config';

export const Container = styled.div`
    padding: 10px 5px 5px 5px
`;

const HomePage: React.FC = () => {
    const { data: profile, isLoading } = useGetProfileQuery(config.profile);
    const { data: requests } = useGetProfileRequestsQuery(config.profile);

    if (isLoading === true || !profile) return null;

    return (
        <Layout>
            <Row>
                <Col md={7}>
                    <div dangerouslySetInnerHTML={{ __html: profile.description }} />
                </Col>
                <Col md={5}>
                    <Container>
                        <Image width="100%" fluid src={profile.image_src} />
                    </Container>
                    <Twitter />
                </Col>
            </Row>
            <footer>
                {requests ? <div>Numero de visitas: {requests.count}</div> : null}
            </footer>
        </Layout>
    );
}

export default HomePage;
