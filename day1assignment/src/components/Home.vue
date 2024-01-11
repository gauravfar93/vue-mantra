<script setup>
import { ref, onMounted } from "vue";

const data = ref(null);

onMounted(async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const resdata = await res.json();
        data.value = resdata
    }
    catch (error) {
        console.log(error)
    }
})
</script>
<template>
    <div class="productContainer">
        <div v-for="data in data" class="product">
            <RouterLink :to="`/product/${data.id}`">
                <div>
                    <img :src="data.image" alt="unfound" />
                    <!-- <p>{{ data.id }}</p> -->
                    <p>{{ data.title }}</p>
                    <p>{{ data.category }}</p>
                    <p>{{ data.price }}</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped>
.productContainer {
    position: absolute;
    top: 50px;
    left: 5;
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 20px;
    overflow: hidden;
    /* border: 1px solid black; */
    margin-top: 15px;


}

a {
    text-decoration: none;
    color: black;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
}


.product {
    height: 350px;
    width: 290px;
    overflow: hidden;
    /* border: 1px solid rgba(0, 0, 0, 0.295);  */
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 30px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: 0.3s;

}


.product>div>p {
    text-align: center;
    font-size: medium;
}


.product:hover {
    box-shadow: 0 0 3px 3px rgba(0, 174, 255, 0.37);
}

.product:active {
    transform: scale(0.9);
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

a {}
</style>
