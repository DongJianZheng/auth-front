<template>
  <transition name="fade" id="app">
    <router-view/>
  </transition>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app{
    height: 100%;
    background:rgba(38, 24, 49,.6);
  }
</style>
