<template>
  <div class="tooltip-container">
    <h1>Руководство по управлению таблицей</h1>
    <button @click="handleCloseTooltip" class="close"></button>
    <p>
      "Кликните по этой <span class="text__color_green">кнопке</span> что бы
      добавить нового пользователя"
    </p>
  </div>
</template>

<script>
export default {
  name: "TooltipAddBtn",
  props: {
    text: String
  },
  methods: {
    handleCloseTooltip() {
      this.$emit("handleCloseTooltip");
    }
  }
};
</script>

<style scoped>
h1 {
  padding: 25px 25px 20px;
  margin-right: 30px;
  font-size: 25px;
  font-weight: 500;
  color: #2c2c2c;
}

.close {
  cursor: pointer;
}

.close:before,
.close:after {
  content: "";
  position: absolute;
  height: 13px;
  width: 13px;
  top: 26px;
  right: 31px;
  border-top: 2px solid #7c7c7c;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.close:before {
  right: 40px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.tooltip-container {
  position: absolute;
  z-index: 100;
  width: 400px;
  height: 238px;
  right: 130%;
  top: -5px;
  background-color: #f3f3f3;
  border-radius: 6px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.4);
}
.tooltip-container:before {
  content: "";
  position: absolute;
  right: -14px;
  top: 28px;
  border-style: solid;
  border-width: 10px 14px 10px 0;
  border-color: rgba(0, 0, 0, 0) #f3f3f3 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  transform: rotate(180deg);
}
.tooltip-container p {
  padding: 8px 20px 20px;
  max-width: 350px;
  font-size: 16px;
  color: #767678;
  font-weight: 500;
  line-height: 28px;
  float: left;
  margin: 0;
}

.text__color_green {
  padding: 5px;
  font-size: 17px;
  color: #fff;
  background: #328136;
}
</style>
