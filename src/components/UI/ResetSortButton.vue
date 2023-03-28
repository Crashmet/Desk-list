<template>
  <button @click="handelResetSort" class="btn">
    Сбросить сортировку
  </button>
</template>

<script>
export default {
  name: "ResetSortButton",
  methods: {
    handelResetSort() {
      this.$emit("handelResetSort");
    }
  }
};
</script>

<style scoped>
.btn {
  max-height: 34px;
  padding: 8px 20px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: #684caf;
  border: 1px solid #ccc;
  /* border-radius: 16px; */
}

.btn:hover,
.btn:active {
  background: #c93e3e;
}
</style>
