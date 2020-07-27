const DEFAULT_STATE = {
    cards: [],
    card: null,
    isFront: true,
    createForm: {
        side1: '',
        side2: ''
    },
    editForm: {
        side1: '',
        side2: ''
    },
    isLoadingCards: false,
    isLoadingCard: false,
    isLoadingCreateCard: false,


};

const reducer = {
    CARDS_ALL_REQUEST: (state) => ({
        ...state,
        isLoadingCards: true,
    }),

    CARDS_ALL_SUCCESS: (state, {payload}) => ({
        ...state,
        cards: payload.cards,
        isLoadingCards: false,

    }),

    CARDS_ONE_REQUEST: (state) => ({
        ...state,
        isLoadingCard: true,
    }),

    CARDS_ONE_SUCCESS: (state, {payload}) => ({
        ...state,
        card: payload.card,
        editForm: {
            side1: payload.card.side1,
            side2: payload.card.side2,
        },
        isLoadingCard: false,


    }),

    CARDS_SIDE_CHANGE: (state, {isFront}) => ({
        ...state,
        isFront: isFront,
    }),

    CARDS_CREATE_REQUEST: (state) => ({
        ...state,
        isLoadingCreateCard: true,
    }),

    CARDS_CREATE_SUCCESS : (state) => ({
        ...state,
        createForm: {
            side1: '',
            side2: ''
        },
        isLoadingCreateCard: false,


    }),


    CARDS_CREATE_FORM: (state, {createForm}) => ({
        ...state,
        createForm: createForm,
    }),


    CARDS_EDIT_FORM: (state, {editForm}) => ({
        ...state,
        editForm: editForm,
    }),

};


export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
