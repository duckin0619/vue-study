export const state = () => ({
    index: 1,
    list: []
});

export const mutations = {
    add(state, text) {
        const index = state.index++;

        state.list.push({
            id: index,
            openDate: new Date().toLocaleDateString(),
            closeDate: '',
            comment: text
        });
    },
    close(state, index) {
        state.list[index].closeDate = new Date().toLocaleDateString();
    },
    remove(state, index) {
        state.list.splice(index, 1);

        if (state.list.length === 0) state.index = 1;
    }
};