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
      :isByUserNameDown="isByUserNameDown"
      :isByUserPhoneDown="isByUserPhoneDown"
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
      isByUserNameDown: false,
      isByUserPhoneDown: false,

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
            }
          ]
        },
        {
          name: "Артем",
          phone: "+7 999 999-34-34",
          id: "2sads",
          chief: false,
          subordinates: []
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
      this.isByUserNameDown = this.isByUserNameDown ? false : true;

      if (this.isByUserNameDown) {
        this.sortByUserNameDown(users);
      } else {
        this.sortByUserNameUp(users);
      }
    },

    sortByUserNameDown(users) {
      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.sortByUserNameDown(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.sortByUserNameDown(b.subordinates);
        }

        return a.name.localeCompare(b.name);
      });
    },

    sortByUserNameUp(users) {
      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.sortByUserNameUp(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.sortByUserNameUp(b.subordinates);
        }

        return b.name.localeCompare(a.name);
      });
    },

    sortByUserPhone(users) {
      this.isByUserPhoneDown = this.isByUserPhoneDown ? false : true;

      if (this.isByUserPhoneDown) {
        this.sortByUserPhoneDown(users);
      } else {
        this.sortByUserPhoneUp(users);
      }
    },

    sortByUserPhoneDown(users) {
      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.sortByUserPhoneDown(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.sortByUserPhoneDown(b.subordinates);
        }

        return a.phone.localeCompare(b.phone);
      });
    },

    sortByUserPhoneUp(users) {
      users.sort((a, b) => {
        if (a.subordinates.length > 0) {
          this.sortByUserPhoneUp(a.subordinates);
        }

        if (b.subordinates.length > 0) {
          this.sortByUserPhoneUp(b.subordinates);
        }

        return b.phone.localeCompare(a.phone);
      });
    },

    handelShowModal() {
      this.isShowModal = !this.isShowModal;
    },

    addNewUser(item) {
      const { chief, chiefId } = item;

      console.log(chiefId);

      if (chief) {
        this.addNewSubordinates(this.dataUsers, item);
        return;
      }

      this.dataUsers.push(item);

      this.updateLocalStorage();
    },

    addNewSubordinates(data, item) {
      data.forEach(el => {
        if (el.name === item.chief && el.id === item.chiefId) {
          el.subordinates.push(item);
          return;
        }

        if (el.subordinates.length > 0) {
          this.addNewSubordinates(el.subordinates, item);
        }
      });

      this.updateLocalStorage();
    },

    updateLocalStorage() {
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
}

.container {
  margin: 0 auto;
  padding: 50px;
  max-width: 900px;
  text-align: center;
}

.header-title {
  font-size: 40px;
  margin-bottom: 60px;
}
</style>
