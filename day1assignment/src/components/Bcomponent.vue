<script setup>
import { useCounterStore } from "../stores/store";
const store = useCounterStore();    
</script>
<template>
    <hr>
    <div class="Box1">
        <h1>B component</h1>
        <h2>Count : {{ store.count }}</h2>
        <h2>Double Count : {{ store.doubleCount }}</h2>
    </div>
</template>
<style scoped>
.Box1{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}</style>