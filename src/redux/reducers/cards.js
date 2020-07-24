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
    }

};

const reducer = {

    CARDS_ALL_SUCCESS: (state, {payload}) => ({
        ...state,
        cards: payload.cards,
    }),

    CARDS_ONE_SUCCESS: (state, {payload}) => ({
        ...state,
        card: payload.card,
        editForm: {
            side1: payload.card.side1,
            side2: payload.card.side2,
        }

    }),

    CARDS_SIDE_CHANGE: (state, {isFront}) => ({
        ...state,
        isFront: isFront,
    }),


    CARDS_CREATE_FORM: (state, {createForm}) => ({
        ...state,
        createForm: createForm,
    }),

    CARDS_CREATE_SUCCESS : (state) => ({
        ...state,
        createForm: {
            side1: '',
            side2: ''
        }

    }),





};
export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
