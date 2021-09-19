<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { ref, provide } from 'vue'
import configuration from '@/configuration'

const appTitle = ref('')
appTitle.value = configuration('appTitle')
document.title = appTitle.value

const isLocal = ref(false)
isLocal.value = Boolean(configuration('isLocal'))
provide('isLocal', isLocal.value)

provide('version', 'v' + configuration('appVersion'))

</script>

<template>
  <div>
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
      class="m-auto"
    >
  </div>
  <h1>
    {{ appTitle }}
  </h1>
  <p class="font-bold text-xl">
    is local dev: {{ isLocal }}
  </p>

  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
