<script setup>
import { ref } from 'vue';
let surveyData = ref([]);
const activeId = ref([]);

const handleClick = (id) => {
    console.log(activeId.value, id)
    activeId.value = id;
};

const getSurveyData = (signup) => {
    console.log("survey get");
    const data = JSON.parse(localStorage.getItem(signup));
    console.log(data);
    surveyData.value = data;
};
getSurveyData("signup")

</script>

<template>
    <h1>User Info</h1>
    <div class="container">
        <div v-for="data in surveyData" :key="data.name" class="containerFirst" @click="handleClick(data.name)"
            :class="{ active: activeId === data.name }">
            <div v-for="(value, key) in data" :key="key">

                <p v-if="key === 'name' || key === 'email'">
                    {{ value }}

                </p>

            </div>
        </div>

    </div>
</template>


<style scoped>
.active {
    background-color: lightblue;
}

h1 {
    margin-top: 90px;
}

.container {
    border: 1px solid black;
    border-radius: 10px;
    /* background-color: lightgray; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 350px;
}

.containerFirst {
    border: 1px solid black;
    width: 250px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.containerFirst p {
    text-align: center;
    font-size: large;
}
</style>
 