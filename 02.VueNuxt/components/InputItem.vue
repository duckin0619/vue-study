<template>
    <input type="text" v-model="comment" @keyup.enter="$emit('add-todo-input')"></input>
</template>

<script>
    export default {
        name: "Input",
        data() {
            return {
                comment: ''
            };
        },
        props : ['add-todo-input']
    }
</script>

<style scoped>

</style>