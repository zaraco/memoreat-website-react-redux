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

    },
    editForm: {
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
        editForm: {
            name: payload.set.name,
            language1: payload.set.language1,
            language2: payload.set.language2,
            description: payload.set.description,
            category: []
        }
    }),

    SETS_MY_SUCCESS: (state, {payload}) => ({
        ...state,
        my: payload.sets,
    }),

    SETS_CREATE_FORM: (state, {createForm}) => ({
        ...state,
        createForm: createForm,
    }),

    SETS_EDIT_FORM: (state, {editForm}) => ({
        ...state,
        editForm: editForm,
    }),



};

export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
