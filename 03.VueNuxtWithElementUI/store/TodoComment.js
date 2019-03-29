export const state = () => ({
    comment : ''
});

export const mutations = {
    updateComment(state, comment) {
        state.comment = comment;
    }
};