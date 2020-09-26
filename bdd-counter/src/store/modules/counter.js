export const getDefaultState = () => ({
  count: 0,
});

const getters = {};

// mutations type
export const SET_COUNT = "SET_COUNT";

const mutations = {
  [SET_COUNT](state, newCount) {
    state.count = newCount;
  },
};

// actions type
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

const actions = {
  [INCREASE]({ state, commit }) {
    const { count } = state;
    commit(SET_COUNT, count + 1);
  },
  [DECREASE]({ state, commit }) {
    const { count } = state;
    commit(SET_COUNT, count - 1);
  },
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters,
  mutations,
  actions,
};
