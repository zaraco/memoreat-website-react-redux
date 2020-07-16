import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
    fetchLogin,
    fetchRegister
} from '../redux/action/action';

const useAuth = () => {

    const dispatch = useDispatch();


    const fetchAuthLogin = useCallback((payload) => {
        dispatch(fetchLogin(payload));
    },[]);

    const fetchAuthRegister = useCallback((payload) => {
        dispatch(fetchRegister(payload));
    },[]);




    return {fetchAuthLogin, fetchAuthRegister};

};

export default useAuth;
