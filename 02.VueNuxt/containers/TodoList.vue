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
            <tr v-for="(todo, index) in list">
                <td>{{todo.index}}</td>
                <td>{{todo.openDate}}</td>
                <td>{{todo.closeDate}}</td>
                <td>{{todo.comment}}</td>
                <td>
                    <button type="button" @click="closeTodo(index)">Close</button>
                    <button type="button" @click="removeTodo(index)">Remove</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        data() {
            return {
                index : 1,
                list : []
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