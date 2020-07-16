import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
    fetchExam,
    fetchExamEnter
} from '../redux/action/action';


const useExam = () => {

    const dispatch = useDispatch();


    const exam = useCallback((payload) => {
        dispatch(fetchExam(payload));
    },[]);

    const examEnter = useCallback((payload) => {
        dispatch(fetchExamEnter(payload));
    },[]);


    return {examEnter, exam};
};

export default useExam;
