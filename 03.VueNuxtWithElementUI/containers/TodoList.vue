<template>
    <el-table :data="todoList">
        <el-table-column prop="id" label="index" width="100"></el-table-column>
        <el-table-column prop="openDate" label="Open Date" width="140"></el-table-column>
        <el-table-column prop="closeDate" label="Close Date" width="140"></el-table-column>
        <el-table-column prop="comment" label="Comment"></el-table-column>
        <el-table-column fixed="right" label="Operations" width="120">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click.native.prevent="closeTodo(scope.$index)">Close</el-button>
                <el-button type="text" size="small" @click.native.prevent="removeTodo(scope.$index)">Remove</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "TodoList",
        computed: {
            todoList() {
                return this.$store.state.TodoList.list;
            }
        },
        methods: {
            closeTodo(index) {
                this.$store.commit('TodoList/close', index);
            },
            removeTodo(index) {
                this.$store.commit('TodoList/remove', index);
            }
        }
    }
</script>

<style scoped>

</style>