import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {fetchLogin, fetchRegister, loginForm, logout, registerForm} from '../redux/action/action';
import {authSelectors} from "../redux/selectors/auth";
import Register from "../components/auth/Register";


const useAuth = () => {

    const dispatch = useDispatch();


    const isLoggedIn = useSelector(authSelectors.isLoggedIn);

    const user = useSelector(authSelectors.user);

    const token = useSelector(authSelectors.token);

    const login = useSelector(authSelectors.login);

    const error = useSelector(authSelectors.error);

    const register = useSelector(authSelectors.register);

    const isLoadingLogin = useSelector(authSelectors.isLoadingLogin);

    const isLoadingRegister = useSelector(authSelectors.isLoadingRegister);






    const fetchAuthLogin = useCallback((payload) => {
        dispatch(fetchLogin(payload));
    }, []);

    const authLoginForm = useCallback((payload) => {
        dispatch(loginForm(payload));
    }, []);

    const fetchAuthRegister = useCallback((payload) => {
        dispatch(fetchRegister(payload));
    }, []);

    const authRegisterForm = useCallback((payload) => {
        dispatch(registerForm(payload));
    }, []);

    const authLogout = useCallback(() => {
        dispatch(logout());
    }, []);


    return {
        fetchAuthLogin,
        fetchAuthRegister,
        authRegisterForm,
        register,
        isLoggedIn,
        user,
        token,
        login,
        authLoginForm,
        error,
        authLogout,
        isLoadingLogin,
        isLoadingRegister,
    };

};

export default useAuth;
