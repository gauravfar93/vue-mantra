import { defineStore } from "pinia";
import {ref, computed, onMounted} from "vue";

export const useCounterStore = defineStore('counter', ()=>{
    const count = ref(1); //state
    const doubleCount = computed(()=>count.value*2) //getters
    function increment () {
        count.value++
    }
    return{count, doubleCount, increment}
})

export const useApiStore = defineStore('Api', ()=>{
    const data = ref(null);
    
    async function getData () {

        
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const resdata = await res.json();
                data.value = resdata
            }
            catch (error) {
                console.log(error)
            }
        
    }
    return{data, getData}
})