    <template>
     <form class="card col-sm-12 col-md-4 mx-auto border-0 shadow  p-3" @submit.prevent="signup">
        <p class="fs-2" style="font-weight:500">Register</p>
        <div>
            <label>Name</label>
            <input class="form-control" type="text" placeholder="Name" v-model="v$.name.model"/>
        </div>
        <div>
            <div v-for="error in v$.usermail.$errors" :key="error" class="text-danger">
                <p>{{error.$message}}</p>
            </div>
            <label>Email</label>
            <input class="form-control" type="text" placeholder="Name" v-model="v$.usermail.model"/>
        </div>
        <div>
            <label>Password</label>
            <input class="form-control" type="text" placeholder="Name" v-model="v$.password.model"/>
        </div>
        <div class="mt-2">
            <button class="btn btn-success">Sign Up</button>
        </div>
     </form>
</template>

<script setup>
 import useVuelidate from '@vuelidate/core'
import {required, minLength, maxLength, email} from '@vuelidate/validators'
 import {ref, onMounted, computed} from "vue"
        const name=ref("")
        const usermail=ref("")
        const password=("")

    const rules=computed(()=>({
    //    form:{
            name:{required, min:minLength(5), max:maxLength(11)},
            usermail:{required, email},
            password:{required, min:minLength(6), max:maxLength(8)}
        //  }
    }))

    const v$= useVuelidate(rules, {name,usermail,password})
</script>

<style>

</style>''