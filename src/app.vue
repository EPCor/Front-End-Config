<template>
  <div>
    <p>
      <router-link to="/home">Go Home</router-link>
      <router-link to="/about">Go About</router-link>
    </p>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.router-link-active {
  font-weight: bold;
}
</style>
