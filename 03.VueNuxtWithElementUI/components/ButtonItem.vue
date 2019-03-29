<template>
    <el-col :span="4">
        <el-button type="primary" icon="el-icon-edit" circle @click="$emit('add-todo-input')"></el-button>
    </el-col>
</template>

<script>
    export default {
        name: "Button",
        props : ['add-todo-input']
    }
</script>

<style scoped>

</style>