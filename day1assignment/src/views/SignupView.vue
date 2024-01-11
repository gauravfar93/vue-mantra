<script setup>
import FormComponent from "../components/FormComponent.vue";


const arrayData = [
    {
        id: 1,
        name: "name",
        placeholder: "Enter name",
        type: "text",
        formName: "signup"
    },
    {
        id: 2,
        name: "email",
        placeholder: "Enter email",
        type: "text",
        formName: "signup"
    },
    {
        id: 3,
        name: "number",
        placeholder: "Enter number",
        type: "number",
        formName: "signup"
    },
    {
        id: 4,
        name: "password",
        placeholder: "Enter password",
        type: "password",
        formName: "signup"
    },

]


</script>
<template>
    <div class="formcontainer">
        <h1> Signup </h1>
        <FormComponent :arrayData="arrayData" />
    </div>
</template>
  
<style scoped>
h1{
margin-top: 65px;
}
</style>
 
  