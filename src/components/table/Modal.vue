<template>
  <form @submit.prevent="handleFormSubmit">
    <div>
      <h1>Добавление пользователя</h1>
      <button @click="handelCloseModal" type="button">X</button>
    </div>

    <div>
      <div>
        <label for="name">Имя</label>
        <input
          required
          id="name"
          type="text"
          v-model="name"
          placeholder="Введите имя"
        />
      </div>

      <div>
        <label for="phone">Телефон</label>
        <input
          placeholder="+7 999 123-45-67"
          id="phone"
          required
          type="text"
          v-model="phone"
        />
      </div>

      <div>
        <label for="chief">Начальник</label>
        <select name="chief" id="chief" v-model="chief">
          <option value="null"></option>
          <option v-for="user in users" :value="user.name" :key="user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
    </div>

    <button type="submit">
      Сохранить
    </button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Modal",
  props: {
    users: {
      type: Array
    }
  },
  data() {
    return {
      name: "",
      phone: "",
      chief: null
    };
  },
  methods: {
    handelCloseModal() {
      this.$emit("handelCloseModal");
    },

    handleFormSubmit(data) {
      const newUser = {
        name: this.name,
        phone: this.phone,
        id: uuidv4(),
        chief: this.chief,
        subordinates: []
      };

      this.$emit("addNewUser", newUser);

      this.name = "";
      this.phone = "";
      this.chief = null;
    }
  }
};
</script>
