import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth';
import { reduxstore, persistor } from './reduxstore'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';




ReactDOM.render(
    <Provider store={reduxstore}>
        <PersistGate persistor={persistor} loading={null}>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
