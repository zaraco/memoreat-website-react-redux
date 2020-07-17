import {useDispatch, useSelector} from 'react-redux';
import { useCallback } from 'react';

import {
    fetchLogin,
    fetchRegister
} from '../redux/action/action';
import {cardsSelectors} from "../redux/selectors/cards";
import {authSelectors} from "../redux/selectors/auth";

const useAuth = () => {

    const dispatch = useDispatch();


    const isLoggedIn = useSelector(authSelectors.isLoggedIn);

    const user = useSelector(authSelectors.user);

    const token = useSelector(authSelectors.token);


    const fetchAuthLogin = useCallback((payload) => {
        dispatch(fetchLogin(payload));
    },[]);

    const fetchAuthRegister = useCallback((payload) => {
        dispatch(fetchRegister(payload));
    },[]);




    return {fetchAuthLogin, fetchAuthRegister, isLoggedIn, user, token};

};

export default useAuth;
