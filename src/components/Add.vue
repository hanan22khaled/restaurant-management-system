<template>
  <HeaDer></HeaDer>
  <h1>Hello User ,Welcome on Add Restraunt Page</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name.." v-model=" restraunt.name">
    <input type="text" name="address" placeholder="Enter Address.." v-model="restraunt.address">
    <input type="text" name="contact" placeholder="Enter Contact.." v-model="restraunt.contact">

    <button type="button" v-on:click="addRest">Add New Restraunt</button>
  </form>
</template>
<script>
import HeaDer from "./Header.vue";
import axios from "axios";

export default {
  name: "AddVue",
  components: {
    HeaDer
  },
  data()
    {
      return{
        restraunt:{
          name:'',
          contact:'',
          address:'',

        }
      }
    },
    methods:{
     async addRest()
      {
        console.warn(this.restraunt)
        const result=await axios.post("http://localhost:3000/restraunt" , {
          name:this.restraunt.name,
          address:this.restraunt.address,
          contact:this.restraunt.contact,
        });

        if(result.status==201)
        {this.$router.push({name:'HomeVue'})}
        console.warn("result",result)
      }
    }
  
};
</script>
