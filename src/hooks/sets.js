import { useDispatch, useSelector } from 'react-redux';
import { setsSelectors } from '../redux/selectors/sets';
import { useCallback } from 'react';

import {
    createSetForm,
    editSetForm,
    actionFetchSetsAll,
    actionFetchSetsOne,
    actionFetchMySets,
    actionFetchSetsCreate, actionFetchSetsEdit,
} from '../redux/action/action';


const useSets = () => {

    const dispatch = useDispatch();

    const sets = useSelector(setsSelectors.sets);
    const set = useSelector(setsSelectors.set);
    const my = useSelector(setsSelectors.my);
    const createForm = useSelector(setsSelectors.createForm);
    const editForm = useSelector(setsSelectors.editForm);
    const isLoadingSets = useSelector(setsSelectors.isLoadingSets);
    const isLoadingSet = useSelector(setsSelectors.isLoadingSet);
    const isLoadingMySet = useSelector(setsSelectors.isLoadingMySet);



    const fetchSets = useCallback((payload) => {
        dispatch(actionFetchSetsAll(payload));
    },[]);

    const fetchSet = useCallback((payload) => {
        dispatch(actionFetchSetsOne(payload));
    },[]);

    const fetchMy = useCallback((payload) => {
        dispatch(actionFetchMySets(payload));
    },[]);


    const setsCreateForm = useCallback((payload) => {
        dispatch(createSetForm(payload));
    },[]);

    const setsCreate = useCallback((payload) => {
        dispatch(actionFetchSetsCreate(payload));
    },[]);


    const setsEditForm = useCallback((payload) => {
        dispatch(editSetForm(payload));
    },[]);


    const setsEdit = useCallback((payload) => {
        dispatch(actionFetchSetsEdit(payload));
    },[]);






    return {sets,
        set,
        fetchSets,
        fetchSet,
        setsCreate,
        my,
        fetchMy,
        createForm,
        setsCreateForm,
        editForm,
        setsEdit,
        setsEditForm,
        isLoadingSets,
        isLoadingSet,
        isLoadingMySet
    };

};

export default useSets;
