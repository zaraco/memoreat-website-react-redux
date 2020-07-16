import { useDispatch, useSelector } from 'react-redux';
import { setsSelectors } from '../redux/selectors/sets';
import { useCallback } from 'react';

import {
    fetchSetsAll,
    fetchSetsOne,
    fetchSetsCreate,
    fetchSetsEdit,
} from '../redux/action/action';


const useSets = () => {

    const dispatch = useDispatch();

    const sets = useSelector(setsSelectors.sets);
    const set = useSelector(setsSelectors.set);


    const fetchSets = useCallback((payload) => {
        dispatch(fetchSetsAll(payload));
    },[]);

    const fetchSet = useCallback((payload) => {
        dispatch(fetchSetsOne(payload));
    },[]);


    const setsCreate = useCallback((payload) => {
        dispatch(fetchSetsCreate(payload));
    },[]);

    const setsEdit = useCallback((payload) => {
        dispatch(fetchSetsEdit(payload));
    },[]);


    return {sets, set, fetchSets, fetchSet, setsCreate, setsEdit };

};

export default useSets;
