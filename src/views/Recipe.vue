<template>
    <div class="w-100 p-1 bg-white" style="position:fixed; top:0; z-index:1">
        <div class="d-flex p-2 gap-2 justify-content-center" v-if="!search.value"> 
        <input type="text" class="w-75 form-control" placeholder="Search anything" v-model="search">
            <button class="btn btn-primary"  @click="srcbtn">Search</button>
        </div>
    </div>
<div class="containe mt-5">
    
    <div v-if="filterStaus==true" class="mt-2 px-4">
        <button class="btn btn-primary mx-auto " @click="back">Back to all recipe</button>
    </div>

    <div class="d-block d-md-flex justify-content-cente mt-2" style="flex-wrap:wrap">
        <div class=""  v-for="(recieps, index) in myRecipes"  :key="index">
            <div>
                <ReciepeCard :recipesdetails="recieps"/>
            </div>
        </div>
    </div>
</div>

</template>

<script setup>
     import {usereciepe} from "../store/reciepestore.js";
    import {onMounted, ref, computed} from 'vue';
    import {storeToRefs} from 'pinia';
    import ReciepeCard from "@/components/ReciepeCard.vue";
    const store = usereciepe()
    onMounted(()=>{
        (store.getAllreciepes())
    })
    // const allreciepes = storeToRefs(store).reciepes

    const { reciepes } = storeToRefs(store);
    const search= ref("")

    const myRecipes=ref([])
    let filterStaus=false
    const filteredRecipes = () => {
        if (!search.value) {
            myRecipes.value=reciepes.value
        }
       else{
        myRecipes.value=reciepes.value.filter((recipe) =>
            recipe.name.toLowerCase().includes(search.value.toLowerCase()) || recipe.mealType[0].toLowerCase().includes(search.value.toLowerCase())
        );
        filterStaus=true
        }
    };


    const srcbtn = () => {
    filteredRecipes()
    };

    onMounted(() => {
        setTimeout(() => {
            filteredRecipes()
        
        }, 800);
    });
    const back=()=>{
        filterStaus=false
        myRecipes.value=reciepes.value
    }
</script>

<style>

</style>