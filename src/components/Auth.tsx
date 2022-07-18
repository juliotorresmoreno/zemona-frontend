import { SessionState } from '../reducers/session';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { AuthModel } from '../types';
import { login } from '../services/session';
import store from '../store';
import { setSession } from '../actions/session';

const mapStateTopProps = (state: { session: SessionState }) => ({
    session: state.session || {}
});

type AuthProps = {};

type _AuthProps = {
    session: SessionState
} & AuthProps;

const _Auth: React.FC<_AuthProps> = (props) => {
    const fullscreen = 'md';
    const show = !props.session.profile;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (evt) => {
        evt.preventDefault();

        const payload: AuthModel = {
            username,
            password
        };

        await login(payload)
            .then((session) => {
                store.dispatch(setSession(session));
                // navigate('/');
            })
            .catch((err) => {
                alert("Usuario o contrasena invalido!");
            });
    }

    return (
        <Modal show={show} fullscreen={fullscreen} onHide={() => document.location.href = '/'}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <fieldset>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="username">UserName</Form.Label>
                            <Form.Control
                                id="username"
                                value={username}
                                onChange={evt => setUsername(evt.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                id="password"
                                type='password'
                                value={password}
                                onChange={evt => setPassword(evt.target.value)} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </fieldset>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

const Auth = connect(mapStateTopProps)(_Auth) as React.FC<AuthProps>;

export default Auth;
