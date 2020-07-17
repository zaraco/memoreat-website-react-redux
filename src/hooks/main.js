import {useDispatch, useSelector} from 'react-redux';
import { useCallback } from 'react';

import {
    fetchIndex,
} from '../redux/action/action';
import {cardsSelectors} from "../redux/selectors/cards";
import {mainSelectors} from "../redux/selectors/main";


const useMain = () => {

    const dispatch = useDispatch();


    const app_token = useSelector(mainSelectors.app_token);

    const fetchMainIndex = useCallback((payload) => {
        dispatch(fetchIndex(payload));
    },[]);


    return {fetchMainIndex, app_token};
};

export default useMain;
