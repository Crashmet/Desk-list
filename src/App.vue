<template>
  <div id="app" class="container">
    <h1 class="header-title">Список родителей</h1>
    <add-modal-button
      :isShowModal="isShowModal"
      @handelShowModal="handelShowModal"
    />

    <Modal
      v-if="isShowModal"
      :users="dataUsers"
      @addNewUser="addNewUser"
      @handelCloseModal="isShowModal = false"
    />
    <Table
      :users="dataUsers"
      @sortByUserName="sortByUserName"
      @sortByUserPhone="sortByUserPhone"
    />
  </div>
</template>

<script>
import AddModalButton from "./components/table/AddModalButton.vue";
import Table from "./components/table/Table.vue";
import Modal from "./components/table/Modal.vue";

export default {
  name: "App",
  components: {
    AddModalButton,
    Table,
    Modal
  },

  data() {
    return {
      isShowModal: false,

      dataUsers: [
        {
          name: "Шамиль",
          phone: "+7 996 999-99-52",
          id: "1",
          chief: false,
          subordinates: [
            {
              name: "Рената",
              phone: "+7 999 999-99-96",
              id: "1.1",
              chief: false,
              subordinates: []
            },
            {
              name: "Алина",
              phone: "+7 899 999-99-34",
              id: "1.2",
              chief: false,
              subordinates: []
            },
            {
              name: "Яна",
              phone: "+7 993 999-99-92",
              id: "1.3",
              chief: false,
              subordinates: []
            }
          ]
        },
        {
          name: "Егор",
          phone: "+7 996 999-34-52",
          id: "4",
          chief: false,
          subordinates: [
            {
              name: "Рената",
              phone: "+7 999 999-99-96",
              id: "4.1",
              chief: false,
              subordinates: []
            },
            {
              name: "Алина",
              phone: "+7 899 999-99-34",
              id: "4.2",
              chief: false,
              subordinates: []
            },
            {
              name: "Яна",
              phone: "+7 993 999-99-92",
              id: "4.3",
              chief: false,
              subordinates: []
            }
          ]
        },
        {
          name: "Артем",
          phone: "+7 999 999-34-34",
          id: "2sads",
          chief: false,
          subordinates: [
            {
              name: "Рената",
              phone: "+7 999 999-99-96",
              id: "2.1",
              chief: false,
              subordinates: []
            },
            {
              name: "Алина",
              phone: "+7 899 999-99-34",
              id: "3.2",
              chief: false,
              subordinates: []
            },
            {
              name: "Яна",
              phone: "+7 993 999-99-92",
              id: "4.3",
              chief: false,
              subordinates: []
            }
          ]
        }
      ]
    };
  },

  created() {
    const dataUsers = localStorage.getItem("users-list");

    if (dataUsers) {
      this.dataUsers = JSON.parse(dataUsers);
    }
  },

  methods: {
    sortByUserName(users) {
      users.sort((a, b) => {
        if (a.subordinates.length) {
          this.sortByUserName(a.subordinates);
          this.sortByUserName(b.subordinates);
        }
        return a.name.localeCompare(b.name);
      });
    },

    sortByUserPhone(users) {
      users.sort((a, b) => {
        if (a.subordinates.length) {
          this.sortByUserName(a.subordinates);
          this.sortByUserName(b.subordinates);
        }
        return a.phone.localeCompare(b.phone);
      });
    },

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
  },

  watch: {
    dataUsers() {
      localStorage.setItem("users-list", JSON.stringify(this.dataUsers));
    }
  }
};
</script>

<style>
* {
  font-family: "open-sans", sans-serif;
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
