<template>
  <button @click="handelShowModal" class="add-btn">
    {{ isShowModal ? "Отменить" : "Добавить" }}
  </button>
</template>

<script>
export default {
  name: "AddModalButton",
  props: {
    isShowModal: {
      type: Boolean
    }
  },
  methods: {
    handelShowModal() {
      this.$emit("handelShowModal", this.isShowModal);
    }
  }
};
</script>

<style scoped>
.add-btn {
  margin-bottom: 30px;
  padding: 12px 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #4caf50;
  border: 1px solid #ccc;
  border-radius: 16px;
}

.add-btn:hover,
.add-btn:active {
  background: #328136;
}
</style>
