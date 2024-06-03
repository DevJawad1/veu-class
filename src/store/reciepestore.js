import axios from 'axios'
import {defineStore} from 'pinia'
export const usereciepe = defineStore('reciepestore', {
    state:()=>{
        return {
            reciepes:[]
        }
    },
    getters:{
        reciepeCount:(state)=>state.reciepes.length
    },
    actions:{
        getAllreciepes(){
            axios.get('https://dummyjson.com/recipes').then((response)=>{
                console.log(response.data.recipes);
                this.reciepes= response.data.recipes
                
                console.log(this.reciepes)
            })
        }
    }
})