<template>
    <!-- html结构 -->
        <Person/>
</template>

<script lang="ts">
    // JS或TS
    // vue3推荐用ts
    import Person from './components/Person.vue';
    export default{
        name:'App',
        components:{Person}
    }
</script>

<style>
    /* 样式 */
    .app{
        background-color: gray;
        box-shadow:0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>