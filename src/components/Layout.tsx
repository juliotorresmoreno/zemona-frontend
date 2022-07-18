
import React from 'react';
import { Container } from 'react-bootstrap';
import ToolBar from './ToolBar';

type LayoutProps = {
    
} & React.PropsWithChildren;


const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <Container>
            <ToolBar />
            {props.children}
        </Container>
    );
}

export default Layout;
