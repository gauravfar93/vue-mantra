<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const data = ref({});
const route = useRoute();


onMounted(async () => {
    const id = route.params.id;
    // console.log(id)
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const resdata = await res.json();
        data.value = resdata
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
})

</script>

<template>
    <div class="parent">
        <h1>Product Details</h1>
        <div class="container">
            <img :src="`${data.image}`" alt="unfound" />
            <!-- <p>{{ data.id }}</p> -->
            <p>{{ data.title }}</p>
            <p>{{ data.category }}</p>
            <p class="price">{{ data.price }}</p>
            <button class="form_submit1">Buy Now</button>
        </div>

    </div>
</template>


<style scoped>
h1 {
    margin-top: 80px;
}

img {
    display: flex;
    justify-content: center;
    margin: auto;
    /* border: 1px solid grey; */
    width: 190px;
    height: 180px;
    align-items: center;

}

p {
    text-align: center;
    font-size: large;
    margin-bottom: -5px;
}

.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container {
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 450px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */

}

.form_submit1 {
    padding: 0.3rem 0.5rem;
    outline: none;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    /* background-color: grey; */
    margin-top: 10px;
    margin-bottom: 25px;
}

.form_submit1:hover {
    background-color: darkgray;
}

.price {
    font-weight: bold;
}
</style>