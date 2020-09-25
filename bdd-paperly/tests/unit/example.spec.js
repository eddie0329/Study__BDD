import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { cloneDeep } from "lodash";
import storeConfig from "../../src/store";

describe("store", () => {
  describe("getters", () => {
    describe("daysRemaining", () => {
      it("calculates 2 days remaining with 4 rolls remaining and a roll rate of 2", () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep(storeConfig));
        store.replaceState({
          rollsRemaining: 4,
          rollRate: 2,
          daysRemaining: 2,
        });

        expect(store.getters.daysRemaining).toBe(2);
      });
    });
  });
});
