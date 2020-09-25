<template>
  <div id="app">
    <div class="content-wrapper">
      <h1 data-test-logo>paper.ly</h1>
      <p data-test-days-remaining>{{ daysRemaining }} days remaining</p>
      <p data-test-rolls-remaining>{{ rollsRemaining }} rolls remaining</p>
      <p data-test-roll-rate>{{ rollRate }} rolls per day</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["rollsRemaining", "rollRate", "daysRemaining"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
