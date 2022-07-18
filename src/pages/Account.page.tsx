
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import WYSIWYGEditor from '../components/WYSIWYGEditor';
import styled from 'styled-components';
import { useGetProfileQuery, usePatchProfileMutation } from '../services/profile';
import config from '../config';
import { useNavigate } from 'react-router-dom';

export const Container = styled.div`
    padding: 10px 5px 5px 5px;
`;

export const Image = styled.img`
    margin: 0 0 10px 0;
    cursor: pointer;
`;

const AccountPage = () => {
    const { data: profile, isLoading } = useGetProfileQuery(config.profile);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [completed, setCompleted] = useState(false);
    const [patchProfile] = usePatchProfileMutation();
    const navigate = useNavigate();

    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        inputEl.current?.click();
    };

    useEffect(() => {
        if (!isLoading && profile) {
            setName(profile.name);
            setDescription(profile.description);
            setImageSrc(profile.image_src);
            setCompleted(true);
        }
    }, [profile, isLoading]);

    const onChangeImage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = event.currentTarget?.files;
        if (files && files.length === 0) return;
        const file: File = files?.item(0) as any;
        var fr = new FileReader()
        fr.readAsDataURL(file)
        fr.onload = function (e) {
            let tmp = this.result?.toString() || "";

            var img = new window.Image();
            img.onload = function () {
                const that: any = this;
                if (that.width !== 460 || that.height !== 460) {
                    alert("Las medidas deben ser 460x460");
                    event.currentTarget.value = "";
                    return;
                }
                setImageSrc(tmp);
            };
            img.src = tmp;
        }
    }

    const WYSIWYGEditorOnChange = (value: string) => {
        setDescription(value);
    }

    const onSubmit: React.FormEventHandler = async (event) => {
        event.preventDefault();
        await patchProfile({
            username: config.profile,
            name,
            image_src: imageSrc,
            description
        });

        navigate('/');
    }

    if (isLoading || !profile || !completed) return null;
    
    return (
        <Layout>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col md={7}>
                        <Container>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter fullname"
                                    value={name}
                                    onChange={(evt) => setName(evt.currentTarget.value)} />
                            </Form.Group>
                            <WYSIWYGEditor initialValue={description} onChange={WYSIWYGEditorOnChange} />
                        </Container>
                    </Col>
                    <Col md={5}>
                        <Container>
                            <img onClick={onButtonClick} width="100%" src={imageSrc} alt="" />
                            <input onChange={onChangeImage} ref={inputEl} type='file' />
                        </Container>
                    </Col>
                </Row>
                <hr />
                <Button color='primary' type='submit'>Guardar</Button>
            </Form>
        </Layout >
    );
}

export default AccountPage;
