<template>
    <div class="main">
        <TodoInput v-on:add-todo-master="addTodo"/>
        <TodoList ref="todoList"/>
    </div>
</template>

<script>
    import TodoInput from '../containers/TodoInput';
    import TodoList from '../containers/TodoList';

    export default {
        name: "index",
        components: {TodoInput, TodoList},
        methods: {
            addTodo(comment) {
                this.$refs.todoList.addTodo(comment);
            }
        }
    }
</script>

<style scoped>

</style>