<template>
    <el-container>
        <el-header>
            <el-row :gutter="20" type="flex" justify="center">
                <el-col :span="20">
                    <el-input placeholder="Please enter the todo." @keyup.enter.native="addTodo" v-model="comment" clearable></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" icon="el-icon-edit" circle @click="addTodo"></el-button>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
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
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                comment: ''
            }
        },
        computed: {
            todoList() {
                return this.$store.state.TodoList.list;
            }
        },
        methods: {
            addTodo() {
                let value = this.comment;
                if (!value) return;

                this.$store.commit('TodoList/add', value);
                this.comment = '';
            },
            closeTodo(index) {
                this.$store.commit('TodoList/close', index);
            },
            removeTodo(index) {
                this.$store.commit('TodoList/remove', index);
            }
        }
    }
</script>