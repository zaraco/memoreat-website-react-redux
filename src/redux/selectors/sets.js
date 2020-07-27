
export const setsSelectors = {
    sets: (state) => state.sets.sets,
    set: (state) => state.sets.set,
    my: (state) => state.sets.my,
    createForm: (state) => state.sets.createForm,
    editForm: (state) => state.sets.editForm,
    isLoadingSets: (state) => state.sets.isLoadingSets,
    isLoadingSet: (state) => state.sets.isLoadingSet,
    isLoadingMySet: (state) => state.sets.isLoadingMySet,
};
