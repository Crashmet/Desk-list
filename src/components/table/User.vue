<template>
  <tr>
    <td>
      <div class="table-name">{{ user.name }}</div>

      <User v-for="user in user.subordinates" :key="user.id" :user="user" />
    </td>
    <td>
      {{ user.phone }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "User",
  components: {},
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.table-name {
  padding: 10px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px 15px;
  text-align: left;
}
</style>
