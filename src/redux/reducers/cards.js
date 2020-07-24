const DEFAULT_STATE = {
    cards: [],
    card: null,
    isFront: true,
    createForm: {
        side1: '',
        side2: ''
    }

};

const reducer = {

    CARDS_ALL_SUCCESS: (state, {payload}) => ({
        ...state,
        cards: payload.cards,
    }),

    CARDS_SIDE_CHANGE: (state, {isFront}) => ({
        ...state,
        isFront: isFront,
    }),

    CARDS_CREATE_FORM: (state, {createForm}) => ({
        ...state,
        createForm: createForm,
    }),




};
export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
