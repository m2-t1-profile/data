export const state = () => ({
  mainPages: [],
  hasMorePage: false,
});

const limit = 10;

export const mutations = {

  loadPages(state) {
    // const fakePages = Array(limit).fill().map(v => ({
    //   id: Math.random().toString(),
    // }));

    state.mainPages = ['123', '456', '789'];
    state.hasMorePage = ['123', '456', '789'].length === limit;
  },

};

export const actions = {

  loadPages({commit, state}, payload) {
    if (state.hasMorePage) {
      commit('loadPages');
    }
  },
};
