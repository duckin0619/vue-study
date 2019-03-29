<template>
    <div class="todo-list-form">
        <table style="border: 1px solid;">
            <thead>
            <tr>
                <th style="width: 100px;">번호</th>
                <th style="width: 140px;">시작일</th>
                <th style="width: 140px;">종료일</th>
                <th style="width: 200px;">내용</th>
            </tr>
            </thead>
            <tbody>
            <tr is="TodoItem" v-for="(todo, index) in list" :key="index" v-bind:todo="todo" v-on:close-todo-item="closeTodo(index)" v-on:remove-todo-item="removeTodo(index)"></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import TodoItem from '../component/TodoItem';

    export default {
        name: "TodoList",
        components: {TodoItem},
        data() {
            return {
                index: 1,
                list: []
            }
        },
        methods: {
            addTodo(comment) {
                this.list.push({
                    index: this.index++,
                    openDate: new Date().toLocaleDateString(),
                    closeDate: '',
                    comment: comment
                });
            },
            closeTodo(index) {
                this.list[index].closeDate = new Date().toLocaleDateString();
                //this.$set(this.list[index], "closeDate", new Date().toLocaleDateString());
            },
            removeTodo(index) {
                this.list.splice(index, 1);

                if (this.list.length === 0) this.index = 1;
            }
        }
    }
</script>

<style scoped>

</style>