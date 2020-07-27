import { useDispatch, useSelector } from 'react-redux';
import { cardsSelectors } from '../redux/selectors/cards';
import { useCallback } from 'react';

import {
    cardSide, createCardForm, editCardForm,
    fetchCardsAll,
    fetchCardsCreate,
    fetchCardsEdit, fetchCardsOne, registerForm
} from '../redux/action/action';

const useCards = () => {

    const dispatch = useDispatch();

    const cards = useSelector(cardsSelectors.cards);
    const card = useSelector(cardsSelectors.card);
    const isFront = useSelector(cardsSelectors.isFront);
    const createForm = useSelector(cardsSelectors.createForm);
    const editForm = useSelector(cardsSelectors.editForm);
    const isLoadingCards = useSelector(cardsSelectors.isLoadingCards);
    const isLoadingCard = useSelector(cardsSelectors.isLoadingCard);
    const isLoadingCreateCards = useSelector(cardsSelectors.isLoadingCreateCards);



    const fetchCards = useCallback((payload) => {
        dispatch(fetchCardsAll(payload));
    },[]);

    const fetchCard = useCallback((payload) => {
        dispatch(fetchCardsOne(payload));
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

    const cardsEditForm = useCallback((payload) => {
        dispatch(editCardForm(payload));
    }, []);



    return {
        cards,
        card,
        fetchCards,
        cardsCreate,
        cardsEdit,
        isFront,
        cardsSideChange,
        createForm,
        cardsCreatForm,
        fetchCard,
        editForm,
        cardsEditForm,
        isLoadingCard,
        isLoadingCards,
        isLoadingCreateCards

    };

};

export default useCards;
