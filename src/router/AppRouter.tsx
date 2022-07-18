
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home.page';
import styled from 'styled-components';
import AccountPage from '../pages/Account.page';
import Auth from '../components/Auth';
import { getSession } from '../services/session';
import store from '../store';
import { SessionModel } from '../types';

export const Container = styled.div`
    padding: 10px 5px 5px 5px
`;

type AppRouterProps = {

}

const AppRouter: React.FC<AppRouterProps> = () => {
    const [session, setSession] = useState<SessionModel>();
    useEffect(() => {
        const token = store.getState().session.token;
        if (token) {
            getSession(token)
                .then((session) => setSession(session));
        }
    }, [session]);
    return (
        <Routes>
            <Route path="/account" element={<><AccountPage /><Auth /></>} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default AppRouter;
