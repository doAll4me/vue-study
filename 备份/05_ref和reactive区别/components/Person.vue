<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改整个对象</button>

        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeName">修改第二个游戏的名字</button>
    </div>
</template>

<script lang="ts">
export default {
    name:'Person',
}
</script>

<!-- setup语法糖 -->
<script  lang="ts" setup name="Person">
    import { reactive,ref} from 'vue'
    
    //数据
    let car=reactive({brand:"xx",price:100})//reactive创建复杂类型（对象）的响应式数据

    let games=ref([
        {id:'3208jlbf1',name:'王者荣耀'},
        {id:'3208jlbf2',name:'222'},
        {id:'3208jlbf3',name:'333'},
    ])

    //方法
    function changePrice(){
        car.price+=10
        //ref定义响应式数据时，修改要加value，ref也可以定义对象和数组（但底层也是调用的reactive），但reactive只能定义对象类型，不能定义基本类型
    }
    function changeCar(){
        // car={brand:"aa",price:2}//这样写是不行的
        // reactive重新分配一个新对象，会失去响应式；但ref可以整体修改
        Object.assign(car,{brand:"aa",price:2})//可以使用Object.assign去整体替换
    }

    function changeName(){
        if (games.value[1]) {
            games.value[1].name = '原神'
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

    li{
        font-size: 20px;
    }
</style>