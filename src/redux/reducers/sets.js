const DEFAULT_STATE = {
    sets:[],
    set: null,
    my: []

};

const reducer = {
    SETS_ALL_SUCCESS: (state, {payload}) => ({
        ...state,
        sets: payload.sets,
    }),

    SETS_ONE_SUCCESS: (state, {payload}) => ({
        ...state,
        set: payload.set,
    }),

    SETS_MY_SUCCESS: (state, {payload}) => ({
        ...state,
        my: payload.my,
    }),


};

export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
