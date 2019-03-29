<template>
    <button type="button" @click="$emit('add-todo-input')">Add Input Todo</button>
</template>

<script>
    export default {
        name: "Button",
        props : ['add-todo-input']
    }
</script>

<style scoped>

</style>