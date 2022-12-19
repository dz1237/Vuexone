<template>
  <div id="app">
    <h3>App组件</h3>
    <hr>
    <p>Vuex中的state.count的值是:{{ this.$store.state.count }}</p>
    <p>Vuex中的state.addCount计算属性的值是:{{ this.$store.getters.addCount }}</p>
    <button @click="addCount">+</button>
    <button @click="subCount">-</button>
    <button @click="commitCount">同步中直接调用commit方法加3</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
    addCount(){
      this.$store.dispatch("add",2)
    },
    subCount(){
      this.$store.dispatch("sub",2)
    },
    commitCount(){
      this.$store.commit("add",3)
    }
  }
}
</script>

<style>

</style>
