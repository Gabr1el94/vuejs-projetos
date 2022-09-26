<template>
  <div class="home">
    <HelloWorld msg="Bem vindo ao Vue.js App"/>
    <button @click="sair">Sair</button>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    sair: function() {

    }
  }
}
</script>