<template>
    <el-container>
        <el-header>
            <TodoInput/>
        </el-header>
        <el-main>
            <TodoList/>
        </el-main>
    </el-container>
</template>

<script>
    import TodoInput from '../containers/TodoInput';
    import TodoList from '../containers/TodoList';

    export default {
        components: {TodoInput, TodoList},
    }
</script>