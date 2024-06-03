<template>
    <div class="bg-primary d-sm-flex p-0 " style="align-items:center; height:100vh">
    <form class="card col-sm-12 col-md-4 mx-auto border-0 shadow  p-3" @submit.prevent="signup">
        <p class="fs-2" style="font-weight:500">Register</p>
        <div>
            <label>Name</label>
            <input class="form-control" type="text" placeholder="Name" v-model="name"/>
        </div>
        <div class="mt-3 border-bottom p-1  border-0 bordr-primary">
            <label>Gender</label>
            <div class="d-flex gap-3 mt-2 ">
                <div @click="radio" class="d-flex border-primary rounded justify-content-between px-3 border p-2 pt-4 col-md-3 " style="align-items:center; height:50px">
                    <p>Male</p>
                    <input class="" type="radio" value="male" v-model="gender" style="position:relative; top:-7px"/>
                </div>
                <div class="d-flex border-primary rounded justify-content-between border p-2 pt-4 col-4 " style="align-items:center; height:50px">
                    <p>Female</p>
                    <input class="" type="radio" value="female" v-model="gender" style="position:relative; top:-7px"/>
                </div>
                <div class="d-flex border-primary rounded justify-content-between border p-2 pt-4 col-4 " style="align-items:center; height:50px">
                    <p>Customs</p>
                    <input class="" type="radio" value="custom" v-model="gender" style="position:relative; top:-7px"/>
                </div>
            </div>
        </div>
        <div class="mt-3 form-contrl border-bottom p-1 bordr-primary">
            <label>Skill</label>
            <div class="d-flex borde p2 gap-3 mt-2">
                <div class="d-flex justify-content-between px-3 border border-primary p-2 pt-4 col-3 " style="align-items:center; height:50px">
                    <p>React</p>
                    <input class="" type="checkbox" value="React" v-model="skill" style="position:relative; top:-7px"/>
                </div>
                <div class="d-flex justify-content-between px-3 border border-primary p-2 pt-4 col-4 " style="align-items:center; height:50px">
                    <p>Vue</p>
                    <input class="" type="checkbox" value="Vue" v-model="skill" style="position:relative; top:-7px"/>
                </div>
                <div class="d-flex justify-content-between border border-primary p-2 pt-4 col-4 " style="align-items:center; height:50px">
                    <p>Angular</p>
                    <input class="" type="checkbox" value="Angular" v-model="skill" style="position:relative; top:-7px"/>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <label>Occupation</label>
            <select name="" v-model="occupation" class="w-100 rounded border border-2 bg-light" style="height:40px; outline:none"> 
                <option value="" selected disable >Occupation</option>
                <option value="student">Student</option>
                <option value="trader">Trader</option>
                <option value="civil servant">Civil Servant</option>
                <option value="unemployed">Unemployed</option>
            </select>
        </div>
        <div>
            <button class="btn btn-primary mt-3">Sign Up</button>
        </div>
    </form>
    </div>

</template>

<script setup>
    import {useVuelidate} from '@vuelidate/core'
   
    const name= ref("")
    const gender= ref("")
    const skill= ref([])
    const occupation= ref("")
    const users=ref([])

    const signup=()=>{
        const userObject={name:name.value, gender:gender.value,  skill:skill.value, occupation:occupation.value}
        console.log(userObject)
        users.value.push(userObject)
        localStorage.setItem("alluser", JSON.stringify(users.value))
    }
    onMounted(()=>{
        users.value=localStorage['alluser'] ? JSON.parse(localStorage.getItem("alluser")): []
    })
</script>
