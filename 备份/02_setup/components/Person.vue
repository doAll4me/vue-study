<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
export default {
    name:'Person',
    setup(){
        //setup中的this是undefined
        // 数据
        let name='张三'//此时的数据不是响应式的，数据更改后页面不会更新
        let age=18
        let tel='139399070'

        // 方法
        function changeName(){
            name='zhangsan'
        }
        function changeAge(){
            age+=1
        }
        function showTel(){
            alert(tel)
        }
        return {name,age,changeName,changeAge,showTel}
    }
}
</script>

<style scoped>
    .person{
        background-color: pink;
        box-shadow:0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
</style>