<script setup>
import { RouterLink, RouterView} from 'vue-router'

</script>

<template>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
      </nav>

  <RouterView />

</template>

<style scoped>

*{
  overflow-x: hidden;
}

nav {
  width: 100%;position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  border-bottom: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

</style>
