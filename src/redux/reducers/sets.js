const DEFAULT_STATE = {
    sets:[],
    set: null,
    my: [],
    createForm: {
        name: '',
        language1: '',
        language2: '',
        description: '',
        category: []

    }

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

    SETS_CREATE_FORM: (state, {createForm}) => ({
        ...state,
        createForm: createForm,
    }),


};

export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
