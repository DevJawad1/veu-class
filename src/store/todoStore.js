import axios from 'axios'
import {defineStore} from 'pinia'
export const useTodo = defineStore('todostore', {
    state:()=>{
        return {
            todos:[]
        }
    },
    getters:{
        todoCount:(state)=>state.todos.length
    },
    actions:{
        getAllTodos(){
            axios.get('https://dummyjson.com/todos').then((response)=>{
                console.log(response.data.todos);
                this.todos= response.data.todos
            })
            // return getAllTodos()
        }
    }
})