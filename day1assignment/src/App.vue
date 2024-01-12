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
        <RouterLink class="icons" to="/emits">Emits/Events</RouterLink>
        <RouterLink class="icons" to="/pinia">Pinia Store View</RouterLink>
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
  height: 50px;
  border-bottom: 0.1rem solid grey;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 15px;
  

}
.icons{
  border: 2px solid grey;
  padding: 7px;
  border-radius: 10px;
  transition: transform .4s; 
}

.icons:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1); 
}

a{
    text-decoration: none;
    border: 1px solid grey;
    color: black;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
}


</style>
