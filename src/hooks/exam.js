import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
    actionFetchExam, actionFetchExamEnter

} from '../redux/action/action';


const useExam = () => {

    const dispatch = useDispatch();


    const exam = useCallback((payload) => {
        dispatch(actionFetchExam(payload));
    },[]);

    const examEnter = useCallback((payload) => {
        dispatch(actionFetchExamEnter(payload));
    },[]);


    return {examEnter, exam};
};

export default useExam;
