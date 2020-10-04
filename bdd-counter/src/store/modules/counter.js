import { fetchTodos } from "../../api/todo-service";

export const getDefaultState = () => ({
  count: 0,
  todos: [],
});

const getters = {};

// mutations type
export const SET_COUNT = "SET_COUNT";
export const SET_TODOS = "SET_TODOS";

const mutations = {
  [SET_COUNT](state, newCount) {
    state.count = newCount;
  },
  [SET_TODOS](state, newTodos) {
    state.todos = newTodos;
  },
};

// actions type
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const GET_TODOS = "GET_TODOS";

const actions = {
  [INCREASE]({ state, commit }) {
    const { count } = state;
    commit(SET_COUNT, count + 1);
  },
  [DECREASE]({ state, commit }) {
    const { count } = state;
    commit(SET_COUNT, count - 1);
  },
  async [GET_TODOS]({ commit }) {
    const resp = await fetchTodos();
    commit(SET_TODOS, resp.data);
  },
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters,
  mutations,
  actions,
};
