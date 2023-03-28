<template>
  <Fragment v-if="user.subordinates">
    <tr>
      <td :style="indent">
        <div class="table-name">{{ userName }}</div>
      </td>
      <td>
        {{ user.phone }}
      </td>
    </tr>
    <User
      v-for="user in user.subordinates"
      :key="user.id"
      :user="user"
      :depth="depth + 1"
    />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "User",
  components: {
    Fragment
  },
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    depth: {
      type: Number
    }
  },
  computed: {
    userName() {
      return this.user.marker + " " + this.user.name;
    },
    indent() {
      return { "padding-left": `${this.depth * 20 + 16}px` };
    }
  }
};
</script>

<style scoped>
.table-name {
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px 15px;
  text-align: left;
}
</style>
