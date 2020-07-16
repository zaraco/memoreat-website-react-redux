import { useDispatch, useSelector } from 'react-redux';
import { cardsSelectors } from '../redux/selectors/cards';
import { useCallback } from 'react';

import {
    fetchCardsAll,
    fetchCardsCreate,
    fetchCardsEdit
} from '../redux/action/action';

const useCards = () => {

    const dispatch = useDispatch();

    const cards = useSelector(cardsSelectors.cards);
    const card = useSelector(cardsSelectors.card);


    const fetchCards = useCallback((payload) => {
        dispatch(fetchCardsAll(payload));
    },[]);

    const fetchCard = useCallback((payload) => {
        dispatch(fetchCardsCreate(payload));
    },[]);


    const cardsCreate = useCallback((payload) => {
        dispatch(fetchCardsCreate(payload));
    },[]);


    const cardsEdit = useCallback((payload) => {
        dispatch(fetchCardsEdit(payload));
    },[]);



    return {cards, card, fetchCards, fetchCard, cardsCreate, cardsEdit };

};

export default useCards;
