<template>
    <div class="bg-primay d-sm-flex p-0 " style="align-items:center; height:100vh">
    <form class="card col-sm-12 col-md-6 col-lg-4 mx-auto border-0 shadow  p-3" @submit.prevent="signup">
        <p class="fs-2" style="font-weight:500">Register</p>
        <div>
            <div v-for="error in v$.form.name.$errors" :key="error" class="text-danger">
                <span class="text-end shadw p-1 bg-whte w-75" style="position:absolute; margin-left:90px; margin-top:-5px ">{{error.$message}}</span>
            </div>
            <label>Name</label>
            <input class="w-100 border" type="text" placeholder="" v-model="v$.form.name.$model" style="height:45px; border-radius:0px; outline:none"/>
        </div>

        <div class="mt-3">
            <div v-for="error in v$.form.email.$errors" :key="error" class="text-danger">
                <span class="text-end p-1 w-75" style="position:absolute; margin-left:90px; margin-top:-5px ">{{error.$message}}</span>
            </div>
            <label>Email</label>
            <input class="w-100 border" type="text" placeholder="" v-model="v$.form.email.$model" style="height:45px; border-radius:0px; outline:none"/>
        </div>

        <div class="mt-3">
            <div v-for="error in v$.form.password.$errors" :key="error" class="text-danger">
                <span class="text-end p-1 w-75" style="position:absolute; margin-left:90px; margin-top:-5px ">{{error.$message}}</span>
            </div>
            <label>Password</label>
            <input class="w-100 border" type="text" placeholder="" v-model="v$.form.password.$model" style="height:45px; border-radius:0px; outline:none"/>
        </div>
        <div>
            <button class="btn btn-primary mt-3" style="height:45px">Sign Up</button>
        </div>
    </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import {useVuelidate} from '@vuelidate/core'
import {required, minLength, maxLength, email} from '@vuelidate/validators'
export default {
    setup(){
        useVuelidate();
        return {v$: useVuelidate()}
    },
    data(){
        return{
            // user input
            form:{
                name:'',
                email:'',
                password:''
            },
        }
    },
     // validation rules
    validations(){
        return{
            form:{
                name:{required, min:minLength(5), max:maxLength(11)},
                email:{required, email},
                password:{required, min:minLength(6), max:maxLength(8)}
            }
        }
    },
    methods:{
        signup(){
            console.log(this.v$.form);
        },
        getMyWallet(){

        }
    }
}
</script>

<style>

</style>