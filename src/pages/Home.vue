<template>
  <div class="home">
    <Example :value="someData" :handleClick="updateSomeData" />
    -> {{ drivedData }}
  </div>
</template>

<script>
import Example from '~/components/Example.vue';
import { types } from '~/store';
export default {
  name: 'Home',
  components: {
    Example,
  },
  computed: {
    someData() {
      return this.$store.state.home.someData;
    },
    drivedData() {
      return this.$store.getters['home/drivedData'];
    },
  },
  methods: {
    updateSomeData() {
      this.$store.commit(`home/${types.SOME_MUTATION}`);
    },
  },
};
</script>

<style>
.home {
  text-align: center;
}
</style>
