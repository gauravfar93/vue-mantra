
<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(['arrayData']);
const arrayData = props.arrayData;
console.log(arrayData)
//console.log("hi");

let inputValues = {};
arrayData.forEach(input => {
    inputValues[input.name] = ref("");
    console.log(input.name)
});


console.log(inputValues)

const submittedData = {};

const handleFormSubmit = () => {
    console.log(inputValues)
    for (const [key, value] of Object.entries(inputValues)) {
        submittedData[key] = value.value;
    } 
    console.log(submittedData  )
       // Save submitted data to Local Storage
    let localData = JSON.parse(localStorage.getItem(arrayData[0].formName));
    if (!localData) {
        localData = []
    }
    console.log("localdata" +localData)
    localData.push(submittedData);
    console.log(localData)
    localStorage.setItem(arrayData[0].formName, JSON.stringify(localData));
    alert("form submitted")
    console.log(submittedData);
}

</script>
<style></style>
<template>
    <form @submit.prevent="handleFormSubmit" class="form_containe">
        <input v-for="data in arrayData" :type="data.type" :key="data.id" :placeholder="data.placeholder"
            v-model="inputValues[data.name].value" class="inputbox" />
        <!-- <input type="text" placeholder="enter email" />
        <input type="number" placeholder="enter number" />
        <input type="text" placeholder="enter password" /> -->
        <button class="form_submit">Submit</button>
    </form>
</template>

<style>
.inputbox{
    width: 300px;
}
h1 {
    text-align: center;
    color: gray;
}

.form_containe {
    display: flex;
    gap: 20px;
    flex-direction: column;
    height: 40rem;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 1px solid grey;
    width: 400px;
    border-radius: 10px;
}

.form_containe input {
    font-size: large;
    padding: 0.5rem 1rem;
    outline: none;
    border-radius: 10px;

}

.form_submit {
    padding: 0.3rem 0.5rem;
    outline: none;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    /* background-color: grey; */
}
.form_submit:hover{
    background-color: darkgray;
}
</style>
