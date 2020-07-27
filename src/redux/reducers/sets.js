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
    },
    isLoadingSets: false,
    isLoadingSet: false,
    isLoadingMYSet: false
};

const reducer = {

    SETS_ALL_REQUEST: (state) => ({
        ...state,
        isLoadingSets: true

    }),
    SETS_ALL_SUCCESS: (state, {payload}) => ({
        ...state,
        sets: payload.sets,
        isLoadingSets: false

    }),

    SETS_ONE_REQUEST: (state) => ({
        ...state,
        isLoadingSet: true

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
        },
        isLoadingSet: false

    }),

    SETS_MY_REQUEST: (state) => ({
        ...state,
        isLoadingMYSet: true

    }),

    SETS_MY_SUCCESS: (state, {payload}) => ({
        ...state,
        my: payload.sets,
        isLoadingMYSets: false

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
