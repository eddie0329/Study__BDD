import counterStore, { getDefaultState } from "../../src/store/modules/counter";

const { state, mutations, actions } = counterStore;

describe("Counter Store test", () => {
  describe("state test", () => {
    it("default state test", () => {
      expect(state).toMatchObject(getDefaultState());
    });
  });

  describe("mutations test", () => {
    let state;
    beforeEach(() => {
      state = getDefaultState();
    });
    const { SET_COUNT } = mutations;
    describe("SET_COUNT test", () => {
      it("set count by 1", () => {
        expect(state.count).toBe(0);
        SET_COUNT(state, 1);
        expect(state.count).toBe(1);
      });
      it("set count by 2", () => {
        expect(state.count).toBe(0);
        SET_COUNT(state, 2);
        expect(state.count).toBe(2);
      });
    });
  });

  describe("actions test", () => {
    let commit;
    let state;
    beforeEach(() => {
      state = getDefaultState();
      commit = jest.fn();
    });
    const { INCREASE, DECREASE } = actions;
    describe("INCREASE test", () => {
      it("SET_COUNT should called with 1", () => {
        INCREASE({ state, commit });
        expect(commit).toHaveBeenCalledWith("SET_COUNT", 1);
      });
    });
    describe("DECREASE test", () => {
      it("SET_COUNT should called with -1", () => {
        DECREASE({ state, commit });
        expect(commit).toHaveBeenCalledWith("SET_COUNT", -1);
      });
    });
  });
});
