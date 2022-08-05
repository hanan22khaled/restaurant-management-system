<template>
  <HeaDer></HeaDer>
  <h1>Hello User ,Welcome on Update Restraunt Page</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Enter Name.."
      v-model="restraunt.name"
    />
    <input
      type="text"
      name="address"
      placeholder="Enter Address.."
      v-model="restraunt.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter Contact.."
      v-model="restraunt.contact"
    />

    <button type="button" v-on:click="upRest">Update a Restraunt</button>
  </form>
</template>
<script>
import HeaDer from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateVue",
  components: {
    HeaDer,
  },
  data() {
    return {
      restraunt: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    async upRest() {
      const result = await axios.put(
        "http://localhost:3000/restraunt/" + this.$route.params.id,
        {
          name: this.restraunt.name,
          address: this.restraunt.address,
          contact: this.restraunt.contact,
        }
      );

      if (result.status == 200) {
        this.$router.push({ name: "HomeVue" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "UpdateVue" });
    }
    const result = await axios.get(
      "http://localhost:3000/restraunt/" + this.$route.params.id
    );
    console.warn(result.data);
    this.restraunt = result.data;
  },
};
</script>
