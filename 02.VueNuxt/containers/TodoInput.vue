<template>
    <div class="form-group">
        <input type="text" id="comment" v-model="comment" @keyup.enter="addTodo"></input>
        <button type="button" @click="addTodo">Add Input Todo</button>
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        data() {
            return {
                comment: ''
            };
        },
        methods: {
            addTodo() {
                const comment = this.comment;
                if (!comment) return;

                this.$emit('add-todo-master', comment);
                this.comment = '';
            }
        },
        props: ['add-todo-master']
    }
</script>

<style scoped>

</style>