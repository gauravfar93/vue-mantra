<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['sended-sent'])

const GetData = () => {
    emit('sended-sent', 'Message from "Emit".')
}

</script>

<template>
    <button @click="GetData" class="buttonChild">Click to Emit Data</button>
</template>

<style scoped>
.buttonChild {
    margin: auto;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.5rem;
    outline: none;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    background-color: grey;

}
</style>