<template>
    <el-row :gutter="20" type="flex" justify="center">
        <InputItem type="text" v-on:add-todo-input="addTodo"/>
        <ButtonItem v-on:add-todo-input="addTodo"/>
    </el-row>
</template>

<script>
    import InputItem from '../components/InputItem';
    import ButtonItem from '../components/ButtonItem';

    export default {
        name: "TodoInput",
        components: {InputItem, ButtonItem},
        methods: {
            addTodo() {
                this.$store.commit('TodoList/add', this.$store.state.TodoComment.comment);
                this.$store.commit('TodoComment/updateComment', '');
            }
        }

    }
</script>

<style scoped>

</style>