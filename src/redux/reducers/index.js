import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import analysis from "./analysis";
import auth from "./auth";
import cards from "./cards";
import sets from "./sets";
import users from "./users";


export default (history) =>
    combineReducers({
        router: connectRouter(history),
        analysis,
        auth,
        cards,
        sets,
        users,
    });
