<template>
  <div id="app">
    <div data-test-counter>{{ count }}</div>
    <div>
      <button @click="increase" data-test-plus-button>+</button>
      <button @click="decrease" data-test-minus-button>-</button>
    </div>
    <div data-test-todo>
      {{ todos.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { INCREASE, DECREASE, GET_TODOS } from "./store/modules/counter";

export default {
  name: "App",
  async created() {
    await this.getTodos();
  },
  computed: {
    ...mapState("counter", ["count", "todos"]),
  },
  methods: {
    ...mapActions("counter", {
      increase: INCREASE,
      decrease: DECREASE,
      getTodos: GET_TODOS,
    }),
  },
};
</script>
