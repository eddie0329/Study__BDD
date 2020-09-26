<template>
  <div id="app">
    <div data-test-counter>{{ count }}</div>
    <div>
      <button @click="increase" data-test-plus-button>+</button>
      <button @click="decrease" data-test-minus-button>-</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { INCREASE, DECREASE } from "./store/modules/counter";

export default {
  name: "App",
  computed: {
    ...mapState("counter", ["count"])
  },
  methods: {
    ...mapActions("counter", {
      increase: INCREASE,
      decrease: DECREASE
    })
  }
};
</script>
