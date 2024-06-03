<script setup>
  import {ref, computed, reactive} from 'vue'
  const name= "Ade"
  const num = ref(0)

  const students= reactive( [
    {id:1,  name:"Tolani",    paid:true,},
    {id:2,  name:"Oyin",      paid:false,},
    {id:3,  name:"Victor",    paid:true,},
    {id:5,  name:"Rohemaat",  paid:false,},
    {id:4,  name:"Saheed",    paid:true,},
  ])
  const day=ref("tuesday")
  const disp=true
   const fff=()=>{

   }
  const togglePaid=(index)=>{
    students[index].paid=!students[index].paid
    console.log(students)
  }

  const paidStudents= computed(()=>{
    return students.filter(student=>student.paid)
  })
</script>

<template>
  <h2>Helo World Welcome to VUE {{name}}</h2>
  <h2>{{num}}</h2>
  <button @click="num++"> Increase number </button>

  <table class="table">
    <tr scope="row" >
      <td>S/N</td>
      <td>Name</td>
      <td>Status</td>
    </tr>
    <tr v-for="(student, index) in students" v-bind:key="students.id" :class  ="{'paid': student.paid, 'notpaid': !student.paid}" style="height:40px">
      <td class="" >{{student.id}}</td>
      <td class="w-50">{{student.name}}</td>
      <td class="w-100 d-flex justify-content-between px-1" >{{student.paid?"Paid":"Not paid"}} <button @click="togglePaid(index)" style="align-items:center">
      {{student.paid?'Paid':'Pay'}}</button></td>
    </tr>
  </table>

  <div v-for="student in paidStudents" :key="student.id">
    <p>{{student.name}}</p>
  </div>
  

<div v-if="day=='tuesday'">Today is tuesday </div>
<div v-else if="day=='wednesday'">Today is wednesday </div>
<div v-else>Today is thursday </div>
<div v-show ="disp">I showed </div>
</template>
<style scoped>
  .paid{
    background-color: rgba(0, 128, 0, 0.419) !important;
  }
  .notpaid{
    background-color: rgba(255, 0, 0, 0.385);
  }
  button{
    border:none;
    width:50px
  }
</style>
