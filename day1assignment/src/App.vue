<script setup>
import { RouterLink, RouterView} from 'vue-router'

</script>

<template>

      <nav>
        <RouterLink class="icons" to="/">Home</RouterLink>
        <RouterLink class="icons" to="/about">About</RouterLink>
        <RouterLink class="icons" to="/signup">Signup</RouterLink>
        <RouterLink class="icons" to="/login">Login</RouterLink>
        <RouterLink class="icons" to="/userdata">User Info</RouterLink>
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
  /* border-bottom: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.icons{
  border: 2px solid grey;
  padding: 10px;
  border-radius: 10px;
}


</style>
