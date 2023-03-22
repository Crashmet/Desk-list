<template>
  <div>
    <table>
      <tr>
        <th @click="sortByUserName(users)">
          Имя
        </th>
        <th @click="sortByUserPhone(users)">
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
  }
};
// const users = ref<Utilizer[]>(
//   JSON.parse(localStorage.getItem("users") || "[]")

// function sortByUserName(users: Utilizer[]) {
//   users.sort((a, b) => {
//     if (a.subordinates.length) {
//       sortByUserName(a.subordinates);
//     }
//     return a.name.localeCompare(b.name);
//   });
// }

// function sortByUserPhone(users: Utilizer[]) {
//   users.sort((a, b) => {
//     if (a.subordinates.length) {
//       sortByUserName(a.subordinates);
//     }
//     return a.phone.localeCompare(b.phone);
//   });
// }
</script>

<style scoped>
table {
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
