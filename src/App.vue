<template>
  <div class="container">
    <h1 class="header-title">Список родителей</h1>
    <add-button :isShowModal="isShowModal" @handelShowModal="handelShowModal" />

    <Modal
      v-if="isShowModal"
      :users="dataUsers"
      @addNewUser="addNewUser"
      @handelCloseModal="isShowModal = false"
    />
    <Table :users="dataUsers" />
  </div>
</template>

<script>
import AddButton from "./components/table/AddButton.vue";
import Table from "./components/table/Table.vue";
import Modal from "./components/table/Modal.vue";

export default {
  name: "App",
  components: {
    AddButton,
    Table,
    Modal
  },

  data() {
    return {
      isShowModal: false,

      dataUsers: [
        {
          name: "Shamil",
          phone: "+7 999 999-99-99",
          id: "1",
          chief: false,
          subordinates: [
            {
              name: "renata",
              phone: "+7 999 999-99-99",
              id: "2",
              chief: false,
              subordinates: []
            }
          ]
        }
      ]
    };
  },

  methods: {
    handelShowModal() {
      this.isShowModal = !this.isShowModal;
    },

    addNewUser(item) {
      const { chief } = item;

      if (chief) {
        this.addNewSubordinates(item);
        return;
      }

      this.dataUsers.push(item);
    },

    addNewSubordinates(item) {
      console.log(item);
      this.dataUsers.forEach(el => {
        if (el.name === item.chief) {
          el.subordinates.push(item);
        }
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
}

.container {
  margin: 0 auto;
  padding: 50px;
  max-width: 600px;
  text-align: center;
}

.header-title {
  font-size: 40px;
  margin-bottom: 60px;
}
</style>
