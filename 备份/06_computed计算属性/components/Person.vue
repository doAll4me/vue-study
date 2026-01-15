<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        <!-- v-bind单向绑定，v-model双向绑定 -->
        名：<input type="text" v-model="lastName"><br>
        全名：<span>{{ fullName }}</span><br>
        <button @click="changeFullName">将全面修改成lisi</button>
    </div>
</template>



<!-- setup语法糖 -->
<script  lang="ts" setup name="Person">
    import { ref ,computed} from 'vue';//计算属性
    let firstName=ref('zhang')
    let lastName=ref('san')

    // fullname是一个计算属性，而且是只读的，无法修改
    // let fullName=computed(()=>{
    //     console.log(1);//只在计算属性相关的值改变时才会重新计算
        
    //     return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
    // })

    // 这样定义的fullname是可读可写的
    let fullName=computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
        },
        set(val){
            const [str1,str2]=val.split('-')
            firstName.value=str1
            lastName.value=str2
        }
    })

    function changeFullName(){
        fullName.value='li-si'
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