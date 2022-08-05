<template>
  <HeaDer></HeaDer>
  <h1>Hello {{ name }} ,Welcome on Home Page</h1>
  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Addresss</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.contact}}</td>
    <td>{{item.address}}</td>
    <td><router-link :to="'/update/'+item.id">Update</router-link></td>
 
    </tr>
  </table>
</template>
<script>
import HeaDer from "./Header.vue";
import axios from "axios";
export default {
  name: "HomeVue",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    HeaDer,
  },

 async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user);
    if (!user) {
      this.$router.push({ name: "HomeVue" });
    }

    let result = await axios.get("http://localhost:3000/restraunt");
    console.warn(result);
    this.restaurant = result.data;
  },
};
</script>

<style>
td
{
  width: 160px ;
  height: 40px;
}
table
{
  margin: 0 auto;
}



</style>
