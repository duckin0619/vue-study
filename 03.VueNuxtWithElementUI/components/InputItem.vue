<template>
    <el-col :span="20">
        <el-input placeholder="Please enter the todo." @keyup.enter.native="$emit('add-todo-input')" v-model="comment" clearable></el-input>
    </el-col>
</template>

<script>
    export default {
        name: "Input",
        computed: {
            comment: {
                get() {
                    return this.$store.state.TodoComment.comment;
                },
                set(comment) {
                    this.$store.commit('TodoComment/updateComment', comment);
                }
            }
        },
        props: ['add-todo-input']
    }
</script>

<style scoped>

</style>