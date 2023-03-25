<template>
  <div>
    <table>
      <tr>
        <th @click="sortByUserName">
          <span class="table-title">Имя</span>
          <span :class="chevronNameClass"></span>
        </th>
        <th @click="sortByUserPhone">
          <span class="table-title">Телефон</span>
          <span :class="chevronPhoneClass"></span>
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
    },
    isByUserNameDown: {
      type: Boolean
    },
    isByUserPhoneDown: {
      type: Boolean
    }
  },
  data() {
    return {
      chevronNameClass: "table-sort-neutral",
      chevronPhoneClass: "table-sort-neutral"
    };
  },

  methods: {
    sortByUserName() {
      this.$emit("sortByUserName", this.users);
    },

    sortByUserPhone() {
      this.$emit("sortByUserPhone", this.users);
    }
  },
  watch: {
    isByUserNameDown() {
      this.chevronNameClass = this.isByUserNameDown
        ? "table-sort-down"
        : "table-sort-up";
    },

    isByUserPhoneDown() {
      this.chevronPhoneClass = this.isByUserPhoneDown
        ? "table-sort-down"
        : "table-sort-up";
    }
  }
};
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
  position: relative;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
}

th:hover,
th:active,
th:focus {
  background: #328136;
}

.table-title {
  margin-left: 15px;
}

.table-sort-neutral {
  position: absolute;
  background-image: none;
  bottom: 50%;
  right: 6%;
  width: 8px;
  height: 8px;
  border: 2px solid;
  border-color: transparent transparent #ffffff36 #ffffff36;
  transform: rotate(-45deg);
}

.table-sort-down {
  position: absolute;
  background-image: none;
  bottom: 50%;
  right: 6%;
  width: 8px;
  height: 8px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-45deg);
}

.table-sort-up {
  position: absolute;
  background-image: none;
  bottom: 30%;
  right: 6%;
  width: 8px;
  height: 8px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-225deg);
}
</style>
