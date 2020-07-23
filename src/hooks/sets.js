import { useDispatch, useSelector } from 'react-redux';
import { setsSelectors } from '../redux/selectors/sets';
import { useCallback } from 'react';

import {
    fetchSetsAll,
    fetchSetsOne,
    fetchSetsCreate,
    fetchSetsEdit, fetchMySets, createSetForm, editSetForm,
} from '../redux/action/action';


const useSets = () => {

    const dispatch = useDispatch();

    const sets = useSelector(setsSelectors.sets);
    const set = useSelector(setsSelectors.set);
    const my = useSelector(setsSelectors.my);
    const createForm = useSelector(setsSelectors.createForm);
    const editForm = useSelector(setsSelectors.editForm);



    const fetchSets = useCallback((payload) => {
        dispatch(fetchSetsAll(payload));
    },[]);

    const fetchSet = useCallback((payload) => {
        dispatch(fetchSetsOne(payload));
    },[]);

    const fetchMy = useCallback((payload) => {
        dispatch(fetchMySets(payload));
    },[]);


    const setsCreateForm = useCallback((payload) => {
        dispatch(createSetForm(payload));
    },[]);

    const setsCreate = useCallback((payload) => {
        dispatch(fetchSetsCreate(payload));
    },[]);


    const setsEditForm = useCallback((payload) => {
        dispatch(editSetForm(payload));
    },[]);


    const setsEdit = useCallback((payload) => {
        dispatch(fetchSetsEdit(payload));
    },[]);






    return {sets, set, fetchSets, fetchSet, setsCreate, my, fetchMy, createForm, setsCreateForm, editForm, setsEdit, setsEditForm};

};

export default useSets;
