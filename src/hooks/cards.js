import { useDispatch, useSelector } from 'react-redux';
import { cardsSelectors } from '../redux/selectors/cards';
import { useCallback } from 'react';

import {
    cardSide, createCardForm,
    fetchCardsAll,
    fetchCardsCreate,
    fetchCardsEdit, registerForm
} from '../redux/action/action';

const useCards = () => {

    const dispatch = useDispatch();

    const cards = useSelector(cardsSelectors.cards);
    const card = useSelector(cardsSelectors.card);
    const isFront = useSelector(cardsSelectors.isFront);
    const createForm = useSelector(cardsSelectors.createForm);



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

    const cardsCreatForm = useCallback((payload) => {
        dispatch(createCardForm(payload));
    }, []);



    return {cards, card, fetchCards, cardsCreate, cardsEdit, isFront, cardsSideChange, createForm,cardsCreatForm };

};

export default useCards;
