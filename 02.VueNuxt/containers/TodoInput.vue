<template>
    <div class="form-group">
        <Input type="text" ref="inputTodo" v-on:add-todo-input="addTodo"/>
        <Button v-on:add-todo-input="addTodo"/>
    </div>
</template>

<script>
    import Input from '../component/InputItem';
    import Button from '../component/ButtonItem';

    export default {
        name: "TodoInput",
        components: {Input, Button},
        methods: {
            addTodo() {
                const comment = this.$refs.inputTodo.comment;
                if (!comment) return;

                this.$emit('add-todo-master', comment);
                this.$refs.inputTodo.comment = '';
            }
        },
        props: ['add-todo-master']
    }
</script>

<style scoped>

</style>