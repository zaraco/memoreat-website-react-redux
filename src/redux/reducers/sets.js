const DEFAULT_STATE = {
    sets:[],
    set: null,

};

const reducer = {
    SETS_ALL_SUCCESS: (state, {payload}) => ({
        ...state,
        sets: payload.sets,
    }),

};

export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
