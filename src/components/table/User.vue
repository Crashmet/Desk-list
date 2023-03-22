<template>
  <tr>
    <td>
      {{ user.name }}
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
th,
td {
  border: 1px solid #ccc;
  padding: 8px 15px;
  text-align: left;
}
</style>
