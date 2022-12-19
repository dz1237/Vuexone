<template>
  <div id="app">
    <h3>App组件</h3>
    <hr>
    <p>Vuex中的state.count的值是:{{ this.$store.state.count }}</p>
    <button @click="addCount">+</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
    addCount(){
      
    }
  }
}
</script>

<style>

</style>
