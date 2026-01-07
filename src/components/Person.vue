<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改价格</button>

        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeName">修改第二个游戏的名字</button>
    </div>
</template>

<!-- setup语法糖 -->
<script  lang="ts" setup name="Person">
    import { reactive} from 'vue'
    
    //数据
    let car=reactive({brand:"xx",price:100})//reactive创建复杂类型（对象）的响应式数据

    let games=reactive([
        {id:'3208jlbf1',name:'王者荣耀'},
        {id:'3208jlbf2',name:'222'},
        {id:'3208jlbf3',name:'333'},
    ])

    //方法
    function changePrice(){
        car.price+=10
    }

    function changeName(){
        if (games[1]) {
            games[1].name = '原神'
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