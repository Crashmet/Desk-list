<template>
  <Fragment>
    <tr>
      <td :style="indent">
        <div class="table-name">
          <span v-if="isUserSubordinates" class="table-name__child"></span>
          {{ userName }}
        </div>
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
    isUserSubordinates() {
      return this.user.subordinates.length > 0 || this.depth > 0;
    },
    userName() {
      return this.user.marker + " " + this.user.name;
    },
    indent() {
      return { "padding-left": `${this.depth * 40 + 16}px` };
    }
  }
};
</script>

<style scoped>
.table-name {
  position: relative;
  padding: 10px;
  padding-left: 30px;
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

.table-name__child {
  position: absolute;
  background-image: none;
  bottom: 38%;
  left: 0%;
  width: 6.5px;
  height: 6.5px;
  border: 2px solid;
  border-color: transparent transparent #328136 #328136;
  transform: rotate(-135deg);
}
</style>
