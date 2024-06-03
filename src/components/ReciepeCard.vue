<template>
    <div class="card p-3 border-0 mt-0 mt-md-2">
        <div class="d-flex justify-content-between align-items-center">
            <p class="pt-2">{{recipesdetails.cuisine}} food</p>    
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#modal'+ recipesdetails.id">View</button>
        </div>
        
        <img :src="recipesdetails.image" alt="" class="img mt-1">
            <!-- <p style="margin-top:-25px; color:gold" class="fs-5">
                {{recipesdetails.rating}}
                <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
            </p> -->
        <div class="detail d-flex justify-content-between">
            <p class="pt-2 w-75">{{recipesdetails.name}}</p>   
            <p class="pt-2 w-25 text-end">{{recipesdetails.mealType[0]}}</p>   
        </div>
    </div>

    <div class="modal fade" :id="'modal'+ recipesdetails.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{recipesdetails.name}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Recipemodal :recipesdetails="recipesdetails"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import Recipemodal from '../components/Recipemodal.vue'
defineProps(['recipesdetails'])
</script>


<style>
    .img{
        width: 100%;
        height: 300px;
        transition: all 0.3s ease;
    }
    .card:hover .img{
        transform: rotate(5deg);
    }
</style>