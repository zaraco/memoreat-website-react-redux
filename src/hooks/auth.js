import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {fetchLogin, fetchRegister, loginForm} from '../redux/action/action';
import {authSelectors} from "../redux/selectors/auth";


const useAuth = () => {

    const dispatch = useDispatch();


    const isLoggedIn = useSelector(authSelectors.isLoggedIn);

    const user = useSelector(authSelectors.user);

    const token = useSelector(authSelectors.token);

    const login = useSelector(authSelectors.login);


    const fetchAuthLogin = useCallback((payload) => {
        dispatch(fetchLogin(payload));
    }, []);

    const fetchAuthRegister = useCallback((payload) => {
        dispatch(fetchRegister(payload));
    }, []);

    const authLoginForm = useCallback((payload) => {
        dispatch(loginForm(payload));
    }, []);


    return {fetchAuthLogin, fetchAuthRegister, isLoggedIn, user, token, login, authLoginForm};

};

export default useAuth;
