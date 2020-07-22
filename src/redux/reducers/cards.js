const DEFAULT_STATE = {
    cards: [],
    card: null,
    isFront: true

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




};
export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
