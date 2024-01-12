<script setup>
import { useCounterStore } from "../stores/store";
const store = useCounterStore();
console.log(store)
</script>
<template>
    <h1>A component</h1>
    <div class="Box">
        <h2>Count : {{ store.count }}</h2>
        <h2>Double Count : {{ store.doubleCount }}</h2>
        <button @click="store.increment">Increment</button>
    </div>
</template>
<style scoped>
.Box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>