import {createStore, applyMiddleware, compose} from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './reducers';
import {createBrowserHistory} from "history";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__({
        name: 'Memoreat',
    })
    : (f) => f;

export const history = createBrowserHistory();

export default function initStore() {
    const middlewares = [
        apiMiddleware
    ];
    return createStore(
        reducers(history),
        compose(applyMiddleware(...middlewares), devTools),
    );
};
