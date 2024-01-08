<script setup>
import FormComponent from "../components/FormComponent.vue";


const arrayData = [
    {
        id: 1,
        name: "name",
        placeholder: "Enter name",
        type: "text"
    },
    {
        id: 2,
        name: "email",
        placeholder: "Enter email",
        type: "text"
    },
    {
        id: 3,
        name: "number",
        placeholder: "Enter number",
        type: "number"
    },
    {
        id: 4,
        name: "password",
        placeholder: "Enter password",
        type: "password",
    },

]


</script>
<template>
    <div class="formcontainer">
        <!-- <h1>This Signup Page</h1> -->
        <FormComponent :arrayData="arrayData" />
    </div>
</template>
  
<style></style>
 
  