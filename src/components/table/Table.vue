<template>
  <div>
    <table>
      <tr>
        <th @click="sortByUserName">
          Имя
        </th>
        <th @click="sortByUserPhone">
          Телефон
        </th>
      </tr>

      <User v-for="user in users" :key="user.id" :user="user" />
    </table>
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  name: "Table",
  components: {
    User
  },
  props: {
    users: {
      type: Array
    }
  },
  methods: {
    sortByUserName() {
      this.$emit("sortByUserName", this.users);
    },

    sortByUserPhone() {
      this.$emit("sortByUserPhone", this.users);
    }
  }
};
// const users = ref<Utilizer[]>(
//   JSON.parse(localStorage.getItem("users") || "[]")
</script>

<style scoped>
table {
  margin-bottom: 20px;
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #4caf50;
  color: white;
  font-weight: bold;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #ddd;
}
</style>
