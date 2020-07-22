import { useDispatch, useSelector } from 'react-redux';
import { cardsSelectors } from '../redux/selectors/cards';
import { useCallback } from 'react';

import {
    cardSide,
    fetchCardsAll,
    fetchCardsCreate,
    fetchCardsEdit, registerForm
} from '../redux/action/action';

const useCards = () => {

    const dispatch = useDispatch();

    const cards = useSelector(cardsSelectors.cards);
    const card = useSelector(cardsSelectors.card);
    const isFront = useSelector(cardsSelectors.isFront);



    const fetchCards = useCallback((payload) => {
        dispatch(fetchCardsAll(payload));
    },[]);


    const cardsCreate = useCallback((payload) => {
        dispatch(fetchCardsCreate(payload));
    },[]);


    const cardsEdit = useCallback((payload) => {
        dispatch(fetchCardsEdit(payload));
    },[]);

    const cardsSideChange = useCallback((payload) => {
        dispatch(cardSide(payload));
    }, []);



    return {cards, card, fetchCards, cardsCreate, cardsEdit, isFront, cardsSideChange };

};

export default useCards;
