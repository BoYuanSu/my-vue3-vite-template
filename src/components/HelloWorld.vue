<script setup>
import { ref, inject } from 'vue'

defineProps({
  msg: { type: String, default: 'Hello Vue 3' }
})

const clickHandler = () => {
  console.log('🚀 ~ file: HelloWorld.vue ~ line 11 ~ clickHandler ~ clickHandler')
}

const versoin = inject('version')
const isLocal = inject('isLocal')
const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>ENV versoin: {{ versoin }}</h2>
  <h2>ENV isLocal: {{ isLocal }}</h2>
  <input
    v-model="msg2"
    type="123"
    :class="['123', '123123']"
    @click="clickHandler"
  >
  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="postcss" scoped>
a {
  color: #42b983;
  @apply max-w-[1440px] bg-green-400;
}
</style>
