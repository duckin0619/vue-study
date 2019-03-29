<template>
    <tr>
        <td>{{todo.index}}</td>
        <td>{{todo.openDate}}</td>
        <td>{{todo.closeDate}}</td>
        <td>{{todo.comment}}</td>
        <td>
            <button type="button" @click="$emit('close-todo-item')">Close</button>
            <button type="button" @click="$emit('remove-todo-item')">Remove</button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "TodoItem",
        props : ['todo', 'close-todo-item', 'remove-todo-item']
    }
</script>

<style scoped>

</style>