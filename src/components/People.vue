<template>
    <div>
        <p>计算属性：</p>
        <p>全名:{{fullName}}</p>
        <h2>今天天气很{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                firstName:'张',
                lastName:'三',
                isHot:true
            }
        },
        computed:{
            // fullName: {
            //     get(){
            //         return this.firstName + '-' +this.lastName
            //     },
            //     set(value){
            //         console.log('set',value)
            //     }
            // }
            fullName(){
                return this.firstName +'-'+this.lastName
            },
            info(){
                return this.isHot ? '炎热' : '凉爽'
            },
        },
        methods:{
            changeWeather(){
                this.isHot = !this.isHot
            }
        },
        watch:{
            isHot:{
                deep:true, // 深度监视
                immediate:true, // 初始化时让handler调用一下
                handler(newValue,oldValue){
                    console.log('isHot被修改了',newValue,oldValue)
                }
            },
            isHot(newValue,oldValue){ // 简写形式
                console.log(newValue,oldValue)
            }
        }
    }
</script>

<style scoped>

</style>