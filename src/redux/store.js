import {createStore, applyMiddleware, compose} from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './reducers';
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__({
        name: 'Memoreat',
    })
    : (f) => f;

export const history = createBrowserHistory();

const logger = createLogger({
    collapsed: true,
});

export default function initStore() {
    const middlewares = [
        apiMiddleware,
        thunkMiddleware,
        routerMiddleware(history),
        logger
    ];
    return createStore(
        reducers(history),
        compose(applyMiddleware(...middlewares), devTools),
    );
};
