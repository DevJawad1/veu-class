<template>
    <div class="modal-body">
        <div class="d-flex justify-content-between">
            <div class="d-flx gap-1">
            <!-- <p class="pt-1">Tags:</p> -->
            <div class="d-flex gap-1">
            <div class="tag" v-for="(tag, index ) in recipesdetails.tags" :key="index">
                <p class="bg-primary text-white p-1 rounded">{{tag}}</p>
            </div>
            </div>
        </div>
        <div class="d-flex gap-1">
            <p class="pt-1">Difficulty:</p>
            <div class="d-fle gap-1">
                <p class="bg-primary text-white p-1 rounded">{{recipesdetails.difficulty}}</p>
            </div>
        </div>
        </div>
        
        <div class="ingredient">
            <p class="title fs-4">Ingredient</p>
            <div class="d-lex gap-2">
                 <div v-for="(ing, index ) in recipesdetails.ingredients" :key="index" class="borde  text-centr">
                <p>{{index+1}}: {{ing}}</p>
            </div>
            </div>
        </div>
        <div class="ingredient">
            <p class="title fs-4">Instruction</p>
                 <div v-for="(ins, index ) in recipesdetails.instructions" :key="index" class="">
                <p>{{index+1}}: {{ins}}</p>
            </div>
        </div>
      </div>
</template>

<script setup>
    defineProps(['recipesdetails'])
</script>

<style>

</style>