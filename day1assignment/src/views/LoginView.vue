<script setup>
import FormComponent from "../components/FormComponent.vue";


const arrayData = [
    {
        id: 1,
        name: "email",
        placeholder: "Enter email",
        type: "text",
        formName: "login"
    },
    {
        id: 2,
        name: "password",
        placeholder: "Enter password",
        type: "password",
        formName: "login"   
    },

]


</script>
<template>
    <div class="formcontainer">
        <h1> Login </h1>
        <FormComponent :arrayData="arrayData" />
    </div>
</template>
  
<style scoped>
h1{
margin-top: 50px;
}</style>
 
  