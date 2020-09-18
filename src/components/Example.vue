<template>
  <span class="example" @click="handleClick">{{ value }}</span>
</template>

<script>
export default {
  name: 'Example',
  props: {
    value: Number,
    handleClick: Function,
  },
};
</script>

<style scoped>
.example {
  font-weight: bold;
}
</style>
