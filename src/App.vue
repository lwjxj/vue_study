<template>
  <div id="app">
    <People />
  </div>
</template>

<script>
import People from './components/People.vue'
export default {
  name: 'App',
  components: {
    People
  }
}
</script>

<style>
  .app {
    width:100px;
    height:100px;
    background:orange;
  }
</style>
