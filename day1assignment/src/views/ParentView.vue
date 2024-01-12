<script setup>
import { ref } from "vue";
import Child from "../components/Child.vue";
const clicked = ref(true);
const recievedMessage = ref('');
const handleMessage = (message) => {
    recievedMessage.value = message
}
</script>

<template>
    <Child @sended-sent="handleMessage" />
    <h1>{{ recievedMessage }}</h1>
    <br />
    <br />
    <h2 class="heading">Conditional Rendering</h2>
    <h1 v-if="clicked">"Do you want to know how the weather is today? Click below."</h1>
    <h1 v-else>Today's weather is Awesome!</h1>
    <button @click="clicked = !clicked" class="buttonChild1">Toggle</button>
</template>

<style scoped>
.heading {
    display: flex;
    align-items: center;
    justify-content: center;

}

.buttonChild1 {
    margin: auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.5rem;
    outline: none;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    /* background-color: grey; */
}
.buttonChild1:hover {
    background-color: darkgray;
}
</style>