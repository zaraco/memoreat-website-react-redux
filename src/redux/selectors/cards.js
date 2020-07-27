
export const cardsSelectors = {
    cards: (state) => state.cards.cards,
    card: (state) => state.cards.card,
    isFront: (state) => state.cards.isFront,
    createForm: (state) => state.cards.createForm,
    editForm: (state) => state.cards.editForm,
    isLoadingCards: (state) => state.cards.isLoadingCards,
    isLoadingCard: (state) => state.cards.isLoadingCard,
    isLoadingCreateCards: (state) => state.cards.isLoadingCreateCards,
};
