<template>
  <div id="app">
    <apl-button @click="asd" type="danger">点我</apl-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    asd(){
      alert('asd')
    }
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
