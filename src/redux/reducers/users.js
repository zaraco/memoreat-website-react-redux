const DEFAULT_STATE = {
    user: null,
};

const reducer = {}

export default (state = DEFAULT_STATE, action) =>
    !action || typeof reducer[action.type] === 'undefined'
        ? state
        : reducer[action.type](state, action);
