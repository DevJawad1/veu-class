<template>
    <div class="card col-12 col-md-8 mx-auto border-0">
        <table class="table table-striped">
            <thead>
                <tr class="d-flex">
                <th class="card col-1 border-0" scope="col">#</th>
                <th class="card col-8 border-0" scope="col">Content</th>
                <th class="card col-1 border-0" scope="col">userId</th>
                <th class="card col-2 border-0" scope="col">Completed</th>
                </tr>
            </thead>
        <tbody :key="index" v-for="(todo, index) in todos">
            <tr class="d-flex border">
                <td class="card col-1 border-0 " style="border-radius:0px">{{todo.id}}</td>
                <td class="card col-8 border-0 " style="border-radius:0px">{{todo.todo}}</td>
                <td class="card col-1 border-0 " style="border-radius:0px">{{todo.userId}}</td>
                <td class="card col-2 border-0 " style="border-radius:0px">{{todo.completed}}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script setup>
    import {useTodo} from "../store/todoStore.js";
    import {onMounted, ref, computed} from 'vue';
    import {storeToRefs} from 'pinia';
    const store = useTodo()
    onMounted(()=>{
        (store.getAllTodos())
    })
    console.log(storeToRefs(store));
    console.log(storeToRefs(store).todoCount);
    const todos = storeToRefs(store).todos
    console.log(todos);
    // const {todos} = storeToRefs(store)
</script>

<style>

</style>