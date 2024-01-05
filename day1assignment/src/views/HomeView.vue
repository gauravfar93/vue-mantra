<script setup>
import One from '@/components/One.vue';
import {ref, onMounted} from "vue";

const data = ref(null)

onMounted(async()=>{
  try{
    const res = await fetch("https://fakestoreapi.com/products");
    const resdata = await res.json();
    data.value = resdata
  }
  catch(error){
    console.log(error)
  }
})
</script>
<template>
  <div class="productContainer" >
  <div v-for="data in data" class="product">
    <div>
      <img :src="data.image"  alt="unfound"/>
      <p>{{ data.title }}</p>
      <p>{{ data.category }}</p>
      <p>{{ data.price }}</p>
    </div>
  </div>
  </div>

</template>
<style>
.productContainer  {
  position: absolute;
top: 50px;
left: 0;
display: flex;
flex-wrap: wrap;
width: 100vw;
justify-content: space-between;
align-items: center;
gap: 50px;
padding: 20px;
overflow: hidden;
}
.product{
  height: 350px;
  width: 250px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.295);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.37);
  transition: 0.3s;
}
.product:hover{
  box-shadow: 0 0 5px 5px rgba(0, 174, 255, 0.37);
}

</style>
