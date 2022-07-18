import React from 'react';
import { Provider } from 'react-redux';
import store from "./store";
import './App.css';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
