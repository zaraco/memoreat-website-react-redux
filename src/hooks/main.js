import {useDispatch, useSelector} from 'react-redux';
import { useCallback } from 'react';

import {
    actionFetchIndex} from '../redux/action/action';
import {mainSelectors} from "../redux/selectors/main";


const useMain = () => {

    const dispatch = useDispatch();


    const app_token = useSelector(mainSelectors.app_token);
    const languages = useSelector(mainSelectors.languages);
    const categories = useSelector(mainSelectors.categories);


    const fetchMainIndex = useCallback((payload) => {
        dispatch(actionFetchIndex(payload));
    },[]);


    return {fetchMainIndex, app_token, languages, categories};
};

export default useMain;
